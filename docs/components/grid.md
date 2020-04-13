---
title: 'Grid 栅格'
---
# Grid 栅格
通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用 `Row` 和 `Col` 栅格组件，并通过 `col` 组件的 `span` 属性就可以创建一个基本的栅格系统。

<ClientOnly>
  <grid-1></grid-1>
</ClientOnly>

::: details 显示代码
```vue
<g-row>
  <g-col span="24">24</g-col>
</g-row>
<g-row>
  <g-col span="12">12</g-col>
  <g-col span="12">12</g-col>
</g-row>
<g-row>
  <g-col span="8">8</g-col>
  <g-col span="8">8</g-col>
  <g-col span="8">8</g-col>
</g-row>
<g-row>
  <g-col span="6">6</g-col>
  <g-col span="6">6</g-col>
  <g-col span="6">6</g-col>
  <g-col span="6">6</g-col>
</g-row>
```
:::

## 分栏间隔

`Row` 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

<ClientOnly>
  <grid-2></grid-2>
</ClientOnly>

::: details 显示代码
```vue
<g-row gutter="10">
  <g-col span="12">12</g-col>
  <g-col span="12">12</g-col>
</g-row>
<g-row gutter="10">
  <g-col span="8">8</g-col>
  <g-col span="8">8</g-col>
  <g-col span="8">8</g-col>
</g-row>
<g-row gutter="10">
  <g-col span="6">6</g-col>
  <g-col span="6">6</g-col>
  <g-col span="6">6</g-col>
  <g-col span="6">6</g-col>
</g-row>
```
:::

## 分栏偏移

`Col` 组件 提供 `offset` 属性来指定偏移栏数。

使用 `offset` 可以将列向右侧偏。例如，`offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。

<ClientOnly>
  <grid-3></grid-3>
</ClientOnly>

::: details 显示代码
```vue
<g-row>
  <g-col span="12">12</g-col>
  <g-col span="6" offset="6">offset-6</g-col>
</g-row>
<g-row>
  <g-col span="6" offset="6">offset-6</g-col>
  <g-col span="6">6</g-col>
  <g-col span="6">6</g-col>
</g-row>
<g-row>
  <g-col span="12" offset="6">12</g-col>
</g-row>
```
:::

