<template>
    <div>
        <h3>3. 懒加载自定义叶子节点</h3>
        <lay-collapse v-model="activeNames">
            <lay-collapse-item title="可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。" name="demo3">
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
            show-checkbox>
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
                    children: 'zones',
                    isLeaf: 'leaf'
                }
            }
        },
        methods: {
            getCode(code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript')
            },

            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region' }])
                }
                if (node.level > 1) return resolve([])

                setTimeout(() => {
                    const data = [{
                        name: 'leaf',
                        leaf: true
                    }, {
                        name: 'zone'
                    }]

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
                            show-checkbox>
                        </lay-tree>
                    </template>

                    <script>
                        export default {
                            data() {
                                return {
                                    props: {
                                        label: 'name',
                                        children: 'zones',
                                        isLeaf: 'leaf'
                                    }
                                }
                            },
                            methods: {
                                loadNode(node, resolve) {
                                    if (node.level === 0) {
                                        return resolve([{ name: 'region' }])
                                    }
                                    if (node.level > 1) return resolve([])

                                    setTimeout(() => {
                                        const data = [{
                                            name: 'leaf',
                                            leaf: true
                                        }, {
                                            name: 'zone'
                                        }]

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