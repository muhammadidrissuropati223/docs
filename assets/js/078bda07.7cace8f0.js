"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"Byzantine node attack response",sidebar_title:"Byzantine attack response",description:"How to respond to a byzantine node attack on the network"},i=void 0,s={unversionedId:"nodes/node-operation/byzantine-node-attack-response",id:"nodes/node-operation/byzantine-node-attack-response",title:"Byzantine node attack response",description:"How to respond to a byzantine node attack on the network",source:"@site/docs/nodes/node-operation/byzantine-node-attack-response.mdx",sourceDirName:"nodes/node-operation",slug:"/nodes/node-operation/byzantine-node-attack-response",permalink:"/docs/nodes/node-operation/byzantine-node-attack-response",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Byzantine node attack response",sidebar_title:"Byzantine attack response",description:"How to respond to a byzantine node attack on the network"},sidebar:"tutorialSidebar",previous:{title:"Setting Up a Flow Access Node",permalink:"/docs/nodes/node-operation/access-node-setup"},next:{title:"Database Encryption for Existing Node Operators",permalink:"/docs/nodes/node-operation/db-encryption-existing-operator"}},l={},d=[{value:"Admin server",id:"admin-server",level:2},{value:"Enable the admin server",id:"enable-the-admin-server",level:3},{value:"Detecting a byzantine node",id:"detecting-a-byzantine-node",level:2},{value:"Metrics",id:"metrics",level:3},{value:"Logs",id:"logs",level:3},{value:"Identifying the source of malicious traffic",id:"identifying-the-source-of-malicious-traffic",level:3},{value:"Reporting the byzantine node",id:"reporting-the-byzantine-node",level:2},{value:"Blocking a byzantine node",id:"blocking-a-byzantine-node",level:2},{value:"Unblocking a node",id:"unblocking-a-node",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Flow, like most blockchains, forms an open decentralized peer-to-peer network between all of the nodes\non the network. Due to its decentralized nature, there is a potential for nodes to behave maliciously\n(byzantine) and intentionally try to harm the network. There are a variety of protections within the\nnode software to deal with invalid messages - message signatures, sender authorization, payload\nvalidation, etc. These protections guard the network against many types of attacks. However, there\ncould still be a byzantine node that spams other nodes in the network with invalid messages at volumes\nthat are intended to impact node performance. While this will not compromise the security of the\nnetwork it could impact network liveness."),(0,a.kt)("p",null,"This guide explains how to detect such a node and what actions you should take as a node operator\nto deal with such byzantine nodes."),(0,a.kt)("p",null,"Responding to an attack from a byzantine node requires the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Immediate action to block network traffic originating from the byzantine node to your node."),(0,a.kt)("li",{parentName:"ol"},"Raising a governance FLIP to remove the node from the network as described in this ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/onflow/flips/blob/main/governance/20230105-identify-errant-node.md"},"FLIP"),"."),(0,a.kt)("li",{parentName:"ol"},"A service account transaction to set the node weight to 0.")),(0,a.kt)("p",null,"This guide focuses on the first action."),(0,a.kt)("h2",{id:"admin-server"},"Admin server"),(0,a.kt)("p",null,"Flow nodes have an admin server which exposes a simple REST API for interacting with the node.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/blob/master/admin/README.md"},"README")," for some useful examples.\nIt is disabled by default."),(0,a.kt)("h3",{id:"enable-the-admin-server"},"Enable the admin server"),(0,a.kt)("p",null,"To enable to admin server,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the following option to the node's CLI flags.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--admin-addr=localhost:9002\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The port does not have to be 9002. You can choose any free port.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Do NOT expose the port outside the machine and always use ",(0,a.kt)("b",null,"localhost"),":port")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Reboot the node to apply the new setting. You can then verify it\u2019s working by logging into\nthe machine via ssh and running,")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl localhost:9002\n")),(0,a.kt)("p",null,"This should return a json response message as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"code":5,"message":"Not Found","details":[]}\n')),(0,a.kt)("p",null,"If you instead get a connection rejected message then it\u2019s not configured correctly."),(0,a.kt)("h2",{id:"detecting-a-byzantine-node"},"Detecting a byzantine node"),(0,a.kt)("p",null,"There are 2 general categories of byzantine attacks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Safety attacks - are attacks where a node attempts to corrupt or modify the state of the\nblockchain outside of normal protocol rules."),(0,a.kt)("li",{parentName:"ol"},"Liveness attacks - sometimes called spamming attacks, are when a node attempts to disrupt the\nnetwork by abusing their access to waste network and node resources. This generally results in\ndegraded performance.")),(0,a.kt)("p",null,"Flow nodes are protected against safety attacks, but liveness attacks are extremely difficult to\ncompletely prevent. To close the gap, we rely on coordination between node operators to detect\nand block abusive nodes."),(0,a.kt)("h3",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,'Flow nodes generate a variety of metrics that can be used to measure the node\'s performance and\nidentify abnormal behavior. Most metrics are only useful in the context of "normal" operation,\nso it is a good idea to regularly review them to build an understanding of what is "normal".'),(0,a.kt)("p",null,"Metrics to watch:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CPU, memory, network connections, network I/O, file descriptors"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network_authorization_*")," - counts the number of unauthorized/invalid messages received"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network_queue_message_queue_size")," - measures the number of incoming messages waiting to be processed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network_engine_messages_received_total")," - measures the number of messages received from the network")),(0,a.kt)("p",null,"There are many other metrics, but these are a good starting point. If you notice any anomalous trends,\nreview the logs for additional context."),(0,a.kt)("h3",{id:"logs"},"Logs"),(0,a.kt)("p",null,"Log events related to suspicious activity are logged with the label ",(0,a.kt)("inlineCode",{parentName:"p"},'"suspicious":true'),". This is\nhelpful to identify the most relevant logs, but there are legitimate cases when these logs are\nemitted, so they cannot be used as a definitive indicator of malicious activity. Two examples of\nexpected log messages are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rejected inbound connection")," - You may see this error if an operator unstaked their node between\nsporks, but never shut it down. The node will continue to operate as usual, but peers will not have\nit in their identity table and will (correctly) reject incoming connections."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"middleware does not have subscription for the channel ID indicated in the unicast message received")," -\nThis is commonly logged during node startup when receiving messages before all of the components\nhave finished registering their channels with the network layer. It is NOT expected after startup.")),(0,a.kt)("p",null,"The following is an example of a log message indicating an Access node attempted to send a message it\nis not authorized to send:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "level": "error",\n    "node_role": "collection",\n    "node_id": "4a6f7264616e20536368616c6d00a875801849f2b5bea9e9d2c9603f00e5d533",\n    "module": "network_slashing_consumer",\n    "peer_id": "QmY2kby3xt3ugu2QqJP5w24rP4HSakYgDFpAJy1ifSRkF7",\n    "networking_offense": "unauthorized_sender",\n    "message_type": "messages.BlockProposal",\n    "channel": "sync-committee",\n    "protocol": "publish",\n    "suspicious": true,\n    "role": "access",\n    "sender_id": "f9237c896507b8d654165c36b61c9a3080e6dd042dea562a4a494fbd73133634",\n    "time": "2023-01-24T21:10:32.74684667Z",\n    "message": "potential slashable offense: sender role not authorized to send message on channel"\n}\n')),(0,a.kt)("h3",{id:"identifying-the-source-of-malicious-traffic"},"Identifying the source of malicious traffic"),(0,a.kt)("p",null,"Most log messages include either the node ID or peer ID. Peer ID is the ID used to identify nodes on\nby the libp2p library. Peer IDs are derived from the node's networking public key, so there is a 1:1\nmapping between node ID and peer ID."),(0,a.kt)("p",null,"The two simplest ways to match a node ID to a peer ID:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"inbound connection established")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"outbound connection established")," log messages contain both\nthe node and peer IDs"),(0,a.kt)("li",{parentName:"ol"},"The following admin command will return the node info for a given peer ID:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl localhost:9002/admin/run_command \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"commandName": "get-latest-identity", "data": { "peer_id": "QmY2kby3xt3ugu2QqJP5w24rP4HSakYgDFpAJy1ifSRkF7" }}\'\n')),(0,a.kt)("p",null,"If you cannot find any log messages at the current log level, you may need to enable debug logging.\nSee the admin server's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/blob/master/admin/README.md"},"README")," for\nan example."),(0,a.kt)("h2",{id:"reporting-the-byzantine-node"},"Reporting the byzantine node"),(0,a.kt)("p",null,"Report the suspicious node on Discord in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#flow-validators-alerts")," channel along with all the\nevidence you have collected (log messages, other networking related metrics, etc).\nThis will alert other node operators who can review their nodes to corroborate the report. Using\nevidence from multiple operators, a consensus can be reached about the suspicious node, and\nappropriate action can be taken."),(0,a.kt)("h2",{id:"blocking-a-byzantine-node"},"Blocking a byzantine node"),(0,a.kt)("p",null,"Once a consensus is reached about the suspicious node on Discord among the node operators, the\nsuspicious node can be blocked using the admin command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl localhost: 9002/admin/run_command \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"commandName": "set-config","data": {"network-id-provider-blocklist": ["<suspcious node id>"]}}\n')),(0,a.kt)("p",null,"After blocking the node, all traffic coming from the node will be rejected and you should only see\nlogs about reject messages and connections for that node ID."),(0,a.kt)("h2",{id:"unblocking-a-node"},"Unblocking a node"),(0,a.kt)("p",null,"If you need to unblock a node, you can use the same command to remove the node ID from the blocklist.\nSimply run it again with an empty list to remove all blocked nodes, or an existing list with the\nspecific node ID you want to unblock removed."),(0,a.kt)("p",null,"The following command returns a list of the currently blocked nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl localhost: 9002/admin/run_command \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"commandName": "get-config", "data": "network-id-provider-blocklist"}\n')),(0,a.kt)("p",null,"After unblocking the node, connections and traffic coming from the node should resume."))}u.isMDXComponent=!0}}]);