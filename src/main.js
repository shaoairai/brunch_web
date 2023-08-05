import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/all.scss";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";
