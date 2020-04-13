<template>
  <div style="padding-top:16px">
    <g-input></g-input>
    <g-input value="Basic usage"></g-input>
  </div>
</template>

<script>
 import GInput from '../../../src/input'

  export default {
    name:'input-1',
    components:{
      'g-input':GInput
    }
  }
</script>