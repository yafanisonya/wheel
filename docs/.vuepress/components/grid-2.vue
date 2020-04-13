<template>
  <div style="padding-top:16px">
    <g-row class="demoRow" gutter="10">
      <g-col span="12"><div class="demoCol">12</div></g-col>
      <g-col span="12"><div class="demoCol">12</div></g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="8"><div class="demoCol">8</div></g-col>
      <g-col span="8"><div class="demoCol">8</div></g-col>
      <g-col span="8"><div class="demoCol">8</div></g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="6"><div class="demoCol">6</div></g-col>
      <g-col span="6"><div class="demoCol">6</div></g-col>
      <g-col span="6"><div class="demoCol">6</div></g-col>
      <g-col span="6"><div class="demoCol">6</div></g-col>
    </g-row>
  </div>
</template>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol{
    height: 50px;
    border: 1px solid #ccc;
    background: rgb(210,220,230);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
  import Grow from '../../../src/row'
  import Gcol from '../../../src/col'

  export default {
    name:'grid-2',
    components:{
      'g-row':Grow,
      'g-col':Gcol
    },
    data() {
      return {
        value: '',
      }
    }
  }
</script>

