<template>
  <div>
    <g-button icon="good"></g-button>
    <g-button icon="search"></g-button>
    <g-button icon="setting">设置</g-button>
    <g-button icon="upload" icon-position="right">上传</g-button>
    <g-button icon="download" icon-position="right">下载</g-button>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  export default {
    name:'button-icon',
    components: {
      'g-button': Button,
    },
  }
</script>

<style lang="scss" scoped>
</style>