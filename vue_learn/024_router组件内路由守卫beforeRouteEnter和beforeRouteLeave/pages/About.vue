<template>
  <h1>About</h1>
</template>

<script>
export default {
  name: "About",
  mounted() {
    // console.log("About挂载了")
    // console.log(this)
    // window.aboutRoute = this.$route
    // window.aboutRouter = this.$router
  },
  beforeDestroy() {
    // console.log("About销毁了")
  },
  beforeRouteEnter(to, from, next) {
    // 通过路由规则进入该组件时调用  若是通过一般组件标签<About></About>则不会调用该方法
    console.log("About----beforeRouteEnter", to, from);
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，无权限查看");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    // 通过路由组件离开该组件时调用  根据路由跳转动作来执行 有next参数！！！！而全局路由和独守路由跳转时前后一起执行，全局后置无next参数
    console.log("About----beforeRouteLeave");
    next();
  },
};
</script>

<style>
</style>