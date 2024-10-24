import { createApp } from 'vue'
import VeoraUI from 'veora-ui'
// import 'veora-ui/ui/es/style.css'

import App from './App.vue'

const app = createApp(App)

app.use(VeoraUI)

app.mount('#app')
