import{n as a}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var n=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"varlet-site-doc"},[s("h1",[t._v("\u52A8\u4F5C\u9762\u677F")]),t._m(0),s("div",{staticClass:"card"},[s("h3",[t._v("\u5F15\u5165")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ActionSheet } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(ActionSheet)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u5C40\u90E8\u5F15\u5165")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ActionSheet } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(`: {
    [ActionSheet.Component.name]: ActionSheet
  }
}
`)])])])],1),s("h2",[t._v("\u51FD\u6570\u8C03\u7528")]),s("div",{staticClass:"card"},[s("h3",[t._v("\u57FA\u672C\u4F7F\u7528")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" action = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("await")]),t._v(` ActionSheet({
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
    }
  ]
})

action !== `),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'close'")]),t._v(" && Snackbar("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`\u60A8\u9009\u62E9\u7684\u662F:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u4FEE\u6539\u6807\u9898")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[t._v(`ActionSheet({
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
    }
  ],
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427'")]),t._v(`
})
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u7981\u7528\u9009\u9879")]),t._m(1),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[t._v(`ActionSheet({
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
    },
  ]
})
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F")]),t._m(2),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

ActionSheet({
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
    },
  ],
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("closeOnClickAction")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("onSelect")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("action")]),t._v(" =>")]),t._v(" Snackbar("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`\u60A8\u9009\u62E9\u7684\u662F:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`),
})
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F")]),t._m(3),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

