import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "../src/style.css";
import "../src/assets/main.css";

createApp(App).use(createPinia()).mount("#app");
