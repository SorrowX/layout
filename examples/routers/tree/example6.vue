<template>
    <div>
        <h3>6. 树节点的选择</h3>
        <lay-collapse v-model="activeNames">
            <lay-collapse-item title="树节点的选择." name="demo6">
                <pre>
                    <code class="language-js" v-html="getCode(getStr())"></code>
                </pre>
            </lay-collapse-item>
        </lay-collapse>
        
        <p>效果:</p>
        <lay-tree
            :data="data"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
        </lay-tree>

        <div class="buttons">
            <button @click="getCheckedNodes">通过 node 获取</button>
            <button @click="getCheckedKeys">通过 key 获取</button>
            <button @click="setCheckedNodes">通过 node 设置</button>
            <button @click="setCheckedKeys">通过 key 设置</button>
            <button @click="resetChecked">清空</button>
        </div>
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

            getCheckedNodes() {
                console.log(this.$refs.tree.getCheckedNodes())
            },
            getCheckedKeys() {
                console.log(this.$refs.tree.getCheckedKeys())
            },
            setCheckedNodes() {
                this.$refs.tree.setCheckedNodes([{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 9,
                    label: '三级 1-1-1'
                }])
            },
            setCheckedKeys() {
                this.$refs.tree.setCheckedKeys([3])
            },
            resetChecked() {
                this.$refs.tree.setCheckedKeys([])
            },

            getStr() {
                return `
                    <template>
                        <div>
                            <lay-tree
                                :data="data"
                                show-checkbox
                                default-expand-all
                                node-key="id"
                                ref="tree"
                                highlight-current
                                :props="defaultProps">
                            </lay-tree>

                            <div class="buttons">
                                <button @click="getCheckedNodes">通过 node 获取</button>
                                <button @click="getCheckedKeys">通过 key 获取</button>
                                <button @click="setCheckedNodes">通过 node 设置</button>
                                <button @click="setCheckedKeys">通过 key 设置</button>
                                <button @click="resetChecked">清空</button>
                            </div>
                        </div>
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
                            },
                            methods: {
                                getCheckedNodes() {
                                    console.log(this.$refs.tree.getCheckedNodes())
                                },
                                getCheckedKeys() {
                                    console.log(this.$refs.tree.getCheckedKeys())
                                },
                                setCheckedNodes() {
                                    this.$refs.tree.setCheckedNodes([{
                                        id: 5,
                                        label: '二级 2-1'
                                    }, {
                                        id: 9,
                                        label: '三级 1-1-1'
                                    }])
                                },
                                setCheckedKeys() {
                                    this.$refs.tree.setCheckedKeys([3])
                                },
                                resetChecked() {
                                    this.$refs.tree.setCheckedKeys([])
                                }
                            }
                        }
                    <\/script>


                    说明: 本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置node-key。
                `
            }
        }
    }
</script>