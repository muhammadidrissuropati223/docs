"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9505],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>v});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):d(d({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(o),m=r,v=c["".concat(i,".").concat(m)]||c[m]||u[m]||a;return o?n.createElement(v,d(d({ref:t},p),{},{components:o})):n.createElement(v,d({ref:t},p))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,d=new Array(a);d[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,d[1]=l;for(var s=2;s<a;s++)d[s]=o[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8933:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={title:"Starting Your Nodes"},d=void 0,l={unversionedId:"nodes/node-operation/guides/starting-nodes",id:"nodes/node-operation/guides/starting-nodes",title:"Starting Your Nodes",description:"Prior to starting up your nodes make sure you have the following items completed:",source:"@site/docs/nodes/node-operation/guides/starting-nodes.mdx",sourceDirName:"nodes/node-operation/guides",slug:"/nodes/node-operation/guides/starting-nodes",permalink:"/docs/nodes/node-operation/guides/starting-nodes",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Starting Your Nodes"},sidebar:"tutorialSidebar",previous:{title:"Spork Practice",permalink:"/docs/nodes/node-operation/guides/spork-practice"},next:{title:"Leased FLOW Account Setup",permalink:"/docs/nodes/node-operation/leased-account-setup"}},i={},s=[{value:"systemd",id:"systemd",level:2},{value:"Docker",id:"docker",level:2},{value:"Access",id:"access",level:3},{value:"Collection",id:"collection",level:3},{value:"Consensus",id:"consensus",level:3},{value:"Execution",id:"execution",level:3},{value:"Verification",id:"verification",level:3},{value:"Archive",id:"archive",level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Prior to starting up your nodes make sure you have the following items completed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bootstrap process completed with the bootstrap directory handy (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/flow/bootstrap"),")"),(0,r.kt)("li",{parentName:"ol"},"Flow ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," directory created (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/flow/data"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://developers.flow.com/nodes/node-operation/node-bootstrap"},"node config")," ready"),(0,r.kt)("li",{parentName:"ol"},"Firewall exposes TCP/3569, and if you are running ",(0,r.kt)("inlineCode",{parentName:"li"},"access")," node also the GRPC port (default: TCP/9000)")),(0,r.kt)("p",null,"For more details head back to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/nodes/node-operation/node-setup#prepare-your-node-to-start"},"Setting up your node")),(0,r.kt)("p",null,"When you have all the above completed, you can start your Flow node via ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"."),(0,r.kt)("h2",{id:"systemd"},"systemd"),(0,r.kt)("p",null,"Ensure that you downloaded the systemd unit file. If you haven't, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/nodes/node-operation/node-setup#prepare-your-node-to-start"},"Set your node to start")," guide to get your unit file and enabled."),(0,r.kt)("p",null,"Once you have your Flow service enabled you can now start your service: ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start flow")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("p",null,"If you don't have have systemd on your system, or prefer not to use systemd, you can run the following ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," commands for your respective Flow role to start your node!"),(0,r.kt)("h3",{id:"access"},"Access"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    gcr.io/flow-container-registry/access:v0.0.6-alpha \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --rpc-addr=0.0.0.0:9000 \\\n    --ingress-addr=${FLOW_NETWORK_COLLECTION_NODE} \\\n    --script-addr=${FLOW_NETWORK_EXECUTION_NODE} \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,r.kt)("h3",{id:"collection"},"Collection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    gcr.io/flow-container-registry/collection:v0.0.6-alpha \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --rpc-addr=0.0.0.0:9000 \\\n    --nclusters=${FLOW_NETWORK_COLLECTION_CLUSTER_COUNT} \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,r.kt)("h3",{id:"consensus"},"Consensus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    gcr.io/flow-container-registry/consensus:v0.0.6-alpha \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --nclusters=${FLOW_NETWORK_COLLECTION_CLUSTER_COUNT} \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,r.kt)("h3",{id:"execution"},"Execution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    gcr.io/flow-container-registry/execution:v0.0.6-alpha \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --ingress-addr=0.0.0.0:9000 \\\n    --nclusters=${FLOW_NETWORK_COLLECTION_CLUSTER_COUNT} \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,r.kt)("h3",{id:"verification"},"Verification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm \\\n    -v /path/to/bootstrap:/bootstrap:ro \\\n    -v /path/to/data:/data:rw \\\n    --name flow-go \\\n    --network host \\\n    gcr.io/flow-container-registry/verification:v0.0.6-alpha \\\n    --nodeid=${FLOW_GO_NODE_ID} \\\n    --bootstrapdir=/bootstrap \\\n    --datadir=/data/protocol \\\n    --nclusters=${FLOW_NETWORK_COLLECTION_CLUSTER_COUNT} \\\n    --bind 0.0.0.0:3569 \\\n    --loglevel=error\n")),(0,r.kt)("h3",{id:"archive"},"Archive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," docker run --rm \\\n    -v /path/to/data:/data:rw \\\n    --network host \\\n    --label=project=flow \\\n    --label=network=mainnet\n    --label=app=dps\n    --label=version=v0.26\n    --name flow-dps gcr.io/flow-container-registry/flow-dps-live:v0.26.1\n    --address 0.0.0.0:5005\n    --index /data/index\n    --bootstrap /data/bootstrap\n    --checkpoint /data/bootstrap/root.checkpoint\n    --data /data/protocol\n    --level debug\n    --metrics 0.0.0.0:8080\n    --bucket bucket_name\n    --seed-address=access_node_address\n    --seed-key=seed_key\n")))}u.isMDXComponent=!0}}]);