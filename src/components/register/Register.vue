<template lang="html">
  <div>

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

    <h1 class="centered">Cadastro</h1>
    <h2 class="centered">{{ foto.titulo }}</h2>
    <h3 class="centered">{{ foto.descricao }}</h3>

    <h3 v-if="foto._id" class="centered">Modify</h3>
    <h3 v-else class="centered">Add</h3>

    <form @submit.prevent="record()">
      <div class="fields">
        <div class="field">
          <label for="titulo">Title of project</label>
          <!-- <input id="titulo" autocomplete="off"
            @input="foto.titulo = $event.target.value" :value="foto.titulo"> -->
          <input type="text" class="form-control" name="titulo" v-model="foto.titulo" v-validate data-vv-rules="required|min:3|max:30" data-vv-as="título" id="titulo" autocomplete="off">
          <span class="error" v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
        </div>

        <div class="field">
          <label for="url">Image url of project</label>
          <!-- <input id="url" autocomplete="off" v-model.lazy="foto.url"> -->
          <input type="text" class="form-control" name="url" v-model="foto.url" v-validate data-vv-rules="required" id="url" autocomplete="off">
          <span class="error" v-show="errors.has('url')">{{ errors.first('url') }}</span>
          <img-responsive v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
        </div>

        <div class="field">
          <label for="url">Link url of project</label>
          <!-- <input id="url" autocomplete="off" v-model.lazy="foto.url"> -->
          <input type="text" class="form-control" name="link" v-model="foto.link" v-validate data-vv-rules="required" id="url" autocomplete="off">
          <span class="error" v-show="errors.has('link')">{{ errors.first('link') }}</span>
        </div>

        <div class="field">
          <label for="descricao">Short description</label>
          <textarea class="form-control" id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
        </div>

        <div class="field">
          <label for="descricao">Full description</label>
          <textarea class="form-control" id="descricaofull" autocomplete="off" v-model="foto.descricaofull"></textarea>
        </div>
      </div>
      <ul class="actions">
        <li><my-button label="GRAVAR" type="submit"/></li>
        <li><router-link :to="{ name: 'home' }"><my-button label="VOLTAR" type="button"/></router-link></li>
        <li><my-button
          type="button"
          label="remover"
          @buttonActive="remove(foto)"
          :confirm="true"
          stylecss="danger"/></li>
      </ul>
    </form>
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

      // foto: {
      //   titulo: '',
      //   url: '',
      //   descricao: ''
      // }

    }
  },

  methods: {
    record() {

      this.$validator
        .validateAll()
        .then(success => {

          if (success) {
            this.service
              .register(this.foto)
              .then(() => {
                if (this.id) this.$router.push({name: 'home'})
                this.foto = new Pic()
                this.$validator.reset()
              }, err => console.log(err))
          }

        })

      // this.resource
      //   .save(this.foto)
      //   .then(() => this.foto = new Pic(), err => console.log(err))

      // this.$http
      //   .post('v1/fotos', this.foto)
      //   .then(() => this.foto = new Pic(), err => console.log(err))

      // clear form after submit
      // this.foto = {
      //   titulo: '',
      //   url: '',
      //   descricao: ''
      // }

    },

    remove(foto) {

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

<style scoped lang="scss">

  form,
  .fire__crud {
    max-width: 700px;
    margin: 0 auto;
  }

  .error {
    color: coral;
    font-size: 12px;
  }

</style>
