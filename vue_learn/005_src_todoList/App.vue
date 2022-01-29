<template>
  <div id="app">
      <MyHeader v-on:add-item="onAddItem"></MyHeader>
      <MyList :todos="todos" v-on:del-item="onDelItem" v-on:one-done-change="onDoneChangById"></MyList>
      <MyFooter :todos="todos" v-on:done-all-change="onDoneChange" v-on:clear-all="onClearAllTodo"></MyFooter>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';
import MyList from './components/MyList';
export default {
  name: "App",
  components: {
    MyFooter,
    MyHeader,
    MyList
  },
  data() {
    return {
      increateNum:0,
      todos:[
        {id:'001',title:'抽烟',done:true},
				{id:'002',title:'喝酒',done:false},
				{id:'003',title:'开车',done:false}
      ]
    };
  },
  mounted(){
    this.increateNum = this.todos.length
  },
  methods:{
    onAddItem(title)
    {
      this.increateNum++
      let data = {id:this.increateNum+"",title:title,done:false}
      this.todos.push(data)
    },
    onDelItem(id)
    {
        this.todos = this.todos.filter(data=>data.id!==id)
    },
    onDoneChange(value)
    {
      this.todos.forEach(todo=>{
        // this.$set(todo,"done",value)
          todo.done=value
      })
    },
    onClearAllTodo()
    {
      this.todos = this.todos.filter(todo=>todo.done===false)
    },
    onDoneChangById(id)
    {
      this.todos.forEach(todo=>{
        if(todo.id==id)
        {
          let bol = !todo.done
          // this.$set(todo,"done",bol)
          todo.done =!todo.done
        }
      })
    }
  }
};
</script>

<style>
</style>