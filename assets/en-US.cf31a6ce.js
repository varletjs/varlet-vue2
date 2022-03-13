import{n as a}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var v=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"varlet-site-doc"},[e("h1",[t._v("Uploader")]),t._m(0),e("div",{staticClass:"card"},[e("h3",[t._v("Install")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Uploader } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(Uploader)
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Basic Usage")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("after-read")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleAfterRead"')]),t._v("/>")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: []
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleAfterRead")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("file")]),t._v(")")]),t._v(` {
      `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(`.log(file)
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("File Preview")]),e("p",[t._v("By analyzing the file URL suffix name to determine the file type, support image and video preview.")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v("/>")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: [
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://www.runoob.com/try/demo_source/mov_bbb.mp4'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cover.jpg'")]),t._v(`
      }
    ]
  })
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Upload State")]),t._m(1),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("after-read")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleAfterRead"')]),t._v("/>")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: [
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("state")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'loading'")]),t._v(`
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("state")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(`
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("state")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'error'")]),t._v(`
      }
    ]
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleAfterRead")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("file")]),t._v(")")]),t._v(` {
      file.state = `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'loading'")]),t._v(`

      `),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("setTimeout")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` {
        file.state = `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(`
      }, `),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(`)
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("File Maxlength")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":maxlength")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"1"')]),t._v("/>")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("File Size Limit")]),t._m(2),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":maxsize")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"1024"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("oversize")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleOversize"')]),t._v(" />")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(`({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: []
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleOversize")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      Snackbar.warning(`),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'file size exceeds limit'")]),t._v(`)
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Upload Preprocessing")]),t._m(3),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("before-read")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleBeforeRead"')]),t._v("/>")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Snackbar } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: []
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleBeforeRead")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (file.file.size <= "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(" * "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1024")]),t._v(" * "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1024")]),t._v(`) {
        Snackbar.success(`),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'the file is less than 1M, the upload is successful'")]),t._v(`)
        `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`
      } `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(` {
        Snackbar.warning(`),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'the file is larger than 1M and cannot be uploaded'")]),t._v(`)
        `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(`
      }
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Disabled")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v("/>")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Readonly")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v("/>")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Remove Preprocessing")]),t._m(4),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("remove")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"handleBeforeRemove"')]),t._v(" />")]),t._v(`
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Dialog } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

