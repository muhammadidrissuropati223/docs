"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),k=a,f=p["".concat(c,".").concat(k)]||p[k]||d[k]||l;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const l={title:"FLOW for Wallets & Custodians",sidebar_title:"For Wallets & Custodians",description:"How to integrate your wallet software with FLOW"},r=void 0,i={unversionedId:"flow/flow-token/wallets",id:"flow/flow-token/wallets",title:"FLOW for Wallets & Custodians",description:"How to integrate your wallet software with FLOW",source:"@site/docs/flow/flow-token/wallets.mdx",sourceDirName:"flow/flow-token",slug:"/flow/flow-token/wallets",permalink:"/docs/flow/flow-token/wallets",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"FLOW for Wallets & Custodians",sidebar_title:"For Wallets & Custodians",description:"How to integrate your wallet software with FLOW"},sidebar:"tutorialSidebar",previous:{title:"Locked/Leased FLOW Account Setup",permalink:"/docs/flow/flow-token/locked-account-setup"},next:{title:"How to Launch a Fungible Token on Flow",permalink:"/docs/flow/fungible-tokens"}},c={},s=[{value:"Creating an Account",id:"creating-an-account",level:2},{value:"Receiving FLOW Deposits",id:"receiving-flow-deposits",level:2},{value:"Detecting Deposits",id:"detecting-deposits",level:3},{value:"Receiving FLOW from an ICO",id:"receiving-flow-from-an-ico",level:2},{value:"FLOW.ICO vs FLOW",id:"flowico-vs-flow",level:3},{value:"Creating the FLOW.ICO Vault",id:"creating-the-flowico-vault",level:3},{value:"Receiving a FLOW.ICO Deposit",id:"receiving-a-flowico-deposit",level:3},{value:"Getting the FLOW.ICO Balance",id:"getting-the-flowico-balance",level:3},{value:"Getting the Balance of an Account",id:"getting-the-balance-of-an-account",level:2},{value:"From Cadence",id:"from-cadence",level:3},{value:"From the Access API",id:"from-the-access-api",level:3},{value:"Sending FLOW",id:"sending-flow",level:2},{value:"Staking FLOW",id:"staking-flow",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-an-account"},"Creating an Account"),(0,a.kt)("p",null,"A user needs a Flow account in order to receive, hold and send FLOW tokens.\nThe ",(0,a.kt)("a",{parentName:"p",href:"/concepts/accounts-and-keys"},"accounts & keys documentation")," provides a detailed\noverview of how accounts work on Flow."),(0,a.kt)("p",null,"You can create an account using templates and helper code from one of the Flow SDKs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-go-sdk/blob/master/examples/create_account/main.go"},"Create an Account with the Flow Go SDK"))),(0,a.kt)("h2",{id:"receiving-flow-deposits"},"Receiving FLOW Deposits"),(0,a.kt)("p",null,"Every Flow account supports the FLOW token by default. Once an account is created, it is\nalready provisioned to receive FLOW deposits from other users."),(0,a.kt)("p",null,"FLOW, like any other ",(0,a.kt)("inlineCode",{parentName:"p"},"FungibleToken")," on Flow, is stored in a special resource called a ",(0,a.kt)("inlineCode",{parentName:"p"},"FungibleToken.Vault"),".\nEvery new account is created with an empty FLOW vault stored at the ",(0,a.kt)("inlineCode",{parentName:"p"},"/storage/flowTokenVault")," storage path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"let vault = account.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)\n")),(0,a.kt)("p",null,"Conceptually, a vault is like a mailbox with a lock. Anybody can deposit tokens\nbut only the account holder can withdraw them. This functionality is made possible by\nresource capabilities in Cadence. Each account publishes a ",(0,a.kt)("inlineCode",{parentName:"p"},"FungibleToken.Receiver")," interface\nthat points to its FLOW vault. The receiver is the mail slot; it allows others to\ndeposit FLOW into a vault without stealing what's inside."),(0,a.kt)("p",null,"Here's how you deposit FLOW into an account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},'let receiver = account\n  .getCapability(/public/flowTokenReceiver)\n  .borrow<&{FungibleToken.Receiver}>()\n    ?? panic("Could not borrow FungibleToken.Receiver reference")\n\nreceiver.deposit(from: <-senderVault)\n')),(0,a.kt)("h3",{id:"detecting-deposits"},"Detecting Deposits"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowToken")," contract emits a ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowToken.TokensDeposited")," event whenever tokens\nmove between accounts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"pub event TokensDeposited(amount: UFix64, to: Address?)\n")),(0,a.kt)("p",null,"You can query for this event to detect when tokens are deposited into a user's account."),(0,a.kt)("p",null,"TODO: Link to event querying docs"),(0,a.kt)("h2",{id:"receiving-flow-from-an-ico"},"Receiving FLOW from an ICO"),(0,a.kt)("p",null,"A portion of the initial FLOW token supply will be distributed directly to new and\nexisting backers who participate in the initial coin offering (ICO) of FLOW.\nTokens distributed through an ICO are subject to a lockup period,\nmeaning they can't be sold, transferred or traded until sufficient time has passed."),(0,a.kt)("p",null,"Although locked tokens can't be liquidated, they can still be used for staking.\nAny staking rewards accrued from locked tokens are deposited into the rewardee's account\nas ",(0,a.kt)("em",{parentName:"p"},"unlocked tokens"),"."),(0,a.kt)("h3",{id:"flowico-vs-flow"},"FLOW.ICO vs FLOW"),(0,a.kt)("p",null,"It is the responsibility of the custodian to ensure that FLOW received from an ICO event (FLOW.ICO)\nis not liquidated before the legal lockup period has passed. In order to ensure that this does\nnot happen, it is important to store FLOW.ICO tokens separately from unlocked FLOW tokens."),(0,a.kt)("p",null,"To achieve this separation, a custodian should provision a new token vault that follows this standard:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FLOW.ICO Token Vault")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"FlowToken.Vault")),(0,a.kt)("li",{parentName:"ul"},"Location: ",(0,a.kt)("inlineCode",{parentName:"li"},"/storage/lockedFlowTokenVault"))),(0,a.kt)("h3",{id:"creating-the-flowico-vault"},"Creating the FLOW.ICO Vault"),(0,a.kt)("p",null,"The following Cadence transaction creates an empty FLOW token vault and stores it at the standard\nFLOW.ICO storage path. This transaction assumes that the account has already been created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"import FungibleToken from 0xFUNGIBLE_TOKEN_ADDRESS\nimport FlowToken from 0xFLOW_TOKEN_ADDRESS\n\ntransaction {\n  prepare(signer: AuthAccount) {\n    // Create an empty FlowToken Vault and store it\n    signer.save(<-FlowToken.createEmptyVault(), to: /storage/lockedFlowTokenVault)\n\n    // Create a public capability to the Vault that only exposes\n    // the deposit function through the Receiver interface\n    signer.link<&FlowToken.Vault{FungibleToken.Receiver}>(\n        /public/lockedFlowTokenReceiver,\n        target: /storage/lockedFlowTokenVault\n    )\n\n    // Create a public capability to the Vault that only exposes\n    // the balance field through the Balance interface\n    signer.link<&FlowToken.Vault{FungibleToken.Balance}>(\n        /public/lockedFlowTokenBalance,\n        target: /storage/lockedFlowTokenVault\n    )\n  }\n}\n")),(0,a.kt)("p",null,"Below is a variation of the above transaction that provisions the FLOW.ICO vault at\nthe time of account creation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"import FungibleToken from 0xFUNGIBLE_TOKEN_ADDRESS\nimport FlowToken from 0xFLOW_TOKEN_ADDRESS\n\ntransaction {\n  prepare(signer: AuthAccount) {\n    let newAccount = AuthAccount(payer: signer)\n\n    newAccount.save(<-FlowToken.createEmptyVault(), to: /storage/lockedFlowTokenVault)\n\n    newAccount.link<&FlowToken.Vault{FungibleToken.Receiver}>(\n        /public/lockedFlowTokenReceiver,\n        target: /storage/lockedFlowTokenVault\n    )\n\n    newAccount.link<&FlowToken.Vault{FungibleToken.Balance}>(\n        /public/lockedFlowTokenBalance,\n        target: /storage/lockedFlowTokenVault\n    )\n  }\n}\n")),(0,a.kt)("h3",{id:"receiving-a-flowico-deposit"},"Receiving a FLOW.ICO Deposit"),(0,a.kt)("p",null,"All FLOW tokens deposited from an ICO event will be automatically routed to the FLOW.ICO vault\nstored at the ",(0,a.kt)("inlineCode",{parentName:"p"},"/storage/lockedFlowTokenVault")," storage path. If an account does not contain\na vault at this path, it cannot receive ICO deposits."),(0,a.kt)("h3",{id:"getting-the-flowico-balance"},"Getting the FLOW.ICO Balance"),(0,a.kt)("p",null,"See the next section for an example of how to query the balance of a ",(0,a.kt)("inlineCode",{parentName:"p"},"FlowToken.Vault")," instance."),(0,a.kt)("h2",{id:"getting-the-balance-of-an-account"},"Getting the Balance of an Account"),(0,a.kt)("h3",{id:"from-cadence"},"From Cadence"),(0,a.kt)("p",null,"Similar to the token receiver, each account publishes a ",(0,a.kt)("inlineCode",{parentName:"p"},"FungibleToken.Balance")," capability\nthat allows anybody to read the balance of an account. This allows Cadence programs\nto fetch the balance of an account directly in code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},'let balanceRef = account\n  .getCapability(/public/flowTokenBalance)\n  .borrow<&FlowToken.Vault{FungibleToken.Balance}>()\n    ?? panic("Could not borrow FungibleToken.Balance reference")\n\nlog(balanceRef.balance)\n')),(0,a.kt)("p",null,"The above code can be executed as part of a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-ft/blob/master/transactions/scripts/get_balance.cdc"},"read-only Cadence script"),"."),(0,a.kt)("h3",{id:"from-the-access-api"},"From the Access API"),(0,a.kt)("p",null,"The FLOW Access API makes it easy to query an account's balance without writing any\nCadence code."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"#"},"GetAccount RPC method")," includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"balance")," field, which holds the FLOW token balance\nfor the requested account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/onflow/flow-go-sdk"\n  "github.com/onflow/flow-go-sdk/client"\n)\n\nfunc main() {\n  flowClient, _ := client.New(accessAPIHost)\n\n  account, _ := flowClient.GetAccount(ctx, address)\n\n  fmt.Println(account.Balance)\n}\n')),(0,a.kt)("h2",{id:"sending-flow"},"Sending FLOW"),(0,a.kt)("p",null,"Below is an example of a transaction that transfers FLOW from one account to another."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"import FungibleToken from 0xFUNGIBLE_TOKEN_ADDRESS\nimport FlowToken from 0xFLOW_TOKEN_ADDRESS\n\ntransaction(amount: UFix64, to: Address) {\n\n  // The FungibleToken.Vault resource that holds the tokens to be transferred\n  let sentVault: @FungibleToken.Vault\n\n  prepare(sender: AuthAccount) {\n    // Get a reference to the sender's stored vault\n    let vault = sender.\n      borrow<&ExampleToken.Vault>(from: /storage/flowTokenVault)\n        ?? panic(\"Could not borrow reference to the owner's Vault!\")\n\n    // Withdraw tokens from the sender's stored vault\n    self.sentVault <- vault.withdraw(amount: amount)\n  }\n\n  execute {\n    // Get the recipient's public account object\n    let recipient = getAccount(to)\n\n    // Get a reference to the recipient's FungibleToken.Receiver\n    let receiver = recipient\n      .getCapability(/public/flowTokenReceiver)\n      .borrow<&{FungibleToken.Receiver}>()\n        ?? panic(\"Could not borrow receiver reference to the recipient's Vault\")\n\n    // Deposit the withdrawn tokens in the recipient's receiver\n    receiver.deposit(from: <-self.sentVault)\n  }\n}\n")),(0,a.kt)("p",null,"This transaction template is available for use in our SDKs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/onflow/fcl-js/tree/master/packages/six-transfer-tokens"},"Transfer Tokens with the FCL (Flow Client Library)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Coming soon: Transfer Tokens with the Go SDK"))),(0,a.kt)("h2",{id:"staking-flow"},"Staking FLOW"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/staking"},"FLOW staking documentation")," outlines the steps a custodian can take\nto support staking through a trusted node operator."))}d.isMDXComponent=!0}}]);