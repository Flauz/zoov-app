import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'leaflet/dist/leaflet.css';
import './styles/generic/_reset.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
