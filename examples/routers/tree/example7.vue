<template>
    <div>
        <h3>7. 自定义节点内容</h3>
        <lay-collapse v-model="activeNames">
            <lay-collapse-item title="节点的内容支持自定义，可以在节点区添加按钮或图标等内容." name="demo7">
                <pre>
                    <code class="language-js" v-html="getCode(getStr())"></code>
                </pre>
            </lay-collapse-item>
        </lay-collapse>
        
        <p>效果:</p>
        <lay-two-columns 
            fix="left" 
            width="50%" 
            :leftStyle="{ 'border-right': '1px solid #ccc', 'padding-right': '10px' }"
            :rightStyle="{ 'padding-left': '10px' }"
        >
            <template v-slot:left>
                <p>使用 render-content</p>
                <lay-tree
                    :data="data1"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent"
                >
                </lay-tree>
            </template>
            <template v-slot:right>
                <p>使用 scoped slot</p>
                <lay-tree
                    :data="data2"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                >
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                        <span>{{ node.label }}</span>
                        <span class="operat-box">
                            <button @click="() => append(data)">
                                Append
                            </button>
                            <button @click="() => remove(node, data)">
                                Delete
                            </button>
                        </span>
                    </span>
                </lay-tree>
            </template>
        </lay-two-columns>
    </div>
</template>
  
<script>
    import Prism from 'prismjs'
    let id = 1000

    export default {
        data() {
            const data = [
                {
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                            label: '二级 2-1'
                        }, {
                        id: 6,
                            label: '二级 2-2'
                        }
                    ]
                }, 
                {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }
            ]

            return {
                activeNames: '',
                data1: JSON.parse(JSON.stringify(data)),
                data2: JSON.parse(JSON.stringify(data))
            }
        },
        methods: {
            getCode(code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript')
            },

            append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] }
                if (!data.children) {
                    this.$set(data, 'children', [])
                }
                data.children.push(newChild)
            },

            remove(node, data) {
                const parent = node.parent
                const children = parent.data.children || parent.data
                const index = children.findIndex(d => d.id === data.id)
                children.splice(index, 1)
            },

            renderContent(h, { node, data, store }) {
                // render函数
                return h('span', {
                    'class': 'custom-tree-node'
                }, [
                    h('span', node.label),
                    h('span', {
                        'class': 'operat-box'
                    }, [
                        h('button', { on: { click: () => { this.append(data) } } }, 'Append'),
                        h('button', { on: { click: () => { this.remove(node, data) } } }, 'Delete')
                    ])
                ])

                // jsx
                return (
                    <span class="custom-tree-node">
                        <span>{node.label}</span>
                        <span>
                            <button on-click={ () => this.append(data) }>Append</button>
                            <button on-click={ () => this.remove(node, data) }>Delete</button>
                        </span>
                    </span>
                )
            },

            getStr() {
                return `
                    <template>
                        <lay-two-columns 
                            fix="left" 
                            width="50%" 
                            :leftStyle="{ 'border-right': '1px solid #ccc', 'padding-right': '10px' }"
                            :rightStyle="{ 'padding-left': '10px' }"
                        >
                            <template v-slot:left>
                                <p>使用 render-content</p>
                                <lay-tree
                                    :data="data1"
                                    show-checkbox
                                    node-key="id"
                                    default-expand-all
                                    :expand-on-click-node="false"
                                    :render-content="renderContent"
                                >
                                </lay-tree>
                            </template>
                            <template v-slot:right>
                                <p>使用 scoped slot</p>
                                <lay-tree
                                    :data="data2"
                                    show-checkbox
                                    node-key="id"
                                    default-expand-all
                                    :expand-on-click-node="false"
                                >
                                    <span class="custom-tree-node" slot-scope="{ node, data }">
                                        <span>{{ node.label }}</span>
                                        <span class="operat-box">
                                            <button @click="() => append(data)">
                                                Append
                                            </button>
                                            <button @click="() => remove(node, data)">
                                                Delete
                                            </button>
                                        </span>
                                    </span>
                                </lay-tree>
                            </template>
                        </lay-two-columns>
                    </template>

                    <script>
                        export default {
                            data() {
                                const data = [
                                    {
                                        id: 1,
                                        label: '一级 1',
                                        children: [{
                                            id: 4,
                                            label: '二级 1-1',
                                            children: [{
                                                id: 9,
                                                label: '三级 1-1-1'
                                            }, {
                                                id: 10,
                                                label: '三级 1-1-2'
                                            }]
                                        }]
                                    }, {
                                        id: 2,
                                        label: '一级 2',
                                        children: [{
                                            id: 5,
                                                label: '二级 2-1'
                                            }, {
                                            id: 6,
                                                label: '二级 2-2'
                                            }
                                        ]
                                    }, 
                                    {
                                        id: 3,
                                        label: '一级 3',
                                        children: [{
                                            id: 7,
                                            label: '二级 3-1'
                                        }, {
                                            id: 8,
                                            label: '二级 3-2'
                                        }]
                                    }
                                ]

                                return {
                                    activeNames: '',
                                    data1: JSON.parse(JSON.stringify(data)),
                                    data2: JSON.parse(JSON.stringify(data))
                                }
                            },
                            methods: {
                                append(data) {
                                    const newChild = { id: id++, label: 'testtest', children: [] }
                                    if (!data.children) {
                                        this.$set(data, 'children', [])
                                    }
                                    data.children.push(newChild)
                                },

                                remove(node, data) {
                                    const parent = node.parent
                                    const children = parent.data.children || parent.data
                                    const index = children.findIndex(d => d.id === data.id)
                                    children.splice(index, 1)
                                },

                                renderContent(h, { node, data, store }) {
                                    // render函数
                                    return h('span', {
                                        'class': 'custom-tree-node'
                                    }, [
                                        h('span', node.label),
                                        h('span', {
                                            'class': 'operat-box'
                                        }, [
                                            h('button', { on: { click: () => { this.append(data) } } }, 'Append'),
                                            h('button', { on: { click: () => { this.remove(node, data) } } }, 'Delete')
                                        ])
                                    ])

                                    // jsx
                                    return (
                                        <span class="custom-tree-node">
                                            <span>{node.label}</span>
                                            <span>
                                                <button on-click={ () => this.append(data) }>Append</button>
                                                <button on-click={ () => this.remove(node, data) }>Delete</button>
                                            </span>
                                        </span>
                                    )
                                }
                            }
                        }
                    <\/script>


                    说明: 可以通过两种方法进行树节点内容的自定义：render-content和 scoped slot。
                         使用render-content指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。
                         使用 scoped slot 会传入两个参数node和data，分别表示当前节点的 Node 对象和当前节点的数据。
                `
            }
        }
    }
</script>

<style>
    .operat-box {
        float: right;
    }
    button {
        margin-right: 5px;
    }
</style>