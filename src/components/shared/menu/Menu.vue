<template lang="html">
  <div>
    <nav id="menu">
      <div class="inner">
        <ul class="links">
          <li class="nav-item" v-for="rota in rotas" >
            <router-link :to="rota.path ? rota.path : '/'" class="nav-link">
              {{ rota.title }}
            </router-link>
          </li>
          <!-- <li><a href="index.html">Home</a></li>
          <li><a href="landing.html">Landing</a></li>
          <li><a href="generic.html">Generic</a></li>
          <li><a href="elements.html">Elements</a></li> -->
        </ul>
        <!-- <ul class="actions stacked">
          <li><a href="#" class="button primary fit">Get Started</a></li>
          <li><a href="#" class="button fit">Log In</a></li>
        </ul> -->
      </div>
      <a class="close" href="#menu">Close</a>
    </nav>
  </div>

  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'home', params: {} }" class="navbar-brand">Compacto Records</router-link>
    <a class="navbar-brand" href="/">Compacto Records</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="rota in rotas" >
          <router-link :to="rota.path ? rota.path : '/'" class="nav-link">
            {{ rota.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav> -->

  <!-- <nav>
    <ul>
      <li v-for="rota in rotas">
        <router-link :to="rota.path ? rota.path : '/'">
          {{ rota.title }}
        </router-link>
      </li>
    </ul>
  </nav> -->

</template>

<script>
export default {
  props: ['rotas']
}
</script>

<style lang="scss">
</style>
