export const NODE_KEY = '$treeNodeId'

export const markNodeData = function(node, data) {
    if (!data || data[NODE_KEY]) return
    Object.defineProperty(data, NODE_KEY, {
        value: node.id,
        enumerable: false,
        configurable: false,
        writable: false
    })
}

export const objectAssign = function(target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {}
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop]
                if (value !== undefined) {
                    target[prop] = value
                }
            }
        }
    }
    
    return target
}

export const getNodeKey = function(key, data) {
    if (!key) return data[NODE_KEY]
    return data[key]
}