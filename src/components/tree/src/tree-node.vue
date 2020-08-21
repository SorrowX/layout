<template>
    <div 
        role="tree-item" 
        class="lay-tree-node"
        :class="[
            {
                'is-current' : node.isCurrent
            }
        ]"
        @click.stop="handleClick"
    >
        <div class="lay-tree-node__content" :style="{ 'padding-left': (node.level - 1) * tree.indent + 'px' }">
            <span 
                @click.stop="handleExpandIconClick"
                :class="[
                    'lay-tree-node__expand-icon',
                    tree.iconClass ? tree.iconClass : 'lay-default-icon-right',
                    {
                        'is-leaf': node.isLeaf,
                        expanded: !node.isLeaf && expanded
                    }
                ]"
            >
            </span>
            <lay-checkbox
                v-if="showCheckbox"
                v-model="node.checked"
                :indeterminate="node.indeterminate"
                :disabled="!!node.disabled"
                @click.native.stop
                @change="handleCheckChange"
            >
            </lay-checkbox>
            <span v-if="node.loading" class="lay-tree-node__loading-icon lay-icon-loading"></span>
            <node-content :node="node"></node-content>
        </div>
        <lay-collapse-transition>
            <div 
                role="group"
                class="lay-tree-node__children"
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
    import Checkbox from '@/components/checkbox/index'
    import NodeContent from './node-content'
    import { getNodeKey } from './store/util'
    import Emitter from '@/mixins/emitter'

    export default {
        name: 'LayTreeNode',
        components: { LayCollapseTransition, NodeContent, LayCheckbox: Checkbox.LayCheckbox },
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
                this.broadcast('lay-tree-node', 'tree-node-expand', node)
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
            },
            handleClick() {
                const store = this.tree.store
                store.setCurrentNode(this.node)
                this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode)
                this.tree.currentNode = this
                if (this.tree.expandOnClickNode) {
                    this.handleExpandIconClick()
                }
                if (this.tree.checkOnClickNode && !this.node.disabled) {
                    this.handleCheckChange(null, {
                        target: { checked: !this.node.checked }
                    })
                }
                this.tree.$emit('node-click', this.node.data, this.node, this)
            },

            handleCheckChange(value, evt) {
                this.node.setChecked(value || evt.target.checked, !this.tree.checkStrictly)
                this.$nextTick(() => {
                    const store = thi.tree.store
                    this.tree.$emit('check', this.node.data, {
                        checkedNodes: store.getCheckedNodes(),
                        checkedKeys: store.getCheckedKeys(),
                        halfCheckedNodes: store.getHalfCheckedNodes(),
                        halfCheckedKeys: store.getHalfCheckedKeys()
                    })
                })
            }
        },
        created() {
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