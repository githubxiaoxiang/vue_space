<template>
  <div id="app">
    <h1>我是个测试</h1>
    <MyStudent/>
  </div>
</template>

<script>
import MyStudent from './components/MyStudent.vue';
export default {
  name: "App",
  components: {MyStudent},
  data() {
    return {};
  },
};
</script>

<style>
</style>