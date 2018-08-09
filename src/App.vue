<template>
  <div>
    <div id="wrapper" class="container-fluid">
      <my-header/>
      <transition name="page">
        <router-view></router-view>
      </transition>
      <my-contact/>
      <my-footer/>
    </div>
    <my-menu :rotas="routes"/>
  </div>
</template>

<script>
import { routes } from './routes'
import Header from './components/shared/header/Header.vue'
import Menu from './components/shared/menu/Menu.vue'
import Contact from './components/contact/Contact.vue'
import Footer from './components/shared/footer/Footer.vue'

export default {
  components: {
    'my-header': Header,
    'my-menu': Menu,
    'my-contact': Contact,
    'my-footer': Footer
  },

  data() {
    return {
      routes: routes.filter(route => route.menu)
    }
  }
}
</script>

<style lang="scss">
  // Bootstrap way :)
  // @import url('https://fonts.googleapis.com/css?family=Varela+Round');
  // @import './assets/sass/variables.scss';
  // @import '../node_modules/bootstrap/scss/bootstrap.scss';

  // Hardcoded way :)
  @import './assets/sass/main.scss';

  // .container {
  //   font-family: 'Varela Round', Helvetica, Arial, sans-serif;
  //   margin: auto;
  //   max-width: 1200px;
  // }

  .page-enter,
  .page-leave-active {
    opacity: 0;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 300ms;
  }
</style>
