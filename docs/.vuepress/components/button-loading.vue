<template>
  <div>
    <g-button :loading="true">加载按钮</g-button>
    <g-button :loading="true" icon-position="right">加载按钮</g-button>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  export default {
    name:'button-demos',
    components: {
      'g-button': Button,
    },
  }
</script>

<style lang="scss" scoped>
</style>