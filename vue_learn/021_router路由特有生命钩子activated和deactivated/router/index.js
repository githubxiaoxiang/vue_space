// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Message"
import News from "../pages/News"
import Detail from "../pages/Detail"
export default new VueRouter({
    routes: [{
        path: '/about',
        component: About
    }, {
        path: '/home',
        component: Home,
        children: [{
            path: "message", //此处一定不要写成 '/message'
            component: Message,
            children: [{
                name: "detail",
                // path: "detail/:id/:title", //指定params中参数名
                component: Detail,

                // props作用：让路由组件更方便的收到参数
                // props的第一种写法 值为对象 该对象的所有key-value将会以props形式传递给detail组件 传的是死数据 一般不用
                /*props: {
                    a: 1,
                    b: "kkkk"
                }*/

                //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                // props: true

                path: "detail",
                //props的第三种写法，值为函数 可以query或params参数
                // props($route) {
                //     return {
                //         id: $route.query.id,
                //         title: $route.query.title
                //     }
                // }

                // 解构写法
                // props({ query }) {
                //     return {
                //         id: query.id,
                //         title: query.title
                //     }
                // }

                // 连续解构赋值 query里含有id和title 加:再次解构   一般不用 语义不明显
                props({ query: { id, title } }) {
                    return {
                        id, //同名 可以简写 不用 id:id
                        title: title
                    }
                }
            }]
        }, {
            path: "news",
            component: News
        }]
    }]
})