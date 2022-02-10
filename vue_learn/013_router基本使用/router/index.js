// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About"
import Home from "../pages/Home"
export default new VueRouter({
    routes: [{
        path: '/About',
        component: About
    }, {
        path: '/Home',
        component: Home
    }]
})