import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import store from './store'
const app = createApp(App);
app.config.devtools = true;
app.use(store).mount('#app');
