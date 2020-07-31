import LayCollapse from './src/collapse'
import LayCollapseItem from './src/collapse-item'

LayCollapse.install = function(Vue) {
    Vue.component(LayCollapse.name, LayCollapse)
}

LayCollapseItem.install = function(Vue) {
    Vue.component(LayCollapseItem.name, LayCollapseItem)
}

export default { LayCollapse, LayCollapseItem }