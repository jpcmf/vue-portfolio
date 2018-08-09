<template lang="html">
  <div>
    <header id="header" :class="{'reveal alt': scrollPosition < 500, 'reveal': scrollPosition > 500}">
      <!-- <a href="index.html" class="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a> -->
      <router-link :to="{ name: 'home', params: {} }" class="logo"><strong>JPCMF</strong> <!-- <span>by HTML5 UP</span> --></router-link>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  props: ['rotas'],

  data() {
    return {
      scrollPosition: null
    }
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss"></style>
