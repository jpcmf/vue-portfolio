<template lang="html">
  <div class="centered">
    <banner-home></banner-home>
    <div id="main">
      <section id="one" class="tiles">

        <article v-for="foto of fotosFiltered" v-bind:style="{ backgroundImage: 'url(' + foto.url + ')' }">
          <span class="image" style="display: none;">
            <!-- <img src="images/pic01.jpg" alt=""> -->
            <img-responsive :url="foto.url" :titulo="foto.titulo"/>
          </span>
          <my-tiles :titulo="foto.titulo" :descricao="foto.descricao"/>
          <router-link :to="{ name: 'portfolio', params: {id: foto._id} }" class="link primary">
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
    titleTemplate: '%s | JPCMF UI Designer and Front-end Developer',
    meta: [
      {property: 'og:title', content: 'JPCMF | UI Designer and Front-end Developer'},
      {property: 'og:site_name', content: 'JPCMF | UI Designer and Front-end Developer'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://www.joaolabs.tk'},
      {property: 'og:image', content: './static/fb.png'},
      {property: 'og:description', content: 'Welcome to my Portfolio. I am a UI Designer and Front-end Developer based in Curitiba, Brazil.'}
    ]
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
      messages: ''
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
          console.log(index);
          this.messages = 'Picture removed'
        },
        err => {
          // this.messages = 'Can not remove the picture'
          console.log(err);
          this.messages = err.message
        })

      // this.resource
      //   .delete({ id: foto._id })
      //   .then(() => {
      //     let index = this.fotos.indexOf(foto) // position of pic in array
      //     this.fotos.splice(index, 1) // the instruction change array
      //     console.log(index);
      //     this.message = 'Picture removed'
      //   },
      //   err => {
      //     this.message = 'Can not remove the picture'
      //     console.log(err);
      //   })

      // this.$http
      //   .delete('v1/fotos/' + foto._id)
      //   .then(() => {
      //     let index = this.fotos.indexOf(foto) // position of pic in array
      //     this.fotos.splice(index, 1) // the instruction change array
      //     console.log(index);
      //     this.message = 'Picture removed'
      //   },
      //   err => {
      //     this.message = 'Can not remove the picture'
      //     console.log(err);
      //   })
    }
  },

  created() {

    this.service = new PicService(this.$resource)
    this.service
      .list()
      .then(fotos => this.fotos = fotos, err => {
        this.messages = err.message
      })

    // this.resource = this.$resource('v1/fotos{/id}')
    // this.resource
    //   .query()
    //   .then(res => res.json())
    //   .then(fotos => this.fotos = fotos, err => console.log(err))

    // this.$http.get('v1/fotos')
    //   .then(res => res.json())
    //   .then(fotos => this.fotos = fotos, err => console.log(err))

    // fetch('https://api-portfolioapi.wedeploy.io')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.json = json
    //     console.log(json)
    //   })
  }
}
</script>

<style lang="scss"></style>
