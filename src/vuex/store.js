import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const user = {
    state: {
        userinfo: {},
        haslogin: false,
        token: localStorage.token,
        headUrl: localStorage.headUrl,
    },
    mutations: {
        
    }
}
export default new Vuex.Store({
    modules: {
        user
    }
})