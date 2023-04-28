"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||l;return r?o.createElement(d,n(n({ref:t},c),{},{components:r})):o.createElement(d,n({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,n=new Array(l);n[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,n[1]=i;for(var s=2;s<l;s++)n[s]=r[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const l={title:"Start Emulator with the Flow CLI",sidebar_title:"Start Emulator",description:"How to start Flow emulator from the command line"},n=void 0,i={unversionedId:"tools/flow-cli/start-emulator",id:"tools/flow-cli/start-emulator",title:"Start Emulator with the Flow CLI",description:"How to start Flow emulator from the command line",source:"@site/docs/tools/flow-cli/start-emulator.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/start-emulator",permalink:"/docs/tools/flow-cli/start-emulator",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Start Emulator with the Flow CLI",sidebar_title:"Start Emulator",description:"How to start Flow emulator from the command line"},sidebar:"tutorialSidebar",previous:{title:"Save a protocol snapshot with the FLOW CLI",permalink:"/docs/tools/flow-cli/snapshot-save"},next:{title:"Using Super Commands with the Flow CLI",permalink:"/docs/tools/flow-cli/super-commands"}},u={},s=[{value:"Example Usage",id:"example-usage",level:2},{value:"Flags",id:"flags",level:2},{value:"Emulator Flags",id:"emulator-flags",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Flow CLI provides a command to start an emulator.\nThe Flow Emulator is a lightweight tool that emulates the behaviour of the real Flow network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow emulator\n")),(0,a.kt)("p",null,"\u26a0\ufe0f The emulator command expects configuration to be initialized. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/flow-cli/initialize-configuration"},"flow init")," command."),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> flow emulator\n\nINFO[0000] \u2699\ufe0f   Using service account 0xf8d6e0586b0a20c7  serviceAddress=f8d6e0586b0a20c7 ...\n...\n")),(0,a.kt)("p",null,"To learn more about using the Emulator, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-emulator"},"README of the repository"),"."),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("h3",{id:"emulator-flags"},"Emulator Flags"),(0,a.kt)("p",null,"You can specify any ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-emulator#configuration"},"emulator flags found here")," and they will be applied to the emulator service."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: valid filename")),(0,a.kt)("p",null,"Specify a filename for the configuration files, you can provide multiple configuration\nfiles by using ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times."),(0,a.kt)("h3",{id:"version-check"},"Version Check"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}m.isMDXComponent=!0}}]);