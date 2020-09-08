<template>
    <div>
        <h3>5. 禁用状态</h3>
        <lay-collapse v-model="activeNames">
            <lay-collapse-item title="可将 Tree 的某些节点设置为禁用状态." name="demo5">
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
            :default-checked-keys="[5]">
        </lay-tree>
    </div>
</template>
  
<script>
    import Prism from 'prismjs'

    export default {
        data() {
            return {
                activeNames: '',
                data: [{
                    id: 1,
                    label: '一级 2',
                    children: [
                        {
                            id: 3,
                            label: '二级 2-1',
                            children: [{
                                id: 4,
                                label: '三级 3-1-1'
                            }, {
                                id: 5,
                                label: '三级 3-1-2',
                                disabled: true
                            }]
                        }, 
                        {
                            id: 2,
                            label: '二级 2-2',
                            disabled: true,
                            children: [{
                                id: 6,
                                    label: '三级 3-2-1'
                                }, {
                                id: 7,
                                    label: '三级 3-2-2',
                                    disabled: true
                                }
                            ]
                        }
                    ]
                }]
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
                            :default-checked-keys="[5]">
                        </lay-tree>
                    </template>

                    <script>
                        export default {
                            data() {
                                return {
                                    data: [{
                                        id: 1,
                                        label: '一级 2',
                                        children: [
                                            {
                                                id: 3,
                                                label: '二级 2-1',
                                                children: [{
                                                    id: 4,
                                                    label: '三级 3-1-1'
                                                }, {
                                                    id: 5,
                                                    label: '三级 3-1-2',
                                                    disabled: true
                                                }]
                                            }, 
                                            {
                                                id: 2,
                                                label: '二级 2-2',
                                                disabled: true,
                                                children: [{
                                                    id: 6,
                                                        label: '三级 3-2-1'
                                                    }, {
                                                    id: 7,
                                                        label: '三级 3-2-2',
                                                        disabled: true
                                                    }
                                                ]
                                            }
                                        ]
                                    }]
                                }
                            }
                        }
                    <\/script>


                    说明: 通过disabled设置禁用状态。
                `
            }
        }
    }
</script>