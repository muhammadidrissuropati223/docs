"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8270],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},67303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={title:"Control Flow"},i=void 0,l={unversionedId:"cadence/language/control-flow",id:"cadence/language/control-flow",title:"Control Flow",description:"Control flow statements control the flow of execution in a function.",source:"@site/docs/cadence/language/control-flow.md",sourceDirName:"cadence/language",slug:"/cadence/language/control-flow",permalink:"/docs/cadence/language/control-flow",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Control Flow"},sidebar:"tutorialSidebar",previous:{title:"Contracts",permalink:"/docs/cadence/language/contracts"},next:{title:"Core Events",permalink:"/docs/cadence/language/core-events"}},s={},c=[{value:"Conditional branching: if-statement",id:"conditional-branching-if-statement",level:2},{value:"Optional Binding",id:"optional-binding",level:2},{value:"Switch",id:"switch",level:2},{value:"Duplicate cases",id:"duplicate-cases",level:3},{value:"<code>break</code>",id:"break",level:3},{value:"No Implicit Fallthrough",id:"no-implicit-fallthrough",level:3},{value:"Looping",id:"looping",level:2},{value:"while-statement",id:"while-statement",level:3},{value:"For-in statement",id:"for-in-statement",level:3},{value:"<code>continue</code> and <code>break</code>",id:"continue-and-break",level:3},{value:"Immediate function return: return-statement",id:"immediate-function-return-return-statement",level:2}],u={toc:c},d="wrapper";function h(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Control flow statements control the flow of execution in a function."),(0,o.kt)("h2",{id:"conditional-branching-if-statement"},"Conditional branching: if-statement"),(0,o.kt)("p",null,"If-statements allow a certain piece of code to be executed only when a given condition is true."),(0,o.kt)("p",null,"The if-statement starts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," keyword, followed by the condition,\nand the code that should be executed if the condition is true\ninside opening and closing braces.\nThe condition expression must be boolean.\nThe braces are required and not optional.\nParentheses around the condition are optional."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"let a = 0\nvar b = 0\n\nif a == 0 {\n   b = 1\n}\n\n// Parentheses can be used around the condition, but are not required.\nif (a != 0) {\n   b = 2\n}\n\n// `b` is `1`\n")),(0,o.kt)("p",null,"An additional, optional else-clause can be added to execute another piece of code\nwhen the condition is false.\nThe else-clause is introduced by the ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," keyword followed by braces\nthat contain the code that should be executed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"let a = 0\nvar b = 0\n\nif a == 1 {\n   b = 1\n} else {\n   b = 2\n}\n\n// `b` is `2`\n")),(0,o.kt)("p",null,"The else-clause can contain another if-statement, i.e., if-statements can be chained together.\nIn this case the braces can be omitted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"let a = 0\nvar b = 0\n\nif a == 1 {\n   b = 1\n} else if a == 2 {\n   b = 2\n} else {\n   b = 3\n}\n\n// `b` is `3`\n\nif a == 1 {\n   b = 1\n} else {\n    if a == 0 {\n        b = 2\n    }\n}\n\n// `b` is `2`\n")),(0,o.kt)("h2",{id:"optional-binding"},"Optional Binding"),(0,o.kt)("p",null,"Optional binding allows getting the value inside an optional.\nIt is a variant of the if-statement."),(0,o.kt)("p",null,"If the optional contains a value, the first branch is executed\nand a temporary constant or variable is declared and set to the value contained in the optional;\notherwise, the else branch (if any) is executed."),(0,o.kt)("p",null,"Optional bindings are declared using the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," keyword like an if-statement,\nbut instead of the boolean test value, it is followed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," keywords,\nto either introduce a constant or variable, followed by a name,\nthe equal sign (",(0,o.kt)("inlineCode",{parentName:"p"},"="),"), and the optional value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"let maybeNumber: Int? = 1\n\nif let number = maybeNumber {\n    // This branch is executed as `maybeNumber` is not `nil`.\n    // The constant `number` is `1` and has type `Int`.\n} else {\n    // This branch is *not* executed as `maybeNumber` is not `nil`\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"let noNumber: Int? = nil\n\nif let number = noNumber {\n    // This branch is *not* executed as `noNumber` is `nil`.\n} else {\n    // This branch is executed as `noNumber` is `nil`.\n    // The constant `number` is *not* available.\n}\n")),(0,o.kt)("h2",{id:"switch"},"Switch"),(0,o.kt)("p",null,"Switch-statements compare a value against several possible values of the same type, in order.\nWhen an equal value is found, the associated block of code is executed."),(0,o.kt)("p",null,"The switch-statement starts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," keyword, followed by the tested value,\nfollowed by the cases inside opening and closing braces.\nThe test expression must be equatable.\nThe braces are required and not optional."),(0,o.kt)("p",null,"Each case is a separate branch of code execution\nand starts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"case")," keyword,\nfollowed by a possible value, a colon (",(0,o.kt)("inlineCode",{parentName:"p"},":"),"),\nand the block of code that should be executed\nif the case's value is equal to the tested value."),(0,o.kt)("p",null,"The block of code associated with a switch case\n",(0,o.kt)("a",{parentName:"p",href:"#no-implicit-fallthrough"},"does not implicitly fall through"),",\nand must contain at least one statement.\nEmpty blocks are invalid."),(0,o.kt)("p",null,"An optional default case may be given by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," keyword.\nThe block of code of the default case is executed\nwhen none of the previous case tests succeeded.\nIt must always appear last."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'fun word(_ n: Int): String {\n    // Test the value of the parameter `n`\n    switch n {\n    case 1:\n        // If the value of variable `n` is equal to `1`,\n        // then return the string "one"\n        return "one"\n    case 2:\n        // If the value of variable `n` is equal to `2`,\n        // then return the string "two"\n        return "two"\n    default:\n        // If the value of variable `n` is neither equal to `1` nor to `2`,\n        // then return the string "other"\n        return "other"\n    }\n}\n\nword(1)  // returns "one"\nword(2)  // returns "two"\nword(3)  // returns "other"\nword(4)  // returns "other"\n')),(0,o.kt)("h3",{id:"duplicate-cases"},"Duplicate cases"),(0,o.kt)("p",null,"Cases are tested in order, so if a case is duplicated,\nthe block of code associated with the first case that succeeds is executed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'fun test(_ n: Int): String {\n    // Test the value of the parameter `n`\n    switch n {\n    case 1:\n        // If the value of variable `n` is equal to `1`,\n        // then return the string "one"\n        return "one"\n    case 1:\n        // If the value of variable `n` is equal to `1`,\n        // then return the string "also one".\n        // This is a duplicate case for the one above.\n        return "also one"\n    default:\n        // If the value of variable `n` is neither equal to `1` nor to `2`,\n        // then return the string "other"\n        return "other"\n    }\n}\n\nword(1) // returns "one", not "also one"\n')),(0,o.kt)("h3",{id:"break"},(0,o.kt)("inlineCode",{parentName:"h3"},"break")),(0,o.kt)("p",null,"The block of code associated with a switch case may contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"break")," statement.\nIt ends the execution of the switch statement immediately\nand transfers control to the code after the switch statement"),(0,o.kt)("h3",{id:"no-implicit-fallthrough"},"No Implicit Fallthrough"),(0,o.kt)("p",null,'Unlike switch statements in some other languages,\nswitch statements in Cadence do not "fall through":\nexecution of the switch statement finishes as soon as the block of code\nassociated with the first matching case is completed.\nNo explicit ',(0,o.kt)("inlineCode",{parentName:"p"},"break")," statement is required."),(0,o.kt)("p",null,"This makes the switch statement safer and easier to use,\navoiding the accidental execution of more than one switch case."),(0,o.kt)("p",null,"Some other languages implicitly fall through\nto the block of code associated with the next case,\nso it is common to write cases with an empty block\nto handle multiple values in the same way."),(0,o.kt)("p",null,"To prevent developers from writing switch statements\nthat assume this behaviour, blocks must have at least one statement.\nEmpty blocks are invalid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'fun words(_ n: Int): [String] {\n    // Declare a variable named `result`, an array of strings,\n    // which stores the result\n    let result: [String] = []\n\n    // Test the value of the parameter `n`\n    switch n {\n    case 1:\n        // If the value of variable `n` is equal to `1`,\n        // then append the string "one" to the result array\n        result.append("one")\n    case 2:\n        // If the value of variable `n` is equal to `2`,\n        // then append the string "two" to the result array\n        result.append("two")\n    default:\n        // If the value of variable `n` is neither equal to `1` nor to `2`,\n        // then append the string "other" to the result array\n        result.append("other")\n    }\n    return result\n}\n\nwords(1)  // returns `["one"]`\nwords(2)  // returns `["two"]`\nwords(3)  // returns `["other"]`\nwords(4)  // returns `["other"]`\n')),(0,o.kt)("h2",{id:"looping"},"Looping"),(0,o.kt)("h3",{id:"while-statement"},"while-statement"),(0,o.kt)("p",null,"While-statements allow a certain piece of code to be executed repeatedly,\nas long as a condition remains true."),(0,o.kt)("p",null,"The while-statement starts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," keyword, followed by the condition,\nand the code that should be repeatedly\nexecuted if the condition is true inside opening and closing braces.\nThe condition must be boolean and the braces are required."),(0,o.kt)("p",null,"The while-statement will first evaluate the condition.\nIf it is true, the piece of code is executed and the evaluation of the condition is repeated.\nIf the condition is false, the piece of code is not executed\nand the execution of the whole while-statement is finished.\nThus, the piece of code is executed zero or more times."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"var a = 0\nwhile a < 5 {\n    a = a + 1\n}\n\n// `a` is `5`\n")),(0,o.kt)("h3",{id:"for-in-statement"},"For-in statement"),(0,o.kt)("p",null,"For-in statements allow a certain piece of code to be executed repeatedly for\neach element in an array."),(0,o.kt)("p",null,"The for-in statement starts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," keyword, followed by the name of\nthe element that is used in each iteration of the loop,\nfollowed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"in")," keyword, and then followed by the array\nthat is being iterated through in the loop."),(0,o.kt)("p",null,"Then, the code that should be repeatedly executed in each iteration of the loop\nis enclosed in curly braces."),(0,o.kt)("p",null,"If there are no elements in the data structure, the code in the loop will not\nbe executed at all. Otherwise, the code will execute as many times\nas there are elements in the array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'let array = ["Hello", "World", "Foo", "Bar"]\n\nfor element in array {\n    log(element)\n}\n\n// The loop would log:\n// "Hello"\n// "World"\n// "Foo"\n// "Bar"\n')),(0,o.kt)("p",null,"Optionally, developers may include an additional variable preceding the element name,\nseparated by a comma.\nWhen present, this variable contains the current\nindex of the array being iterated through\nduring each repeated execution (starting from 0)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'let array = ["Hello", "World", "Foo", "Bar"]\n\nfor index, element in array {\n    log(index)\n}\n\n// The loop would log:\n// 0\n// 1\n// 2\n// 3\n')),(0,o.kt)("p",null,"To iterate over a dictionary's entries (keys and values),\nuse a for-in loop over the dictionary's keys and get the value for each key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'let dictionary = {"one": 1, "two": 2}\nfor key in dictionary.keys {\n    let value = dictionary[key]!\n    log(key)\n    log(value)\n}\n\n// The loop would log:\n// "one"\n// 1\n// "two"\n// 2\n')),(0,o.kt)("p",null,"Alternatively, dictionaries carry a method ",(0,o.kt)("inlineCode",{parentName:"p"},"forEachKey")," that avoids allocating an intermediate array for keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'let dictionary = {"one": 1, "two": 2, "three": 3}\ndictionary.forEachKey(fun (key: String): Bool {\n    let value = dictionary[key]\n    log(key)\n    log(value)\n    \n    return key != "two" // stop iteration if this returns false\n})\n')),(0,o.kt)("h3",{id:"continue-and-break"},(0,o.kt)("inlineCode",{parentName:"h3"},"continue")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"break")),(0,o.kt)("p",null,"In for-loops and while-loops, the ",(0,o.kt)("inlineCode",{parentName:"p"},"continue")," statement can be used to stop\nthe current iteration of a loop and start the next iteration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"var i = 0\nvar x = 0\nwhile i < 10 {\n    i = i + 1\n    if i < 3 {\n        continue\n    }\n    x = x + 1\n}\n// `x` is `8`\n\n\nlet array = [2, 2, 3]\nvar sum = 0\nfor element in array {\n    if element == 2 {\n        continue\n    }\n    sum = sum + element\n}\n\n// `sum` is `3`\n\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"break")," statement can be used to stop the execution\nof a for-loop or a while-loop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"var x = 0\nwhile x < 10 {\n    x = x + 1\n    if x == 5 {\n        break\n    }\n}\n// `x` is `5`\n\n\nlet array = [1, 2, 3]\nvar sum = 0\nfor element in array {\n    if element == 2 {\n        break\n    }\n    sum = sum + element\n}\n\n// `sum` is `1`\n")),(0,o.kt)("h2",{id:"immediate-function-return-return-statement"},"Immediate function return: return-statement"),(0,o.kt)("p",null,"The return-statement causes a function to return immediately,\ni.e., any code after the return-statement is not executed.\nThe return-statement starts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," keyword\nand is followed by an optional expression that should be the return value of the function call."))}h.isMDXComponent=!0}}]);