<template>
  <div>
    <h1>Home</h1>
    <!-- 1. 作用：控制路由跳转时操作浏览器历史记录的模式
    2. 浏览器的历史记录有两种写入方式：分别为push和replace，push是追加历史记录，replace是替换当前记录。路由跳转时候默认为push
    3. 如何开启replace模式：<router-link replace .......>News</router-link> -->
    <router-link class="mytab" replace active-class="mytab mytabActive" to="/home/message">Message</router-link>
    <router-link class="mytab" replace active-class="mytab mytabActive" to="/home/news">News</router-link>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home挂载了");
    console.log(this);
    window.homeRoute = this.$route;
    window.homeRouter = this.$router;
  },
  beforeDestroy() {
    console.log("Home销毁了");
  },
};
</script>

<style>
</style>