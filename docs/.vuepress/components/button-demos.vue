<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button disabled>禁用按钮</g-button>
    <g-button :loading="true">加载按钮</g-button>
    <g-button icon="setting">按钮</g-button>
    <g-button icon="setting" icon-position="right">按钮</g-button>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
<!--    <pre>-->
<!--    <code>{{content}}</code>-->
<!--    </pre>-->
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  export default {
    name:'button-demos',
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup

    },
  }
</script>


<style lang="scss" scoped>
</style>