<template>
    <div class="test-lay-tree">
        <button @click="handlerSwitch" style="margin-bottom: 20px;">切换</button>

        <!-- <lay-tree 
            :data="data" 
            :props="defaultProps" 
            :renderAfterExpand="true"
            @node-click="handleNodeClick"
        >
        </lay-tree>
        
        <lay-tree 
            lazy 
            :load="load" 
            :props="props" 
        >
        </lay-tree> -->

        <lay-tree
            :data="data3"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[5]"
            :default-checked-keys="[5]"
            :props="defaultProps3"
        >
        </lay-tree>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                treeType: 1,
                data: [
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
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },

                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },


                data3: [{
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
                defaultProps3: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            renderContent(h, {node, data, store}) {
                // return h('span', node.label)
            },
            handleNodeClick(nodeData, node, instance) {
                console.log(nodeData, node, instance)
            },
            load(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region' }, { name: 'region2' }])
                }
                if (node.level > 3) return resolve([])

                setTimeout(() => {
                    const data = [{
                        name: 'leaf',
                        leaf: true
                    }, {
                        name: 'zone'
                    }]

                    resolve(data)
                }, 1000 * 1)

            },

            handlerSwitch() {
                this.treeType = 
                    this.treeType == 1
                        ? 2
                        : this.treeType == 2
                            ? 3
                            : 1
            }
        }
    }
</script>