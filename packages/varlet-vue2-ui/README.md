<div align="center">
  <a href="https://varlet.gitee.io/varlet-ui-vue2/">
    <img src="https://varlet.gitee.io/varlet-ui-vue2/logo.svg" width="150">
  </a>
  <h1>VARLET-VUE2</h1>
  <p>Material design mobile component library for Vue2</p>
  <p>
    <a href="https://varlet-vue2.vercel.app/#/en-US/index">Documentation(Vercel)</a> | 
    <a href="https://varlet.gitee.io/varlet-ui-vue2/#/en-US/index">Documentation(Gitee)</a> | 
    <a href="https://github.com/varletjs/varlet-vue2/blob/dev/README.zh-CN.md">中文README</a>
  </p>
  <p>
    <img src="https://img.shields.io/npm/v/@varlet-vue2/ui?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/stars/varletjs/varlet-vue2" alt="ci">
    <img src="https://img.shields.io/badge/vue-v2.6.14%2B-%23407fbc" alt="vue">
    <img src="https://img.shields.io/npm/l/@varlet-vue2/ui.svg" alt="licence">
    <img src="https://img.shields.io/codecov/c/github/varletjs/varlet-vue2" alt="coverage">
    <img src="https://img.badgesize.io/https://unpkg.com/@varlet-vue2/ui/umd/varlet.js?compression=gzip&label=gzip" alt="gzip" />
    <img src="https://github.com/varletjs/varlet-vue2/workflows/CI/badge.svg" alt="ci">
  </p>
</div>

---

### Intro

Varlet-vue2 is a Material design mobile component library developed based on `Vue2`, developed and maintained by partners in the community.


### Features
- 🚀 Provide 50 high quality general purpose components
- 🚀 Components are very lightweight
- 💪 Developed by Chinese, complete Chinese and English documentation and logistics support
- 🛠️ Support on-demand introduction
- 🛠️ Support theme customization
- 🌍 Support internationalization
- 💡 Support WebStorm, VS Code component syntax highlighting
- 💪 Support the SSR
- 💡 Support the Typescript
- 💪 Make sure more than 90 percent unit test coverage, providing stability assurance
- 🛠️ Support dark mode

### Install

### CDN
`varlet.js` component functions have been completed, and unit testing is in progress, recommended for internal testing

```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
<script src="https://cdn.jsdelivr.net/npm/@varlet-vue2/ui/umd/varlet.js"></script>
<script>
  Vue.use(Varlet)

  new Vue({
    template: '<var-button>Button</var-button>'
  }).$mount('#app')
</script>
```

### Webpack / Vite

```shell
# Install with npm or yarn or pnpm

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
