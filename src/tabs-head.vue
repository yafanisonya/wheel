<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WheelTabsHead',
    inject:['eventBus'],
    created() {
      this.eventBus.$on('update:selected',(item,vm)=>{
        console.log(item)

      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-head{
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    > .line{
      position:absolute;
      bottom: 0;
      border-bottom: 1px solid blue;
      width:100px;
    }
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>