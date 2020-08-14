import LayTree from './src/tree.vue'

LayTree.install = function(Vue) {
    Vue.component(LayTree.name, LayTree)
}

export default LayTree