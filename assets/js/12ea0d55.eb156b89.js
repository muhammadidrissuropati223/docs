"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7417],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),k=n,d=u["".concat(i,".").concat(k)]||u[k]||m[k]||l;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},95254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={},o=void 0,s={unversionedId:"flow/flow-token/TODO",id:"flow/flow-token/TODO",title:"TODO",description:"User Personas",source:"@site/docs/flow/flow-token/TODO.md",sourceDirName:"flow/flow-token",slug:"/flow/flow-token/TODO",permalink:"/docs/flow/flow-token/TODO",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FLOW Token",permalink:"/docs/flow/flow-token/"},next:{title:"Flow Wallets",permalink:"/docs/flow/flow-token/available-wallets"}},i={},c=[{value:"User Personas",id:"user-personas",level:2},{value:"User Stories",id:"user-stories",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"user-personas"},"User Personas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Node Operator"),(0,n.kt)("li",{parentName:"ul"},"Custody Provider"),(0,n.kt)("li",{parentName:"ul"},"Wallet Provider"),(0,n.kt)("li",{parentName:"ul"},"Token Holder",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Existing Backer"),(0,n.kt)("li",{parentName:"ul"},"Coinlist Backer")))),(0,n.kt)("h2",{id:"user-stories"},"User Stories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Staking"),(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","I offer staking as a service - I want to run a node on my user's behalf"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","I'm an individual holding tokens who wants to run their own node "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","I'm a custody provider/wallet who wants to support my users who hold tokens in staking those tokens "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Holding Funds"),(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","As a ",(0,n.kt)("strong",{parentName:"li"},"custody provider/wallet provider"),", I want to receive token deposits on behalf of my users."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","As a ",(0,n.kt)("strong",{parentName:"li"},"custody provider/wallet provider"),", I want to transfer tokens on behalf of my users."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Acquiring Funds"),(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","As a ",(0,n.kt)("strong",{parentName:"li"},"user"),", I want to purchase FLOW."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","As a ",(0,n.kt)("strong",{parentName:"li"},"token holder/owner"),", I want to receive my purchased FLOW.")))))}m.isMDXComponent=!0}}]);