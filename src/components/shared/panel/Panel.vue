<template>
  <div class="panel">
    <h2 class="panel__title" v-on:dblclick="visible = !visible">{{ titulo }}</h2>
    <transition name="panel__fade">
      <div class="panel__content" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: [
    'titulo'
  ],

  data() {
    return {
      visible: true
    }
  }
}
</script>

<style scoped lang="scss">

  .panel {
    border: solid 1px grey;
    box-shadow: 0px 2px 2px grey;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:space-between;
    // height: 200px;
    // margin: 5px;
    text-align: center;
    vertical-align: top;
    // width: 200px;

    .panel__title {
      cursor: pointer;
      font-size: 12px;
      width: 100%;
    }

    .panel__content {
      // height: 150px;
      overflow: hidden;

      img {
        height: 150px;
        object-fit: cover;
        width: 100%;
      }
    }

    .panel__fade-enter,
    .panel__fade-leave-active {
      opacity: 0;
    }

    .panel__fade-enter-active,
    .panel__fade-leave-active {
      transition: opacity 300ms;
    }
  }

</style>
