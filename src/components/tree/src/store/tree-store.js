import Node from './node'
export default class TreeStore {
    constructor(options) {
        this.currentNode = null
        this.currentNodeKey = null

        for (let option in options) {
            if (options.hasOwnProperty(option)) {
                this[option] = options[option]
            }
        }

        this.nodesMap = {}

        this.root = new Node({
            data: this.data,
            store: this
        })

        if (this.lazy && this.load) {
            const loadFn = this.load
            loadFn(this.root, data => {
                this.root.doCreateChildren(data)
                this._initDefaultCheckedNodes()
            })
        } else {
            this._initDefaultCheckedNodes()
        }
    }

    setData(newVal) {
        const changed = newVal !== this.root.data
        if (changed) {
            this.root.setData(newVal)
            this._initDefaultCheckedNodes()
        } else {
            this.root.updateChildren()
        }
    }

    _initDefaultCheckedNodes() {
        const defaultCheckedKeys = this.defaultCheckedKeys || []
        const nodesMap = this.nodesMap

        defaultCheckedKeys.forEach(nodeKey => {
            const node = nodesMap[nodeKey]
            if (node) {
                node.setChecked(true, !this.checkStrictly)
            }
        })
    }

    _initDefaultCheckedNode() {
        
    }

    registerNode(node) {
        const key = this.key
        if (!key || !node || !node.data) return

        const nodeKey = node.key
        if (nodeKey !== undefined) this.nodesMap[node.key] = node
    }

    deregisterNode(node) {
        const key = this.key
        if (!key || !node || !node.data) return

        node.childNodes.forEach(child => {
            this.deregisterNode(child)
        })

        delete this.nodesMap[node.key]
    }

    setCurrentNode(node) {
        const preCurrentNode = this.currentNode
        if (preCurrentNode) {
            preCurrentNode.isCurrent = false
        }
        this.currentNode = node
        this.currentNode.isCurrent = true
    }

    getCheckedNodes(leafOnly = false, includeHalfChecked = false) {
        const checkedNodes = []
        const traverse = function(node) {
            const childNodes = node.root ? node.root.childNodes : node.childNodes

            childNodes.forEach(child => {
                if (
                    (
                        child.checked ||
                        (includeHalfChecked && child.indeterminate)
                    ) &&
                    (
                        !leafOnly ||
                        (leafOnly && child.isLeaf)
                    )
                ) {
                    checkedNodes.push(child.data)
                }

                traverse(child)
            })
        }

        traverse(this)

        return checkedNodes
    }

    getCheckedKeys(leafOnly = false) {
        return this.getCheckedNodes(leafOnly).map(data => (data || {})[this.key])
    }

    getHalfCheckedNodes() {
        const nodes = []
        const traverse = function(node) {
            const childNodes = node.root ? node.root.childNodes : node.childNodes

            childNodes.forEach((child) => {
                if (child.indeterminate) {
                    nodes.push(child.data)
                }

                traverse(child)
            })
        }
        traverse(this)
        return nodes
    }

    getHalfCheckedKeys() {
        return this.getHalfCheckedNodes().map(data => (data || {})[this.key])
    }

    setCheckedNodes(array, leafOnly = false) {
        const key = this.key
        const checkedKeys = {}
        array.forEach(item => {
            checkedKeys[(item || {})[key]] = true
        })

        this._setCheckedKeys(key, leafOnly, checkedKeys)
    }

    setCheckedKeys(keys, leafOnly = false) {
        this.defaultCheckedKeys = keys
        const key = this.key
        const checkedKeys = {}
        keys.forEach((key) => {
            checkedKeys[key] = true
        })
    
        this._setCheckedKeys(key, leafOnly, checkedKeys)
    }

    _setCheckedKeys(key, leafOnly = false, checkedKeys) {
        const allNodes = this._getAllNodes().sort((a, b) => b.level - a.level)
        const cache = Object.create({})
        const keys = Object.keys(checkedKeys)
        allNodes.forEach(node => node.setChecked(false, false))
        for (let i = 0, j = allNodes.length; i < j; i++) {
            const node = allNodes[i]
            const nodeKey = String(node['data'][key])
            let checked = keys.includes(nodeKey)

            if (!checked) {
                if (node.checked && !cache[nodeKey]) {
                    node.setChecked(false, false)
                }
                continue
            }

            let parent = node.parent
            while(parent && parent.level > 0) {
                cache[parent['data'][key]] = true
                parent = parent.parent
            }

            if (node.isLeaf || this.checkStrictly) {
                node.setChecked(true, false)
                continue
            }

            node.setChecked(true, true)

            if (leafOnly) {
                node.setChecked(false, false)

                function traverse(node) {
                    const childNodes = node.childNodes
                    childNodes.forEach(node => {
                        if (!node.isLeaf) {
                            node.setChecked(false, false)
                        }
                        traverse(node)
                    })
                }
                traverse(node)
            }
        }

    }

    _getAllNodes() {
        const allNodes = []
        const nodesMap = this.nodesMap
        for (let key in nodesMap) {
            if (nodesMap.hasOwnProperty(key)) {
                allNodes.push(nodesMap[key])
            }
        }
        return allNodes
    }

    setDefaultCheckedKey(newVal) {
        if (newVal !== this.defaultCheckedKeys) {
            this.defaultCheckedKeys = newVal
            this._initDefaultCheckedNodes()
        }
    }

    _initDefaultCheckedNodes() {
        const defaultCheckedKeys = this.defaultCheckedKeys || []
        const nodesMap = this.nodesMap
    
        defaultCheckedKeys.forEach((checkedKey) => {
            const node = nodesMap[checkedKey]
        
            if (node) {
                node.setChecked(true, !this.checkStrictly)
            }
        })
    }

    filter(value) {
        const filterNodeMethod = this.filterNodeMethod
        const lazy = this.lazy
        const traverse = function(node) {
            const childNodes = node.root ? node.root.childNodes : node.childNodes

            childNodes.forEach(child => {
                child.visible = filterNodeMethod.call(child, value, child.data, child)
                traverse(child)
            })

            if (!node.visible && childNodes.length) {
                let allHidden = true
                allHidden = !childNodes.some(child => child.visible)

                if (node.root) {
                    node.root.visible = allHidden === false
                } else {
                    node.visible = allHidden === false
                }
            }

            if (!value) return

            if (node.visible && !node.isLeaf && !lazy) node.expand()

        }
        traverse(this)
    }
}