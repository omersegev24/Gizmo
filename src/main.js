import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDgE4Y-tyaTRAD-6hQW-nTSO547pkald3c',
    libraries: 'places', 
    region: 'IL',
    language: 'he',
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
