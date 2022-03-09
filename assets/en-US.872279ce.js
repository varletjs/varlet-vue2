import{n as a}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var n=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"varlet-site-doc"},[s("h1",[t._v("ActionSheet")]),t._m(0),s("div",{staticClass:"card"},[s("h3",[t._v("Install")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ActionSheet } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(ActionSheet)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Scoped Install")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ActionSheet } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(`: {
    [ActionSheet.Component.name]: ActionSheet
  }
}
`)])])])],1),s("h2",[t._v("Functional")]),s("div",{staticClass:"card"},[s("h3",[t._v("Basic Use")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

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

action !== `),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'close'")]),t._v(" && Snackbar("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Your selected is:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Modify Title")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[t._v(`ActionSheet({
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
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Choose whichever you like'")]),t._v(`
})
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Action Disabled")]),t._m(1),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[t._v(`ActionSheet({
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
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Disable Close On Click Action")]),t._m(2),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

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
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("onSelect")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("action")]),t._v(" =>")]),t._v(" Snackbar("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Your selected is:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`),
})
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Custom Action Styles")]),t._m(3),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

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
`)])])])],1),s("h2",[t._v("Component Call")]),s("div",{staticClass:"card"},[s("h3",[t._v("Basic Usage")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("Basic Usage"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
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
      },
    ]
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleSelect")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("action")]),t._v(")")]),t._v(` {
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Your selected is:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Modify Title")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("Modify Title"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-action-sheet")]),t._v(` 
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Choose whichever you like"')]),t._v(` 
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
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Your selected is:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Action Disabled")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("Action Disabled"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
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
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Your selected is:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Disable close on click action")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("Disable close on click action"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
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
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Your selected is:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Custom Action Styles")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"warning"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show = true"')]),t._v(">")]),t._v("Custom Action Styles"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
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
      Snackbar(`),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Your selected is:"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${action.name}")]),t._v("`")]),t._v(`)
    }
  }
}
`)])])])],1),s("h2",[t._v("API")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)])},l=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Intro")]),s("p",[t._v("An action sheet pops up to give the user the ability to select options. "),s("code",{pre:!0},[t._v("ActionSheet")]),t._v(" Functional and component use methods are provided, and there is no essential difference between the two effects and parameters. The function returns a "),s("code",{pre:!0},[t._v("Promise")]),t._v("\uFF0Con selection return "),s("code",{pre:!0},[t._v("action")]),t._v("\uFF0CClick modal close to return "),s("code",{pre:!0},[t._v("close")]),t._v(".")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("The option is passed "),s("code",{pre:!0},[t._v("disabled")]),t._v(" to leave the action in the disabled state")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("Passing in "),s("code",{pre:!0},[t._v("CloseOnClickAction")]),t._v(" disallows the action of "),s("code",{pre:!0},[t._v("ActionSheet")]),t._v(" closing automatically when the option is selected. The user can select the action multiple times. Because "),s("code",{pre:!0},[t._v("Promise")]),t._v(" is only resolved once, it is recommended to use "),s("code",{pre:!0},[t._v("onSelect")]),t._v(" to listen for the action of the user")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("Options provide parameters to configure the style. See the "),s("code",{pre:!0},[t._v("Action")]),t._v(" data structure for options")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Props")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("show.sync")])]),s("td",[t._v("Whether to display the action sheet")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("actions")])]),s("td",[t._v("Action list")]),s("td",[s("em",[t._v("Actions")])]),s("td",[s("code",{pre:!0},[t._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("Action sheet title")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Select One")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlay")])]),s("td",[t._v("Whether to display the overlay")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlay-class")])]),s("td",[t._v("Custom overlay class")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlay-style")])]),s("td",[t._v("Custom overlay style")]),s("td",[s("em",[t._v("object")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("lock-scroll")])]),s("td",[t._v("Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("close-on-click-action")])]),s("td",[t._v("Whether to close the actions sheet when clicking action")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("close-on-click-overlay")])]),s("td",[t._v("Whether to click the overlay to close the action sheet")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("teleport")])]),s("td",[t._v("The location of the action sheet to mount")]),s("td",[s("em",[t._v("TeleportProps[\u2018to\u2019]")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Events")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Event")]),s("th",[t._v("Description")]),s("th",[t._v("Arguments")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("select")])]),s("td",[t._v("Triggered when the action is click")]),s("td",[s("code",{pre:!0},[t._v("action: Action")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("open")])]),s("td",[t._v("Triggered when the action sheet is open")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("opened")])]),s("td",[t._v("Triggered when the action sheet open-animation ends")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("close")])]),s("td",[t._v("Triggered when the action sheet is close")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("closed")])]),s("td",[t._v("Triggered when the action sheet close-animation ends")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("click-overlay")])]),s("td",[t._v("Triggered when you click on overlay")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("ActionSheet Options")]),s("h4",[t._v("Options passed in for a functional call")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("Action sheet title")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Select One")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlay")])]),s("td",[t._v("Whether to display the overlay")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlayClass")])]),s("td",[t._v("Custom overlay class")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("overlayStyle")])]),s("td",[t._v("Custom overlay style")]),s("td",[s("em",[t._v("object")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("lockScroll")])]),s("td",[t._v("Whether to disable scrolling penetration, scrolling the action sheet when disabled will not cause the body to scroll")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("closeOnClickOverlay")])]),s("td",[t._v("Whether to click the overlay to close the action sheet")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onOpen")])]),s("td",[t._v("Action sheet open callback")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onOpened")])]),s("td",[t._v("Action sheet open-animation ends callback")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClose")])]),s("td",[t._v("Action sheet close callback")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClosed")])]),s("td",[t._v("Action sheet close-animation ends callback")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onSelect")])]),s("td",[t._v("Action sheet click action callback")]),s("td",[s("em",[t._v("(action: Action) => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClickOverlay")])]),s("td",[t._v("Click overlay callback")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("ActionSheet Action")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("name")])]),s("td",[t._v("Action name")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("color")])]),s("td",[t._v("Action text color")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("icon")])]),s("td",[t._v("Icon\uFF0Csupport network image address")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("iconSize")])]),s("td",[t._v("Icon size")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("className")])]),s("td",[t._v("Class name")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("disabled")])]),s("td",[t._v("Disable or not option")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("false")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Slots")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Slot")]),s("th",[t._v("Description")]),s("th",[t._v("Arguments")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("actions")])]),s("td",[t._v("Action list")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("Action sheet title")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Style Variables")]),s("p",[t._v("Here are the CSS variables used by the component, Styles can be customized using "),s("a",{attrs:{href:"#/en-US/style-provider"}},[t._v("StyleProvider")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-border-radius")])]),s("td",[s("code",{pre:!0},[t._v("2px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-background")])]),s("td",[s("code",{pre:!0},[t._v("#fff")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-title-color")])]),s("td",[s("code",{pre:!0},[t._v("#888")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-title-padding")])]),s("td",[s("code",{pre:!0},[t._v("10px 16px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-title-font-size")])]),s("td",[s("code",{pre:!0},[t._v("14px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-action-item-height")])]),s("td",[s("code",{pre:!0},[t._v("48px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-action-item-padding")])]),s("td",[s("code",{pre:!0},[t._v("0px 18px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-action-item-color")])]),s("td",[s("code",{pre:!0},[t._v("#333")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-action-item-disabled-color")])]),s("td",[s("code",{pre:!0},[t._v("var(--color-text-disabled)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-icon-margin")])]),s("td",[s("code",{pre:!0},[t._v("0 0 20px 0")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--action-sheet-icon-size")])]),s("td",[s("code",{pre:!0},[t._v("24px")])])])])])])}];const v={components:{}},e={};var c=a(v,n,l,!1,_,null,null,null);function _(t){for(let r in e)this[r]=e[r]}var i=function(){return c.exports}();export{i as default};
