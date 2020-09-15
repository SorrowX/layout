<template>
    <div>
        <h3>1. 基础用法</h3>
        <lay-collapse v-model="activeNames">
            <lay-collapse-item title="基础的树形结构展示" name="demo1">
                <pre>
                    <code class="language-js" v-html="getCode(getStr())"></code>
                </pre>
            </lay-collapse-item>
        </lay-collapse>
        
        <p>效果:</p>
        <lay-tree 
            :data="data1"
            :props="defaultProps1"
            :renderAfterExpand="true"
            :checkOnClickNode="true"
            @node-click="handleNodeClick1"
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
                data1: [
                    {
                        label: '一级 1',
                        children: [
                            {
                                label: '二级 1-1',
                                children: [
                                    {
                                        label: '三级 1-1-1'
                                    },
                                    {
                                        label: '三级 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        label: '一级 2',
                        children: [
                            {
                                label: '二级 2-1',
                                children: [
                                    {
                                        label: '三级 2-1-1'
                                    }
                                ]
                            }, 
                            {
                                label: '二级 2-2',
                                children: [
                                    {
                                        label: '三级 2-2-1'
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        label: '一级 3',
                        children: [
                            {
                                label: '二级 3-1',
                                children: [
                                    {
                                        label: '三级 3-1-1'
                                    }
                                ]
                            }, 
                            {
                                label: '二级 3-2',
                                children: [
                                    {
                                        label: '三级 3-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                defaultProps1: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            getCode(code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript')
            },

            handleNodeClick1(nodeData, node, instance) {
                console.log(nodeData, node, instance)
            },

            getStr() {
                return `
                    <template>
                        <lay-tree
                            :data="data1"
                            :props="defaultProps1"
                            :renderAfterExpand="true"
                            @node-click="handleNodeClick1"
                        >
                        </lay-tree>
                    </template>

                    <script>
                        export default {
                            data() {
                                return {
                                    data1: [
                                        {
                                            label: '一级 1',
                                            children: [
                                                {
                                                    label: '二级 1-1',
                                                    children: [
                                                        {
                                                            label: '三级 1-1-1'
                                                        },
                                                        {
                                                            label: '三级 1-2-1'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, 
                                        {
                                            label: '一级 2',
                                            children: [
                                                {
                                                    label: '二级 2-1',
                                                    children: [
                                                        {
                                                            label: '三级 2-1-1'
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    label: '二级 2-2',
                                                    children: [
                                                        {
                                                            label: '三级 2-2-1'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, 
                                        {
                                            label: '一级 3',
                                            children: [
                                                {
                                                    label: '二级 3-1',
                                                    children: [
                                                        {
                                                            label: '三级 3-1-1'
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    label: '二级 3-2',
                                                    children: [
                                                        {
                                                            label: '三级 3-2-1'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    defaultProps1: {
                                        children: 'children',
                                        label: 'label'
                                    }
                                }
                            },
                            methods: {
                                handleNodeClick1(nodeData, node, instance) {
                                    console.log(nodeData, node, instance)
                                }
                            }
                        }
                    <\/script>
                `
            }
            
        }
    }
</script>