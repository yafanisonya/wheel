---
title: 'Button 按钮'
---
# Button 按钮

## 基础用法
基础的按钮用法
 
<ClientOnly>
  <button-default></button-default>
</ClientOnly>

::: details 显示代码
```vue
<g-button>默认按钮</g-button>
```
:::

## 禁用状态
按钮不可用状态,可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

<ClientOnly>
  <button-disabled></button-disabled>
</ClientOnly>

::: details 显示代码
```vue
<g-button disabled>禁用按钮</g-button>
```
:::

## 图标按钮
设置`icon`属性，使用`icon-position`也可以设置`icon`位置，可以使用自定义图标。

<ClientOnly>
  <button-icon></button-icon>
</ClientOnly>

::: details 显示代码
```vue
<g-button icon="good"></g-button>
<g-button icon="search"></g-button>
<g-button icon="setting">设置</g-button>
<g-button icon="upload" icon-position="right">上传</g-button>
<g-button icon="download" icon-position="right">下载</g-button>
```
:::

## 加载按钮
点击按钮后进行数据加载操作，在按钮上显示加载状态。

<ClientOnly>
  <button-loading></button-loading>
</ClientOnly>

::: details 显示代码
```vue
<g-button :loading="true">加载按钮</g-button>
<g-button :loading="true" icon-position="right">加载按钮</g-button>
```
:::

## 按钮组
以按钮组的方式出现，常用于多项类似操作。使用`<g-button-group>`标签来嵌套按钮。

<ClientOnly>
  <button-group></button-group>
</ClientOnly>

::: details 显示代码
```vue
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>更多</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
<g-button-group>
  <g-button icon="edit"></g-button>
  <g-button icon="share"></g-button>
  <g-button icon="delete"></g-button>
</g-button-group>
```
:::

## API


|属性| 说明 | 类型 | 默认值 |
|------------|-------|----------|--------|
|`disabled`| 是否禁用状态| `boolean`| `false`|
|`loading`| 是否加载中状态 | `boolean`| `false`|
|`icon` | 设置按钮的图标组件 | `string` | `-` |
|`icon-position`| 设置图标的位置 | `string` | `left`|


