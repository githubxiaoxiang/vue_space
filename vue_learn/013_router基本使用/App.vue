<template>
<div>
  <h1>app</h1>
  <Banner></Banner>
  	<!-- Vue中借助router-link标签实现路由的切换 -->
  <router-link class="mytab" active-class="mytab mytabActive" to="/About">About</router-link>
  <router-link class="mytab" active-class="mytab mytabActive" to="/Home">Home</router-link>
  <div>
    	<!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import Banner from './components/Banner';
    export default {
        name: "App",
        components:{
            Banner
        }
    };
</script>
<style>
  /* a{
    text-decoration:none;
  } */
  .mytab{
    color: blue;
    margin-left: 20px;
  }
  .mytabActive{
    color: pink;
  }
</style>