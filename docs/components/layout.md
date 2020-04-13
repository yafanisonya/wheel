---
title: 'Layout 布局'
---
# Layout布局

用于布局的容器组件，协助进行页面级整体布局``

`g-layout`：外层容器，可嵌套 `Header Sider Content Footer` 或 `Layout` 本身。

`g-header`：顶部布局

`g-sider`：侧边栏

`g-content`：内容部分

`g-footer`：底部布局

::: tip
以上组件采用了 flex 布局，使用前请确定浏览器兼容性。此外，`<g-layout>` 的子元素只能是后四者，后四者的父元素也只能是 `<g-layout>`。
:::

## 上中下布局
 
<ClientOnly>
  <layout-1></layout-1>
</ClientOnly>

::: details 显示代码
```vue
<g-layout>
  <g-header>Header</g-header>
  <g-content>Content</g-content>
  <g-footer>Footer</g-footer>
</g-layout>
```
:::

## 左右布局
 
<ClientOnly>
  <layout-3></layout-3>
</ClientOnly>

::: details 显示代码
```vue
<g-layout>
  <g-sider>Sider</g-sider>
  <g-layout>
    <g-header>Header</g-header>
    <g-content>Content</g-content>
    <g-footer>Footer</g-footer>
  </g-layout>
</g-layout>
```
:::


## 布局
 
<ClientOnly>
  <layout-2></layout-2>
</ClientOnly>

::: details 显示代码
```vue
<g-layout>
  <g-header>Header</g-header>
  <g-layout>
    <g-content>Content</g-content>
    <g-sider>Sider</g-sider>
  </g-layout>
  <g-footer>Footer</g-footer>
</g-layout>
```
:::
