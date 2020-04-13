<template>
  <transition name="slider">
    <div class="sider">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name:'WheelSider',
  }
</script>