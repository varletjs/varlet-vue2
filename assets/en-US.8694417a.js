import{n as a}from"./index.6222f8b9.js";import"./vendor.4f0eb98f.js";var l=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"varlet-site-doc"},[r("h1",[t._v("Dark Mode")]),t._m(0),r("div",{staticClass:"card"},[r("h3",[t._v("Toggle Theme")]),r("var-site-code-example",[r("pre",{staticClass:"hljs"},[r("code",{pre:!0},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"toggleTheme"')]),t._v(">")]),t._v("Toggle Theme"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`)])])]),r("var-site-code-example",[r("pre",{staticClass:"hljs"},[r("code",{pre:!0},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" dark "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui/es/themes/dark'")]),t._v(`
`),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { StyleProvider } "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("currentTheme")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`
  }),
  
  `),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("toggleTheme")]),t._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".currentTheme = "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".currentTheme ? "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(` : dark
      StyleProvider(`),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(`.currentTheme)
    }
  },
}
`)])])]),t._m(1),r("var-site-code-example",[r("pre",{staticClass:"hljs"},[r("code",{pre:!0},[r("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[t._v("body")]),t._v(` {
  `),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("transition")]),t._v(": background-color ."),r("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("25s")]),t._v(`;
  `),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("color")]),t._v(": var(--"),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("color")]),t._v(`-text);
  `),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("background-color")]),t._v(": var(--"),r("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("color")]),t._v(`-body);
}
`)])])])],1)])},n=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"card"},[r("h3",[t._v("Intro")]),r("p",[t._v("The first party of the component library provides the theme of dark mode. The advantage of dark mode is that it has higher readability in low light environments.")])])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("p",[t._v("Inject the "),r("code",{pre:!0},[t._v("text color")]),t._v(" and "),r("code",{pre:!0},[t._v("background color")]),t._v(" variables recommended by the component library to control the overall color")])}];const v={components:{}},e={};var _=a(v,l,n,!1,c,null,null,null);function c(t){for(let s in e)this[s]=e[s]}var u=function(){return _.exports}();export{u as default};
