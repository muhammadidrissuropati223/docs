"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={title:"Proving Ownership of a Flow Account"},r=void 0,s={unversionedId:"tools/fcl-js/reference/proving-authentication",id:"tools/fcl-js/reference/proving-authentication",title:"Proving Ownership of a Flow Account",description:"Proving Ownership of a Flow Account",source:"@site/docs/tools/fcl-js/reference/proving-authentication.mdx",sourceDirName:"tools/fcl-js/reference",slug:"/tools/fcl-js/reference/proving-authentication",permalink:"/docs/tools/fcl-js/reference/proving-authentication",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Proving Ownership of a Flow Account"},sidebar:"tutorialSidebar",previous:{title:"Interaction Templates",permalink:"/docs/tools/fcl-js/reference/interaction-templates"},next:{title:"Scripts",permalink:"/docs/tools/fcl-js/reference/scripts"}},c={},l=[{value:"Proving Ownership of a Flow Account",id:"proving-ownership-of-a-flow-account",level:2},{value:"Authenticating a user using <code>account-proof</code>",id:"authenticating-a-user-using-account-proof",level:3},{value:"Implementation considerations:",id:"implementation-considerations",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"proving-ownership-of-a-flow-account"},"Proving Ownership of a Flow Account"),(0,o.kt)("p",null,"A common desire that application developers have is to be able to prove that a\nuser controls an on-chain account. Proving ownership of an on-chain account is a\nway to authenticate a user with an application backend. Fortunately,\nFCL provides a way to achieve this."),(0,o.kt)("p",null,"During user authentication, some FCL compatible wallets will choose to support\nthe FCL ",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof")," service. If a wallet chooses to support this service, and\nthe user approves the signing of message data, they will return ",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof")," data\nand a signature(s) that can be used to prove a user controls an on-chain account."),(0,o.kt)("p",null,"We'll walk through how you, an application developer, can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof")," service to\nauthenticate a user."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Are you an FCL Wallet Developer? Check out the wallet provider specific docs\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/fcl-js/tree/master/packages/fcl/src/wallet-provider-spec/provable-authn.md"},"here"))),(0,o.kt)("h3",{id:"authenticating-a-user-using-account-proof"},"Authenticating a user using ",(0,o.kt)("inlineCode",{parentName:"h3"},"account-proof")),(0,o.kt)("p",null,"In order to authenticate your users via a wallet provider's account-proof service, your application needs to\nconfigure FCL by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.accountProof.resolver")," and providing two pieces of information."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.accountProof.resolver")," is an async resolver function used by FCL to retrieve account proof data\nfrom your application server. It can be set in your application configuration under the ",(0,o.kt)("inlineCode",{parentName:"p"},"fcl.accountProof.resolver"),"\nkey. The resolved data should include a specific application identifier (",(0,o.kt)("inlineCode",{parentName:"p"},"appIdentifier"),") and a random ",(0,o.kt)("inlineCode",{parentName:"p"},"nonce"),".\nThis data will be sent to the wallet for signing by the user. If the user approves and authentication is successfull,\na signature is returned to the client in the data field of an ",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof")," service."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Application Identifier")),(0,o.kt)("p",null,"An application identifier is a human-readable string that uniquely identifies your application name.\nThe identifier is displayed by wallets when users are asked to approve a signing request.\nIt helps users compare against the request origin and detect some malicious phishing attempts,\nimproving trust of the application and signing process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Random Nonce")),(0,o.kt)("p",null,"In addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"appIdentifier")," your application must provide a ",(0,o.kt)("strong",{parentName:"p"},"minimum 32-byte random nonce")," as a hex string."),(0,o.kt)("p",null,"If for any reason your application backend does not want to request an ",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof")," during authentication,\nit should send a response of ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". If FCL receives a ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," response from the ",(0,o.kt)("inlineCode",{parentName:"p"},"accountProof.resolver")," it will\ncontinue the authentication process with the wallet but will not request an account-proof and no signature will be returned."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the case of a network or server error FCL will cancel the authentication process and return a rejected promise.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import {config} from "@onflow/fcl"\n\ntype AccountProofData {\n  // e.g. "Awesome App (v0.0)" - A human readable string to identify your application during signing\n  appIdentifier: string;  \n\n  // e.g. "75f8587e5bd5f9dcc9909d0dae1f0ac5814458b2ae129620502cb936fde7120a" - minimum 32-byte random nonce as hex string\n  nonce: string;          \n}\n\ntype AccountProofDataResolver = () => Promise<AccountProofData | null>;\n\nconfig({\n  "fcl.accountProof.resolver": accountProofDataResolver\n})\n')),(0,o.kt)("p",null,"Here is the suggested order of operations of how your application might use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof")," service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A user would like to authenticate via your application client using FCL. The process is triggered\nby a call to ",(0,o.kt)("inlineCode",{parentName:"li"},"fcl.authenticate()"),". If ",(0,o.kt)("inlineCode",{parentName:"li"},"fcl.accountProof.resolver")," is configured, FCL will attempt\nto retrieve the account proof data (",(0,o.kt)("inlineCode",{parentName:"li"},"appIdentifier")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"nonce"),") and trigger your server to start a new\naccount proof authentication process."),(0,o.kt)("li",{parentName:"ul"},"Your application server generates a ",(0,o.kt)("strong",{parentName:"li"},"minimum 32-byte random nonce")," using a local source of entropy and\nsends it to the client. The server saves the challenge for future look-ups."),(0,o.kt)("li",{parentName:"ul"},"If FCL successfully retrieves the ",(0,o.kt)("inlineCode",{parentName:"li"},"account-proof")," data, it continues the authentication process over a secure channel with the wallet.\nFCL includes the ",(0,o.kt)("inlineCode",{parentName:"li"},"appIdentifier")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"nonce")," as part of the ",(0,o.kt)("inlineCode",{parentName:"li"},"FCL:VIEW:READY:RESPONSE")," or HTTP POST request body.\nIf the resolver function call fails to retrieve the nonce, FCL will cancel the authentication process."),(0,o.kt)("li",{parentName:"ul"},"If the wallet supports account proofs and the user approves authentication with the wallet, the wallet will return the ",(0,o.kt)("inlineCode",{parentName:"li"},"account-proof"),"\nservice with its response.")),(0,o.kt)("p",null,"The data within the ",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof")," service will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  f_type: "Service",                    // Its a service!\n  f_vsn: "1.0.0",                       // Follows the v1.0.0 spec for the service\n  type: "account-proof",                // The type of service it is\n  method: "DATA",                       // Its data!\n  uid: "awesome-wallet#account-proof",  // A unique identifier for the service\n  data: {\n    f_type: "account-proof",\n    f_vsn: "2.0.0"\n\n    // The user\'s address (8 bytes, i.e 16 hex characters)\n    address: "0xf8d6e0586b0a20c7",                 \n\n    // Nonce signed by the current account-proof (minimum 32 bytes in total, i.e 64 hex characters)\n    nonce: "75f8587e5bd5f9dcc9909d0dae1f0ac5814458b2ae129620502cb936fde7120a",\n\n    signatures: [CompositeSignature],\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Your application client initiates a secure channel with your application server\nto relay the ",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof")," data and authenticate the user with your server.\nSubsequent exchanges between the client and server will happen over this channel.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Your application server receives the ",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof")," data structure, and can then\nbegin the verification process."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The server checks if the Flow address corresponds to an existing application\naccount and determines whether it needs to sign in a returning user or create\na new account. It is up to your application to decide how to manage\nthe two cases."),(0,o.kt)("li",{parentName:"ul"},"The server looks the challenge up. If the nonce is not found or the nonce\nhas expired, reject the authentication request, otherwise continue."),(0,o.kt)("li",{parentName:"ul"},"The server determines whether the ",(0,o.kt)("inlineCode",{parentName:"li"},"CompositeSignature")," in the\n",(0,o.kt)("inlineCode",{parentName:"li"},"account-proof")," data structure contains valid signatures for the nonce\nand on-chain accounts (more details in the section below on how this is done)."),(0,o.kt)("li",{parentName:"ul"},"If the verification is successful, delete the ",(0,o.kt)("inlineCode",{parentName:"li"},"nonce")," or mark it as expired,\nthe application account defined by the on-chain address is successfully\nlogged in. Otherwise the authentication fails and the ",(0,o.kt)("inlineCode",{parentName:"li"},"nonce")," is not deleted.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Verification")),(0,o.kt)("p",null,"Your application can verify the signature against the data from ",(0,o.kt)("inlineCode",{parentName:"p"},"account-proof"),"\ndata using FCL's provided utility:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\nimport { AppUtils } from "@onflow/fcl"\n\n  const accountProofData = {\n    accountProof.address,   // address of the user authenticating\n    accountProof.nonce,     // nonce\n    accountProof.signatures // signatures\n  }\n  \n  const isValid = await AppUtils.verifyAccountProof(\n    appIdentifier,\n    accountProofData\n  )\n')),(0,o.kt)("h2",{id:"implementation-considerations"},"Implementation considerations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The authentication assumes the Flow address is the identifier of the user's application account.\nIf an existing user doesn't have a Flow address in their profile, or if they decide to authenticate using\na Flow address different than the one saved in their profile, the user's account won't be found and the\nprocess would consider a new user creating an account. It is useful for your application to consider\nother authentication methods that allow an existing user to update the Flow address in their profile so\nthey are able to use FCL authentication."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"account-proof")," flow as described in this document,\nthe backend doesn't know the user's account address at the moment of generating a nonce.\nThis results in the nonces not being tied to particular Flow addresses. The backend should\nenforce an expiry window for each nonce to avoid the pool of valid nonces from growing indefinitely.\nYour application is encouraged to implement further mitigations against malicious attempts and\nmaintain a scalable authentication process."),(0,o.kt)("li",{parentName:"ul"},"FCL ",(0,o.kt)("inlineCode",{parentName:"li"},"account-proof")," provides functionality to prove a user is in control of\na Flow address. All other aspects of authentication, authorization and session management\nare up to the application. There are many resources available for setting up secure user\nauthentication systems. Application developers should carefully consider what's best for their use\ncase and follow industry best practices."),(0,o.kt)("li",{parentName:"ul"},"It is important to use a secure source of entropy to generate the random nonces. The source should insure\nnonces are not predictable by looking at previously generated nonces. Moreover, backend should use its own\nlocal source and not rely on a publicly available source. Using a nonce of at least 32-bytes insures\nit is extremely unlikely to have a nonce collision."),(0,o.kt)("li",{parentName:"ul"},"Your application identifier ",(0,o.kt)("inlineCode",{parentName:"li"},"appIdentifier")," is a constant defined by your backend. It is\nimportant that the backend uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"appIdentifier")," it expects when verifying the signatures,\nand not rely on an identifier passed along with the ",(0,o.kt)("inlineCode",{parentName:"li"},"account-proof"),". For this reason,\n",(0,o.kt)("inlineCode",{parentName:"li"},"appIdentifier")," is not included in the ",(0,o.kt)("inlineCode",{parentName:"li"},"account-proof")," data."),(0,o.kt)("li",{parentName:"ul"},"A successful FCL authentication proves the user fully controls a Flow account. This means the user\ncontrols one or many account keys with weights that add up to the full account weight. The authentication\nwould fail if the user doesn't control keys that add up to a full weight.")))}d.isMDXComponent=!0}}]);