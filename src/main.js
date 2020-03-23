import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './styles/global.scss'
import * as VueGoogleMaps from 'vue2-google-maps';
import _ from 'lodash';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import vSelect from "vue-select";
 
Vue.component("v-select", vSelect);

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCa_A7Pfp8VgZoZsDddRtPEL-tW_MFT7iY',
    libraries: 'places',
    region: 'IL', 
    language: 'en',
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
