import{M as p}from"./index.0e351ae0.js";import{B as l}from"./index.0594ca58.js";import{C as c}from"./index.3f1d0a23.js";import{S as s}from"./index.a0725ff8.js";import{A as i}from"./AppType.7c373718.js";import{u as f,a as r,_ as m,b as v,c as _}from"./en-US.36f69c14.js";import{w as d,a as k}from"./utils.3b864b4e.js";import{d as y}from"./index.9b1139e6.js";import{n as b}from"./index.c2619ef7.js";import"./create.11eee831.js";import"./vendor.7d1cc22d.js";import"./shared.f8da68a0.js";import"./index.aa82ed18.js";import"./Teleport.74ff85c7.js";import"./elements.9c883ade.js";import"./zIndex.3167d10e.js";import"./index.bab5582f.js";import"./teleport.cb83deae.js";import"./index.ae3982d6.js";import"./index.1b0b81cd.js";import"./components.a1090420.js";import"./index.b17215aa.js";import"./lock.ac20a0f2.js";var C={alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",menuOption:"\u83DC\u5355\u9879",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",offsetRight:"\u53F3\u504F\u79FB",offsetLeft:"\u5DE6\u504F\u79FB",offsetBottom:"\u4E0B\u504F\u79FB",offsetTop:"\u4E0A\u504F\u79FB",events:"\u6CE8\u518C\u4E8B\u4EF6"},g={alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",offsetRight:"Offset Right",offsetLeft:"Offset Left",offsetBottom:"Offset Bottom",offsetTop:"Offset Top",events:"Events"};const{add:u,use:h,pack:O,packs:Z,merge:tt}=f(),F=t=>{_(t),h(t)};r("zh-CN",m);r("en-US",v);u("zh-CN",C);u("en-US",g);var x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"var-menu-example"},[e("app-type",[t._v(t._s(t.pack.alignmentMethods))]),e("div",{staticClass:"block-1"},[e("var-menu",{attrs:{show:t.top},on:{"update:show":function(o){t.top=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.top=!0}}},[t._v(t._s(t.pack.topAlignment))])],1)],1),e("div",{staticClass:"block"},[e("var-menu",{attrs:{alignment:"bottom",show:t.bottom},on:{"update:show":function(o){t.bottom=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.bottom=!0}}},[t._v(t._s(t.pack.bottomAlignment))])],1)],1),e("app-type",[t._v(t._s(t.pack.offset))]),e("div",{staticClass:"block-1"},[e("var-menu",{attrs:{"offset-x":72,show:t.offsetX},on:{"update:show":function(o){t.offsetX=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.offsetX=!0}}},[t._v(t._s(t.pack.offsetRight))])],1),e("var-menu",{attrs:{"offset-x":-72,show:t.offsetX1},on:{"update:show":function(o){t.offsetX1=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.offsetX1=!0}}},[t._v(t._s(t.pack.offsetLeft))])],1)],1),e("div",{staticClass:"block-2"},[e("var-menu",{attrs:{"offset-y":36,show:t.offsetY},on:{"update:show":function(o){t.offsetY=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.offsetY=!0}}},[t._v(t._s(t.pack.offsetBottom))])],1),e("var-menu",{attrs:{"offset-y":-36,show:t.offsetY1},on:{"update:show":function(o){t.offsetY1=o}},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.offsetY1=!0}}},[t._v(t._s(t.pack.offsetTop))])],1)],1),e("app-type",[t._v(t._s(t.pack.events))]),e("var-menu",{attrs:{show:t.event},on:{"update:show":function(o){t.event=o},open:t.menuOpen,opened:t.menuOpened,close:t.menuClose,closed:t.menuClosed},scopedSlots:t._u([{key:"menu",fn:function(){return[e("div",{staticClass:"cell-list",style:{background:t.bgColor}},[e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))]),e("var-cell",[t._v(t._s(t.pack.menuOption))])],1)]},proxy:!0}])},[e("var-button",{attrs:{type:"primary"},on:{click:function(o){t.event=!0}}},[t._v(t._s(t.pack.events))])],1),e("div",{staticStyle:{"margin-bottom":"100px"}})],1)},B=[];const w={name:"MenuExample",components:{VarMenu:p,VarButton:l,VarCell:c,AppType:i},data:()=>({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1,bgColor:"#fff"}),computed:{pack(){return O.value}},created(){d(this,F),k(this,y,t=>{this.bgColor=t==="darkThemes"?"#272727":"#fff"})},methods:{menuOpen(){s.info("open")},menuOpened(){s.success("opened")},menuClose(){s.warning("close")},menuClosed(){s.error("closed")}}},a={};var S=b(w,x,B,!1,A,"57e242eb",null,null);function A(t){for(let n in a)this[n]=a[n]}var et=function(){return S.exports}();export{et as default};