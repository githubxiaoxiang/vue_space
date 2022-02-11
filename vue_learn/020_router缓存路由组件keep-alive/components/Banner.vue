<template>
  <div>
    <h1>Vue Router Demo</h1>
    <button @click="onBack">后退</button>
    <button @click="onForward">前进</button>
    <button @click="onGo">go使用</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    onBack() {
      this.$router.back();
    },
    onForward() {
      this.$router.forward();
    },
    onGo() {
      // 正数：前进n步 负数：后退n步
      this.$router.go(1);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>