"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27463],{99803:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});i(67294);var t=i(85893),r=i(11151);const s={title:"Provisioning a Flow node",sidebar_title:"Node Provisioning",description:"Hardware, networking and Operating system setup for a Flow node"},o=void 0,a={unversionedId:"concepts/nodes/node-operation/node-provisioning",id:"concepts/nodes/node-operation/node-provisioning",title:"Provisioning a Flow node",description:"Hardware, networking and Operating system setup for a Flow node",source:"@site/docs/concepts/nodes/node-operation/node-provisioning.mdx",sourceDirName:"concepts/nodes/node-operation",slug:"/concepts/nodes/node-operation/node-provisioning",permalink:"/docs/next/concepts/nodes/node-operation/node-provisioning",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/node-operation/node-provisioning.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1690923736,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{title:"Provisioning a Flow node",sidebar_title:"Node Provisioning",description:"Hardware, networking and Operating system setup for a Flow node"},sidebar:"docsSidebar",previous:{title:"Node Migration",permalink:"/docs/next/concepts/nodes/node-operation/node-migration"},next:{title:"Node Roles",permalink:"/docs/next/concepts/nodes/node-operation/node-roles"}},d={},l=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Networking Requirements",id:"networking-requirements",level:2},{value:"Operating System Requirements",id:"operating-system-requirements",level:2},{value:"Time synchronization",id:"time-synchronization",level:2},{value:"Setup Data Directories &amp; Disks",id:"setup-data-directories--disks",level:2},{value:"Confidential Data &amp; Files",id:"confidential-data--files",level:3}];function c(e){const n=Object.assign({h2:"h2",p:"p",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em",ul:"ul",li:"li",img:"img",code:"code",h3:"h3"},(0,r.ah)(),e.components),{Callout:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,t.jsxs)(n.p,{children:["The hardware your Node will need varies depending on the role your Node will play in the Flow network. For an overview of the differences see the ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/node-roles",children:"Node Roles Overview"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"center",children:"Node Type"}),(0,t.jsx)(n.th,{align:"right",children:"CPU"}),(0,t.jsx)(n.th,{align:"right",children:"Memory"}),(0,t.jsx)(n.th,{align:"right",children:"Disk"}),(0,t.jsx)(n.th,{align:"center",children:"Example GCP Instance"}),(0,t.jsx)(n.th,{align:"center",children:"Example AWS Instance"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.strong,{children:"Collection"})}),(0,t.jsx)(n.td,{align:"right",children:"4 cores"}),(0,t.jsx)(n.td,{align:"right",children:"32 GB"}),(0,t.jsx)(n.td,{align:"right",children:"200 GB"}),(0,t.jsx)(n.td,{align:"center",children:"n2-highmem-4"}),(0,t.jsx)(n.td,{align:"center",children:"r6i.xlarge"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.strong,{children:"Consensus"})}),(0,t.jsx)(n.td,{align:"right",children:"2 cores"}),(0,t.jsx)(n.td,{align:"right",children:"16 GB"}),(0,t.jsx)(n.td,{align:"right",children:"200 GB"}),(0,t.jsx)(n.td,{align:"center",children:"n2-standard-4"}),(0,t.jsx)(n.td,{align:"center",children:"m6a.xlarge"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.strong,{children:"Execution"})}),(0,t.jsx)(n.td,{align:"right",children:"64 cores"}),(0,t.jsx)(n.td,{align:"right",children:"800 GB"}),(0,t.jsx)(n.td,{align:"right",children:"9 TB"}),(0,t.jsx)(n.td,{align:"center",children:"n2-highmem-128"}),(0,t.jsx)(n.td,{align:"center",children:"r6i.32xlarge"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.strong,{children:"Verification"})}),(0,t.jsx)(n.td,{align:"right",children:"2 cores"}),(0,t.jsx)(n.td,{align:"right",children:"16 GB"}),(0,t.jsx)(n.td,{align:"right",children:"200 GB"}),(0,t.jsx)(n.td,{align:"center",children:"n2-highmem-2"}),(0,t.jsx)(n.td,{align:"center",children:"r6a.large"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.strong,{children:"Access"})}),(0,t.jsx)(n.td,{align:"right",children:"4 cores"}),(0,t.jsx)(n.td,{align:"right",children:"16 GB"}),(0,t.jsx)(n.td,{align:"right",children:"750 GB"}),(0,t.jsx)(n.td,{align:"center",children:"n2-standard-4"}),(0,t.jsx)(n.td,{align:"center",children:"m6i.xlarge"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.strong,{children:"Observer"})}),(0,t.jsx)(n.td,{align:"right",children:"2 cores"}),(0,t.jsx)(n.td,{align:"right",children:"4 GB"}),(0,t.jsx)(n.td,{align:"right",children:"300 GB"}),(0,t.jsx)(n.td,{align:"center",children:"n2-standard-4"}),(0,t.jsx)(n.td,{align:"center",children:"m6i.xlarge"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:(0,t.jsx)(n.strong,{children:"Archive"})}),(0,t.jsx)(n.td,{align:"right",children:"32 cores"}),(0,t.jsx)(n.td,{align:"right",children:"800 GB"}),(0,t.jsx)(n.td,{align:"right",children:"2 TB"}),(0,t.jsx)(n.td,{align:"center",children:"m3-ultramem-32"}),(0,t.jsx)(n.td,{align:"center",children:"x2idn.16xlarge"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: The above numbers represent our current best estimate for the state of the network. These will be actively updated as we continue benchmarking the network's performance."})}),"\n",(0,t.jsx)(n.h2,{id:"networking-requirements",children:"Networking Requirements"}),"\n",(0,t.jsxs)(n.p,{children:["Most of the load on your nodes will be messages sent back and forth between other nodes on the network. Make sure you have a sufficiently fast connection; we recommend at ",(0,t.jsx)(n.em,{children:"least"})," 1Gbps, and 5Gbps is better."]}),"\n",(0,t.jsx)(n.p,{children:"Each node will require either a static IPv4 address or a fixed DNS name. Either works, and we'll refer to this more generally as your 'Node Address' from here on out."}),"\n",(0,t.jsx)(s,{type:"info",title:"Node Address Requirements",children:(0,t.jsx)(n.p,{children:"Your Node Address must be a publicly routable IPv4 address or valid DNS name\nthat points to your node. This is how other nodes in the network will\ncommunicate with you."})}),"\n",(0,t.jsx)(n.p,{children:"While both a static IPv4 and a domain name are possible, we prefer and recommend that node operators register their node under a domain that they control. This gives the Flow network more options for resiliency and resistance to adverse network conditions."}),"\n",(0,t.jsxs)(s,{type:"warning",title:"Registering a domain name for your Flow Node",children:[(0,t.jsx)(n.p,{children:"Crash recovery and denial of service attacks are two concerns that operators can mitigate relying on each of DNS indirection and IP routing. The later requires more involvement."}),(0,t.jsx)(n.p,{children:'Running a node behind an operator-controlled hostname (rather than "just" an IP) is a simple and cheap measure that:'}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"offers additional technical pathways to let operators improve resiliency and security,"}),"\n",(0,t.jsx)(n.li,{children:"lets them opt in to those measures as a reaction to an attack,"}),"\n",(0,t.jsx)(n.li,{children:"does not preclude any lower-level IP-based resiliency approaches."}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["Your firewalls must expose ",(0,t.jsx)(n.strong,{children:"TCP/3569"})," for Node communication. If you are running an Access Node, you must also expose the GRPC port ",(0,t.jsx)(n.strong,{children:"9000"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(42016).Z+"",loading:"lazy",alt:"Flow Architecture",width:"1460",height:"721"})}),"\n",(0,t.jsx)(n.h2,{id:"operating-system-requirements",children:"Operating System Requirements"}),"\n",(0,t.jsxs)(n.p,{children:["The Flow node code is distributed as a Linux container image, so your node must be running an OS with a container runtime like ",(0,t.jsx)(n.a,{href:"https://docker.com",children:"docker"})," or ",(0,t.jsx)(n.a,{href:"https://containerd.io",children:"containerd"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The bootstrapping scripts we'll use later are compiled binaries targeting an ",(0,t.jsx)(n.code,{children:"amd64"})," architecture, so your system must be 64-bit. Some of these scripts are bash based hence a shell interpreter that is bash compatible will also be needed."]}),"\n",(0,t.jsxs)(n.p,{children:["Flow also provides ",(0,t.jsx)(n.code,{children:"systemd"})," service and unit files as a template for installation, though ",(0,t.jsx)(n.code,{children:"systemd"})," is not required to run Flow."]}),"\n",(0,t.jsxs)(s,{type:"info",title:"Choose Your Own Adventure",children:[(0,t.jsx)(n.p,{children:"Flow is distributed in such a way that makes it very system agnostic. You are\nfree to build your own orchestration around how you run your nodes and manage\nyour keys."}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.p,{children:"For the remainder of this guide, we cover the most simple case, a single node being\nhand deployed. This should give you a good sense of what's needed, and you can\nmodify to suit your needs from there."}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.p,{children:"The Flow team has tested running nodes on Ubuntu 18.04 and GCP's Container\nOptimized OS, which is based on Chromium OS. If you are unsure where to start,\nthose are good choices."})]}),"\n",(0,t.jsx)(n.h2,{id:"time-synchronization",children:"Time synchronization"}),"\n",(0,t.jsxs)(n.p,{children:["You should also ensure you run ",(0,t.jsx)(n.strong,{children:"time synchronization"})," on the machine hosting the container, to avoid clock drift. In practice, this means configuring a client for the NTP protocol, and making sure it runs as a daemon. ",(0,t.jsx)(n.code,{children:"ntpd"})," is one recommended example. To configure it, you just have to point it to an NTP server to query periodically. A default from your Linux distribution or cloud operator may already be set, and in the interest of decentralization, our recommendation would be to use it unless you have a specific reason to do otherwise."]}),"\n",(0,t.jsx)(s,{type:"info",title:"Time synchronization FAQ",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Leap-smearing"}),': Leap-smearing time servers and non-leap-smearing time servers are both acceptable for the magnitude of our time precision requirements - though considering very few providers offer leap smearing time servers, a "regular" time server helps ensure our pool of time providers is more diverse.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Why not do it in the container itself? Why do we need to do this?"}),":  Without special privileges and in all major container runtimes, a container will not run with the ",(0,t.jsx)(n.code,{children:"CAP_SYS_TIME"})," capability. For Flow, this means that the node software itself cannot change the time of the host machine, making the in-container use of standard time synchronization protocols ineffective."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Why does time matter in Flow?"}),': Time information comes up in consensus and in smart contracts. The consensus algorithm of Flow allows nodes to exit the influence of a corrupt or ineffective "leader" node by collectively deciding to switch to the next "phase" of the protocol at the right time. The smart contract language also allows developer access to block time stamps, which provide an approximation of time. To resist manipulation in each case, honest nodes must compute timing values from an aggregate of the information provided by all nodes. That approach, though resilient, is still sensitive to inaccurate time information. In other words, a node subject to clock drift but otherwise honest will not stop the consensus, but might make it slower.']}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"setup-data-directories--disks",children:"Setup Data Directories & Disks"}),"\n",(0,t.jsx)(n.p,{children:"Flow stores protocol state on disk, as well as execution state in the case of execution nodes."}),"\n",(0,t.jsxs)(n.p,{children:["Where the data is stored is up to you. By default, the ",(0,t.jsx)(n.code,{children:"systemd"})," files that ship with Flow use ",(0,t.jsx)(n.code,{children:"/var/flow/data"}),".\nThis is where the vast majority of Flow's disk usage comes from, so you may wish to mount this directory on a separate disk from the OS.\nThe performance of this disk IO is also a major bottleneck for certain node types.\nWhile all nodes need to make use of this disk, if you are running an execution node, you should make sure this is a high performing SSD."]}),"\n",(0,t.jsx)(n.p,{children:"As a rough benchmark for planning storage capacity, each Flow block will grow the data directory by 3-5KiB."}),"\n",(0,t.jsx)(n.h3,{id:"confidential-data--files",children:"Confidential Data & Files"}),"\n",(0,t.jsxs)(n.p,{children:["Flow stores dynamically generated confidential data in a separate database. We strongly recommend enabling encryption\nfor this database - see ",(0,t.jsx)(n.a,{href:"/docs/next/concepts/nodes/node-operation/db-encryption-existing-operator",children:"this guide"})," for instructions."]}),"\n",(0,t.jsxs)(n.p,{children:["Confidential information used by Flow is stored in the ",(0,t.jsx)(n.code,{children:"private-root-information"})," subtree of the ",(0,t.jsx)(n.code,{children:"bootstrap"})," folder.\nIn particular:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the staking private key (",(0,t.jsx)(n.code,{children:"node-info.priv.json"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["the networking private key (",(0,t.jsx)(n.code,{children:"node-info.priv.json"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["the encryption key for the secrets database (",(0,t.jsx)(n.code,{children:"secretsdb-key"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["(if applicable) the initial random beacon private key (",(0,t.jsx)(n.code,{children:"random-beacon.priv.json"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These files contain confidential data, and must be stored and accessed securely."})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},42016:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/flow-architecture-19e1adb0cc7199ea3d19c468c3b5d8b6.png"}}]);