import {createApp} from 'vue'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'

// Create vue app
const app = createApp(App)

// Use plugins
app.use(vuetify)
app.use(router)

// Mount vue app
app.mount('#app')