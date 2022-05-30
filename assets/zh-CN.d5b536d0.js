import{n as a}from"./index.6222f8b9.js";import"./vendor.4f0eb98f.js";var v=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"varlet-site-doc"},[s("h1",[t._v("\u56FE\u7247\u9884\u89C8")]),t._m(0),s("div",{staticClass:"card"},[s("h3",[t._v("\u5F15\u5165")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ImagePreview } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(ImagePreview)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u5C40\u90E8\u5F15\u5165")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// \u5C40\u90E8\u6CE8\u518C")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(`: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
`)])])])],1),s("h2",[t._v("\u51FD\u6570\u8C03\u7528")]),s("div",{staticClass:"card"},[s("h3",[t._v("\u57FA\u672C\u4F7F\u7528")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[t._v("ImagePreview("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u5904\u7406\u56DE\u8C03\u51FD\u6570")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` images = [
  `),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
  `),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat2.jpg'")]),t._v(`
]

ImagePreview({
  images,
  `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("onChange")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("index")]),t._v(")")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(`.log(index)
  }
})
`)])])])],1),s("h2",[t._v("\u7EC4\u4EF6\u4F7F\u7528")]),s("div",{staticClass:"card"},[s("h3",[t._v("\u57FA\u672C\u4F7F\u7528")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(`
>`)]),t._v(`
  \u57FA\u672C\u4F7F\u7528
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model:show")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(" />")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"currentShow = true"')]),t._v(`
>`)]),t._v(`
  \u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://varlet-vue2.vercel.app/cat2.jpg"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model:show")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"currentShow"')]),t._v(`
/>`)]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeShow = true"')]),t._v(`
>`)]),t._v(`
  \u5C55\u793A\u5173\u95ED\u6309\u94AE
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("closeable")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model:show")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeShow"')]),t._v(`
/>`)]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeEventShow = true"')]),t._v(`
>`)]),t._v(`
  \u76D1\u542C\u5173\u95ED\u4E8B\u4EF6
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model:show")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeEventShow"')]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("close")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleCloseEvent"')]),t._v(`
/>`)]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"extraSlotsShow = true"')]),t._v(`
>`)]),t._v(`
  \u663E\u793A\u989D\u5916\u63D2\u69FD
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"extraSlotsShow"')]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("extra")]),t._v(">")]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-icon")]),t._v(` 
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"menu"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"22"')]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"#fff"')]),t._v(`
      @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"menuShow = true"')]),t._v(`
    />`)]),t._v(`
    `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-action-sheet")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":actions")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"actions"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"menuShow"')]),t._v(" />")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(">")]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("images")]),t._v(": ["),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat2.jpg'")]),t._v(`],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("image")]),t._v(": ["),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`],
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("menuShow")]),t._v(":"),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("currentShow")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("closeShow")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("closeEventShow")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("extraSlotsShow")]),t._v(":"),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u64CD\u4F5C'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wrench'")]),t._v(`
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u64CD\u4F5C'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wrench'")]),t._v(`
      }
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleCloseEvent")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002'")]),t._v(`)
    }
  }
}
`)])])])],1),s("h2",[t._v("API")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])},_=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u4ECB\u7ECD")]),s("p",[t._v("\u56FE\u7247\u653E\u5927\u9884\u89C8\uFF0C\u652F\u6301\u53CC\u51FB\u500D\u6570\u653E\u5927\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u5C5E\u6027")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("show")])]),s("td",[t._v("\u662F\u5426\u663E\u793A")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("images")])]),s("td",[t._v("\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4")]),s("td",[s("em",[t._v("string[]")])]),s("td",[s("code",{pre:!0},[t._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("current")])]),s("td",[t._v("\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("zoom")])]),s("td",[t._v("\u53CC\u51FB\u653E\u5927\u500D\u6570")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("code",{pre:!0},[t._v("2")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("closeable")])]),s("td",[t._v("\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("loop")])]),s("td",[t._v("\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("indicator")])]),s("td",[t._v("\u662F\u5426\u663E\u793A\u5206\u9875")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("lock-scroll")])]),s("td",[t._v("\u9501\u5B9A\u6EDA\u52A8")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("teleport")])]),s("td",[t._v("\u5F39\u51FA\u5C42\u6302\u8F7D\u7684\u4F4D\u7F6E")]),s("td",[s("em",[t._v("TeleportProps[\u2018to\u2019]")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u4E8B\u4EF6")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u4E8B\u4EF6\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u56DE\u8C03\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("change")])]),s("td",[t._v("\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15")]),s("td",[s("code",{pre:!0},[t._v("index: number")]),t._v(" \u56FE\u7247\u7D22\u5F15")])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("open")])]),s("td",[t._v("\u6253\u5F00 image-preview \u65F6\u89E6\u53D1")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("opened")])]),s("td",[t._v("\u6253\u5F00 image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("close")])]),s("td",[t._v("\u5173\u95ED image-preview \u65F6\u89E6\u53D1")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("closed")])]),s("td",[t._v("\u5173\u95ED image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u63D2\u69FD")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u63D2\u69FD\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("indicator")])]),s("td",[t._v("\u5206\u9875\u6307\u793A\u5668")]),s("td",[s("code",{pre:!0},[t._v("index: number")]),t._v(" \u56FE\u7247\u7D22\u5F15 "),s("br"),t._v(" "),s("code",{pre:!0},[t._v("length: number")]),t._v(" \u56FE\u7247\u603B\u6570")])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("close-icon")])]),s("td",[t._v("\u5173\u95ED\u6309\u94AE")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("extra")])]),s("td",[t._v("\u989D\u5916\u63D2\u69FD")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("ImagePreview Options")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("images")])]),s("td",[t._v("\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247 URL \u6570\u7EC4\u6216\u8005\u5355\u4E2A\u56FE\u7247\u7684 URL")]),s("td",[s("em",[t._v("string[] | string")])]),s("td",[s("code",{pre:!0},[t._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("current")])]),s("td",[t._v("\u56FE\u7247\u9884\u89C8\u8D77\u59CB\u7684 URL")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("zoom")])]),s("td",[t._v("\u53CC\u51FB\u653E\u5927\u500D\u6570")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("code",{pre:!0},[t._v("2")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("closeable")])]),s("td",[t._v("\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("loop")])]),s("td",[t._v("\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("indicator")])]),s("td",[t._v("\u662F\u5426\u663E\u793A\u5206\u9875")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("lockScroll")])]),s("td",[t._v("\u9501\u5B9A\u6EDA\u52A8")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onChange")])]),s("td",[t._v("\u5207\u6362\u56FE\u7247\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u5F53\u524D\u7D22\u5F15")]),s("td",[s("em",[t._v("(index: number) => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onOpen")])]),s("td",[t._v("image-preview \u5F00\u542F\u65F6\u5019\u7684\u56DE\u8C03")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onOpened")])]),s("td",[t._v("image-preview \u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClose")])]),s("td",[t._v("image-preview \u65F6\u5173\u95ED\u65F6\u5019\u7684\u56DE\u8C03")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClosed")])]),s("td",[t._v("image-preview \u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u5019\u7684\u56DE\u8C03")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u6837\u5F0F\u53D8\u91CF")]),s("p",[t._v("\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),s("a",{attrs:{href:"#/zh-CN/style-provider"}},[t._v("StyleProvider \u7EC4\u4EF6")]),t._v("\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53D8\u91CF\u540D")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("--image-preview-swipe-indicators-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#ddd")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--image-preview-swipe-indicators-padding")])]),s("td",[s("code",{pre:!0},[t._v("16px 0")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--image-preview-zoom-container-background")])]),s("td",[s("code",{pre:!0},[t._v("#000")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--image-preview-close-icon-top")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--image-preview-close-icon-right")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--image-preview-close-icon-size")])]),s("td",[s("code",{pre:!0},[t._v("22px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--image-preview-close-icon-color")])]),s("td",[s("code",{pre:!0},[t._v("#fff")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--image-preview-extra-top")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--image-preview-extra-left")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])])])])])}];const n={components:{}},e={};var p=a(n,v,_,!1,l,null,null,null);function l(t){for(let r in e)this[r]=e[r]}var o=function(){return p.exports}();export{o as default};
