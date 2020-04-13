<template>
  <div style="padding-top:16px">
    <g-input readonly></g-input>
    <g-input readonly value="只读状态"></g-input>
  </div>
</template>

<script>
  import GInput from '../../../src/input'

  export default {
    name:'input-3',
    components:{
      'g-input':GInput
    }
  }
</script>