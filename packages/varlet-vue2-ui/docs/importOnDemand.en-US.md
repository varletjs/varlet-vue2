# Import On Demand

### Intro
The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.


### Manual Import

Each component is a `Vue plugin` and is composed of `component logic` and `style files`.
It is manually install and used as follows.

```js
import Vue from 'vue'
import { Button } from '@varlet-vue2/ui'
import '@varlet-vue2/ui/es/button/style/index.js'

Vue.use(Button)
```

### Auto Import

All components declared in the template are automatically scanned by the plug-in. 
The [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) will automatically import `component logic` and `style files` and `use components`

```shell
# Install plugin

# npm
npm i unplugin-vue-components -D 

# yarn
yarn add unplugin-vue-components -D

# pnpm
pnpm add unplugin-vue-components -D
```

#### Vue Cli
```js
// vue.config.js
const Components = require('unplugin-vue-components/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [
          VarletUIResolver({
            version: 'vue2'
          })
        ],
        directives: true
      })
    ]
  }
}
```

#### Vite

```js
// vite.config.js
import components from 'unplugin-vue-components/vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue2(),
    components({
      resolvers: [
        VarletUIResolver({
          version: 'vue2'
        })
      ],
      directives: true
    })
  ]
})
```

After completing the configuration, you can use it as follows

```html
<template>
  <var-button>Default Button</var-button>
</template>
```


Special note: Function components called outside the template cannot be scanned by the plug-in, and styles still need to be introduced manually. For example, `Snackbar` is a functional component.


