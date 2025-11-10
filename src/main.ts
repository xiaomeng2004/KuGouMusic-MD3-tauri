import { createApp } from "vue";
import { createPinia } from 'pinia'
import router from './router'
import App from "./App.vue";

import 'mdui/mdui.css';
import 'mdui';

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount("#app");
