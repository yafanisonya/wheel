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
    mounted() {
      this.eventBus.$on('update:selected',(item,vm)=>{
        let {width, height, top, left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.transform = `translateX(${left-40}px)`
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-head{
    display: flex;
    height: 40px;
    justify-content: flex-start;
    position: relative;
    > .line{
      position:absolute;
      bottom: 0;
      border-bottom: 1px solid black;
      transition: all 350ms;
    }
    > .actions-wrapper{
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>
