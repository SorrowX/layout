import { markNodeData, objectAssign } from './util'

const getPropertyFromData = function(node, prop) {
    const props = node.store.props
    const data = node.data || {}
    const config = props[prop]

    if (typeof config === 'function') {
        return config(data, node)
    } else if (typeof config === 'string') {
        return data[config]
    } else if (typeof config === 'undefined') {
        const dataProp = data[prop]
        return dataProp === undefined ? '' : dataProp
    }
}

function reInitChecked(node) {
    if (node.childNodes.length === 0) return

    const { all, none, half } = getChildState(node.childNodes)
    if (all) {
        node.checked = true
        node.indeterminate = false
    } else if (half) {
        node.checked = false
        node.indeterminate = true
    } else if (none) {
        node.checked = false
        node.indeterminate = false
    }

    const parent = node.parent
    if (!parent || parent.level === 0) return

    if (!node.store.checkStrictly) {
        reInitChecked(parent)
    }
}

function getChildState(nodes) {
    let all = true, // 都选中
        none = true, // 都未选中
        allWithoutDisable = true // ?
    for (let i = 0, j = nodes.length; i < j; i++) {
        const n = nodes[i]
        if (n.checked !== true || n.indeterminate) {
            all = false
            if (!n.disabled) {
                allWithoutDisable = false
            }
        }
        if (n.checked !== false || n.indeterminate) {
            none = false
        }
    }
    return { all, none, allWithoutDisable, half: !all && !none }
}

let nodeIdSeed = 0

