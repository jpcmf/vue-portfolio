import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'
import './directives/Transform'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'
import Meta from 'vue-meta'
import VueAnalytics from 'vue-analytics'

// import 'bootstrap/scss/bootstrap.scss';
// import './assets/sass/variables.scss';
import 'jquery/dist/jquery.js'
import './assets/js/app.js'

Vue.use(VueResource)
Vue.http.options.root = 'https://api-api2018.wedeploy.io'
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
