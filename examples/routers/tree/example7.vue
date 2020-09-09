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
        <div class="custom-tree-container">
            <div class="block">
                <!-- <p>使用 render-content</p>
                <lay-tree
                    :data="data1"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent"
                >
                </lay-tree> -->
            </div>
            <div class="block">
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
                        <span>
                            <button @click="() => append(data)">
                                Append
                            </button>
                            <button @click="() => remove(node, data)">
                                Delete
                            </button>
                        </span>
                    </span>
                </lay-tree>
            </div>
        </div>
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

            setTimeout(() => {
                this.data2 = [{
                    id: 1,
                    label: '1',
                    children: [{
                        id: 2,
                        label: '1-2-1'
                    }, {
                        id: 3,
                        label: '1-2-2'
                    }]
                }]
            }, 1000 * 5)
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
                debugger
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
                        
                    </template>

                    <script>
                        export default {
                            data() {
                                return {

                                }
                            },
                            methods: {
                                
                            }
                        }
                    <\/script>


                    说明: 
                `
            }
        }
    }
</script>

<style>
    .custom-tree-container {
        display: flex;
    }
    .block {
        flex: 1;
        font-size: 14px;
        padding-right: 8px;
    }
</style>