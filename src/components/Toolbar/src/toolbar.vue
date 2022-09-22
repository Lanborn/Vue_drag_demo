<template>
  <div class="toolbar">
    <el-button @click="undo">撤消</el-button>
    <el-button @click="redo">重做</el-button>
    <label for="input" class="insert">
      插入图片
      <input id="input" type="file" hidden @change="handleFileChange" />
    </label>

    <el-button style="margin-left: 10px" @click="preview(false)"
      >预览</el-button
    >
    <el-button @click="save">保存</el-button>

    <el-button @click="clearCanvas">清空画布</el-button>

    <div class="canvas-config">
      <span>画布大小</span>
      <input v-model="store.canvasStyleData.width" />
      <span>*</span>
      <input v-model="store.canvasStyleData.height" />
    </div>
    <div class="canvas-config">
      <span>画布比例</span>
      <input v-model="scale" @input="handleScaleChange" /> %
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useStore from "@/store/index";

export default defineComponent({
  setup() {
    const isShowPreview = ref(false);
    const isScreenshot = ref(false);
    const scale = ref(100);
    const { main } = useStore();

    const store = main();

    const undo = () => {};
    const redo = () => {};
    const handleFileChange = () => {};
    const preview = () => {};
    const save = () => {};
    const clearCanvas = () => {};

    return {
      isShowPreview,
      isScreenshot,
      scale,
      store,
      undo,
      redo,
      handleFileChange,
      preview,
      save,
      clearCanvas,
    };
  },
});
</script>

<style lang="less" scoped>
.toolbar {
  padding: 15px 10px;
  white-space: nowrap;
  overflow-x: auto;
  background: #fff;
  border-bottom: 1px solid #ddd;
  .canvas-config {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #606266;

    input {
      width: 50px;
      margin-left: 4px;
      outline: none;
      padding: 0 5px;
      border: 1px solid #ddd;
      color: #606266;
    }

    span {
      margin-left: 10px;
    }
  }
  .insert {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    margin-left: 10px;

    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: 0;
    }

    &:hover {
      background-color: #ecf5ff;
      color: #3a8ee6;
    }
  }
}
</style>