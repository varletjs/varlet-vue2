# 快速开始

### 介绍

这里为您介绍常见开发模式下接入组件库的最基本方式。

### 安装

#### CDN
`varlet.js` 包含组件库的所有样式和逻辑, 引入即可。

```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
<script src="https://cdn.jsdelivr.net/npm/@varlet-vue2/ui/umd/varlet.js"></script>
<script>
  Vue.use(Varlet)

  new Vue({
    template: '<var-button>按钮</var-button>'
  }).$mount('#app')
</script>
```

#### Webpack/Vite

```shell
# 通过 npm、yarn 或 pnpm 安装

# npm
npm i @varlet-vue2/ui -S

# yarn
yarn add @varlet-vue2/ui

# pnpm
pnpm add @varlet-vue2/ui
```

```js
import App from './App.vue'
import Varlet from '@varlet-vue2/ui'
import Vue from 'vue'
import '@varlet-vue2/ui/es/style.js'

Vue.use(Varlet)

new Vue({
  render: h => h(App)
}).$mount('#app')
```