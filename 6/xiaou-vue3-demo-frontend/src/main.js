import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
const app = createApp(App);
axios.defaults.baseURL = 'http://127.0.0.1:8081'
app.config.globalProperties.$axios = axios
app.use(store).use(router).mount('#app')
