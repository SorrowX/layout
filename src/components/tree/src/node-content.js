import Node from './store/node'

export default {
    name: 'NodeContent',
    props: {
        node: {
            required: true
        }
    },
    render(h) {
        const createSpanVNode = (text) => {
            return h('span', { class: 'lay-tree-node__label' }, text)
        }
        
        const node = this.node,
            treeNode = this.$parent,
            tree = treeNode.tree,
            renderContent = treeNode.renderContent,
            defaultScopedSlots = tree.$scopedSlots.default
        const { data, store } = node
        if (node instanceof Node) {
            if (renderContent) {
                return renderContent.call(treeNode._renderProxy, h, { data, node, store })
            } else {
                return defaultScopedSlots
                    ? defaultScopedSlots.call(tree, { data, node, store })
                    : createSpanVNode(node.label)
            }
        } else {
            return createSpanVNode(`node type error`)
        }
    }
}