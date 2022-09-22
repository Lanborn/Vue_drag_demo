import { createApp } from "vue";
import { createPinia } from "pinia";

import { globalRegister } from "./global";

import App from "./App.vue";
import "@/assets/iconfont/iconfont.css";
import "@/assets/styles/reset.css";
import "@/assets/styles/global.less";
import router from "./router";

const app = createApp(App);
globalRegister(app);

app.use(createPinia());
app.use(router);

app.mount("#app");
