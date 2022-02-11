<template>
  <div>
    <!-- params -->
    <h3>id:{{id}}</h3>
    <h3>title:{{title}}</h3>

    <!-- <h3>{{a}}</h3>
    <h3>{{b}}</h3> -->
  </div>
</template>

<script>
export default {
  name: "Detail",
  // props:['a','b'],
  props:['id','title'],
  mounted()
  {
      // console.log(this.$route)
      console.log(this)
  }
};
</script>

<style>
</style>