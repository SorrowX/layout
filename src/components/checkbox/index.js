import LayCheckbox from './src/checkbox'
import LayCheckboxButton from './src/checkbox-button'
import LayCheckboxGroup from './src/checkbox-group'

;[LayCheckbox, LayCheckboxButton, LayCheckboxGroup].forEach(comp => {
    comp.install = function(Vue) {
        Vue.component(comp.name, comp)
    }
})

export default {
    LayCheckbox,
    LayCheckboxButton,
    LayCheckboxGroup
}