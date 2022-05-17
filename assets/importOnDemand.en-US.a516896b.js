import{n as a}from"./index.31927c0d.js";import"./vendor.4f0eb98f.js";var n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"varlet-site-doc"},[t("h1",[s._v("Import On Demand")]),s._m(0),t("div",{staticClass:"card"},[t("h3",[s._v("Manual Import")]),s._m(1),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@varlet-vue2/ui'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@varlet-vue2/ui/es/button/style/index.js'")]),s._v(`

Vue.use(Button)
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[s._v("Auto Import")]),s._m(2),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"bash"}},[s._v(" Install plugin")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v(`
#`)]),t("span",{pre:!0,attrs:{class:"bash"}},[s._v(" npm")]),s._v(`
npm i unplugin-vue-components -D 
`),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v(`
#`)]),t("span",{pre:!0,attrs:{class:"bash"}},[s._v(" yarn")]),s._v(`
yarn add unplugin-vue-components -D
`),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v(`
#`)]),t("span",{pre:!0,attrs:{class:"bash"}},[s._v(" pnpm")]),s._v(`
pnpm add unplugin-vue-components -D
`)])])]),t("h4",[s._v("Vue Cli")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// vue.config.js")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" Components = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t("span",[s._v("require")])]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unplugin-vue-components/webpack'")]),s._v(`)
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { VarletUIResolver } = "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t("span",[s._v("require")])]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unplugin-vue-components/resolvers'")]),s._v(`)

`),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(`.exports = {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("configureWebpack")]),s._v(`: {
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("plugins")]),s._v(`: [
      Components({
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("resolvers")]),s._v(`: [
          VarletUIResolver({
            `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("version")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue2'")]),s._v(`
          })
        ],
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("directives")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(`
      })
    ]
  }
}
`)])])]),t("h4",[s._v("Vite")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// vite.config.js")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" components "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unplugin-vue-components/vite'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { createVuePlugin "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("as")]),s._v(" vue2 } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vite-plugin-vue2'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { VarletUIResolver } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unplugin-vue-components/resolvers'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { defineConfig } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vite'")]),s._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(` defineConfig({
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("plugins")]),s._v(`: [
    vue2(),
    components({
      `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("resolvers")]),s._v(`: [
        VarletUIResolver({
          `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("version")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue2'")]),s._v(`
        })
      ],
      `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("directives")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(`
    })
  ]
})
`)])])]),t("p",[s._v("After completing the configuration, you can use it as follows")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("var-button")]),s._v(">")]),s._v("Default Button"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("var-button")]),s._v(">")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
`)])])]),s._m(3)],1)])},l=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"card"},[t("h3",[s._v("Intro")]),t("p",[s._v("The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",[s._v("Each component is a "),t("code",{pre:!0},[s._v("Vue plugin")]),s._v(" and is composed of "),t("code",{pre:!0},[s._v("component logic")]),s._v(" and "),t("code",{pre:!0},[s._v("style files")]),s._v(". It is manually install and used as follows.")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",[s._v("All components declared in the template are automatically scanned by the plug-in. The "),t("a",{attrs:{href:"https://github.com/antfu/unplugin-vue-components"}},[s._v("unplugin-vue-components")]),s._v(" will automatically import "),t("code",{pre:!0},[s._v("component logic")]),s._v(" and "),t("code",{pre:!0},[s._v("style files")]),s._v(" and "),t("code",{pre:!0},[s._v("use components")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",[s._v("Special note: Function components called outside the template cannot be scanned by the plug-in, and styles still need to be introduced manually. For example, "),t("code",{pre:!0},[s._v("Snackbar")]),s._v(" is a functional component.")])}];const p={components:{}},r={};var v=a(p,n,l,!1,_,null,null,null);function _(s){for(let e in r)this[e]=r[e]}var c=function(){return v.exports}();export{c as default};
