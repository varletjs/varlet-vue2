import{S as e}from"./index.a0725ff8.js";import{B as i}from"./index.0594ca58.js";import{A as u}from"./AppType.7c373718.js";import{d as p}from"./index.9b1139e6.js";import{u as l,a as r,_ as k,b as v,c as _}from"./en-US.36f69c14.js";import{w as h,a as m}from"./utils.3b864b4e.js";import{n as d}from"./index.c2619ef7.js";import"./vendor.7d1cc22d.js";import"./index.1b0b81cd.js";import"./shared.f8da68a0.js";import"./create.11eee831.js";import"./index.b17215aa.js";import"./elements.9c883ade.js";import"./zIndex.3167d10e.js";import"./index.bab5582f.js";import"./lock.ac20a0f2.js";import"./components.a1090420.js";import"./Teleport.74ff85c7.js";import"./index.ae3982d6.js";var b={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",type:"Snackbar \u7C7B\u578B",success:"\u6210\u529F",info:"\u6D88\u606F",warning:"\u8B66\u544A",error:"\u9519\u8BEF",loading:"\u52A0\u8F7D",text:"\u8FD9\u662F\u4E00\u4E2A\u6D88\u606F\u6761\uFF01\uFF01",loaded:"\u52A0\u8F7D\u6210\u529F\uFF01\uFF01",wait:"\u7B49\u5F85\u4E2D...",close:"\u5173\u95ED",basicUsage:"\u57FA\u672C\u4F7F\u7528",multiLine:"\u5782\u76F4\u6392\u5217",bottomDisplay:"\u5E95\u90E8\u663E\u793A",hiddenTime:"\u663E\u793A\u65F6\u957F",forbidClick:"\u7981\u6B62\u7A7F\u900F\u70B9\u51FB"},f={functionCall:"Function Call",componentCall:"Component Call",type:"Snackbar Type",success:"Success",warning:"Warning",info:"Info",error:"Error",loading:"Loading",text:"Hello, I'm a snackbar",loaded:"Loaded",wait:"waiting...",close:"Close",basicUsage:"Basic Usage",multiLine:"Multi-Line",bottomDisplay:"Bottom Display",hiddenTime:"Display Duration",forbidClick:"Forbid Click"};const{add:c,use:w,pack:y,packs:K,merge:O}=l(),C=t=>{_(t),w(t)};r("zh-CN",k);r("en-US",v);c("zh-CN",b);c("en-US",f);var F=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"var-snackbar-example"},[a("div",{staticClass:"snackbar-demo"},[a("app-type",[t._v(t._s(t.pack.componentCall))]),a("var-button",{attrs:{type:"primary",block:""},on:{click:function(o){return t.changeValue("show1")}}},[t._v(t._s(t.pack.basicUsage))]),a("var-button",{attrs:{type:"primary",block:""},on:{click:function(o){return t.changeValue("show3")}}},[t._v(t._s(t.pack.multiLine))]),a("var-button",{attrs:{type:"primary",block:""},on:{click:function(o){return t.changeValue("show2")}}},[t._v(t._s(t.pack.bottomDisplay))]),a("var-button",{attrs:{type:"primary",block:""},on:{click:function(o){return t.changeValue("show4")}}},[t._v(t._s(t.pack.hiddenTime))]),a("var-button",{attrs:{type:"primary",block:""},on:{click:function(o){return t.changeValue("show9")}}},[t._v(t._s(t.pack.forbidClick))])],1),a("div",{staticClass:"snackbar-demo"},[a("app-type",[t._v(t._s(t.pack.functionCall))]),a("var-button",{attrs:{type:"warning",block:""},on:{click:function(o){return t.createSnackbar()}}},[t._v(t._s(t.pack.basicUsage))]),a("var-button",{attrs:{type:"warning",block:""},on:{click:function(o){return t.createSnackbar("time")}}},[t._v(t._s(t.pack.hiddenTime))]),a("var-button",{attrs:{type:"warning",block:""},on:{click:function(o){return t.createSnackbar("position")}}},[t._v(t._s(t.pack.bottomDisplay))])],1),a("div",{staticClass:"snackbar-demo"},[a("app-type",[t._v(t._s(t.pack.type))]),a("div",{staticClass:"snackbar-demo__type-block"},[a("var-button",{attrs:{type:"success",block:""},on:{click:function(o){return t.create("success")}}},[t._v(t._s(t.pack.success))]),a("var-button",{attrs:{type:"warning",block:""},on:{click:function(o){return t.create("warning")}}},[t._v(t._s(t.pack.warning))]),a("var-button",{attrs:{type:"info",block:""},on:{click:function(o){return t.create("info")}}},[t._v(t._s(t.pack.info))]),a("var-button",{attrs:{type:"danger",block:""},on:{click:function(o){return t.create("error")}}},[t._v(t._s(t.pack.error))]),a("var-button",{attrs:{type:"primary",block:""},on:{click:function(o){return t.create("loading")}}},[t._v(t._s(t.pack.loading))])],1)],1),a("div",{staticClass:"snackbar-demo"},[a("var-snackbar",{attrs:{show:t.shows.show1},on:{"update:show":function(o){return t.$set(t.shows,"show1",o)}}},[t._v(" "+t._s(t.pack.text)+" ")]),a("var-snackbar",{attrs:{show:t.shows.show2,position:"bottom"},on:{"update:show":function(o){return t.$set(t.shows,"show2",o)}},scopedSlots:t._u([{key:"action",fn:function(){return[a("var-button",{attrs:{type:"primary"},on:{click:function(o){t.shows.show2=!1}}},[t._v(t._s(t.pack.close))])]},proxy:!0}])},[t._v(" "+t._s(t.pack.text)+" ")]),a("var-snackbar",{attrs:{show:t.shows.show3,vertical:!0},on:{"update:show":function(o){return t.$set(t.shows,"show3",o)}},scopedSlots:t._u([{key:"action",fn:function(){return[a("var-button",{attrs:{type:"primary"},on:{click:function(o){t.shows.show3=!1}}},[t._v(t._s(t.pack.close))])]},proxy:!0}])},[t._v(" "+t._s(t.pack.text)+" ")]),a("var-snackbar",{attrs:{show:t.shows.show4,duration:1e3},on:{"update:show":function(o){return t.$set(t.shows,"show4",o)}}},[t._v(" "+t._s(t.pack.text)+" ")]),a("var-snackbar",{attrs:{show:t.shows.show9,"forbid-click":!0},on:{"update:show":function(o){return t.$set(t.shows,"show9",o)}}},[t._v(" "+t._s(t.pack.text)+" ")])],1)])},g=[];const x={name:"SnackbarExample",components:{VarSnackbar:e.Component,VarButton:i,AppType:u},data:()=>({shows:{show1:!1,show2:!1,show3:!1,show4:!1,show9:!1}}),computed:{pack(){return y.value}},created(){h(this,C),m(this,p)},methods:{changeValue(t){this.shows[t]=!this.shows[t]},create(t){const n=t==="loading"?this.pack.wait:this.pack.text;e[t](n),t==="loading"&&setTimeout(()=>{e.success(this.pack.loaded)},2e3)},createSnackbar(t){t==="time"&&e({content:this.pack.text,duration:1e3}),t==="position"&&e({content:this.pack.text,position:"bottom"}),t||e(this.pack.text)}}},s={};var $=d(x,F,g,!1,S,"7415c351",null,null);function S(t){for(let n in s)this[n]=s[n]}var P=function(){return $.exports}();export{P as default};
