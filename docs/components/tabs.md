---
title: 'Tabs 标签页'
---
# Tabs 标签页
选项卡切换组件

## 基础用法
基础的、简洁的标签页，默认选中第一项。
 
<ClientOnly>
  <tabs-1></tabs-1>
</ClientOnly>

::: details 显示代码
```vue
<g-tabs selected="Tab1">
  <g-tabs-head>
    <g-tabs-item name="Tab1">Tab 1</g-tabs-item>
    <g-tabs-item name="Tab2">Tab 2</g-tabs-item>
    <g-tabs-item name="Tab3">Tab 3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="Tab1">Content 1</g-tabs-pane>
    <g-tabs-pane name="Tab2">Content 2</g-tabs-pane>
    <g-tabs-pane name="Tab3">Content 3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```
:::

## 禁用
禁用某一项
 
<ClientOnly>
  <tabs-2></tabs-2>
</ClientOnly>

::: details 显示代码
```vue
<g-tabs selected="Tab1">
  <g-tabs-head>
    <g-tabs-item name="Tab1">Tab 1</g-tabs-item>
    <g-tabs-item name="Tab2" disabled>Tab 2</g-tabs-item>
    <g-tabs-item name="Tab3">Tab 3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="Tab1">Content 1</g-tabs-pane>
    <g-tabs-pane name="Tab2">Content 2</g-tabs-pane>
    <g-tabs-pane name="Tab3">Content 3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```
:::

## 图标
有图标的标签

<ClientOnly>
  <tabs-3></tabs-3>
</ClientOnly>

::: details 显示代码
```vue
<g-tabs selected="Tab1">
  <g-tabs-head>
    <g-tabs-item name="Tab1"><g-icon name="ios"></g-icon>Tab 1</g-tabs-item>
    <g-tabs-item name="Tab2"><g-icon name="android"></g-icon>Tab 2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="Tab1">Content 1</g-tabs-pane>
    <g-tabs-pane name="Tab2">Content 2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```
:::

## 附加内容
可以在页签右边添加附加操作。
 
<ClientOnly>
  <tabs-4></tabs-4>
</ClientOnly>

::: details 显示代码
```vue
<g-tabs selected="Tab1">
  <g-tabs-head>
    <g-tabs-item name="Tab1">Tab 1</g-tabs-item>
    <g-tabs-item name="Tab2">Tab 2</g-tabs-item>
    <g-tabs-item name="Tab3">Tab 3</g-tabs-item>
    <template slot="actions">
      <button>Extra Action</button>
    </template>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="Tab1">Content 1</g-tabs-pane>
    <g-tabs-pane name="Tab2">Content 2</g-tabs-pane>
    <g-tabs-pane name="Tab3">Content 3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```
:::

## API
|属性| 说明 | 类型 | 默认值 |
|------------|-------|----------|--------|
|`disabled`| 是否禁用 | `boolean`| `false`|
|`name`| 表示选项卡别名 | `string`| `-`|

