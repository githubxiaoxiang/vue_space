<template>
  <div>
    <h1>当前总和:{{$store.state.sum}}</h1>
    <h2>放大的数字:{{$store.getters.bigSum}}</h2>
    <!-- <h1>当前总和:{{sum}}</h1> -->
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
    export default {
        name: "Count",
        data() {
            return {
                n: 1,
                // sum: 0
            }
        },
        methods: {
            increament() {
                // 原始方法
                // this.sum += this.n

                // vuex dispatch
                // this.$store.dispatch('add', this.n)

                // !!!!!不用actions额外处理逻辑的 可直接commit到mutations处理
                this.$store.commit('ADD', this.n)
            },
            decreament() {
                // this.sum -= this.n

                this.$store.dispatch('sub', this.n)
            },
            increamentOdd() {
                // if (this.sum % 2) {
                //     this.sum += this.n
                // }

                this.$store.dispatch('addOdd', this.n)
            },
            increamentWait() {
                // setTimeout(() => {
                //     this.sum += this.n
                // }, 500)

                this.$store.dispatch('addWait', this.n)
            }
        },
        mounted() {
            console.log(this)
        },
    };
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>