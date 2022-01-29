<template>
    <div>
        <h1>学校名：{{schoolName}}</h1>
        <h1>学校地址：{{address}}</h1>
    </div>
</template>

<script>
import { m1} from '@/mixins'
export default {
    name:"MySchool",
    components:{

    },
    data()
    {
        return {
            schoolName:"厦门一中",
            address:"湖里"
        }
    },
    mixins:[m1]
}
</script>

<style>

</style>