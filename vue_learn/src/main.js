import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// 入口文件

/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/
Vue.config.productionTip = false

new Vue({
    router,
    store,
    //render函数完成了这个功能：将App组件放入容器中
    // render: h => h(App)

    // 推演简写
    // render(createElement) {
    //     return createElement('h1', '你好啊')
    // }

    // 没用this可以用箭头函数
    // render: (createElement) => {
    //     return createElement('h1', '你好啊2')
    // }

    // 箭头函数只有一个参数 可以省略括号
    // render: createElement => {
    //     return createElement('h1', '你好3')
    // }

    // 箭头函数只有一句可简写为
    // render: createElement => createElement('h1', '你好4')

    // createElement用h代替  由于h1是标签 后面一个参数是内容 若是组件则都在app中 
    // render: h => h('h1', '你好5')

    render: h => h(App)

    // vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器
    // template:`<h1>你好啊</h1>`,
    // components:{App},

}).$mount("#app")