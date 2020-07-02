import LayRow from './src/row'
import LayCol from './src/col'

LayRow.install = function(Vue) {
    Vue.component(LayRow.name, LayRow)
}

LayCol.install = function(Vue) {
    Vue.component(LayCol.name, LayCol)
}

export default { LayRow, LayCol }