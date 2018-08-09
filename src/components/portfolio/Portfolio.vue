<template lang="html">

  <div id="main">
    <section id="three">
      <div class="inner">
        <header class="major">
          <h2>{{ foto.titulo }}</h2>
        </header>
        <p>{{ foto.descricaofull }}</p>
        <span class="image main">
          <!-- <img src="/src/assets/images/about.jpg" alt=""> -->
          <img-responsive v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
        </span>
        <ul class="actions">
          <li><a :href="foto.link" target="_blank" class="button next">View project</a></li>
          <li><router-link :to="{ name: 'home' }"><my-button label="back" type="button"/></router-link></li>
        </ul>
      </div>
    </section>
  </div>

</template>

<script>
import ImgResponsive from '../shared/img-responsive/ImgResponsive.vue';
import Button from '../shared/button/Button.vue';
import Pic from '../../domain/pic/Pic.js';
import PicService from '../../domain/pic/PicService.js'

export default {

  components: {
    'img-responsive': ImgResponsive,
    'my-button': Button
  },

  data() {
    return {
      foto: new Pic(),
      id: this.$route.params.id
    }
  },

  created() {
    this.service = new PicService(this.$resource)
    // this.resource = this.$resource('v1/fotos')

    if (this.id) {
      this.service
        .search(this.id)
        .then(foto => this.foto = foto)
    }
  }
}
</script>

<style lang="scss"></style>
