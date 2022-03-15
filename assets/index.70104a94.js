import{M as k}from"./index.97d800fb.js";import{R as z}from"./index.aabf9f28.js";import{I as S}from"./index.459f99aa.js";import{C as y}from"./index.ec51d5f2.js";import{I as N}from"./index.caadbcd6.js";import{d as V}from"./create.11eee831.js";import{i as x,t as w}from"./shared.f8da68a0.js";import{p as P,u as H,a as v,_ as E,b as T,c as M}from"./en-US.36f69c14.js";import{n as I}from"./index.c2619ef7.js";const U={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function}};var F=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"var-pagination"},[t("li",{directives:[{name:"ripple",rawName:"v-ripple",value:{disabled:e.localCurrent<=1||e.disabled},expression:"{ disabled: localCurrent <= 1 || disabled }"}],staticClass:"var-pagination__item var-pagination__prev",class:{"var-pagination__item-disabled":e.localCurrent<=1||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple},on:{click:function(i){return e.clickItem("prev")}}},[e._t("prev",function(){return[t("var-icon",{attrs:{name:"chevron-left"}})]})],2),e.simple?t("li",{staticClass:"var-pagination__simple",class:{"var-pagination__item-disabled":e.disabled}},[t("var-input",{attrs:{disabled:e.disabled,"var-pagination-cover":""},on:{blur:function(i){return e.setPage("simple",e.simpleValue,i)},keydown:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.setPage("simple",e.simpleValue,i)}},model:{value:e.simpleValue,callback:function(i){e.simpleValue=i},expression:"simpleValue"}}),t("span",[e._v("/ "+e._s(e.pageCount))])],1):e._l(e.pageList,function(i,n){return t("li",{directives:[{name:"ripple",rawName:"v-ripple",value:{disabled:e.disabled},expression:"{ disabled }"}],key:n,staticClass:"var-pagination__item var-elevation--2",class:{"var-pagination__item-active":i===e.localCurrent&&!e.disabled,"var-pagination__item-hide":e.isHideEllipsis(i,n),"var-pagination__item-disabled":e.disabled,"var-pagination__item-disabled-active":i===e.localCurrent&&e.disabled},attrs:{"item-mode":e.getMode(i,n)},on:{click:function(o){return e.clickItem(i,n)}}},[e._v(" "+e._s(i)+" ")])}),t("li",{directives:[{name:"ripple",rawName:"v-ripple",value:{disabled:e.localCurrent>=e.pageCount||e.disabled},expression:"{ disabled: localCurrent >= pageCount || disabled }"}],staticClass:"var-pagination__item var-pagination__next",class:{"var-pagination__item-disabled":e.localCurrent>=e.pageCount||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple},on:{click:function(i){return e.clickItem("next")}}},[e._t("next",function(){return[t("var-icon",{attrs:{name:"chevron-right"}})]})],2),e.showSizeChanger?t("li",{staticClass:"var-pagination__size",class:{"var-pagination__item-disabled":e.disabled}},[t("var-menu",{attrs:{show:e.menuVisible,"offset-x":-4},on:{"update:show":function(i){e.menuVisible=i}},scopedSlots:e._u([{key:"menu",fn:function(){return e._l(e.sizeOption,function(i,n){return t("var-cell",{directives:[{name:"ripple",rawName:"v-ripple"}],key:n,staticClass:"var-pagination__list",class:{"var-pagination__list-active":e.localSize===i},on:{click:function(o){return e.clickSize(i)}}},[e._v(" "+e._s(i)+e._s(e.pack.paginationItem)+" / "+e._s(e.pack.paginationPage)+" ")])})},proxy:!0}],null,!1,3859377910)},[t("div",{staticClass:"var-pagination__size-open",staticStyle:{display:"flex"},on:{click:e.showMenu}},[t("span",[e._v(e._s(e.localSize)+e._s(e.pack.paginationItem)+" / "+e._s(e.pack.paginationPage))]),t("var-icon",{staticClass:"var-pagination__size-open-icon",attrs:{"var-pagination-cover":"",name:"menu-down"}})],1)])],1):e._e(),e.showQuickJumper&&!e.simple?t("li",{staticClass:"var-pagination__quickly",class:{"var-pagination__item-disabled":e.disabled}},[e._v(" "+e._s(e.pack.paginationJump)+" "),t("var-input",{attrs:{disabled:e.disabled,"var-pagination-cover":""},on:{blur:function(i){return e.setPage("quick",e.inputValue,i)},keydown:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.setPage("quick",e.inputValue,i)}},model:{value:e.inputValue,callback:function(i){e.inputValue=i},expression:"inputValue"}})],1):e._e(),e.totalText?t("li",{staticClass:"var-pagination__total"},[e._v(" "+e._s(e.totalText)+" ")]):e._e()],2)},B=[];const $=V({name:"VarPagination",components:{VarMenu:k,VarIcon:S,VarCell:y,VarInput:N},directives:{Ripple:z},props:U,data(){return{menuVisible:!1,inputValue:"",simpleValue:"1",isHideEllipsisHead:!1,isHideEllipsisTail:!1,pageList:[],localCurrent:this.toNumber(this.current)||1,localSize:this.toNumber(this.size)||10}},computed:{pack(){return P.value},activePosition(){return Math.ceil(this.maxPagerCount/2)},pageCount(){return Math.ceil(this.toNumber(this.total)/this.toNumber(this.localSize))},range(){const e=this.localSize*(this.localCurrent-1)+1,a=Math.min(this.localSize*this.localCurrent,this.toNumber(this.total));return[e,a]},totalText(){return this.showTotal?this.showTotal(this.toNumber(this.total),this.range):""},page(){const{current:e,size:a}=this;return{current:e,size:a}},localPage(){const{localCurrent:e,localSize:a}=this;return{localCurrent:e,localSize:a}}},watch:{page({current:e,size:a}){this.localCurrent=this.toNumber(e)||1,this.localSize=this.toNumber(a||10)},localPage:{handler(e,a){var d,h,m,_;const{localCurrent:t,localSize:i}=e;let n,o;if(a&&(n=a.localCurrent,o=a.localSize),t>this.pageCount){this.localCurrent=this.pageCount;return}let l=[];const{maxPagerCount:r,total:C,getListeners:u}=this,{onChange:p}=u(),b=Math.ceil(this.toNumber(C)/this.toNumber(o)),c=this.pageCount-(r-this.activePosition)-1;if(this.simpleValue=`${t}`,this.pageCount-2>r){if(n===void 0||this.pageCount!==b)for(let s=2;s<r+2;s++)l.push(s);if(t<=r&&t<c){l=[];for(let s=1;s<r+1;s++)l.push(s+1);this.isHideEllipsisHead=!0,this.isHideEllipsisTail=!1}if(t>r&&t<c){l=[];for(let s=1;s<r+1;s++)l.push(t+s-this.activePosition);this.isHideEllipsisHead=t===2&&r===1,this.isHideEllipsisTail=!1}if(t>=c){l=[];for(let s=1;s<r+1;s++)l.push(this.pageCount-(r-s)-1);this.isHideEllipsisHead=!1,this.isHideEllipsisTail=!0}l=[1,"...",...l,"...",this.pageCount]}else for(let s=1;s<=this.pageCount;s++)l.push(s);this.pageList=l,n!==void 0&&(p==null||p(t,i)),(h=(d=u())["onUpdate:current"])==null||h.call(d,t),(_=(m=u())["onUpdate:size"])==null||_.call(m,i)},immediate:!0,deep:!0}},methods:{isNumber:x,toNumber:w,isHideEllipsis(e,a){return this.isNumber(e)?!1:a===1?this.isHideEllipsisHead:this.isHideEllipsisTail},getMode(e,a){return this.isNumber(e)?"basic":a===1?"head":"tail"},clickItem(e,a){e===this.localCurrent||this.disabled||(this.isNumber(e)?this.localCurrent=e:e==="prev"?this.localCurrent>1&&(this.localCurrent-=1):e==="next"?this.localCurrent<this.pageCount&&(this.localCurrent+=1):e==="..."&&(a===1?this.localCurrent=Math.max(this.localCurrent-this.maxPagerCount,1):this.localCurrent=Math.min(this.localCurrent+this.maxPagerCount,this.pageCount)))},showMenu(){this.disabled||(this.menuVisible=!0)},clickSize(e){this.localSize=e,this.menuVisible=!1},isValidatePage(e){return/^[1-9][0-9]*$/.test(e)},setPage(e,a,t){if(t.target.blur(),this.isValidatePage(a)){let i=this.toNumber(a);i>this.pageCount&&(i=this.pageCount,this.simpleValue=`${i}`),i!==this.localCurrent&&(this.localCurrent=i)}e==="quick"&&(this.inputValue=""),e==="simple"&&!this.isValidatePage(a)&&(this.simpleValue=`${this.localCurrent}`)}}}),g={};var L=I($,F,B,!1,q,null,null,null);function q(e){for(let a in g)this[a]=g[a]}var Z=function(){return L.exports}(),O={basicUsage:"\u57FA\u672C\u4F7F\u7528",showTotal:"\u663E\u793A\u603B\u6570",total:"\u5171",item:"\u6761",disabled:"\u7981\u7528",hideSize:"\u9690\u85CF size \u5207\u6362\u5668",pcTotal:"\u5171",current:"\u5F53\u524D"},A={basicUsage:"Basic Usage",showTotal:"Show Total",total:"",item:"items",disabled:"Disabled",hideSize:"Hide Size Changer",pcTotal:"Total ",current:"Current"};const{add:f,use:J,pack:ee,packs:ie,merge:te}=H(),ae=e=>{M(e),J(e)};v("zh-CN",E);v("en-US",T);f("zh-CN",O);f("en-US",A);export{Z as P,ee as p,ae as u};