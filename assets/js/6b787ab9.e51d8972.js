"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8605],{93738:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});o(67294);var s=o(85893),t=o(11151);const r={title:"Node Operations",sidebar_position:1},d="Hello Node Operator!",i={unversionedId:"concepts/nodes/node-operation/index",id:"concepts/nodes/node-operation/index",title:"Node Operations",description:"Flow nodes are vital components of the Flow blockchain. These nodes are responsible for a variety of network operations to maintain the distributed ledger.",source:"@site/docs/concepts/nodes/node-operation/index.md",sourceDirName:"concepts/nodes/node-operation",slug:"/concepts/nodes/node-operation/",permalink:"/docs/concepts/nodes/node-operation/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/node-operation/index.md",tags:[],version:"current",lastUpdatedBy:"darkdrag00nv2",lastUpdatedAt:1685055734,formattedLastUpdatedAt:"May 25, 2023",sidebarPosition:1,frontMatter:{title:"Node Operations",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Flow Nodes",permalink:"/docs/concepts/nodes/"},next:{title:"Operator FAQ",permalink:"/docs/concepts/nodes/node-operation/FAQ"}},a={},c=[{value:"Why run a node?",id:"why-run-a-node",level:2},{value:"Which node should you run?",id:"which-node-should-you-run",level:2},{value:"Observer node",id:"observer-node",level:3},{value:"Access node",id:"access-node",level:3},{value:"Collection, Consensus, Verification and Execution node",id:"collection-consensus-verification-and-execution-node",level:3},{value:"Running a staked node",id:"running-a-staked-node",level:3}];function l(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",ul:"ul",li:"li",ol:"ol"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"hello-node-operator",children:"Hello Node Operator!"}),"\n",(0,s.jsx)(n.p,{children:"Flow nodes are vital components of the Flow blockchain. These nodes are responsible for a variety of network operations to maintain the distributed ledger."}),"\n",(0,s.jsx)(n.h2,{id:"why-run-a-node",children:"Why run a node?"}),"\n",(0,s.jsx)(n.p,{children:"By running your own node, you have direct access to the evolving state of the network, without having to rely on third parties.\nThis increases privacy and security, reduces reliance on external servers, and helps balance load distribution.\nBy running a node, you also directly contribute to the security and decentralization of the whole network."}),"\n",(0,s.jsx)(n.p,{children:"Flow multirole architecture makes it more scalable and provides several node types that you as a node operator can pick and choose from."}),"\n",(0,s.jsx)(n.h2,{id:"which-node-should-you-run",children:"Which node should you run?"}),"\n",(0,s.jsxs)(n.p,{children:["The different types of nodes are described ",(0,s.jsx)(n.a,{href:"/docs/concepts/nodes/node-operation/node-roles",children:"here"}),". As node operator, you can choose to run any of the different types of node that best fits your needs."]}),"\n",(0,s.jsx)(n.h3,{id:"observer-node",children:"Observer node"}),"\n",(0,s.jsx)(n.p,{children:"The observer node is one of the easiest node to spin up and can be run by Dapp developers who need the latest block data available locally e.g. a wallet application that needs to track the latest block ID and height.\nIn addition to supporting dapps, an observer node can also be run by access node operators who want to scale their access nodes' endpoints. Access node operators can spin up geographically dispersed observer nodes which can talk to their staked access nodes and to each other."}),"\n",(0,s.jsx)(n.p,{children:"The observer node is not staked but still provides the same API as the access node."}),"\n",(0,s.jsxs)(n.p,{children:["To run an observer node, follow this ",(0,s.jsx)(n.a,{href:"/docs/concepts/nodes/node-operation/observer-node",children:"guide"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"access-node",children:"Access node"}),"\n",(0,s.jsx)(n.p,{children:"If you want local access to the protocol state data (blocks, collections, transactions) and do not want to use one of the community access nodes you can run an access node.\nDapp developers, chain explorers, chain analytics etc. who want exclusive access to chain data and not be subject to the rate-limits on the community access node can choose to run an access node."}),"\n",(0,s.jsxs)(n.p,{children:["An access node is staked but since it does not participate in the core Flow protocol, it does not receive any staking rewards.\nTo run an access node, see the ",(0,s.jsx)(n.a,{href:"#running-a-staked-node",children:"Running a staked node"})," section below."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternately, instead of running an access node, you can use the ",(0,s.jsx)(n.a,{href:"/docs/concepts/nodes/access-api",children:"Flow community"})," access nodes or the ones run by any of the other node operators."]}),"\n",(0,s.jsx)(n.h3,{id:"collection-consensus-verification-and-execution-node",children:"Collection, Consensus, Verification and Execution node"}),"\n",(0,s.jsx)(n.p,{children:"If you want your node to participate in the nitty-gritty of Flow protocol and help in block or collection creation, transaction execution, result verification or block verification then you should run one of these four node roles."}),"\n",(0,s.jsx)(n.p,{children:"Nodes with these roles are staked and also receive staking rewards."}),"\n",(0,s.jsx)(n.h3,{id:"running-a-staked-node",children:"Running a staked node"}),"\n",(0,s.jsx)(n.p,{children:"To run a staked node (node type access, collection, consensus, verification or execution) the node must:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"be registered with sufficient stake"}),"\n",(0,s.jsx)(n.li,{children:"be authorized by the service account"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Before proceeding, ensure you have the stake required for your new node and that your node will be authorized by the service account (apply ",(0,s.jsx)(n.a,{href:"https://www.onflow.org/node-validators",children:"here"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"To set up a new Flow node you will need to complete the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/concepts/nodes/node-operation/node-setup",children:"Provision"})," the machine on which your node will run."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/concepts/nodes/node-operation/node-bootstrap",children:"Generate and register"})," your node identity."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/concepts/nodes/node-operation/node-bootstrap#step-3---start-your-flow-node",children:"Start"})," your node!"]}),"\n"]}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);