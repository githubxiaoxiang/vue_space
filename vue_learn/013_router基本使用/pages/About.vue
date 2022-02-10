<template>
    <h1>About</h1>
</template>

<script>
export default {
    name:"About",
    mounted() {
        console.log("About挂载了")
        console.log(this)
        window.aboutRoute = this.$route
        window.aboutRouter = this.$router
    },beforeDestroy() {
        console.log("About销毁了")
    },
}
</script>

<style>

</style>