import Vue from 'vue'
import App from './App.vue'
import dotenv from 'dotenv'
dotenv.config()

import './registerServiceWorker'
import { AUTH_CHECK } from '@/store/actions/auth'
import { db } from './firebase'
import router from './router'
import store from './store'

db

store.dispatch(AUTH_CHECK);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
