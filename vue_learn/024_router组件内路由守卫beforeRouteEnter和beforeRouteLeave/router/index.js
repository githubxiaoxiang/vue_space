// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Message"
import News from "../pages/News"
import Detail from "../pages/Detail"
const router = new VueRouter({
    routes: [{
        path: '/about',
        component: About,
        meta: { isAuth: true, title: "关于" }
    }, {
        path: '/home',
        component: Home,
        meta: { title: "主页" },
        children: [{
            path: "message", //此处一定不要写成 '/message'
            meta: { isAuth: true, title: "信息" },
            component: Message,
            children: [{
                name: "detail",
                meta: { title: "详情" },
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
            meta: { isAuth: true, title: "新闻" }, //自定义参数
            component: News,
            /**beforeEnter: (to, from, next) => {
                // 独享路由守卫  只有前置 没有独享后置 可以和全局后置路由守卫一起使用
                console.log("独守路由守卫", to, from)
                if (to.meta.isAuth) {
                    if (localStorage.getItem("school") === "atguigu") {
                        next()
                    } else {
                        alert("学校名不对，无权限查看")
                    }
                } else {
                    next()
                }
            }**/
        }]
    }]
})

// 全局前置路由守卫----初始化的时候调用，每次路由切换的时候调用
/**router.beforeEach((to, from, next) => {
    console.log("全局前置路由@", to, from)
        // to.path === "/home/message" || to.path === "/home/news"
        // to.name==="message"||to.name==="news"
        // to.meta.isAuth  最佳方式  meta中定义变量标识
    if (to.meta && to.meta.isAuth) { //判断当前路由是否需要进行权限控制
        if (localStorage.getItem("school") === "atguigu") { //权限的具体规则
            next()
        } else {
            alert("学校名不对，无权限查看")
        }
    } else {
        next()
    }
})**/

// 全局后置路由守卫----初始化的时候调用，每次路由切换后调用
/**router.afterEach((to, from) => {
    console.log("@全局后置路由@", to, from)
    document.title = to.meta.title || "vue-learn"
})**/

export default router