<template>
  <div class="tabs-head">
    <slot></slot>
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
      this.$emit('update:selected','tabs-head data')
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-head{
    display: flex;
    height: 40px;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>