import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import quasarLang from 'quasar/lang/es'
import router from './assets/scripts/router.js'
import PrimeVue from 'primevue/config'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

// Import styles
import 'quasar/src/css/index.sass'
import './assets/styles/style.css'

// Import Prime Vue Styles
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import App from './App.vue'

createApp(App)
.use(Quasar, {
	plugins: {
		Notify
	},
	lang: quasarLang
})
.use(PrimeVue)
.use(router)
.mount('#app')