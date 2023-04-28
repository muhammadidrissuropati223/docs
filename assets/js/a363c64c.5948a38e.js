"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?l.createElement(k,r(r({ref:t},s),{},{components:n})):l.createElement(k,r({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=n(87462),a=(n(67294),n(3905));const i={title:"Execute a Script with the Flow CLI",sidebar_title:"Execute a Script",description:"How to execute a Cadence script on Flow from the command line"},r=void 0,o={unversionedId:"tools/flow-cli/execute-scripts",id:"tools/flow-cli/execute-scripts",title:"Execute a Script with the Flow CLI",description:"How to execute a Cadence script on Flow from the command line",source:"@site/docs/tools/flow-cli/execute-scripts.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/execute-scripts",permalink:"/docs/tools/flow-cli/execute-scripts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Execute a Script with the Flow CLI",sidebar_title:"Execute a Script",description:"How to execute a Cadence script on Flow from the command line"},sidebar:"tutorialSidebar",previous:{title:"Create Emulator Snapshot with the Flow CLI",permalink:"/docs/tools/flow-cli/emulator-snapshot"},next:{title:"Generate Key Pair with the Flow CLI",permalink:"/docs/tools/flow-cli/generate-keys"}},u={},p=[{value:"Example Usage",id:"example-usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Filename",id:"filename",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Flags",id:"flags",level:2},{value:"Arguments JSON",id:"arguments-json",level:3},{value:"Host",id:"host",level:3},{value:"Network Key",id:"network-key",level:3},{value:"Network",id:"network",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Log",id:"log",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Flow CLI provides a command to execute a Cadence script on\nthe Flow execution state with any Flow Access API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow scripts execute <filename> [<argument> <argument>...] [flags]\n")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Execute a script on Flow Testnet\n> flow scripts execute script.cdc "Hello" "World"\n\n"Hello World"\n')),(0,a.kt)("p",null,"Script source code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pub fun main(greeting: String, who: String): String {\n    return greeting.concat(" ").concat(who)\n}\n')),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"filename"},"Filename"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"filename")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,a.kt)("p",null,"The first argument is a path to a Cadence file containing the\nscript to be executed."),(0,a.kt)("h3",{id:"arguments-1"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"argument")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: valid ",(0,a.kt)("a",{parentName:"li",href:"https://docs.onflow.org/cadence/json-cadence-spec/"},"cadence values"),"\nmatching argument type in script code.")),(0,a.kt)("p",null,"Input arguments values matching corresponding types in the source code and passed in the same order."),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("h3",{id:"arguments-json"},"Arguments JSON"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--args-json")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: arguments in JSON-Cadence form."),(0,a.kt)("li",{parentName:"ul"},"Example: ",(0,a.kt)("inlineCode",{parentName:"li"},'flow scripts execute script.cdc \'[{"type": "String", "value": "Hello World"}]\''))),(0,a.kt)("p",null,"Arguments passed to the Cadence script in the Cadence JSON format.\nCadence JSON format contains ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," keys and is\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.onflow.org/cadence/json-cadence-spec/"},"documented here"),"."),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--host")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: an IP address or hostname."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3569")," (Flow Emulator)")),(0,a.kt)("p",null,"Specify the hostname of the Access API that will be\nused to execute the command. This flag overrides\nany host defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--network")," flag."),(0,a.kt)("h3",{id:"network-key"},"Network Key"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network-key")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: A valid network public key of the host in hex string format")),(0,a.kt)("p",null,"Specify the network public key of the Access API that will be\nused to create a secure GRPC client when executing the command."),(0,a.kt)("h3",{id:"network"},"Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-n")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: the name of a network defined in the configuration (",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"),")"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"emulator"))),(0,a.kt)("p",null,"Specify which network you want the command to use for execution."),(0,a.kt)("h3",{id:"filter"},"Filter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--filter")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a case-sensitive name of the result property.")),(0,a.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--output")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-o")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inline"))),(0,a.kt)("p",null,"Specify the format of the command results."),(0,a.kt)("h3",{id:"save"},"Save"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--save")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-s")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,a.kt)("p",null,"Specify the filename where you want the result to be saved"),(0,a.kt)("h3",{id:"log"},"Log"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--log")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-l")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"info"))),(0,a.kt)("p",null,"Specify the log level. Control how much output you want to see during command execution."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"))),(0,a.kt)("p",null,"Specify the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow.json")," configuration file.\nYou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times to merge\nseveral configuration files."),(0,a.kt)("h3",{id:"version-check"},"Version Check"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}m.isMDXComponent=!0}}]);