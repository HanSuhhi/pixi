<template>
  <main-component></main-component>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import MainComponent from "./components/Main.vue";
import input from "./components/pixi/input/input";
onMounted(() => {
  // 页面回车聚焦输入框
  window.addEventListener("keydown", (key) => {
    if (key.key === "Enter") {
      input.focus();
    }
  });
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>