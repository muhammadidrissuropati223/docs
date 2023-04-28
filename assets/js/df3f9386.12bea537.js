"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},o="Resource Vault",i={unversionedId:"flow/flow-ft/FungibleToken/FungibleToken_Vault",id:"flow/flow-ft/FungibleToken/FungibleToken_Vault",title:"Resource Vault",description:"The resource that contains the functions to send and receive tokens.",source:"@site/docs/flow/flow-ft/FungibleToken/FungibleToken_Vault.md",sourceDirName:"flow/flow-ft/FungibleToken",slug:"/flow/flow-ft/FungibleToken/FungibleToken_Vault",permalink:"/docs/flow/flow-ft/FungibleToken/FungibleToken_Vault",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Interface Receiver",permalink:"/docs/flow/flow-ft/FungibleToken/FungibleToken_Receiver"},next:{title:"Contract FungibleTokenMetadataViews",permalink:"/docs/flow/flow-ft/FungibleTokenMetadataViews/"}},u={},c=[{value:"Initializer",id:"initializer",level:3},{value:"Functions",id:"functions",level:2},{value:"fun <code>withdraw()</code>",id:"fun-withdraw",level:3},{value:"fun <code>deposit()</code>",id:"fun-deposit",level:3}],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resource-vault"},"Resource ",(0,a.kt)("inlineCode",{parentName:"h1"},"Vault")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource Vault {\n\n    balance:  UFix64\n}\n")),(0,a.kt)("p",null,"The resource that contains the functions to send and receive tokens.\nThe declaration of a concrete type in a contract interface means that\nevery Fungible Token contract that implements the FungibleToken interface\nmust define a concrete ",(0,a.kt)("inlineCode",{parentName:"p"},"Vault")," resource that conforms to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Receiver"),",\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"Balance")," interfaces, and declares their required fields and functions"),(0,a.kt)("p",null,"Implemented Interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Provider")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Receiver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Balance"))),(0,a.kt)("h3",{id:"initializer"},"Initializer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func init(balance UFix64)\n")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"fun-withdraw"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"withdraw()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func withdraw(amount UFix64): Vault\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fun-deposit"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"deposit()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func deposit(from Vault)\n")),(0,a.kt)("p",null,"Takes a Vault and deposits it into the implementing resource type"),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"from : ",(0,a.kt)("em",{parentName:"li"},"The Vault resource containing the funds that will be deposited"))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);