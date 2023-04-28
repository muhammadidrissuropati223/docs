"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const i={title:"Generate a Signature with the Flow CLI",sidebar_title:"Generate a Signature",description:"How to generate a new signature from the command line"},r=void 0,o={unversionedId:"tools/flow-cli/signature-generate",id:"tools/flow-cli/signature-generate",title:"Generate a Signature with the Flow CLI",description:"How to generate a new signature from the command line",source:"@site/docs/tools/flow-cli/signature-generate.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/signature-generate",permalink:"/docs/tools/flow-cli/signature-generate",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Generate a Signature with the Flow CLI",sidebar_title:"Generate a Signature",description:"How to generate a new signature from the command line"},sidebar:"tutorialSidebar",previous:{title:"Sign a Transaction with the Flow CLI",permalink:"/docs/tools/flow-cli/sign-transaction"},next:{title:"Verify a Signature with the Flow CLI",permalink:"/docs/tools/flow-cli/signature-verify"}},u={},s=[{value:"Example Usage",id:"example-usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Message",id:"message",level:3},{value:"Flags",id:"flags",level:2},{value:"Signer",id:"signer",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Log",id:"log",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Generate a signature using the private key of the signer account."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"flow signatures generate <message>  \n")),(0,l.kt)("p",null,"\u26a0\ufe0f ",(0,l.kt)("em",{parentName:"p"},"Make sure the account you want to use for signing is saved in the ",(0,l.kt)("inlineCode",{parentName:"em"},"flow.json")," configuration.\nThe address of the account is not important, just the private key.")),(0,l.kt)("h2",{id:"example-usage"},"Example Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> flow signatures generate 'The quick brown fox jumps over the lazy dog' --signer alice\n\nSignature        b33eabfb05d374b...f09929da96f5beec167fd1f123ec\nMessage          The quick brown fox jumps over the lazy dog\nPublic Key       0xc92a7c...042c4025d241fd430242368ce662d39636987\nHash Algorithm       SHA3_256\nSignature Algorithm      ECDSA_P256\n")),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("h3",{id:"message"},"Message"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"message"))),(0,l.kt)("p",null,"Message used for signing."),(0,l.kt)("h2",{id:"flags"},"Flags"),(0,l.kt)("h3",{id:"signer"},"Signer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--signer")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: the name of an account defined in the configuration (",(0,l.kt)("inlineCode",{parentName:"li"},"flow.json"),")")),(0,l.kt)("p",null,"Specify the name of the account that will be used to sign the transaction."),(0,l.kt)("h3",{id:"filter"},"Filter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--filter")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-x")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: case-sensitive name of the result property.")),(0,l.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,l.kt)("h3",{id:"output"},"Output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--output")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-o")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"inline"))),(0,l.kt)("p",null,"Specify in which format you want to display the result."),(0,l.kt)("h3",{id:"save"},"Save"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--save")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-s")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: valid filename")),(0,l.kt)("p",null,"Specify the filename where you want the result to be saved."),(0,l.kt)("h3",{id:"log"},"Log"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--log")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-l")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"debug")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"info"))),(0,l.kt)("p",null,"Specify the log level. Control how much output you want to see while command execution."),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-f")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: valid filename")),(0,l.kt)("p",null,"Specify a filename for the configuration files, you can provide multiple configuration\nfiles by using ",(0,l.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times."),(0,l.kt)("h3",{id:"version-check"},"Version Check"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}m.isMDXComponent=!0}}]);