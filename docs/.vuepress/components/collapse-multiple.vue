<template>
  <div style="padding: 15px;">
    <g-collapse>
      <g-collapse-item title="标题1">内容1</g-collapse-item>
      <g-collapse-item title="标题2">内容2</g-collapse-item>
      <g-collapse-item title="标题3">内容3</g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse-easy'
  import CollapseItem from '../../../src/collapse-item-easy'
  export default {
    name:'collapse-multiple',
    components: {
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem

    },
  }
</script>


<style lang="scss" scoped>
</style>