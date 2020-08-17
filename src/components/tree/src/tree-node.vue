<template>
    <div role="lay-tree-item" class="lay-tree-node">
        <div class="el-tree-node__content" :style="{ 'padding-left': (node.level - 1) * tree.indent + 'px' }">
            <span 
                @click.stop="handleExpandIconClick"
                class="el-tree-node__expand-icon lay-arrow-right"
            >
            </span>
            <span>{{ node.label }}</span>
        </div>
        <lay-collapse-transition>
            <div 
                role="group" 
                class="el-tree-node__children"
                v-if="!renderAfterExpand || childNodeRendered"
                v-show="expanded"
            >
                <lay-tree-node
                    v-for="child in node.childNodes"
                    :key="getNodeKey(child)"
                    :render-after-expand="renderAfterExpand"
                    :show-checkbox="showCheckbox"
                    :render-content="renderContent"
                    :node="child"
                    @node-expand="handleChildNodeExpand"
                >
                </lay-tree-node>
            </div>
        </lay-collapse-transition>
    </div>
</template>

<script>
    import LayCollapseTransition from '@/components/transitions/index'
    import { getNodeKey } from './util'
    import Emitter from '@/mixins/emitter'

    export default {
        name: 'LayTreeNode',
        components: { LayCollapseTransition },
        mixins: [ Emitter ],
        props: {
            node: {
                type: Object,
                default() {
                    return {}
                }
            },
            props: {
                type: Object,
                default() {
                    return {}
                }
            },
            renderContent: Function,
            renderAfterExpand: {
                type: Boolean,
                default: false
            },
            showCheckbox: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                tree: null,
                expanded: false,
                childNodeRendered: false
            }
        },
        watch: {
            'node.expanded'(val) {
                if (val) {
                    this.childNodeRendered = true
                }
                this.$nextTick(() => this.expanded = val)
            }
        },
        methods: {
            getNodeKey(node) {
                return getNodeKey(this.tree.nodeKey, node.data)
            },
            handleChildNodeExpand(nodeData, node, instance) {
                this.broadcast('ElTreeNode', 'tree-node-expand', node)
                this.tree.$emit('node-expand', nodeData, node, instance)
            },
            handleExpandIconClick() {
                if (this.node.isLeaf) return
                if (this.expanded) {
                    this.tree.$emit('node-collapse', this.node.data, this.node, this)
                    this.node.collapse()
                } else {
                    this.node.expand()
                    this.$emit('node-expand', this.node.data, this.node, this)
                }
            }
        },
        created() { // todo
            const parent = this.$parent

            if (parent.isTree) {
                this.tree = parent
            } else {
                this.tree = parent.tree
            }

            const tree = this.tree
            if (!tree) {
                console.warn('Can not find node\'s tree.');
            }

            const props = tree.props || {}
            const childrenKey = props['children'] || 'children'

            this.$watch(`node.data.${childrenKey}`, () => {
                this.node.updateChildren()
            })

            if (this.node.expanded) {
                this.expanded = true
                this.childNodeRendered = true
            }

            if (this.tree.accordion) {
                this.$on('tree-node-expand', node => {
                    if (this.node !== node) {
                        this.node.collapse()
                    }
                })
            }
        }
    }
</script>