//引入Vue
import Vue from 'vue'
//引入App
import App from './App'
import store from './store'
//关闭Vue的生产提示
Vue.config.productionTip = false

const vm = new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
console.log(vm)