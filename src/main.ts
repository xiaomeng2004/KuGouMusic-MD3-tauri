import { createApp } from "vue";
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)
import App from "./App.vue";
app.use(pinia)

app.mount("#app");
