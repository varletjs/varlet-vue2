import{n as a}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"varlet-site-doc"},[t("h1",[e._v("ImagePreview")]),e._m(0),t("div",{staticClass:"card"},[t("h3",[e._v("Install")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'vue'")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { ImagePreview } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

Vue.use(ImagePreview)
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("Scoped Install")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// partial registration")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("components")]),e._v(`: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
}
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("Function Call")]),t("h4",[e._v("Basic Usage")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[e._v("ImagePreview("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),e._v(`)
`)])])]),t("h4",[e._v("Call Back")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(` images = [
  `),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),e._v(`,
  `),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat2.jpg'")]),e._v(`
]

ImagePreview({
  images,
  `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("onChange")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("index")]),e._v(")")]),e._v(` {
    `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(`.log(index)
  }
})
`)])])])],1),t("h2",[e._v("Component Call")]),t("div",{staticClass:"card"},[t("h3",[e._v("Basic Use")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"warning"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("block")]),e._v(`
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"show = true"')]),e._v(`
>`)]),e._v(`
  Basic Use
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(">")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-image-preview")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":images")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"images"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":show.sync")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"show"')]),e._v(" />")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(` 
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"warning"')]),e._v(` 
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("block")]),e._v(`
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"currentShow = true"')]),e._v(`
>`)]),e._v(`
  Specify initial position
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(">")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-image-preview")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("current")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"https://varlet.gitee.io/varlet-ui/cat2.jpg"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":images")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"images"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":show.sync")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"currentShow"')]),e._v(` 
/>`)]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(` 
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"warning"')]),e._v(` 
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("block")]),e._v(` 
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"closeShow = true"')]),e._v(`
>`)]),e._v(`
  Display the close button
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(">")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-image-preview")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("closeable")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":images")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"images"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":show.sync")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"closeShow"')]),e._v(` 
/>`)]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("block")]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"warning"')]),e._v(`
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"closeEventShow = true"')]),e._v(`
>`)]),e._v(`
  Listen for close event
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-button")]),e._v(">")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-image-preview")]),e._v(` 
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":images")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"images"')]),e._v(`
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":show.sync")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"closeEventShow"')]),e._v(`
  @`),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("close")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"handleCloseEvent"')]),e._v(` 
/>`)]),e._v(`
`)])])]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { Snackbar } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("show")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("currentShow")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("closeShow")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("closeEventShow")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(`,
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("images")]),e._v(`: [
      `),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),e._v(`,
      `),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://varlet.gitee.io/varlet-ui/cat2.jpg'")]),e._v(`,
    ],
  }),
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(`: {
    `),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-title"}},[e._v("handleCloseEvent")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),e._v(")")]),e._v(` {
      Snackbar(`),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'The shutdown event was triggered.'")]),e._v(`)
    }
  }
}
`)])])])],1),t("h2",[e._v("API")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5)])},n=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Intro")]),t("p",[e._v("Image-Preview, Support double-click magnification, Support function call and component call two ways.")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Props")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Description")]),t("th",[e._v("Type")]),t("th",[e._v("Default")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("show")])]),t("td",[e._v("Whether or display")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("images")])]),t("td",[e._v("Need to preview the image URL")]),t("td",[t("em",[e._v("string[]")])]),t("td",[t("code",{pre:!0},[e._v("[]")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("current")])]),t("td",[e._v("URL from which the image preview starts")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("zoom")])]),t("td",[e._v("Double-click to zoom in")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("2")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("closeable")])]),t("td",[e._v("Whether to show the close button")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("loop")])]),t("td",[e._v("Whether to open loop playback")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("indicator")])]),t("td",[e._v("Whether to show paging")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("lock-scroll")])]),t("td",[e._v("Lock scroll")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("teleport")])]),t("td",[e._v("The location of the pop-up layer to mount")]),t("td",[t("em",[e._v("TeleportProps[\u2018to\u2019]")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Events")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Event")]),t("th",[e._v("Description")]),t("th",[e._v("Arguments")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("change")])]),t("td",[e._v("The callback function when switching images, the callback parameter is the current index")]),t("td",[t("code",{pre:!0},[e._v("index: number")]),e._v(" Image indexing")])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("open")])]),t("td",[e._v("Triggered when Image-Preview is turned on")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("opened")])]),t("td",[e._v("Triggered at the end of the open image-preview animation")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("close")])]),t("td",[e._v("Triggered when Image-Preview is off")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("closed")])]),t("td",[e._v("Triggered when the animation that closes the image-preview ends")]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Slot")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Slot")]),t("th",[e._v("Description")]),t("th",[e._v("Arguments")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("indicator")])]),t("td",[e._v("Paging indicator")]),t("td",[t("code",{pre:!0},[e._v("index: number")]),e._v(" Image indexing "),t("br"),e._v(" "),t("code",{pre:!0},[e._v("length: number")]),e._v(" Total number of image")])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("close-icon")])]),t("td",[e._v("Close button")]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("ImagePreview Options")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Description")]),t("th",[e._v("Type")]),t("th",[e._v("Default")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("images")])]),t("td",[e._v("The image URL array or the URL of a single image to be previewed")]),t("td",[t("em",[e._v("string[] | string")])]),t("td",[t("code",{pre:!0},[e._v("[]")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("current")])]),t("td",[e._v("URL from which the image preview starts")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("zoom")])]),t("td",[e._v("Double-click to zoom in")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("2")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("closeable")])]),t("td",[e._v("Whether to show the close button")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("false")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("loop")])]),t("td",[e._v("Whether to open loop playback")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("indicator")])]),t("td",[e._v("Whether to show paging")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("lockScroll")])]),t("td",[e._v("Lock scroll")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onChange")])]),t("td",[e._v("The callback function when switching images, the callback parameter is the current index")]),t("td",[t("em",[e._v("(index: number) => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onOpen")])]),t("td",[e._v("Callback when image-preview is turned on")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onOpened")])]),t("td",[e._v("Callback at the end of the animation that opened image-preview")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onClose")])]),t("td",[e._v("Callback when image-preview is closed")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onClosed")])]),t("td",[e._v("Callback at the end of the animation that closes the image-preview")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Style Variables")]),t("p",[e._v("Here are the CSS variables used by the component, Styles can be customized using "),t("a",{attrs:{href:"#/en-US/style-provider"}},[e._v("StyleProvider")])]),t("table",[t("thead",[t("tr",[t("th",[e._v("Variable")]),t("th",[e._v("Default")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-swipe-indicators-text-color")])]),t("td",[t("code",{pre:!0},[e._v(" #ddd")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-swipe-indicators-padding")])]),t("td",[t("code",{pre:!0},[e._v("16px 0")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-zoom-container-background")])]),t("td",[t("code",{pre:!0},[e._v(" #000")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-close-icon-top")])]),t("td",[t("code",{pre:!0},[e._v("13px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-close-icon-right")])]),t("td",[t("code",{pre:!0},[e._v(" 14px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-close-icon-size")])]),t("td",[t("code",{pre:!0},[e._v("22px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--image-preview-close-icon-color")])]),t("td",[t("code",{pre:!0},[e._v("#fff")])])])])])])}];const l={components:{}},s={};var _=a(l,v,n,!1,p,null,null,null);function p(e){for(let r in s)this[r]=s[r]}var i=function(){return _.exports}();export{i as default};
