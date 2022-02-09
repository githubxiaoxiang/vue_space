<template>
  <div>
    <h1>person人员列表</h1>
    <h1 style="color:red">count组件总数{{sum}}</h1>
    <input type="text" v-model="title" placeholder="请输入要添加的person" />
    <button @click="addPerson">增加</button>
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
          return this.$store.state.personList   
      },
      sum()
      {
          return this.$store.state.sum
      }
  },
  methods:{
      addPerson()
      {
          let personObj = {id:this.idd,name:this.title}
          this.$store.commit('ADD_PERSON',personObj)
          this.title = ""
      }
  }
};
</script>

<style>
</style>