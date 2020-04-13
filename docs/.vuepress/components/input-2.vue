<template>
  <div style="padding-top:16px">
    <g-input disabled></g-input>
    <g-input disabled value="禁用状态"></g-input>
  </div>
</template>

<script>
  import GInput from '../../../src/input'

  export default {
    name:'input-2',
    components:{
      'g-input':GInput
    }
  }
</script>