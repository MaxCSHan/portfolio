import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import './setup/setupFireBase'



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
  created(){

  }
}).$mount('#app')

Vue.use(Notifications)