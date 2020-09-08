<template>
    <div>
        <h3>8. 节点过滤</h3>
        <lay-collapse v-model="activeNames">
            <lay-collapse-item title="通过关键字过滤树节点." name="demo8">
                <pre>
                    <code class="language-js" v-html="getCode(getStr())"></code>
                </pre>
            </lay-collapse-item>
        </lay-collapse>
        
        <p>效果:</p>

        <input placeholder="输入关键字进行过滤" v-model="filterText" />

        <lay-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree"
        >
        </lay-tree>

    </div>
</template>
  
<script>
    import Prism from 'prismjs'

    export default {
        data() {
            return {
                activeNames: '',
                filterText: '',
                data: [
                    {
                        id: 1,
                        label: '一级 1',
                        children: [{
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1'
                                }, {
                                    id: 10,
                                    label: '三级 1-1-2'
                                }
                            ]
                        }]
                    }, {
                        id: 2,
                        label: '一级 2',
                        children: [
                            {
                                id: 5,
                                label: '二级 2-1'
                            }, {
                                id: 6,
                                label: '二级 2-2'
                            }
                        ]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [
                        {
                            id: 7,
                            label: '二级 3-1'
                        }, {
                            id: 8,
                            label: '二级 3-2'
                        }
                    ]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val)
            }
        },
        methods: {
            getCode(code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript')
            },

            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
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