import{r as c,m as f,o as d,d as m,f as l,g as h,q as u,s as g}from"./chunks/runtime-core.esm-bundler.eef90e21.js";import{_ as p}from"./chunks/_plugin-vue_export-helper.c27b6911.js";let _=class{canvas;ctx;margin=40;constructor(t){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.init()}init(){this.draw()}draw(){const{ctx:t,canvas:a}=this,{width:n,height:r}=a;t.clearRect(0,0,n,r),t.fillRect(0,0,n,r),t.fillStyle="#fff",t.beginPath();for(let e=this.margin;e<n;e+=this.margin)for(let i=this.margin;i<r;i+=this.margin){const s=Math.random()*1;t.moveTo(e+s,i),t.arc(e,i,s,0,2*Math.PI)}t.fill(),t.beginPath();for(let e=this.margin;e<n;e+=this.margin)for(let i=this.margin;i<r;i+=this.margin){const s=Math.random()*3+1;t.moveTo(e+s,i),t.arc(e,i,s,0,2*Math.PI)}t.strokeStyle="rgba(255, 255, 255, .2)";for(let e=this.margin;e<n;e+=this.margin)t.moveTo(e,0),t.lineTo(e,r);for(let e=this.margin;e<r;e+=this.margin)t.moveTo(0,e),t.lineTo(n,e);t.strokeStyle="rgba(255,255,255,0.08)",t.stroke(),t.beginPath()}};function v(o){new _(o)}function b(){const o=c(!1);return f()&&d(()=>{o.value=!0}),o}const x=m({__name:"CyberBackground",setup(o,{expose:t}){t();const a=c(null),n=c(null);d(()=>{g(()=>{a.value&&n.value&&v(n.value)})});const r=b(),e={wrapper:a,context:n,isMounted:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),k={class:"fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden z--1",ref:"wrapper"},w=["width","height"];function y(o,t,a,n,r,e){return l(),h("div",k,[n.isMounted?(l(),h("canvas",{key:0,ref:"context",width:n.wrapper.clientWidth,height:n.wrapper.clientHeight},null,8,w)):u("",!0)],512)}const T=p(x,[["render",y]]);export{T as default};
