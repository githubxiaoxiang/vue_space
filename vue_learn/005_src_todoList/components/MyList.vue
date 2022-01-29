<template>
    <ul>
        <MyItem v-for="data in todos" :key="data.id" :todo="data" v-on="$listeners"></MyItem>
    </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
    name:"MyList",
    props:["todos"],
    components:{
        MyItem
    }
}
</script>

<style>

</style>