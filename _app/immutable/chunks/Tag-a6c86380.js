import{S as d,i as g,s as m,k as f,q as p,l as h,m as y,r as v,h as o,n as b,b as _,G as x,u as C,C as l}from"./index-91060271.js";function P(n){let e,a;return{c(){e=f("div"),a=p(n[0]),this.h()},l(t){e=h(t,"DIV",{class:!0});var r=y(e);a=v(r,n[0]),r.forEach(o),this.h()},h(){b(e,"class",`text-sm inline-flex items-center font-bold leading-sm uppercase 
    px-3 py-1 ${n[1]} text-gray-800 rounded-full my-1 capitalize mr-1`)},m(t,r){_(t,e,r),x(e,a)},p(t,[r]){r&1&&C(a,t[0])},i:l,o:l,d(t){t&&o(e)}}}let c={event:["Team Project","Personal Project","Event","School Project"],usage:["Deployed","Award Winning","Highlight"],type:["IoT","Electronics","3D Printing","Web","App Dev","Android","Unity","React Native","Machine Learning","Computer Vision"]};function i(n){for(let e in c)if(c[e].includes(n))return e;return""}let A={"":"bg-amber-300",event:"bg-green-300",usage:"bg-red-300",type:"bg-blue-300"},u=["usage","type","","event"];function D(n,e){let a=i(n),t=i(e);return a==t?0:u.indexOf(a)>u.indexOf(t)?1:-1}function j(n){let e=n;return e.sort(D),e}function S(n,e,a){let{name:t}=e,r=A[i(t)];return n.$$set=s=>{"name"in s&&a(0,t=s.name)},[t,r]}class E extends d{constructor(e){super(),g(this,e,S,P,m,{name:0})}}export{E as T,D as a,i as b,j as t};
