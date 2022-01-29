<template>
  <div id="app">
    <MyStudent/>
    <MySchool/>
  </div>
</template>

<script>
import MySchool from './components/MySchool.vue';
import MyStudent from './components/MyStudent.vue';
export default {
  name: "App",
  components: {MyStudent,MySchool},
  data() {
    return {};
  }
};
</script>

<style>
</style>