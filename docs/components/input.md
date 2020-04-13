---
title: 'Input 输入框'
---
# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装

## 基础用法

<ClientOnly>
  <input-1></input-1>
</ClientOnly>

::: details 显示代码
```vue
<g-input></g-input>
<g-input value="Basic usage"></g-input>
```
:::

## 禁用状态

<ClientOnly>
  <input-2></input-2>
</ClientOnly>

::: details 显示代码
```vue
<g-input disabled></g-input>
<g-input disabled value="禁用状态"></g-input>
```
:::

## 只读状态

<ClientOnly>
  <input-3></input-3>
</ClientOnly>

::: details 显示代码
```vue
<g-input readonly></g-input>
<g-input readonly value="只读状态"></g-input>
```
:::

## error状态

<ClientOnly>
  <input-4></input-4>
</ClientOnly>

::: details 显示代码
```vue
<g-input error="error状态"></g-input>
```
:::

## 双向绑定

<ClientOnly>
  <input-5></input-5>
</ClientOnly>

::: details 显示代码
```vue
data:{
  value: ''
}

<g-input v-model="value"></g-input>
<div>value:{{value}}</div>
```
:::

## API

|属性| 说明 | 类型 | 默认值 |
|------------|-------|----------|--------|
|`disabled`| 是否禁用 | `boolean`| `false` |
|`readonly`| 是否只读 | `boolean`| `false` |
|`error`| 报错内容 | `string`| - |
|`value`| 输入框内容 | `string`| - |
|`v-model`| 绑定值 | `string`| - |