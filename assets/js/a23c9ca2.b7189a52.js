"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,w=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(w,o(o({ref:t},u),{},{components:n})):r.createElement(w,o({ref:t},u))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Struct IPFSFile",l={unversionedId:"flow/flow-nft/MetdataViews/MetadataViews_IPFSFile",id:"flow/flow-nft/MetdataViews/MetadataViews_IPFSFile",title:"Struct IPFSFile",description:"View to expose a file stored on IPFS.",source:"@site/docs/flow/flow-nft/MetdataViews/MetadataViews_IPFSFile.md",sourceDirName:"flow/flow-nft/MetdataViews",slug:"/flow/flow-nft/MetdataViews/MetadataViews_IPFSFile",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_IPFSFile",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct HTTPFile",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_HTTPFile"},next:{title:"Struct License",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_License"}},c={},s=[{value:"Initializer",id:"initializer",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>uri()</code>",id:"uri",level:3}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"struct-ipfsfile"},"Struct ",(0,a.kt)("inlineCode",{parentName:"h1"},"IPFSFile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct IPFSFile {\n\n    pub let cid: String\n\n    pub let path: String?\n}\n")),(0,a.kt)("p",null,"View to expose a file stored on IPFS.\nIPFS images are referenced by their content identifier (CID)\nrather than a direct URI. A client application can use this CID\nto find and load the image via an IPFS gateway."),(0,a.kt)("p",null,"Implemented Interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"File"))),(0,a.kt)("h3",{id:"initializer"},"Initializer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"init(cid: String, path: String?)\n")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"uri"},(0,a.kt)("inlineCode",{parentName:"h3"},"uri()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"fun uri(): String\n")),(0,a.kt)("p",null,"This function returns the IPFS native URL for this file.\nRef: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/how-to/address-ipfs-on-web/#native-urls"},"https://docs.ipfs.io/how-to/address-ipfs-on-web/#native-urls")),(0,a.kt)("p",null,"Returns: The string containing the file uri"),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);