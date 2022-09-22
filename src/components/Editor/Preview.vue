<template>
  <div class="bg">
    <el-button v-if="!isScreenshot" class="close" @click="close"
      >关闭</el-button
    >
    <el-button v-else class="close" @click="htmlToImage">确定</el-button>
    <div class="canvas-container">
      <div
        class="canvas"
        :style="{
          ...getCanvasStyle(canvasStyleData),
          width: changeStyleWithScale(canvasStyleData.width) + 'px',
          height: changeStyleWithScale(canvasStyleData.height) + 'px',
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isScreenshot: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      props.isScreenshot = true;
    };
    return {};
  },
});
</script>

<style scoped>
</style>