import{n as a}from"./index.f4f3cd66.js";import"./vendor.4f0eb98f.js";var n=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"varlet-site-doc"},[s("h1",[t._v("Picker")]),t._m(0),s("div",{staticClass:"card"},[s("h3",[t._v("Install")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Picker } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(Picker)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Scoped Install")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Picker } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(`: {
    [Picker.Component.name]: Picker
  }
}
`)])])])],1),s("h2",[t._v("Function Call")]),s("div",{staticClass:"card"},[s("h3",[t._v("Multi-column Picker")]),s("p",[t._v("A two-dimensional array is passed in, and each entry of the array is the contents of each column. Returns the user triggered status, selected text, and selected index.")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` columns = [
  `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(" }).map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` index),
  `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(" }).map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` index),
  `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(" }).map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` index)
]
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { state, texts, indexes } = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("await")]),t._v(` Picker(columns)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Cascade Picker")]),t._m(1),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" columns "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui/json/area.json'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { state, texts, indexes } = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("await")]),t._v(` Picker({
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cascade")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
  columns
})
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Text Formatter")]),t._m(2),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Picker } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" genCounts = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("length")]),t._v(" =>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ length }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(" index + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`)

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" months = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("12")]),t._v(`)
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" leapYearFebruaryDates = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("29")]),t._v(`)
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" februaryDates = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("28")]),t._v(`)
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" oddMonthDates = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("31")]),t._v(`)
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" evenMonthDates = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30")]),t._v(`)

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" isOddMonth = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("month")]),t._v(" =>")]),t._v(" ["),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("5")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("7")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("8")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("12")]),t._v(`].includes(month)

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" isLeapYear = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("year")]),t._v(" =>")]),t._v(" (year % "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(" === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(" && year % "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100")]),t._v(" !== "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") || year % "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("400")]),t._v(" === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" genDates = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("year, month")]),t._v(") =>")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (isLeapYear(year) && month === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(`) {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` leapYearFebruaryDates
  }

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (!isLeapYear(year) && month === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(`) {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` februaryDates
  }

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(` (isOddMonth(month)) {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` oddMonthDates
  }

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` evenMonthDates
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" genColumns = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("startYear, endYear")]),t._v(") =>")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` columns = []

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(` year = startYear; year < endYear; year++) {
    columns.push({
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: year,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(": months.map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("month")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: month,
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(": genDates(year, month).map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("date")]),t._v(" =>")]),t._v(" ({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: date }))
        }
      })
    })
  }

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` columns
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" columns = genColumns("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1970")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2100")]),t._v(`)

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" textFormatter = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("text, columnIndex")]),t._v(") =>")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (columnIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${text}")]),t._v(" YEAR`")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (columnIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${text}")]),t._v(" MONTH`")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (columnIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(") "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${text}")]),t._v(" DATE`")]),t._v(`
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { state, texts, indexes } = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("await")]),t._v(` Picker({
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cascade")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
  columns,
  textFormatter,
})
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Mapping of values")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Picker, Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` rawColumns = [
  [
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Ember Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Storm Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Earth Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Void Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(` },
  ],
  [
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Ember Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Storm Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Earth Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Void Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(` },
  ],
  [
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Ember Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Storm Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Earth Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Void Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(` },
  ],
]

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" normalizedColumns = rawColumns.map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("column")]),t._v(") =>")]),t._v(" column.map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("option")]),t._v(" =>")]),t._v(` option.label))

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" handleChange = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, [i1, i2, i3]")]),t._v(") =>")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` [c1, c2, c3] = rawColumns
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` ids = [c1[i1].id, c2[i2].id, c3[i3].id]
  Snackbar(ids.toString())
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { state, texts, indexes } = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("await")]),t._v(` Picker({
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: normalizedColumns,
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("onChange")]),t._v(`: handleChange
})
`)])])])],1),s("h2",[t._v("Component Call")]),s("div",{staticClass:"card"},[s("h3",[t._v("Multi-column Picker")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" />")]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(" }).map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` index),
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(" }).map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` index),
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("length")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20")]),t._v(" }).map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(` index),
    ]
  })
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Cascade Picker")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cascade")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" />")]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: [
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u5317\u4EAC\u5E02'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u5E02\u8F96\u533A'")]),t._v(`
          }
        ]
      },
      {
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u6CB3\u5317\u7701'")]),t._v(`,
        `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(`: [
          {
            `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u77F3\u5BB6\u5E84\u5E02'")]),t._v(`
          }
        ]
      }
    ]
  })
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("The three-level linkage between the provincial and municipal levels")]),s("p",[t._v("The component library provides complete provincial information and can be used directly.")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" area "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui/json/area.json'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: area
  })
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Text Formatter")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cascade")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":text-formatter")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"textFormatter"')]),t._v(" />")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" genCounts = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("length")]),t._v(" =>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Array")]),t._v(".from({ length }, "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, index")]),t._v(") =>")]),t._v(" index + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`)

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" months = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("12")]),t._v(`)
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" leapYearFebruaryDates = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("29")]),t._v(`)
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" februaryDates = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("28")]),t._v(`)
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" oddMonthDates = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("31")]),t._v(`)
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" evenMonthDates = genCounts("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("30")]),t._v(`)

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" isOddMonth = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("month")]),t._v(" =>")]),t._v(" ["),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("5")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("7")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("8")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("12")]),t._v(`].includes(month)

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" isLeapYear = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("year")]),t._v(" =>")]),t._v(" (year % "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(" === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(" && year % "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100")]),t._v(" !== "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") || year % "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("400")]),t._v(" === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" genDates = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("year, month")]),t._v(") =>")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (isLeapYear(year) && month === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(`) {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` leapYearFebruaryDates
  }

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (!isLeapYear(year) && month === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(`) {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` februaryDates
  }

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(` (isOddMonth(month)) {
    `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` oddMonthDates
  }

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` evenMonthDates
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" genColumns = "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("startYear, endYear")]),t._v(") =>")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` columns = []

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("for")]),t._v(" ("),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(` year = startYear; year < endYear; year++) {
    columns.push({
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: year,
      `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(": months.map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("month")]),t._v(") =>")]),t._v(` {
        `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` {
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: month,
          `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(": genDates(year, month).map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("date")]),t._v(" =>")]),t._v(" ({ "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: date }))
        }
      })
    })
  }

  `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(` columns
}

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(": genColumns("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1970")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2100")]),t._v(`)
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("textFormatter")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (columnIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${text}")]),t._v(" YEAR`")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (columnIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${text}")]),t._v(" MONTH`")]),t._v(`
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (columnIndex === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(") "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`"),s("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${text}")]),t._v(" DATE`")]),t._v(`
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Mapping of values")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":columns")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"columns"')]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("change")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleChange"')]),t._v(" />")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` rawColumns = [
  [
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Ember Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Storm Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Earth Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Void Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(` },
  ],
  [
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Ember Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Storm Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Earth Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Void Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(` },
  ],
  [
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Ember Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Storm Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Earth Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(` },
    { `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Void Spirit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(` },
  ]
]

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" normalizedColumns = rawColumns.map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("column")]),t._v(" =>")]),t._v(" column.map("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("option")]),t._v(" =>")]),t._v(` option.label))

`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(`: normalizedColumns
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleChange")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("_, [i1, i2, i3]")]),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` [c1, c2, c3] = rawColumns
      `),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(` ids = [c1[i1].id, c2[i2].id, c3[i3].id]
      Snackbar(ids.toString())
    }
  }  
}
`)])])])],1),s("h2",[t._v("API")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10)])},l=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Intro")]),s("p",[t._v("Provides two kinds of function and component call mode support cascading mode at the same time, can handle multilevel linkage.")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("Passing in a "),s("code",{pre:!0},[t._v("cascade")]),t._v(" attribute starts cascading. Built-in component library provides a three-level linkage between provinces and municipalities, import "),s("code",{pre:!0},[t._v("area.json")]),t._v(".")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("Picker passes in a "),s("code",{pre:!0},[t._v("textFormatter")]),t._v(" attribute to customize the text. "),s("code",{pre:!0},[t._v("textFormatter")]),t._v(" accepts two parameters. The first parameter "),s("code",{pre:!0},[t._v("text")]),t._v(" is the current text, and the second parameter "),s("code",{pre:!0},[t._v("columnIndex")]),t._v(" is the subscript of the column where the current text is located. The following is the case of year month day selection")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Props")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("columns")])]),s("td",[t._v("Column content")]),s("td",[s("em",[t._v("NormalColumn[] | CascadeColumn[] | Texts")])]),s("td",[s("code",{pre:!0},[t._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("title")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Pick it")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("text-key")])]),s("td",[t._v("The attribute key of the text")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("text")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("toolbar")])]),s("td",[t._v("Whether to display the top toolbar")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("cascade")])]),s("td",[t._v("Whether to enable cascading mode")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("text-formatter")])]),s("td",[t._v("Text formatter")]),s("td",[s("em",[t._v("(text: any, columnIndex: number) => any")])]),s("td",[s("code",{pre:!0},[t._v("text => text")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("option-height")])]),s("td",[t._v("Option height(px rem)")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("code",{pre:!0},[t._v("44")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("option-count")])]),s("td",[t._v("Number of options visible")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("code",{pre:!0},[t._v("6")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("confirm-button-text")])]),s("td",[t._v("Confirm button text")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Confirm")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("cancel-button-text")])]),s("td",[t._v("Cancel button text")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Cancel")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("confirm-button-text-color")])]),s("td",[t._v("Confirm the button text color")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("cancel-button-text-color")])]),s("td",[t._v("Cancel button text color")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Picker Options")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("columns")])]),s("td",[t._v("Column content")]),s("td",[s("em",[t._v("NormalColumn[] | CascadeColumn[] | Texts")])]),s("td",[s("code",{pre:!0},[t._v("[]")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("title")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Pick it")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("textKey")])]),s("td",[t._v("The attribute key of the text")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("text")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("toolbar")])]),s("td",[t._v("Whether to display the top toolbar")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("cascade")])]),s("td",[t._v("Whether to enable cascading mode")]),s("td",[s("em",[t._v("boolean")])]),s("td",[s("code",{pre:!0},[t._v("true")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("textFormatter")])]),s("td",[t._v("Text formatter")]),s("td",[s("em",[t._v("(text: any, columnIndex: number) => any")])]),s("td",[s("code",{pre:!0},[t._v("text => text")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("optionHeight")])]),s("td",[t._v("Option height")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("code",{pre:!0},[t._v("44")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("optionCount")])]),s("td",[t._v("Number of options visible")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("code",{pre:!0},[t._v("6")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("confirmButtonText")])]),s("td",[t._v("Confirm button text")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Confirm")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("cancelButtonText")])]),s("td",[t._v("Cancel button text")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("Cancel")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("confirmButtonTextColor")])]),s("td",[t._v("Confirm the button text color")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("cancelButtonTextColor")])]),s("td",[t._v("Cancel button text color")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onOpen")])]),s("td",[t._v("Popup open callback")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onOpened")])]),s("td",[t._v("Popup open-animation ends callback")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClose")])]),s("td",[t._v("Popup close callback")]),s("td",[s("em",[t._v("() => void")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onClosed")])]),s("td",[t._v("Close pop-up layer callback when animation ends")]),s("td",[s("em",[t._v("(texts: Texts, indexes: number[]) => void")])]),s("td",[s("code",{pre:!0},[t._v("() => void")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onChange")])]),s("td",[t._v("Pick callbacks when content changes")]),s("td",[s("em",[t._v("(texts: Texts, indexes: number[]) => void")])]),s("td",[s("code",{pre:!0},[t._v("() => void")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onConfirm")])]),s("td",[t._v("Pick callbacks when confirm")]),s("td",[s("em",[t._v("(texts: Texts, indexes: number[]) => void")])]),s("td",[s("code",{pre:!0},[t._v("() => void")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("onCancel")])]),s("td",[t._v("Pick callbacks when cancel")]),s("td",[s("em",[t._v("(texts: Texts, indexes: number[]) => void")])]),s("td",[s("code",{pre:!0},[t._v("() => void")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Picker NormalColumn")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("texts")])]),s("td",[t._v("Text array")]),s("td",[s("em",[t._v("Texts")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("initialIndex")])]),s("td",[t._v("Initialize index")]),s("td",[s("em",[t._v("number")])]),s("td",[s("code",{pre:!0},[t._v("0")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Picker CascadeColumn")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("text")])]),s("td",[t._v("Each line of text")]),s("td",[s("em",[t._v("any")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("children")])]),s("td",[t._v("children tree")]),s("td",[s("em",[t._v("CascadeColumn[]")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Methods")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Method")]),s("th",[t._v("Description")]),s("th",[t._v("Arguments")]),s("th",[t._v("Return")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("confirm")])]),s("td",[t._v("Immediately stop scrolling and trigger the "),s("code",{pre:!0},[t._v("confirm")]),t._v(" event")]),s("td",[s("code",{pre:!0},[t._v("-")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("cancel")])]),s("td",[t._v("Immediately stop scrolling and trigger the "),s("code",{pre:!0},[t._v("cancel")]),t._v(" event")]),s("td",[s("code",{pre:!0},[t._v("-")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Events")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Event")]),s("th",[t._v("Description")]),s("th",[t._v("Arguments")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("change")])]),s("td",[t._v("Triggered when the pick content changes")]),s("td",[s("code",{pre:!0},[t._v("texts: Texts")]),t._v(" Text array "),s("br"),t._v(" "),s("code",{pre:!0},[t._v("indexes: number[]")]),t._v(" picked index array")])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("cancel")])]),s("td",[t._v("Triggered when you click the cancel button")]),s("td",[s("code",{pre:!0},[t._v("texts: Texts")]),t._v(" Text array "),s("br"),t._v(" "),s("code",{pre:!0},[t._v("indexes: number[]")]),t._v(" picked index array")])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("confirm")])]),s("td",[t._v("Triggered when you click the confirm button")]),s("td",[s("code",{pre:!0},[t._v("texts: Texts")]),t._v(" Text array "),s("br"),t._v(" "),s("code",{pre:!0},[t._v("indexes: number[]")]),t._v(" picked index array")])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Slots")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Slot")]),s("th",[t._v("Description")]),s("th",[t._v("Arguments")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("cancel")])]),s("td",[t._v("cancel button content")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("title")])]),s("td",[t._v("title content")]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("confirm")])]),s("td",[t._v("confirm button content")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"card"},[s("h3",[t._v("Style Variables")]),s("p",[t._v("Here are the CSS variables used by the component, Styles can be customized using "),s("a",{attrs:{href:"#/en-US/style-provider"}},[t._v("StyleProvider")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("--picker-background")])]),s("td",[s("code",{pre:!0},[t._v("#fff")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--picker-toolbar-height")])]),s("td",[s("code",{pre:!0},[t._v("44px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--picker-confirm-button-text-color")])]),s("td",[s("code",{pre:!0},[t._v("var(--color-primary)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--picker-cancel-button-text-color")])]),s("td",[s("code",{pre:!0},[t._v("#888")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--picker-picked-border")])]),s("td",[s("code",{pre:!0},[t._v("1px solid rgba(0, 0, 0, 0.12)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--picker-title-font-size")])]),s("td",[s("code",{pre:!0},[t._v("16px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--picker-toolbar-padding")])]),s("td",[s("code",{pre:!0},[t._v("0 4px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--picker-mask-background-image")])]),s("td",[s("code",{pre:!0},[t._v("linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))")])])])])])])}];const v={components:{}},e={};var p=a(v,n,l,!1,_,null,null,null);function _(t){for(let r in e)this[r]=e[r]}var o=function(){return p.exports}();export{o as default};
