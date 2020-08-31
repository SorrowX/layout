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
}