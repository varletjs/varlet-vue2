import{n as a}from"./index.6fa381a2.js";import"./vendor.10bd23ac.js";var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"varlet-site-doc"},[e("h1",[s._v("Import On Demand")]),s._m(0),e("div",{staticClass:"card"},[e("h3",[s._v("Manual Import")]),s._m(1),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@varlet-vue2/ui'")]),s._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@varlet-vue2/ui/es/button/style/index.js'")]),s._v(`

Vue.use(Button)
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[s._v("Auto Import")]),s._m(2),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#")]),e("span",{pre:!0,attrs:{class:"bash"}},[s._v(" Install plugin")]),s._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v(`
#`)]),e("span",{pre:!0,attrs:{class:"bash"}},[s._v(" npm")]),s._v(`
npm i unplugin-vue-components -D 
`),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v(`
#`)]),e("span",{pre:!0,attrs:{class:"bash"}},[s._v(" yarn")]),s._v(`
yarn add unplugin-vue-components -D
`),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v(`
#`)]),e("span",{pre:!0,attrs:{class:"bash"}},[s._v(" pnpm")]),s._v(`
pnpm add unplugin-vue-components -D
`)])])]),e("h4",[s._v("Vue Cli")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// vue.config.js")]),s._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" Components = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e("span",[s._v("require")])]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unplugin-vue-components/webpack'")]),s._v(`)
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { VarletUIResolver } = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e("span",[s._v("require")])]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unplugin-vue-components/resolvers'")]),s._v(`)

`),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(`.exports = {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("configureWebpack")]),s._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("plugins")]),s._v(`: [
      Components({
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("resolvers")]),s._v(`: [VarletUIResolver()]
      })
    ]
  }
}
`)])])]),e("h4",[s._v("Vite")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// vite.config.js")]),s._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@vitejs/plugin-vue'")]),s._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" components "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unplugin-vue-components/vite'")]),s._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { VarletUIResolver } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unplugin-vue-components/resolvers'")]),s._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { defineConfig } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vite'")]),s._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(` defineConfig({
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("plugins")]),s._v(`: [
    vue(),
    components({
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("resolvers")]),s._v(`: [VarletUIResolver()]
    })
  ]
})
`)])])]),e("p",[s._v("After completing the configuration, you can use it as follows")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("var-button")]),s._v(">")]),s._v("Default Button"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("var-button")]),s._v(">")]),s._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
`)])])]),s._m(3)],1)])},l=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"card"},[e("h3",[s._v("Intro")]),e("p",[s._v("The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[s._v("Each component is a "),e("code",{pre:!0},[s._v("Vue plugin")]),s._v(" and is composed of "),e("code",{pre:!0},[s._v("component logic")]),s._v(" and "),e("code",{pre:!0},[s._v("style files")]),s._v(". It is manually install and used as follows.")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[s._v("All components declared in the template are automatically scanned by the plug-in. The "),e("a",{attrs:{href:"https://github.com/antfu/unplugin-vue-components"}},[s._v("unplugin-vue-components")]),s._v(" will automatically import "),e("code",{pre:!0},[s._v("component logic")]),s._v(" and "),e("code",{pre:!0},[s._v("style files")]),s._v(" and "),e("code",{pre:!0},[s._v("use components")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[s._v("Special note: Function components called outside the template cannot be scanned by the plug-in, and styles still need to be introduced manually. For example, "),e("code",{pre:!0},[s._v("Snackbar")]),s._v(" is a functional component.")])}];const p={components:{}},r={};var v=a(p,n,l,!1,o,null,null,null);function o(s){for(let t in r)this[t]=r[t]}var c=function(){return v.exports}();export{c as default};
