<template>
  <div>
    <g-button disabled>禁用按钮</g-button>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    name:'button-disabled',
    components: {
      'g-button': Button
    },
  }
</script>
<style lang="scss" scoped>
</style>