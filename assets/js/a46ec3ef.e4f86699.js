"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2586],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Imports"},l=void 0,c={unversionedId:"cadence/language/imports",id:"cadence/language/imports",title:"Imports",description:"Programs can import declarations (types, functions, variables, etc.) from other programs.",source:"@site/docs/cadence/language/imports.mdx",sourceDirName:"cadence/language",slug:"/cadence/language/imports",permalink:"/docs/cadence/language/imports",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Imports"},sidebar:"tutorialSidebar",previous:{title:"glossary",permalink:"/docs/cadence/language/glossary"},next:{title:"Interfaces",permalink:"/docs/cadence/language/interfaces"}},i={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Programs can import declarations (types, functions, variables, etc.) from other programs."),(0,o.kt)("p",null,"Imports are declared using the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," keyword."),(0,o.kt)("p",null,"It can either be followed by a location, which imports all declarations;\nor it can be followed by the names of the declarations that should be imported,\nfollowed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," keyword, and then followed by the location."),(0,o.kt)("p",null,"If importing a local file, the location is a string literal, and the path to the file.\nDeployment of code with file imports requires the usage for the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.flow.com/flow-cli"},"Flow CLI"),"."),(0,o.kt)("p",null,"If importing an external type in a different account,\nthe location is an address literal, and the address\nof the account where the declarations are deployed to and published."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'// Import the type `Counter` from a local file.\n//\nimport Counter from "./examples/counter.cdc"\n\n// Import the type `Counter` from an external account.\n//\nimport Counter from 0x299F20A29311B9248F12\n')))}d.isMDXComponent=!0}}]);