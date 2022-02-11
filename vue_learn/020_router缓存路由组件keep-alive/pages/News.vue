<template>
  <div>
    <ul>
      <li>新闻1 
        <input type="text" name="" id="">
      </li>
      <li>新闻2</li>
      <li>新闻3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  beforeDestroy()
  {
    console.log("News组件被销毁")
  }
};
</script>

<style>
</style>