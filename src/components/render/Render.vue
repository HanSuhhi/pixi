<template>
  <div class="pixi-render" ref="renderContainer"></div>
</template>

<script>
import p from "../../utils/P";
export default {
  mounted() {
    const renderCanvas = this.$refs.renderContainer;
    Promise.resolve(renderCanvas.appendChild(p.PIXIApp.view)).then(() => {
      p.stop();
      p.EventBus.emit("ready");
    });
  },
};
</script>

<style lang="scss" scoped></style>