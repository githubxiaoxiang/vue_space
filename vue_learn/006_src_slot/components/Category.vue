<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
    </div>
</template>

<script>
export default {
    name:"Category",
    props:["dataList","title"],
    data(){
        return {}
    }
}
</script>

<style>
    .category{
        background:skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background: orange;
    }   
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>