"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8513],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(g,s(s({ref:e},p),{},{components:n})):a.createElement(g,s({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5498:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Send Transactions",sidebar_title:"Send Transactions",description:"How to send transactions"},s=void 0,i={unversionedId:"tools/flow-js-testing/send-transactions",id:"tools/flow-js-testing/send-transactions",title:"Send Transactions",description:"How to send transactions",source:"@site/docs/tools/flow-js-testing/send-transactions.md",sourceDirName:"tools/flow-js-testing",slug:"/tools/flow-js-testing/send-transactions",permalink:"/docs/tools/flow-js-testing/send-transactions",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Send Transactions",sidebar_title:"Send Transactions",description:"How to send transactions"},sidebar:"tutorialSidebar",previous:{title:"Jest Helpers",permalink:"/docs/tools/flow-js-testing/jest-helpers"},next:{title:"Folder Structure",permalink:"/docs/tools/flow-js-testing/structure"}},l={},d=[{value:"<code>sendTransaction(props)</code>",id:"sendtransactionprops",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>sendTransaction(name, signers, args)</code>",id:"sendtransactionname-signers-args",level:2},{value:"Usage",id:"usage-1",level:4}],p={toc:d},c="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Another common case is interactions that mutate network state - sending tokens from one account to another, minting new NFT, etc. Framework provides ",(0,r.kt)("inlineCode",{parentName:"p"},"sendTransaction")," method to achieve this. This method have 2 different signatures."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Required:")," Your project must follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/flow-js-testing/structure"},"required structure")," it must be ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/flow-js-testing/init"},"initialized")," to use the following functions.")),(0,r.kt)("h2",{id:"sendtransactionprops"},(0,r.kt)("inlineCode",{parentName:"h2"},"sendTransaction(props)")),(0,r.kt)("p",null,"Send transaction to network.\nProvides explicit control over how you pass values."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"props")," object accepts following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string representation of Cadence transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the file in ",(0,r.kt)("inlineCode",{parentName:"td"},"transaction")," folder to use (sans ",(0,r.kt)("inlineCode",{parentName:"td"},".cdc")," extension)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:null},"[any]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of arguments to pass to transaction. Optional if transaction does not expect any arguments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"signers")),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#address"},"Address")," or ",(0,r.kt)("a",{parentName:"td",href:"/docs/tools/flow-js-testing/api#signerinfoobject"},"SignerInfo"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of ",(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#address"},"Address")," or ",(0,r.kt)("a",{parentName:"td",href:"/docs/tools/flow-js-testing/api#signerinfoobject"},"SignerInfo")," objects representing transaction autorizers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addressMap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/tools/flow-js-testing/api#addressmap"},"AddressMap")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"name/address map to use as lookup table for addresses in import statements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transformers")),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"./#cadencetransformer"},"CadenceTransformer"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of operators to modify the code, before submitting it to network")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Required:")," Either ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field shall be specified. Method will throw an error if both of them are empty.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field provided, framework will source code from file and override value passed via ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," field.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udce3 if ",(0,r.kt)("inlineCode",{parentName:"p"},"signers")," field not provided, service account will be used to authorize the transaction.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udce3 Pass ",(0,r.kt)("inlineCode",{parentName:"p"},"addressMap")," only in cases, when you would want to override deployed contract. Otherwide\nimports can be resolved automatically without explicitly passing them via ",(0,r.kt)("inlineCode",{parentName:"p"},"addressMap")," field")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {\n  init,\n  emulator,\n  sendTransaction,\n  getAccountAddress,\n} from "@onflow/flow-js-testing"\n\nconst main = async () => {\n  const basePath = path.resolve(__dirname, "../cadence")\n\n  // Init framework\n  await init(basePath)\n  // Start emulator\n  await emulator.start()\n\n  // Define code and arguments we want to pass\n  const code = `\n    transaction(message: String){\n      prepare(signer: AuthAccount){\n        log(message)\n      }\n    }\n  `\n  const args = ["Hello, from Cadence"]\n  const Alice = await getAccountAddress("Alice")\n  const signers = [Alice]\n\n  const [result, error] = await sendTransaction({code, args, signers})\n  console.log({result}, {error})\n\n  // Stop emulator instance\n  await emulator.stop()\n}\n\nmain()\n')),(0,r.kt)("h2",{id:"sendtransactionname-signers-args"},(0,r.kt)("inlineCode",{parentName:"h2"},"sendTransaction(name, signers, args)")),(0,r.kt)("p",null,"This signature provides simplified way to send a transaction, since most of the time you will utilize existing\nCadence files."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the file in ",(0,r.kt)("inlineCode",{parentName:"td"},"transaction")," folder to use (sans ",(0,r.kt)("inlineCode",{parentName:"td"},".cdc")," extension)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:null},"[any]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of arguments to pass to transaction. Optional if transaction does not expect any arguments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"signers")),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#address"},"Address")," or ",(0,r.kt)("a",{parentName:"td",href:"/docs/tools/flow-js-testing/api#signerinfoobject"},"SignerInfoObject"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of ",(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#address"},"Address")," or array of ",(0,r.kt)("a",{parentName:"td",href:"/docs/tools/flow-js-testing/api#signerinfoobject"},"SignerInfoObject")," representing transaction autorizers")))),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {\n  init,\n  emulator,\n  sendTransaction,\n  shallPass,\n} from "@onflow/flow-js-testing"\n\nconst main = async () => {\n  const basePath = path.resolve(__dirname, "../cadence")\n\n  // Init framework\n  await init(basePath)\n  // Start emulator\n  await emulator.start()\n\n  // Define arguments we want to pass\n  const args = ["Hello, Cadence"]\n\n  const [result, error, logs] = await shallPass(\n    sendTransaction("log-message", [], args)\n  )\n  console.log({result}, {error}, {logs})\n\n  // Stop the emulator instance\n  await emulator.stop()\n}\n\nmain()\n')))}m.isMDXComponent=!0}}]);