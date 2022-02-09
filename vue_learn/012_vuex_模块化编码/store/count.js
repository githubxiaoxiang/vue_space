//准备actions——用于响应组件中的动作
const actions = {
    add(context, value) {
        context.commit('ADD', value)
    },
    sub({ commit, dispatch }, value) {
        commit('SUB', value)
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
    }
}

// 准备state数据
const state = {
    sum: 0,
    school: "玄门",
    subject: "前端"
}

//准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}