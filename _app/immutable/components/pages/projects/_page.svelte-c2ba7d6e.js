import{S as T,i as J,s as K,k as h,q as B,a as E,l as f,m as _,r as C,h as c,c as y,n as r,b as H,G as a,C as q,H as O,D as z,E as F,F as Q}from"../../../chunks/index-fc06971c.js";function L(g,l,i){const n=g.slice();return n[2]=l[i],n}function N(g){let l,i,n,k,x,d,v,j=g[2].name+"",I,P,b,p=g[2].description+"",w,s,e,o,t,u,D;return{c(){l=h("div"),i=h("a"),n=h("img"),x=E(),d=h("div"),v=h("h5"),I=B(j),P=E(),b=h("p"),w=B(p),s=E(),e=h("a"),o=B(`Read more
              `),t=z("svg"),u=z("path"),D=E(),this.h()},l(m){l=f(m,"DIV",{class:!0});var S=_(l);i=f(S,"A",{href:!0});var A=_(i);n=f(A,"IMG",{class:!0,src:!0,alt:!0}),A.forEach(c),x=y(S),d=f(S,"DIV",{class:!0});var V=_(d);v=f(V,"H5",{class:!0});var G=_(v);I=C(G,j),G.forEach(c),P=y(V),b=f(V,"P",{class:!0});var M=_(b);w=C(M,p),M.forEach(c),s=y(V),e=f(V,"A",{href:!0,class:!0});var R=_(e);o=C(R,`Read more
              `),t=F(R,"svg",{"aria-hidden":!0,class:!0,fill:!0,viewBox:!0,xmlns:!0});var W=_(t);u=F(W,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),_(u).forEach(c),W.forEach(c),R.forEach(c),V.forEach(c),S.forEach(c),D=y(m),this.h()},h(){r(n,"class","rounded-t-lg object-cover w-auto aspect-[9/5]"),Q(n.src,k="https://flowbite.com/docs/images/blog/image-4.jpg")||r(n,"src",k),r(n,"alt",""),r(i,"href",g[2].link),r(v,"class","mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),r(b,"class","mb-3 font-normal text-gray-700 dark:text-gray-400"),r(u,"fill-rule","evenodd"),r(u,"d","M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"),r(u,"clip-rule","evenodd"),r(t,"aria-hidden","true"),r(t,"class","w-4 h-4 ml-2 -mr-1"),r(t,"fill","currentColor"),r(t,"viewBox","0 0 20 20"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(e,"href",g[2].link),r(e,"class","inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"),r(d,"class","p-5"),r(l,"class","max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700")},m(m,S){H(m,l,S),a(l,i),a(i,n),a(l,x),a(l,d),a(d,v),a(v,I),a(d,P),a(d,b),a(b,w),a(d,s),a(d,e),a(e,o),a(e,t),a(t,u),H(m,D,S)},p:q,d(m){m&&c(l),m&&c(D)}}}function U(g){let l,i,n,k,x,d,v,j,I,P,b,p,w=g[0],s=[];for(let e=0;e<w.length;e+=1)s[e]=N(L(g,w,e));return{c(){l=h("div"),i=h("h1"),n=B("Projects"),k=E(),x=h("br"),d=E(),v=h("div"),j=B("Some things I have done"),I=E(),P=h("br"),b=E(),p=h("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){l=f(e,"DIV",{class:!0});var o=_(l);i=f(o,"H1",{class:!0});var t=_(i);n=C(t,"Projects"),t.forEach(c),k=y(o),x=f(o,"BR",{}),d=y(o),v=f(o,"DIV",{});var u=_(v);j=C(u,"Some things I have done"),u.forEach(c),I=y(o),P=f(o,"BR",{}),o.forEach(c),b=y(e),p=f(e,"DIV",{class:!0});var D=_(p);for(let m=0;m<s.length;m+=1)s[m].l(D);D.forEach(c),this.h()},h(){r(i,"class","text-3xl font-bold underline"),r(l,"class","text-left"),r(p,"class","grid grid-cols-3 gap-4")},m(e,o){H(e,l,o),a(l,i),a(i,n),a(l,k),a(l,x),a(l,d),a(l,v),a(v,j),a(l,I),a(l,P),H(e,b,o),H(e,p,o);for(let t=0;t<s.length;t+=1)s[t].m(p,null)},p(e,[o]){if(o&1){w=e[0];let t;for(t=0;t<w.length;t+=1){const u=L(e,w,t);s[t]?s[t].p(u,o):(s[t]=N(u),s[t].c(),s[t].m(p,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=w.length}},i:q,o:q,d(e){e&&c(l),e&&c(b),e&&c(p),O(s,e)}}}function X(g,l,i){let{data:n}=l,k=[{name:"Personal Website",description:"This website! Still a work in progress. Will want to add features!",link:"/"},{name:"Not Pseudocode",description:"Allows you to run Pseudocode following Cambridge's Standards",link:"https://hackin7.github.io/not-pseudocode/"}];return g.$$set=x=>{"data"in x&&i(1,n=x.data)},[k,n]}class Z extends T{constructor(l){super(),J(this,l,X,U,K,{data:1})}}export{Z as default};