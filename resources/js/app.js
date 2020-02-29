import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
import store from './stores/index'
import App from './components/index.vue'

const routes = [
    { path: '/home', component: App },
]

const router = new VueRouter({
    routes,
    mode:'history'
})

const app = new Vue({
    router,
    store
}).$mount('#app')
