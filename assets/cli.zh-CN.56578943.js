import{n as a}from"./index.9ef319cd.js";import"./vendor.10bd23ac.js";var v=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"varlet-site-doc"},[e("h1",[t._v("@varlet/cli")]),t._m(0),t._m(1),e("div",{staticClass:"card"},[e("h3",[t._v("\u5FEB\u901F\u5F00\u59CB")]),t._m(2),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"bash"}},[t._v(" \u5B89\u88C5\u547D\u4EE4\u884C\u5DE5\u5177")]),t._v(`
pnpm add @varlet/cli -g
`),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"bash"}},[t._v(" \u4F7F\u7528 gen \u547D\u4EE4\u751F\u6210\u9879\u76EE")]),t._v(`
varlet-cli gen \u9879\u76EE\u540D
cd \u9879\u76EE\u540D
pnpm install
pnpm dev
`)])])]),e("p",[t._v("\u7136\u540E\u901A\u8FC7\u7B80\u5355\u4FEE\u6539\u4E00\u4E9B\u7EC4\u4EF6\u5E93\u6A21\u677F\u7684\u57FA\u7840\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u7EC4\u4EF6\u5E93\u7684\u5F00\u53D1\u4E86")])],1),e("h2",[t._v("\u9AD8\u7EA7\u5B9A\u5236")]),e("div",{staticClass:"card"},[e("h3",[t._v("\u914D\u7F6E\u6587\u4EF6")]),t._m(3),t._m(4),e("h4",[t._v("\u6A21\u5757\u9002\u914D\u5BF9\u8C61")]),t._m(5),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" dayjs "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'dayjs/esm'")]),t._v(`
`)])])]),t._m(6),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" * "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("as")]),t._v(" dayjs "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'dayjs'")]),t._v(`
`)])])]),t._m(7),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// varlet.config.js")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("module")]),t._v(`.exports = {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("moduleCompatible")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"import dayjs from 'dayjs/esm'\\n"`)]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"import * as dayjs from 'dayjs'\\n"`)]),t._v(`
  }
}
`)])])]),e("h4",[t._v("SiteThemes")]),t._m(8),t._m(9),e("h4",[t._v("SiteHighlight")]),t._m(10),t._m(11),e("h4",[t._v("SiteAnalysis")]),e("p",[t._v("\u7EDF\u8BA1\u57CB\u70B9\u76F8\u5173")]),t._m(12),e("h4",[t._v("SitePC, SiteMobile")]),e("p",[t._v("\u6587\u6863\u7ED3\u6784\u90E8\u5206\u76F8\u5173\uFF0C\u793A\u4F8B\u914D\u7F6E\u5982\u4E0B")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("module")]),t._v(`.exports = {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("pc")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("redirect")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'/home'")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'zh-CN'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u4E00\u4E2A\u7EC4\u4EF6\u5E93'")]),t._v(`,
    },
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("header")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("darkMode")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("i18n")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("github")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://github.com/varletjs/varlet'")]),t._v(`,
    },
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("menu")]),t._v(`: [
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: {
          `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'zh-CN'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u5F00\u53D1\u6307\u5357'")]),t._v(`,
        },
        `),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// \u4FA7\u8FB9\u680F\u83DC\u5355\u76EE\u5F55")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: {
          `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'zh-CN'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u57FA\u672C\u4ECB\u7ECD'")]),t._v(`,
        },
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("doc")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'home'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// \u7D22\u5F15\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684md\u6587\u6863")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(`,
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: {
          `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'zh-CN'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u57FA\u7840\u7EC4\u4EF6'")]),t._v(`,
        },
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: {
          `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'zh-CN'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Button \u6309\u94AE'")]),t._v(`,
        },
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("doc")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'button'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// \u7D22\u5F15\u7EC4\u4EF6\u6839\u76EE\u5F55\u4E0B\u7684md\u6587\u6863")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(`,
      },
    ],
  },
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("mobile")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("redirect")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'/home'")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'zh-CN'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'\u4E00\u4E2A\u7EC4\u4EF6\u5E93'")]),t._v(`,
    },
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("header")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("darkMode")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("i18n")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("playground")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("github")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://github.com/varletjs/varlet'")]),t._v(`,
    },
  },
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("\u547D\u4EE4\u76F8\u5173")]),e("h4",[t._v("\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli dev
`)])])]),e("h4",[t._v("\u6784\u5EFA\u6587\u6863\u7AD9\u70B9")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli build
`)])])]),e("h4",[t._v("\u9884\u89C8\u6587\u6863\u7AD9\u70B9")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli preview
`)])])]),e("h4",[t._v("\u6784\u5EFA\u7EC4\u4EF6\u5E93\u4EE3\u7801")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli compile
`)])])]),e("h4",[t._v("\u6267\u884C\u6240\u6709\u7684\u5355\u5143\u6D4B\u8BD5")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli test
`)])])]),e("h4",[t._v("\u4EE5 watch \u6A21\u5F0F\u6267\u884C\u5355\u5143\u6D4B\u8BD5")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli test -w
or
varlet-cli test -wa
`)])])]),e("h4",[t._v("\u68C0\u67E5\u4EE3\u7801")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli lint
`)])])]),e("h4",[t._v("\u6821\u9A8C\u63D0\u4EA4\u4FE1\u606F")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli commit-lint
`)])])]),e("h4",[t._v("\u751F\u6210\u66F4\u65B0\u65E5\u5FD7")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli changelog
`)])])]),e("h4",[t._v("\u53D1\u5E03\u7EC4\u4EF6\u5E93")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli release
`)])])]),e("h4",[t._v("\u751F\u6210\u4E00\u4E2A\u9879\u76EE\u6A21\u677F")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli gen <projectName>
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("babel")]),t._m(13),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`{
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"browserslist"')]),t._v(`: [
    `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Chrome >= 51"')]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"iOS >= 10"')]),t._v(`
  ]
}
`)])])]),t._m(14),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// babel.config.js")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("module")]),t._v(`.exports = {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("presets")]),t._v(`: [
    [
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet/cli/preset'")]),t._v(`,
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("loose")]),t._v(": "),e("span",[t._v("process.env")]),t._v(".NODE_ENV === "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'compile'")]),t._v(`,
      },
    ],
  ],
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("git \u548C npm")]),e("h4",[t._v("git-hook")]),t._m(15),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`{
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"simple-git-hooks"')]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"pre-commit"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"pnpm exec lint-staged --allow-empty --concurrent false"')]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"commit-msg"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"npx --no-install varlet-cli commit-lint $1"')]),t._v(`
  },
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"lint-staged"')]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"*.{ts,tsx,js,vue,less}"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"prettier --write"')]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"*.{ts,tsx,js,vue}"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"eslint --fix"')]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"*.{vue,css,less}"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"stylelint --fix"')]),t._v(`
  },
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"eslintConfig"')]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"root"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"ignorePatterns"')]),t._v(`: [
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"es/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"umd/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"site/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"public/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"src/*/__tests__/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('".varlet/**"')]),t._v(`
    ],
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"extends"')]),t._v(`: [
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"@varlet"')]),t._v(`
    ]
  },
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"stylelint"')]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"extends"')]),t._v(`: [
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"@varlet/stylelint-config"')]),t._v(`
    ],
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"ignoreFiles"')]),t._v(`: [
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"es/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"umd/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"site/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"coverage/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"public/**"')]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"highlight/**"')]),t._v(`
    ]
  }
}
`)])])]),e("p",[t._v("\u6302\u8F7D\u94A9\u5B50")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`npx simple-git-hooks
`)])])]),t._m(16),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`// .prettierignore
coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("typescript")]),t._m(17),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`{
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"compilerOptions"')]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"strict"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"downlevelIteration"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"declaration"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"skipLibCheck"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"esModuleInterop"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"allowJs"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"lib"')]),t._v(": ["),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"esnext"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"dom"')]),t._v(`],
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"allowSyntheticDefaultImports"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v('"jsx"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"preserve"')]),t._v(`
  }
}
`)])])])],1),t._m(18)])},_=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("\u4ECB\u7ECD")]),e("p",[t._v("\u5F00\u7BB1\u5373\u7528\u7684 "),e("code",{pre:!0},[t._v("Vue2\u7EC4\u4EF6\u5E93")]),t._v(" \u5FEB\u901F\u6210\u578B\u5DE5\u5177\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u547D\u4EE4\u548C\u5DE5\u5177\u53BB\u89E3\u51B3\u7EC4\u4EF6\u5E93\u5F00\u53D1\u4E0A\u7684\u95EE\u9898")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("\u7279\u6027")]),e("ul",[e("li",[t._v("1.\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u73AF\u5883")]),e("li",[t._v("2.\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u7F16\u8BD1\u5DE5\u5177\uFF0C\u652F\u6301\u5BFC\u51FA "),e("code",{pre:!0},[t._v("esm")]),t._v(" \u548C "),e("code",{pre:!0},[t._v("umd")]),t._v(" \u4E24\u79CD\u6A21\u5757\u4EE3\u7801")]),e("li",[t._v("3.\u57FA\u4E8E\u914D\u7F6E\u6587\u4EF6\u7684\u7EC4\u4EF6\u5E93\u6587\u6863\u7AD9\u70B9\uFF0C\u652F\u6301\u767E\u5EA6\u7EDF\u8BA1\u548C\u4E3B\u9898\u5B9A\u5236")]),e("li",[t._v("4.\u652F\u6301 "),e("code",{pre:!0},[t._v("\u5355\u6587\u4EF6\u7EC4\u4EF6(sfc)")]),t._v(" \u548C "),e("code",{pre:!0},[t._v("tsx\uFF0Cjsx")]),t._v(" \u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u7F16\u5199\u98CE\u683C")]),e("li",[t._v("5.\u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177")]),e("li",[t._v("6.\u5F00\u7BB1\u5373\u7528\u7684\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177")]),e("li",[t._v("7.\u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u53D1\u5E03\u5DE5\u5177,\u53D1\u5E03\u5230 npm \u548C github, \u5E76\u81EA\u52A8\u751F\u6210\u66F4\u65B0\u65E5\u5FD7")]),e("li",[t._v("8.\u652F\u6301 "),e("code",{pre:!0},[t._v("Typescript")])]),e("li",[t._v("9.\u652F\u6301 "),e("code",{pre:!0},[t._v("\u6697\u9ED1\u6A21\u5F0F")])]),e("li",[t._v("10.\u57FA\u4E8E "),e("code",{pre:!0},[t._v("pnpm")])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[e("code",{pre:!0},[t._v("@varlet/cli")]),t._v(" \u5185\u7F6E\u4E86 "),e("code",{pre:!0},[t._v("\u5355\u6587\u4EF6\u7EC4\u4EF6(sfc)")]),t._v(" \u548C "),e("code",{pre:!0},[t._v("tsx\uFF0Cjsx")]),t._v(" \u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u9879\u76EE\u6A21\u677F\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),e("code",{pre:!0},[t._v("gen")]),t._v(" \u547D\u4EE4\u76F4\u63A5\u751F\u6210\u3002 \u5E2E\u52A9\u7528\u6237\u76F4\u63A5\u8FDB\u5165\u7EC4\u4EF6\u672C\u8EAB\u7684\u5F00\u53D1\uFF0C\u63A8\u8350\u4F7F\u7528 "),e("code",{pre:!0},[t._v("pnpm")]),t._v(" \u4F5C\u4E3A\u5305\u7BA1\u7406\u5DE5\u5177\u3002")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 "),e("code",{pre:!0},[t._v("varlet.config.js")]),t._v(" \u7528\u6765\u7BA1\u7406\u6574\u4E2A\u7EC4\u4EF6\u5E93\u9879\u76EE\u7684\u5177\u4F53\u7EC6\u8282")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",[e("thead",[e("tr",[e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u7C7B\u578B")]),e("th",[t._v("\u9ED8\u8BA4\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("host")])]),e("td",[t._v("\u5F00\u53D1\u670D\u52A1\u5668\u4E3B\u673A")]),e("td",[e("em",[t._v("number")])]),e("td",[e("code",{pre:!0},[t._v("localhost")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("port")])]),e("td",[t._v("\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3")]),e("td",[e("em",[t._v("number")])]),e("td",[e("code",{pre:!0},[t._v("8080")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("name")])]),e("td",[t._v("\u7EC4\u4EF6\u5E93\u5168\u540D")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("Varlet")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("namespace")])]),e("td",[t._v("\u7EC4\u4EF6\u5E93\u547D\u540D\u7A7A\u95F4, \u4F1A\u4F5C\u4E3A\u7EC4\u4EF6\u524D\u7F00")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("var")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("title")])]),e("td",[t._v("\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684\u6807\u9898")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("VARLET")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("logo")])]),e("td",[t._v("\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684logo")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("defaultLanguage")])]),e("td",[t._v("\u6587\u6863\u9ED8\u8BA4\u8BED\u8A00")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("zh-CN")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("useMobile")])]),e("td",[t._v("\u662F\u5426\u663E\u793A\u53F3\u4FA7\u624B\u673A\u9884\u89C8")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("themes")])]),e("td",[t._v("\u6587\u6863\u4E3B\u9898")]),e("td",[e("em",[t._v("SiteThemes")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("darkThemes")])]),e("td",[t._v("\u6697\u9ED1\u6A21\u5F0F\u6587\u6863\u4E3B\u9898")]),e("td",[e("em",[t._v("SiteThemes")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("highlight")])]),e("td",[t._v("\u6587\u6863\u4EE3\u7801\u7247\u6BB5\u6837\u5F0F\u76F8\u5173")]),e("td",[e("em",[t._v("SiteHighlight")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("analysis")])]),e("td",[t._v("\u6587\u6863\u7EDF\u8BA1\u76F8\u5173")]),e("td",[e("em",[t._v("SiteAnalysis")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("pc")])]),e("td",[t._v("pc\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E")]),e("td",[e("em",[t._v("SitePC")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("mobile")])]),e("td",[t._v("mobile\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E")]),e("td",[e("em",[t._v("SiteMobile")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("moduleCompatible")])]),e("td",[t._v("\u6A21\u5757\u517C\u5BB9\u914D\u7F6E")]),e("td",[e("em",[t._v("Record<string, string>")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u4E00\u4E9B\u5916\u90E8\u4F9D\u8D56\u53EF\u80FD\u9700\u8981\u8FDB\u884C\u6A21\u5757\u8BED\u6CD5\u7684\u9002\u914D\uFF0C\u4EE5\u8FBE\u5230\u53EF\u4EE5\u6B63\u786E\u7F16\u8BD1\u5230 "),e("code",{pre:!0},[t._v("commonjs")]),t._v(" \u548C "),e("code",{pre:!0},[t._v("esmodule")]),t._v(" \u7684\u76EE\u7684\uFF0C\u4F8B\u5982 "),e("code",{pre:!0},[t._v("dayjs")]),t._v(" \u7684 "),e("code",{pre:!0},[t._v("esmodule")]),t._v(" \u5199\u6CD5\u662F")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u800C\u4E3A\u4E86\u6784\u5EFA "),e("code",{pre:!0},[t._v("commonjs")]),t._v(" \u65F6\u7684\u5199\u6CD5\u662F")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u5728\u9879\u76EE\u4E2D\u6211\u4EEC\u62E5\u62B1 "),e("code",{pre:!0},[t._v("esmodule")]),t._v(" \u6A21\u5757\u4F7F\u7528\u7B2C\u4E00\u79CD\u5199\u6CD5\uFF0C\u5E76\u505A\u5982\u4E0B\u914D\u7F6E\u8FDB\u884C\u9002\u914D")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u4E3B\u9898\u53D8\u91CF\u76F8\u5173\uFF0C\u7531\u4E8E\u9ED8\u8BA4\u7684\u4E3B\u9898\u53D8\u91CF\u53EF\u80FD\u65F6\u5E38\u4FEE\u6539\uFF0C\u4EE5 "),e("code",{pre:!0},[t._v("varlet")]),t._v(" \u5B98\u65B9\u6587\u6863\u7684\u4E3B\u9898\u4E3A\u51C6")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",[e("thead",[e("tr",[e("th",[t._v("\u53C2\u6570")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("color-body")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-bar")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-sub-bar")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-text")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-sub-text")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-border")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-shadow")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-introduce-border")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-primary")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-link")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-type")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-progress")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-progress-track")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-side-bar")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-side-bar-active-background")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-app-bar")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-nav-button-hover-background")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-pc-language-active")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-pc-language-active-background")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-mobile-cell-hover")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-mobile-language-active")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-mobile-language-active-background")])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u4EE3\u7801\u7247\u6BB5\u9AD8\u4EAE\uFF0C\u57FA\u4E8E"),e("a",{attrs:{href:"https://highlightjs.org/"}},[t._v("highlight.js")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",[e("thead",[e("tr",[e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u7C7B\u578B")]),e("th",[t._v("\u9ED8\u8BA4\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("style")])]),e("td",[t._v("highlight\u7684css\u5730\u5740")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",[e("thead",[e("tr",[e("th",[t._v("\u53C2\u6570")]),e("th",[t._v("\u8BF4\u660E")]),e("th",[t._v("\u7C7B\u578B")]),e("th",[t._v("\u9ED8\u8BA4\u503C")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("baidu")])]),e("td",[t._v("\u767E\u5EA6\u7EDF\u8BA1\u811A\u672C\u5730\u5740")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u5BF9 "),e("code",{pre:!0},[t._v("babel")]),t._v(" \u8FDB\u884C\u914D\u7F6E\uFF0C\u9996\u5148\u5728 "),e("code",{pre:!0},[t._v("package.json")]),t._v(" \u4E2D\u6307\u5B9A\u76EE\u6807\u6D4F\u89C8\u5668")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u521B\u5EFA "),e("code",{pre:!0},[t._v("babel.config,js")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[e("code",{pre:!0},[t._v("simple-git-hooks")]),t._v("\uFF0C"),e("code",{pre:!0},[t._v("lint-staged")]),t._v(" \u914D\u5408 "),e("code",{pre:!0},[t._v("eslint")]),t._v("\uFF0C"),e("code",{pre:!0},[t._v("stylelint")]),t._v("\uFF0C"),e("code",{pre:!0},[t._v("varlet-cli commit-lint")]),t._v(" \u505Acommit\u524D\u7684\u68C0\u67E5\uFF0C"),e("code",{pre:!0},[t._v("package.json")]),t._v(" \u914D\u7F6E\u5982\u4E0B")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u521B\u5EFA "),e("code",{pre:!0},[t._v(".prettierignore")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("\u521B\u5EFA "),e("code",{pre:!0},[t._v("tsconfig.json")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("\u53D1\u5E03\u524D\u6CE8\u610F")]),e("ul",[e("li",[t._v("1."),e("code",{pre:!0},[t._v("npm")]),t._v(" \u7684\u4ED3\u5E93\u6E90\u5FC5\u987B\u6307\u5411 "),e("code",{pre:!0},[t._v("npm")]),t._v(" \u5B98\u65B9\u955C\u50CF")]),e("li",[t._v("2.\u6267\u884C "),e("code",{pre:!0},[t._v("npm login")]),t._v(" \u8FDB\u884C\u767B\u5F55")])])])}];const l={components:{}},s={};var n=a(l,v,_,!1,p,null,null,null);function p(t){for(let r in s)this[r]=s[r]}var o=function(){return n.exports}();export{o as default};
