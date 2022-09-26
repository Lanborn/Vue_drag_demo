<template>
  <div class="component-list" @dragstart="handleDragStart">
    <div
      v-for="(item, index) in componentLists"
      :key="index"
      class="list"
      draggable="true"
      :data-index="index"
    >
      <span class="iconfont" :class="'icon-' + item.icon"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import componentList from "@/custom-component/config/component-list";
export default defineComponent({
  setup() {
    const componentLists = componentList;
    const handleDragStart = (e: any) => {
      e.dataTransfer.setData("index", e.target.dataset.index);
    };
    return {
      componentLists,
    };
  },
});
</script>

<style lang="less" scoped>
.component-list {
  height: 65%;
  padding: 10px;
  display: grid;
  grid-gap: 10px 19px;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-template-rows: repeat(auto-fill, 40px);

  .list {
    width: 80px;
    height: 40px;
    border: 1px solid #ddd;
    cursor: grab;
    text-align: center;
    color: #333;
    padding: 2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
      cursor: grabbing;
    }

    .iconfont {
      margin-right: 4px;
      font-size: 20px;
    }

    .icon-wenben,
    .icon-biaoge {
      font-size: 18px;
    }

    .icon-tupian {
      font-size: 16px;
    }
  }
}
</style>