export default class Node {
    constructor(options) {
        this.id = nodeIdSeed++
        this.text = null
        this.checked = false
        this.indeterminate = false // 不确定状态
        this.data = null
        this.expanded = false
        this.parent = null
        this.visible = true
        this.isCurrent = false

        for (let name in options) {
            if (options.hasOwnProperty(name)) {
                this[name] = options[name]
            }
        }

        this.level = 0
        this.loaded = false
        this.childNodes = []
        this.loading = false

        if (this.parent) {
            this.level = this.parent.level + 1
        }

        const store = this.store
        if (!store) {
            throw new Error('[Node]store is required!')
        }

        store.registerNode(this)

        const props = store.props
        if (props && typeof props.isLeaf !== 'undefined') {
            const isLeaf = getPropertyFromData(this, 'isLeaf')
            if (typeof isLeaf === 'boolean') {
                this.isLeafByUser = isLeaf
            }
        }

        if (store.lazy !== true && this.data) {
            this.setData(this.data)

            if (store.defaultExpandAll) {
                this.expanded = true    
            }
        } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
            this.expand()
        }
        if (!Array.isArray(this.data)) {
            markNodeData(this, this.data)
        }
        if (!this.data) return
        const defaultExpandedKeys = store.defaultExpandedKeys
        const key = store.key
        if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) { // ?
            this.expand(null, store.autoExpandParent)
        }

        if (key && store.currentNodeKey !== undefined && this.key === store.currentNodeKey) {
            store.currentNode = this
            store.currentNode.isCurrent = true
        }

        if (store.lazy) {
            store._initDefaultCheckedNode(this) // todo
        }

        this.updateLeafState()
    }

    get label() {
        return getPropertyFromData(this, 'label')
    }

    get key() {
        const nodeKey = this.store.key
        if (nodeKey && this.data) {
            return this['data'][nodeKey]
        }
    }

    setData(data) {
        if (!Array.isArray(data)) {
            markNodeData(this, data)
        }

        this.data = data
        this.childNodes = []

        let children
        if (this.level === 0 && this.data instanceof Array) {
            children = this.data
        } else {
            children = getPropertyFromData(this, 'children') || []
        }

        for (let i = 0, j = children.length; i < j; i++) {
            this.insertChild({ data: children[i] })
        }
    }

    insertChild(child, index, batch) {
        if (!child) throw new Error('insertChild error: child is required.')

        if (!(child instanceof Node)) {
            if (!batch) { // ?
                const children = this.getChildren(true)
                if (children.indexOf(child.data) === -1) {
                    if (typeof index === 'undefined' || index < 0) { 
                        children.push(child.data)
                    } else {
                        children.splice(index, 0, child.data)
                    }
                }
            }
            objectAssign(child, {
                parent: this,
                store: this.store
            })
            child = new Node(child)
        }

        child.level = this.level + 1

        if (typeof index === 'undefined' || index < 0) { 
            this.childNodes.push(child)
        } else {
            this.childNodes.splice(index, 0, child)
        }

        this.updateLeafState()
    }

    expand(callback, expandParent) {
        const done = () => {
            if (expandParent) {
                let parent = this.parent
                while(parent.level > 0) {
                    parent.expanded = true
                    parent = parent.parent
                }
            }
            this.expanded = true
            callback && callback()
        }
        if (this.shouldLoadData()) {
            this.loadData((data) => {
                if (data instanceof Array) {
                    if (this.checked) {
                        this.setChecked(true, true)
                    } else if (!this.store.checkStrictly) {
                        reInitChecked(this)
                    }
                }
                done()
            })
        } else {
            done()
        }
    }

    setChecked(value, deep, recursion, passValue) {
        this.indeterminate = value === 'half'
        this.checked = value === true

        if (this.store.checkStrictly) return // // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false

        if (!(this.shouldLoadData() && !this.store.checkDescendants)) { // 不load数据 或者 load数据且不检查后代
            let { all, allWithoutDisable } = getChildState(this.childNodes)

            if (!this.isLeaf && (!all && allWithoutDisable)) {
                this.checked = false
                value = false
            }

            const handleDescendants = () => {
                if (deep) {
                    const childNodes = this.childNodes
                    for (let i = 0, j = childNodes.length; i < j; i++) {
                        const child = childNodes[i]
                        passValue = passValue || value !== false
                        const isCheck = child.disabled ? child.checked : passValue
                        child.setChecked(isCheck, deep, true, passValue)
                    }
                    const { all, half } = getChildState(childNodes)
                    if (!all) {
                        this.checked = all
                        this.indeterminate = half
                    }
                }
            }

            if (this.shouldLoadData()) {
                this.loadData(() => {
                    handleDescendants()
                    reInitChecked(this)
                }, {
                    checked: value !== false
                })
            } else {
                handleDescendants()
            }
        }

        const parent = this.parent
        if (!parent || parent.level === 0) return

        if (!recursion) {
            reInitChecked(parent)
        }
    }

    shouldLoadData() {
        return this.store.lazy === true && this.store.load && !this.loaded
    }

    loadData(callback, defaultProps = {}) {
        const store = this.store
        if (
            store.lazy === true &&
            store.load &&
            !this.loaded &&
            (
                !this.loading ||
                Object.keys(defaultProps).length
            )
        ) {
            this.loading = true

            const resolve = children => {
                this.loading = false
                this.loaded = true
                this.childNodes = []

                this.doCreateChildren(children, defaultProps)
                this.updateLeafState()
                callback && callback.call(this, children)
            }

            store.load(this, resolve)
        } else {
            callback && callback.call(this)
        }
    }

    updateLeafState() {
        if (
            this.store.lazy === true &&
            this.loaded !== true &&
            typeof this.isLeafByUser !== 'undefined'
        ) {
            this.isLeaf = this.isLeafByUser
            return
        }

        const childNodes = this.childNodes
        if (
            !this.store.lazy ||
            (this.store.lazy === true && this.loaded === true)
        ) {
            this.isLeaf = !childNodes || childNodes.length === 0
            return
        }

        this.isLeaf = false
    }

    getChildren(forceInit = false) {
        if (this.level === 0) return this.data
        const data = this.data
        if (!data) return null

        const props = this.store.props
        let children = 'children'
        if (props) {
            children = props.children || 'children'
        }

        if (data[children] === undefined) {
            data[children] = []
        }

        if (forceInit && !data[children]) {
            data[children] = []
        }
        return data[children]
    }

    doCreateChildren(array, defaultProps = {}) {
        array.forEach(item => {
            this.insertChild(objectAssign({ data: item }, defaultProps), undefined, true)
        })
    }

    updateChildren() {

    }

    collapse() {
        this.expanded = false
    }
}