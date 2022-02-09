import axios from 'axios'

//准备actions——用于响应组件中的动作
const actions = {
    addPersonWang({ commit, state }, value) {
        if (value.name.indexOf("王") === 0) {
            commit("ADD_PERSON", value)
        } else {
            alert('添加的人必须姓王！')
        }
    },
    addServerPerson(context, idd) {
        axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
            response => {
                context.commit('ADD_PERSON', { id: idd, name: response.data })
            },
            error => {
                console.log(error.message)
            }
        )
    }
}

//准备mutations——用于操作数据（state）
const mutations = {
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}

// 准备state数据
const state = {
    personList: [
        { id: '001', name: '张三' }
    ]
}

//准备getters——用于将state中的数据进行加工
const getters = {
    firstPersonName(state) {
        return state.personList[0].name
    }
}
export default {
    // 需要加上namespaced 区分模块化
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}