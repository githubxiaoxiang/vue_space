export default {
    // 插件
    install(Vue, ...args) {
        console.log(...args)

        //全局过滤器
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 4)
        })

        //定义全局指令
        Vue.directive('fbind', {
            bind(element, bind) {
                element.value = bind.value
            },
            inserted(element, bind) {
                element.focus()
            },
            updated(element, bind) {
                element.value = bind.value
            },
        })

        // 全局混入
        Vue.mixin({
            data() {
                return {
                    x: 10,
                    y: 100
                }
            }
        })
    }
}