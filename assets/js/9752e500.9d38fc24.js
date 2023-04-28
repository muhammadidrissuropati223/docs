"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="GoLand",l={unversionedId:"cadence/goland",id:"cadence/goland",title:"GoLand",description:"Linter Integration",source:"@site/docs/cadence/goland.md",sourceDirName:"cadence",slug:"/cadence/goland",permalink:"/docs/cadence/goland",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/docs/cadence/development"},next:{title:"Introduction to Cadence",permalink:"/docs/cadence/"}},c={},p=[{value:"Linter Integration",id:"linter-integration",level:2}],u={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"goland"},"GoLand"),(0,a.kt)("h2",{id:"linter-integration"},"Linter Integration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build golangci-lint and the custom analyzers: Run ",(0,a.kt)("inlineCode",{parentName:"li"},"make build-linter")),(0,a.kt)("li",{parentName:"ul"},"In GoLand go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Preferences")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Tools")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"File Watchers")," -> Add ",(0,a.kt)("inlineCode",{parentName:"li"},"golangci-lint"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"File Type: Go files"),(0,a.kt)("li",{parentName:"ul"},"Scope: Project files"),(0,a.kt)("li",{parentName:"ul"},"Program: ",(0,a.kt)("inlineCode",{parentName:"li"},"/path/to/cadence/tools/golangci-lint/golangci-lint")," (NOTE: NOT ",(0,a.kt)("inlineCode",{parentName:"li"},"~/go/bin/golangci-lint"),")"),(0,a.kt)("li",{parentName:"ul"},"Arguments: ",(0,a.kt)("inlineCode",{parentName:"li"},"run $FileDir$")),(0,a.kt)("li",{parentName:"ul"},"Advanced Options:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Create output file from stdout"),(0,a.kt)("li",{parentName:"ul"},"Show console: Never"),(0,a.kt)("li",{parentName:"ul"},"Output filters: ",(0,a.kt)("inlineCode",{parentName:"li"},"$FILE_PATH$:$LINE$:$COLUMN$: $MESSAGE$"))))))))}s.isMDXComponent=!0}}]);