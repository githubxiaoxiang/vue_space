<template>
    <div>
        <h1>学校名：{{schoolName|mySlice}}</h1>
        <h1>学校地址：{{address}}</h1>
    </div>
</template>

<script>
export default {
    name:"MySchool",
    components:{

    },
    data()
    {
        return {
            schoolName:"厦门一中哈哈化工呢",
            address:"湖里"
        }
    }
}
</script>

<style>

</style>