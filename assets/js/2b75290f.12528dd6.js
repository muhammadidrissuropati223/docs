"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||c;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<c;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const c={title:"7. Marketplace Setup"},r=void 0,i={unversionedId:"cadence/tutorial/07-marketplace-setup",id:"cadence/tutorial/07-marketplace-setup",title:"7. Marketplace Setup",description:"In this tutorial, we're going to create a marketplace that uses both the fungible",source:"@site/docs/cadence/tutorial/07-marketplace-setup.mdx",sourceDirName:"cadence/tutorial",slug:"/cadence/tutorial/07-marketplace-setup",permalink:"/docs/cadence/tutorial/07-marketplace-setup",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"7. Marketplace Setup"},sidebar:"tutorialSidebar",previous:{title:"6. Fungible Tokens",permalink:"/docs/cadence/tutorial/06-fungible-tokens"},next:{title:"8. Marketplace",permalink:"/docs/cadence/tutorial/08-marketplace-compose"}},l={},u=[],p=(s="Callout",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var s;const m={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we're going to create a marketplace that uses both the fungible\nand non-fungible token (NFTs) contracts that we have learned about in previous tutorials.\nThis page requires you to execute a series of transactions to setup your accounts to complete the Marketplace tutorial.\nThe next page contains the main content of the tutorial."),(0,o.kt)("p",null,"When you are done with the tutorial, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/nft-storefront"},"NFTStorefront repo"),"\nfor an example of a production ready marketplace that you can use right now on testnet or mainnet!"),(0,o.kt)("hr",null),(0,o.kt)(p,{type:"success",mdxType:"Callout"},"Open the starter code for this tutorial in the Flow Playground:",(0,o.kt)("a",{href:"https://play.onflow.org/49ec2856-1258-4675-bac3-850b4bae1929",target:"_blank"},"https://play.onflow.org/49ec2856-1258-4675-bac3-850b4bae1929"),(0,o.kt)("br",null),"The tutorial will be asking you to take various actions to interact with this code."),(0,o.kt)("p",null,"If you have already completed the Marketplace tutorial, please move on to ",(0,o.kt)("a",{parentName:"p",href:"10-resources-compose"},"Composable Resources: Kitty Hats"),"."),(0,o.kt)("p",null,"This guide will help you quickly get the playground to the state you need to complete the Marketplace tutorial.\nThe marketplace tutorial uses the Fungible Token and Non-Fungible token contracts\nto allow users to buy and sell NFTs with fungible tokens."),(0,o.kt)("p",null,"The state of the accounts is the same as if you had completed the Fungible Token\nand Non-Fungible Token tutorials in the same playground session.\nHaving your playground in this state is necessary to follow the ",(0,o.kt)("a",{parentName:"p",href:"08-marketplace-compose"},"Composable Smart Contracts: Marketplace")," tutorial."),(0,o.kt)("hr",null),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x01"),". Make sure the Fungible Token definitions in ",(0,o.kt)("inlineCode",{parentName:"li"},"ExampleToken.cdc")," from the fungible token tutorial are in this account."),(0,o.kt)("li",{parentName:"ol"},"Deploy the ExampleToken code to account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x01"),"."),(0,o.kt)("li",{parentName:"ol"},"Switch to account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x02")," by selecting account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x02")," from the account selection menu."),(0,o.kt)("li",{parentName:"ol"},"Make sure you have the NFT definitions in ",(0,o.kt)("inlineCode",{parentName:"li"},"ExampleNFT.cdc")," from the Non-fungible token tutorial in account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x02"),"."),(0,o.kt)("li",{parentName:"ol"},"Deploy the NFT code to account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x02"),"."),(0,o.kt)("li",{parentName:"ol"},"Run the transaction in Transaction 1. This is the ",(0,o.kt)("inlineCode",{parentName:"li"},"SetupAccount1Transaction.cdc")," file.\nUse account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x01")," as the only signer to set up account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x01"),"'s storage.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=SetupAccount1Transaction.cdc"},'// SetupAccount1Transaction.cdc\n\nimport ExampleToken from 0x01\nimport ExampleNFT from 0x02\n\n// This transaction sets up account 0x01 for the marketplace tutorial\n// by publishing a Vault reference and creating an empty NFT Collection.\ntransaction {\n  prepare(acct: AuthAccount) {\n    // Create a public Receiver capability to the Vault\n    acct.link<&ExampleToken.Vault{ExampleToken.Receiver, ExampleToken.Balance}>\n             (/public/CadenceFungibleTokenTutorialReceiver, target: /storage/CadenceFungibleTokenTutorialVault)\n\n    log("Created Vault references")\n\n    // store an empty NFT Collection in account storage\n    acct.save<@ExampleNFT.Collection>(<-ExampleNFT.createEmptyCollection(), to: /storage/nftTutorialCollection)\n\n    // publish a capability to the Collection in storage\n    acct.link<&{ExampleNFT.NFTReceiver}>(ExampleNFT.CollectionPublicPath, target: ExampleNFT.CollectionStoragePath)\n\n    log("Created a new empty collection and published a reference")\n  }\n}\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Run the transaction in Transaction 2. This is the ",(0,o.kt)("inlineCode",{parentName:"li"},"SetupAccount2Transaction.cdc")," file.\nUse account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x02")," as the only signer to set up account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x02"),"'s storage.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=SetupAccount2Transaction.cdc"},'// SetupAccount2Transaction.cdc\n\nimport ExampleToken from 0x01\nimport ExampleNFT from 0x02\n\n// This transaction adds an empty Vault to account 0x02\n// and mints an NFT with id=1 that is deposited into\n// the NFT collection on account 0x01.\ntransaction {\n\n  // Private reference to this account\'s minter resource\n  let minterRef: &ExampleNFT.NFTMinter\n\n  prepare(acct: AuthAccount) {\n    // create a new vault instance with an initial balance of 30\n    let vaultA <- ExampleToken.createEmptyVault()\n\n    // Store the vault in the account storage\n    acct.save<@ExampleToken.Vault>(<-vaultA, to: /storage/CadenceFungibleTokenTutorialVault)\n\n    // Create a public Receiver capability to the Vault\n    let ReceiverRef = acct.link<&ExampleToken.Vault{ExampleToken.Receiver, ExampleToken.Balance}>(/public/CadenceFungibleTokenTutorialReceiver, target: /storage/CadenceFungibleTokenTutorialVault)\n\n    log("Created a Vault and published a reference")\n\n    // Borrow a reference for the NFTMinter in storage\n    self.minterRef = acct.borrow<&ExampleNFT.NFTMinter>(from: ExampleNFT.MinterStoragePath)\n        ?? panic("Could not borrow owner\'s NFT minter reference")\n  }\n  execute {\n    // Get the recipient\'s public account object\n    let recipient = getAccount(0x01)\n\n    // Get the Collection reference for the receiver\n    // getting the public capability and borrowing a reference from it\n    let receiverRef = recipient.getCapability(ExampleNFT.CollectionPublicPath)\n                               .borrow<&{ExampleNFT.NFTReceiver}>()\n                               ?? panic("Could not borrow nft receiver reference")\n\n    // Mint an NFT and deposit it into account 0x01\'s collection\n    receiverRef.deposit(token: <-self.minterRef.mintNFT())\n\n    log("New NFT minted for account 1")\n  }\n}\n')),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Run the transaction in Transaction 3. This is the ",(0,o.kt)("inlineCode",{parentName:"li"},"SetupAccount1TransactionMinting.cdc")," file.\nUse account ",(0,o.kt)("inlineCode",{parentName:"li"},"0x01")," as the only signer to mint fungible tokens for account 1 and 2.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=SetupAccount1TransactionMinting.cdc"},'// SetupAccount1TransactionMinting.cdc\n\nimport ExampleToken from 0x01\nimport ExampleNFT from 0x02\n\n// This transaction mints tokens for both accounts using\n// the minter stored on account 0x01.\ntransaction {\n\n  // Public Vault Receiver References for both accounts\n  let acct1Capability: Capability<&AnyResource{ExampleToken.Receiver}>\n  let acct2Capability: Capability<&AnyResource{ExampleToken.Receiver}>\n\n  // Private minter references for this account to mint tokens\n  let minterRef: &ExampleToken.VaultMinter\n\n  prepare(acct: AuthAccount) {\n    // Get the public object for account 0x02\n    let account2 = getAccount(0x02)\n\n    // Retrieve public Vault Receiver references for both accounts\n    self.acct1Capability = acct.getCapability<&AnyResource{ExampleToken.Receiver}>(/public/CadenceFungibleTokenTutorialReceiver)\n    self.acct2Capability = account2.getCapability<&AnyResource{ExampleToken.Receiver}>(/public/CadenceFungibleTokenTutorialReceiver)\n\n    // Get the stored Minter reference for account 0x01\n    self.minterRef = acct.borrow<&ExampleToken.VaultMinter>(from: /storage/CadenceFungibleTokenTutorialMinter)\n        ?? panic("Could not borrow owner\'s vault minter reference")\n  }\n\n  execute {\n    // Mint tokens for both accounts\n    self.minterRef.mintTokens(amount: 20.0, recipient: self.acct2Capability)\n    self.minterRef.mintTokens(amount: 10.0, recipient: self.acct1Capability)\n\n    log("Minted new fungible tokens for account 1 and 2")\n  }\n}\n')),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Run the script ",(0,o.kt)("inlineCode",{parentName:"li"},"CheckSetupScript.cdc")," file in Script 1 to ensure everything is set up.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=CheckSetupScript.cdc"},'// CheckSetupScript.cdc\n\nimport ExampleToken from 0x01\nimport ExampleNFT from 0x02\n\n// This script checks that the accounts are set up correctly for the marketplace tutorial.\n//\n// Account 0x01: Vault Balance = 40, NFT.id = 1\n// Account 0x02: Vault Balance = 20, No NFTs\npub fun main() {\n    // Get the accounts\' public account objects\n    let acct1 = getAccount(0x01)\n    let acct2 = getAccount(0x02)\n\n    // Get references to the account\'s receivers\n    // by getting their public capability\n    // and borrowing a reference from the capability\n    let acct1ReceiverRef = acct1.getCapability(/public/CadenceFungibleTokenTutorialReceiver)\n                          .borrow<&ExampleToken.Vault{ExampleToken.Balance}>()\n                          ?? panic("Could not borrow acct1 vault reference")\n\n    let acct2ReceiverRef = acct2.getCapability(/public/CadenceFungibleTokenTutorialReceiver)\n                          .borrow<&ExampleToken.Vault{ExampleToken.Balance}>()\n                          ?? panic("Could not borrow acct2 vault reference")\n\n    // Log the Vault balance of both accounts and ensure they are\n    // the correct numbers.\n    // Account 0x01 should have 40.\n    // Account 0x02 should have 20.\n    log("Account 1 Balance")\n    log(acct1ReceiverRef.balance)\n    log("Account 2 Balance")\n    log(acct2ReceiverRef.balance)\n\n    // verify that the balances are correct\n    if acct1ReceiverRef.balance != 40.0 || acct2ReceiverRef.balance != 20.0 {\n        panic("Wrong balances!")\n    }\n\n    // Find the public Receiver capability for their Collections\n    let acct1Capability = acct1.getCapability(ExampleNFT.CollectionPublicPath)\n    let acct2Capability = acct2.getCapability(ExampleNFT.CollectionPublicPath)\n\n    // borrow references from the capabilities\n    let nft1Ref = acct1Capability.borrow<&{ExampleNFT.NFTReceiver}>()\n        ?? panic("Could not borrow acct1 nft collection reference")\n\n    let nft2Ref = acct2Capability.borrow<&{ExampleNFT.NFTReceiver}>()\n        ?? panic("Could not borrow acct2 nft collection reference")\n\n    // Print both collections as arrays of IDs\n    log("Account 1 NFTs")\n    log(nft1Ref.getIDs())\n\n    log("Account 2 NFTs")\n    log(nft2Ref.getIDs())\n\n    // verify that the collections are correct\n    if nft1Ref.getIDs()[0] != 1 || nft2Ref.getIDs().length != 0 {\n        panic("Wrong Collections!")\n    }\n}\n')),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"The script should not panic and you should see something like this output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"Account 1 Vault Balance"\n40\n"Account 2 Vault Balance"\n20\n"Account 1 NFTs"\n[1]\n"Account 2 NFTs"\n[]\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"With your playground now in the correct state, you're ready to continue with the next tutorial."),(0,o.kt)("p",null,"You do not need to open a new playground session for the marketplace tutorial. You can just continue using this one."))}d.isMDXComponent=!0}}]);