import{n as a}from"./index.31927c0d.js";import"./vendor.4f0eb98f.js";var v=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"varlet-site-doc"},[e("h1",[t._v("ImagePreview")]),t._m(0),e("div",{staticClass:"card"},[e("h3",[t._v("Install")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ImagePreview } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(ImagePreview)
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Scoped Install")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// partial registration")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(`: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Function Call")]),e("h4",[t._v("Basic Usage")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v("ImagePreview("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`)
`)])])]),e("h4",[t._v("Call Back")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` images = [
  `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`,
  `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat2.jpg'")]),t._v(`
]

ImagePreview({
  images,
  `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("onChange")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("index")]),t._v(")")]),t._v(` {
    `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(`.log(index)
  }
})
`)])])])],1),e("h2",[t._v("Component Call")]),e("div",{staticClass:"card"},[e("h3",[t._v("Basic Use")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(`
  @`),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(`
>`)]),t._v(`
  Basic Use
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(" />")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(` 
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(` 
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(`
  @`),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"currentShow = true"')]),t._v(`
>`)]),t._v(`
  Specify initial position
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"https://varlet-vue2.vercel.app/cat2.jpg"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"currentShow"')]),t._v(` 
/>`)]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(` 
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(` 
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(` 
  @`),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeShow = true"')]),t._v(`
>`)]),t._v(`
  Display the close button
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("closeable")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeShow"')]),t._v(` 
/>`)]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(`
  @`),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeEventShow = true"')]),t._v(`
>`)]),t._v(`
  Listen for close event
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(` 
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeEventShow"')]),t._v(`
  @`),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("close")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleCloseEvent"')]),t._v(` 
/>`)]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(`
  @`),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"extraSlotsShow = true"')]),t._v(`
>`)]),t._v(`
  Show extra slots
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":images")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"images"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"extraSlotsShow"')]),t._v(">")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" #"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("extra")]),t._v(">")]),t._v(`
    `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-icon")]),t._v(`
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"menu"')]),t._v(`
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"22"')]),t._v(`
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"#fff"')]),t._v(`
      @`),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"menuShow = true"')]),t._v(`
    />`)]),t._v(`
    `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-action-sheet")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":actions")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"actions"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"menuShow"')]),t._v(" />")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-image-preview")]),t._v(">")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("images")]),t._v(": ["),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat2.jpg'")]),t._v(`],
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("image")]),t._v(": ["),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet-vue2.vercel.app/cat.jpg'")]),t._v(`],
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("menuShow")]),t._v(":"),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("currentShow")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("closeShow")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("closeEventShow")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("extraSlotsShow")]),t._v(":"),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'operate'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wrench'")]),t._v(`
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'operate'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wrench'")]),t._v(`
      }
    ]
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleCloseEvent")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      Snackbar(`),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'The shutdown event was triggered.'")]),t._v(`)
    }
  }
}
`)])])])],1),e("h2",[t._v("API")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])},n=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Intro")]),e("p",[t._v("Image-Preview, Support double-click magnification, Support function call and component call two ways.")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Props")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Description")]),e("th",[t._v("Type")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("show")])]),e("td",[t._v("Whether or display")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("images")])]),e("td",[t._v("Need to preview the image URL")]),e("td",[e("em",[t._v("string[]")])]),e("td",[e("code",{pre:!0},[t._v("[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("current")])]),e("td",[t._v("URL from which the image preview starts")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("zoom")])]),e("td",[t._v("Double-click to zoom in")]),e("td",[e("em",[t._v("string | number")])]),e("td",[e("code",{pre:!0},[t._v("2")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("closeable")])]),e("td",[t._v("Whether to show the close button")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("loop")])]),e("td",[t._v("Whether to open loop playback")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("indicator")])]),e("td",[t._v("Whether to show paging")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("lock-scroll")])]),e("td",[t._v("Lock scroll")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("teleport")])]),e("td",[t._v("The location of the pop-up layer to mount")]),e("td",[e("em",[t._v("TeleportProps[\u2018to\u2019]")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Events")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Event")]),e("th",[t._v("Description")]),e("th",[t._v("Arguments")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("change")])]),e("td",[t._v("The callback function when switching images, the callback parameter is the current index")]),e("td",[e("code",{pre:!0},[t._v("index: number")]),t._v(" Image indexing")])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("open")])]),e("td",[t._v("Triggered when Image-Preview is turned on")]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("opened")])]),e("td",[t._v("Triggered at the end of the open image-preview animation")]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("close")])]),e("td",[t._v("Triggered when Image-Preview is off")]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("closed")])]),e("td",[t._v("Triggered when the animation that closes the image-preview ends")]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Slot")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Slot")]),e("th",[t._v("Description")]),e("th",[t._v("Arguments")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("indicator")])]),e("td",[t._v("Paging indicator")]),e("td",[e("code",{pre:!0},[t._v("index: number")]),t._v(" Image indexing "),e("br"),t._v(" "),e("code",{pre:!0},[t._v("length: number")]),t._v(" Total number of image")])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("close-icon")])]),e("td",[t._v("Close button")]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("extra")])]),e("td",[t._v("Extra slots")]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("ImagePreview Options")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Description")]),e("th",[t._v("Type")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("images")])]),e("td",[t._v("The image URL array or the URL of a single image to be previewed")]),e("td",[e("em",[t._v("string[] | string")])]),e("td",[e("code",{pre:!0},[t._v("[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("current")])]),e("td",[t._v("URL from which the image preview starts")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("zoom")])]),e("td",[t._v("Double-click to zoom in")]),e("td",[e("em",[t._v("string | number")])]),e("td",[e("code",{pre:!0},[t._v("2")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("closeable")])]),e("td",[t._v("Whether to show the close button")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("loop")])]),e("td",[t._v("Whether to open loop playback")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("indicator")])]),e("td",[t._v("Whether to show paging")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("lockScroll")])]),e("td",[t._v("Lock scroll")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("onChange")])]),e("td",[t._v("The callback function when switching images, the callback parameter is the current index")]),e("td",[e("em",[t._v("(index: number) => void")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("onOpen")])]),e("td",[t._v("Callback when image-preview is turned on")]),e("td",[e("em",[t._v("() => void")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("onOpened")])]),e("td",[t._v("Callback at the end of the animation that opened image-preview")]),e("td",[e("em",[t._v("() => void")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("onClose")])]),e("td",[t._v("Callback when image-preview is closed")]),e("td",[e("em",[t._v("() => void")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("onClosed")])]),e("td",[t._v("Callback at the end of the animation that closes the image-preview")]),e("td",[e("em",[t._v("() => void")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Style Variables")]),e("p",[t._v("Here are the CSS variables used by the component, Styles can be customized using "),e("a",{attrs:{href:"#/en-US/style-provider"}},[t._v("StyleProvider")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("--image-preview-swipe-indicators-text-color")])]),e("td",[e("code",{pre:!0},[t._v("#ddd")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--image-preview-swipe-indicators-padding")])]),e("td",[e("code",{pre:!0},[t._v("16px 0")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--image-preview-zoom-container-background")])]),e("td",[e("code",{pre:!0},[t._v("#000")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--image-preview-close-icon-top")])]),e("td",[e("code",{pre:!0},[t._v("14px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--image-preview-close-icon-right")])]),e("td",[e("code",{pre:!0},[t._v("14px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--image-preview-close-icon-size")])]),e("td",[e("code",{pre:!0},[t._v("22px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--image-preview-close-icon-color")])]),e("td",[e("code",{pre:!0},[t._v("#fff")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--image-preview-extra-top")])]),e("td",[e("code",{pre:!0},[t._v("14px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--image-preview-extra-left")])]),e("td",[e("code",{pre:!0},[t._v("14px")])])])])])])}];const l={components:{}},s={};var p=a(l,v,n,!1,_,null,null,null);function _(t){for(let r in s)this[r]=s[r]}var u=function(){return p.exports}();export{u as default};
