<template>
    <div role="tree" class="lay-tree">
        <lay-tree-node
            v-for="child in root.childNodes"
            :key="getNodeKey(child)"
            :node="child"
            :props="props"
            :render-after-expand="renderAfterExpand"
            :show-checkbox="showCheckbox"
            :render-content="renderContent"
            @node-expand="handleNodeExpand"
        >
        </lay-tree-node>
        <div v-if="isEmpty" class="lay-tree__empty-block">
            <span class="lay-tree__empty-text">{{ emptyText }}</span>
        </div>
    </div>
</template>

<script>
    import LayTreeNode from './tree-node'
    import TreeStore from './store/tree-store'
    import { getNodeKey } from './store/util'
    import Emitter from '@/mixins/emitter'

    export default {
        name: 'LayTree',
        components: { LayTreeNode },
        mixins: [ Emitter ],
        props: {
            data: { // 展示数据
                type: Array
            },
            emptyText: { // 内容为空的时候展示的文本
                type: String,
                default() {
                    return '暂无数据'
                }
            },
            renderAfterExpand: { // 是否在第一次展开某个树节点后才渲染其子节点
                type: Boolean,
                default: true
            },
            nodeKey: String, // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
            checkStrictly: Boolean,  // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
            defaultExpandAll: Boolean, // 是否默认展开所有节点
            expandOnClickNode: { // 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。
                type: Boolean,
                default: true
            },
            checkOnClickNode: Boolean, // 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。
            checkDescendants: { // 是否检查后代
                type: Boolean,
                default: false
            },
            autoExpandParent: { // 展开子节点的时候是否自动展开父节点
                type: Boolean,
                default: true
            },
            defaultCheckedKeys: Array, // 默认勾选的节点的 key 的数组
            defaultExpandedKeys: Array, // 默认展开的节点的 key 的数组
            currentNodeKey: [String, Number], //  当前选中的节点
            renderContent: Function, // 树节点的内容区的渲染 Function	Function(h, { node, data, store }
            showCheckbox: { // 节点是否可被选择
                type: Boolean,
                default: false
            },
            draggable: { // 是否开启拖拽节点功能
                type: Boolean,
                default: false
            },
            allowDrag: Function, // 判断节点能否被拖拽	Function(node)
            allowDrop: Function, // 拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后	Function(draggingNode, dropNode, type)
            props: { //  配置选项
                default() {
                return {
                    children: 'children',
                    label: 'label',
                    disabled: 'disabled'
                };
                }
            },
            lazy: { // 是否懒加载子节点，需与 load 方法结合使用
                type: Boolean,
                default: false
            },
            highlightCurrent: Boolean, // 是否高亮当前选中节点，默认值是 false。
            load: Function, // 加载子树数据的方法，仅当 lazy 属性为true 时生效
            filterNodeMethod: Function, // 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏
            accordion: Boolean, // 是否每次只打开一个同级树节点展开
            indent: { // 相邻级节点间的水平缩进，单位为像素
                type: Number,
                default: 18
            },
            iconClass: String // 自定义树节点的图标
        },
        data() {
            return {
                root: null,
                store: null,
                currentNode: null
            }
        },
        computed: {
            isEmpty() {
                const { childNodes } = this.root
                return !childNodes || 
                    childNodes.length === 0 || 
                    childNodes.every(({ visible }) => !visible)
            }
        },
        methods: {
            getNodeKey(node) {
                return getNodeKey(this.nodeKey, node.data)
            },

            handleNodeExpand(nodeData, node, instance) {
                this.broadcast('lay-tree-node', 'tree-node-expand', node)
                this.$emit('node-expand', nodeData, node, instance)
            }
        },
        created() {
            this.isTree = true

            this.store = new TreeStore({
                key: this.nodeKey, // [String 默认undefined] 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
                data: this.data, // [Array 默认undefined] 展示数据
                lazy: this.lazy, // [Boolean 默认false] 是否懒加载子节点，需与 load 方法结合使用
                props: this.props, // [Object] 配置选项
                load: this.load, // [Function 默认undefined] 加载子树数据的方法，仅当 lazy 属性为true 时生效
                currentNodeKey: this.currentNodeKey, // [string, number 默认undefined] 当前选中的节点
                checkStrictly: this.checkStrictly, // [Boolean 默认undefined] 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
                checkDescendants: this.checkDescendants, //  [Boolean 默认false] 是否检查后代
                defaultCheckedKeys: this.defaultCheckedKeys, // [Array 默认undefined] 默认勾选的节点的 key 的数组
                defaultExpandedKeys: this.defaultExpandedKeys, // [Array 默认undefined] 默认展开的节点的 key 的数组
                autoExpandParent: this.autoExpandParent, // [Boolean 默认true] 展开子节点的时候是否自动展开父节点
                defaultExpandAll: this.defaultExpandAll, // [Boolean 默认undefined] 是否默认展开所有节点
                filterNodeMethod: this.filterNodeMethod // [Function 默认undefined] 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏
            })

            this.root = this.store.root
        }
    }
</script>