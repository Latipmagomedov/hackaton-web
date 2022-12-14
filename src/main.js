import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app')

import VInput from './components/UI/VInput'
app.component('VInput', VInput)

import VButton from './components/UI/VButton'
app.component('VButton', VButton)



