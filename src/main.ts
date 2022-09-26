import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/assets/iconfont/iconfont.css";
import "@/assets/styles/reset.css";
import "@/assets/styles/global.less";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
