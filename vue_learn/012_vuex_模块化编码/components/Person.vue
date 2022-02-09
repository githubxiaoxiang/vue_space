<template>
  <div>
    <h1>person人员列表</h1>
    <h1 style="color:red">count组件总数{{sum}}</h1>
    <h2>第一个人员名:{{firstPersonName}}</h2>
    <input type="text" v-model="title" placeholder="请输入要添加的person" />
    <button @click="addPerson">增加</button>
    <button @click="addWang">添加王姓人员</button>
    <button @click="addServerPerson">服务器随机添加人员</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
          {{p.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Person",
  data()
  {
      return {
          title:"",
          idd:0
      }
  },
  computed:{
      personList()
      {
          return this.$store.state.personAbout.personList   
      },
      sum()
      {
          return this.$store.state.countAbout.sum
      },
      firstPersonName()
      {
          return this.$store.getters["personAbout/firstPersonName"]
      }
  },
  methods:{
      addPerson()
      {
          let personObj = {id:this.idd,name:this.title}
          this.$store.commit('personAbout/ADD_PERSON',personObj)
          this.title = ""
          this.idd++
      },
      addWang()
      {
          let personObj = {id:this.idd,name:this.title}
          this.$store.dispatch('personAbout/addPersonWang',personObj)
          this.title = ""
          this.idd++
      },addServerPerson()
      {
          this.$store.dispatch('personAbout/addServerPerson',this.idd)
          this.title = ""
          this.idd++
      }
  }
};
</script>

<style>
</style>