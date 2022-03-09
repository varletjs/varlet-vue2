import{n as e}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var n=function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{staticClass:"varlet-site-doc"},[t("h1",[s._v("Quickstart")]),s._m(0),t("div",{staticClass:"card"},[t("h3",[s._v("Install")]),t("h4",[s._v("CDN")]),s._m(1),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue@2.6.14"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/@varlet-vue2/ui/umd/varlet.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(` App = Vue.use({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<var-button>\u6309\u94AE</var-button>'")]),s._v(`
  })
  `),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(` Vue({
     `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("h")]),s._v(" =>")]),s._v(` h(App)
  }).$mount(`),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(`);
`)]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v(`
`)])])]),t("h4",[s._v("Webpack/Vite")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"bash"}},[s._v(" Install with npm, yarn or pnpm")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v(`
#`)]),t("span",{pre:!0,attrs:{class:"bash"}},[s._v(" npm")]),s._v(`
npm i @varlet-vue2/ui -S
`),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v(`
#`)]),t("span",{pre:!0,attrs:{class:"bash"}},[s._v(" yarn")]),s._v(`
yarn add @varlet-vue2/ui
`),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v(`
#`)]),t("span",{pre:!0,attrs:{class:"bash"}},[s._v(" pnpm")]),s._v(`
pnpm add @varlet-vue2/ui
`)])])]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./App.vue'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Varlet "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@varlet-vue2/ui'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@varlet-vue2/ui/es/style.js'")]),s._v(`

Vue.use(Varlet)

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(` Vue({
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("h")]),s._v(" =>")]),s._v(` h(App)
}).$mount(`),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(`);
`)])])])],1),s._m(2)])},p=[function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{staticClass:"card"},[t("h3",[s._v("Intro")]),t("p",[s._v("Here are the most basic ways to access component libraries in common development patterns.")])])},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("p",[t("code",{pre:!0},[s._v("varlet.js")]),s._v(" contain all the styles and logic of the component library, and you can import them.")])},function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{staticClass:"card"},[t("h3",[s._v("Components Playground")]),t("p",[s._v("We provide a web version of the component editor, which is convenient for you to quickly get started with each component of the component library, edit it online, share it with others, or download the code package to run locally. You can click the "),t("code",{pre:!0},[s._v("{...}")]),s._v(" icon in the upper right corner of the page or "),t("a",{attrs:{href:"https://varlet.gitee.io/varlet-ui-playground"}},[s._v("go here")])])])}];const l={components:{}},a={};var v=e(l,n,p,!1,_,null,null,null);function _(s){for(let r in a)this[r]=a[r]}var o=function(){return v.exports}();export{o as default};
