<template>
    <div class="test-lay-tree">
        <!-- <lay-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></lay-tree> -->
        <lay-tree lazy :load="load" :props="props" show-checkbox></lay-tree>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        label: '一级 1',
                        children: [{
                            label: '二级 1-1',
                            children: [{
                                label: '三级 1-1-1'
                            }]
                        }]
                    }, 
                    {
                        label: '一级 2',
                        children: [{
                            label: '二级 2-1',
                            children: [{
                            label: '三级 2-1-1'
                            }]
                        }, {
                            label: '二级 2-2',
                            children: [{
                            label: '三级 2-2-1'
                            }]
                        }]
                    }, {
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
                },

                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
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

            }
        }
    }
</script>