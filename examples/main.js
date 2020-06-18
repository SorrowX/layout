import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Layout from '../src/index'

Vue.use(VueRouter)
Vue.use(Layout)

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
            path: '/two-columns',
            component: (resolve) => require(['./routers/two-columns.vue'], resolve)
        },
        {
            path: '/scrollbar',
            component: (resolve) => require(['./routers/scrollbar.vue'], resolve)
        }
    ]
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
