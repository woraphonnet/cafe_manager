import Vue from 'vue'
import Vuex from 'vuex'
import coffee from './coffee'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        coffee
    }
})