---
title: 'Toast'
---
# Toast

## this.$toast
`$toast` 接受两个参数 `(message, toastOptions)` 

`message` 控制弹出框显示内容

`position` 控制弹出框位置，可选值`top、middle、bottom`，默认为`top`

<ClientOnly>
  <toast-position></toast-position>
</ClientOnly>

::: details 显示代码
```vue
<g-button @click="$toast('上方弹出提示')">上方弹出</g-button>
<g-button @click="$toast('中间弹出提示',{position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('下方弹出提示',{position:'bottom'})">下方弹出</g-button>
```
:::

## 设置关闭按钮
`autoClose` 控制自动关闭，默认为`true`

`autoCloseDelay` 控制自动关闭时间，默认为`3s`

<ClientOnly>
  <toast-close></toast-close>
</ClientOnly>

::: details 显示代码
```vue
<g-button @click="$toast('不自动关闭',{autoClose: false})">上方弹出</g-button>
<g-button @click="$toast('1s后自动关闭',{position:'middle',autoClose:true,autoCloseDelay:1})">中间弹出</g-button>
<g-button @click="$toast('5s后自动关闭',{position:'bottom',autoClose:true,autoCloseDelay:5})">下方弹出</g-button>
```
:::

## 支持HTML
`enableHtml` 选项，默认为`false` 

<ClientOnly>
  <toast-html></toast-html>
</ClientOnly>

::: details 显示代码
```vue
<g-button @click="onClickButton">弹出Html</g-button>

methods: {
  onClickButton () {
    this.$toast('<strong style="color:red;">加粗的提示</strong>', {
      enableHtml: true
    })
  }
}
```
:::

## API


|属性| 说明 | 类型 | 默认值 |
|------------|-------|----------|--------|
|`position`| 控制弹出位置| `string`| `top`|
|`autoClose`| 是否自动关闭 | `boolean`| `true`|
|`autoCloseDelay` | 设置自动关闭时长 | `number` | `3` |
|`enableHtml`| 是否支持Html | `boolean` | `false`|
