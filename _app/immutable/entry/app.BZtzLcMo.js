var V=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var a=(r,t,e)=>(V(r,t,"read from private field"),e?e.call(r):t.get(r)),P=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},R=(r,t,e,s)=>(V(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e);import{p as B,o as M,b as C}from"../chunks/index-client.DXKBetPF.js";import{b as N,c as Q,d as W,C as z,p as H,Q as J,K as X,a as Y,v as E,s as L,R as Z,f as O,t as $}from"../chunks/runtime.BgOnWdgt.js";import{B as tt,C as et,F as rt,G as I,a as g,t as q,f as k,b as j,s as st,c as nt,I as ot}from"../chunks/disclose-version.BhxBmHlb.js";import{p as S,i as T}from"../chunks/props.idIxh3S6.js";function A(r,t,e){let s,n;N(()=>{s!==(s=t())&&(n&&(W(n),n=null),s&&(n=Q(()=>e(r,s))))})}function at(r){return class extends it{constructor(t){super({component:r,...t})}}}var m,l;class it{constructor(t){P(this,m,void 0);P(this,l,void 0);const e=B({...t.props||{},$$events:{}},!1);R(this,l,(t.hydrate?tt:et)(t.component,{target:t.target,props:e,context:t.context,intro:t.intro,recover:t.recover})),R(this,m,e.$$events);for(const s of Object.keys(a(this,l)))s==="$set"||s==="$destroy"||s==="$on"||z(this,s,{get(){return a(this,l)[s]},set(n){a(this,l)[s]=n},enumerable:!0});a(this,l).$set=s=>{Object.assign(e,s)},a(this,l).$destroy=()=>{rt(a(this,l))}}$set(t){a(this,l).$set(t)}$on(t,e){a(this,m)[t]=a(this,m)[t]||[];const s=(...n)=>e.call(this,...n);return a(this,m)[t].push(s),()=>{a(this,m)[t]=a(this,m)[t].filter(n=>n!==s)}}$destroy(){a(this,l).$destroy()}}m=new WeakMap,l=new WeakMap;const ct="modulepreload",lt=function(r){return"/"+r},U={},w=function(t,e,s){let n=Promise.resolve();if(e&&e.length>0){const f=document.getElementsByTagName("link");n=Promise.all(e.map(o=>{if(o=lt(o),o in U)return;U[o]=!0;const h=o.endsWith(".css"),y=h?'[rel="stylesheet"]':"";if(!!s)for(let i=f.length-1;i>=0;i--){const c=f[i];if(c.href===o&&(!h||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${y}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":ct,h||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),h)return new Promise((i,c)=>{d.addEventListener("load",i),d.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})}))}return n.then(()=>t()).catch(f=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=f,window.dispatchEvent(o),!o.defaultPrevented)throw f})},yt={};var ut=q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ft=q("<!> <!>",1);function dt(r,t){H(t,!0);let e=S(t,"components",15,()=>B([])),s=S(t,"data_0",3,null),n=S(t,"data_1",3,null);J(()=>t.stores.page.set(t.page)),X(()=>{t.stores,t.page,t.constructors,e(),t.form,s(),n(),t.stores.page.notify()});let f=O(!1),o=O(!1),h=O(null);M(()=>{const i=t.stores.page.subscribe(()=>{E(f)&&(L(o,!0),Z().then(()=>{L(h,B(document.title||"untitled page"))}))});return L(f,!0),i});var y=ft(),x=k(y);T(x,()=>t.constructors[1],i=>{var c=I(),b=k(c);A(b,()=>t.constructors[0],(_,v)=>{C(v(_,{get data(){return s()},children:(u,mt)=>{var D=I(),F=k(D);A(F,()=>t.constructors[1],(G,K)=>{C(K(G,{get data(){return n()},get form(){return t.form}}),p=>e()[1]=p,()=>{var p;return(p=e())==null?void 0:p[1]})}),g(u,D)},$$slots:{default:!0}}),u=>e()[0]=u,()=>{var u;return(u=e())==null?void 0:u[0]})}),g(i,c)},i=>{var c=I(),b=k(c);A(b,()=>t.constructors[0],(_,v)=>{C(v(_,{get data(){return s()},get form(){return t.form}}),u=>e()[0]=u,()=>{var u;return(u=e())==null?void 0:u[0]})}),g(i,c)});var d=j(j(x,!0));T(d,()=>E(f),i=>{var c=ut(),b=nt(c);T(b,()=>E(o),_=>{var v=ot(_);$(()=>st(v,E(h))),g(_,v)}),g(i,c)}),g(r,y),Y()}const pt=at(dt),Et=[()=>w(()=>import("../nodes/0.CQ_-sAMj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),()=>w(()=>import("../nodes/1.DlPqHax2.js"),__vite__mapDeps([8,1,2,9,10,11])),()=>w(()=>import("../nodes/2.C7-cBZD2.js"),__vite__mapDeps([12,1,2,4,11,13,3,14,15])),()=>w(()=>import("../nodes/3.D7YkiC7W.js"),__vite__mapDeps([16,1,2,3,6,4,9,10,11,13,14,17]))],kt=[],wt={"/":[2],"/about":[3]},xt={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{wt as dictionary,xt as hooks,yt as matchers,Et as nodes,pt as root,kt as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/nodes/0.CQ_-sAMj.js","_app/immutable/chunks/disclose-version.BhxBmHlb.js","_app/immutable/chunks/runtime.BgOnWdgt.js","_app/immutable/chunks/props.idIxh3S6.js","_app/immutable/chunks/string.BXRLfCab.js","_app/immutable/chunks/index-client.DXKBetPF.js","_app/immutable/chunks/each.CA-rJixq.js","_app/immutable/assets/0.Qfe__dbf.css","_app/immutable/nodes/1.DlPqHax2.js","_app/immutable/chunks/stores.DmQoIY6_.js","_app/immutable/chunks/entry.C_VqT_Xq.js","_app/immutable/chunks/paths.C7ZkAQGS.js","_app/immutable/nodes/2.C7-cBZD2.js","_app/immutable/chunks/Header.D_hinRNJ.js","_app/immutable/assets/Header.BOh-ZbfQ.css","_app/immutable/assets/2.CANeccGV.css","_app/immutable/nodes/3.D7YkiC7W.js","_app/immutable/assets/3.CtexfuF9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}