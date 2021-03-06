import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import VueRouter from 'vue-router'
import { routes } from './routes'

import Meta from 'vue-meta'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'

import './directives/Transform'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faStrava } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import 'bootstrap/scss/bootstrap.scss';
// import './assets/sass/variables.scss';
import 'jquery/dist/jquery.js'
import './assets/js/app.js'

Vue.use(VueResource)
Vue.http.options.root = 'https://jpcmf-portfolio-api.herokuapp.com/'
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VueScrollTo, {
  duration: 600,
  easing: 'ease',
  offset: -50,
})
Vue.use(Meta)

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// google analytics
const isProd = process.env.NODE_ENV === 'production'
Vue.use(VueAnalytics, {
  id: 'UA-1624952-20',
  router,
})

// fontawesome
library.add(faStrava)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  // mounted() {
  //do something after mounting vue instance
  // You'll need this for renderAfterDocumentEvent.
  // document.dispatchEvent(new Event('render-event'))
  // }
})
