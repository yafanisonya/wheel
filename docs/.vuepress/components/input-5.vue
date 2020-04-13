<template>
  <div style="padding-top:16px">
    <g-input v-model="value"></g-input>
    <div>value:{{value}}</div>
  </div>
</template>

<script>
  import GInput from '../../../src/input'

  export default {
    name:'input-5',
    components:{
      'g-input':GInput
    },
    data() {
      return {
        value: '',
      }
    }
  }
</script>