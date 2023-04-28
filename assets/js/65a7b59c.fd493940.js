"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4126],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(i),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return i?n.createElement(m,l(l({ref:t},p),{},{components:i})):n.createElement(m,l({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},72727:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const o={title:"Flow Mobile Overview"},l=void 0,r={unversionedId:"mobile/index",id:"mobile/index",title:"Flow Mobile Overview",description:"Building mobile native applications that interact with the blockchain enables a much richer end user experiences and provides access to OS capabilities. With Flow Mobile, developers can build native applications for iOS and Android leveraging SDKs and mobile wallets.",source:"@site/docs/mobile/index.md",sourceDirName:"mobile",slug:"/mobile/",permalink:"/docs/mobile/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Flow Mobile Overview"},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/docs/intro"},next:{title:"Get Started with Flow Mobile",permalink:"/docs/mobile/get-started"}},s={},c=[{value:"Why Flow",id:"why-flow",level:2},{value:"Why Flow Mobile",id:"why-flow-mobile",level:2},{value:"Proven",id:"proven",level:3},{value:"Best-in-class UX",id:"best-in-class-ux",level:3},{value:"Security first",id:"security-first",level:3},{value:"Smart contract language inspired by mobile languages",id:"smart-contract-language-inspired-by-mobile-languages",level:2},{value:"What is available",id:"what-is-available",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Building mobile native applications that interact with the blockchain enables a much richer end user experiences and provides access to OS capabilities. With Flow Mobile, developers can build native applications for iOS and Android leveraging SDKs and mobile wallets."),(0,a.kt)("h2",{id:"why-flow"},"Why Flow"),(0,a.kt)("p",null,"Millions of users with Flow accounts are exploring the ecosystem and looking for applications. Most of these users purchased Flow NFTs and are comfortable with web3 principles. "),(0,a.kt)("p",null,"In addition to the existing userbase, developers can tap into smart contracts deployed on the Flow blockchain. These contracts, including their on-chain state, provide unique possibilities to build experiences that enrich applications users are already using."),(0,a.kt)("p",null,"The following key capabilities make Flow a standout choice for mobile applications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On-device key encryption via Secure Enclave & Keychain"),(0,a.kt)("li",{parentName:"ul"},"Mobile wallet compabilitity and support for WalletConnect 2.0"),(0,a.kt)("li",{parentName:"ul"},"Simple, progressive onboarding experience with postponed account linking"),(0,a.kt)("li",{parentName:"ul"},"Seamless in-app experience with on-chain interactions without constant signing requests"),(0,a.kt)("li",{parentName:"ul"},"Account flexibility enabling secure account recovery and sharing")),(0,a.kt)("h2",{id:"why-flow-mobile"},"Why Flow Mobile"),(0,a.kt)("h3",{id:"proven"},"Proven"),(0,a.kt)("p",null,"Flow is built with mainstream adoption in mind. Mobile applications can leverage the best-in-class user experiences millions of users have enjoyed on the web, through applications like NBA TopShot or NFL AllDay."),(0,a.kt)("h3",{id:"best-in-class-ux"},"Best-in-class UX"),(0,a.kt)("p",null,"Flow's Client Library makes it very intuitive to sign up and sign in with their wallet of choice. For transaction signing, Flow offers human readable security, so users get a clear understanding of what they are approving. An increased sense of trust for Flow applications is the outcome. "),(0,a.kt)("p",null,"Furthermore, Flow's powerful account model allows for seamless user flows of on-chain operations. Apps can perform transactions on behalf of the users (with their approval) in the background, without the need to switch between apps. The account model also allows apps to pay for transactions to postpone fiat on-ramps to get them to experience the value of an application before committing to buying tokens. "),(0,a.kt)("p",null,"Last but not least, developers can leverage progressive web3 onboarding, in which any identity provider can be used to authenticate users, without having to deal with keys. Developers can create Flow accounts for the users and link them to a wallet at a later point in time."),(0,a.kt)("h3",{id:"security-first"},"Security first"),(0,a.kt)("p",null,"Flow's mobile SDKs use on-device key encryption via Apple's Secure Enclave and Android's Keystore. The flexible account model makes it possible for an account to have multiple keys with different weights, which enables secure social recovery, account sharing, and much more."),(0,a.kt)("h2",{id:"smart-contract-language-inspired-by-mobile-languages"},"Smart contract language inspired by mobile languages"),(0,a.kt)("p",null,"Cadence, Flow's smart contract language, will look and feel very familiar to mobile languages developers are already familiar with. Cadence was inspired by Move, Swift, and Kotlin. This reduces the ramp-up period to develop mobile applications leveraging on-chain logic."),(0,a.kt)("h2",{id:"what-is-available"},"What is available"),(0,a.kt)("p",null,"Developers can leverage the following features to get productive quickly:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Swift & Kotlin FCL SDKs to auth and interact with the Flow blockchain (query + execute scripts)"),(0,a.kt)("li",{parentName:"ul"},"FCL-compatible mobile wallets"),(0,a.kt)("li",{parentName:"ul"},"User auth using WalletConnect 2.0 "),(0,a.kt)("li",{parentName:"ul"},"Basic mobile sample application (MonsterMaker)")),(0,a.kt)("p",null,"Coming soon:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Samples for key in-app functionality, like in-app purchasing"),(0,a.kt)("li",{parentName:"ul"},"Progressive user onboarding"),(0,a.kt)("li",{parentName:"ul"},"React Native SDK")))}d.isMDXComponent=!0}}]);