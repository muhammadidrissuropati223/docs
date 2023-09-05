"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[38012],{37804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});t(67294);var o=t(85893),s=t(11151);const a={title:"Flow Operators",description:"FAQ"},r=void 0,c={unversionedId:"concepts/nodes/faq/operators",id:"version-stable/concepts/nodes/faq/operators",title:"Flow Operators",description:"FAQ",source:"@site/versioned_docs/version-stable/concepts/nodes/faq/operators.mdx",sourceDirName:"concepts/nodes/faq",slug:"/concepts/nodes/faq/operators",permalink:"/docs/concepts/nodes/faq/operators",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/faq/operators.mdx",tags:[],version:"stable",lastUpdatedBy:"Vishal",lastUpdatedAt:1693945989,formattedLastUpdatedAt:"Sep 5, 2023",frontMatter:{title:"Flow Operators",description:"FAQ"},sidebar:"concepts",previous:{title:"Builders / Developers",permalink:"/docs/concepts/nodes/faq/developers"},next:{title:"Flow Port",permalink:"/docs/concepts/nodes/flow-port/"}},i={},l=[{value:"What is the expected TPS (transactions per second) for the forseeable future?",id:"what-is-the-expected-tps-transactions-per-second-for-the-forseeable-future",level:2},{value:"Does the blockheight go up 1 every second?",id:"does-the-blockheight-go-up-1-every-second",level:2},{value:"Does Flow have a block explorer?",id:"does-flow-have-a-block-explorer",level:2},{value:"How can I connect to and query the Access Nodes? What data is available there?",id:"how-can-i-connect-to-and-query-the-access-nodes-what-data-is-available-there",level:2},{value:"Available Data",id:"available-data",level:3},{value:"Accounts, Contracts, Blocks, Collections, Transactions, Events",id:"accounts-contracts-blocks-collections-transactions-events",level:4},{value:"Scripts",id:"scripts",level:3},{value:"Using The SDKs",id:"using-the-sdks",level:3},{value:"JavaScript",id:"javascript",level:4},{value:"Go",id:"go",level:4},{value:"Other Programming Languages",id:"other-programming-languages",level:4},{value:"How do apps consume events? How do events work?",id:"how-do-apps-consume-events-how-do-events-work",level:2},{value:"Defining Events",id:"defining-events",level:3},{value:"Consuming Events",id:"consuming-events",level:3},{value:"Using Go",id:"using-go",level:3},{value:"Using JavaScript",id:"using-javascript",level:3},{value:"Using Other Programming Languages",id:"using-other-programming-languages",level:3},{value:"I staked and now I can&#39;t see my FLOW - what happened?",id:"i-staked-and-now-i-cant-see-my-flow---what-happened",level:2},{value:"What do I do when I get this error: Node start up issue - could not process block proposal: invalid extension of protocol state?",id:"what-do-i-do-when-i-get-this-error-node-start-up-issue---could-not-process-block-proposal-invalid-extension-of-protocol-state",level:2},{value:"What errors are acceptable to see when my node is running?",id:"what-errors-are-acceptable-to-see-when-my-node-is-running",level:2},{value:"Is there a testnet/devnet?",id:"is-there-a-testnetdevnet",level:2},{value:"Is there a public node?",id:"is-there-a-public-node",level:2},{value:"Is it possible to add multiple public keys to a given account/address so that it can be controlled by more than one private key?",id:"is-it-possible-to-add-multiple-public-keys-to-a-given-accountaddress-so-that-it-can-be-controlled-by-more-than-one-private-key",level:2},{value:"How do keys and accounts work on Flow?",id:"how-do-keys-and-accounts-work-on-flow",level:2},{value:"How do I create a Flow account if I do not have a service account?",id:"how-do-i-create-a-flow-account-if-i-do-not-have-a-service-account",level:2},{value:"Can you query events between a block range?",id:"can-you-query-events-between-a-block-range",level:2},{value:"Where can I follow feature releases on Flow?",id:"where-can-i-follow-feature-releases-on-flow",level:2},{value:"How do I run a Flow node and become a node operator?",id:"how-do-i-run-a-flow-node-and-become-a-node-operator",level:2}];function d(e){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",h3:"h3",h4:"h4",em:"em",strong:"strong",code:"code"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"what-is-the-expected-tps-transactions-per-second-for-the-forseeable-future",children:"What is the expected TPS (transactions per second) for the forseeable future?"}),"\n",(0,o.jsx)(n.p,{children:"Not all transactions are equal, so throughput numbers alone doesn't tell the whole story.\nFlow\u2019s transaction throughput depends on a variety of factors, such as networking bandwidth available to the nodes and optimizations in Flow's implementation. The dominant factor is transaction complexity, impacted by the number of instructions your transaction executes, the number of ledger reads and writes your transaction performs and how many signatures have to be checked to confirm that your transaction has the required privileges. For benchmark loads of simple token balance transfers (essentially an addition and subtraction plus two signature verifications), Flow's current implementation easily sustained a throughput of significantly more than 100 tps. However, we observed that transactions on Mainnet are generally considerably more complex (requiring several signature verifications; many ledger reads and writes; and running relatively complex computations). For the near-term future, 100tps seems like a realistic magnitude. We are working hard towards sustaining 100tps of the kind which are currently run on Mainnet. If your transactions are much simpler than the average Mainnet transaction, Flow potentially already satisfies your desired throughput. The best way to find out would be to test a benchmark set of your specific transactions on TestNet."}),"\n",(0,o.jsx)(n.h2,{id:"does-the-blockheight-go-up-1-every-second",children:"Does the blockheight go up 1 every second?"}),"\n",(0,o.jsx)(n.p,{children:"Flow targets 1 second block times but the protocol is still early in its development and further optimizations are needed to achieve that. As of Feb 2021, the rate of block finalization on Mainnet is 0.4 blocks/s; with a standard deviation of \xb10.1 blocks/s. Hence, a new block is finalized on average every 2.5 seconds. Note that block height only has a loose correlation with time, as the block rate naturally fluctuates."}),"\n",(0,o.jsx)(n.h2,{id:"does-flow-have-a-block-explorer",children:"Does Flow have a block explorer?"}),"\n",(0,o.jsx)(n.p,{children:"There are two block explorers live today. You can find them here:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://flowscan.org/",children:"https://flowscan.org/"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://flow.bigdipper.live/",children:"https://flow.bigdipper.live/"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-can-i-connect-to-and-query-the-access-nodes-what-data-is-available-there",children:"How can I connect to and query the Access Nodes? What data is available there?"}),"\n",(0,o.jsx)(n.p,{children:"At the protocol level, you can connect to an access node via GRPC. We provide JavaScript and Golang SDKs to do this for you."}),"\n",(0,o.jsx)(n.p,{children:"Once you have connected to an access node, you can fetch information regarding accounts, contracts, blocks, collections, transactions, and events. You can also execute scripts to query the current state of the Flow blockchain."}),"\n",(0,o.jsx)(n.h3,{id:"available-data",children:"Available Data"}),"\n",(0,o.jsx)(n.h4,{id:"accounts-contracts-blocks-collections-transactions-events",children:"Accounts, Contracts, Blocks, Collections, Transactions, Events"}),"\n",(0,o.jsxs)(n.p,{children:["These types are documented on the ",(0,o.jsx)(n.a,{href:"/http-api",children:"Access API"})," page."]}),"\n",(0,o.jsx)(n.p,{children:"The SDKs expose Flow data as types. For example the Go Flow Block data type implementation can be found here:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow-go-sdk/blob/master/block.go",children:"https://github.com/onflow/flow-go-sdk/blob/master/block.go"})}),"\n",(0,o.jsx)(n.p,{children:"You can query historical data and fetch contract code using the SDKs."}),"\n",(0,o.jsx)(n.h3,{id:"scripts",children:"Scripts"}),"\n",(0,o.jsx)(n.p,{children:"Flow allows you to actively query the state of the blockchain using scripts written in the Cadence programming language. You can find out more about Cadence here:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/cadence/intro",children:"cadence"})}),"\n",(0,o.jsx)(n.p,{children:"Running scripts and parsing their output is supported by the SDKs."}),"\n",(0,o.jsxs)(n.p,{children:["Scripts can access multiple contracts and accounts, calculate values, and ensure that data is correct using Cadence's type system. They can only access the ",(0,o.jsx)(n.em,{children:"current"})," state of the blockchain."]}),"\n",(0,o.jsx)(n.h3,{id:"using-the-sdks",children:"Using The SDKs"}),"\n",(0,o.jsx)(n.h4,{id:"javascript",children:"JavaScript"}),"\n",(0,o.jsx)(n.p,{children:"You can download the FCL (Flow Client Library) here:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/fcl-js",children:"https://github.com/onflow/fcl-js"})}),"\n",(0,o.jsxs)(n.p,{children:["To connect to an access node you will need to provide a URL to the SDK.\n",(0,o.jsx)(n.a,{href:"/docs/concepts/nodes/access-api",children:"access node urls"})]}),"\n",(0,o.jsx)(n.p,{children:"Here are examples of querying an access node at the bottom of this page:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/fcl-js/tree/master/packages/sdk",children:"https://github.com/onflow/fcl-js/tree/master/packages/sdk"})}),"\n",(0,o.jsx)(n.p,{children:"Here are examples of creating a script and Cadence data types:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/fcl-js/tree/master/packages/types#scripts",children:"https://github.com/onflow/fcl-js/tree/master/packages/types#scripts"})}),"\n",(0,o.jsx)(n.p,{children:"And here are examples of parsing script output:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/fcl-js/tree/master/packages/sdk/src/decode",children:"https://github.com/onflow/fcl-js/tree/master/packages/decode"})}),"\n",(0,o.jsx)(n.h4,{id:"go",children:"Go"}),"\n",(0,o.jsx)(n.p,{children:"You can download the Go SDK here:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow-go-sdk",children:"https://github.com/onflow/flow-go-sdk"})}),"\n",(0,o.jsxs)(n.p,{children:["To connect to an access node you will need to provide a URL to the SDK.\n",(0,o.jsx)(n.strong,{children:"testnet: access.devnet.nodes.onflow.org:9000\nsanxboxnet: access.sandboxnet.nodes.onflow.org:9000\nmainnet: access.mainnet.nodes.onflow.org:9000"})]}),"\n",(0,o.jsx)(n.p,{children:"You can find examples of querying an access node at the bottom of this page:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow-go-sdk/blob/master/README.md",children:"https://github.com/onflow/flow-go-sdk/blob/master/README.md"})}),"\n",(0,o.jsx)(n.p,{children:"You can find examples using the emulator that can be adapted to use an access node here:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow-go-sdk/blob/master/examples/get_events/main.go",children:"https://github.com/onflow/flow-go-sdk/blob/master/examples/get_events/main.go"})}),"\n",(0,o.jsx)(n.p,{children:"And here is an example of using a script:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow-go-sdk#executing-a-script",children:"https://github.com/onflow/flow-go-sdk#executing-a-script"})}),"\n",(0,o.jsx)(n.h4,{id:"other-programming-languages",children:"Other Programming Languages"}),"\n",(0,o.jsxs)(n.p,{children:['For an example of implementing access node communication using another programming language, see "Interact with Flow using Ruby" by Daniel Podaru:\n',(0,o.jsx)(n.a,{href:"https://www.onflow.org/post/interact-with-flow-using-ruby",children:"https://www.onflow.org/post/interact-with-flow-using-ruby"})]}),"\n",(0,o.jsx)(n.h2,{id:"how-do-apps-consume-events-how-do-events-work",children:"How do apps consume events? How do events work?"}),"\n",(0,o.jsx)(n.p,{children:'Flow transactions can emit informative "events" containing data intended to be used by off-chain observers. Events can be used to trigger backend or UI events, for example.'}),"\n",(0,o.jsx)(n.p,{children:"Note that a single transaction may emit many events, and that the order of events may surprise you if a non-standard transaction is being used. Event parameters may be optional, which means that they might be nil in some scenarios. All of this means that you must be careful when parsing events."}),"\n",(0,o.jsx)(n.h3,{id:"defining-events",children:"Defining Events"}),"\n",(0,o.jsx)(n.p,{children:"Events are implemented within Flow smart contracts using the Cadence programming language."}),"\n",(0,o.jsx)(n.p,{children:"You can find out more about events in Cadence here:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/cadence/language/events",children:"cadence/language/events/"})}),"\n",(0,o.jsx)(n.p,{children:"As an example of the kinds of information events can contain, see the documentation of the events that the staking protocol emits:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/concepts/staking/staking-scripts-events",children:"staking/events"})}),"\n",(0,o.jsx)(n.h3,{id:"consuming-events",children:"Consuming Events"}),"\n",(0,o.jsx)(n.p,{children:"To consume events, you must query a Flow Access Node and specify the type of event and the range of blocks you wish to fetch those events from. You can then parse any returned events and handle the information that they contain."}),"\n",(0,o.jsx)(n.h3,{id:"using-go",children:"Using Go"}),"\n",(0,o.jsx)(n.p,{children:"Once you connect to an Access Node using the Go SDK you can query for events."}),"\n",(0,o.jsx)(n.p,{children:"This is documented here:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow-go-sdk#querying-events",children:"https://github.com/onflow/flow-go-sdk#querying-events"})}),"\n",(0,o.jsx)(n.p,{children:"And there is an example of usage here:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow-go-sdk/blob/master/examples/get_events",children:"https://github.com/onflow/flow-go-sdk/blob/master/examples/get_events)"})}),"\n",(0,o.jsx)(n.h3,{id:"using-javascript",children:"Using JavaScript"}),"\n",(0,o.jsx)(n.p,{children:"Once you connect to an Access Node using the FCL (Flow Client Library) you can query for events."}),"\n",(0,o.jsx)(n.p,{children:"This is documented here:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/onflow/fcl-js/tree/master/packages/sdk#getevents-usage",children:"https://github.com/onflow/fcl-js/tree/master/packages/sdk#getevents-usage"}),"\nAnd there is an example of usage here:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/onflow/kitty-items/tree/master/api/src/workers",children:"https://github.com/onflow/kitty-items/tree/master/api/src/workers"})}),"\n",(0,o.jsx)(n.h3,{id:"using-other-programming-languages",children:"Using Other Programming Languages"}),"\n",(0,o.jsx)(n.p,{children:'Currently, we only provide Go and FCL-JS (Flow Client Library) for Flow. For an example of accessing the Flow blockchain and consuming events from it using another programming language, see "Interact with Flow using Ruby" by Daniel Podaru:'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://www.onflow.org/post/interact-with-flow-using-ruby",children:"https://www.onflow.org/post/interact-with-flow-using-ruby"})}),"\n",(0,o.jsx)(n.h2,{id:"i-staked-and-now-i-cant-see-my-flow---what-happened",children:"I staked and now I can't see my FLOW - what happened?"}),"\n",(0,o.jsxs)(n.p,{children:["Once you complete a successful staking or delegation request, your tokens are sent to the staking contract. Your tokens are not lost - they are staked! To view your active stake or delegation, navigate to the Stake & Delegate page on Flow Port (left side bar, or this URL + your address after the last slash (",(0,o.jsx)(n.a,{href:"https://port.onflow.org/stake-delegate/",children:"https://port.onflow.org/stake-delegate/"}),")"]}),"\n",(0,o.jsx)(n.h2,{id:"what-do-i-do-when-i-get-this-error-node-start-up-issue---could-not-process-block-proposal-invalid-extension-of-protocol-state",children:"What do I do when I get this error: Node start up issue - could not process block proposal: invalid extension of protocol state?"}),"\n",(0,o.jsxs)(n.p,{children:["It sounds like you didn't wipe your ",(0,o.jsx)(n.code,{children:"data"})," folder? Turn off your node, remove the ",(0,o.jsx)(n.code,{children:"data"})," folder and restart the node."]}),"\n",(0,o.jsx)(n.h2,{id:"what-errors-are-acceptable-to-see-when-my-node-is-running",children:"What errors are acceptable to see when my node is running?"}),"\n",(0,o.jsx)(n.p,{children:"No errors should be considered acceptable. If there are errors that are constantly recurring, please bring it to attention so logging can be adjusted accordingly, if required."}),"\n",(0,o.jsx)(n.h2,{id:"is-there-a-testnetdevnet",children:"Is there a testnet/devnet?"}),"\n",(0,o.jsxs)(n.p,{children:["There is an access node for you to develop against on the testnet/devnet. You can learn more about it here ",(0,o.jsx)(n.a,{href:"/docs/tutorials/testnet-deployment",children:"testnet-deployment#accessing-flow-testnet"})]}),"\n",(0,o.jsx)(n.h2,{id:"is-there-a-public-node",children:"Is there a public node?"}),"\n",(0,o.jsxs)(n.p,{children:["Yes, an access node is publicly accessible to submit transactions and read data from the blockchain. If you\u2019d like to access the devnet access node to build against, you can do so ",(0,o.jsx)(n.a,{href:"/docs/concepts/flow-networks/accessing-testnet",children:"here"})]}),"\n",(0,o.jsx)(n.h2,{id:"is-it-possible-to-add-multiple-public-keys-to-a-given-accountaddress-so-that-it-can-be-controlled-by-more-than-one-private-key",children:"Is it possible to add multiple public keys to a given account/address so that it can be controlled by more than one private key?"}),"\n",(0,o.jsxs)(n.p,{children:["Yes, accounts support multiple, weighted keys, ",(0,o.jsx)(n.a,{href:"/docs/cadence/language/accounts",children:"here"}),"\nusing\xa0",(0,o.jsx)(n.code,{children:"AuthAccount"}),"\u2019s\xa0",(0,o.jsx)(n.code,{children:"fun addPublicKey(_ publicKey: [UInt8])"}),"and\xa0",(0,o.jsx)("br",{}),(0,o.jsx)(n.code,{children:"fun removePublicKey(_ index: Int)"}),"\xa0functions."]}),"\n",(0,o.jsx)(n.h2,{id:"how-do-keys-and-accounts-work-on-flow",children:"How do keys and accounts work on Flow?"}),"\n",(0,o.jsx)(n.p,{children:"Accounts are created with associated keys. There can be multiple keys on an account. To execute transactions from the account, a total of 1000 weight keys need to sign. The account holds a field for FLOW balance. When transactions move flow, that balance is updated by the protocol. The account also holds place for storage and contract code."}),"\n",(0,o.jsx)(n.p,{children:"FLOW supports a variety of signature schemes for adding keys to an account."}),"\n",(0,o.jsxs)(n.p,{children:["Details: ",(0,o.jsx)(n.a,{href:"/docs/concepts/start-here/accounts-and-keys",children:"concepts/accounts-and-keys"})]}),"\n",(0,o.jsx)(n.h2,{id:"how-do-i-create-a-flow-account-if-i-do-not-have-a-service-account",children:"How do I create a Flow account if I do not have a service account?"}),"\n",(0,o.jsxs)(n.p,{children:["Instructions to generate an address are here: ",(0,o.jsx)(n.a,{href:"/docs/tooling/flow-go-sdk/#create-accounts",children:"flow-go-sdk#create-accounts"}),". You don't need a service account."]}),"\n",(0,o.jsx)(n.h2,{id:"can-you-query-events-between-a-block-range",children:"Can you query events between a block range?"}),"\n",(0,o.jsxs)(n.p,{children:["You can query the access API to get events for a block range. See Access API spec here: ",(0,o.jsx)(n.a,{href:"/http-api",children:"http-api"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"where-can-i-follow-feature-releases-on-flow",children:"Where can I follow feature releases on Flow?"}),"\n",(0,o.jsxs)(n.p,{children:["You can follow Flow node software releases here: ",(0,o.jsx)(n.a,{href:"https://github.com/onflow/flow-go/releases",children:"https://github.com/onflow/flow-go/releases"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"how-do-i-run-a-flow-node-and-become-a-node-operator",children:"How do I run a Flow node and become a node operator?"}),"\n",(0,o.jsxs)(n.p,{children:["See the dedicated section on node operation: ",(0,o.jsx)(n.a,{href:"/docs/concepts/nodes/node-operation/",children:"nodes/node-operation/"})]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}}}]);