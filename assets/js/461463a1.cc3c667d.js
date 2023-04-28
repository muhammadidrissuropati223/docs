"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,y=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"10. Composable Resources"},i=void 0,s={unversionedId:"cadence/tutorial/10-resources-compose",id:"cadence/tutorial/10-resources-compose",title:"10. Composable Resources",description:"In this tutorial, we're going to walk through how resources can own other resources by creating, deploying, and moving composable NFTs.",source:"@site/docs/cadence/tutorial/10-resources-compose.mdx",sourceDirName:"cadence/tutorial",slug:"/cadence/tutorial/10-resources-compose",permalink:"/docs/cadence/tutorial/10-resources-compose",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"10. Composable Resources"},sidebar:"tutorialSidebar",previous:{title:"9. Voting Contract",permalink:"/docs/cadence/tutorial/09-voting"},next:{title:"why",permalink:"/docs/cadence/why"}},l={},c=[{value:"Resources Owning Resources",id:"resources-owning-resources",level:2},{value:"Resources Owning Resources: An Example",id:"resources-owning-resources-an-example",level:2},{value:"The Future is Meow! Extensibility is coming!",id:"the-future-is-meow-extensibility-is-coming",level:2}],u=(h="Callout",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var h;const p={toc:c},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we're going to walk through how resources can own other resources by creating, deploying, and moving composable NFTs."),(0,a.kt)("hr",null),(0,a.kt)(u,{type:"info",mdxType:"Callout"},"Open the starter code for this tutorial in the Flow Playground:",(0,a.kt)("a",{href:"https://play.onflow.org/01f812d7-799a-42fd-b9cb-9ffe556e02ad",target:"_blank"},"https://play.onflow.org/01f812d7-799a-42fd-b9cb-9ffe556e02ad"),(0,a.kt)("br",null),"The tutorial will be asking you do take various actions to interact with this code."),(0,a.kt)(u,{type:"info",mdxType:"Callout"},"Instructions that require you to take action are always included in a callout box like this one. These highlighted actions are all that you need to do to get your code running, but reading the rest is necessary to understand the language's design."),(0,a.kt)("p",null,"Resources owning other resources is a powerful feature in the world of blockchain and smart contracts.\nTo showcase how this feature works on Flow, this tutorial will take you through these steps with a composable NFT:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Deploy the ",(0,a.kt)("inlineCode",{parentName:"li"},"Kitty")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"KittyHat")," definitions to account ",(0,a.kt)("inlineCode",{parentName:"li"},"0x01")),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Kitty")," and two ",(0,a.kt)("inlineCode",{parentName:"li"},"KittyHat"),"s and store them in your account"),(0,a.kt)("li",{parentName:"ol"},"Move the Kitties and Hats around to see how composable NFTs function on Flow")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before proceeding with this tutorial"),", we recommend following the instructions in ",(0,a.kt)("a",{parentName:"p",href:"01-first-steps"},"Getting Started"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"02-hello-world"},"Hello, World!")," to learn about the Playground and Cadence."),(0,a.kt)("h2",{id:"resources-owning-resources"},"Resources Owning Resources"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The NFT collections talked about in ",(0,a.kt)("a",{parentName:"p",href:"05-non-fungible-tokens-1"},"Non-Fungible Tokens")," are examples of resources that own other resources.\nWe have a resource, the NFT collection, that has ownership of the NFT resources that are stored within it.\nThe owner and anyone with a reference can move these resources around,\nbut they still belong to the collection while they are in it and the code defined in the collection has ultimate control over the resources."),(0,a.kt)("p",null,"When the collection is moved or destroyed, all of the NFTs inside of it are moved or destroyed with it."),(0,a.kt)("p",null,"If the owner of the collection transferred the whole collection resource to another user's account,\nall of the tokens will move to the other user's account with it. The tokens don't stay in the original owner's account.\nThis is like handing someone your wallet instead of just a dollar bill. It isn't a common action, but certainly is possible."),(0,a.kt)("p",null,"References cannot be created for resources that are stored in other resources.\nThe owning resource has control over it and therefore controls the type of access that external calls have on the stored resource."),(0,a.kt)("h2",{id:"resources-owning-resources-an-example"},"Resources Owning Resources: An Example"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The NFT collection is a simple example of how resources can own other resources, but innovative and more powerful versions can be made."),(0,a.kt)("p",null,"An important feature of CryptoKitties (and other applications on the Ethereum blockchain) is that any developer can make new experiences around the existing application.\nEven though the original contract didn't include specific support for CryptoKitty accessories (like hats), an independent developer was still able to make hats that Kitties from the original contract could use."),(0,a.kt)("p",null,"Here is a basic example of how we can replicate this feature in Cadence:"),(0,a.kt)(u,{type:"info",mdxType:"Callout"},(0,a.kt)("p",null,"Open the account ",(0,a.kt)("inlineCode",{parentName:"p"},"0x01")," tab which has the contract named ",(0,a.kt)("inlineCode",{parentName:"p"},"KittyVerse.cdc"),". Deploy the code to account ",(0,a.kt)("inlineCode",{parentName:"p"},"0x01"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence:title=KittyVerse.cdc"},'// KittyVerse.cdc\n//\n// The KittyVerse contract defines two types of NFTs.\n// One is a KittyHat, which represents a special hat, and\n// the second is the Kitty resource, which can own Kitty Hats.\n//\n// You can put the hats on the cats and then call a hat function\n// that tips the hat and prints a fun message.\n//\n// This is a simple example of how Cadence supports\n// extensibility for smart contracts, but the language will soon\n// support even more powerful versions of this.\n//\n\npub contract KittyVerse {\n\n    // KittyHat is a special resource type that represents a hat\n    pub resource KittyHat {\n        pub let id: Int\n        pub let name: String\n\n        init(id: Int, name: String) {\n            self.id = id\n            self.name = name\n        }\n\n        // An example of a function someone might put in their hat resource\n        pub fun tipHat(): String {\n            if self.name == "Cowboy Hat" {\n                return "Howdy Y\'all"\n            } else if self.name == "Top Hat" {\n                return "Greetings, fellow aristocats!"\n            }\n\n            return "Hello"\n        }\n    }\n\n    // Create a new hat\n    pub fun createHat(id: Int, name: String): @KittyHat {\n        return <-create KittyHat(id: id, name: name)\n    }\n\n    pub resource Kitty {\n\n        pub let id: Int\n\n        // place where the Kitty hats are stored\n        pub var items: @{String: KittyHat}\n\n        init(newID: Int) {\n            self.id = newID\n            self.items <- {}\n        }\n\n        pub fun getKittyItems(): @{String: KittyHat} {\n            var other: @{String:KittyHat} <- {}\n            self.items <-> other\n            return <- other\n        }\n\n        pub fun setKittyItems(items: @{String: KittyHat}) {\n            var other <- items\n            self.items <-> other\n            destroy other\n        }\n\n        pub fun removeKittyItem(key: String): @KittyHat? {\n            var removed <- self.items.remove(key: key)\n            return <- removed\n        }\n\n        destroy() {\n            destroy self.items\n        }\n    }\n\n    pub fun createKitty(): @Kitty {\n        return <-create Kitty(newID: 1)\n    }\n\n}\n\n')),(0,a.kt)("p",null,"These definitions show how a Kitty resource could own hats."),(0,a.kt)("p",null,"The hats are stored in a variable in the Kitty resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"    // place where the Kitty hats are stored\n    pub var items: <-{String: KittyHat}\n")),(0,a.kt)("p",null,"A Kitty owner can take the hats off the Kitty and transfer them individually. Or the owner can transfer a Kitty that owns a hat, and the hat will go along with the Kitty."),(0,a.kt)("p",null,"Here is a transaction to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Kitty")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"KittyHat"),", store the hat in the Kitty, then store it in your account storage."),(0,a.kt)(u,{type:"info",mdxType:"Callout"},(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"Transaction1.cdc"),". ",(0,a.kt)("br",null),"\nSelect account ",(0,a.kt)("inlineCode",{parentName:"p"},"0x01")," as the only signer",(0,a.kt)("br",null),"\nSend the transaction by clicking the Send button. ",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Transaction1.cdc")," should contain the following code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence:title=Transaction1.cdc"},'import KittyVerse from 0x01\n\n// This transaction creates a new kitty, creates two new hats and\n// puts the hats on the cat. Then it stores the kitty in account storage.\ntransaction {\n    prepare(acct: AuthAccount) {\n\n        // Create the Kitty object\n        let kitty <- KittyVerse.createKitty()\n\n        // Create the KittyHat objects\n        let hat1 <- KittyVerse.createHat(id: 1, name: "Cowboy Hat")\n        let hat2 <- KittyVerse.createHat(id: 2, name: "Top Hat")\n\n        let kittyItems <- kitty.getKittyItems()\n\n        // Put the hat on the cat!\n        let oldCowboyHat <- kittyItems["Cowboy Hat"] <- hat1\n        destroy oldCowboyHat\n        let oldTopHat <- kittyItems["Top Hat"] <- hat2\n        destroy oldTopHat\n\n        kitty.setKittyItems(items: <-kittyItems)\n\n        log("The cat has the hats")\n\n        // Store the Kitty in storage\n        acct.save(<-kitty, to: /storage/kitty)\n    }\n}\n')),(0,a.kt)("p",null,"You should see an output that looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> "The Cat has the Hats"\n')),(0,a.kt)("p",null,"Now we can run a transaction to move the Kitty along with its hat, remove the cowboy hat from the Kitty, then make the Kitty tip its hat."),(0,a.kt)(u,{type:"info",mdxType:"Callout"},(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"Transaction2.cdc"),(0,a.kt)("br",null),"\nSelect account ",(0,a.kt)("inlineCode",{parentName:"p"},"0x01")," as the only signer.",(0,a.kt)("br",null),"\nSend the transaction.",(0,a.kt)("br",null),"\nTransaction2.cdc` should contain the following code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence:title=Transaction2.cdc"},'import KittyVerse from 0x01\n\n// This transaction moves a kitty out of storage, takes the cowboy hat off of the kitty,\n// calls its tip hat function, and then moves it back into storage.\ntransaction {\n    prepare(acct: AuthAccount) {\n\n        // Move the Kitty out of storage, which also moves its hat along with it\n        let kitty <- acct.load<@KittyVerse.Kitty>(from: /storage/kitty)\n            ?? panic("Kitty doesn\'t exist!")\n\n        // Take the cowboy hat off the Kitty\n        let cowboyHat <- kitty.removeKittyItem(key: "Cowboy Hat")\n            ?? panic("cowboy hat doesn\'t exist!")\n\n        // Tip the cowboy hat\n        log(cowboyHat.tipHat())\n        destroy cowboyHat\n\n        // Tip the top hat that is on the Kitty\n        log(kitty.items["Top Hat"]?.tipHat())\n\n        // Move the Kitty to storage, which\n        // also moves its hat along with it.\n        acct.save(<-kitty, to: /storage/kitty)\n    }\n}\n')),(0,a.kt)("p",null,"You should see something like this output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> "Howdy Y\'all"\n> "Greetings, fellow aristocats!"\n')),(0,a.kt)("p",null,"Whenever the Kitty is moved, its hats are implicitly moved along with it. This is because the hats are owned by the Kitty."),(0,a.kt)("h2",{id:"the-future-is-meow-extensibility-is-coming"},"The Future is Meow! Extensibility is coming!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The above is a simple example of composable resources. We had to explicitly say that a Kitty could own a Hat in this example, but in the near future, Cadence will support more powerful ways of achieving resource extensibility where developers can declare types that separate resources can own even if the owning resource never specified the ownership possibility in the first place. This is a very complex problem to solve in a safe way, and the Flow community is working very hard to design a solution for this, but it is coming."),(0,a.kt)("p",null,"Practice what you're learned in the Flow Playground!"))}y.isMDXComponent=!0}}]);