<template>
  <div style="padding-top:16px">
    <g-input error="error状态"></g-input>
  </div>
</template>

<script>
  import GInput from '../../../src/input'

  export default {
    name:'input-4',
    components:{
      'g-input':GInput
    }
  }
</script>