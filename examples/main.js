import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Layout from '../src/index'

Vue.use(VueRouter)
Vue.use(window.Layout = Layout)

// 开启debug模式
Vue.config.debug = true

// 路由配置
const router = new VueRouter({
    esModule: false,
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/two-columns'
        },
        {
            path: '/introduce',
            component: (resolve) => require(['./pages/introduce.vue'], resolve)
        },
        {
            path: '/install',
            component: (resolve) => require(['./pages/install.vue'], resolve)
        },
        {
            path: '/utils',
            component: (resolve) => require(['./pages/utils.vue'], resolve)
        },
        {
            path: '/scrollbar',
            component: (resolve) => require(['./routers/scrollbar.vue'], resolve)
        },
        {
            path: '/two-columns',
            component: (resolve) => require(['./routers/two-columns.vue'], resolve)
        },
        {
            path: '/three-columns',
            component: (resolve) => require(['./routers/three-columns.vue'], resolve)
        },
        {
            path: '/grid',
            component: (resolve) => require(['./routers/grid.vue'], resolve)
        },
        {
            path: '/collapse-transition',
            component: (resolve) => require(['./routers/collapse-transition.vue'], resolve)
        },
        {
            path: '/collapse',
            component: (resolve) => require(['./routers/collapse.vue'], resolve)
        },
        {
            path: '/center',
            component: (resolve) => require(['./routers/center.vue'], resolve)
        },
        {
            path: '/tree',
            component: (resolve) => require(['./routers/tree.vue'], resolve)
        }
    ]
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
