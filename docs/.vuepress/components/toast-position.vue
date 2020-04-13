<template>
  <div style="padding-top: 16px;">
    <g-button @click="$toast('上方弹出提示')">上方弹出</g-button>
    <g-button @click="$toast('中间弹出提示',{position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('下方弹出提示',{position:'bottom'})">下方弹出</g-button>
  </div>
</template>

<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    name: 'toast-position',
    components: { 'g-button': Button}
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