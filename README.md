<div align="center">
  <a href="https://varlet.gitee.io/varlet-ui/">
    <img src="https://varlet.gitee.io/varlet-ui/logo.svg" width="150">
  </a>
  <h1>VARLET-VUE2</h1>
  <p>基于 Vue2 的 Material design 风格移动端组件库</p>
   <p>
    <a href="https://varlet.gitee.io/varlet-ui-vue2/">开发文档</a> | <a href="https://github.com/varletjs/varlet-vue2/blob/dev/README.en-US.md">English</a>
  </p>
  <!-- <p>
    <img src="https://img.shields.io/npm/v/@varlet/ui?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/stars/varletjs/varlet-vue2" alt="ci">
    <img src="https://img.shields.io/badge/vue-v2.6.14%2B-%23407fbc" alt="vue">
    <img src="https://img.shields.io/npm/l/@varlet/ui.svg" alt="licence">
    <img src="https://img.shields.io/codecov/c/github/varletjs/varlet-vue2" alt="coverage">
    <img src="https://img.badgesize.io/https://unpkg.com/@varlet-vue2/ui/umd/varlet.js?compression=gzip&label=gzip" alt="gzip" />
    <img src="https://github.com/varletjs/varlet-vue2/workflows/CI/badge.svg" alt="ci">
  </p> -->
</div>

---

### 介绍

`Varlet-vue2` 是 `Varlet` 的 vue2 版本, 是一个 Material 风格移动端组件库，由社区建立起来的组件库团队进行维护。

### 特性
- 🚀 提供50个高质量通用组件 
- 🚀 组件十分轻量
- 💪 由国人开发，完善的中英文文档和后勤保障
- 🛠️ 支持按需引入
- 🛠️ 支持主题定制
- 🌍 支持国际化
- 💡 支持 webstorm，vscode 组件属性高亮
- 💪 支持 SSR
- 💡 支持 Typescript 
- 💪 确保90%以上单元测试覆盖率，提供稳定性保证
- 🛠️ 支持暗黑模式


### 项目状态
`Varlet-vue2` 目前正在开发中，不要用在生产环境中。

### 安装
### CDN
`varlet.js` 包含组件库的所有样式和逻辑，引入即可。

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

### Webpack / Vite
```shell
# 通过 npm 或 yarn 或 pnpm 安装
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
  render: (h) => h(App)
}).$mount('#app')
```

### Contributors

<a href="https://github.com/varletjs/varlet-vue2/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=varletjs/varlet-vue2" />
</a> 
