import utils from './utils/index'
import LayScrollbar from './components/scrollbar'
import LayTwoColumns from './components/two-columns'
import LayThreeColumns from './components/three-columns'
import LayGrid from './components/grid'
import LayCollapseTransition from './components/transitions'

const { LayRow, LayCol } = LayGrid

const components = {
    LayTwoColumns,
    LayScrollbar,
    LayThreeColumns,
    LayRow,
    LayCol,
    LayCollapseTransition
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

export default new Proxy(Layout, {
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
