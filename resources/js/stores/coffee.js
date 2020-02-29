import axios from "axios";
const hostname = window.location.hostname
const state = {
    data: [],
    obj:{
        title: null,
        detail: null,
        path_img: null,
    }
}
const mutations = {
    UPDATE_DATA (state, payload) {
        state.data.push(payload)
    },
    UPDATE_OBJ (state, payload) {
        state.obj[payload.key] = payload.data
    }
}
const getters = {
    getObj: (state) => state.obj
}
const actions = {
    post({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.post(`${hostname}/api/coffee`,this.state.obj).then(res=>{
                resolve(res)
                commit('UPDATE_DATA',res)
            })
        })
    },
    update({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.post(`${hostname}/api/coffee`,this.state.obj).then(res=>{
                resolve(res)
                commit('UPDATE_DATA',res)
            })
        })
    },
    delete({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.post(`${hostname}/api/coffee`,this.state.obj).then(res=>{
                resolve(res)
                commit('UPDATE_DATA',res)
            })
        })
    },
    upload({commit}, payload) {
            axios.post(`${hostname}/api/updload`,).then(res=>{
                console.log("upload :",res);
            })
    },
    stateUpdate({commit}, payload) {

    },
    updateObj({commit}, payload) {
        commit('UPDATE_OBJ',payload)
    },
}
export default({
    namespaced: true,
    state,
    mutations,
    getters,
    actions
})