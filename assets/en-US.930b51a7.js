import{n as a}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"varlet-site-doc"},[t("h1",[e._v("Picker")]),e._m(0),t("div",{staticClass:"card"},[t("h3",[e._v("Install")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'vue'")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { Picker } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

Vue.use(Picker)
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("Scoped Install")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { Picker } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("components")]),e._v(`: {
    [Picker.Component.name]: Picker
  }
}
`)])])])],1),t("h2",[e._v("Function Call")]),t("div",{staticClass:"card"},[t("h3",[e._v("Multi-column Picker")]),t("p",[e._v("A two-dimensional array is passed in, and each entry of the array is the contents of each column. Returns the user triggered status, selected text, and selected index.")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(` columns = [
  `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
  `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
  `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index)
]
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { state, texts, indexes } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("await")]),e._v(` Picker(columns)
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("Cascade Picker")]),e._m(1),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" columns "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui/json/area.json'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { state, texts, indexes } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("await")]),e._v(` Picker({
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("cascade")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(`,
  columns
})
`)])])])],1),t("h2",[e._v("Component Call")]),t("div",{staticClass:"card"},[t("h3",[e._v("Multi-column Picker")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-picker")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":columns")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"columns"')]),e._v(" />")]),e._v(`
`)])])]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("columns")]),e._v(`: [
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
    ]
  })
}
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("Cascade Picker")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-picker")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("cascade")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":columns")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"columns"')]),e._v(" />")]),e._v(`
`)])])]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("columns")]),e._v(`: [
      {
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'\u5317\u4EAC\u5E02'")]),e._v(`,
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'\u5E02\u8F96\u533A'")]),e._v(`
          }
        ]
      },
      {
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'\u6CB3\u5317\u7701'")]),e._v(`,
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'\u77F3\u5BB6\u5E84\u5E02'")]),e._v(`
          }
        ]
      }
    ]
  })
}
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("The three-level linkage between the provincial and municipal levels")]),t("p",[e._v("The component library provides complete provincial information and can be used directly.")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" area "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui/json/area.json'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("columns")]),e._v(`: area
  })
}
`)])])])],1),t("h2",[e._v("API")]),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9)])},v=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Intro")]),t("p",[e._v("Provides two kinds of function and component call mode support cascading mode at the same time, can handle multilevel linkage.")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("Passing in a "),t("code",{pre:!0},[e._v("cascade")]),e._v(" attribute starts cascading. Built-in component library provides a three-level linkage between provinces and municipalities, import "),t("code",{pre:!0},[e._v("area.json")]),e._v(".")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Props")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Description")]),t("th",[e._v("Type")]),t("th",[e._v("Default")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("columns")])]),t("td",[e._v("Column content")]),t("td",[t("em",[e._v("NormalColumn[] | CascadeColumn[] | Texts")])]),t("td",[t("code",{pre:!0},[e._v("[]")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("title")])]),t("td",[e._v("title")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("Pick it")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("text-key")])]),t("td",[e._v("The attribute key of the text")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("text")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("toolbar")])]),t("td",[e._v("Whether to display the top toolbar")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cascade")])]),t("td",[e._v("Whether to enable cascading mode")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("option-height")])]),t("td",[e._v("Option height(px rem)")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("44")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("option-count")])]),t("td",[e._v("Number of options visible")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("6")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm-button-text")])]),t("td",[e._v("Confirm button text")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("Confirm")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel-button-text")])]),t("td",[e._v("Cancel button text")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("Cancel")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm-button-text-color")])]),t("td",[e._v("Confirm the button text color")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel-button-text-color")])]),t("td",[e._v("Cancel button text color")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Picker Options")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Description")]),t("th",[e._v("Type")]),t("th",[e._v("Default")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("columns")])]),t("td",[e._v("Column content")]),t("td",[t("em",[e._v("NormalColumn[] | CascadeColumn[] | Texts")])]),t("td",[t("code",{pre:!0},[e._v("[]")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("title")])]),t("td",[e._v("title")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("Pick it")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("textKey")])]),t("td",[e._v("The attribute key of the text")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("text")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("toolbar")])]),t("td",[e._v("Whether to display the top toolbar")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cascade")])]),t("td",[e._v("Whether to enable cascading mode")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("optionHeight")])]),t("td",[e._v("Option height")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("44")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("optionCount")])]),t("td",[e._v("Number of options visible")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("6")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirmButtonText")])]),t("td",[e._v("Confirm button text")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("Confirm")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancelButtonText")])]),t("td",[e._v("Cancel button text")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("Cancel")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirmButtonTextColor")])]),t("td",[e._v("Confirm the button text color")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancelButtonTextColor")])]),t("td",[e._v("Cancel button text color")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onOpen")])]),t("td",[e._v("Popup open callback")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onOpened")])]),t("td",[e._v("Popup open-animation ends callback")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onClose")])]),t("td",[e._v("Popup close callback")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onClosed")])]),t("td",[e._v("Close pop-up layer callback when animation ends")]),t("td",[t("em",[e._v("(texts: Texts, indexes: number[]) => void")])]),t("td",[t("code",{pre:!0},[e._v("() => void")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onChange")])]),t("td",[e._v("Pick callbacks when content changes")]),t("td",[t("em",[e._v("(texts: Texts, indexes: number[]) => void")])]),t("td",[t("code",{pre:!0},[e._v("() => void")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onConfirm")])]),t("td",[e._v("Pick callbacks when confirm")]),t("td",[t("em",[e._v("(texts: Texts, indexes: number[]) => void")])]),t("td",[t("code",{pre:!0},[e._v("() => void")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onCancel")])]),t("td",[e._v("Pick callbacks when cancel")]),t("td",[t("em",[e._v("(texts: Texts, indexes: number[]) => void")])]),t("td",[t("code",{pre:!0},[e._v("() => void")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Picker NormalColumn")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Description")]),t("th",[e._v("Type")]),t("th",[e._v("Default")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("texts")])]),t("td",[e._v("Text array")]),t("td",[t("em",[e._v("Texts")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("initialIndex")])]),t("td",[e._v("Initialize index")]),t("td",[t("em",[e._v("number")])]),t("td",[t("code",{pre:!0},[e._v("0")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Picker CascadeColumn")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Description")]),t("th",[e._v("Type")]),t("th",[e._v("Default")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("text")])]),t("td",[e._v("Each line of text")]),t("td",[t("em",[e._v("any")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("children")])]),t("td",[e._v("children tree")]),t("td",[t("em",[e._v("CascadeColumn[]")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Methods")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Method")]),t("th",[e._v("Description")]),t("th",[e._v("Arguments")]),t("th",[e._v("Return")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm")])]),t("td",[e._v("Immediately stop scrolling and trigger the "),t("code",{pre:!0},[e._v("confirm")]),e._v(" event")]),t("td",[t("code",{pre:!0},[e._v("-")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel")])]),t("td",[e._v("Immediately stop scrolling and trigger the "),t("code",{pre:!0},[e._v("cancel")]),e._v(" event")]),t("td",[t("code",{pre:!0},[e._v("-")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Events")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Event")]),t("th",[e._v("Description")]),t("th",[e._v("Arguments")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("change")])]),t("td",[e._v("Triggered when the pick content changes")]),t("td",[t("code",{pre:!0},[e._v("texts: Texts")]),e._v(" Text array "),t("br"),e._v(" "),t("code",{pre:!0},[e._v("indexes: number[]")]),e._v(" picked index array")])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel")])]),t("td",[e._v("Triggered when you click the cancel button")]),t("td",[t("code",{pre:!0},[e._v("texts: Texts")]),e._v(" Text array "),t("br"),e._v(" "),t("code",{pre:!0},[e._v("indexes: number[]")]),e._v(" picked index array")])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm")])]),t("td",[e._v("Triggered when you click the confirm button")]),t("td",[t("code",{pre:!0},[e._v("texts: Texts")]),e._v(" Text array "),t("br"),e._v(" "),t("code",{pre:!0},[e._v("indexes: number[]")]),e._v(" picked index array")])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Slots")]),t("table",[t("thead",[t("tr",[t("th",[e._v("Slot")]),t("th",[e._v("Description")]),t("th",[e._v("Arguments")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel")])]),t("td",[e._v("cancel button content")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("title")])]),t("td",[e._v("title content")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm")])]),t("td",[e._v("confirm button content")]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Style Variables")]),t("p",[e._v("Here are the CSS variables used by the component, Styles can be customized using "),t("a",{attrs:{href:"#/en-US/style-provider"}},[e._v("StyleProvider")])]),t("table",[t("thead",[t("tr",[t("th",[e._v("Variable")]),t("th",[e._v("Default")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-background")])]),t("td",[t("code",{pre:!0},[e._v("#fff")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-toolbar-height")])]),t("td",[t("code",{pre:!0},[e._v("44px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-confirm-button-text-color")])]),t("td",[t("code",{pre:!0},[e._v("var(--color-primary)")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-cancel-button-text-color")])]),t("td",[t("code",{pre:!0},[e._v("#888")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-picked-border")])]),t("td",[t("code",{pre:!0},[e._v("1px solid rgba(0, 0, 0, 0.12)")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-title-font-size")])]),t("td",[t("code",{pre:!0},[e._v("16px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-toolbar-padding")])]),t("td",[t("code",{pre:!0},[e._v("0 4px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-mask-background-image")])]),t("td",[t("code",{pre:!0},[e._v("linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))")])])])])])])}];const c={components:{}},s={};var _=a(c,n,v,!1,d,null,null,null);function d(e){for(let r in s)this[r]=s[r]}var p=function(){return _.exports}();export{p as default};