`),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("files")]),t._v(`: [
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cover")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://varlet.gitee.io/varlet-ui/cat.jpg'")]),t._v(`,
      }
    ]
  }),
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("handleBeforeRemove")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" action = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("await")]),t._v(` Dialog({
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Delete or not?'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Cannot be withdrawn after deletion'")]),t._v(`
      })

      `),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" action === "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'confirm'")]),t._v(`
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Customize upload styles")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(">")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Upload"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(">")]),t._v(`
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Validate")]),t._m(5),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-uploader")]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":rules")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"[
    (v, u) => u.getError(v).length === 0 || 'There is a file that failed to upload'
  ]"`)]),t._v(`
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"files"')]),t._v(`
/>`)]),t._v(`
`)])])])],1),e("h2",[t._v("API")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12)])},l=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Intro")]),e("p",[t._v("It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for "),e("code",{pre:!0},[t._v("after-read")]),t._v(" events.")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("Three uploading states, "),e("code",{pre:!0},[t._v("loading")]),t._v(", "),e("code",{pre:!0},[t._v("success")]),t._v(" and "),e("code",{pre:!0},[t._v("error")]),t._v(", are provided, and tool functions are provided to quickly obtain files with corresponding states.")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("If the limit is exceeded, the file will be blocked. You can get the file by listening for the "),e("code",{pre:!0},[t._v("oversize")]),t._v(" event.")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("Operate on a file by registering a "),e("code",{pre:!0},[t._v("before-read")]),t._v(" event that returns a false value to prevent the file from being read.")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("Before deleting the file, the "),e("code",{pre:!0},[t._v("before-remove")]),t._v(" event is triggered, and a falsy value is returned to prevent the delete operation.")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("The values are validated by passing in an array of validator, If the validator returns "),e("code",{pre:!0},[t._v("true")]),t._v(", the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Props")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Description")]),e("th",[t._v("Type")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("v-model")])]),e("td",[t._v("File list")]),e("td",[e("em",[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("accept")])]),e("td",[t._v("Accepted file type, consistent with the native attribute")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("image/*")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("capture")])]),e("td",[t._v("Get the file, the same as the native property")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("multiple")])]),e("td",[t._v("Whether to select multiple files")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("readonly")])]),e("td",[t._v("Whether the readonly")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("disabled")])]),e("td",[t._v("Whether the disabled")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("removable")])]),e("td",[t._v("Whether the removable")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("maxlength")])]),e("td",[t._v("Maximum number of files")]),e("td",[e("em",[t._v("string | number")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("maxsize")])]),e("td",[t._v("Maximum file size")]),e("td",[e("em",[t._v("string | number")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("previewed")])]),e("td",[t._v("Whether to allow preview")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("ripple")])]),e("td",[t._v("Whether to open ripple")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("true")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("validate-trigger")])]),e("td",[t._v("Timing to trigger validation\uFF0C The optional value is "),e("code",{pre:!0},[t._v("onChange")]),t._v(" "),e("code",{pre:!0},[t._v("onRemove")])]),e("td",[e("em",[t._v("ValidateTriggers[]")])]),e("td",[e("code",{pre:!0},[t._v("['onChange', 'onRemove']")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("rules")])]),e("td",[t._v("The validation rules\uFF0CReturns "),e("code",{pre:!0},[t._v("true")]),t._v(" to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts")]),e("td",[e("em",[t._v("Array<(v: VarFile, u: VarFileUtils) => any>")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("VarFile")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Description")]),e("th",[t._v("Type")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("file")])]),e("td",[t._v("Native file")]),e("td",[e("em",[t._v("File")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("name")])]),e("td",[t._v("File name")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("url")])]),e("td",[t._v("File url")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("cover")])]),e("td",[t._v("File cover image")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("fit")])]),e("td",[t._v("Cover image fill mode, Optional value is "),e("code",{pre:!0},[t._v("fill")]),t._v(" "),e("code",{pre:!0},[t._v("contain")]),t._v(" "),e("code",{pre:!0},[t._v("cover")]),t._v(" "),e("code",{pre:!0},[t._v("none")]),t._v(" "),e("code",{pre:!0},[t._v("scale-down")])]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("state")])]),e("td",[t._v("File upload state, Optional value is "),e("code",{pre:!0},[t._v("loading")]),t._v(" "),e("code",{pre:!0},[t._v("success")]),t._v(" "),e("code",{pre:!0},[t._v("error")])]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("VarFileUtils")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Method")]),e("th",[t._v("Description")]),e("th",[t._v("Arguments")]),e("th",[t._v("Return")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("getLoading")])]),e("td",[t._v("Gets a collection of files for "),e("code",{pre:!0},[t._v("state")]),t._v(" is "),e("code",{pre:!0},[t._v("loading")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("getSuccess")])]),e("td",[t._v("Gets a collection of files for "),e("code",{pre:!0},[t._v("state")]),t._v(" is "),e("code",{pre:!0},[t._v("success")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("getError")])]),e("td",[t._v("Gets a collection of files for "),e("code",{pre:!0},[t._v("state")]),t._v(" is "),e("code",{pre:!0},[t._v("error")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Methods")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Method")]),e("th",[t._v("Description")]),e("th",[t._v("Arguments")]),e("th",[t._v("Return")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("getLoading")])]),e("td",[t._v("Gets a collection of files for "),e("code",{pre:!0},[t._v("state")]),t._v(" is "),e("code",{pre:!0},[t._v("loading")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("getSuccess")])]),e("td",[t._v("Gets a collection of files for "),e("code",{pre:!0},[t._v("state")]),t._v(" is "),e("code",{pre:!0},[t._v("success")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("getError")])]),e("td",[t._v("Gets a collection of files for "),e("code",{pre:!0},[t._v("state")]),t._v(" is "),e("code",{pre:!0},[t._v("error")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])]),e("td",[e("code",{pre:!0},[t._v("VarFile[]")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("validate")])]),e("td",[t._v("Trigger validate")]),e("td",[e("code",{pre:!0},[t._v("-")])]),e("td",[e("code",{pre:!0},[t._v("valid: Promise<boolean>")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("resetValidation")])]),e("td",[t._v("Clearing validate messages")]),e("td",[e("code",{pre:!0},[t._v("-")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("reset")])]),e("td",[t._v("Clear the value of the binding(set to "),e("code",{pre:!0},[t._v("[]")]),t._v(")and validate messages")]),e("td",[e("code",{pre:!0},[t._v("-")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Events")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Event")]),e("th",[t._v("Description")]),e("th",[t._v("Arguments")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("before-read")])]),e("td",[t._v("Trigger returns a false value before a file is read to prevent the file from being read(support promise)")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("after-read")])]),e("td",[t._v("Triggered after the file is read")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("oversize")])]),e("td",[t._v("Triggered when the file size limit is exceeded")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("before-remove")])]),e("td",[t._v("Triggered before file deletion, return false value to prevent file deletion (support promise)")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("remove")])]),e("td",[t._v("Triggered when deleting a file. There is a true value to prevent deleting a file (support promise)")]),e("td",[e("code",{pre:!0},[t._v("file: VarFile")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Slots")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Slot")]),e("th",[t._v("Description")]),e("th",[t._v("Arguments")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("default")])]),e("td",[t._v("Upload action content")]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Style Variables")]),e("p",[t._v("Here are the CSS variables used by the component, Styles can be customized using "),e("a",{attrs:{href:"#/en-US/style-provider"}},[t._v("StyleProvider")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-action-background")])]),e("td",[e("code",{pre:!0},[t._v("#f7f8fa")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-action-icon-color")])]),e("td",[e("code",{pre:!0},[t._v("#888")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-action-icon-size")])]),e("td",[e("code",{pre:!0},[t._v("24px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-action-margin")])]),e("td",[e("code",{pre:!0},[t._v("0 10px 10px 0")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-size")])]),e("td",[e("code",{pre:!0},[t._v("80px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-margin")])]),e("td",[e("code",{pre:!0},[t._v("0 10px 10px 0")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-name-background")])]),e("td",[e("code",{pre:!0},[t._v("#f7f8fa")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-name-color")])]),e("td",[e("code",{pre:!0},[t._v("#888")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-name-font-size")])]),e("td",[e("code",{pre:!0},[t._v("12px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-name-padding")])]),e("td",[e("code",{pre:!0},[t._v("10px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-text-align")])]),e("td",[e("code",{pre:!0},[t._v("center")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-close-background")])]),e("td",[e("code",{pre:!0},[t._v("rgba(0, 0, 0, 0.3)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-close-size")])]),e("td",[e("code",{pre:!0},[t._v("24px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-close-icon-font-size")])]),e("td",[e("code",{pre:!0},[t._v("14px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-close-icon-color")])]),e("td",[e("code",{pre:!0},[t._v("#fff")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-cover-fit")])]),e("td",[e("code",{pre:!0},[t._v("cover")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-cover-background")])]),e("td",[e("code",{pre:!0},[t._v("#f7f8fa")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-preview-video-width")])]),e("td",[e("code",{pre:!0},[t._v("100vw")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-preview-video-height")])]),e("td",[e("code",{pre:!0},[t._v("100vw")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-indicator-height")])]),e("td",[e("code",{pre:!0},[t._v("4px")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-indicator-normal-color")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-disabled)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-indicator-success-color")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-success)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-file-indicator-error-color")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-danger)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-disabled-color")])]),e("td",[e("code",{pre:!0},[t._v("#ddd")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-disabled-text-color")])]),e("td",[e("code",{pre:!0},[t._v("var(--color-text-disabled)")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("--uploader-loading-background")])]),e("td",[e("code",{pre:!0},[t._v("linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))")])])])])])])}];const p={components:{}},s={};var _=a(p,v,l,!1,n,null,null,null);function n(t){for(let r in s)this[r]=s[r]}var o=function(){return _.exports}();export{o as default};