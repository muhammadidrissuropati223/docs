"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=l,k=p["".concat(c,".").concat(f)]||p[f]||s[f]||r;return n?o.createElement(k,a(a({ref:t},d),{},{components:n})):o.createElement(k,a({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(87462),l=(n(67294),n(3905));const r={},a="Contract Interface NonFungibleToken",i={unversionedId:"flow/flow-nft/NonFungibleToken/NonFungibleToken",id:"flow/flow-nft/NonFungibleToken/NonFungibleToken",title:"Contract Interface NonFungibleToken",description:"The main NFT contract interface. Other NFT contracts will",source:"@site/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken.md",sourceDirName:"flow/flow-nft/NonFungibleToken",slug:"/flow/flow-nft/NonFungibleToken/",permalink:"/docs/flow/flow-nft/NonFungibleToken/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct Traits",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Traits"},next:{title:"Resource Collection",permalink:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_Collection"}},c={},u=[{value:"Interfaces",id:"interfaces",level:2},{value:"<code>INFT</code>",id:"inft",level:3},{value:"<code>Provider</code>",id:"provider",level:3},{value:"<code>Receiver</code>",id:"receiver",level:3},{value:"<code>CollectionPublic</code>",id:"collectionpublic",level:3},{value:"Structs &amp; Resources",id:"structs--resources",level:2},{value:"<code>NFT</code>",id:"nft",level:3},{value:"<code>Collection</code>",id:"collection",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>createEmptyCollection()</code>",id:"createemptycollection",level:3},{value:"Events",id:"events",level:2},{value:"<code>ContractInitialized</code>",id:"contractinitialized",level:3},{value:"<code>Withdraw</code>",id:"withdraw",level:3},{value:"<code>Deposit</code>",id:"deposit",level:3}],d={toc:u},p="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"contract-interface-nonfungibletoken"},"Contract Interface ",(0,l.kt)("inlineCode",{parentName:"h1"},"NonFungibleToken")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract interface NonFungibleToken {\n\n    pub var totalSupply: UInt64\n}\n")),(0,l.kt)("p",null,"The main NFT contract interface. Other NFT contracts will\nimport and implement this interface"),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("h3",{id:"inft"},(0,l.kt)("inlineCode",{parentName:"h3"},"INFT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface INFT {\n\n    pub let id: UInt64\n}\n")),(0,l.kt)("p",null,"Interface that the NFTs have to conform to\nThe metadata views methods are included here temporarily\nbecause enforcing the metadata interfaces in the standard\nwould break many contracts in an upgrade. Those breaking changes\nare being saved for the stable cadence milestone"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_INFT"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"provider"},(0,l.kt)("inlineCode",{parentName:"h3"},"Provider")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface Provider {\n}\n")),(0,l.kt)("p",null,"Interface to mediate withdraws from the Collection"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_Provider"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"receiver"},(0,l.kt)("inlineCode",{parentName:"h3"},"Receiver")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface Receiver {\n}\n")),(0,l.kt)("p",null,"Interface to mediate deposits to the Collection"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_Receiver"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"collectionpublic"},(0,l.kt)("inlineCode",{parentName:"h3"},"CollectionPublic")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface CollectionPublic {\n}\n")),(0,l.kt)("p",null,"Interface that an account would commonly\npublish for their collection"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_CollectionPublic"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"structs--resources"},"Structs & Resources"),(0,l.kt)("h3",{id:"nft"},(0,l.kt)("inlineCode",{parentName:"h3"},"NFT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource NFT {\n\n    pub let id: UInt64\n}\n")),(0,l.kt)("p",null,"Requirement that all conforming NFT smart contracts have\nto define a resource called NFT that conforms to INFT"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_NFT"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"collection"},(0,l.kt)("inlineCode",{parentName:"h3"},"Collection")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource Collection {\n\n    pub var ownedNFTs: {UInt64: NFT}\n}\n")),(0,l.kt)("p",null,"Requirement for the concrete resource type\nto be declared in the implementing contract"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/NonFungibleToken/NonFungibleToken_Collection"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"createemptycollection"},(0,l.kt)("inlineCode",{parentName:"h3"},"createEmptyCollection()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun createEmptyCollection(): Collection\n")),(0,l.kt)("p",null,"Creates an empty Collection and returns it to the caller so that they can own NFTs"),(0,l.kt)("p",null,"Returns: A new Collection resource"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"contractinitialized"},(0,l.kt)("inlineCode",{parentName:"h3"},"ContractInitialized")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub event ContractInitialized()\n")),(0,l.kt)("p",null,"Event that emitted when the NFT contract is initialized"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"withdraw"},(0,l.kt)("inlineCode",{parentName:"h3"},"Withdraw")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub event Withdraw(id: UInt64, from: Address?)\n")),(0,l.kt)("p",null,"Event that is emitted when a token is withdrawn,\nindicating the owner of the collection that it was withdrawn from."),(0,l.kt)("p",null,"If the collection is not in an account's storage, ",(0,l.kt)("inlineCode",{parentName:"p"},"from")," will be ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"deposit"},(0,l.kt)("inlineCode",{parentName:"h3"},"Deposit")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub event Deposit(id: UInt64, to: Address?)\n")),(0,l.kt)("p",null,"Event that emitted when a token is deposited to a collection."),(0,l.kt)("p",null,"It indicates the owner of the collection that it was deposited to."),(0,l.kt)("hr",null))}s.isMDXComponent=!0}}]);