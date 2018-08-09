import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import { routes } from './routes'
import './directives/Transform'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'

// import 'bootstrap/scss/bootstrap.scss';
// import './assets/sass/variables.scss';
import 'jquery/dist/jquery.js'
import './assets/js/app.js'

Vue.use(VueResource)
Vue.http.options.root = 'https://api-api2018.wedeploy.io'
// Vue.http.options.root = 'http://localhost:3000'
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VueScrollTo, {
  duration: 600,
  easing: 'ease'
})

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
