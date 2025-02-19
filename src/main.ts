import './assets/styles/reset.css'
// import './assets/styles/fonts.css'
import './assets/styles/variables.css'
import '@fontsource-variable/nunito'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
