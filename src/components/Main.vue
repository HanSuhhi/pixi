<template>
  <div>
    <render-component></render-component>
  </div>
</template>

<script lang='ts' setup>
import RenderComponent from "./render/Render.vue";
import ready from "../events/ready/ready";
import regist from "../events/regist/regist";
import { cutscene } from "../events/cutscene/cutscene";
Promise.resolve(ready.regist())
  .then(regist.regist.bind(regist))
  .then(cutscene.regist.bind(cutscene));
</script>

<style lang="scss" scoped></style>