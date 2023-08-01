(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[16763],{56487:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Be});var a=n(67294),l=n(1944),o=n(902);const r=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new o.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(86010),m=n(87524),u=n(87462),p=n(95999),h=n(39960);function g(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return a.createElement(h.Z,{className:(0,d.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function b(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(g,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(g,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function f(){const{metadata:e}=c();return a.createElement(b,{previous:e.previous,next:e.next})}var v=n(52263),E=n(94104),y=n(35281),k=n(60373),N=n(74477);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function C(e){const t=L[e.versionMetadata.banner];return a.createElement(t,e)}function _(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(h.Z,{to:n,onClick:l},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Z(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,v.Z)(),{pluginId:o}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,k.J)(o),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,E.Jo)(o),i=s??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(C,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(_,{versionLabel:c.label,to:i.path,onClick:()=>r(c.name)})))}function B(e){let{className:t}=e;const n=(0,N.E)();return n.banner?a.createElement(Z,{className:t,versionMetadata:n}):null}function T(e){let{className:t}=e;const n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function x(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:y.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(x,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const H={iconEdit:"iconEdit_Z9Sw"};function I(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(H.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function S(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:y.k.common.editThisPage},a.createElement(I,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var M=n(13008);const j={tags:"tags_jXut",tag:"tag_QGVx"};function O(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.Z)(j.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:j.tag},a.createElement(M.Z,{label:t,permalink:n}))}))))}const U={lastUpdated:"lastUpdated_vwxv"};function P(e){return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(O,e)))}function V(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(S,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",U.lastUpdated)},(n||l)&&a.createElement(A,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function D(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,s=r.length>0,i=!!(t||n||o);return s||i?a.createElement("footer",{className:(0,d.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(P,{tags:r}),i&&a.createElement(V,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var W=n(86043),R=n(86668);function z(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function $(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=$({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function F(e){const t=e.getBoundingClientRect();return t.top===t.bottom?F(e.parentNode):t}function q(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>F(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(F(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function G(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,R.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){const t=(0,a.useRef)(void 0),n=G();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=q(s,{anchorTopOffset:n.current}),i=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===i)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function J(e){let{toc:t,className:n,linkClassName:l,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(J,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const Q=a.memo(J);function X(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:s,...c}=e;const i=(0,R.L)(),d=r??i.tableOfContents.minHeadingLevel,m=s??i.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>$({toc:z(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:m});return Y((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:m}}),[l,o,d,m])),a.createElement(Q,(0,u.Z)({toc:p,className:n,linkClassName:l},c))}const K={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function ee(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",K.tocCollapsibleButton,!t&&K.tocCollapsibleButtonExpanded,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const te={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function ne(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:s}=(0,W.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(te.tocCollapsible,!r&&te.tocCollapsibleExpanded,n)},a.createElement(ee,{collapsed:r,onClick:s}),a.createElement(W.z,{lazy:!0,className:te.tocCollapsibleContent,collapsed:r},a.createElement(X,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const ae={tocMobile:"tocMobile_ITEo"};function le(){const{toc:e,frontMatter:t}=c();return a.createElement(ne,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(y.k.docs.docTocMobile,ae.tocMobile)})}const oe={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},re="table-of-contents__link toc-highlight",se="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,d.Z)(oe.tableOfContents,"thin-scrollbar",t)},a.createElement(X,(0,u.Z)({},n,{linkClassName:re,linkActiveClassName:se})))}function ie(){const{toc:e,frontMatter:t}=c();return a.createElement(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}var de=n(92503),me=n(11151),ue=n(31769);function pe(e){let{children:t}=e;return a.createElement(me.Zo,{components:ue.Z},t)}function he(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(y.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(de.Z,{as:"h1"},n)),a.createElement(pe,null,t))}var ge=n(52802),be=n(48596),fe=n(44996);function ve(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Ee={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ye(){const e=(0,fe.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(h.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ve,{className:Ee.breadcrumbHomeIcon})))}const ke={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Ne(e){let{children:t,href:n,isLast:l}=e;const o="breadcrumbs__link";return l?a.createElement("span",{className:o,itemProp:"name"},t):n?a.createElement(h.Z,{className:o,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:o},t)}function Le(e){let{children:t,active:n,index:l,addMicrodata:o}=e;return a.createElement("li",(0,u.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function Ce(){const e=(0,ge.s1)(),t=(0,be.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(y.k.docs.docBreadcrumbs,ke.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ye,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(Le,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(Ne,{href:t.href,isLast:l},t.label))})))):null}const _e={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Ze(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?a.createElement(le,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(ie,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&_e.docItemCol)},a.createElement(B,null),a.createElement("div",{className:_e.docItemContainer},a.createElement("article",null,a.createElement(Ce,null),a.createElement(T,null),n.mobile,a.createElement(he,null,t),a.createElement(D,null)),a.createElement(f,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function Be(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(Ze,null,a.createElement(n,null))))}},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(87462),l=n(67294),o=n(86010),r=n(95999),s=n(86668),c=n(39960);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,s.L)();if("h1"===t||!n)return l.createElement(t,(0,a.Z)({},d,{id:void 0}));const u=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return l.createElement(t,(0,a.Z)({},d,{className:(0,o.Z)("anchor",m?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,d.className),id:n}),d.children,l.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},54547:(e,t,n)=>{"use strict";n.d(t,{Z:()=>re});var a=n(87462),l=n(67294),o=n(35742);var r=n(72389),s=n(86010),c=n(92949),i=n(86668);function d(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var m=n(35281),u=n(87594),p=n.n(u);const h=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function f(e,t){const n=e.map((e=>{const{start:n,end:a}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:l,metastring:o}=t;if(o&&g.test(o)){const e=o.match(g).groups.range;if(0===l.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=l[0].className,a=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"],t);case"jsx":case"tsx":return f(["js","jsBlock","jsx"],t);case"html":return f(["js","jsBlock","html"],t);case"python":case"py":case"bash":return f(["bash"],t);case"markdown":case"md":return f(["html","jsx","bash"],t);default:return f(Object.keys(b),t)}}(a,l),s=n.split("\n"),c=Object.fromEntries(l.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(l.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<s.length;){const e=s[p].match(r);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?c[i[t]].range+=`${p},`:d[t]?c[d[t]].start=p:m[t]&&(c[m[t]].range+=`${c[m[t]].start}-${p-1},`),s.splice(p,1)}n=s.join("\n");const u={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{u[e]??=[],u[e].push(t)}))})),{lineClassNames:u,code:n}}const E={codeBlockContainer:"codeBlockContainer_Ckt0"};function y(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,l]=e;const o=t[a];o&&"string"==typeof l&&(n[o]=l)})),n}(d());return l.createElement(t,(0,a.Z)({},n,{style:o,className:(0,s.Z)(n.className,E.codeBlockContainer,m.k.common.codeBlock)}))}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){let{children:t,className:n}=e;return l.createElement(y,{as:"pre",tabIndex:0,className:(0,s.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},l.createElement("code",{className:k.codeBlockLines},t))}var L=n(902);const C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,a]=(0,l.useState)(),o=(0,l.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,l.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=C);const a=(0,L.zX)(t),o=(0,L.Ql)(n);(0,l.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const Z={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var B={Prism:n(87410).Z,theme:Z};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}var x=/\r\n|\r|\n/,A=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},H=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},I=function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=w({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=w({},n,{backgroundColor:null}),l};function S(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const M=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?I(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,o=w({},S(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(o.style=r.plain),void 0!==l&&(o.style=void 0!==o.style?w({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),T(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return o[n[0]];var r=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[r].concat(s))}})),T(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,o=e.token,r=w({},S(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==l&&(r.style=void 0!==r.style?w({},r.style,l):l),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),T(this,"tokenize",(function(e,t,n,a){var l={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var o=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,o=this.getThemeDict(this.props),r=t.languages[n];return l({tokens:function(e){for(var t=[[]],n=[e],a=[0],l=[e.length],o=0,r=0,s=[],c=[s];r>-1;){for(;(o=a[r]++)<l[r];){var i=void 0,d=t[r],m=n[r][o];if("string"==typeof m?(d=r>0?d:["plain"],i=m):(d=H(d,m.type),m.alias&&(d=H(d,m.alias)),i=m.content),"string"==typeof i){var u=i.split(x),p=u.length;s.push({types:d,content:u[0]});for(var h=1;h<p;h++)A(s),c.push(s=[]),s.push({types:d,content:u[h]})}else r++,t.push(d),n.push(i),a.push(0),l.push(i.length)}r--,t.pop(),n.pop(),a.pop(),l.pop()}return A(s),c}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),j={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function O(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:r,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=r({line:t,className:(0,s.Z)(n,o&&j.codeLine)}),d=t.map(((e,t)=>l.createElement("span",(0,a.Z)({key:t},c({token:e,key:t})))));return l.createElement("span",i,o?l.createElement(l.Fragment,null,l.createElement("span",{className:j.codeLineNumber}),l.createElement("span",{className:j.codeLineContent},d)):d,l.createElement("br",null))}var U=n(95999);const P={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function V(e){let{code:t,className:n}=e;const[a,o]=(0,l.useState)(!1),r=(0,l.useRef)(void 0),c=(0,l.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),l&&l.focus()}(t),o(!0),r.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,l.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),l.createElement("button",{type:"button","aria-label":a?(0,U.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,U.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,U.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,P.copyButton,a&&P.copyButtonCopied),onClick:c},l.createElement("span",{className:P.copyButtonIcons,"aria-hidden":"true"},l.createElement("svg",{className:P.copyButtonIcon,viewBox:"0 0 24 24"},l.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),l.createElement("svg",{className:P.copyButtonSuccessIcon,viewBox:"0 0 24 24"},l.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const D={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function W(e){let{className:t,onClick:n,isEnabled:a}=e;const o=(0,U.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return l.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,a&&D.wordWrapButtonEnabled),"aria-label":o,title:o},l.createElement("svg",{className:D.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},l.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function R(e){let{children:t,className:n="",metastring:o,title:r,showLineNumbers:c,language:m}=e;const{prism:{defaultLanguage:u,magicComments:p}}=(0,i.L)(),g=m??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u,b=d(),f=function(){const[e,t]=(0,l.useState)(!1),[n,a]=(0,l.useState)(!1),o=(0,l.useRef)(null),r=(0,l.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),s=(0,l.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return _(o,s),(0,l.useEffect)((()=>{s()}),[e,s]),(0,l.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:r}}(),E=function(e){return e?.match(h)?.groups.title??""}(o)||r,{lineClassNames:N,code:L}=v(t,{metastring:o,language:g,magicComments:p}),C=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return l.createElement(y,{as:"div",className:(0,s.Z)(n,g&&!n.includes(`language-${g}`)&&`language-${g}`)},E&&l.createElement("div",{className:k.codeBlockTitle},E),l.createElement("div",{className:k.codeBlockContent},l.createElement(M,(0,a.Z)({},B,{theme:b,code:L,language:g??"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:o}=e;return l.createElement("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,s.Z)(t,k.codeBlock,"thin-scrollbar")},l.createElement("code",{className:(0,s.Z)(k.codeBlockLines,C&&k.codeBlockLinesWithNumbering)},n.map(((e,t)=>l.createElement(O,{key:t,line:e,getLineProps:a,getTokenProps:o,classNames:N[t],showLineNumbers:C})))))})),l.createElement("div",{className:k.buttonGroup},(f.isEnabled||f.isCodeScrollable)&&l.createElement(W,{className:k.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),l.createElement(V,{className:k.codeButton,code:L}))))}function z(e){let{children:t,...n}=e;const o=(0,r.Z)(),s=function(e){return l.Children.toArray(e).some((e=>(0,l.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof s?R:N;return l.createElement(c,(0,a.Z)({key:String(o)},n),s)}var $=n(39960);var F=n(86043);const q={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function G(e){return!!e&&("SUMMARY"===e.tagName||G(e.parentElement))}function Y(e,t){return!!e&&(e===t||Y(e.parentElement,t))}function J(e){let{summary:t,children:n,...o}=e;const c=(0,r.Z)(),i=(0,l.useRef)(null),{collapsed:d,setCollapsed:m}=(0,F.u)({initialState:!o.open}),[u,p]=(0,l.useState)(o.open),h=l.isValidElement(t)?t:l.createElement("summary",null,t??"Details");return l.createElement("details",(0,a.Z)({},o,{ref:i,open:u,"data-collapsed":d,className:(0,s.Z)(q.details,c&&q.isBrowser,o.className),onMouseDown:e=>{G(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;G(t)&&Y(t,i.current)&&(e.preventDefault(),d?(m(!1),p(!0)):m(!0))}}),h,l.createElement(F.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),p(!e)}},l.createElement("div",{className:q.collapsibleContent},n)))}const Q={details:"details_b_Ee"},X="alert alert--info";function K(e){let{...t}=e;return l.createElement(J,(0,a.Z)({},t,{className:(0,s.Z)(X,Q.details,t.className)}))}var ee=n(92503);function te(e){return l.createElement(ee.Z,e)}const ne={containsTaskList:"containsTaskList_mC6p"};const ae={img:"img_ev3q"};var le=n(47083),oe=n(11875);const re={head:function(e){const t=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return l.createElement(e.props.originalType,a)}return e}(e):e));return l.createElement(o.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&t.includes(e.props?.mdxType)))?l.createElement("code",e):l.createElement(z,e)},a:function(e){return l.createElement($.Z,e)},pre:function(e){return l.createElement(z,(0,l.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=l.Children.toArray(e.children),n=t.find((e=>l.isValidElement(e)&&"summary"===e.props?.mdxType)),o=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return l.createElement(K,(0,a.Z)({},e,{summary:n}),o)},ul:function(e){return l.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,s.Z)(t,t?.includes("contains-task-list")&&ne.containsTaskList))}));var t},img:function(e){return l.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,ae.img))}));var t},h1:e=>l.createElement(te,(0,a.Z)({as:"h1"},e)),h2:e=>l.createElement(te,(0,a.Z)({as:"h2"},e)),h3:e=>l.createElement(te,(0,a.Z)({as:"h3"},e)),h4:e=>l.createElement(te,(0,a.Z)({as:"h4"},e)),h5:e=>l.createElement(te,(0,a.Z)({as:"h5"},e)),h6:e=>l.createElement(te,(0,a.Z)({as:"h6"},e)),admonition:le.Z,mermaid:oe.Z}},13008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(67294),l=n(86010),o=n(39960);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:n,count:s}=e;return a.createElement(o.Z,{href:t,className:(0,l.Z)(r.tag,s?r.tagWithCount:r.tagRegular)},n,s&&a.createElement("span",null,s))}},74477:(e,t,n)=>{"use strict";n.d(t,{E:()=>s,q:()=>r});var a=n(67294),l=n(902);const o=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocsVersionProvider");return e}},87594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,l,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);