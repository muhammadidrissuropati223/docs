"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={},l=void 0,i={unversionedId:"tools/flow-cli/developer-updates/release-notes-v17",id:"tools/flow-cli/developer-updates/release-notes-v17",title:"release-notes-v17",description:"\u2b06\ufe0f Install or Upgrade",source:"@site/docs/tools/flow-cli/developer-updates/release-notes-v17.md",sourceDirName:"tools/flow-cli/developer-updates",slug:"/tools/flow-cli/developer-updates/release-notes-v17",permalink:"/docs/tools/flow-cli/developer-updates/release-notes-v17",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Derive Public Key with the Flow CLI",permalink:"/docs/tools/flow-cli/derive-keys"},next:{title:"release-notes-v18",permalink:"/docs/tools/flow-cli/developer-updates/release-notes-v18"}},s={},d=[{value:"\u2b06\ufe0f Install or Upgrade",id:"\ufe0f-install-or-upgrade",level:2},{value:"\ud83d\udca5 Breaking Changes",id:"-breaking-changes",level:2},{value:"Configuration Format",id:"configuration-format",level:3},{value:"Updated: <code>flow blocks get</code>",id:"updated-flow-blocks-get",level:3},{value:"Removed: <code>flow keys decode</code>",id:"removed-flow-keys-decode",level:3},{value:"Removed: <code>flow keys save</code>",id:"removed-flow-keys-save",level:3},{value:"\u26a0\ufe0f Deprecation Warnings",id:"\ufe0f-deprecation-warnings",level:2},{value:"\u2b50 Features",id:"-features",level:2},{value:"Output",id:"output",level:3},{value:"Shared Library",id:"shared-library",level:3},{value:"Account Staking Info Command",id:"account-staking-info-command",level:3},{value:"\ud83d\udc1e Bug Fixes",id:"-bug-fixes",level:2},{value:"Address 0x prefix",id:"address-0x-prefix",level:3},{value:"Project deploy error",id:"project-deploy-error",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\ufe0f-install-or-upgrade"},"\u2b06\ufe0f Install or Upgrade"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/flow-cli/install"},"Flow CLI installation guide")," for instructions on how to install or upgrade the CLI."),(0,o.kt)("h2",{id:"-breaking-changes"},"\ud83d\udca5 Breaking Changes"),(0,o.kt)("h3",{id:"configuration-format"},"Configuration Format"),(0,o.kt)("p",null,"The default configuration format (i.e. the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.json"),") has been updated.\nIt is now unified to work with all CLI commands.\nThe new format is not backwards compatible with the old format."),(0,o.kt)("p",null,"If needed, you can generate a new configuration file with the ",(0,o.kt)("inlineCode",{parentName:"p"},"flow init")," command."),(0,o.kt)("p",null,"Read more about the new configuration format in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/flow-cli/configuration"},"documentation"),"."),(0,o.kt)("h3",{id:"updated-flow-blocks-get"},"Updated: ",(0,o.kt)("inlineCode",{parentName:"h3"},"flow blocks get")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--latest"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--height")," have been removed."),(0,o.kt)("p",null,"Instead, use the new argument syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# get latest block\nflow blocks get latest\n\n# get a block by ID\nflow blocks get 6bb0e0fceef9225a3cf9ceb6df9a31bd0063e6ee8e8dd7fdd93b831783243cd3\n\n# get a block by height\nflow blocks get 28329914\n")),(0,o.kt)("p",null,"Read more about this change in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/flow-cli/get-blocks"},"documentation"),"."),(0,o.kt)("h3",{id:"removed-flow-keys-decode"},"Removed: ",(0,o.kt)("inlineCode",{parentName:"h3"},"flow keys decode")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"flow keys decode")," command has been temporarily removed due to a bug that requires further investigation."),(0,o.kt)("h3",{id:"removed-flow-keys-save"},"Removed: ",(0,o.kt)("inlineCode",{parentName:"h3"},"flow keys save")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"flow keys save")," command has been removed in favour of an upcoming ",(0,o.kt)("inlineCode",{parentName:"p"},"flow accounts add")," command. "),(0,o.kt)("h2",{id:"\ufe0f-deprecation-warnings"},"\u26a0\ufe0f Deprecation Warnings"),(0,o.kt)("p",null,"The following functionality has been deprecated and will be removed in an upcoming release."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow accounts create"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"flow accounts add-contract"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"flow accounts remove-contract"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"flow accounts update-contract"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--results")," is deprecated, results are displayed by default.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow accounts get"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--code")," is deprecated, use ",(0,o.kt)("inlineCode",{parentName:"li"},"--contracts")," flag instead.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow events get"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--verbose")," is deprecated.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow keys generate"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--algo")," is deprecated, use flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--sig-algo"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow transactions send"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--code")," is deprecated, use filename argument instead."),(0,o.kt)("li",{parentName:"ul"},"Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--args")," is deprecated, use ",(0,o.kt)("inlineCode",{parentName:"li"},"--arg")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"--args-json")," instead."),(0,o.kt)("li",{parentName:"ul"},"Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--results")," is deprecated, results are displayed by default.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow scripts execute"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--code")," is deprecated, use filename argument instead."),(0,o.kt)("li",{parentName:"ul"},"Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--args")," is deprecated, use ",(0,o.kt)("inlineCode",{parentName:"li"},"--arg")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"--args-json")," instead.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow transactions status"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This command has been deprecated in favour of ",(0,o.kt)("inlineCode",{parentName:"li"},"flow transactions get"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow project init"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This command has been deprecated in favour of ",(0,o.kt)("inlineCode",{parentName:"li"},"flow init"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow project start-emulator"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This command has been deprecated in favour of ",(0,o.kt)("inlineCode",{parentName:"li"},"flow emulator"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"flow emulator start"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This command has been deprecated in favour of ",(0,o.kt)("inlineCode",{parentName:"li"},"flow emulator"),".")),(0,o.kt)("h2",{id:"-features"},"\u2b50 Features"),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("p",null,"Output format was changed, so it stays consistent between commands. New flags were introduced\nthat control the output. Let's take a quick look at the new flags, but make sure to read\nmore about them in the documentation on each command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Output: ",(0,o.kt)("inlineCode",{parentName:"li"},"--output")," specify the format of the command results (JSON, inline...),"),(0,o.kt)("li",{parentName:"ul"},"Save: ",(0,o.kt)("inlineCode",{parentName:"li"},"--save")," specify the filename where you want the result to be saved,"),(0,o.kt)("li",{parentName:"ul"},"Log: ",(0,o.kt)("inlineCode",{parentName:"li"},"--log")," control how much output you want to see during command execution,"),(0,o.kt)("li",{parentName:"ul"},"Filter: ",(0,o.kt)("inlineCode",{parentName:"li"},"--filter")," Specify any property name from the result you want to return as the only value.")),(0,o.kt)("p",null,"All the flags and their allowed values are specified\nfor each command in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/flow-cli/"},"documentation"),"."),(0,o.kt)("p",null,"Changed output for fetching account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Address  179b6b1cb6755e31\nBalance  0\nKeys     2\n\nKey 0   Public Key               c8a2a318b9099cc6...a0fe320dba7\n        Weight                   1000\n        Signature Algorithm      ECDSA_P256\n        Hash Algorithm           SHA3_256\n\nCode             \n         pub contract Foo {\n                pub var bar: String\n         \n                init() {\n                        self.bar = "Hello, World!"\n                }\n         }\n')),(0,o.kt)("p",null,"Output account result as JSON."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"address":"179b6b1cb6755e31","balance":0,"code":"CnB1YiBj...SIKCX0KfQo=","keys":[{"index":0,"publicKey":{},"sigAlgo":2,"hashAlgo":3,"weight":1000,"sequenceNumber":0,"revoked":false}],"Contracts":null}\n')),(0,o.kt)("p",null,"Improved progress feedback with loaders."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Loading 0x1fd892083b3e2a4c...\u283c\n")),(0,o.kt)("h3",{id:"shared-library"},"Shared Library"),(0,o.kt)("p",null,"You can import Flow CLI shared library from the ",(0,o.kt)("inlineCode",{parentName:"p"},"flowcli")," package and use the functionality\nfrom the service layer in your own software. Codebase was divided into two components, first\nis the CLI interaction layer, and the second is the shared library component which is meant\nto be reused."),(0,o.kt)("h3",{id:"account-staking-info-command"},"Account Staking Info Command"),(0,o.kt)("p",null,"New command to fetch staking info from the account was added. Read more about it in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/flow-cli/account-staking-info"},"documentation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'> accounts staking-info 535b975637fb6bee --host access.testnet.nodes.onflow.org:9000\n\nAccount Staking Info:\n        ID:              "ca00101101010100001011010101010101010101010101011010101010101010"\n        Initial Weight:      100\n        Networking Address:      "ca00101101010100001011010101010101010101010101011010101010101010"\n        Networking Key:      "ca00101101010100001011010101010101010101010101011010101010101010ca00101101010100001011010101010101010101010101011010101010101010"\n        Role:            1\n        Staking Key:         "ca00101101010100001011010101010101010101010101011010101010101010ca00101101010100001011010101010101010101010101011010101010101010ca00101101010100001011010101010101010101010101011010101010101010"\n        Tokens Committed:    0.00000000\n        Tokens To Unstake:   0.00000000\n        Tokens Rewarded:     82627.77000000\n        Tokens Staked:       250000.00000000\n        Tokens Unstaked:     0.00000000\n        Tokens Unstaking:    0.00000000\n        Node Total Stake (including delegators):    250000.00000000\n\n\nAccount Delegation Info:\n        ID:              7\n        Tokens Committed:    0.00000000\n        Tokens To Unstake:   0.00000000\n        Tokens Rewarded:     30397.81936000\n        Tokens Staked:       100000.00000000\n        Tokens Unstaked:     0.00000000\n        Tokens Unstaking:    0.00000000\n\n')),(0,o.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1e Bug Fixes"),(0,o.kt)("h3",{id:"address-0x-prefix"},"Address 0x prefix"),(0,o.kt)("p",null,"Addresses are not required to be prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"0x")," anymore. You can use either format, but\ndue to consistency we advise using ",(0,o.kt)("inlineCode",{parentName:"p"},"0x")," prefix with addresses represented in ",(0,o.kt)("inlineCode",{parentName:"p"},"hex")," format."),(0,o.kt)("h3",{id:"project-deploy-error"},"Project deploy error"),(0,o.kt)("p",null,"Deploying contract provides improved error handling in case something goes wrong you\ncan now read what the error was right from the commandline. "),(0,o.kt)("p",null,"Example of error output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Deploying 2 contracts for accounts: emulator-account\n\n\u274c  contract Kibble is already deployed to this account. Use the --update flag to force update\n\u274c  contract KittyItemsMarket is already deployed to this account. Use the --update flag to force update\n\u274c  failed to deploy contracts\n\n\u274c Command Error: failed to deploy contracts\n")))}u.isMDXComponent=!0}}]);