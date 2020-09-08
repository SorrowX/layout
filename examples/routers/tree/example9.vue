<template>
    <div>
        <h3>9. 手风琴模式</h3>
        <lay-collapse v-model="activeNames">
            <lay-collapse-item title="对于同一级的节点，每次只能展开一个." name="demo9">
                <pre>
                    <code class="language-js" v-html="getCode(getStr())"></code>
                </pre>
            </lay-collapse-item>
        </lay-collapse>
        
        <p>效果:</p>
        <lay-tree
            :data="data"
            :props="defaultProps"
            accordion
            @node-click="handleNodeClick"
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
                data: [
                    {
                        label: '一级 1',
                        children: [
                            {
                                label: '二级 1-1',
                                children: [{
                                    label: '三级 1-1-1'
                                }]
                        }]
                    }, 
                    {
                        label: '一级 2',
                        children: [
                            {
                                label: '二级 2-1',
                                children: [{
                                    label: '三级 2-1-1'
                                }]
                            }, 
                            {
                                label: '二级 2-2',
                                children: [{
                                    label: '三级 2-2-1'
                                }]
                            }
                        ]
                    }, 
                    {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        }, {
                            label: '二级 3-2',
                            children: [{
                                label: '三级 3-2-1'
                            }]
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

            handleNodeClick(data) {
                console.log(data)
            },

            getStr() {
                return `
                    <template>
                        <lay-tree
                            :data="data"
                            :props="defaultProps"
                            accordion
                            @node-click="handleNodeClick"
                        >
                        </lay-tree>
                    </template>

                    <script>
                        export default {
                            data() {
                                return {
                                    data: [
                                        {
                                            label: '一级 1',
                                            children: [
                                                {
                                                    label: '二级 1-1',
                                                    children: [{
                                                        label: '三级 1-1-1'
                                                    }]
                                            }]
                                        }, 
                                        {
                                            label: '一级 2',
                                            children: [
                                                {
                                                    label: '二级 2-1',
                                                    children: [{
                                                        label: '三级 2-1-1'
                                                    }]
                                                }, 
                                                {
                                                    label: '二级 2-2',
                                                    children: [{
                                                        label: '三级 2-2-1'
                                                    }]
                                                }
                                            ]
                                        }, 
                                        {
                                            label: '一级 3',
                                            children: [{
                                                label: '二级 3-1',
                                                children: [{
                                                    label: '三级 3-1-1'
                                                }]
                                            }, {
                                                label: '二级 3-2',
                                                children: [{
                                                    label: '三级 3-2-1'
                                                }]
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
                                handleNodeClick(data) {
                                    console.log(data)
                                }
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