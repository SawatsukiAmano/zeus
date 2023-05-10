// main.ts
import { createApp } from "vue";
import App from "@/App.vue";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import store from '@store/index'


const app = createApp(App);
app.use(router);
app.use(store)


app.mount("#app");
