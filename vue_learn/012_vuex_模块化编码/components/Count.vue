<template>
  <div>
    <h1>当前总和:{{sum}}</h1>
    <h2>放大的数字:{{bigSum}}</h2>
    <h2 style="color: pink;">{{school}}---{{subject}}</h2>
    <h1 style="color:red">person组件人员数{{personList.length}}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="ADD(n)">增加</button>
    <button @click="decreament(n)">减少</button>
    <button @click="increamentOdd(n)">当前求和为奇数再加</button>
    <button @click="increamentWait(n)">延时相加</button>
  </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapActions,
        mapMutations
    } from 'vuex'
    export default {
        name: "Count",
        data() {
            return {
                n: 1,
            }
        },
        methods: {
            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法) 
            // ...mapMutations({
            //     'increament': 'ADD'
            // }),
            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法) 标签调用也用ADD
            ...mapMutations('countAbout',['ADD']),

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
            ...mapActions('countAbout',{
                decreament: 'sub',
                'increamentOdd': 'addOdd',
                increamentWait: 'addWait'
            }),

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)  标签调用也用sum...
            // ...mapActions(['sub', 'addOdd', 'addWait'])
        },
        computed: {
            //借助mapState生成计算属性，从state中读取数据。（对象写法）
            // ...mapState('countAbout',{
            //     'sum': 'sum',
            //     'school': 'school',
            //     'subject': 'subject'
            // }),

            //借助mapState生成计算属性，从state中读取数据。（数组写法）
            ...mapState('countAbout',['sum', 'school', 'subject']),
            ...mapState('personAbout',['personList']),

            //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
            ...mapGetters('countAbout',{
                'bigSum': 'bigSum'
            })
            //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
            // ...mapGetters('countAbout',['bigSum'])
        },
        mounted() {
            console.log(this.$store)
        },
    };
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>