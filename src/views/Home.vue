<template>
  <div class="home">
    <toolbar></toolbar>
    <main>
      <!-- left components -->
      <section class="left"></section>
      <!-- center canvas -->
      <section class="center">
        <div class="content">
          <editor></editor>
        </div>
      </section>
      <!-- right Attr -->
      <section class="right"></section>
    </main>
  </div>
</template>

<script lang="ts">
import Editor from "@/components/Editor/index.vue";

import Toolbar from "@/components/Toolbar/src/toolbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Editor,
    Toolbar,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  background: #fff;

  main {
    height: calc(100% - 64px);
    position: relative;

    .left {
      position: absolute;
      height: 100%;
      width: 200px;
      left: 0;
      top: 0;

      & > div {
        overflow: auto;

        &:first-child {
          border-bottom: 1px solid #ddd;
        }
      }
    }

    .right {
      position: absolute;
      height: 100%;
      width: 288px;
      right: 0;
      top: 0;

      .el-select {
        width: 100%;
      }
    }

    .center {
      margin-left: 200px;
      margin-right: 288px;
      background: #f5f5f5;
      height: 100%;
      overflow: auto;
      padding: 20px;

      .content {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
  }
}
</style>