"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2772],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>w});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,w=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(w,l(l({ref:t},u),{},{components:r})):n.createElement(w,l({ref:t},u))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[f]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},l="Resource Interface Resolver",s={unversionedId:"flow/flow-nft/MetdataViews/MetadataViews_Resolver",id:"flow/flow-nft/MetdataViews/MetadataViews_Resolver",title:"Resource Interface Resolver",description:"Provides access to a set of metadata views. A struct or",source:"@site/docs/flow/flow-nft/MetdataViews/MetadataViews_Resolver.md",sourceDirName:"flow/flow-nft/MetdataViews",slug:"/flow/flow-nft/MetdataViews/MetadataViews_Resolver",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Resolver",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct Rarity",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Rarity"},next:{title:"Resource Interface ResolverCollection",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_ResolverCollection"}},i={},c=[{value:"Functions",id:"functions",level:2},{value:"<code>getViews()</code>",id:"getviews",level:3},{value:"<code>resolveView()</code>",id:"resolveview",level:3}],u={toc:c},f="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resource-interface-resolver"},"Resource Interface ",(0,a.kt)("inlineCode",{parentName:"h1"},"Resolver")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface Resolver {\n}\n")),(0,a.kt)("p",null,"Provides access to a set of metadata views. A struct or\nresource (e.g. an NFT) can implement this interface to provide access to\nthe views that it supports."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"getviews"},(0,a.kt)("inlineCode",{parentName:"h3"},"getViews()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getViews(): [Type]\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resolveview"},(0,a.kt)("inlineCode",{parentName:"h3"},"resolveView()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"fun resolveView(_: Type): AnyStruct?\n")),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);