import{d as s}from"./create.11eee831.js";import{B as c}from"./index.0594ca58.js";import{I as u}from"./index.b17215aa.js";import{j as p,l as m,m as h,d as _}from"./shared.f8da68a0.js";import{c as f,t as v,d,e as g,f as b,b as k}from"./elements.9c883ade.js";import{n as i}from"./index.c2619ef7.js";import{C as y}from"./index.3f1d0a23.js";import{d as T}from"./index.9b1139e6.js";import{a as S}from"./utils.3b864b4e.js";import"./vendor.7d1cc22d.js";import"./index.ae3982d6.js";import"./index.bab5582f.js";import"./index.1b0b81cd.js";import"./components.a1090420.js";const x={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:{type:[Number,String]},bottom:{type:[Number,String]},target:{type:[String,Object]},onClick:{type:Function}};var B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"backTopEl",staticClass:"var-back-top",class:[t.show?"var-back-top--active":null],style:{right:t.toSizeUnit(t.right),bottom:t.toSizeUnit(t.bottom)},on:{click:function(o){return o.stopPropagation(),t.click.apply(null,arguments)}}},[t._t("default",function(){return[r("var-button",{attrs:{type:"primary",round:"","var-back-top-cover":""}},[r("var-icon",{attrs:{name:"chevron-up"}})],1)]})],2)},C=[];const E=s({name:"VarBackTop",components:{VarButton:c,VarIcon:u},props:x,data:()=>({show:!1,localTarget:void 0,throttleScroll:null}),mounted(){this.throttleScroll=p(this.scroll,200),this.localTarget=this.target?this.getTarget():f(this.$refs.backTopEl),this.localTarget.addEventListener("scroll",this.throttleScroll)},destroyed(){this.localTarget.removeEventListener("scroll",this.throttleScroll)},methods:{toSizeUnit:v,click(t){var r,o;(o=(r=this.getListeners()).onClick)==null||o.call(r,t);const e=d(this.localTarget);g(this.localTarget,{left:e,duration:this.duration,animation:m})},scroll(){this.show=b(this.localTarget)>=k(this.visibilityHeight)},getTarget(){if(h(this.target))return this.target;if(_(this.target)){const t=document.querySelector(this.target);if(!t)throw Error("[Varlet] BackTop: target element cannot found");return t}throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object')}}}),n={};var $=i(E,B,C,!1,V,null,null,null);function V(t){for(let e in n)this[e]=n[e]}var a=function(){return $.exports}();a.install=function(t){t.component(a.name,a)};var j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"var-backTop-example"},[t._l(t.lists,function(o){return r("var-cell",{key:o},[t._v("Scroll to bottom "+t._s(o))])}),r("var-back-top",{attrs:{duration:300}})],2)},w=[];const N={name:"BackTopExample",components:{VarBackTop:a,VarCell:y},data:()=>({lists:[...Array(100).keys()]}),created(){S(this,T)}},l={};var z=i(N,j,w,!1,I,null,null,null);function I(t){for(let e in l)this[e]=l[e]}var Q=function(){return z.exports}();export{Q as default};