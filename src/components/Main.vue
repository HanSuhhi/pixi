<template>
  <div>
    <render-component></render-component>
  </div>
</template>

<script lang='ts' setup>
import RenderComponent from "./render/Render.vue";
import ready from "../events/ready/ready";
import regist from "../events/regist/regist";
import { loading } from "../events/loading/loadng";

Promise.resolve(ready.regist())
  .then(regist.regist.bind(regist))
  .then(loading.regist.bind(loading));
</script>

<style lang="scss" scoped></style>