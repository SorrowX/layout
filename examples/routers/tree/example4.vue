<template>
    <div>
        <h3>4. 默认展开和默认选中</h3>
        <lay-collapse v-model="activeNames">
            <lay-collapse-item title="可将 Tree 的某些节点设置为默认展开或默认选中。" name="demo4">
                <pre>
                    <code class="language-js" v-html="getCode(getStr())"></code>
                </pre>
            </lay-collapse-item>
        </lay-collapse>
        
        <p>效果:</p>
        <lay-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps">
        </lay-tree>
    </div>
</template>
  
<script>
    import Prism from 'prismjs'

    export default {
        data() {
            return {
                activeNames: '',
                data: [
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
                    }, 
                    {
                        id: 2,
                        label: '一级 2',
                        children: [{
                            id: 5,
                            label: '二级 2-1'
                        }, {
                            id: 6,
                            label: '二级 2-2'
                        }]
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
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            getCode(code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript')
            },

            getStr() {
                return `
                    <template>
                        <lay-tree
                            :data="data"
                            show-checkbox
                            node-key="id"
                            :default-expanded-keys="[2, 3]"
                            :default-checked-keys="[5]"
                            :props="defaultProps">
                        </lay-tree>
                    </template>

                    <script>
                        export default {
                            data() {
                                return {
                                    data: [
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
                                        }, 
                                        {
                                            id: 2,
                                            label: '一级 2',
                                            children: [{
                                                id: 5,
                                                label: '二级 2-1'
                                            }, {
                                                id: 6,
                                                label: '二级 2-2'
                                            }]
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
                                    ],
                                    defaultProps: {
                                        children: 'children',
                                        label: 'label'
                                    }
                                }
                            }
                        }
                    <\/script>


                    说明: 分别通过default-expanded-keys和default-checked-keys设置默认展开和默认选中的节点。
                         需要注意的是，此时必须设置node-key，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。
                `
            }
        }
    }
</script>