"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),p=o,b=s["".concat(l,".").concat(p)]||s[p]||f[p]||a;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="Resource Interface SwitchboardPublic",c={unversionedId:"flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_SwitchboardPublic",id:"flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_SwitchboardPublic",title:"Resource Interface SwitchboardPublic",description:"The interface that enforces the method to allow anyone to check on the",source:"@site/docs/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_SwitchboardPublic.md",sourceDirName:"flow/flow-ft/FungibleTokenSwitchboard",slug:"/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_SwitchboardPublic",permalink:"/docs/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_SwitchboardPublic",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Switchboard",permalink:"/docs/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard"},next:{title:"Fungible Token Standard",permalink:"/docs/flow/flow-ft/overview"}},l={},u=[{value:"Functions",id:"functions",level:2},{value:"fun <code>getVaultTypes()</code>",id:"fun-getvaulttypes",level:3},{value:"fun <code>deposit()</code>",id:"fun-deposit",level:3},{value:"fun <code>safeDeposit()</code>",id:"fun-safedeposit",level:3}],d={toc:u},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-interface-switchboardpublic"},"Resource Interface ",(0,o.kt)("inlineCode",{parentName:"h1"},"SwitchboardPublic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface SwitchboardPublic {\n}\n")),(0,o.kt)("p",null,"The interface that enforces the method to allow anyone to check on the\navailable capabilities of a switchboard resource and also exposes the\ndeposit methods to deposit funds on it."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"fun-getvaulttypes"},"fun ",(0,o.kt)("inlineCode",{parentName:"h3"},"getVaultTypes()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"func getVaultTypes(): [Type]\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fun-deposit"},"fun ",(0,o.kt)("inlineCode",{parentName:"h3"},"deposit()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"func deposit(from FungibleToken.Vault)\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fun-safedeposit"},"fun ",(0,o.kt)("inlineCode",{parentName:"h3"},"safeDeposit()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"func safeDeposit(from FungibleToken.Vault): FungibleToken.Vault?\n")),(0,o.kt)("hr",null))}f.isMDXComponent=!0}}]);