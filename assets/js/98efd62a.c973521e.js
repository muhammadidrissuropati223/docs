"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={archived:!1,draft:!1,title:"5.1 Non-Fungible Token Tutorial Part 1",description:"An introduction to NFTs on Cadence",date:new Date("2022-05-10T00:00:00.000Z"),meta:{keywords:["tutorial","Flow","NFT","Non-Fungible Tokens","Cadence","Resources","Capabilities"]},tags:["reference","NFT","Non-Fungible Token","cadence","tutorial"],socialImageTitle:"Non-Fungible Tokens in Cadence",socialImageDescription:"NFT social image."},i=void 0,s={unversionedId:"cadence/tutorial/05-non-fungible-tokens-1",id:"cadence/tutorial/05-non-fungible-tokens-1",title:"5.1 Non-Fungible Token Tutorial Part 1",description:"An introduction to NFTs on Cadence",source:"@site/docs/cadence/tutorial/05-non-fungible-tokens-1.mdx",sourceDirName:"cadence/tutorial",slug:"/cadence/tutorial/05-non-fungible-tokens-1",permalink:"/docs/cadence/tutorial/05-non-fungible-tokens-1",draft:!1,tags:[{label:"reference",permalink:"/docs/tags/reference"},{label:"NFT",permalink:"/docs/tags/nft"},{label:"Non-Fungible Token",permalink:"/docs/tags/non-fungible-token"},{label:"cadence",permalink:"/docs/tags/cadence"},{label:"tutorial",permalink:"/docs/tags/tutorial"}],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{archived:!1,draft:!1,title:"5.1 Non-Fungible Token Tutorial Part 1",description:"An introduction to NFTs on Cadence",date:"2022-05-10T00:00:00.000Z",meta:{keywords:["tutorial","Flow","NFT","Non-Fungible Tokens","Cadence","Resources","Capabilities"]},tags:["reference","NFT","Non-Fungible Token","cadence","tutorial"],socialImageTitle:"Non-Fungible Tokens in Cadence",socialImageDescription:"NFT social image."},sidebar:"tutorialSidebar",previous:{title:"4. Capability Tutorial",permalink:"/docs/cadence/tutorial/04-capabilities"},next:{title:"5.2 Non-Fungible Token Tutorial Part 2",permalink:"/docs/cadence/tutorial/05-non-fungible-tokens-2"}},l={},c=[{value:"Non-Fungible Tokens on the Flow Emulator",id:"non-fungible-tokens-on-the-flow-emulator",level:2},{value:"Adding an NFT Your Account",id:"adding-an-nft-your-account",level:2},{value:"Performing a Basic Transfer",id:"performing-a-basic-transfer",level:2},{value:"Enhancing the NFT Experience",id:"enhancing-the-nft-experience",level:2}],u=(p="Callout",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const h={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we're going to deploy, store, and transfer ",(0,o.kt)("strong",{parentName:"p"},"Non-Fungible Tokens (NFTs)"),"."),(0,o.kt)("hr",null),(0,o.kt)(u,{type:"success",mdxType:"Callout"},(0,o.kt)("p",null,"Open the starter code for this tutorial in the Flow Playground:"),(0,o.kt)("a",{href:"https://play.onflow.org/a21087ad-b22c-4981-b49e-17297e916fa6",target:"_blank"},"https://play.onflow.org/a21087ad-b22c-4981-b49e-17297e916fa6"),(0,o.kt)("br",null),"The tutorial will ask you to take various actions to interact with this code."),(0,o.kt)(u,{type:"info",mdxType:"Callout"},"Instructions that require you to take action are always included in a callout box like this one. These highlighted actions are all that you need to do to get your code running, but reading the rest is necessary to understand the language's design."),(0,o.kt)("p",null,"The NFT is an integral part of blockchain technology.\nAn NFT is a digital asset that represents ownership of a unique asset.\nNFTs are also indivisible, you can't trade part of an NFT.\nPossible examples of NFTs include:\nCryptoKitties, Top Shot Moments, and tickets to a really fun concert."),(0,o.kt)("p",null,"Instead of being represented in a central ledger, like in most smart contract languages,\nCadence represents each NFT as a ",(0,o.kt)("a",{parentName:"p",href:"../language/composite-types"},"resource object"),"\nthat users store in their accounts.\nThis allows NFTs to benefit from the resource ownership rules\nthat are enforced by the ",(0,o.kt)("a",{parentName:"p",href:"../language/values-and-types"},"type system")," -\nresources can only have a single owner, they cannot be duplicated,\nand they cannot be lost due to accidental or malicious programming errors.\nThese protections ensure that owners know that their NFT is safe and can represent an asset that has real value."),(0,o.kt)("p",null,"NFTs in a real-world context make it possible to trade assets and\nprove who the owner of an asset is.\nOn Flow, NFTs are interoperable -\nso the NFTs in an account can be used in different smart contracts\nand app contexts.\nAll NFTs on Flow implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft"},"NFT Token Standard"),"\nwhich defines a basic set of properties for NFTs on Flow.\nThis tutorial, will teach you a basic method of creating an NFT\nto illustrate important language concepts.\nAfter completing the NFT tutorials, readers should visit\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft"},"the NFT standard github repository"),"\nto learn how full, production-ready NFTs are created."),(0,o.kt)("p",null,"To get you comfortable using NFTs, this tutorial will teach you to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy the NFT contract and type definitions."),(0,o.kt)("li",{parentName:"ol"},"Create an NFT object and store it in your account storage."),(0,o.kt)("li",{parentName:"ol"},"Create an NFT collection object to store multiple NFTs in your account."),(0,o.kt)("li",{parentName:"ol"},"Create an ",(0,o.kt)("inlineCode",{parentName:"li"},"NFTMinter")," and use it to mint an NFT."),(0,o.kt)("li",{parentName:"ol"},"Create references to your collection that others can use to send you tokens."),(0,o.kt)("li",{parentName:"ol"},"Set up another account the same way."),(0,o.kt)("li",{parentName:"ol"},"Transfer an NFT from one account to another."),(0,o.kt)("li",{parentName:"ol"},"Use a script to see what NFTs are stored in each account's collection.")),(0,o.kt)(u,{type:"warning",mdxType:"Callout"},"It is important to remember that while this tutorial implements a working non-fungible token, it has been simplified for educational purposes and is not what any project should use in production. See the",(0,o.kt)("a",{href:"https://github.com/onflow/flow-nft",target:"_blank"},"Flow Fungible Token standard"),"for the standard interface and example implementation. Additionally, check out the",(0,o.kt)("a",{href:"https://github.com/onflow/kitty-items",target:"_blank"},"Kitty Items Repo"),"for a production ready version!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before proceeding with this tutorial"),", we highly recommend\nfollowing the instructions in ",(0,o.kt)("a",{parentName:"p",href:"01-first-steps"},"Getting Started"),",\n",(0,o.kt)("a",{parentName:"p",href:"02-hello-world"},"Hello, World!"),",\n",(0,o.kt)("a",{parentName:"p",href:"03-resources"},"Resources"),",\nand ",(0,o.kt)("a",{parentName:"p",href:"04-capabilities"},"Capabilities"),"\nto learn how to use the Playground tools and to learn the fundamentals of Cadence.\nThis tutorial will build on the concepts introduced in those tutorials."),(0,o.kt)("h2",{id:"non-fungible-tokens-on-the-flow-emulator"},"Non-Fungible Tokens on the Flow Emulator"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In Cadence, each NFT is represented by a resource with an integer ID.\nResources are a perfect type to represent NFTs\nbecause resources have important ownership rules that are enforced by the type system.\nThey can only have one owner, cannot be copied, and cannot be accidentally or maliciously lost or duplicated.\nThese protections ensure that owners know that their NFT is safe and can represent an asset that has real value.\nFor more information about resources, see the ",(0,o.kt)("a",{parentName:"p",href:"03-resources"},"resources tutorial")),(0,o.kt)("p",null,"An NFT is also usually represented by some sort of metadata like a name or a picture.\nHistorically, most of this metadata has been stored off-chain,\nand the on-chain token only contains a URL or something similar that points to the off-chain metadata.\nIn Flow, this is possible, but the goal is to make it possible for all the metadata associated with a token to be stored on-chain.\nThis is out of the scope of this tutorial though.\nThis paradigm has been defined by the Flow community and the details are contained in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/pull/636/files"},"the NFT metadata proposal.")),(0,o.kt)("p",null,"When users on Flow want to transact with each other,\nthey can do so peer-to-peer and without having to interact with a central NFT contract\nby calling resource-defined methods in each users' account."),(0,o.kt)("h2",{id:"adding-an-nft-your-account"},"Adding an NFT Your Account"),(0,o.kt)("p",null,"We'll start by looking at a basic NFT contract, that adds an NFT to an account.\nThe contract will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a smart contract with the NFT resource type."),(0,o.kt)("li",{parentName:"ol"},"Declare an ID field, a metadata field and an ",(0,o.kt)("inlineCode",{parentName:"li"},"init()")," function in the NFT resource"),(0,o.kt)("li",{parentName:"ol"},"Create an ",(0,o.kt)("inlineCode",{parentName:"li"},"init()")," function for the contract that saves an NFT to an account")),(0,o.kt)("p",null,"This contract relies on the ",(0,o.kt)("a",{parentName:"p",href:"../language/accounts#authaccount"},"account storage API")," to save NFTs in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount")," object."),(0,o.kt)("hr",null),(0,o.kt)(u,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"First, you'll need to follow this link to open a playground session\nwith the Non-Fungible Token contracts, transactions, and scripts pre-loaded:"),(0,o.kt)("a",{href:"https://play.onflow.org/ae2f2a83-6698-4e03-93cf-70d35627e28e",target:"_blank"},"https://play.onflow.org/ae2f2a83-6698-4e03-93cf-70d35627e28e")),(0,o.kt)(u,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Open Account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," to see ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicNFT.cdc"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"BasicNFT.cdc")," should contain the following code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=BasicNFT.cdc"},"pub contract BasicNFT {\n\n    // Declare the NFT resource type\n    pub resource NFT {\n        // The unique ID that differentiates each NFT\n        pub let id: UInt64\n\n        // String mapping to hold metadata\n        pub var metadata: {String: String}\n\n        // Initialize both fields in the init function\n        init(initID: UInt64) {\n            self.id = initID\n            self.metadata = {}\n        }\n    }\n\n    // Function to create a new NFT\n    pub fun createNFT(id: UInt64): @NFT {\n        return <-create NFT(initID: id)\n    }\n\n    // Create a single new NFT and save it to account storage\n    init() {\n        self.account.save<@NFT>(<-create NFT(initID: 1), to: /storage/BasicNFTPath)\n    }\n}\n")),(0,o.kt)("p",null,"In the above contract, the NFT is a resource with an integer ID and a field for metadata."),(0,o.kt)("p",null,"Each NFT resource has a unique ID, so they cannot be combined or duplicated, unless the smart contract allows it."),(0,o.kt)("p",null,"Another unique feature of this design is that each NFT can contain its own metadata.\nIn this example, we use a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"-to-",(0,o.kt)("inlineCode",{parentName:"p"},"String")," mapping, but you could imagine a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft#nft-metadata"},"much more rich\nversion"),"\nthat can allow the storage of complex file formats and other such data."),(0,o.kt)("p",null,"An NFT could even own other NFTs! This functionality is shown in the next tutorial."),(0,o.kt)("p",null,"In the contract's ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function, we create a new NFT object and move it into the account storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// put it in storage\nself.account.save<@NFT>(<-create NFT(initID: 1), to: /storage/BasicNFTPath)\n")),(0,o.kt)("p",null,"Here we access the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount")," object on the account the contract is deployed to and call its ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," method,\nspecifying ",(0,o.kt)("inlineCode",{parentName:"p"},"@NFT")," as the type it is being saved as.\nWe also create the NFT in the same line and pass it as the first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"save"),".\nWe save it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/storage")," domain, where objects are meant to be stored."),(0,o.kt)(u,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Deploy ",(0,o.kt)("inlineCode",{parentName:"p"},"NFTv1")," by clicking the Deploy button in the top right of the editor.")),(0,o.kt)("p",null,"You should now have an NFT in your account. Let's run a transaction to check."),(0,o.kt)(u,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"NFT Exists")," transaction, select account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," as the only signer, and send the transaction.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"NFT Exists")," should look like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence:title=NFT",metastring:"Exists.cdc","Exists.cdc":!0},'import BasicNFT from 0x01\n\n// This transaction checks if an NFT exists in the storage of the given account\n// by trying to borrow from it. If the borrow succeeds (returns a non-nil value), the token exists!\ntransaction {\n    prepare(acct: AuthAccount) {\n        if acct.borrow<&BasicNFT.NFT>(from: /storage/BasicNFTPath) != nil {\n            log("The token exists!")\n        } else {\n            log("No token found!")\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Here, we are trying to directly borrow a reference from the NFT in storage.\nIf the object exists, the borrow will succeed and the reference optional will not be ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),",\nbut if the borrow fails, the optional will be ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,o.kt)("p",null,"You should see something that says ",(0,o.kt)("inlineCode",{parentName:"p"},'"The token exists!"'),"."),(0,o.kt)("p",null,"Great work! You have your first NFT in your account. Let's move it to another account!"),(0,o.kt)("h2",{id:"performing-a-basic-transfer"},"Performing a Basic Transfer"),(0,o.kt)("p",null,"With these powerful assets in your account, you'll probably want to\nmove them around to other accounts. There are many ways to transfer objects in Cadence,\nbut we'll show the simplest one first."),(0,o.kt)("p",null,"This will also be an opportunity for you to try to write some of your own code!"),(0,o.kt)(u,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Basic Transfer")," transaction.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Basic Transfer")," should look like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"import BasicNFT from 0x01\n\n/// Basic transaction for two accounts to authorize\n/// to transfer an NFT\n\ntransaction {\n    prepare(signer1: AuthAccount, signer2: AuthAccount) {\n\n        // Fill in code here to load the NFT from signer1\n        // and save it into signer2's storage\n\n    }\n}\n")),(0,o.kt)("p",null,"We've provided you with a blank transaction with two signers."),(0,o.kt)("p",null,'While a transaction is open, you can select one or more accounts to sign a transaction.\nThis is because, in Flow, multiple accounts can sign the same transaction,\ngiving access to their private storage. If multiple accounts are selected as signers,\nthis needs to be reflected in the signature of the transaction to show multiple signers,\nas is shown in the "Basic Transfer" transaction.'),(0,o.kt)("p",null,"All you need to do is ",(0,o.kt)("inlineCode",{parentName:"p"},"load()")," the NFT from ",(0,o.kt)("inlineCode",{parentName:"p"},"signer1"),"'s storage and ",(0,o.kt)("inlineCode",{parentName:"p"},"save()")," it\ninto ",(0,o.kt)("inlineCode",{parentName:"p"},"signer2"),"'s storage. You have used both of these operations before,\nso this hopefully shouldn't be too hard to figure out.\nFeel free to go back to earlier tutorials to see examples of these account methods."),(0,o.kt)("p",null,"You can also scroll down a bit to see the correct code:"),(0,o.kt)("hr",null),(0,o.kt)("hr",null),(0,o.kt)("hr",null),(0,o.kt)("hr",null),(0,o.kt)("hr",null),(0,o.kt)("hr",null),(0,o.kt)("hr",null),(0,o.kt)("hr",null),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Here is the correct code to load the NFT from one account and save it to another account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"import BasicNFT from 0x01\n\n/// Basic transaction for two accounts to authorize\n/// to transfer an NFT\n\ntransaction {\n    prepare(signer1: AuthAccount, signer2: AuthAccount) {\n\n        // Load the NFT from signer1's account\n        let nft <- signer1.load<@BasicNFT.NFT>(from: /storage/BasicNFTPath)\n            ?? panic(\"Could not load NFT\")\n\n        // Save the NFT to signer2's account\n        signer2.save<@BasicNFT.NFT>(<-nft, to: /storage/BasicNFTPath)\n\n    }\n}\n")),(0,o.kt)(u,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"Select both Account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x01")," and Account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x02")," as the signers.",(0,o.kt)("br",null),'\nClick the "Send" button to send the transaction.')),(0,o.kt)("p",null,"Now, the NFT should be stored in the storage of Account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x02"),'!\nYou should be able to run the "NFT Exists" transaction again with ',(0,o.kt)("inlineCode",{parentName:"p"},"0x02")," as the signer\nto confirm that it is in their account."),(0,o.kt)("h2",{id:"enhancing-the-nft-experience"},"Enhancing the NFT Experience"),(0,o.kt)("p",null,"Hopefully by now, you have an idea of how NFTs can be represented by resources in Cadence.\nYou might have noticed by now that if we required users\nto remember different paths for each NFT and to use a multisig transaction for transfers,\nwe would not have a very friendly developer and user experience."),(0,o.kt)("p",null,"This is where the true utility of Cadence is shown.\nContinue on to the ",(0,o.kt)("a",{parentName:"p",href:"05-non-fungible-tokens-2"},"next tutorial"),"\nto find out how we can use capabilities and resources owning other resources\nto enhance the ease of use and safety of our NFTs."),(0,o.kt)("hr",null))}f.isMDXComponent=!0}}]);