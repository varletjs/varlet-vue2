import{U as p}from"./index.a653824f.js";import{B as n}from"./index.83811c30.js";import{S as s}from"./index.277891ae.js";import{D as c}from"./index.4e08dbb2.js";import{A as v}from"./AppType.fce75861.js";import{d}from"./index.079ade67.js";import{w as f,a as m}from"./utils.3b864b4e.js";import{u as h,a as r,_ as g,b as _,c as b}from"./en-US.4c86986d.js";import{n as F}from"./index.1361b848.js";import"./validation.9dbbca3c.js";import"./create.b8cb1f2b.js";import"./vendor.c9dd9d4d.js";import"./shared.f8da68a0.js";import"./index.92606453.js";import"./elements.9c883ade.js";import"./index.2e86051c.js";import"./lock.42265169.js";import"./index.2bd9f53a.js";import"./index.96a0fb42.js";import"./Teleport.4098f4e2.js";import"./components.5b67303e.js";import"./zIndex.00c4a0ec.js";import"./teleport.cb83deae.js";import"./index.3b7ffc92.js";import"./index.7c8667be.js";import"./index.5dfb58ba.js";import"./relation.9e421618.js";import"./index.1260a6a8.js";import"./index.5e392fce.js";var k={basicUsage:"\u57FA\u672C\u4F7F\u7528",preview:"\u6587\u4EF6\u9884\u89C8",state:"\u4E0A\u4F20\u72B6\u6001",maxlength:"\u6587\u4EF6\u6570\u91CF\u9650\u5236",maxsize:"\u6587\u4EF6\u5927\u5C0F\u9650\u5236",beforeRead:"\u4E0A\u4F20\u9884\u5904\u7406",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u5B58\u5728\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6",style:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",upload:"\u4E0A\u4F20",beforeRemove:"\u5220\u9664\u524D\u5904\u7406",removeTitle:"\u662F\u5426\u5220\u9664?",removeMessage:"\u5220\u9664\u540E\u65E0\u6CD5\u64A4\u56DE",fileSizeExceedsLimit:"\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236",fileLessThen:"\u6587\u4EF6\u5C0F\u4E8E1M\uFF0C\u4E0A\u4F20\u6210\u529F",fileLargeThen:"\u6587\u4EF6\u5927\u4E8E1M\uFF0C\u4E0D\u80FD\u4E0A\u4F20"},x={basicUsage:"Basic Usage",preview:"File Preview",state:"Upload State",maxlength:"File Maxlength",maxsize:"File Size Limit",beforeRead:"Upload Preprocessing",disabled:"Disabled",readonly:"Readonly",validate:"Validate",validateMessage:"There is a file that failed to upload",style:"Customize upload styles",upload:"Upload",beforeRemove:"Remove Preprocessing",removeTitle:"Delete or not?",removeMessage:"Cannot be withdrawn after deletion",fileSizeExceedsLimit:"file size exceeds limit",fileLessThen:"the file is less than 1M, the upload is successful",fileLargeThen:"the file is larger than 1M and cannot be uploaded"};const{add:u,use:E,pack:y,packs:re,merge:ue}=h(),A=e=>{b(e),E(e)};r("zh-CN",g);r("en-US",_);u("zh-CN",k);u("en-US",x);var C=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{staticClass:"var-uploader-example"},[a("app-type",[e._v(e._s(e.pack.basicUsage))]),a("var-uploader",{on:{"after-read":e.handleAfterRead},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),a("app-type",[e._v(e._s(e.pack.preview))]),a("var-uploader",{model:{value:e.files2,callback:function(t){e.files2=t},expression:"files2"}}),a("app-type",[e._v(e._s(e.pack.state))]),a("var-uploader",{on:{"after-read":e.handleAfterRead2},model:{value:e.files3,callback:function(t){e.files3=t},expression:"files3"}}),a("app-type",[e._v(e._s(e.pack.maxlength))]),a("var-uploader",{attrs:{maxlength:1},model:{value:e.files4,callback:function(t){e.files4=t},expression:"files4"}}),a("app-type",[e._v(e._s(e.pack.maxsize))]),a("var-uploader",{attrs:{maxsize:1024},on:{oversize:e.handleOversize},model:{value:e.files5,callback:function(t){e.files5=t},expression:"files5"}}),a("app-type",[e._v(e._s(e.pack.beforeRead))]),a("var-uploader",{on:{"before-read":e.handleBeforeRead},model:{value:e.files7,callback:function(t){e.files7=t},expression:"files7"}}),a("app-type",[e._v(e._s(e.pack.disabled))]),a("var-uploader",{attrs:{disabled:""},model:{value:e.files8,callback:function(t){e.files8=t},expression:"files8"}}),a("app-type",[e._v(e._s(e.pack.readonly))]),a("var-uploader",{attrs:{readonly:""},model:{value:e.files9,callback:function(t){e.files9=t},expression:"files9"}}),a("app-type",[e._v(e._s(e.pack.beforeRemove))]),a("var-uploader",{on:{"before-remove":e.handleBeforeRemove},model:{value:e.files11,callback:function(t){e.files11=t},expression:"files11"}}),a("app-type",[e._v(e._s(e.pack.style))]),a("var-uploader",{model:{value:e.files6,callback:function(t){e.files6=t},expression:"files6"}},[a("var-button",{attrs:{type:"primary"}},[e._v(e._s(e.pack.upload))])],1),a("app-type",[e._v(e._s(e.pack.validate))]),a("var-uploader",{attrs:{rules:[function(t,o){return o.getError(t).length===0||e.pack.validateMessage}]},model:{value:e.files10,callback:function(t){e.files10=t},expression:"files10"}}),a("div",{staticClass:"space"})],1)},z=[];const R={name:"UploaderExample",components:{VarUploader:p,VarButton:n,AppType:v},data:()=>({files:[],files2:[{url:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"https://varlet.gitee.io/varlet-ui-vue2/cover.jpg"}],files3:[{url:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",state:"loading"},{url:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",state:"success"},{url:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",state:"error"}],files4:[],files5:[],files6:[],files7:[],files8:[],files9:[],files10:[{url:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",state:"error"}],files11:[{url:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui-vue2/cat.jpg"}]}),computed:{pack(){return y.value}},created(){f(this,A),m(this,d)},methods:{handleAfterRead(e){console.log(e)},handleAfterRead2(e){e.state="loading",setTimeout(()=>{e.state="success"},1e3)},handleOversize(){s.warning(this.pack.fileSizeExceedsLimit)},handleBeforeRead(e){return e.file.size<=1*1024*1024?(s.success(this.pack.fileLessThen),!0):(s.warning(this.pack.fileLargeThen),!1)},async handleBeforeRemove(){return await c({title:this.pack.removeTitle,message:this.pack.removeMessage})==="confirm"}}},l={};var B=F(R,C,z,!1,w,"718281dd",null,null);function w(e){for(let i in l)this[i]=l[i]}var oe=function(){return B.exports}();export{oe as default};
