//引入Vue
import Vue from 'vue'
//引入App
import App from './App'
import { m1 } from './mixins'
//关闭Vue的生产提示
Vue.config.productionTip = false
    // 全局混入 
    // Vue.mixin(m1)
new Vue({
    el: '#app',
    render: h => h(App)
})