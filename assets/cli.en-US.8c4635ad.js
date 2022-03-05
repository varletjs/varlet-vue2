import{n as a}from"./index.9ef319cd.js";import"./vendor.10bd23ac.js";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"varlet-site-doc"},[e("h1",[t._v("@varlet/cli")]),t._m(0),t._m(1),e("div",{staticClass:"card"},[e("h3",[t._v("Quickstart")]),t._m(2),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"bash"}},[t._v(" Install "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("command")]),t._v(" line tools")]),t._v(`
pnpm add @varlet/cli -g
`),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"bash"}},[t._v(" Use the gen "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("command")]),t._v(" to generate the project")]),t._v(`
varlet-cli gen projectName
cd projectName
pnpm install
pnpm dev
`)])])]),e("p",[t._v("Then by simply modifying some basic information of the component library template, you can start the development of the component library")])],1),e("h2",[t._v("Advanced customization")]),e("div",{staticClass:"card"},[e("h3",[t._v("Configuration file")]),t._m(3),t._m(4),e("h4",[t._v("Module Compatible")]),t._m(5),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" dayjs "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'dayjs/esm'")]),t._v(`
`)])])]),t._m(6),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" * "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("as")]),t._v(" dayjs "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'dayjs'")]),t._v(`
`)])])]),t._m(7),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// varlet.config.js")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("module")]),t._v(`.exports = {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("moduleCompatible")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"import dayjs from 'dayjs/esm'\\n"`)]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v(`"import * as dayjs from 'dayjs'\\n"`)]),t._v(`
  }
}
`)])])]),e("h4",[t._v("SiteThemes")]),t._m(8),t._m(9),e("h4",[t._v("SiteHighlight")]),t._m(10),t._m(11),e("h4",[t._v("SiteAnalysis")]),e("p",[t._v("Statistics related to buried points")]),t._m(12),e("h4",[t._v("SitePC, SiteMobile")]),e("p",[t._v("The document structure is partly related, and the example configuration is as follows")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("module")]),t._v(`.exports = {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("defaultLanguage")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'en-US'")]),t._v(`,
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("pc")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("redirect")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'/home'")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'en-US'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'A components library'")]),t._v(`,
    },
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("header")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("darkMode")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("i18n")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("github")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://github.com/varletjs/varlet'")]),t._v(`,
    },
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("menu")]),t._v(`: [
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: {
          `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'en-US'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Develop Guide'")]),t._v(`,
        },
        `),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Sidebar menu directory")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: {
          `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'en-US'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Basic Intro'")]),t._v(`,
        },
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("doc")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'home'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Index the md document in the root directory of the project")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v(`,
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: {
          `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'en-US'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Basic Component'")]),t._v(`,
        },
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(`,
      },
      {
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(`: {
          `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'en-US'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Button'")]),t._v(`,
        },
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("doc")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'button'")]),t._v(`,
        `),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// Md document in the root directory of the index component")]),t._v(`
        `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(`,
      },
    ],
  },
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("mobile")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("redirect")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'/home'")]),t._v(`,
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'en-US'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'A components library'")]),t._v(`,
    },
    `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("header")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("darkMode")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("i18n")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("playground")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("github")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://github.com/varletjs/varlet'")]),t._v(`,
    },
  },
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Commands Intro")]),e("h4",[t._v("Start the development server")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli dev
`)])])]),e("h4",[t._v("Build documentation site")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli build
`)])])]),e("h4",[t._v("Preview documentation site")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli preview
`)])])]),e("h4",[t._v("Build component library code")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli compile
`)])])]),e("h4",[t._v("Perform all unit tests")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli test
`)])])]),e("h4",[t._v("Execute unit tests in watch mode")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli test -w
or
varlet-cli test -wa
`)])])]),e("h4",[t._v("Lint code")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli lint
`)])])]),e("h4",[t._v("Lint commit message")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli commit-lint
`)])])]),e("h4",[t._v("Generate changelog")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli changelog
`)])])]),e("h4",[t._v("Release component library")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli release
`)])])]),e("h4",[t._v("Generate a project template")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`varlet-cli gen <projectName>
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
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("git and npm")]),e("h4",[t._v("git-hook")]),t._m(15),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`{
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
`)])])]),e("p",[t._v("Mount Git Hooks")]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[t._v(`npx simple-git-hooks
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
`)])])])],1),t._m(18)])},l=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Intro")]),e("p",[t._v("The out-of-the-box "),e("code",{pre:!0},[t._v("Vue2 component library")]),t._v(" rapid prototyping tool provides a series of commands and tools to solve the problem of component library development")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Feature")]),e("ul",[e("li",[t._v("1.Out-of-the-box component library development environment")]),e("li",[t._v("2.Out-of-the-box component library compilation tool, support exporting "),e("code",{pre:!0},[t._v("esm")]),t._v(" and "),e("code",{pre:!0},[t._v("umd")]),t._v(" two module codes")]),e("li",[t._v("3.Component library document site based on configuration files, support Baidu statistics and theme customization")]),e("li",[t._v("4.Supports "),e("code",{pre:!0},[t._v("single file component (sfc)")]),t._v(" and "),e("code",{pre:!0},[t._v("tsx, jsx")]),t._v(" two styles of component library writing styles")]),e("li",[t._v("5.Code inspection tool out of the box")]),e("li",[t._v("6.Unit testing tools out of the box")]),e("li",[t._v("7.Out-of-the-box code publishing tool, publish to npm and github, and automatically generate a change log")]),e("li",[t._v("8.Support "),e("code",{pre:!0},[t._v("Typescript")])]),e("li",[t._v("9.Support "),e("code",{pre:!0},[t._v("Dark Mode")])]),e("li",[t._v("10.Based on "),e("code",{pre:!0},[t._v("pnpm")])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[e("code",{pre:!0},[t._v("@varlet/cli")]),t._v(" has built-in "),e("code",{pre:!0},[t._v("single file component (sfc)")]),t._v(" and "),e("code",{pre:!0},[t._v("tsx, jsx")]),t._v(" two styles of component library project templates, which can be directly generated by the "),e("code",{pre:!0},[t._v("gen")]),t._v(" command. To help users directly enter the development of the component itself, it is recommended to use "),e("code",{pre:!0},[t._v("pnpm")]),t._v(" as a package management tool.")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("The "),e("code",{pre:!0},[t._v("varlet.config.js")]),t._v(" in the project root directory is used to manage the specific details of the entire component library project")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),e("th",[t._v("Description")]),e("th",[t._v("Type")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("host")])]),e("td",[t._v("Development server host")]),e("td",[e("em",[t._v("number")])]),e("td",[e("code",{pre:!0},[t._v("localhost")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("port")])]),e("td",[t._v("Development server port")]),e("td",[e("em",[t._v("number")])]),e("td",[e("code",{pre:!0},[t._v("8080")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("name")])]),e("td",[t._v("Full name of the component library")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("Varlet")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("namespace")])]),e("td",[t._v("Component library namespace, Will be used as a component prefix")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("var")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("title")])]),e("td",[t._v("The title of the component library in the document")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("VARLET")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("logo")])]),e("td",[t._v("The logo of the component library in the document")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("defaultLanguage")])]),e("td",[t._v("Document default language")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("zh-CN")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("useMobile")])]),e("td",[t._v("Whether to display the right mobile phone preview")]),e("td",[e("em",[t._v("boolean")])]),e("td",[e("code",{pre:!0},[t._v("false")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("themes")])]),e("td",[t._v("Document themes")]),e("td",[e("em",[t._v("SiteThemes")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("darkThemes")])]),e("td",[t._v("Document dark mode themes")]),e("td",[e("em",[t._v("SiteThemes")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("highlight")])]),e("td",[t._v("Document code snippet style related")]),e("td",[e("em",[t._v("SiteHighlight")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("analysis")])]),e("td",[t._v("Document statistics related")]),e("td",[e("em",[t._v("SiteAnalysis")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("pc")])]),e("td",[t._v("PC-side document structure configuration")]),e("td",[e("em",[t._v("SitePC")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("mobile")])]),e("td",[t._v("Mobile document structure configuration")]),e("td",[e("em",[t._v("SiteMobile")])]),e("td",[e("code",{pre:!0},[t._v("-")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("moduleCompatible")])]),e("td",[t._v("Module compatible config")]),e("td",[e("em",[t._v("Record<string, string>")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("Some external dependencies may need to be compatible with module syntax to achieve the purpose of compiling correctly to "),e("code",{pre:!0},[t._v("commonjs")]),t._v(" and "),e("code",{pre:!0},[t._v("esmodule")]),t._v(". For example, the wording of "),e("code",{pre:!0},[t._v("esmodule")]),t._v(" of "),e("code",{pre:!0},[t._v("dayjs")]),t._v(" is")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("In order to build "),e("code",{pre:!0},[t._v("commonjs")]),t._v(", the writing method is")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("In the project, we embrace the first way of writing the "),e("code",{pre:!0},[t._v("esmodule")]),t._v(" module, and make the following configuration for adaptation")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("Theme variables are related, because the default theme variables may be modified from time to time, subject to the theme of the "),e("code",{pre:!0},[t._v("varlet")]),t._v(" official document")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("color-body")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-bar")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-sub-bar")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-text")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-sub-text")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-border")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-shadow")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-introduce-border")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-primary")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-link")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-type")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-progress")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-progress-track")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-side-bar")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-side-bar-active-background")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-app-bar")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-nav-button-hover-background")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-pc-language-active")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-pc-language-active-background")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-mobile-cell-hover")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-mobile-language-active")])])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("color-mobile-language-active-background")])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("Code snippets are highlighted, based on "),e("a",{attrs:{href:"https://highlightjs.org/"}},[t._v("highlight.js")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),e("th",[t._v("Description")]),e("th",[t._v("Type")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("style")])]),e("td",[t._v("highlight css link")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",[e("thead",[e("tr",[e("th",[t._v("Parameter")]),e("th",[t._v("Description")]),e("th",[t._v("Type")]),e("th",[t._v("Default")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("baidu")])]),e("td",[t._v("Baidu statistics script address")]),e("td",[e("em",[t._v("string")])]),e("td",[e("code",{pre:!0},[t._v("-")])])])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("To configure "),e("code",{pre:!0},[t._v("babel")]),t._v(", first specify the target browser in "),e("code",{pre:!0},[t._v("package.json")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("create "),e("code",{pre:!0},[t._v("babel.config,js")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[e("code",{pre:!0},[t._v("simple-git-hooks")]),t._v(", "),e("code",{pre:!0},[t._v("lint-staged")]),t._v(" cooperate with "),e("code",{pre:!0},[t._v("eslint")]),t._v(", "),e("code",{pre:!0},[t._v("stylelint")]),t._v(", "),e("code",{pre:!0},[t._v("varlet-cli commit-lint")]),t._v(" to check before commit, "),e("code",{pre:!0},[t._v("package.json")]),t._v(" configuration is as follows")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("create "),e("code",{pre:!0},[t._v(".prettierignore")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("create "),e("code",{pre:!0},[t._v("tsconfig.json")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card"},[e("h3",[t._v("Note before release")]),e("ul",[e("li",[t._v("1.The registry of npm must set to the official npm mirror")]),e("li",[t._v("2.The npm must execute the login command for user login")])])])}];const v={components:{}},s={};var _=a(v,n,l,!1,c,null,null,null);function c(t){for(let r in s)this[r]=s[r]}var i=function(){return _.exports}();export{i as default};
