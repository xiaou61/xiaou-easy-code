import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SlideVerify from 'vue-monoplasty-slide-verify';


createApp(App).use(store).use(router).use(SlideVerify).mount('#app')
