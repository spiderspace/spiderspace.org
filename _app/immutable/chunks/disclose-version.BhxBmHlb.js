import{e as H,N as q,q as x,C as G,i as P,b as K,T as Q,U as M,V as X,W as Z,X as j,c as z,p as J,a as ee,H as ne}from"./runtime.BgOnWdgt.js";function te(e){console.warn("hydration_mismatch")}const he=1,pe=2,ve=4,me=8,Ee=16,Te=64,ye=1,ge=2,Ie=4,Ce=8,we=1,Ae=2,Ne=4,k=1,re=2,A="[",U="]",ae="",Se=`${U}!`,N={},be=Symbol(),Re=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],oe=["touchstart","touchmove","touchend"],Oe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function De(e,n="exclude-on"){return e.endsWith("capture")?n=="exclude-on"?e!=="gotpointercapture"&&e!=="lostpointercapture":e!=="ongotpointercapture"&&e!=="onlostpointercapture":!1}let d=!1;function w(e){d=e}let v=null,s;function $(e){v=e,s=e&&e[0]}function R(){return s.previousSibling??s}function g(e){if(e.nodeType!==8)return e;var n=e;if(n.data!==A)return e;for(var t=[],o=0;(n=n.nextSibling)!==null;){if(n.nodeType===8){var r=n.data;if(r===A)o+=1;else if(r[0]===U){if(o===0)return v=t,s=t[0],n;o-=1}}t.push(n)}throw te(),N}var D,ie;function V(){if(D===void 0){D=window,ie=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function E(){return document.createTextNode("")}function Le(e){const n=e.firstChild;return d?n===null?e.appendChild(E()):g(n):n}function He(e,n){var a;if(!d){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}if(n&&(s==null?void 0:s.nodeType)!==3){var o=E(),r=H;return((a=r.nodes)==null?void 0:a.start)===s&&(r.nodes.start=o),s==null||s.before(o),o}return g(s)}function se(e,n=!1){var t=e.nextSibling;if(!d)return t;var o=t.nodeType;if(o===8&&t.data===ae)return se(t,n);if(n&&o!==3){var r=E();return t==null||t.before(r),r}return g(t)}function ue(e){e.textContent=""}function ce(e,n,t,o){function r(a){if(o.capture||y.call(n,a),!a.cancelBubble)return t.call(this,a)}return e.startsWith("pointer")||e==="wheel"?x(()=>{n.addEventListener(e,r,o)}):n.addEventListener(e,r,o),r}function Pe(e,n,t,o,r){var a={capture:o,passive:r},i=ce(e,n,t,a);(n===document.body||n===window||n===document)&&q(()=>{n.removeEventListener(e,i,a)})}function Me(e){for(var n=0;n<e.length;n++)Y.add(e[n]);for(var t of S)t(e)}function y(e){var O;var n=this,t=n.ownerDocument,o=e.type,r=((O=e.composedPath)==null?void 0:O.call(e))||[],a=r[0]||e.target,i=0,_=e.__root;if(_){var u=r.indexOf(_);if(u!==-1&&(n===document||n===window)){e.__root=n;return}var c=r.indexOf(n);if(c===-1)return;u<=c&&(i=u)}if(a=r[i]||e.target,a!==n){G(e,"currentTarget",{configurable:!0,get(){return a||t}});try{for(var m,l=[];a!==null;){var T=a.parentNode||a.host||null;try{var h=a["__"+o];if(h!==void 0&&!a.disabled)if(P(h)){var[I,...W]=h;I.apply(a,[e,...W])}else h.call(a,e)}catch(C){m?l.push(C):m=C}if(e.cancelBubble||T===n||T===null)break;a=T}if(m){for(let C of l)queueMicrotask(()=>{throw C});throw m}}finally{e.__root=n,a=n}}}let f;function le(){f=void 0}function ke(e){let n=null,t=d;var o;if(d){for(n=v,f===void 0&&(f=document.head.firstChild);f.nodeType!==8||f.data!==A;)f=f.nextSibling;f=g(f),f=f.nextSibling}else o=document.head.appendChild(E());try{K(()=>e(o),Q)}finally{t&&$(n)}}const Y=new Set,S=new Set;let L=!0;function Ue(e,n){(e.__t??(e.__t=e.nodeValue))!==n&&(e.nodeValue=e.__t=n)}function fe(e,n){const t=n.anchor??n.target.appendChild(E());return M(()=>B(e,{...n,anchor:t}),!1)}function $e(e,n){const t=n.target,o=v;try{return M(()=>{w(!0);for(var r=t.firstChild;r&&(r.nodeType!==8||r.data!==A);)r=r.nextSibling;if(!r)throw N;const a=g(r),i=B(e,{...n,anchor:a});return w(!1),i},!1)}catch(r){if(r===N)return n.recover===!1&&X(),V(),ue(t),w(!1),fe(e,n);throw r}finally{w(!!o),$(o),le()}}function B(e,{target:n,anchor:t,props:o={},events:r,context:a,intro:i=!1}){V();const _=new Set,u=l=>{for(let T=0;T<l.length;T++){const h=l[T],I=oe.includes(h);_.has(h)||(_.add(h),n.addEventListener(h,y,{passive:I}),document.addEventListener(h,y,{passive:I}))}};u(Z(Y)),S.add(u);let c;const m=j(()=>(z(()=>{if(a){J({});var l=ne;l.c=a}r&&(o.$$events=r),L=i,c=e(t,o)||{},L=!0,a&&ee()}),()=>{for(const l of _)n.removeEventListener(l,y),document.removeEventListener(l,y);S.delete(u),b.delete(c)}));return b.set(c,m),c}let b=new WeakMap;function Ve(e){const n=b.get(e);n==null||n()}function F(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Ye(e){if(P(e))for(var n=0;n<e.length;n++){var t=e[n];t.isConnected&&t.remove()}else e.isConnected&&e.remove()}function p(e,n){var t;(t=H).nodes??(t.nodes={start:e,end:n})}function Be(e,n){var t=(n&k)!==0,o=(n&re)!==0,r,a=!e.startsWith("<!>");return()=>{if(d)return p(R(),v[v.length-1]),s;r||(r=F(a?e:"<!>"+e),t||(r=r.firstChild));var i=o?document.importNode(r,!0):r.cloneNode(!0);if(t){var _=i.firstChild,u=i.lastChild;p(_,u)}else p(i,i);return i}}function Fe(e,n,t="svg"){var o=!e.startsWith("<!>"),r=(n&k)!==0,a=`<${t}>${o?e:"<!>"+e}</${t}>`,i;return()=>{if(d)return p(R(),v[v.length-1]),s;if(!i){var _=F(a),u=_.firstChild;if(r)for(i=document.createDocumentFragment();u.firstChild;)i.appendChild(u.firstChild);else i=u.firstChild}var c=i.cloneNode(!0);if(r){var m=c.firstChild,l=c.lastChild;p(m,l)}else p(c,c);return c}}function We(e){if(!d){var n=E();return p(n,n),n}var t=s;return t||e.before(t=E()),p(t,t),t}function qe(){if(d)return p(R(),v[v.length-1]),s;var e=document.createDocumentFragment(),n=document.createComment(""),t=E();return e.append(n,t),p(n,t),e}function xe(e,n){d||e.before(n)}const de="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);export{D as $,Oe as A,$e as B,fe as C,Re as D,me as E,Ve as F,qe as G,Se as H,We as I,Fe as J,L as K,Ae as L,Ne as M,p as N,R as O,Ie as P,F as Q,ke as R,Pe as S,we as T,be as U,ie as V,xe as a,se as b,Le as c,g as d,E as e,He as f,s as g,d as h,v as i,w as j,A as k,he as l,pe as m,Te as n,ue as o,Ee as p,ve as q,Ye as r,Ue as s,Be as t,ye as u,ge as v,Ce as w,De as x,ce as y,Me as z};