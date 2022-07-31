import App from './App.vue';
import router from './router'
import vuetify from './plugins/vuetify/vuetify'
import { loadFonts } from './plugins/vuetify/webfontloader'

loadFonts()

const app = createApp(App);

app.use(createPinia());
app.use(router)
app.use(vuetify)

app.mount('#app');
