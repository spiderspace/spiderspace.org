import{b as $,E as D,c as B,j as C,q as L,O as R,D as A,P as W}from"./runtime.DGcgR5j2.js";import{h as _,k as q,y as F,z as E,A as I,B as M,D as S}from"./disclose-version.Bb4Q7r27.js";function J(s,t,...i){var r=s,n,c;$(()=>{n!==(n=t())&&(c&&(C(c),c=null),n&&(c=B(()=>n(r,...i))))},D),_&&(r=q)}function j(s,t){if(t){const i=document.body;s.autofocus=!0,L(()=>{document.activeElement===i&&s.focus()})}}function k(s,t,i){i=i==null?null:i+"";var r=s.__attributes??(s.__attributes={});_&&(r[t]=s.getAttribute(t),t==="src"||t==="href"||t==="srcset")||r[t]!==(r[t]=i)&&(t==="loading"&&(s[R]=i),i===null?s.removeAttribute(t):s.setAttribute(t,i))}function K(s,t,i,r,n){var c=n.length!==0,e=t||{},P=s.tagName==="OPTION";for(var g in t)g in i||(i[g]=null);c&&!i.class&&(i.class="");var h=T.get(s.nodeName);h||T.set(s.nodeName,h=G(s));var w=s.__attributes??(s.__attributes={}),p=[];for(const a in i){let f=i[a];if(P&&a==="value"&&f==null){s.value=s.__value="",e[a]=f;continue}var y=e[a];if(f!==y){e[a]=f;var d=a[0]+a[1];if(d!=="$$")if(d==="on"){const l={},v="$$"+a;let u=a.slice(2);var N=S.includes(u);if(F(u)&&(u=u.slice(0,-7),l.capture=!0),!N&&y){if(f!=null)continue;s.removeEventListener(u,e[v],l),e[v]=null}if(f!=null)if(N)s[`__${u}`]=f,I([u]);else{let b=function(O){e[a].call(this,O)};t?e[v]=E(u,s,b,l):p.push([a,f,()=>e[v]=E(u,s,b,l)])}}else if(f==null)w[a]=null,s.removeAttribute(a);else if(a==="style")s.style.cssText=f+"";else if(a==="autofocus")j(s,!!f);else if(a==="__value"||a==="value")s.value=s[a]=s.__value=f;else{var o=a;r&&(o=o.toLowerCase(),o=M[o]||o),h.includes(o)?_&&(o==="src"||o==="href"||o==="srcset")||(s[o]=f):typeof f!="function"&&(c&&o==="class"&&(f&&(f+=" "),f+=n),k(s,o,f))}}}return t||L(()=>{if(s.isConnected)for(const[a,f,l]of p)e[a]===f&&l()}),e}var z=["width","height"],T=new Map;function G(s){for(var t=[],i,r=A(s);r.constructor.name!=="Element";){i=W(r);for(var n in i)i[n].set&&!z.includes(n)&&t.push(n);r=A(r)}return t}function Q(s,t){var i=s.__className,r=V(t);_&&s.className===r?s.__className=r:(i!==r||_&&s.className!==r)&&(t==null?s.removeAttribute("class"):s.className=r,s.__className=r)}function V(s){return s??""}function U(s,t,i){i?s.classList.add(t):s.classList.remove(t)}function X(s,t,i,r){const n=s.style,c=n.getPropertyValue(t);i==null?c!==""&&n.removeProperty(t):c!==i&&n.setProperty(t,i,r?"important":"")}const Z=(s,t)=>!t||!s.startsWith(t)?s:s.substring(t.length),x=(s,t)=>!t||!s.endsWith(t)?s:s.substring(0,s.length-t.length),m=(s,t)=>s.endsWith(t)?s:s+t;export{x as a,K as b,X as c,k as d,m as e,J as f,Q as g,Z as s,U as t};