import { defineStore } from "pinia";
import { Names } from "../../enums/store-name";

export const useMainStore = defineStore(Names.MAIN, {
  state: () => {
    return {
      canvasStyleData: {
        // 页面全局数据
        width: 1200,
        height: 740,
        scale: 100,
        color: "#000",
        opacity: 1,
        background: "#fff",
        fontSize: 14,
      },
      componentData: [],
      curComponent: null,
      curComponentIndex: null,
    };
  },
  getters: {},
  actions: {},
});
