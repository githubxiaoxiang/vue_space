<template>
    <div>
        <h1>学校名：{{schoolName}}</h1>
        <h1>学校地址：{{address}}</h1>
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
            schoolName:"厦门一中",
            address:"湖里"
        }
    }
}
</script>

<style>

</style>