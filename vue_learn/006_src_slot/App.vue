<template>
  <div class="container">
    <Category :dataList="foods" title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Category>
    <Category :dataList="games" title="游戏">
        <ul>
            <li v-for="(item,index) in games" :key="index">
                {{item}}
            </li>
        </ul>
    </Category>
    <Category :dataList="films" title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category';
export default {
  name: "App",
  data()
  {
    return {
        foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  },
  components:{
    Category
  }
};
</script>

<style>
.container{
  display: flex;
  justify-content: space-around;
}
</style>