var V=(n,t,s)=>{if(!t.has(n))throw TypeError("Cannot "+s)};var l=(n,t,s)=>(V(n,t,"read from private field"),s?s.call(n):t.get(n)),C=(n,t,s)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,s)},L=(n,t,s,a)=>(V(n,t,"write to private field"),a?a.call(n,s):t.set(n,s),s);import{b as J,c as K,d as N,v as g,s as x,C as Q,m as W,p as z,Q as H,K as X,a as Y,R as Z,f as O,t as $}from"../chunks/runtime.DGcgR5j2.js";import{h as B,g as tt,k as et,C as rt,F as st,G as nt,f as k,I,a as v,s as j,t as U,c as at,J as ot,b as it,r as ct}from"../chunks/disclose-version.BSZ2CqxT.js";import{p as S,i as T}from"../chunks/props.e15Klagy.js";import{o as lt,p as ut,b as p}from"../chunks/index-client.DIvl885s.js";function A(n,t,s){B&&tt();var a=n,o,r;J(()=>{o!==(o=t())&&(r&&(N(r),r=null),o&&(r=K(()=>s(a,o))))}),B&&(a=et)}function ft(n){return class extends dt{constructor(t){super({component:n,...t})}}}var m,f;class dt{constructor(t){C(this,m,void 0);C(this,f,void 0);var s=new Map,a=(r,e)=>{var i=W(e);return s.set(r,i),i};const o=new Proxy({...t.props||{},$$events:{}},{get(r,e){return g(s.get(e)??a(e,Reflect.get(r,e)))},has(r,e){return g(s.get(e)??a(e,Reflect.get(r,e))),Reflect.has(r,e)},set(r,e,i){return x(s.get(e)??a(e,i),i),Reflect.set(r,e,i)}});L(this,f,(t.hydrate?rt:st)(t.component,{target:t.target,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),L(this,m,o.$$events);for(const r of Object.keys(l(this,f)))r==="$set"||r==="$destroy"||r==="$on"||Q(this,r,{get(){return l(this,f)[r]},set(e){l(this,f)[r]=e},enumerable:!0});l(this,f).$set=r=>{Object.assign(o,r)},l(this,f).$destroy=()=>{nt(l(this,f))}}$set(t){l(this,f).$set(t)}$on(t,s){l(this,m)[t]=l(this,m)[t]||[];const a=(...o)=>s.call(this,...o);return l(this,m)[t].push(a),()=>{l(this,m)[t]=l(this,m)[t].filter(o=>o!==a)}}$destroy(){l(this,f).$destroy()}}m=new WeakMap,f=new WeakMap;const ht="modulepreload",mt=function(n){return"/"+n},M={},w=function(t,s,a){let o=Promise.resolve();if(s&&s.length>0){const r=document.getElementsByTagName("link");o=Promise.all(s.map(e=>{if(e=mt(e),e in M)return;M[e]=!0;const i=e.endsWith(".css"),E=i?'[rel="stylesheet"]':"";if(!!a)for(let u=r.length-1;u>=0;u--){const c=r[u];if(c.href===e&&(!i||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${E}`))return;const h=document.createElement("link");if(h.rel=i?"stylesheet":ht,i||(h.as="script",h.crossOrigin=""),h.href=e,document.head.appendChild(h),i)return new Promise((u,c)=>{h.addEventListener("load",u),h.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})}))}return o.then(()=>t()).catch(r=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r})},xt={};var _t=U('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),vt=U("<!> <!>",1);function gt(n,t){z(t,!0);let s=S(t,"components",15,()=>[]),a=S(t,"data_0",3,null),o=S(t,"data_1",3,null);H(()=>t.stores.page.set(t.page)),X(()=>{t.stores,t.page,t.constructors,s(),t.form,a(),o(),t.stores.page.notify()});let r=O(!1),e=O(!1),i=O(null);lt(()=>{const u=t.stores.page.subscribe(()=>{g(r)&&(x(e,!0),Z().then(()=>{x(i,ut(document.title||"untitled page"))}))});return x(r,!0),u});var E=vt(),P=k(E);T(P,()=>t.constructors[1],u=>{var c=I(),y=k(c);A(y,()=>t.constructors[0],(b,_)=>{p(_(b,{get data(){return a()},children:(d,yt)=>{var D=I(),q=k(D);A(q,()=>t.constructors[1],(F,G)=>{p(G(F,{get data(){return o()},get form(){return t.form}}),R=>s()[1]=R,()=>{var R;return(R=s())==null?void 0:R[1]})}),v(d,D)},$$slots:{default:!0}}),d=>s()[0]=d,()=>{var d;return(d=s())==null?void 0:d[0]})}),v(u,c)},u=>{var c=I(),y=k(c);A(y,()=>t.constructors[0],(b,_)=>{p(_(b,{get data(){return a()},get form(){return t.form}}),d=>s()[0]=d,()=>{var d;return(d=s())==null?void 0:d[0]})}),v(u,c)});var h=j(j(P,!0));T(h,()=>g(r),u=>{var c=_t(),y=at(c);T(y,()=>g(e),b=>{var _=ot();$(()=>it(_,g(i))),v(b,_)}),ct(c),v(u,c)}),v(n,E),Y()}const Pt=ft(gt),Ct=[()=>w(()=>import("../nodes/0.D4SgCQfA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),()=>w(()=>import("../nodes/1.DudKVC16.js"),__vite__mapDeps([8,1,2,9,10,11])),()=>w(()=>import("../nodes/2.CXCz-WUj.js"),__vite__mapDeps([12,1,2,4,11,13,3,14,15])),()=>w(()=>import("../nodes/3.DpYJXwvi.js"),__vite__mapDeps([16,1,2,3,6,4,9,10,11,13,14,17]))],Lt=[],Ot={"/":[2],"/about":[3]},It={handleError:({error:n})=>{console.error(n)},reroute:()=>{}};export{Ot as dictionary,It as hooks,xt as matchers,Ct as nodes,Pt as root,Lt as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/nodes/0.D4SgCQfA.js","_app/immutable/chunks/disclose-version.BSZ2CqxT.js","_app/immutable/chunks/runtime.DGcgR5j2.js","_app/immutable/chunks/props.e15Klagy.js","_app/immutable/chunks/string.Bu0XJn_s.js","_app/immutable/chunks/index-client.DIvl885s.js","_app/immutable/chunks/each.CoINgwkx.js","_app/immutable/assets/0.BK47PZt5.css","_app/immutable/nodes/1.DudKVC16.js","_app/immutable/chunks/stores.BbsSGMtk.js","_app/immutable/chunks/entry.FgB1UXkl.js","_app/immutable/chunks/paths.CSqgL0Z2.js","_app/immutable/nodes/2.CXCz-WUj.js","_app/immutable/chunks/Header.hzOgu4s0.js","_app/immutable/assets/Header.BOh-ZbfQ.css","_app/immutable/assets/2.CANeccGV.css","_app/immutable/nodes/3.DpYJXwvi.js","_app/immutable/assets/3.CtexfuF9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
