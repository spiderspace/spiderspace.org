var Xn=Array.isArray,nt=Array.from,tt=Object.isFrozen,rt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,qn=Object.getOwnPropertyDescriptors,ut=Object.prototype,lt=Array.prototype,Cn=Object.getPrototypeOf;function st(n){return typeof n=="function"}const ot=()=>{};function Dn(n){for(var t=0;t<n.length;t++)n[t]()}const x=2,tn=4,C=8,rn=16,y=32,$=64,T=128,L=256,E=512,d=1024,D=2048,q=4096,R=8192,Rn=16384,en=32768,it=65536,bn=1<<18,W=Symbol("$state"),ft=Symbol("$state.frozen"),at=Symbol("");function un(n){return n===this.v}function Nn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function ln(n){return!Nn(n,this.v)}function jn(n){throw new Error("effect_in_teardown")}function Mn(){throw new Error("effect_in_unowned_derived")}function Ln(n){throw new Error("effect_orphan")}function Yn(){throw new Error("effect_update_depth_exceeded")}function _t(){throw new Error("hydration_failed")}function ct(n){throw new Error("props_invalid_value")}function In(){throw new Error("state_unsafe_mutation")}function sn(n){return{f:0,v:n,reactions:null,equals:un,version:0}}function vt(n){var r;const t=sn(n);return t.equals=ln,i!==null&&i.l!==null&&((r=i.l).s??(r.s=[])).push(t),t}function pt(n,t){return a!==null&&z()&&a.f&x&&In(),n.equals(t)||(n.v=t,n.version=gn(),on(n,d),z()&&f!==null&&f.f&E&&!(f.f&y)&&(c!==null&&c.includes(n)?(h(f,d),H(f)):m===null?$n([n]):m.push(n))),t}function on(n,t){var r=n.reactions;if(r!==null)for(var e=z(),l=r.length,u=0;u<l;u++){var s=r[u],o=s.f;o&d||!e&&s===f||(h(s,t),o&(E|T)&&(o&x?on(s,D):H(s)))}}function fn(n){f===null&&a===null&&Ln(),a!==null&&a.f&T&&Mn(),G&&jn()}function Z(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function b(n,t,r,e=!0){var l=(n&$)!==0,u={ctx:i,deps:null,nodes:null,f:n|d,first:null,fn:t,last:null,next:null,parent:l?null:f,prev:null,teardown:null,transitions:null,version:0};if(r){var s=A;try{J(!0),B(u),u.f|=Rn}catch(_){throw I(u),_}finally{J(s)}}else t!==null&&H(u);var o=r&&u.deps===null&&u.first===null&&u.nodes===null&&u.teardown===null;return!o&&!l&&e&&(f!==null&&Z(u,f),a!==null&&a.f&x&&Z(u,a)),u}function ht(n){const t=b(C,null,!1);return h(t,E),t.teardown=n,t}function wt(n){fn();var t=f!==null&&(f.f&C)!==0&&i!==null&&!i.m;if(t){var r=i;(r.e??(r.e=[])).push(n)}else{var e=an(n);return e}}function Et(n){return fn(),_n(n)}function yt(n){const t=b($,n,!0);return()=>{I(t)}}function an(n){return b(tn,n,!1)}function _n(n){return b(C,n,!0)}function mt(n){return _n(n)}function dt(n,t=0){return b(C|rn|t,n,!0)}function gt(n,t=!0){return b(C|y,n,!0,t)}function cn(n){var t=n.teardown;if(t!==null){const r=G,e=a;Q(!0),X(null);try{t.call(null)}finally{Q(r),X(e)}}}function I(n,t=!0){var r=!1;if((t||n.f&bn)&&n.nodes!==null){for(var e=n.nodes.start,l=n.nodes.end;e!==null;){var u=e===l?null:e.nextSibling;e.remove(),e=u}r=!0}if(V(n,t&&!r),P(n,0),h(n,R),n.transitions)for(const o of n.transitions)o.stop();cn(n);var s=n.parent;s!==null&&n.f&y&&s.first!==null&&vn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function vn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function xt(n,t){var r=[];pn(n,r,!0),Pn(r,()=>{I(n),t&&t()})}function Pn(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function pn(n,t,r){if(!(n.f&q)){if(n.f^=q,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var e=n.first;e!==null;){var l=e.next,u=(e.f&en)!==0||(e.f&y)!==0;pn(e,t,u?r:!1),e=l}}}function Tt(n){hn(n,!0)}function hn(n,t){if(n.f&q){n.f^=q,j(n)&&B(n);for(var r=n.first;r!==null;){var e=r.next,l=(r.f&en)!==0||(r.f&y)!==0;hn(r,l?t:!1),r=e}if(n.transitions!==null)for(const u of n.transitions)(u.is_global||t)&&u.in()}}let Y=!1,U=[];function wn(){Y=!1;const n=U.slice();U=[],Dn(n)}function kt(n){Y||(Y=!0,queueMicrotask(wn)),U.push(n)}function Bn(){Y&&wn()}function Hn(n){let t=x|d;f===null&&(t|=T);const r={deps:null,deriveds:null,equals:un,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(a!==null&&a.f&x){var e=a;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function Ot(n){const t=Hn(n);return t.equals=ln,t}function En(n){V(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)Un(t[r])}}function yn(n){En(n);var t=xn(n),r=(S||n.f&T)&&n.deps!==null?D:E;h(n,r),n.equals(t)||(n.v=t,n.version=gn())}function Un(n){En(n),P(n,0),h(n,R),n.first=n.last=n.deps=n.reactions=n.fn=null}function zn(n){throw new Error("lifecycle_outside_component")}const mn=0,Kn=1;let M=mn,N=!1,A=!1,G=!1;function J(n){A=n}function Q(n){G=n}let g=[],F=0,a=null;function X(n){a=n}let f=null,c=null,v=0,m=null;function $n(n){m=n}let dn=0,S=!1,i=null;function gn(){return dn++}function z(){return i!==null&&i.l===null}function j(n){var s,o;var t=n.f;if(t&d)return!0;if(t&D){var r=n.deps;if(r!==null){var e=(t&T)!==0,l;if(t&L){for(l=0;l<r.length;l++)((s=r[l]).reactions??(s.reactions=[])).push(n);n.f^=L}for(l=0;l<r.length;l++){var u=r[l];if(j(u)&&yn(u),u.version>n.version)return!0;e&&!S&&!((o=u==null?void 0:u.reactions)!=null&&o.includes(n))&&(u.reactions??(u.reactions=[])).push(n)}}h(n,E)}return!1}function Gn(n,t,r){throw n}function xn(n){var t=c,r=v,e=m,l=a,u=S;c=null,v=0,m=null,a=n.f&(y|$)?null:n,S=!A&&(n.f&T)!==0;try{var s=(0,n.fn)(),o=n.deps;if(c!==null){var _,p;if(o!==null){var k=v===0?c:o.slice(0,v).concat(c),O=k.length>16?new Set(k):null;for(p=v;p<o.length;p++)_=o[p],(O!==null?!O.has(_):!k.includes(_))&&Tn(n,_)}if(o!==null&&v>0)for(o.length=v+c.length,p=0;p<c.length;p++)o[v+p]=c[p];else n.deps=o=c;if(!S)for(p=v;p<o.length;p++){_=o[p];var w=_.reactions;w===null?_.reactions=[n]:w[w.length-1]!==n&&!w.includes(n)&&w.push(n)}}else o!==null&&v<o.length&&(P(n,v),o.length=v);return s}finally{c=t,v=r,m=e,a=l,S=u}}function Tn(n,t){const r=t.reactions;let e=0;if(r!==null){e=r.length-1;const l=r.indexOf(n);l!==-1&&(e===0?t.reactions=null:(r[l]=r[e],r.pop()))}e===0&&t.f&x&&(h(t,D),t.f&(T|L)||(t.f^=L),P(t,0))}function P(n,t){var r=n.deps;if(r!==null)for(var e=t===0?null:r.slice(0,t),l=new Set,u=t;u<r.length;u++){var s=r[u];l.has(s)||(l.add(s),(e===null||!e.includes(s))&&Tn(n,s))}}function V(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;I(r,t),r=e}}function B(n){var t=n.f;if(!(t&R)){h(n,E);var r=n.ctx,e=f,l=i;f=n,i=r;try{t&rn||V(n),cn(n);var u=xn(n);n.teardown=typeof u=="function"?u:null,n.version=dn}catch(s){Gn(s)}finally{f=e,i=l}}}function kn(){F>1e3&&(F=0,Yn()),F++}function On(n){var t=n.length;if(t!==0){kn();var r=A;A=!0;try{for(var e=0;e<t;e++){var l=n[e];if(l.first===null&&!(l.f&y))nn([l]);else{var u=[];Sn(l,u),nn(u)}}}finally{A=r}}}function nn(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(R|q))&&j(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes===null&&(e.teardown===null?vn(e):e.fn=null))}}function Vn(){if(N=!1,F>1001)return;const n=g;g=[],On(n),N||(F=0)}function H(n){M===mn&&(N||(N=!0,queueMicrotask(Vn)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&y){if(!(r&E))return;h(t,D)}}g.push(t)}function Sn(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,u=(l&(R|q))===0,s=l&y,o=(l&E)!==0,_=r.first;if(u&&(!s||!o)){if(s&&h(r,E),l&C){if(!s&&j(r)&&(B(r),_=r.first),_!==null){r=_;continue}}else if(l&tn)if(s||o){if(_!==null){r=_;continue}}else e.push(r)}var p=r.next;if(p===null){let w=r.parent;for(;w!==null;){if(n===w)break n;var k=w.next;if(k!==null){r=k;continue n}w=w.parent}}r=p}for(var O=0;O<e.length;O++)_=e[O],t.push(_),Sn(_,t)}function An(n,t=!0){var r=M,e=g;try{kn();const u=[];M=Kn,g=u,N=!1,t&&On(e);var l=n==null?void 0:n();return Bn(),(g.length>0||u.length>0)&&An(),F=0,l}finally{M=r,g=e}}async function St(){await Promise.resolve(),An()}function Wn(n){var t=n.f;if(t&R)return n.v;if(a!==null){var r=a.deps;c===null&&r!==null&&r[v]===n?v++:(r===null||v===0||r[v-1]!==n)&&(c===null?c=[n]:c[c.length-1]!==n&&c.push(n)),m!==null&&f!==null&&f.f&E&&!(f.f&y)&&m.includes(n)&&(h(f,d),H(f))}if(t&x){var e=n;j(e)&&yn(e)}return n.v}function At(n){const t=a;try{return a=null,n()}finally{a=t}}const Zn=~(d|D|E);function h(n,t){n.f=n.f&Zn|t}function Jn(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function Ft(n){return Fn().get(n)}function qt(n,t){return Fn().set(n,t),t}function Fn(n){return i===null&&zn(),i.c??(i.c=new Map(Qn(i)||void 0))}function Qn(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Ct(n,t=!1,r){i={p:i,c:null,e:null,m:!1,s:n,x:null,l:null},t||(i.l={s:null,u:null,r1:[],r2:sn(!1)})}function Dt(n){const t=i;if(t!==null){n!==void 0&&(t.x=n);const e=t.e;if(e!==null){t.e=null;for(var r=0;r<e.length;r++)an(e[r])}i=t.p,t.m=!0}return n||{}}function Rt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(W in n)K(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&W in r&&K(r)}}}function K(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{K(n[e],t)}catch{}const r=Cn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=qn(r);for(let l in e){const u=e[l].get;if(u)try{u.call(n)}catch{}}}}}function bt(n){return Jn(n)?Wn(n):n}export{Rt as $,ut as A,lt as B,rt as C,Cn as D,en as E,an as F,_n as G,i as H,q as I,zn as J,wt as K,it as L,ot as M,ht as N,at as O,qn as P,Et as Q,St as R,ft as S,bn as T,An as U,_t as V,nt as W,yt as X,rn as Y,Rn as Z,bt as _,Dt as a,qt as a0,Ft as a1,Nn as a2,dt as b,gt as c,xt as d,f as e,sn as f,pn as g,Pn as h,Xn as i,I as j,tt as k,W as l,vt as m,et as n,ct as o,Ct as p,kt as q,Tt as r,pt as s,mt as t,ln as u,Wn as v,At as w,Hn as x,Ot as y,st as z};