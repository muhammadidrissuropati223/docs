"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"Run Cadence tests with the Flow CLI",sidebar_title:"Run Cadence tests",description:"How to run Cadence tests from the command line"},o=void 0,s={unversionedId:"tools/flow-cli/run-tests",id:"tools/flow-cli/run-tests",title:"Run Cadence tests with the Flow CLI",description:"How to run Cadence tests from the command line",source:"@site/docs/tools/flow-cli/run-tests.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/run-tests",permalink:"/docs/tools/flow-cli/run-tests",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Run Cadence tests with the Flow CLI",sidebar_title:"Run Cadence tests",description:"How to run Cadence tests from the command line"},sidebar:"tutorialSidebar",previous:{title:"Add Contracts to a Flow Project",permalink:"/docs/tools/flow-cli/project-contracts"},next:{title:"Flow CLI security",permalink:"/docs/tools/flow-cli/security"}},i={},c=[{value:"Example Usage",id:"example-usage",level:2},{value:"Flags",id:"flags",level:2},{value:"Coverage",id:"coverage",level:3},{value:"Coverage Report File",id:"coverage-report-file",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Flow CLI provides a command to run Cadence tests. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow test /path/to/test_script.cdc\n")),(0,a.kt)("p",null,"\u26a0\ufe0f The ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," command expects configuration to be initialized. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/flow-cli/initialize-configuration"},"flow init")," command."),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("p",null,"A simple Cadence script ",(0,a.kt)("inlineCode",{parentName:"p"},"test_script.cdc"),", which has a test case for running a cadence script on-chain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},'import Test\n\npub fun testSimpleScript() {\n    var blockchain = Test.newEmulatorBlockchain()\n    var result = blockchain.executeScript(\n        "pub fun main(a: Int, b: Int): Int { return a + b }",\n        [2, 3]\n    )\n    \n    assert(result.status == Test.ResultStatus.succeeded)\n    assert((result.returnValue! as! Int) == 5)\n}\n')),(0,a.kt)("p",null,"Above test-script can be run with the CLI as follows, and the test results will be printed on the console."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> flow test test_script.cdc\n\nRunning tests...\n\nTest results: "test_script.cdc"\n- PASS: testSimpleScript\n\n')),(0,a.kt)("p",null,"To learn more about writing tests in Cadence, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/cadence/testing-framework"},"Cadence testing framework"),"."),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("h3",{id:"coverage"},"Coverage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--cover")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"cover")," flag to calculate coverage report for the code being tested."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> flow test --cover test_script.cdc\n\nRunning tests...\n\nTest results: "test_script.cdc"\n- PASS: testSimpleScript\nCoverage: 100.0% of statements\n\n')),(0,a.kt)("h3",{id:"coverage-report-file"},"Coverage Report File"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--coverprofile")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: valid filename"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"coverage.json"))),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"coverprofile")," to specify the filename where the calculated coverage report is to be written."))}d.isMDXComponent=!0}}]);