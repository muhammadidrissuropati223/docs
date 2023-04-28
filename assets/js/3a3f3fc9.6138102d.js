"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Manage Flow Configuration",sidebar_title:"Manage Configuration",description:"How to configure the Flow CLI"},i=void 0,l={unversionedId:"tools/flow-cli/manage-configuration",id:"tools/flow-cli/manage-configuration",title:"Manage Flow Configuration",description:"How to configure the Flow CLI",source:"@site/docs/tools/flow-cli/manage-configuration.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/manage-configuration",permalink:"/docs/tools/flow-cli/manage-configuration",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Manage Flow Configuration",sidebar_title:"Manage Configuration",description:"How to configure the Flow CLI"},sidebar:"tutorialSidebar",previous:{title:"Install the Flow CLI",permalink:"/docs/tools/flow-cli/install"},next:{title:"Create Flow app from scaffold",permalink:"/docs/tools/flow-cli/project-app"}},c={},u=[{value:"Example Usage",id:"example-usage",level:2},{value:"Configuration",id:"configuration",level:3}],p={toc:u},f="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Configuration should be managed by using ",(0,r.kt)("inlineCode",{parentName:"p"},"config add"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"config remove")," commands. Using add command will also\nvalidate values that will be added to the configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"flow config add <account|contract|network|deployment>\nflow config remove <account|contract|network|deployment>\n")),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"flow config add account\n\nName: Admin\nAddress: f8d6e0586b0a20c7\n\u2714 ECDSA_P256\n\u2714 SHA3_256\nPrivate key: e382a0e494...9285809356\nKey index (Default: 0): 0\n")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flag: ",(0,r.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,r.kt)("li",{parentName:"ul"},"Short Flag: ",(0,r.kt)("inlineCode",{parentName:"li"},"-f")),(0,r.kt)("li",{parentName:"ul"},"Valid inputs: valid filename")),(0,r.kt)("p",null,"Specify a filename for the configuration files, you can provide multiple configuration\nfiles by using ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times."))}s.isMDXComponent=!0}}]);