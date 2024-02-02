import{_ as ge}from"./chunks/_plugin-vue_export-helper.c27b6911.js";import{c as ye,h as I,F as be,i as B,p as F,d as U,a as A,w as k,r as w,o as T,b as K,e as we,n as Se,f as _e,g as Ee,j as S,k as Oe,l as Te}from"./chunks/runtime-core.esm-bundler.31767116.js";let Ce=0;function je(){return++Ce}function $e(){return je()}function Z(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function C(e,t,...n){if(e in t){let a=t[e];return typeof a=="function"?a(...n):a}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}var xe=Object.defineProperty,Le=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t,n)=>(Le(e,typeof t!="symbol"?t+"":t,n),n);let Fe=class{constructor(){G(this,"current",this.detect()),G(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Ae=new Fe;var ee=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ee||{}),b=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(b||{});function te({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...a}){var l;let o=re(r,n),i=Object.assign(a,{props:o});if(e||t&2&&o.static)return M(i);if(t&1){let u=(l=o.unmount)==null||l?0:1;return C(u,{0(){return null},1(){return M({...a,props:{...o,hidden:!0,style:{display:"none"}}})}})}return M(i)}function M({props:e,attrs:t,slots:n,slot:r,name:a}){var l,o;let{as:i,...u}=ae(e,["unmount","static"]),s=(l=n.default)==null?void 0:l.call(n,r),f={};if(r){let v=!1,p=[];for(let[g,h]of Object.entries(r))typeof h=="boolean"&&(v=!0),h===!0&&p.push(g);v&&(f["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(s=ne(s??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[v,...p]=s??[];if(!ke(v)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(d=>d.trim()).filter((d,c,j)=>j.indexOf(d)===c).sort((d,c)=>d.localeCompare(c)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let g=re((o=v.props)!=null?o:{},u,f),h=ye(v,g,!0);for(let d in g)d.startsWith("on")&&(h.props||(h.props={}),h.props[d]=g[d]);return h}return Array.isArray(s)&&s.length===1?s[0]:s}return I(i,Object.assign({},u,f),{default:()=>s})}function ne(e){return e.flatMap(t=>t.type===be?ne(t.children):[t])}function re(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let a in r)a.startsWith("on")&&typeof r[a]=="function"?(n[a]!=null||(n[a]=[]),n[a].push(r[a])):t[a]=r[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](a,...l){let o=n[r];for(let i of o){if(a instanceof Event&&a.defaultPrevented)return;i(a,...l)}}});return t}function ae(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function ke(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let le=Symbol("Context");var m=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(m||{});function Be(){return oe()!==null}function oe(){return B(le,null)}function Pe(e){F(le,e)}function He(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function V(){let e=[],t={addEventListener(n,r,a,l){return n.addEventListener(r,a,l),t.add(()=>n.removeEventListener(r,a,l))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return He(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,a){let l=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:a}),this.add(()=>{Object.assign(n.style,{[r]:l})})},group(n){let r=V();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let a of e.splice(r,1))a()}},dispose(){for(let n of e.splice(0))n()}};return t}function Me(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function N(e,...t){e&&t.length>0&&e.classList.add(...t)}function L(e,...t){e&&t.length>0&&e.classList.remove(...t)}var R=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(R||{});function Ne(e,t){let n=V();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:a}=getComputedStyle(e),[l,o]=[r,a].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,f)=>f-s);return u});return l!==0?n.setTimeout(()=>t("finished"),l+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function J(e,t,n,r,a,l){let o=V(),i=l!==void 0?Me(l):()=>{};return L(e,...a),N(e,...t,...n),o.nextFrame(()=>{L(e,...n),N(e,...r),o.add(Ne(e,u=>(L(e,...r,...t),N(e,...a),i(u))))}),o.add(()=>L(e,...t,...n,...r,...a)),o.add(()=>i("cancelled")),o.dispose}function E(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let q=Symbol("TransitionContext");var Re=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Re||{});function Ie(){return B(q,null)!==null}function Ue(){let e=B(q,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Ve(){let e=B(D,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let D=Symbol("NestingContext");function P(e){return"children"in e?P(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ie(e){let t=w([]),n=w(!1);T(()=>n.value=!0),K(()=>n.value=!1);function r(l,o=b.Hidden){let i=t.value.findIndex(({id:u})=>u===l);i!==-1&&(C(o,{[b.Unmount](){t.value.splice(i,1)},[b.Hidden](){t.value[i].state="hidden"}}),!P(t)&&n.value&&e?.())}function a(l){let o=t.value.find(({id:i})=>i===l);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:l,state:"visible"}),()=>r(l,b.Unmount)}return{children:t,register:a,unregister:r}}let se=ee.RenderStrategy,qe=U({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:a}){let l=w(0);function o(){l.value|=m.Opening,t("beforeEnter")}function i(){l.value&=~m.Opening,t("afterEnter")}function u(){l.value|=m.Closing,t("beforeLeave")}function s(){l.value&=~m.Closing,t("afterLeave")}if(!Ie()&&Be())return()=>I(ue,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:s},r);let f=w(null),v=A(()=>e.unmount?b.Unmount:b.Hidden);a({el:f,$el:f});let{show:p,appear:g}=Ue(),{register:h,unregister:d}=Ve(),c=w(p.value?"visible":"hidden"),j={value:!0},O=$e(),$={value:!1},W=ie(()=>{!$.value&&c.value!=="hidden"&&(c.value="hidden",d(O),s())});T(()=>{let y=h(O);K(y)}),k(()=>{if(v.value===b.Hidden&&O){if(p.value&&c.value!=="visible"){c.value="visible";return}C(c.value,{hidden:()=>d(O),visible:()=>h(O)})}});let Y=E(e.enter),z=E(e.enterFrom),de=E(e.enterTo),Q=E(e.entered),fe=E(e.leave),ce=E(e.leaveFrom),pe=E(e.leaveTo);T(()=>{k(()=>{if(c.value==="visible"){let y=Z(f);if(y instanceof Comment&&y.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ve(y){let H=j.value&&!g.value,_=Z(f);!_||!(_ instanceof HTMLElement)||H||($.value=!0,p.value&&o(),p.value||u(),y(p.value?J(_,Y,z,de,Q,x=>{$.value=!1,x===R.Finished&&i()}):J(_,fe,ce,pe,Q,x=>{$.value=!1,x===R.Finished&&(P(W)||(c.value="hidden",d(O),s()))})))}return T(()=>{we([p],(y,H,_)=>{ve(_),j.value=!1},{immediate:!0})}),F(D,W),Pe(A(()=>C(c.value,{visible:m.Open,hidden:m.Closed})|l.value)),()=>{let{appear:y,show:H,enter:_,enterFrom:x,enterTo:tt,entered:nt,leave:rt,leaveFrom:at,leaveTo:lt,...X}=e,he={ref:f},me={...X,...g.value&&p.value&&Ae.isServer?{class:Se([n.class,X.class,...Y,...z])}:{}};return te({theirProps:me,ourProps:he,slot:{},slots:r,attrs:n,features:se,visible:c.value==="visible",name:"TransitionChild"})}}}),De=qe,ue=U({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let a=oe(),l=A(()=>e.show===null&&a!==null?(a.value&m.Open)===m.Open:e.show);k(()=>{if(![!0,!1].includes(l.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=w(l.value?"visible":"hidden"),i=ie(()=>{o.value="hidden"}),u=w(!0),s={show:l,appear:A(()=>e.appear||!u.value)};return T(()=>{k(()=>{u.value=!1,l.value?o.value="visible":P(i)||(o.value="hidden")})}),F(D,i),F(q,s),()=>{let f=ae(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),v={unmount:e.unmount};return te({ourProps:{...v,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[I(De,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...v,...f},r.default)]},attrs:{},features:se,visible:o.value==="visible",name:"Transition"})}}});const We=U({__name:"PostCard",setup(e,{expose:t}){t();const n=w(!0);function r(){n.value=!1,setTimeout(()=>{n.value=!0},500)}const a={isShowing:n,resetIsShowing:r,get TransitionRoot(){return ue}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),Ye={class:"p-4"},ze=S("span",{class:"text-xl font-bold","th:text":"@{post.title}"},"Hello Halo",-1),Qe={class:"flex flex-col items-center py-16"},Xe={class:"h-32 w-32"},Ze=S("div",{class:"h-full w-full rounded-md bg-white shadow-lg"},null,-1),Ge=S("svg",{class:"h-5 w-5 opacity-70",fill:"none",viewBox:"0 0 20 20"},[S("path",{d:"M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7",stroke:"currentColor","stroke-width":"1.5"})],-1),Je=S("span",{class:"ml-3"},"Click to transition",-1),Ke=[Ge,Je];function et(e,t,n,r,a,l){return _e(),Ee("div",Ye,[ze,S("div",Qe,[S("div",Xe,[Oe(r.TransitionRoot,{show:r.isShowing,appear:"",as:"template",enter:"transform transition duration-[400ms]","enter-from":"opacity-0 rotate-[-120deg] scale-50","enter-to":"opacity-100 rotate-0 scale-100",leave:"transform duration-200 transition ease-in-out","leave-from":"opacity-100 rotate-0 scale-100 ","leave-to":"opacity-0 scale-95 "},{default:Te(()=>[Ze]),_:1},8,["show"])]),S("button",{class:"mt-8 flex transform items-center rounded-full bg-black bg-opacity-20 px-3 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-30 focus:outline-none active:bg-opacity-40",onClick:r.resetIsShowing},Ke)])])}const ut=ge(We,[["render",et]]);export{ut as default};