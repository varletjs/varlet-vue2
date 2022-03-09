import{n as a}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var l=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"varlet-site-doc"},[s("h1",[t._v("List")]),t._m(0),s("div",{staticClass:"card"},[s("h3",[t._v("Install")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { List } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(List)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Basic Use")]),t._m(1),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-list")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":finished")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"finished"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":loading.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loading"')]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(`
>`)]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-cell")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item in list"')]),t._v(">")]),t._v(`
    List Item: {{ item }}
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-cell")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-list")]),t._v(">")]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("loading")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("finished")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("list")]),t._v(`: [],
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`:{
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i < "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(`; i++) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.push("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`)
        }

        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".loading = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`

        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length >= "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("60")]),t._v(`) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".finished = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`
        }
      }, `),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(`)
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Load Fail")]),t._m(2),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-list")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":error.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":loading.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loading"')]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(`
>`)]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-cell")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item in list"')]),t._v(">")]),t._v(`
    List Item: {{ item }}
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-cell")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-list")]),t._v(">")]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("loading")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("finished")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("list")]),t._v(`: [],
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`:{
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40")]),t._v(`) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".error = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".loading = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`
          `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(`
        }

        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i < "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(`; i++) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list2.push("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`)
        }

        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".loading = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`
      }, `),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(`)
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Tip Text")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-list")]),t._v(` 
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("loading-text")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loading QAQ"')]),t._v(` 
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("finished-text")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"finished ORZ"')]),t._v(` 
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("error-text")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"error TNT"')]),t._v(` 
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":finished")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"finished"')]),t._v(` 
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":loading.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loading"')]),t._v(` 
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"load"')]),t._v(`
>`)]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-cell")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item in list"')]),t._v(">")]),t._v(`
    List Item: {{ item }}
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-cell")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-list")]),t._v(">")]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("loading")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("finished")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("list")]),t._v(`: [],
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`:{
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("load")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" i = "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("; i < "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(`; i++) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.push("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`)
        }

        `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".loading = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`

        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".list.length >= "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("60")]),t._v(`) {
          `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".finished = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`
        }
      }, `),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(`)
    }
  }
}
`)])])])],1),t._m(3),s("h2",[t._v("API")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8)])},n=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Intro")]),s("p",[t._v("Unlimited scroll load list, touch bottom load, support manual check position load. Support custom loading state, error state, data loading completed state.")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("The "),s("code",{pre:!0},[t._v("load")]),t._v(" event is emitted when a scroll container is detected scrolling to the bottom\uFF0Cand will be set "),s("code",{pre:!0},[t._v("loading.sync")]),t._v(" to "),s("code",{pre:!0},[t._v("true")]),t._v(", you need to manually set "),s("code",{pre:!0},[t._v("loading.sync")]),t._v(" to "),s("code",{pre:!0},[t._v("false")]),t._v(" at the end of loading, that\u2019s the end of the load.")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("You can manually set the error status using "),s("code",{pre:!0},[t._v("error.sync")]),t._v(", an error message is displayed. Clicking on the error message will help you set the "),s("code",{pre:!0},[t._v("error.sync")]),t._v(" to "),s("code",{pre:!0},[t._v("false")]),t._v(" and trigger the "),s("code",{pre:!0},[t._v("load")]),t._v(" event again.")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Be Careful")]),s("p",[t._v("We detect bottoming by listening for the scroll event of the scroll container and perform the load. A scroll container is the nearest element that "),s("code",{pre:!0},[t._v("overflow-y='auto'")]),t._v(" or "),s("code",{pre:!0},[t._v("scroll")]),t._v(" When you set an element\u2019s "),s("code",{pre:!0},[t._v("overflow-x")]),t._v(" to a value other than "),s("code",{pre:!0},[t._v("visible")]),t._v(", The browser will fix your "),s("code",{pre:!0},[t._v("overflow-y")]),t._v(" to "),s("code",{pre:!0},[t._v("auto")]),t._v(" in order to maintain a "),s("code",{pre:!0},[t._v("BFC")]),t._v(" structure. This can be mistaken for a scroll container, so avoid it.")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Props")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("loading.sync")])]),s("td",[t._v("loading state")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("error.sync")])]),s("td",[t._v("error state")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("immediate-check")])]),s("td",[t._v("Whether the location is detected immediately when the List is initialized")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("finished")])]),s("td",[t._v("Whether the load is complete")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("offset")])]),s("td",[t._v("Trigger distance from the bottom")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("code",{pre:!0},[t._v("0")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("loading-text")])]),s("td",[t._v("Loading text")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Loading")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("finished-text")])]),s("td",[t._v("Finished text")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("No more")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("error-text")])]),s("td",[t._v("Error text")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Load fail")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Methods")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Method")]),s("th",[t._v("Description")]),s("th",[t._v("Arguments")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("check")])]),s("td",[t._v("Trigger position check, touch bottom trigger load event")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Events")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Event")]),s("th",[t._v("Description")]),s("th",[t._v("Arguments")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("load")])]),s("td",[t._v("Triggered when it hit bottom")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Slots")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Slot")]),s("th",[t._v("Description")]),s("th",[t._v("Arguments")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("default")])]),s("td",[t._v("List content")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("loading")])]),s("td",[t._v("Loading content")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("error")])]),s("td",[t._v("Error content")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("finished")])]),s("td",[t._v("Finished content")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Style Variables")]),s("p",[t._v("Here are the CSS variables used by the component, Styles can be customized using "),s("a",{attrs:{href:"#/en-US/style-provider"}},[t._v("StyleProvider")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("--list-loading-height")])]),s("td",[s("code",{pre:!0},[t._v("50px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--list-finished-height")])]),s("td",[s("code",{pre:!0},[t._v("50px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--list-error-height")])]),s("td",[s("code",{pre:!0},[t._v("50px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--list-loading-color")])]),s("td",[s("code",{pre:!0},[t._v("#888")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--list-finished-color")])]),s("td",[s("code",{pre:!0},[t._v("#888")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--list-error-color")])]),s("td",[s("code",{pre:!0},[t._v("#888")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--list-loading-font-size")])]),s("td",[s("code",{pre:!0},[t._v("var(--font-size-md)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--list-finished-font-size")])]),s("td",[s("code",{pre:!0},[t._v("var(--font-size-md)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--list-error-font-size")])]),s("td",[s("code",{pre:!0},[t._v("var(--font-size-md)")])])])])])])}];const v={components:{}},e={};var _=a(v,l,n,!1,p,null,null,null);function p(t){for(let r in e)this[r]=e[r]}var u=function(){return _.exports}();export{u as default};
