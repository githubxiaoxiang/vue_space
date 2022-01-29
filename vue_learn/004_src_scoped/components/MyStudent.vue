<template>
  <div class="demo">
    <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
    <span class="title">你好啊</span>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  components: {},
  data() {
    return {
      name: "张三",
      age: 15,
    };
  },
};
</script>

// scoped 局部样式  组件内有效 防止多个组件样式重名
<style lang='less' scoped>
.demo {
  background-color: skyblue;
  .title{
      font-size: 40px;
      color: slateblue;
  }
}
</style>>