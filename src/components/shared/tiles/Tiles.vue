<template>
  <div>
    <header class="major">
      <h3><span class="link">{{ titulo }}</span></h3>
      <p>{{ descricao }}</p>
    </header>
    <!-- <div class="panel">
      <h2 class="panel__title" v-on:dblclick="visible = !visible">{{ titulo }}</h2>
      <transition name="panel__fade">
        <div class="panel__content" v-show="visible">
          <slot></slot>
        </div>
      </transition>
    </div> -->
  </div>
</template>

<script>
export default {
  props: [
    'titulo',
    'descricao'
  ],

  data() {
    return {
      visible: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