ActionSheet({
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#00c48f'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#ff9800'")]),t._v(`,
    },
    {
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#00afef'")]),t._v(`,
    },
  ]
})
`)])])])],1),s("h2",[t._v("\u7EC4\u4EF6\u8C03\u7528")]),s("div",{staticClass:"card"},[s("h3",[t._v("\u57FA\u672C\u4F7F\u7528")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("\u57FA\u672C\u4F7F\u7528"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-action-sheet")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":actions")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"actions"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("select")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleSelect"')]),t._v(`
/>`)]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ref } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("setup")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" show = ref("),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`)
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` actions = reactive([
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
      },
    ])

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" handleSelect = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("action")]),t._v(" =>")]),t._v(" Snackbar("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)

    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
      show,
      actions,
      handleSelect
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u4FEE\u6539\u6807\u9898")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("\u4FEE\u6539\u6807\u9898"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-action-sheet")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":actions")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"actions"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("select")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleSelect"')]),t._v(`
/>`)]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
      },
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleSelect")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("action")]),t._v(")")]),t._v(` {
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u7981\u7528\u9009\u9879")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("\u7981\u7528\u9009\u9879"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-action-sheet")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":actions")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"actions"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("select")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleSelect"')]),t._v(`
/>`)]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
      },
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleSelect")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("action")]),t._v(")")]),t._v(` {
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-action-sheet")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":close-on-click-action")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":actions")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"actions"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("select")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleSelect"')]),t._v(`
/>`)]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
      },
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleSelect")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("action")]),t._v(")")]),t._v(` {
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-action-sheet")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":close-on-click-action")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":actions")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"actions"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(`
  @`),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("select")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleSelect"')]),t._v(`
/>`)]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`,
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actions")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 01'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'account-circle'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#00c48f'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 02'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'notebook'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#ff9800'")]),t._v(`,
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Item 03'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'wifi'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#00afef'")]),t._v(`,
      },
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleSelect")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("action")]),t._v(")")]),t._v(` {
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`\u4F60\u9009\u62E9\u7684\u662F:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
    }
  }
}
`)])])])],1),s("h2",[t._v("API")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)])},v=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u4ECB\u7ECD")]),s("p",[t._v("\u5F39\u51FA\u4E00\u4E2A\u52A8\u4F5C\u9762\u677F\u63D0\u4F9B\u7528\u6237\u9009\u62E9\u9009\u9879\u7684\u80FD\u529B\u3002 "),s("code",{pre:!0},[t._v("ActionSheet")]),t._v(" \u63D0\u4F9B\u4E86\u51FD\u6570\u5F0F\u548C\u7EC4\u4EF6\u5F0F\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4E24\u79CD\u4F7F\u7528\u6548\u679C\u548C\u53C2\u6570\u5E76\u6CA1\u6709\u672C\u8D28\u533A\u522B\u3002 \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A "),s("code",{pre:!0},[t._v("Promise")]),t._v("\uFF0C\u9009\u62E9\u65F6\u8FD4\u56DE "),s("code",{pre:!0},[t._v("\u5F53\u524D\u9009\u62E9\u7684 action")]),t._v("\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u8FD4\u56DE "),s("code",{pre:!0},[t._v("close")]),t._v("\u3002")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u9009\u9879\u4F20\u5165 "),s("code",{pre:!0},[t._v("disabled")]),t._v(" \u53EF\u4EE5\u4F7F\u9009\u9879\u5904\u4E8E\u7981\u7528\u72B6\u6001\u3002")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u65B9\u6CD5\u4F20\u5165 "),s("code",{pre:!0},[t._v("closeOnClickAction")]),t._v(" \u53EF\u4EE5\u7981\u7528\u5728\u9009\u62E9\u9009\u9879\u65F6 "),s("code",{pre:!0},[t._v("ActionSheet")]),t._v(" \u81EA\u52A8\u5173\u95ED\u7684\u884C\u4E3A\uFF0C\u7528\u6237\u53EF\u4EE5\u591A\u6B21\u9009\u62E9\uFF0C \u7531\u4E8E "),s("code",{pre:!0},[t._v("Promise")]),t._v(" \u53EA\u4F1A\u88AB "),s("code",{pre:!0},[t._v("resolve")]),t._v(" \u4E00\u6B21\uFF0C\u6240\u4EE5\u63A8\u8350\u4F7F\u7528 "),s("code",{pre:!0},[t._v("onSelect")]),t._v(" \u76D1\u542C\u7528\u6237\u9009\u62E9\u884C\u4E3A\u3002")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("\u9009\u9879\u63D0\u4F9B\u4E86\u53EF\u4EE5\u914D\u7F6E\u6837\u5F0F\u7684\u53C2\u6570\uFF0C\u5177\u4F53\u9009\u9879\u7684\u53C2\u6570\u53EF\u9009\u9879\u89C1 "),s("code",{pre:!0},[t._v("Action \u7684\u6570\u636E\u7ED3\u6784")]),t._v("\u3002")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u5C5E\u6027")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("show.sync")])]),s("td",[t._v("\u662F\u5426\u663E\u793A\u52A8\u4F5C\u9762\u677F")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("actions")])]),s("td",[t._v("\u9009\u9879\u5217\u8868")]),s("td",[s("em",[t._v("Actions")])]),s("td",[s("code",{pre:!0},[t._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("\u52A8\u4F5C\u9762\u677F\u6807\u9898")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("\u8BF7\u9009\u62E9")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlay")])]),s("td",[t._v("\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlay-class")])]),s("td",[t._v("\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 class")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlay-style")])]),s("td",[t._v("\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 style")]),s("td",[s("em",[t._v("object")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("lock-scroll")])]),s("td",[t._v("\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1 body \u7684\u6EDA\u52A8")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("close-on-click-action")])]),s("td",[t._v("\u662F\u5426\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("close-on-click-overlay")])]),s("td",[t._v("\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u52A8\u4F5C\u9762\u677F")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("teleport")])]),s("td",[t._v("\u52A8\u4F5C\u9762\u677F\u6302\u8F7D\u7684\u4F4D\u7F6E")]),s("td",[s("em",[t._v("TeleportProps[\u2018to\u2019]")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u4E8B\u4EF6")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u4E8B\u4EF6\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("select")])]),s("td",[t._v("\u9009\u62E9\u9009\u9879\u65F6\u51FA\u53D1")]),s("td",[s("code",{pre:!0},[t._v("action: Action")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("open")])]),s("td",[t._v("\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u65F6\u89E6\u53D1")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("opened")])]),s("td",[t._v("\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("close")])]),s("td",[t._v("\u5173\u95ED\u52A8\u4F5C\u9762\u677F\u65F6\u89E6\u53D1")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("closed")])]),s("td",[t._v("\u5173\u95ED\u52A8\u4F5C\u9762\u677F\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("click-overlay")])]),s("td",[t._v("\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("ActionSheet Options")]),s("h4",[t._v("\u51FD\u6570\u5F0F\u8C03\u7528\u65F6\u4F20\u5165\u7684\u9009\u9879")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("\u52A8\u4F5C\u9762\u677F\u6807\u9898")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("\u8BF7\u9009\u62E9")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlay")])]),s("td",[t._v("\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlayClass")])]),s("td",[t._v("\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 class")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlayStyle")])]),s("td",[t._v("\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7684 style")]),s("td",[s("em",[t._v("object")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("lockScroll")])]),s("td",[t._v("\u662F\u5426\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F\uFF0C\u7981\u6B62\u65F6\u6EDA\u52A8\u5F39\u51FA\u5C42\u4E0D\u4F1A\u5F15\u53D1 body \u7684\u6EDA\u52A8")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("closeOnClickOverlay")])]),s("td",[t._v("\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u51FA\u5C42")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onOpen")])]),s("td",[t._v("\u52A8\u4F5C\u9762\u677F\u5F00\u542F\u56DE\u8C03")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onOpened")])]),s("td",[t._v("\u52A8\u4F5C\u9762\u677F\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClose")])]),s("td",[t._v("\u52A8\u4F5C\u9762\u677F\u5173\u95ED\u56DE\u8C03")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClosed")])]),s("td",[t._v("\u52A8\u4F5C\u9762\u677F\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u56DE\u8C03")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onSelect")])]),s("td",[t._v("\u9009\u9879\u9009\u62E9\u65F6\u56DE\u8C03")]),s("td",[s("em",[t._v("(action: Action) => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClickOverlay")])]),s("td",[t._v("\u906E\u7F69\u5C42\u70B9\u51FB\u56DE\u8C03")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("ActionSheet Action")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53C2\u6570")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u7C7B\u578B")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("name")])]),s("td",[t._v("\u9009\u9879\u540D\u79F0")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("color")])]),s("td",[t._v("\u9009\u9879\u6587\u5B57\u989C\u8272")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("icon")])]),s("td",[t._v("icon \u56FE\u6807\uFF0C\u652F\u6301\u7F51\u7EDC\u56FE\u7247\u5730\u5740")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("iconSize")])]),s("td",[t._v("\u56FE\u6807\u5C3A\u5BF8")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("className")])]),s("td",[t._v("\u9009\u9879\u9644\u52A0\u7C7B\u540D")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("disabled")])]),s("td",[t._v("\u662F\u5426\u7981\u7528\u9009\u9879")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u63D2\u69FD")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u63D2\u69FD\u540D")]),s("th",[t._v("\u8BF4\u660E")]),s("th",[t._v("\u53C2\u6570")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("actions")])]),s("td",[t._v("\u9009\u9879\u5217\u8868")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("\u52A8\u4F5C\u9762\u677F\u6807\u9898")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("\u6837\u5F0F\u53D8\u91CF")]),s("p",[t._v("\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),s("a",{attrs:{href:"#/zh-CN/style-provider"}},[t._v("StyleProvider \u7EC4\u4EF6")]),t._v("\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236")]),s("table",[s("thead",[s("tr",[s("th",[t._v("\u53D8\u91CF\u540D")]),s("th",[t._v("\u9ED8\u8BA4\u503C")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-border-radius")])]),s("td",[s("code",{pre:!0},[t._v("2px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-background")])]),s("td",[s("code",{pre:!0},[t._v("#fff")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-title-color")])]),s("td",[s("code",{pre:!0},[t._v("#888")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-title-padding")])]),s("td",[s("code",{pre:!0},[t._v("10px 16px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-title-font-size")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-action-item-height")])]),s("td",[s("code",{pre:!0},[t._v("48px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-action-item-padding")])]),s("td",[s("code",{pre:!0},[t._v("0px 18px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-action-item-color")])]),s("td",[s("code",{pre:!0},[t._v("#333")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-action-item-disabled-color")])]),s("td",[s("code",{pre:!0},[t._v("var(--color-text-disabled)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-icon-margin")])]),s("td",[s("code",{pre:!0},[t._v("0 0 20px 0")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-icon-size")])]),s("td",[s("code",{pre:!0},[t._v("24px")])])])])])])}];const _={components:{}},e={};var l=a(_,n,v,!1,p,null,null,null);function p(t){for(let r in e)this[r]=e[r]}var o=function(){return l.exports}();export{o as default};
