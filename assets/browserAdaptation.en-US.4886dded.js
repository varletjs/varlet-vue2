import{n as a}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"varlet-site-doc"},[e("h1",[t._v("Browser Adaptation")]),t._m(0),e("div",{staticClass:"card"},[e("h3",[t._v("Mobile Adaptation")]),t._m(1),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"bash"}},[t._v(" npm")]),t._v(`
npm i postcss-px-to-viewport -D
`),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v(`
#`)]),e("span",{pre:!0,attrs:{class:"bash"}},[t._v(" yarn")]),t._v(`
yarn add postcss-px-to-viewport -D
`),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v(`
#`)]),e("span",{pre:!0,attrs:{class:"bash"}},[t._v(" pnpm")]),t._v(`
pnpm add postcss-px-to-viewport -D
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// postcss.config.js")]),t._v(`
`),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("module")]),t._v(`.exports = {
  `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("plugins")]),t._v(`: {
    `),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'postcss-px-to-viewport'")]),t._v(`: {
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("viewportWidth")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("375")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("unitPrecision")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("6")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("unitToConvert")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'px'")]),t._v(`,
      `),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("propList")]),t._v(": ["),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'*'")]),t._v(`],
    }
  }
}
`)])])])],1),e("div",{staticClass:"card"},[e("h3",[t._v("Desktop Adaptation")]),t._m(2),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"bash"}},[t._v(" npm")]),t._v(`
npm i @varlet/touch-emulator
`),e("span",{pre:!0,attrs:{class:"hljs-meta"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"bash"}},[t._v(" yarn")]),t._v(`
yarn add @varlet/touch-emulator
`)])])]),e("var-site-code-example",[e("pre",{staticClass:"hljs"},[e("code",{pre:!0},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet/touch-emulator'")]),t._v(`
`)])])])],1)])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card"},[e("h3",[t._v("Intro")]),e("p",[t._v("The component library provides mobile and desktop adaptations, scheme "),e("code",{pre:!0},[t._v("varlet-touch-emulator")]),t._v(" is used for mobile terminal adaptation, scheme "),e("code",{pre:!0},[t._v("varlet-touch-emulator")]),t._v(" is used for mobile terminal adaptation.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The component library design is based on the "),e("code",{pre:!0},[t._v("375px")]),t._v(" width design draft. It is recommended to use PostCSS plugin to convert "),e("code",{pre:!0},[t._v("px")]),t._v(" units into "),e("code",{pre:!0},[t._v("vw")]),t._v(" units to achieve mobile terminal adaptation. Create "),e("code",{pre:!0},[t._v("postcss.config.js")]),t._v(" under the "),e("code",{pre:!0},[t._v("Webpack/Vite")]),t._v(" project root path And do the following configuration "),e("code",{pre:!0},[t._v("375px -> 100vw")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Because component library interaction events are developed using "),e("code",{pre:!0},[t._v("touch")]),t._v(" events, "),e("code",{pre:!0},[t._v("mouse")]),t._v(" events on the desktop side are not supported. It is recommended to use "),e("code",{pre:!0},[t._v("@varlet/touch-emulator")]),t._v(" to set "),e("code",{pre:!0},[t._v("touch -> mouse")]),t._v(" for desktop adaptation.")])}];const p={components:{}},r={};var v=a(p,n,o,!1,c,null,null,null);function c(t){for(let s in r)this[s]=r[s]}var i=function(){return v.exports}();export{i as default};
