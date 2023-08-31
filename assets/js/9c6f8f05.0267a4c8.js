"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11948],{38889:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});i(67294);var s=i(85893),n=i(11151);const c={title:"Archive Access API rate limits on Dapper Labs Archive nodes",sidebar_label:"Archive API Rate Limits",sidebar_position:4},l=void 0,r={unversionedId:"building-on-flow/nodes/archive-api-rate-limits",id:"building-on-flow/nodes/archive-api-rate-limits",title:"Archive Access API rate limits on Dapper Labs Archive nodes",description:"Rate limits",source:"@site/docs/building-on-flow/nodes/archive-api-rate-limits.mdx",sourceDirName:"building-on-flow/nodes",slug:"/building-on-flow/nodes/archive-api-rate-limits",permalink:"/docs/next/building-on-flow/nodes/archive-api-rate-limits",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/nodes/archive-api-rate-limits.mdx",tags:[],version:"current",lastUpdatedBy:"Daniel Sainati",lastUpdatedAt:1693500893,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:4,frontMatter:{title:"Archive Access API rate limits on Dapper Labs Archive nodes",sidebar_label:"Archive API Rate Limits",sidebar_position:4},sidebar:"buildingOnFlow",previous:{title:"Archive API",permalink:"/docs/next/building-on-flow/nodes/archive-access-api"},next:{title:"Node Operations",permalink:"/docs/next/building-on-flow/nodes/node-operation/"}},a={},d=[{value:"Rate limits",id:"rate-limits",level:4},{value:"Mainnet",id:"mainnet",level:5},{value:"Testnet",id:"testnet",level:5}];function o(e){const t=Object.assign({h4:"h4",p:"p",a:"a",code:"code",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"rate-limits",children:"Rate limits"}),"\n",(0,s.jsxs)(t.p,{children:["Following are the current rate limits for the ",(0,s.jsx)(t.a,{href:"/docs/next/building-on-flow/nodes/archive-access-api",children:"Archive Node gRPC API"})," in total across all Dapper Labs Archive nodes. The actual limits are enforced by each individual node. If you are using a load balanced endpoint, the limits below are the max rate, and may vary depending on how your requests are routed."]}),"\n",(0,s.jsxs)(t.p,{children:["Once the limit has reached, the client will receive an RPC error ",(0,s.jsx)(t.code,{children:"ResourceExhausted"})," in the gRPC response."]}),"\n",(0,s.jsxs)(t.p,{children:["Please note, these limits only apply to the archive nodes hosted by Dapper Labs. Archive nodes run by other node operators will have different rate limits.\nAlso, all the gRPC endpoints listed below start with ",(0,s.jsx)(t.code,{children:"flow.access.AccessAPI"})," due to the Archive Access API having the same gRPC protobuf definitions as the original Access API from our ",(0,s.jsx)(t.a,{href:"/docs/next/building-on-flow/nodes/node-operation/node-roles#access",children:"Access Nodes"}),". For information on rate limitting of the Access API for Flow's Access Nodes please visit ",(0,s.jsx)(t.a,{href:"/docs/next/building-on-flow/nodes/access-api-rate-limits",children:"this page"}),"."]}),"\n",(0,s.jsx)(t.h5,{id:"mainnet",children:"Mainnet"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{align:"left",children:"gRPC API"}),(0,s.jsx)(t.th,{align:"center",children:"Total request per second per client IP"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtBlockHeight"}),(0,s.jsx)(t.td,{align:"center",children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockID"}),(0,s.jsx)(t.td,{align:"center",children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockHeight"}),(0,s.jsx)(t.td,{align:"center",children:"5"})]})]})]}),"\n",(0,s.jsx)(t.h5,{id:"testnet",children:"Testnet"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{align:"left",children:"gRPC API"}),(0,s.jsx)(t.th,{align:"center",children:"Total request per second per IP"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtLatestBlock"}),(0,s.jsx)(t.td,{align:"center",children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockID"}),(0,s.jsx)(t.td,{align:"center",children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockHeight"}),(0,s.jsx)(t.td,{align:"center",children:"5"})]})]})]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);