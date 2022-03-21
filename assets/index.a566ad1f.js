import{d as i}from"./create.11eee831.js";import{V as p}from"./validation.b62c0932.js";import{a as m}from"./relation.9e421618.js";import{n as u}from"./index.c2619ef7.js";import{I as d}from"./index.5221af19.js";import{S as f}from"./index.196a6762.js";import{O as v}from"./index.078de8cd.js";import{C as k}from"./index.3afbe4f0.js";import{C as g}from"./index.4349e5bd.js";import{R as _,a as b}from"./index.5fcf1786.js";import{B as h}from"./index.0594ca58.js";import{S as C}from"./index.3613a7d7.js";import{S as E}from"./index.df7d1a95.js";import{U as y}from"./index.2980a68a.js";import{C as D}from"./index.5b29a7d6.js";import{R as M}from"./index.b1ccefab.js";import{A as x}from"./AppType.7c373718.js";import{d as F}from"./index.9b1139e6.js";import{w as $,a as B}from"./utils.3b864b4e.js";import{u as w,a as l,_ as V,b as A,c as U}from"./en-US.36f69c14.js";import"./vendor.7d1cc22d.js";import"./shared.f8da68a0.js";import"./index.b17215aa.js";import"./elements.9c883ade.js";import"./index.0e351ae0.js";import"./index.aa82ed18.js";import"./Teleport.74ff85c7.js";import"./zIndex.3167d10e.js";import"./index.bab5582f.js";import"./teleport.cb83deae.js";import"./index.ae3982d6.js";import"./index.32a43908.js";import"./components.a1090420.js";import"./index.1b0b81cd.js";import"./index.10e88429.js";import"./lock.ac20a0f2.js";import"./index.486ee3f0.js";import"./index.112e8c6e.js";import"./index.544516d1.js";const S={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}};var I=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"var-form"},[e._t("default")],2)},R=[];const T=i({name:"VarForm",mixins:[p,m("form",{childrenKey:"formItems"})],props:S,methods:{async validate(){return(await Promise.all(this.formItems.map(({validate:r})=>r()))).every(r=>r===!0)},reset(){this.formItems.forEach(({reset:e})=>e())},resetValidation(){this.formItems.forEach(({resetValidation:e})=>e())}}}),o={};var P=u(T,I,R,!1,z,null,null,null);function z(e){for(let r in o)this[r]=o[r]}var s=function(){return P.exports}();s.install=function(e){e.component(s.name,s)};var N={example:"\u8868\u5355\u793A\u4F8B",username:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",usernameMessage:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",password:"\u8BF7\u8F93\u5165\u5BC6\u7801",passwordMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801",department:"\u8BF7\u9009\u62E9\u90E8\u95E8",departmentMessage:"\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",departmentUnit:"\u90E8",group:"\u8BF7\u9009\u62E9\u7EC4\u7EC7",groupMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7",groupUnit:"\u7EC4",genderMessage:"\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B",male:"\u7537",female:"\u5973",rateMessage:"\u5FC5\u987B\u5927\u4E8E2",likeMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D",licenseMessage:"\u60A8\u5FC5\u987B\u5F00\u542F",countMessage:"\u5FC5\u987B\u5927\u4E8E10",rangeMessage:"\u5FC5\u987B\u5927\u4E8E10",filesMessage:"\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247",controller:"\u8868\u5355\u63A7\u5236",reset:"\u6E05\u7A7A\u8868\u5355",resetValidation:"\u6E05\u7A7A\u9A8C\u8BC1",validate:"\u89E6\u53D1\u9A8C\u8BC1",disabled:"\u8868\u5355\u7981\u7528",readonly:"\u8868\u5355\u53EA\u8BFB"},G={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"};const{add:c,use:O,pack:j,packs:Ie,merge:Re}=w(),L=e=>{U(e),O(e)};l("zh-CN",V);l("en-US",A);c("zh-CN",N);c("en-US",G);var K=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"example"},[t("app-type",[e._v(e._s(e.pack.example))]),t("var-form",{ref:"form",attrs:{disabled:e.disabled,readonly:e.readonly}},[t("var-input",{staticClass:"mb",attrs:{placeholder:e.pack.username,rules:[function(a){return!!a||e.pack.usernameMessage}]},model:{value:e.formData.username,callback:function(a){e.$set(e.formData,"username",a)},expression:"formData.username"}}),t("var-input",{staticClass:"mb",attrs:{type:"password",placeholder:e.pack.password,rules:[function(a){return!!a||e.pack.passwordMessage}]},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}}),t("var-select",{staticClass:"mb",attrs:{placeholder:e.pack.department,rules:[function(a){return!!a||e.pack.departmentMessage}]},model:{value:e.formData.department,callback:function(a){e.$set(e.formData,"department",a)},expression:"formData.department"}},[t("var-option",{attrs:{label:""+e.pack.eat+e.pack.departmentUnit}}),t("var-option",{attrs:{label:""+e.pack.sleep+e.pack.departmentUnit}}),t("var-option",{attrs:{label:""+e.pack.play+e.pack.departmentUnit}})],1),t("var-select",{staticClass:"mb",attrs:{multiple:"",placeholder:e.pack.group,rules:[function(a){return a.length>=1||e.pack.groupMessage}]},model:{value:e.formData.group,callback:function(a){e.$set(e.formData,"group",a)},expression:"formData.group"}},[t("var-option",{attrs:{label:""+e.pack.eat+e.pack.groupUnit}}),t("var-option",{attrs:{label:""+e.pack.sleep+e.pack.groupUnit}}),t("var-option",{attrs:{label:""+e.pack.play+e.pack.groupUnit}})],1),t("var-radio-group",{staticClass:"mb",attrs:{rules:[function(a){return!!a||e.pack.genderMessage}]},model:{value:e.formData.gender,callback:function(a){e.$set(e.formData,"gender",a)},expression:"formData.gender"}},[t("var-radio",{attrs:{"checked-value":1}},[e._v(e._s(e.pack.male))]),t("var-radio",{attrs:{"checked-value":2}},[e._v(e._s(e.pack.female))])],1),t("var-checkbox-group",{staticClass:"mb",attrs:{rules:[function(a){return a.length>0||e.pack.likeMessage}]},model:{value:e.formData.like,callback:function(a){e.$set(e.formData,"like",a)},expression:"formData.like"}},[t("var-checkbox",{attrs:{"checked-value":1}},[e._v(e._s(e.pack.eat))]),t("var-checkbox",{attrs:{"checked-value":2}},[e._v(e._s(e.pack.sleep))]),t("var-checkbox",{attrs:{"checked-value":3}},[e._v(e._s(e.pack.play))])],1),t("var-rate",{staticClass:"mb",attrs:{rules:[function(a){return a>=3||e.pack.rateMessage}]},model:{value:e.formData.score,callback:function(a){e.$set(e.formData,"score",a)},expression:"formData.score"}}),t("div",{staticClass:"row mb"},[t("var-switch",{attrs:{rules:[function(a){return!!a||e.pack.licenseMessage}]},model:{value:e.formData.license,callback:function(a){e.$set(e.formData,"license",a)},expression:"formData.license"}})],1),t("div",{staticClass:"row mb"},[t("var-counter",{attrs:{rules:[function(a){return a>10||e.pack.countMessage}]},model:{value:e.formData.count,callback:function(a){e.$set(e.formData,"count",a)},expression:"formData.count"}})],1),t("var-slider",{staticClass:"mb",attrs:{rules:[function(a){return a>10||e.pack.rangeMessage}]},model:{value:e.formData.range,callback:function(a){e.$set(e.formData,"range",a)},expression:"formData.range"}}),t("var-uploader",{staticClass:"mb",attrs:{rules:[function(a){return a.length>=1||e.pack.filesMessage}]},model:{value:e.formData.files,callback:function(a){e.$set(e.formData,"files",a)},expression:"formData.files"}})],1),t("app-type",[e._v(e._s(e.pack.controller))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"danger"},on:{click:function(a){return e.$refs.form.reset()}}},[e._v(e._s(e.pack.reset))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"warning"},on:{click:function(a){return e.$refs.form.resetValidation()}}},[e._v(e._s(e.pack.resetValidation))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"success"},on:{click:function(a){return e.$refs.form.validate()}}},[e._v(e._s(e.pack.validate))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"info"},on:{click:function(a){e.disabled=!e.disabled}}},[e._v(e._s(e.pack.disabled))]),t("var-button",{staticClass:"mt",attrs:{block:"",type:"primary"},on:{click:function(a){e.readonly=!e.readonly}}},[e._v(e._s(e.pack.readonly))]),t("div",{staticClass:"space"})],1)},Y=[];const q={name:"FormExample",components:{VarForm:s,VarInput:d,VarSelect:f,VarCheckboxGroup:k,VarCheckbox:g,VarRadioGroup:_,VarRadio:b,VarOption:v,VarButton:h,VarSlider:E,VarSwitch:C,VarUploader:y,VarCounter:D,VarRate:M,AppType:x},data:()=>({formData:{username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[]},disabled:!1,readonly:!1}),computed:{pack(){return j.value}},created(){$(this,e=>{var r;L(e),(r=this.$refs.form)==null||r.reset()}),B(this,F)}},n={};var H=u(q,K,Y,!1,J,"38159180",null,null);function J(e){for(let r in n)this[r]=n[r]}var Te=function(){return H.exports}();export{Te as default};
