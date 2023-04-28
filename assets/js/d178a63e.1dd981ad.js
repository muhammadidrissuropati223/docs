"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6353],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?t.createElement(m,l(l({ref:a},d),{},{components:n})):t.createElement(m,l({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},19624:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const i={title:"Constants and Variable Declarations"},l=void 0,s={unversionedId:"cadence/language/constants-and-variables",id:"cadence/language/constants-and-variables",title:"Constants and Variable Declarations",description:"Constants and variables are declarations that bind",source:"@site/docs/cadence/language/constants-and-variables.md",sourceDirName:"cadence/language",slug:"/cadence/language/constants-and-variables",permalink:"/docs/cadence/language/constants-and-variables",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Constants and Variable Declarations"},sidebar:"tutorialSidebar",previous:{title:"Composite Types",permalink:"/docs/cadence/language/composite-types"},next:{title:"Contract Updatability",permalink:"/docs/cadence/language/contract-updatability"}},o={},c=[],d={toc:c},p="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Constants and variables are declarations that bind\na value and ",(0,r.kt)("a",{parentName:"p",href:"type-safety"},"type")," to an identifier.\nConstants are initialized with a value and cannot be reassigned afterwards.\nVariables are initialized with a value and can be reassigned later.\nDeclarations can be created in any scope, including the global scope."),(0,r.kt)("p",null,"Constant means that the ",(0,r.kt)("em",{parentName:"p"},"identifier's")," association is constant,\nnot the ",(0,r.kt)("em",{parentName:"p"},"value")," itself \u2013\nthe value may still be changed if it is mutable."),(0,r.kt)("p",null,"Constants are declared using the ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," keyword. Variables are declared\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," keyword.\nThe keywords are followed by the identifier,\nan optional ",(0,r.kt)("a",{parentName:"p",href:"type-annotations"},"type annotation"),", an equals sign ",(0,r.kt)("inlineCode",{parentName:"p"},"="),",\nand the initial value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a constant named `a`.\n//\nlet a = 1\n\n// Invalid: re-assigning to a constant.\n//\na = 2\n\n// Declare a variable named `b`.\n//\nvar b = 3\n\n// Assign a new value to the variable named `b`.\n//\nb = 4\n")),(0,r.kt)("p",null,"Variables and constants ",(0,r.kt)("strong",{parentName:"p"},"must")," be initialized."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Invalid: the constant has no initial value.\n//\nlet a\n")),(0,r.kt)("p",null,"The names of the variable or constant\ndeclarations in each scope must be unique.\nDeclaring another variable or constant with a name that is already\ndeclared in the current scope is invalid, regardless of kind or type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a constant named `a`.\n//\nlet a = 1\n\n// Invalid: cannot re-declare a constant with name `a`,\n// as it is already used in this scope.\n//\nlet a = 2\n\n// Declare a variable named `b`.\n//\nvar b = 3\n\n// Invalid: cannot re-declare a variable with name `b`,\n// as it is already used in this scope.\n//\nvar b = 4\n\n// Invalid: cannot declare a variable with the name `a`,\n// as it is already used in this scope,\n// and it is declared as a constant.\n//\nvar a = 5\n")),(0,r.kt)("p",null,"However, variables can be redeclared in sub-scopes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a constant named `a`.\n//\nlet a = 1\n\nif true {\n    // Declare a constant with the same name `a`.\n    // This is valid because it is in a sub-scope.\n    // This variable is not visible to the outer scope.\n\n    let a = 2\n}\n\n// `a` is `1`\n")),(0,r.kt)("p",null,"A variable cannot be used as its own initial value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Invalid: Use of variable in its own initial value.\nlet a = a\n")))}u.isMDXComponent=!0}}]);