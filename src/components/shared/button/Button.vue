<template lang="html">
  <button v-on:click="triggerAction()" :type="type" name="button" :class="buttonStyle">{{ label }}</button>
</template>

<script>
export default {
  // props: ['type', 'label', 'confirm', 'stylecss'],

  props: {
    type: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    confirm: Boolean,
    stylecss: String
  },

  methods: {
    triggerAction() {
      // console.log(typeof(this.confirm));

      if (this.confirm) {
        if (confirm('Remove?')) {
          this.$emit('buttonActive')
        }
        return;
      }
      this.$emit('buttonActive')
    }
  },

  computed: {
    buttonStyle() {
      if (this.stylecss == 'default' || !this.stylecss) {
        return 'button button-default'
      }
      if (this.stylecss == 'danger') {
        return 'button button-danger'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  // .button {
  //   display: inline-block;
  //   padding: 10px;
  //   border-radius: 3px;
  //   margin: 10px;
  //   font-size: 1.2em;
  // }
  //
  // .button-danger {
  //   background: firebrick;
  //   color: white;
  // }
  //
  // .button-default {
  //   background: darkcyan;
  //   color: white;
  // }
</style>
