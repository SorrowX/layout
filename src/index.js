import utils from './utils/index'
import LayScrollbar from './components/scrollbar'
import LayTwoColumns from './components/two-columns'
import LayThreeColumns from './components/three-columns'
import Grid from './components/grid'
import LayCollapseTransition from './components/transitions'
import Collapse from './components/collapse'
import LayTree from './components/tree'
import Checkbox from './components/checkbox'

const { LayRow, LayCol } = Grid
const { LayCollapse, LayCollapseItem } = Collapse
const { LayCheckbox, LayCheckboxButton, LayCheckboxGroup } = Checkbox

const components = {
    LayScrollbar,
    LayTwoColumns,
    LayThreeColumns,
    LayRow,
    LayCol,
    LayCollapseTransition,
    LayCollapse,
    LayCollapseItem,
    LayTree,
    LayCheckbox,
    LayCheckboxButton,
    LayCheckboxGroup
}

const install = function(Vue, opts = {}) {
    if (install.installed) return

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key])
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const Layout = {
    install,
    ...components,
    utils
}
const has = (target, key) => {
    return Reflect.has(target, key, target)
}

export default Layout || new Proxy(Layout, {
    get(target, key, receiver) {
        if (!target[key] && has(Layout.utils, key)) {
            return Layout.utils[key]
        }
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        if (target[key]) {
            return console.error(`${key} already exists, cannot set value for Layout.`)
        }
        return Reflect.set(target, key, value, receiver)
    }
})
