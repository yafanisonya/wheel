<template>
  <div style="padding-top: 16px;">
    <g-button @click="$toast('不自动关闭',{autoClose: false})">上方弹出</g-button>
    <g-button @click="$toast('1s后自动关闭',{position:'middle',autoClose:true,autoCloseDelay:1})">中间弹出</g-button>
    <g-button @click="$toast('5s后自动关闭',{position:'bottom',autoClose:true,autoCloseDelay:5})">下方弹出</g-button>
  </div>
</template>

<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    name: 'toast-close',
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