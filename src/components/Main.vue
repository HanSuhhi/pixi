<template>
  <div>
    <render-component></render-component>
  </div>
</template>

<script lang='ts' setup>
import RenderComponent from "./render/Render.vue";
import ready from "../events/ready/ready";
import regist from "../events/regist/regist";
import main from "../events/main/main";
import cutscene from "../events/cutscene/cutscene";
import { onMounted } from "vue";

onMounted(() => {
  ready.regist();
  regist.regist();
  cutscene.regist();
  main.regist();
});
</script>

<style lang="scss" scoped></style>