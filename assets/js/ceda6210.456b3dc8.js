"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11813:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Introduction to Flow"},l=void 0,i={unversionedId:"flow/index",id:"flow/index",title:"Introduction to Flow",description:"\u200dFlow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and the digital assets that power them. It is based on a unique, multi-role architecture, and designed to scale without sharding, allowing for massive improvements in speed and throughput while preserving a developer-friendly, ACID-compliant environment.",source:"@site/docs/flow/index.md",sourceDirName:"flow",slug:"/flow/",permalink:"/docs/flow/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Introduction to Flow"},sidebar:"tutorialSidebar",previous:{title:"documentation",permalink:"/docs/documentation"},next:{title:"Flow Core Contracts",permalink:"/docs/flow/core-contracts/"}},s={},c=[{value:"What makes Flow unique",id:"what-makes-flow-unique",level:2},{value:"Dapp Development",id:"dapp-development",level:2},{value:"Core Contracts",id:"core-contracts",level:2},{value:"FLOW Token",id:"flow-token",level:2},{value:"NFT marketplace",id:"nft-marketplace",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u200dFlow is a fast, decentralized, and developer-friendly blockchain, designed as the foundation for a new generation of games, apps, and the ",(0,r.kt)("a",{parentName:"p",href:"https://www.onflow.org/post/flow-blockchain-cadence-programming-language-resources-assets"},"digital assets")," that power them. It is based on a unique, ",(0,r.kt)("a",{parentName:"p",href:"https://www.onflow.org/primer"},"multi-role architecture"),", and designed to ",(0,r.kt)("a",{parentName:"p",href:"https://www.onflow.org/post/flow-blockchain-multi-node-architecture-advantages"},"scale without sharding"),", allowing for massive improvements in speed and throughput while preserving a developer-friendly, ACID-compliant environment."),(0,r.kt)("h2",{id:"what-makes-flow-unique"},"What makes Flow unique"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multi-role architecture:")," Flow's node architecture allows the network to scale to serve billions of users without sharding or reducing the decentralization of consensus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Resource-oriented programming:")," Smart contracts on Flow are written in Cadence, an easier and safer programming language for crypto assets and apps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer ergonomics:")," This network is designed to maximize developer productivity. Examples range from upgradeable smart contracts and built-in logging support to the Flow Emulator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Consumer onboarding:")," Flow was designed for mainstream consumers, with payment onramps catalyzing a safe and low-friction path from fiat to crypto.")),(0,r.kt)("p",null,"The following chapters summarize the content in this section. Read on more for details."),(0,r.kt)("h2",{id:"dapp-development"},"Dapp Development"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/dapp-development/"},"development guide")," covers the Flow core concepts, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dapp Client:")," The dapp client is the interface through which users interact with your dapp. Web and mobile applications are typical examples of dapp clients."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Smart Contract:")," A smart contract is a collection of code deployed to a permanent location on the blockchain that defines the core logic for a dapp."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User Account:")," A user account is a record on the blockchain that stores the digital assets owned by a single user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transaction:")," A transaction is a code submitted to the blockchain that mutates the state of one or more user accounts and smart contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User Wallet:")," A user wallet is software or hardware that controls access to a user's account on the blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"State Query:")," A state query is a request made to the blockchain that returns information about the state of your dapp's smart contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flow Client Library (FCL):")," The Flow Client Library is a framework that provides a standard interface to connect client applications and user wallets.")),(0,r.kt)("h2",{id:"core-contracts"},"Core Contracts"),(0,r.kt)("p",null,"The Flow blockchain implements core functionality using its own smart contract language, Cadence. The core functionality is split into a set of contracts, so-called ",(0,r.kt)("a",{parentName:"p",href:"/core-contracts/"},"core contracts"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fungible Token:")," The FungibleToken contract implements the Fungible Token Standard. It is the second contract ever deployed on Flow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flow Token:")," The FlowToken contract defines the FLOW network token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flow Fees:")," The FlowFees contract is where all the collected flow fees are gathered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Service Account:")," tracks transaction fees and deployment permissions and provides convenient methods for Flow Token operations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Staking Table:")," The FlowIDTableStaking contract is the central table that manages staked nodes, delegation, and rewards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Epoch Contract:")," The FlowEpoch contract is the state machine that manages Epoch phases and emits service events.")),(0,r.kt)("h2",{id:"flow-token"},"FLOW Token"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/flow-token/"},"FLOW")," token is the native currency for the Flow network. Developers and users can use FLOW to transact on the network. Developers can integrate FLOW directly into their apps for peer-to-peer payments, service charges, or consumer rewards. Flow can be held, transferred, or transacted peer-to-peer."),(0,r.kt)("h2",{id:"nft-marketplace"},"NFT marketplace"),(0,r.kt)("p",null,"A unique digital asset known as an NFT represents a real-world item, such as artwork, music, in-game items, or films. They can be purchased and sold online via an ",(0,r.kt)("a",{parentName:"p",href:"/kitty-items/next-steps/#learn-more-about-nft-marketplaces"},"NFT marketplace"),"."))}d.isMDXComponent=!0}}]);