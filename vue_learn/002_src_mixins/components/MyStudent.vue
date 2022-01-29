<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h1>年龄：{{age}}</h1>
        <button @click='showName'>显示名字</button>
    </div>
</template>

<script>
import { m1, m2 } from '@/mixins'
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
    },
    mixins:[m1,m2]
}
</script>

<style>

</style>