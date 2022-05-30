import{n as a}from"./index.6222f8b9.js";import"./vendor.4f0eb98f.js";var n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"varlet-site-doc"},[t("h1",[s._v("\u6309\u9700\u5F15\u5165")]),s._m(0),t("div",{staticClass:"card"},[t("h3",[s._v("\u624B\u52A8\u5F15\u5165")]),s._m(1),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@varlet-vue2/ui'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@varlet-vue2/ui/es/button/style/index.js'")]),s._v(`

Vue.use(Button)
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[s._v("\u81EA\u52A8\u5F15\u5165")]),s._m(2),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"bash"}},[s._v(" \u5B89\u88C5\u63D2\u4EF6")]),s._v(`
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
`)])])]),t("p",[s._v("\u5B8C\u6210\u914D\u7F6E\u540E\u5982\u4E0B\u4F7F\u7528\u5373\u53EF")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("var-button")]),s._v(">")]),s._v("\u9ED8\u8BA4\u6309\u94AE"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("var-button")]),s._v(">")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v(`
`)])])]),s._m(3)],1)])},v=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"card"},[t("h3",[s._v("\u4ECB\u7ECD")]),t("p",[s._v("\u6309\u9700\u5F15\u5165\u907F\u514D\u4E86\u7EC4\u4EF6\u7684\u5168\u91CF\u5BFC\u5165\uFF0C\u53EF\u4EE5\u6709\u6548\u7684\u51CF\u5C11\u53D1\u5E03\u5305\u7684\u5927\u5C0F\u3002")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",[s._v("\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u90FD\u662F\u4E00\u4E2A "),t("code",{pre:!0},[s._v("Vue\u63D2\u4EF6")]),s._v("\uFF0C\u5E76\u7531 "),t("code",{pre:!0},[s._v("\u7EC4\u4EF6\u903B\u8F91")]),s._v(" \u548C "),t("code",{pre:!0},[s._v("\u6837\u5F0F\u6587\u4EF6")]),s._v(" \u7EC4\u6210\uFF0C\u5982\u4E0B\u65B9\u5F0F\u8FDB\u884C\u624B\u52A8\u5F15\u5165\u4F7F\u7528\u3002")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",[s._v("\u6240\u6709\u58F0\u660E\u5728\u6A21\u677F\u4E2D\u7684\u7EC4\u4EF6\uFF0C\u90FD\u4F1A\u88AB "),t("a",{attrs:{href:"https://github.com/antfu/unplugin-vue-components"}},[s._v("unplugin-vue-components")]),s._v(" \u63D2\u4EF6\u81EA\u52A8\u626B\u63CF\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5F15\u5165"),t("code",{pre:!0},[s._v("\u7EC4\u4EF6\u903B\u8F91")]),s._v("\u548C"),t("code",{pre:!0},[s._v("\u6837\u5F0F\u6587\u4EF6")]),s._v("\u5E76"),t("code",{pre:!0},[s._v("\u6CE8\u518C\u7EC4\u4EF6")]),s._v("\u3002")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",[s._v("\u7279\u522B\u6CE8\u610F: \u5728\u6A21\u677F\u4E4B\u5916\u8C03\u7528\u7684\u51FD\u6570\u7EC4\u4EF6\u65E0\u6CD5\u88AB\u63D2\u4EF6\u626B\u63CF\uFF0C\u4ECD\u9700\u8981\u624B\u52A8\u5F15\u5165\u6837\u5F0F\u3002\u4F8B\u5982 "),t("code",{pre:!0},[s._v("Snackbar")]),s._v(" \u5C31\u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6\u3002")])}];const p={components:{}},r={};var l=a(p,n,v,!1,_,null,null,null);function _(s){for(let e in r)this[e]=r[e]}var o=function(){return l.exports}();export{o as default};
