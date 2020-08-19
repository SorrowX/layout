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

    }

    _initDefaultCheckedNode() {
        
    }

    registerNode() {

    }

    setCurrentNode(node) {
        const preCurrentNode = this.currentNode
        if (preCurrentNode) {
            preCurrentNode.isCurrent = false
        }
        this.currentNode = node
        this.currentNode.isCurrent = true
    }
}