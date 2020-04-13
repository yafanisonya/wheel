---
title: 'Collapse 手风琴'
---
# Collapse 手风琴


## 基础用法
基础的用法示例
 
<ClientOnly>
  <collapse-demo></collapse-demo>
</ClientOnly>

::: details 显示代码
```vue
<g-collapse>
  <g-collapse-item title="标题1">内容1</g-collapse-item>
</g-collapse>
```
:::

## 单个显示
显示一个手风琴组件，使用 `single` 属性,它接受一个`Boolean`值
 
<ClientOnly>
  <collapse-single></collapse-single>
</ClientOnly>

::: details 显示代码
```vue
<g-collapse single>
  <g-collapse-item title="标题1">内容1</g-collapse-item>
  <g-collapse-item title="标题2">内容2</g-collapse-item>
</g-collapse>
```
:::

## 多个显示
显示多个手风琴组件, `single` 属性默认为`false`
 
<ClientOnly>
  <collapse-multiple></collapse-multiple>
</ClientOnly>

::: details 显示代码
```vue
<g-collapse>
  <g-collapse-item title="标题1">内容1</g-collapse-item>
  <g-collapse-item title="标题2">内容2</g-collapse-item>
  <g-collapse-item title="标题3">内容3</g-collapse-item>
</g-collapse>
```
:::

## API
|属性| 说明 | 类型 | 默认值 |
|------------|-------|----------|--------|
|`single`| 是否单个显示| `boolean`| `false`|
|`title`| 组件名称 | `string`| `-`|

