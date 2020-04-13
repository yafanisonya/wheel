<template>
  <div class="wrapper" style="padding-top: 16px">
    <g-layout style="color:white; margin-bottom:50px;">
      <g-sider style="background: #ddd;width:200px; color:black;"><div style="margin-top: 110px;">Sider</div></g-sider>
      <g-layout>
        <g-header style="line-height: 60px; background:lightskyblue">Header</g-header>
        <g-content style="line-height:120px; background:deepskyblue">Content</g-content>
        <g-footer style="line-height:60px; background:lightskyblue">Footer</g-footer>
      </g-layout>
    </g-layout>

    <g-layout style="color:white; margin-bottom:50px;">
      <g-hsider style="background: #ddd; width:200px; color:black;"><div style="margin-top: 110px;">Sider</div></g-hsider>
      <g-layout>
        <g-header style="line-height: 60px; background:lightskyblue">Header</g-header>
        <g-content style="line-height:120px; background:deepskyblue">Content</g-content>
        <g-footer style="line-height:60px; background:lightskyblue">Footer</g-footer>
      </g-layout>
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
    name:'layout-3',
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