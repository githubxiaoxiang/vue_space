<template>
  <div>
    <!-- params -->
    <h3>id:{{$route.params.id}}</h3>
    <h3>title:{{$route.params.title}}</h3>
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