//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
    add(context, value) {
        // console.log(context, value)
        // 不在这直接操作数据  否则devtools中Vuex的操作侦听不到  devtools只检测mutations
        // context.state.sum += value
        context.commit('ADD', value)
    },
    sub({ commit, dispatch }, value) {
        // 简单处理一些操作
        // 复杂的逻辑派发到其他函数执行 
        dispatch('demo')
        commit('SUB', value)
    },
    demo() {
        console.log("demo")
    },
    addOdd({ state, commit }, value) {
        if (state.sum % 2) {
            commit('ADD', value)
        }
    },
    addWait({ commit }, value) {
        setTimeout(() => {
            commit('ADD', value)
        }, 500)
    }
}

//准备mutations——用于操作数据（state）
const mutations = {
    ADD(state, value) {
        // console.log(state, value)
        state.sum += value
    },
    SUB(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}

// 准备state数据
const state = {
    sum: 0,
    school: "玄门",
    subject: "前端",
    personList: [
        { id: '001', name: '张三' }
    ]
}

//准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})