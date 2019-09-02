<template lang="html">
  <div class="centered">
    <banner-home></banner-home>
    <div id="main">

      <div v-show="showLoad" class="load">
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-dual-ring" style="background:0 0">
          <circle cx="50" cy="50" fill="none" stroke-linecap="round" r="40" stroke-width="4" stroke="#fff" stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(233.386 50 50)">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      <section id="one" class="tiles">
        <article v-for="foto of fotosFiltered" v-bind:style="{ backgroundImage: 'url(' + foto.url + ')' }">
          <span class="image" style="display: none;">
            <!-- <img src="images/pic01.jpg" alt=""> -->
            <img-responsive :url="foto.url" :titulo="foto.titulo"/>
          </span>
          <my-tiles :titulo="foto.titulo" :descricao="foto.descricao"/>
          <router-link :to="{ name: 'portfolio', params: {id: foto._id} }" class="link primary" aria-label="Portfolio">
            <!-- <my-button type="button" label="alterar"/> -->
          </router-link>
        </article>
      </section>

    </div>
  </div>
</template>

<script>
import Banner from '../shared/banner/Banner.vue';
import Panel from '../shared/panel/Panel.vue';
import Tiles from '../shared/tiles/Tiles.vue';
import ImgResponsive from '../shared/img-responsive/ImgResponsive.vue';
import Button from '../shared/button/Button.vue';
import PicService from '../../domain/pic/PicService.js'

export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | JPCMF Front-end Developer and UI Designer'
    // meta: [
    //   {property: 'og:title', content: 'JPCMF | UI Designer and Front-end Developer'},
    //   {property: 'og:site_name', content: 'JPCMF | UI Designer and Front-end Developer'},
    //   {property: 'og:type', content: 'website'},
    //   {property: 'og:url', content: 'https://www.joaolabs.tk'},
    //   {property: 'og:image', content: './static/fb.png'},
    //   {property: 'og:description', content: 'Welcome to my Portfolio. I am a UI Designer and Front-end Developer based in Curitiba, Brazil.'}
    // ]
  },
  components: {
    'banner-home': Banner,
    'my-tiles': Tiles,
    'my-panel': Panel,
    'img-responsive': ImgResponsive,
    'my-button': Button
  },

  data() {
    return {
      title: 'Releases',
      fotos: [],
      filter: '',
      messages: '',
      showLoad: true,
    }
  },

  computed: {
    fotosFiltered() {
      if (this.filter) {
        let exp =  new RegExp(this.filter.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
        // return [];
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    remove(foto) {
      // alert('Remove: ' + foto.titulo)

      this.service.removed(foto._id)
        .then(() => {
          let index = this.fotos.indexOf(foto) // position of pic in array
          this.fotos.splice(index, 1) // the instruction change array
          this.messages = 'Picture removed'

          // console.log(index);
        },
        err => {
          // this.messages = 'Can not remove the picture'
          this.messages = err.message

          // console.log(err);
        })
    }
  },

  created() {
    this.showLoad = true
    this.service = new PicService(this.$resource)
    this.service.list()
      .then((fotos) => {
        this.fotos = fotos
        this.showLoad = false

        // console.log('fotos..', fotos);
      },
      err => {
        this.messages = err.message
      })
  }
}
</script>

<style lang="scss" scoped>
#main {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 150px 0;
  position: relative;
}

.tiles {
  width: 100%;
}

.load {
  padding: 30px 0;
  position: absolute;
  z-index: 100;
}
</style>
