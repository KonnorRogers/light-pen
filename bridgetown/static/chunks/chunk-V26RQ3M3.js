var c=Object.defineProperty,h=Object.defineProperties,O=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,_=(e,r)=>(r=Symbol[e])?r:Symbol.for("Symbol."+e),s=e=>{throw TypeError(e)},l=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,S=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&l(e,t,r[t]);if(f)for(var t of f(r))P.call(r,t)&&l(e,t,r[t]);return e},g=(e,r)=>h(e,d(r)),m=(e,r,t,o)=>{for(var a=o>1?void 0:o?O(r,t):r,n=e.length-1,i;n>=0;n--)(i=e[n])&&(a=(o?i(r,t,a):i(a))||a);return o&&a&&c(r,t,a),a},v=(e,r,t)=>r.has(e)||s("Cannot "+t),x=(e,r,t)=>(v(e,r,"read from private field"),t?t.call(e):r.get(e)),C=(e,r,t)=>r.has(e)?s("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),D=(e,r,t,o)=>(v(e,r,"write to private field"),o?o.call(e,t):r.set(e,t),t),y=function(e,r){this[0]=e,this[1]=r},E=e=>{var r=e[_("asyncIterator")],t=!1,o,a={};return r==null?(r=e[_("iterator")](),o=n=>a[n]=i=>r[n](i)):(r=r.call(e),o=n=>a[n]=i=>{if(t){if(t=!1,n==="throw")throw i;return i}return t=!0,{done:!1,value:new y(new Promise(w=>{var p=r[n](i);p instanceof Object||s("Object expected"),w(p)}),1)}}),a[_("iterator")]=()=>a,o("next"),"throw"in r?o("throw"):a.throw=n=>{throw n},"return"in r&&o("return"),a};export{S as a,g as b,m as c,x as d,C as e,D as f,E as g};
//# sourceMappingURL=/light-pen/bridgetown/static/chunks/chunk-V26RQ3M3.js.map
