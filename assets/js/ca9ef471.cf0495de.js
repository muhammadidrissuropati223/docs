"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1547],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>k});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=c(l),m=a,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return l?n.createElement(k,i(i({ref:t},p),{},{components:l})):n.createElement(k,i({ref:t},p))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=l.length,i=new Array(o);i[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[s]="string"==typeof e?e:a,i[1]=r;for(var c=2;c<o;c++)i[c]=l[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},42263:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=l(87462),a=(l(67294),l(3905));const o={title:"Get Collection with the Flow CLI",sidebar_title:"Get Collection",description:"How to get a collection from the command line"},i=void 0,r={unversionedId:"tools/flow-cli/get-collections",id:"tools/flow-cli/get-collections",title:"Get Collection with the Flow CLI",description:"How to get a collection from the command line",source:"@site/docs/tools/flow-cli/get-collections.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/get-collections",permalink:"/docs/tools/flow-cli/get-collections",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Get Collection with the Flow CLI",sidebar_title:"Get Collection",description:"How to get a collection from the command line"},sidebar:"tutorialSidebar",previous:{title:"Get Block with the Flow CLI",permalink:"/docs/tools/flow-cli/get-blocks"},next:{title:"Get Events with the Flow CLI",permalink:"/docs/tools/flow-cli/get-events"}},u={},c=[{value:"Example Usage",id:"example-usage",level:2},{value:"Example response",id:"example-response",level:3},{value:"Arguments",id:"arguments",level:2},{value:"Collection ID",id:"collection-id",level:3},{value:"Arguments",id:"arguments-1",level:2},{value:"Flags",id:"flags",level:2},{value:"Host",id:"host",level:3},{value:"Network Key",id:"network-key",level:3},{value:"Network",id:"network",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Log",id:"log",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],p={toc:c},s="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Flow CLI provides a command to fetch any collection from the Flow network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow collections get <collection_id>\n")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow collections get 3e694588e789a72489667a36dd73104dea4579bcd400959d47aedccd7f930eeb \\\n--host access.mainnet.nodes.onflow.org:9000\n")),(0,a.kt)("h3",{id:"example-response"},"Example response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Collection ID 3e694588e789a72489667a36dd73104dea4579bcd400959d47aedccd7f930eeb:\nacc2ae1ff6deb2f4d7663d24af6ab1baf797ec264fd76a745a30792f6882093b\nae8bfbc85ce994899a3f942072bfd3455823b1f7652106ac102d161c17fcb55c\n70c4d39d34e654173c5c2746e7bb3a6cdf1f5e6963538d62bad2156fc02ea1b2\n2466237b5eafb469c01e2e5f929a05866de459df3bd768cde748e068c81c57bf\n\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"collection-id"},"Collection ID"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"collection_id")),(0,a.kt)("li",{parentName:"ul"},"Valid Input: SHA3-256 hash of the collection contents")),(0,a.kt)("h2",{id:"arguments-1"},"Arguments"),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--host")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: an IP address or hostname."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3569")," (Flow Emulator)")),(0,a.kt)("p",null,"Specify the hostname of the Access API that will be\nused to execute the command. This flag overrides\nany host defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--network")," flag."),(0,a.kt)("h3",{id:"network-key"},"Network Key"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network-key")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: A valid network public key of the host in hex string format")),(0,a.kt)("p",null,"Specify the network public key of the Access API that will be\nused to create a secure GRPC client when executing the command."),(0,a.kt)("h3",{id:"network"},"Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-n")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: the name of a network defined in the configuration (",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"),")"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"emulator"))),(0,a.kt)("p",null,"Specify which network you want the command to use for execution."),(0,a.kt)("h3",{id:"filter"},"Filter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--filter")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a case-sensitive name of the result property.")),(0,a.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--output")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-o")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inline"))),(0,a.kt)("p",null,"Specify the format of the command results."),(0,a.kt)("h3",{id:"save"},"Save"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--save")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-s")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,a.kt)("p",null,"Specify the filename where you want the result to be saved"),(0,a.kt)("h3",{id:"log"},"Log"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--log")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-l")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"info"))),(0,a.kt)("p",null,"Specify the log level. Control how much output you want to see during command execution."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"))),(0,a.kt)("p",null,"Specify the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow.json")," configuration file.\nYou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times to merge\nseveral configuration files."),(0,a.kt)("h3",{id:"version-check"},"Version Check"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}d.isMDXComponent=!0}}]);