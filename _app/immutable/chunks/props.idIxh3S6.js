import{b as L,r as R,c as b,d as y,E as N,n as D,o as q,L as j,u as x,v as p,s as U,w as Y,x as w,y as z,m as C,z as h}from"./runtime.BgOnWdgt.js";import{h as F,H,r as M,j as A,i as $,P as k,u as B,v as G,w as K}from"./disclose-version.BhxBmHlb.js";function Q(a,n,r,e=null,d=!1){var s=null,u=null,i=null,f=d?N:0;L(()=>{if(i===(i=!!n()))return;let l=!1;if(F){const v=a.data===H;i===v&&(M($),A(!1),l=!0)}i?(s?R(s):s=b(()=>r(a)),u&&y(u,()=>{u=null})):(u?R(u):e&&(u=b(()=>e(a))),s&&y(s,()=>{s=null})),l&&A(!0)},f)}const V={get(a,n){let r=a.props.length;for(;r--;){let e=a.props[r];if(h(e)&&(e=e()),typeof e=="object"&&e!==null&&n in e)return e[n]}},getOwnPropertyDescriptor(a,n){let r=a.props.length;for(;r--;){let e=a.props[r];if(h(e)&&(e=e()),typeof e=="object"&&e!==null&&n in e)return D(e,n)}},has(a,n){for(let r of a.props)if(h(r)&&(r=r()),r!=null&&n in r)return!0;return!1},ownKeys(a){const n=[];for(let r of a.props){h(r)&&(r=r());for(const e in r)n.includes(e)||n.push(e)}return n}};function W(...a){return new Proxy({props:a},V)}function X(a,n,r,e){var g;var d=(r&B)!==0,s=(r&G)!==0,u=(r&K)!==0,i=a[n],f=(g=D(a,n))==null?void 0:g.set,l=e,v=!0,E=()=>(u&&v&&(v=!1,l=Y(e)),l);i===void 0&&e!==void 0&&(f&&s&&q(),i=E(),f&&f(i));var o;if(s)o=()=>{var t=a[n];return t===void 0?E():(v=!0,t)};else{var S=(d?w:z)(()=>a[n]);S.f|=j,o=()=>{var t=p(S);return t!==void 0&&(l=void 0),t===void 0?l:t}}if(!(r&k))return o;if(f){var O=a.$$legacy;return function(t,_){return arguments.length>0?((!s||!_||O)&&f(_?o():t),t):o()}}var P=!1,m=C(i),c=w(()=>{var t=o(),_=p(m);return P?(P=!1,_):m.v=t});return d||(c.equals=x),function(t,_){var T=p(c);if(arguments.length>0){const I=_?p(c):t;return c.equals(I)||(P=!0,U(m,I),p(c)),t}return T}}export{Q as i,X as p,W as s};