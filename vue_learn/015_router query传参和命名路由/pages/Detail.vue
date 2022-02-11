<template>
  <div>
    <h3>id:{{$route.query.id}}</h3>
    <h3>title:{{$route.query.title}}</h3>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted()
  {
      console.log(this.$route)
  }
};
</script>

<style>
</style>