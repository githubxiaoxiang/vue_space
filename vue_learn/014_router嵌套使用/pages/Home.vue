<template>
  <div>
    <h1>Home</h1>
    <!--这里需要写完整路径  -->
    <router-link class="mytab" active-class="mytab mytabActive" to="/home/message">Message</router-link>
    <router-link class="mytab" active-class="mytab mytabActive" to="/home/news">News</router-link>
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