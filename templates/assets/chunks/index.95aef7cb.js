import{s as Q,r as D,u as $,t as U,v as R,x as X,o as z,q as J,y as x,e as j,z as Y,A as Z,a as O,B as ee,w as te}from"./runtime-core.esm-bundler.31767116.js";function P(e){return Y()?(Z(e),!0):!1}function E(e){return typeof e=="function"?e():$(e)}const ne=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const re=Object.prototype.toString,ae=e=>re.call(e)==="[object Object]",B=()=>{};function oe(e,t){function n(...o){return new Promise((r,s)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(r).catch(s)})}return n}const H=e=>e();function se(e=H){const t=D(!0);function n(){t.value=!1}function o(){t.value=!0}const r=(...s)=>{t.value&&e(...s)};return{isActive:R(t),pause:n,resume:o,eventFilter:r}}function ie(e){return e||x()}function ue(...e){if(e.length!==1)return U(...e);const t=e[0];return typeof t=="function"?R(X(()=>({get:t,set:B}))):D(t)}function le(e,t,n={}){const{eventFilter:o=H,...r}=n;return j(e,oe(o,t),r)}function ce(e,t,n={}){const{eventFilter:o,...r}=n,{eventFilter:s,pause:l,resume:i,isActive:c}=se(o);return{stop:le(e,t,{...r,eventFilter:s}),pause:l,resume:i,isActive:c}}function q(e,t=!0,n){ie()?z(e,n):t?e():J(e)}function be(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,r=Q(e),s=D(e);function l(i){if(arguments.length)return s.value=i,s.value;{const c=E(n);return s.value=s.value===c?E(o):c,s.value}}return r?l:[s,l]}function G(e){var t;const n=E(e);return(t=n?.$el)!=null?t:n}const M=ne?window:void 0;function V(...e){let t,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,t=M):[t,n,o,r]=e,!t)return B;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],l=()=>{s.forEach(m=>m()),s.length=0},i=(m,f,S,g)=>(m.addEventListener(f,S,g),()=>m.removeEventListener(f,S,g)),c=j(()=>[G(t),E(r)],([m,f])=>{if(l(),!m)return;const S=ae(f)?{...f}:f;s.push(...n.flatMap(g=>o.map(v=>i(m,g,v,S))))},{immediate:!0,flush:"post"}),p=()=>{c(),l()};return P(p),p}function fe(){const e=D(!1);return x()&&z(()=>{e.value=!0}),e}function de(e){const t=fe();return O(()=>(t.value,!!e()))}function pe(e,t={}){const{window:n=M}=t,o=de(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const s=D(!1),l=p=>{s.value=p.matches},i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",l):r.removeListener(l))},c=te(()=>{o.value&&(i(),r=n.matchMedia(E(e)),"addEventListener"in r?r.addEventListener("change",l):r.addListener(l),s.value=r.matches)});return P(()=>{c(),i(),r=void 0}),s}const N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__",me=he();function he(){return F in N||(N[F]=N[F]||{}),N[F]}function I(e,t){return me[e]||t}function ge(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ve={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},W="vueuse-storage";function ye(e,t,n,o={}){var r;const{flush:s="pre",deep:l=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:p=!1,shallow:m,window:f=M,eventFilter:S,onError:g=a=>{console.error(a)},initOnMounted:v}=o,h=(m?ee:D)(typeof t=="function"?t():t);if(!n)try{n=I("getDefaultStorage",()=>{var a;return(a=M)==null?void 0:a.localStorage})()}catch(a){g(a)}if(!n)return h;const w=E(t),L=ge(w),b=(r=o.serializer)!=null?r:ve[L],{pause:T,resume:d}=ce(h,()=>A(h.value),{flush:s,deep:l,eventFilter:S});return f&&i&&q(()=>{V(f,"storage",y),V(f,W,k),v&&y()}),v||y(),h;function A(a){try{if(a==null)n.removeItem(e);else{const u=b.write(a),C=n.getItem(e);C!==u&&(n.setItem(e,u),f&&f.dispatchEvent(new CustomEvent(W,{detail:{key:e,oldValue:C,newValue:u,storageArea:n}})))}}catch(u){g(u)}}function _(a){const u=a?a.newValue:n.getItem(e);if(u==null)return c&&w!=null&&n.setItem(e,b.write(w)),w;if(!a&&p){const C=b.read(u);return typeof p=="function"?p(C,w):L==="object"&&!Array.isArray(C)?{...w,...C}:C}else return typeof u!="string"?u:b.read(u)}function k(a){y(a.detail)}function y(a){if(!(a&&a.storageArea!==n)){if(a&&a.key==null){h.value=w;return}if(!(a&&a.key!==e)){T();try{a?.newValue!==b.write(h.value)&&(h.value=_(a))}catch(u){g(u)}finally{a?J(d):d()}}}}}function K(e){return pe("(prefers-color-scheme: dark)",e)}function we(e={}){const{selector:t="html",attribute:n="class",initialValue:o="auto",window:r=M,storage:s,storageKey:l="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:c,emitAuto:p,disableTransition:m=!0}=e,f={auto:"",light:"light",dark:"dark",...e.modes||{}},S=K({window:r}),g=O(()=>S.value?"dark":"light"),v=c||(l==null?ue(o):ye(l,o,s,{window:r,listenToStorageChanges:i})),h=O(()=>v.value==="auto"?g.value:v.value),w=I("updateHTMLAttrs",(d,A,_)=>{const k=typeof d=="string"?r?.document.querySelector(d):G(d);if(!k)return;let y;if(m){y=r.document.createElement("style");const a="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";y.appendChild(document.createTextNode(a)),r.document.head.appendChild(y)}if(A==="class"){const a=_.split(/\s/g);Object.values(f).flatMap(u=>(u||"").split(/\s/g)).filter(Boolean).forEach(u=>{a.includes(u)?k.classList.add(u):k.classList.remove(u)})}else k.setAttribute(A,_);m&&(r.getComputedStyle(y).opacity,document.head.removeChild(y))});function L(d){var A;w(t,n,(A=f[d])!=null?A:d)}function b(d){e.onChanged?e.onChanged(d,L):L(d)}j(h,b,{flush:"post",immediate:!0}),q(()=>b(h.value));const T=O({get(){return p?v.value:h.value},set(d){v.value=d}});try{return Object.assign(T,{store:v,system:g,state:h})}catch{return T}}function Ae(e={}){const{valueDark:t="dark",valueLight:n="",window:o=M}=e,r=we({...e,onChanged:(i,c)=>{var p;e.onChanged?(p=e.onChanged)==null||p.call(e,i==="dark",c,i):c(i)},modes:{dark:t,light:n}}),s=O(()=>r.system?r.system.value:K({window:o}).value?"dark":"light");return O({get(){return r.value==="dark"},set(i){const c=i?"dark":"light";s.value===c?r.value="auto":r.value=c}})}export{Ae as a,be as b,fe as u};