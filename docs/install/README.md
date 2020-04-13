---
title: 快速上手
---

# 快速上手

## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```
npm install wheel-fanison
```

### yarn 安装

```
yarn add wheel-fanison
```
  
## 引入Element
可以引入整个 Element，或是根据需要仅引入部分组件。

### 完整引入
在 main.js 中写入以下内容：
```js
import Vue from 'vue';
import WheelUI from 'wheel-fanison';
import 'wheel-fanison/dist/index.css'
import App from './App.vue';

Vue.use(WheelUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```


### 按需引入
在 main.js 中写入以下内容：
```js
import Vue from 'vue';
import { Button, Icon }  from 'wheel-fanison';
import 'wheel-fanison/dist/index.css'
import App from './App.vue';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Icon)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```