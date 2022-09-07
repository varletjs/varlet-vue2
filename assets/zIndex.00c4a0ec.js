import{r as e}from"./index.2bd9f53a.js";function d(t,n=1){return{data:()=>({zIndex:e.zIndex}),watch:{[t]:{handler(r){r&&(e.zIndex+=n,this.zIndex=e.zIndex)},immediate:!0}}}}export{d as c};
