"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7283],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},21424:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={title:"Spork Practice"},i=void 0,l={unversionedId:"nodes/node-operation/guides/spork-practice",id:"nodes/node-operation/guides/spork-practice",title:"Spork Practice",description:"Sporking",source:"@site/docs/nodes/node-operation/guides/spork-practice.mdx",sourceDirName:"nodes/node-operation/guides",slug:"/nodes/node-operation/guides/spork-practice",permalink:"/docs/nodes/node-operation/guides/spork-practice",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Spork Practice"},sidebar:"tutorialSidebar",previous:{title:"Genesis Bootstrapping",permalink:"/docs/nodes/node-operation/guides/genesis-bootstrap"},next:{title:"Starting Your Nodes",permalink:"/docs/nodes/node-operation/guides/starting-nodes"}},s={},p=[{value:"Sporking",id:"sporking",level:2},{value:"Local Testnet",id:"local-testnet",level:2},{value:"Remote Testnet",id:"remote-testnet",level:2},{value:"Practice Testnet",id:"practice-testnet",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sporking"},"Sporking"),(0,r.kt)("p",null,"The actual process of Sporking will mostly be covered by the Node Operators Quick Guide, and will not be covered here."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.onflow.org/docs/node-operation-consolidated-guide"},"Node Operation Quick Guide")),(0,r.kt)("p",null,"Instead, we'll aim to give some instructions for those that want to Practice the process themselves, before joining the Mainnet Spork."),(0,r.kt)("p",null,"This guide assumes you have access to the Flow-Go repo, which you'll need to build up-to-date containers and run code snippets."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go"})),(0,r.kt)("h2",{id:"local-testnet"},"Local Testnet"),(0,r.kt)("p",null,"One way to get a good feel of the network without too much interaction with infrastructure is to play with the local testnet, which we've named the Flow Local Instrumented Test Environment (FLITE)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/blob/master/integration/localnet/README.md"},"https://github.com/onflow/flow-go/blob/master/integration/localnet/README.md")),(0,r.kt)("p",null,"FLITE will allow you to start a full flow network locally, which means starting all 5 roles required for a functioning network. Instructions for initializing and starting the local network are provided in the README above."),(0,r.kt)("p",null,"When Starting FLITE, it will build all the docker images required for the network. This can also be done manually ahead of time, using ",(0,r.kt)("inlineCode",{parentName:"p"},"make docker-build-flow")," from the root directory of ",(0,r.kt)("inlineCode",{parentName:"p"},"flow-go")),(0,r.kt)("h2",{id:"remote-testnet"},"Remote Testnet"),(0,r.kt)("p",null,"If you would like more control over the nodes, beyond what docker compose can provide, or you wish to deploy the docker images to separate VMs, to more closely imitate Mainnet, you will have to manually run bootstrapping for a specific configuration of nodes that you would like to test."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/blob/master/cmd/bootstrap/README.md"})),(0,r.kt)("p",null,"Example files are available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd/bootstrap/example_files")," folder."),(0,r.kt)("p",null,"Where the ",(0,r.kt)("inlineCode",{parentName:"p"},"node-config.json")," will usually store all flow's nodes, whereas partner node info usually goes into a separate folder. The last file, which will need to be manually populated, is the partner stakes file, which takes the IDs of all the partner nodes and associates a stake. For now, this can be arbitrary."),(0,r.kt)("p",null,"Once you have all the information, you can make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"finalize")," command:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/tree/master/cmd/bootstrap#example-1"})),(0,r.kt)("p",null,"And generate the bootstrapping folder required to start up your nodes."),(0,r.kt)("p",null,"Once you have the bootstrapping folder, you'll be able to start up all the nodes that were included in the bootstrapping process."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.onflow.org/docs/node-operation-consolidated-guide#docker"},"Node Operation Quick Guide")),(0,r.kt)("p",null,"The startup command will look very similar to what is provided in the quick guide. One such example, assuming we named our bootstrap folder ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    gcr.io/flow-container-registry/execution:latest \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --rpc-addr=0.0.0.0:9000 \\\n    --nclusters=${FLOW_NETWORK_COLLECTION_CLUSTER_COUNT} \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,r.kt)("p",null,"The two missing pieces of info here are ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOW_GO_NODE_ID")," which will have been generated from the bootstrap process, and will depend on which node you're trying to run, and ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOW_NETWORK_COLLECTION_CLUSTER_COUNT")," which we've been defaulting to ",(0,r.kt)("inlineCode",{parentName:"p"},"2")),(0,r.kt)("h2",{id:"practice-testnet"},"Practice Testnet"),(0,r.kt)("p",null,"Lastly, if the goal is to practice the entire Sporking procedure, including ",(0,r.kt)("inlineCode",{parentName:"p"},"transit")," of staking and networking keys, and joining a network, we can help spin up a Testnet temporarily for this purpose. This will require quite a bit of coordination, and will basically be the same steps as the Mainnet spork, so please let us know if this is something you'd like to do and we\u2019ll connect to plan accordingly."))}u.isMDXComponent=!0}}]);