// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

// 부트스트랩 css
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
    .use(router)
    .mount('#app')
