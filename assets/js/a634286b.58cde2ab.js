"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="Transactions",i={unversionedId:"tools/fcl-js/reference/transactions",id:"tools/fcl-js/reference/transactions",title:"Transactions",description:"Transactions let you send Cadence code to the Flow blockchain that permanently alters its state.",source:"@site/docs/tools/fcl-js/reference/transactions.mdx",sourceDirName:"tools/fcl-js/reference",slug:"/tools/fcl-js/reference/transactions",permalink:"/docs/tools/fcl-js/reference/transactions",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sdk-guidelines",permalink:"/docs/tools/fcl-js/reference/sdk-guidelines"},next:{title:"Signing and Verifying Arbitrary Data",permalink:"/docs/tools/fcl-js/reference/user-signatures"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"Transactions let you send Cadence code to the Flow blockchain that permanently alters its state."),(0,a.kt)("p",null,"We are assuming you have read the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.onflow.org/fcl/reference/scripts/"},"Scripts Documentation")," before this, as transactions are sort of scripts with more required things."),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," is used for sending scripts to the chain, ",(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," is used for building and sending transactions. Just like ",(0,a.kt)("a",{parentName:"p",href:"https://docs.onflow.org/fcl/reference/scripts/"},"scripts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fcl.mutate")," is a ",(0,a.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/advanced#tagged-template-literals"},"JavaScript Tagged Template Literal")," that we can pass Cadence code into."),(0,a.kt)("p",null,"Unlike scripts, they require a little more information, things like a proposer, authorizations and a payer, which may be a little confusing and overwhelming."),(0,a.kt)("h1",{id:"sending-your-first-transaction"},"Sending your first Transaction"),(0,a.kt)("p",null,"There is a lot to unpack in the following code snippet.\nIt sends a transaction to the Flow blockchain. For the transaction, the current user is authorizing it as both the ",(0,a.kt)("inlineCode",{parentName:"p"},"proposer")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"payer"),".\nSomething that is unique to Flow is the one paying for the transaction doesn't always need to be the one performing the transaction.\nProposers and Payers are special kinds of authorizations that are always required for a transaction.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"proposer")," acts similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"nonce")," in Ethereum transactions, and helps prevent repeat attacks.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"payer")," is who will be paying for the transaction.\nIf these are not set, FCL defaults to using the current user for all roles."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fcl.mutate")," will return a ",(0,a.kt)("inlineCode",{parentName:"p"},"transactionId"),". We can pass the response directly to ",(0,a.kt)("inlineCode",{parentName:"p"},"fcl.tx")," and then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"onceSealed")," method which resolves a promise when the transaction is sealed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as fcl from "@onflow/fcl"\n\nconst transactionId = await fcl.mutate({\n  cadence: `\n    transaction {\n      execute {\n        log("Hello from execute")\n      }\n    }\n  `,\n  proposer: fcl.currentUser,\n  payer: fcl.currentUser,\n  limit: 50\n})\n\nconst transaction = await fcl.tx(transactionId).onceSealed()\nconsole.log(transaction) // The transactions status and events after being sealed\n')),(0,a.kt)("h1",{id:"authorizing-a-transaction"},"Authorizing a transaction"),(0,a.kt)("p",null,"The below code snippet is the same as the above one, except for one extremely important difference.\nOur Cadence code this time has a prepare statement, and we are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"fcl.currentUser")," when constructing our transaction."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare")," statement's arguments directly map to the order of the authorizations in the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorizations")," array.\nFour authorizations means four ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthAccount"),"s as arguments passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare"),". In this case though there is only one, and it is the ",(0,a.kt)("inlineCode",{parentName:"p"},"currentUser"),"."),(0,a.kt)("p",null,"These authorizations are important as you can only access/modify an accounts storage if you have the said accounts authorization."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as fcl from "@onflow/fcl"\n\nconst transactionId = await fcl.mutate({\n  cadence: `\n    transaction {\n      prepare(acct: AuthAccount) {\n        log("Hello from prepare")\n      }\n      execute {\n        log("Hello from execute")\n      }\n    }\n  `,\n  proposer: fcl.currentUser,\n  payer: fcl.currentUser,\n  authorizations: [fcl.currentUser],\n  limit: 50\n})\n\nconst transaction = await fcl.tx(transactionId).onceSealed()\nconsole.log(transaction) // The transactions status and events after being sealed\n')),(0,a.kt)("p",null,"To learn more about ",(0,a.kt)("inlineCode",{parentName:"p"},"mutate"),", check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/fcl-js/reference/api#mutate"},"API documentation"),"."))}d.isMDXComponent=!0}}]);