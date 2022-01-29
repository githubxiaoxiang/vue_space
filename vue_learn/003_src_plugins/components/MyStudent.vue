<template>
    <div>
        <h1>姓名：{{name|mySlice}}</h1>
        <h1>年龄：{{age}}</h1>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
export default {
    name:"MyStudent",
    components:{

    },
    data()
    {
        return {
            name:"张三",
            age:15
        }
    }
}
</script>

<style>

</style>