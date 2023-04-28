"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,k=u["".concat(i,".").concat(h)]||u[h]||d[h]||c;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const c={title:"Flow Archive Node Access API Specification",sidebar_title:"Archive Access API"},o=void 0,s={unversionedId:"nodes/archive-access-api",id:"nodes/archive-access-api",title:"Flow Archive Node Access API Specification",description:"The Archive Access API is implemented as a gRPC service.",source:"@site/docs/nodes/archive-access-api.mdx",sourceDirName:"nodes",slug:"/nodes/archive-access-api",permalink:"/docs/nodes/archive-access-api",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Flow Archive Node Access API Specification",sidebar_title:"Archive Access API"},sidebar:"tutorialSidebar",previous:{title:"Flow Access API Specification",permalink:"/docs/nodes/access-api"},next:{title:"Flow Archive Access API rate limits on Dapper Labs Archive nodes",permalink:"/docs/nodes/archive-api-rate-limits"}},i={},l=[{value:"Flow archive node access endpoints",id:"flow-archive-node-access-endpoints",level:2},{value:"Current Mainnet",id:"current-mainnet",level:4},{value:"Sandboxnet",id:"sandboxnet",level:4},{value:"Testnet",id:"testnet",level:4},{value:"Canarynet",id:"canarynet",level:4},{value:"Rate limits for Dapper Labs archive nodes",id:"rate-limits-for-dapper-labs-archive-nodes",level:4},{value:"Accounts",id:"accounts",level:2},{value:"GetAccountAtBlockHeight",id:"getaccountatblockheight",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Scripts",id:"scripts",level:2},{value:"ExecuteScriptAtBlockID",id:"executescriptatblockid",level:3},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4},{value:"ExecuteScriptAtBlockHeight",id:"executescriptatblockheight",level:3},{value:"Request",id:"request-2",level:4},{value:"Response",id:"response-2",level:4}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Archive Access API is implemented as a ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC service"),"."),(0,r.kt)("p",null,"A language-agnostic specification for this API is defined using ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protocol Buffers"),", which can be used to generate client libraries in a variety of programming languages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow/tree/master/protobuf"},"Flow Archive Access API protobuf source files"))),(0,r.kt)("h2",{id:"flow-archive-node-access-endpoints"},"Flow archive node access endpoints"),(0,r.kt)("p",null,"The Archive Nodes hosted by DapperLabs are accessible at:"),(0,r.kt)("h4",{id:"current-mainnet"},"Current Mainnet"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"archive.mainnet.nodes.onflow.org:9000")),(0,r.kt)("h4",{id:"sandboxnet"},"Sandboxnet"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"archive.sandboxnet.nodes.onflow.org:9000")),(0,r.kt)("h4",{id:"testnet"},"Testnet"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"archive.devnet.nodes.onflow.org:9000")),(0,r.kt)("h4",{id:"canarynet"},"Canarynet"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"archive.canary.nodes.onflow.org:9000")),(0,r.kt)("h4",{id:"rate-limits-for-dapper-labs-archive-nodes"},"Rate limits for Dapper Labs archive nodes"),(0,r.kt)("p",null,"Archive nodes operated by Dapper Labs are ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/nodes/archive-api-rate-limits"},"rate limited"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("h3",{id:"getaccountatblockheight"},"GetAccountAtBlockHeight"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GetAccountAtBlockHeight")," gets an ",(0,r.kt)("a",{parentName:"p",href:"#accounts"},"account")," by address at the given block height."),(0,r.kt)("p",null,"The archive node queries an execution node for the account details, which are stored as part of the execution state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc GetAccountAtBlockHeight(GetAccountAtBlockHeightRequest) returns (AccountResponse)\n")),(0,r.kt)("h4",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message GetAccountAtBlockHeightRequest {\n  bytes address\n  uint64 block_height\n}\n")),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message AccountResponse {\n  Account account\n}\n")),(0,r.kt)("h2",{id:"scripts"},"Scripts"),(0,r.kt)("h3",{id:"executescriptatblockid"},"ExecuteScriptAtBlockID"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteScriptAtBlockID")," executes a ready-only Cadence script against the execution state at the block with the given ID."),(0,r.kt)("p",null,"This method can be used to read account state from the blockchain. The script is executed on an execution node and the return value is encoded using the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/cadence/json-cadence-spec"},"JSON-Cadence data interchange format"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc ExecuteScriptAtBlockID (ExecuteScriptAtBlockIDRequest) returns (ExecuteScriptResponse)\n")),(0,r.kt)("h4",{id:"request-1"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ExecuteScriptAtBlockIDRequest {\n  bytes block_id\n  bytes script\n}\n")),(0,r.kt)("h4",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ExecuteScriptResponse {\n  bytes value\n}\n")),(0,r.kt)("h3",{id:"executescriptatblockheight"},"ExecuteScriptAtBlockHeight"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ExecuteScriptAtBlockHeight")," executes a ready-only Cadence script against the execution state at the given block height."),(0,r.kt)("p",null,"This method can be used to read account state from the blockchain. The script is executed on an execution node and the return value is encoded using the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/cadence/json-cadence-spec"},"JSON-Cadence data interchange format"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc ExecuteScriptAtBlockHeight (ExecuteScriptAtBlockHeightRequest) returns (ExecuteScriptResponse)\n")),(0,r.kt)("h4",{id:"request-2"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ExecuteScriptAtBlockHeightRequest {\n  uint64 block_height\n  bytes script\n}\n")),(0,r.kt)("h4",{id:"response-2"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ExecuteScriptResponse {\n  bytes value\n}\n")))}d.isMDXComponent=!0}}]);