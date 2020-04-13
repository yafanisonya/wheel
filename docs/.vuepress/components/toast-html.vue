<template>
  <div style="padding-top: 16px;">
    <g-button @click="onClickButton">弹出Html</g-button>
  </div>
</template>

<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    name: 'toast-html',
    components: { 'g-button': Button},
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>
<style>
  .wheel-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  *{ box-sizing: border-box}
</style>