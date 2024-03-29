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
                path: "detail/:id/:title", //指定params中参数名
                component: Detail
            }]
        }, {
            path: "news",
            component: News
        }]
    }]
})