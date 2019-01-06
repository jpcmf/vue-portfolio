<template>
  <img class="img-responsive" :src="url" :alt="titulo">
</template>

<script>
export default {
  props: [
    'url',
    'titulo',
  ],

  data() {
    return {
      visible: true
    }
  }
}
</script>

<style lang="scss">

  .img-responsive {
    object-fit: cover;
    width: 100%;
  }

</style>
