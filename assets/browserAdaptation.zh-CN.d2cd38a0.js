import{n as a}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"varlet-site-doc"},[s("h1",[t._v("\u6D4F\u89C8\u5668\u9002\u914D")]),t._m(0),s("div",{staticClass:"card"},[s("h3",[t._v("\u79FB\u52A8\u7AEF\u9002\u914D")]),t._m(1),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"bash"}},[t._v(" npm")]),t._v(`
npm i postcss-px-to-viewport -D
`),s("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v(`
#`)]),s("span",{pre:!0,attrs:{class:"bash"}},[t._v(" yarn")]),t._v(`
yarn add postcss-px-to-viewport -D
`),s("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v(`
#`)]),s("span",{pre:!0,attrs:{class:"bash"}},[t._v(" pnpm")]),t._v(`
pnpm add postcss-px-to-viewport -D
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// postcss.config.js")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("module")]),t._v(`.exports = {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("plugins")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'postcss-px-to-viewport'")]),t._v(`: {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("viewportWidth")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("375")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("unitPrecision")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("6")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("unitToConvert")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'px'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("propList")]),t._v(": ["),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'*'")]),t._v(`],
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u684C\u9762\u7AEF\u9002\u914D")]),t._m(2),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"bash"}},[t._v(" npm")]),t._v(`
npm i @varlet/touch-emulator
`),s("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"bash"}},[t._v(" yarn")]),t._v(`
yarn add @varlet/touch-emulator
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet/touch-emulator'")]),t._v(`
`)])])])],1)])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("h3",[t._v("\u4ECB\u7ECD")]),s("p",[t._v("\u7EC4\u4EF6\u5E93\u63D0\u4F9B\u79FB\u52A8\u7AEF\u548C\u684C\u9762\u7AEF\u9002\u914D\u65B9\u6848\uFF0C \u79FB\u52A8\u7AEF\u4F7F\u7528 "),s("code",{pre:!0},[t._v("postcss-px-to-viewport")]),t._v(" \u65B9\u6848\u8FDB\u884C\u9002\u914D\uFF0C \u684C\u9762\u7AEF\u4F7F\u7528 "),s("code",{pre:!0},[t._v("@varlet/touch-emulator")]),t._v(" \u65B9\u6848\u8FDB\u884C\u9002\u914D\u3002")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\u7EC4\u4EF6\u5E93\u8BBE\u8BA1\u57FA\u4E8E "),s("code",{pre:!0},[t._v("375px")]),t._v(" \u5BBD\u5EA6\u8BBE\u8BA1\u7A3F\uFF0C\u63A8\u8350\u4F7F\u7528 postcss \u63D2\u4EF6\u5C06 "),s("code",{pre:!0},[t._v("px")]),t._v(" \u5355\u4F4D\u8F6C\u6362\u6210 "),s("code",{pre:!0},[t._v("vw")]),t._v(" \u5355\u4F4D\u4ECE\u800C\u5B9E\u73B0\u79FB\u52A8\u7AEF\u9002\u914D\u3002 \u5728 "),s("code",{pre:!0},[t._v("Webpack/Vite")]),t._v(" \u9879\u76EE\u6839\u8DEF\u5F84\u4E0B\u521B\u5EFA "),s("code",{pre:!0},[t._v("postcss.config.js")]),t._v(" \u5E76\u505A\u5982\u4E0B\u914D\u7F6E\u4E4B\u540E "),s("code",{pre:!0},[t._v("375px -> 100vw")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\u7531\u4E8E\u7EC4\u4EF6\u5E93\u4EA4\u4E92\u4E8B\u4EF6\u4F7F\u7528 "),s("code",{pre:!0},[t._v("touch")]),t._v(" \u4E8B\u4EF6\u8FDB\u884C\u5F00\u53D1\uFF0C\u4E0D\u652F\u6301\u684C\u9762\u7AEF\u7684 "),s("code",{pre:!0},[t._v("mouse")]),t._v(" \u4E8B\u4EF6\uFF0C \u63A8\u8350\u4F7F\u7528 "),s("code",{pre:!0},[t._v("@varlet/touch-emulator")]),t._v(" \u5C06 "),s("code",{pre:!0},[t._v("touch -> mouse")]),t._v(" \u4ECE\u800C\u5B9E\u73B0\u684C\u9762\u7AEF\u9002\u914D\u3002")])}];const n={components:{}},r={};var _=a(n,p,v,!1,c,null,null,null);function c(t){for(let e in r)this[e]=r[e]}var u=function(){return _.exports}();export{u as default};
