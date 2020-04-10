<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')" :disabled="disabled">
    <g-icon class="icon" :name="icon" v-if="icon && !loading"></g-icon>
    <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
    <div class="g-button-content">
      <slot/>
    </div>
  </button>
</template>
<script>
  import Icon from './icon'
  export default {
    name:'WheelButton',
    components:{
      'g-icon':Icon
    },
    props:{
      icon:{},
      loading:{
        type:Boolean,
        default:false
      },
      disabled:{
        type: Boolean,
        default:false
      },
      iconPosition:{
        type:String,
        default:'left',
        validator(value){
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .g-button{
    font-size: $font-size;
    height:$button-height;
    padding:0 1em;
    border-radius: $border-radius;
    border:1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &[disabled]{
      border-color: #bbb;
      color:#bbb;
      cursor: not-allowed;
    }
    &:hover{ border-color: $border-color-hover; }
    &:active{ background-color: $button-active-bg;}
    &:focus{outline:none;}
    > .g-button-content{order:2;}
    > .icon{order:1;margin-right: .1em;}
    &.icon-right{
      > .g-button-content{ order:1;}
      > .icon{ order:2;margin-right:0;
        margin-left: .1em;}
    }
    .loading{animation: spin 3s infinite linear;}
  }
</style>


















