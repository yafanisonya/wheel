<template>
  <div>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <g-button-group>
      <g-button icon="edit"></g-button>
      <g-button icon="share"></g-button>
      <g-button icon="delete"></g-button>
    </g-button-group>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  export default {
    name:'button-group',
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    },
  }
</script>

<style lang="scss" scoped>
</style>