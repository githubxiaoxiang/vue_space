<template>
  <div>
    <h1>当前总和:{{sum}}</h1>
    <h2>放大的数字:{{bigSum}}</h2>
    <h2 style="color: pink;">{{school}}---{{subject}}</h2>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increament">增加</button>
    <button @click="decreament">减少</button>
    <button @click="increamentOdd">当前求和为奇数再加</button>
    <button @click="increamentWait">延时相加</button>
  </div>
</template>

<script>
    import {
        mapState,
        mapGetters
    } from 'vuex'
    export default {
        name: "Count",
        data() {
            return {
                n: 1,
            }
        },
        methods: {
            increament() {
                this.$store.commit('ADD', this.n)
            },
            decreament() {
                this.$store.dispatch('sub', this.n)
            },
            increamentOdd() {
                this.$store.dispatch('addOdd', this.n)
            },
            increamentWait() {
                this.$store.dispatch('addWait', this.n)
            }
        },
        computed: {
            // sum() {
            //     return this.$store.state.sum
            // },
            // school() {
            //     return this.$store.state.school
            // },
            // subject() {
            //     return this.$store.state.subject
            // },


            //借助mapState生成计算属性，从state中读取数据。（对象写法）
            // ...mapState({
            //     'sum': 'sum',
            //     'school': 'school',
            //     'subject': 'subject'
            // }),

            //借助mapState生成计算属性，从state中读取数据。（数组写法）
            ...mapState(['sum', 'school', 'subject']),


            // bigSum() {
            //     return this.$store.getters.bigSum
            // }

            //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
            ...mapGetters({
                'bigSum': 'bigSum'
            })
            //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
            // ...mapGetters(['bigSum'])
        },
        mounted() {
            const x = mapState({
                'sum': 'sum',
                'school': 'school',
                subject: 'subject'
            })
            console.log(x)
        },
    };
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>