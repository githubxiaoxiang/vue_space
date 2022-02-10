<template>
  <h1>Home</h1>
</template>

<script>
export default {
    name:"Home",
    mounted() {
        console.log("Home挂载了")
        console.log(this)
    },beforeDestroy() {
        console.log("Home销毁了")
    },
}
</script>

<style>

</style>