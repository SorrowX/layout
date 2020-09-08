<template>
    <div>
        <h3>2. 可选择</h3>
        <lay-collapse v-model="activeNames">
            <lay-collapse-item title="适用于需要选择层级时使用。" name="demo2">
                <pre>
                    <code class="language-js" v-html="getCode(getStr())"></code>
                </pre>
            </lay-collapse-item>
        </lay-collapse>
        
        <p>效果:</p>
        <lay-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
        </lay-tree>
    </div>
</template>

<script>
    import Prism from 'prismjs'

    export default {
        data() {
            return {
                activeNames: '',
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1
            }
        },
        methods: {
            getCode(code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript')
            },

            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate)
            },
            handleNodeClick(data) {
                console.log(data)
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region1' }, { name: 'region2' }])
                }
                if (node.level > 10) return resolve([])

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true
                } else if (node.data.name === 'region2') {
                    hasChild = false
                } else {
                    hasChild = Math.random() > 0.5
                }

                setTimeout(() => {
                    var data
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }]
                    } else {
                        data = []
                    }

                    resolve(data)
                }, 500)
            },

            getStr() {
                return `
                    <template>
                        <lay-tree
                            :props="props"
                            :load="loadNode"
                            lazy
                            show-checkbox
                            @check-change="handleCheckChange">
                        </lay-tree>
                    </template>

                    <script>
                        export default {
                            data() {
                                return {
                                    props: {
                                        label: 'name',
                                        children: 'zones'
                                    },
                                    count: 1
                                }
                            },
                            methods: {
                                handleCheckChange(data, checked, indeterminate) {
                                    console.log(data, checked, indeterminate)
                                },
                                handleNodeClick(data) {
                                    console.log(data)
                                },
                                loadNode(node, resolve) {
                                    if (node.level === 0) {
                                        return resolve([{ name: 'region1' }, { name: 'region2' }])
                                    }
                                    if (node.level > 3) return resolve([])

                                    var hasChild;
                                    if (node.data.name === 'region1') {
                                        hasChild = true
                                    } else if (node.data.name === 'region2') {
                                        hasChild = false
                                    } else {
                                        hasChild = Math.random() > 0.5
                                    }

                                    setTimeout(() => {
                                        var data
                                        if (hasChild) {
                                            data = [{
                                                name: 'zone' + this.count++
                                            }, {
                                                name: 'zone' + this.count++
                                            }]
                                        } else {
                                            data = []
                                        }

                                        resolve(data)
                                    }, 500)
                                }
                            }
                        }
                    <\/script>
                `
            }
        }
    }
</script>