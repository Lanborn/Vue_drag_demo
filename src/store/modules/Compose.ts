import { defineStore } from "pinia";
import { Names } from "../enums/store-name";

export const useComposeStore = defineStore(Names.COMPOSE, {
  state() {
    return {
      areaData: {
        // 选中区域包含的组件以及区域位移信息
        style: {
          top: 0,
          left: 0,
          width: 0,
          height: 0,
        },
        components: [],
      },
      editor: null,
    };
  },
  getters: {},
  actions: {},
});
