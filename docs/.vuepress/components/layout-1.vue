<template>
  <div class="wrapper" style="padding-top: 16px">
    <g-layout style="color:white; margin-bottom:50px;">
      <g-header style="line-height: 60px; background:lightskyblue">Header</g-header>
      <g-content style="line-height:120px; background:deepskyblue">Content</g-content>
      <g-footer style="line-height:60px; background:lightskyblue">Footer</g-footer>
    </g-layout>
  </div>
</template>
<style>
  .wrapper{
    text-align: center;
  }
</style>
<script>
  import GLayout from '../../../src/layout'
  import GHeader from '../../../src/header'
  import GContent from '../../../src/content'
  import GFooter from '../../../src/footer'

  export default {
    name:'layout-1',
    components: {
      'g-layout': GLayout,
      'g-header': GHeader,
      'g-content': GContent,
      'g-footer': GFooter,
    }
  }
</script>