<template>
  <div class="wrapper" style="padding-top: 16px">
    <g-layout style="color:white; margin-bottom:50px;">
      <g-header style="line-height: 60px; background:lightskyblue">Header</g-header>
      <g-layout>
        <g-sider style="line-height: 120px; background: #ddd; width:200px; color:black;">Sider</g-sider>
        <g-content style="line-height:120px; background:deepskyblue">Content</g-content>
      </g-layout>
      <g-footer style="line-height:60px; background:lightskyblue">Footer</g-footer>
    </g-layout>

    <g-layout style="color:white; margin-bottom:50px;">
      <g-header style="line-height: 60px; background:lightskyblue">Header</g-header>
      <g-layout>
        <g-hsider style="line-height: 120px; background: #ddd; width:200px; color:black;">Sider</g-hsider>
        <g-content style="line-height:120px; background:deepskyblue">Content</g-content>
      </g-layout>
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
  import GSider from '../../../src/sider'
  import GHSider from '../../../src/sider-hide'

  export default {
    name:'layout-2',
    components: {
      'g-layout': GLayout,
      'g-header': GHeader,
      'g-content': GContent,
      'g-footer': GFooter,
      'g-sider':GSider,
      'g-hsider': GHSider
    }
  }
</script>