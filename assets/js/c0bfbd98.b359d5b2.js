"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6508],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),f=l,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},94500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const r={},o=void 0,i={unversionedId:"tools/fcl-js/index",id:"tools/fcl-js/index",title:"index",description:"FCL JS",source:"@site/docs/tools/fcl-js/index.mdx",sourceDirName:"tools/fcl-js",slug:"/tools/fcl-js/",permalink:"/docs/tools/fcl-js/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/docs/tools/fcl-dev-wallet/overview"},next:{title:"Flow Client Library (FCL) API Reference",permalink:"/docs/tools/fcl-js/reference/api"}},s={},c=[{value:"What is FCL?",id:"what-is-fcl",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Importing",id:"importing",level:4},{value:"FCL for Dapps",id:"fcl-for-dapps",level:2},{value:"Wallet Interactions",id:"wallet-interactions",level:4},{value:"Blockchain Interactions",id:"blockchain-interactions",level:4},{value:"Utilities",id:"utilities",level:4},{value:"Next Steps",id:"next-steps",level:2},{value:"FCL for Wallet Providers",id:"fcl-for-wallet-providers",level:2},{value:"Current Wallet Providers",id:"current-wallet-providers",level:3},{value:"Wallet Discovery",id:"wallet-discovery",level:3},{value:"Building a FCL compatible wallet",id:"building-a-fcl-compatible-wallet",level:3},{value:"Support",id:"support",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("br",null),(0,l.kt)("p",{align:"center"},(0,l.kt)("h1",{align:"center"}," FCL JS"),(0,l.kt)("p",{align:"center"},(0,l.kt)("i",null,"Connect your dapp to users, their wallets and Flow."),(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://github.com/onflow/fcl-js"},(0,l.kt)("strong",null,"View on Github\xbb")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://docs.onflow.org/fcl/tutorials/flow-app-quickstart/"},"Quickstart"),"\xb7",(0,l.kt)("a",{href:"https://github.com/onflow/fcl-js/issues"},"Report Bug"),"\xb7",(0,l.kt)("a",{href:"https://github.com/onflow/fcl-js/blob/master/CONTRIBUTING.md"},"Contribute"))),(0,l.kt)("h2",{id:"what-is-fcl"},"What is FCL?"),(0,l.kt)("p",null,"The Flow Client Library (FCL) JS is a package used to interact with user wallets and the Flow blockchain. When using FCL for authentication, dapps are able to support all FCL-compatible wallets on Flow and their users without any custom integrations or changes needed to the dapp code."),(0,l.kt)("p",null,"It was created to make developing applications that connect to the Flow blockchain easy and secure. It defines a standardized set of communication patterns between wallets, applications, and users that is used to perform a wide variety of actions for your dapp. FCL also offers a full featured SDK and utilities to interact with the Flow blockchain."),(0,l.kt)("p",null,"While FCL itself is a concept and standard, FCL JS is the javascript implementation of FCL and can be used in both browser and server environments. All functionality for connecting and communicating with wallet providers is restricted to the browser. We also have FCL Swift implementation for iOS, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zed-io/fcl-swift"},"FCL Swift")," contributed by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lmcmz"},"@lmcmz"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Node version ",(0,l.kt)("inlineCode",{parentName:"li"},"v12.0.0 or higher"),".")),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"To use the FCL JS in your application, install using ",(0,l.kt)("strong",{parentName:"p"},"yarn")," or ",(0,l.kt)("strong",{parentName:"p"},"npm")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -S @onflow/fcl\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @onflow/fcl\n")),(0,l.kt)("h4",{id:"importing"},"Importing"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ES6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import * as fcl from "@onflow/fcl";\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Node.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const fcl = require("@onflow/fcl");\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"fcl-for-dapps"},"FCL for Dapps"),(0,l.kt)("h4",{id:"wallet-interactions"},"Wallet Interactions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Wallet Discovery")," and ",(0,l.kt)("em",{parentName:"li"},"Sign-up/Login"),": Onboard users with ease. Never worry about supporting multiple wallets.\nAuthenticate users with any ",(0,l.kt)("a",{parentName:"li",href:"/docs/tools/fcl-js/#current-wallet-providers"},"FCL compatible wallet"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// in the browser\nimport * as fcl from "@onflow/fcl"\n\nfcl.config({\n  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Endpoint set to Testnet\n})\n\nfcl.authenticate()\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"FCL Default Discovery UI",src:a(25438).Z,width:"621",height:"732"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note"),": A ",(0,l.kt)("a",{parentName:"p",href:"https://meetdapper.com/developers"},"Dapper Wallet")," developer account is required. To enable Dapper Wallet inside FCL, you need to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.meetdapper.com/get-started"},"follow this guide"),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Interact with smart contracts"),": Authorize transactions via the user's chosen wallet "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Prove ownership of a wallet address"),": Signing and verifying user signed data")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.onflow.org/fcl/reference/api/#wallet-interactions"},"Learn more about wallet interactions >")),(0,l.kt)("h4",{id:"blockchain-interactions"},"Blockchain Interactions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Query the chain"),": Send arbitrary Cadence scripts to the chain and receive back decoded values")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import * as fcl from "@onflow/fcl";\n\nconst result = await fcl.query({\n  cadence: `\n    pub fun main(a: Int, b: Int, addr: Address): Int {\n      log(addr)\n      return a + b\n    }\n  `,\n  args: (arg, t) => [\n    arg(7, t.Int), // a: Int\n    arg(6, t.Int), // b: Int\n    arg("0xba1132bc08f82fe2", t.Address), // addr: Address\n  ],\n});\nconsole.log(result); // 13\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Mutate the chain"),": Send arbitrary transactions with your own signatures or via a user's wallet to perform state changes on chain.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import * as fcl from "@onflow/fcl";\n// in the browser, FCL will automatically connect to the user\'s wallet to request signatures to run the transaction\nconst txId = await fcl.mutate({\n  cadence: `\n    import Profile from 0xba1132bc08f82fe2\n    \n    transaction(name: String) {\n      prepare(account: AuthAccount) {\n        account.borrow<&{Profile.Owner}>(from: Profile.privatePath)!.setName(name)\n      }\n    }\n  `,\n  args: (arg, t) => [arg("myName", t.String)],\n});\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.onflow.org/fcl/reference/api/#on-chain-interactions"},"Learn more about on-chain interactions >")),(0,l.kt)("h4",{id:"utilities"},"Utilities"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get account details from any Flow address"),(0,l.kt)("li",{parentName:"ul"},"Get the latest block"),(0,l.kt)("li",{parentName:"ul"},"Transaction status polling"),(0,l.kt)("li",{parentName:"ul"},"Event polling"),(0,l.kt)("li",{parentName:"ul"},"Custom authorization functions")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.onflow.org/fcl/reference/api/#pre-built-interactions"},"Learn more about utilities >")),(0,l.kt)("h2",{id:"next-steps"},"Next Steps"),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/tools/fcl-js/tutorials/flow-app-quickstart"},"Flow App Quick Start"),"."),(0,l.kt)("p",null,"See the full ",(0,l.kt)("a",{parentName:"p",href:"https://docs.onflow.org/fcl/api/"},"API Reference")," for all FCL functionality."),(0,l.kt)("p",null,"Learn Flow's smart contract language to build any script or transactions: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.onflow.org/cadence/"},"Cadence"),"."),(0,l.kt)("p",null,"Explore all of Flow ",(0,l.kt)("a",{parentName:"p",href:"https://docs.onflow.org"},"docs and tools"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"fcl-for-wallet-providers"},"FCL for Wallet Providers"),(0,l.kt)("p",null,"Wallet providers on Flow have the flexibility to build their user interactions and UI through a variety of ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Front channel communication via Iframe, pop-up, tab, or extension"),(0,l.kt)("li",{parentName:"ul"},"Back channel communication via HTTP")),(0,l.kt)("p",null,"FCL is agnostic to the communication channel and be configured to create both custodial and non-custodial wallets. This enables users to interact with wallet providers without needing to download an app or extension."),(0,l.kt)("p",null,"The communication channels involve responding to a set of pre-defined FCL messages to deliver the requested information to the dapp.  Implementing a FCL compatible wallet on Flow is as simple as filling in the responses with the appropriate data when FCL requests them. If using any of the front-channel communication methods, FCL also provides a set of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-utils/index.js"},"wallet utilities")," to simplify this process."),(0,l.kt)("h3",{id:"current-wallet-providers"},"Current Wallet Providers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blocto.portto.io/en/"},"Blocto")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ledger.com"},"Ledger")," (limited transaction support)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://lilico.app/"},"Lilico Wallet")," Fully non-custodial chrome extension wallet focused on NFTs")),(0,l.kt)("h3",{id:"wallet-discovery"},"Wallet Discovery"),(0,l.kt)("p",null,"It can be difficult to get users to discover new wallets on a chain. To solve this, we created a wallet discovery service that can be configured and accessed through FCL to display all available Flow wallet providers to the user. This means:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dapps can display and support all FCL compatible wallets that launch on Flow without needing to change any code"),(0,l.kt)("li",{parentName:"ul"},"Users don't need to sign up for new wallets - they can carry over their existing one to any dapp that uses FCL for authentication and authorization.")),(0,l.kt)("p",null,"The discovery feature can be used via API allowing you to customize your own UI or you can use the default UI without any additional configuration."),(0,l.kt)("h3",{id:"building-a-fcl-compatible-wallet"},"Building a FCL compatible wallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Read the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/draft-v3.md"},"wallet guide")," to understand the implementation details."),(0,l.kt)("li",{parentName:"ul"},"Review the architecture of the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/onflow/fcl-dev-wallet"},"FCL dev wallet")," for an overview."),(0,l.kt)("li",{parentName:"ul"},"If building a non-custodial wallet, see the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-account-api"},"Account API")," and the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow/pull/727"},"FLIP")," on derivation paths and key generation.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("p",null,"Notice an problem or want to request a feature? ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-js-sdk/issues"},"Add an issue"),"."),(0,l.kt)("p",null,"Discuss FCL with the community on the ",(0,l.kt)("a",{parentName:"p",href:"https://forum.onflow.org/c/developer-tools/flow-fcl/22"},"forum"),"."),(0,l.kt)("p",null,"Join the Flow community on ",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/k6cZ7QC"},"Discord")," to keep up to date and to talk to the team."))}d.isMDXComponent=!0},25438:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/discovery-dbb8386c4c128b49021b3c7e199df0a8.png"}}]);