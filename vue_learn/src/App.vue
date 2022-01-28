<template>
  <div id="app">
    <h1 ref="r1">我是个测试</h1>
    <title ref="title">我是个ttle</title>
    <button @click="showRef">按钮</button>
    <MyStudent ref="stu"/>
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
  methods: {
    showRef()
    {
      console.log(this.$refs.r1)// //真实DOM元素
      console.log(this.$refs.title)//真实DOM元素
      console.log(this.$refs.stu)//School组件的实例对象（vc）
    }
  },
};
</script>

<style>
</style>