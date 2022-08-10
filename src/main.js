import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueCountTo from 'vue-count-to'; // .component('VueCountTo',VueCountTo) vue2 會出現與vue3不兼容的問題

const app = createApp(App)
app.use(store).use(router).mount('#app')
