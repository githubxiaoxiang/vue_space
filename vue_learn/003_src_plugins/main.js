//引入Vue
import Vue from 'vue'
//引入App
import App from './App'
import plugins from './plugins'
//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.use(plugins, { a: 123 })
new Vue({
    el: '#app',
    render: h => h(App)
})