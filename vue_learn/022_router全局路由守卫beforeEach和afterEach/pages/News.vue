<template>
  <div>
    <h1 :style="{opacity}">我是一直透明变化的文本</h1>
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
  data()
  {
    return {
      opacity:1
    }
  },
  mounted()
  {
      console.log("News组件Mouted")
  },
  activated()
  {
    // keep-alive缓存路由时 切换页面不会执行销毁 故清理定时器用特殊钩子 deactivated
    console.log("我是路由组件特有的生命钩子activated")
    this.timer =setInterval(()=>{
        console.log("News@")
        this.opacity-=0.01;
        if(this.opacity<0)this.opacity =1
      },16)
  },
  deactivated()
  {
     console.log("我是路由组件特有的生命钩子deactivated")
      clearTimeout(this.timer)
  },
  beforeDestroy()
  {
    console.log("News组件被销毁")
  }
};
</script>

<style>
</style>