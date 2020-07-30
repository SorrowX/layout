import LayCollapseTransition from './src/collapse-transition'

LayCollapseTransition.install = function(Vue) {
    Vue.component(LayCollapseTransition.name, LayCollapseTransition)
}

export default LayCollapseTransition