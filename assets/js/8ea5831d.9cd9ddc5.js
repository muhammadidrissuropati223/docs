"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=c,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:c,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),c=(n(67294),n(3905));const o={title:"Contracts"},r=void 0,l={unversionedId:"cadence/language/contracts",id:"cadence/language/contracts",title:"Contracts",description:"A contract in Cadence is a collection of type definitions",source:"@site/docs/cadence/language/contracts.mdx",sourceDirName:"cadence/language",slug:"/cadence/language/contracts",permalink:"/docs/cadence/language/contracts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Contracts"},sidebar:"tutorialSidebar",previous:{title:"Contract Updatability",permalink:"/docs/cadence/language/contract-updatability"},next:{title:"Control Flow",permalink:"/docs/cadence/language/control-flow"}},i={},s=[{value:"Account access",id:"account-access",level:2},{value:"Deploying, Updating, and Removing Contracts",id:"deploying-updating-and-removing-contracts",level:2},{value:"Deployed Contracts",id:"deployed-contracts",level:3},{value:"Deploying a New Contract",id:"deploying-a-new-contract",level:3},{value:"Updating a Deployed Contract",id:"updating-a-deployed-contract",level:3},{value:"Getting a Deployed Contract",id:"getting-a-deployed-contract",level:3},{value:"Borrowing a Deployed Contract",id:"borrowing-a-deployed-contract",level:3},{value:"Contract Interfaces",id:"contract-interfaces",level:2}],d=(p="Callout",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)});var p;const u={toc:s},h="wrapper";function m(e){let{components:t,...n}=e;return(0,c.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"A contract in Cadence is a collection of type definitions\nof interfaces, structs, resources, data (its state), and code (its functions)\nthat lives in the contract storage area of an account in Flow."),(0,c.kt)("p",null,"Contracts are where all composite types like structs, resources,\nevents, and interfaces for these types in Cadence have to be defined.\nTherefore, an object of one of these types cannot exist\nwithout having been defined in a deployed Cadence contract."),(0,c.kt)("p",null,"Contracts can be created, updated, and removed using the ",(0,c.kt)("inlineCode",{parentName:"p"},"contracts"),"\nobject of ",(0,c.kt)("a",{parentName:"p",href:"accounts"},"authorized accounts"),".\nThis functionality is covered in the ",(0,c.kt)("a",{parentName:"p",href:"#deploying-updating-and-removing-contracts"},"next section")),(0,c.kt)("p",null,"Contracts are types.\nThey are similar to composite types, but are stored differently than\nstructs or resources and cannot be used as values, copied, or moved\nlike resources or structs."),(0,c.kt)("p",null,"Contracts stay in an account's contract storage area\nand can only be added, updated, or removed by the account owner with special commands."),(0,c.kt)("p",null,"Contracts are declared using the ",(0,c.kt)("inlineCode",{parentName:"p"},"contract")," keyword. The keyword is followed\nby the name of the contract."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract SomeContract {\n    // ...\n}\n")),(0,c.kt)("p",null,"Contracts cannot be nested in each other."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract Invalid {\n\n    // Invalid: Contracts cannot be nested in any other type.\n    //\n    pub contract Nested {\n        // ...\n    }\n}\n")),(0,c.kt)("p",null,"One of the simplest forms of a contract would just be one with a state field,\na function, and an ",(0,c.kt)("inlineCode",{parentName:"p"},"init")," function that initializes the field:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},'pub contract HelloWorld {\n\n    // Declare a stored state field in HelloWorld\n    //\n    pub let greeting: String\n\n    // Declare a function that can be called by anyone\n    // who imports the contract\n    //\n    pub fun hello(): String {\n        return self.greeting\n    }\n\n    init() {\n        self.greeting = "Hello World!"\n    }\n}\n')),(0,c.kt)("p",null,"This contract could be deployed to an account and live permanently\nin the contract storage.  Transactions and other contracts\ncan interact with contracts by importing them at the beginning\nof a transaction or contract definition."),(0,c.kt)("p",null,"Anyone could call the above contract's ",(0,c.kt)("inlineCode",{parentName:"p"},"hello")," function by importing\nthe contract from the account it was deployed to and using the imported\nobject to call the hello function."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},'import HelloWorld from 0x42\n\n// Invalid: The contract does not know where hello comes from\n//\nlog(hello())        // Error\n\n// Valid: Using the imported contract object to call the hello\n// function\n//\nlog(HelloWorld.hello())    // prints "Hello World!"\n\n// Valid: Using the imported contract object to read the greeting\n// field.\nlog(HelloWorld.greeting)   // prints "Hello World!"\n\n// Invalid: Cannot call the init function after the contract has been created.\n//\nHelloWorld.init()    // Error\n')),(0,c.kt)("p",null,"There can be any number of contracts per account\nand they can include an arbitrary amount of data.\nThis means that a contract can have any number of fields, functions, and type definitions,\nbut they have to be in the contract and not another top-level definition."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"// Invalid: Top-level declarations are restricted to only be contracts\n//          or contract interfaces. Therefore, all of these would be invalid\n//          if they were deployed to the account contract storage and\n//          the deployment would be rejected.\n//\npub resource Vault {}\npub struct Hat {}\npub fun helloWorld(): String {}\nlet num: Int\n")),(0,c.kt)("p",null,"Another important feature of contracts is that instances of resources and events\nthat are declared in contracts can only be created/emitted within functions or types\nthat are declared in the same contract."),(0,c.kt)("p",null,"It is not possible create instances of resources and events outside the contract."),(0,c.kt)("p",null,"The contract below defines a resource interface ",(0,c.kt)("inlineCode",{parentName:"p"},"Receiver")," and a resource ",(0,c.kt)("inlineCode",{parentName:"p"},"Vault"),"\nthat implements that interface.  The way this example is written,\nthere is no way to create this resource, so it would not be usable."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},'// Valid\npub contract FungibleToken {\n\n    pub resource interface Receiver {\n\n        pub balance: Int\n\n        pub fun deposit(from: @{Receiver}) {\n            pre {\n                from.balance > 0:\n                    "Deposit balance needs to be positive!"\n            }\n            post {\n                self.balance == before(self.balance) + before(from.balance):\n                    "Incorrect amount removed"\n            }\n        }\n    }\n\n    pub resource Vault: Receiver {\n\n        // keeps track of the total balance of the accounts tokens\n        pub var balance: Int\n\n        init(balance: Int) {\n            self.balance = balance\n        }\n\n        // withdraw subtracts amount from the vaults balance and\n        // returns a vault object with the subtracted balance\n        pub fun withdraw(amount: Int): @Vault {\n            self.balance = self.balance - amount\n            return <-create Vault(balance: amount)\n        }\n\n        // deposit takes a vault object as a parameter and adds\n        // its balance to the balance of the Account\'s vault, then\n        // destroys the sent vault because its balance has been consumed\n        pub fun deposit(from: @{Receiver}) {\n            self.balance = self.balance + from.balance\n            destroy from\n        }\n    }\n}\n')),(0,c.kt)("p",null,"If a user tried to run a transaction that created an instance of the ",(0,c.kt)("inlineCode",{parentName:"p"},"Vault")," type,\nthe type checker would not allow it because only code in the ",(0,c.kt)("inlineCode",{parentName:"p"},"FungibleToken"),"\ncontract can create new ",(0,c.kt)("inlineCode",{parentName:"p"},"Vault"),"s."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"import FungibleToken from 0x42\n\n// Invalid: Cannot create an instance of the `Vault` type outside\n// of the contract that defines `Vault`\n//\nlet newVault <- create FungibleToken.Vault(balance: 10)\n")),(0,c.kt)("p",null,"The contract would have to either define a function that creates new\n",(0,c.kt)("inlineCode",{parentName:"p"},"Vault")," instances or use its ",(0,c.kt)("inlineCode",{parentName:"p"},"init")," function to create an instance and\nstore it in the owner's account storage."),(0,c.kt)("p",null,"This brings up another key feature of contracts in Cadence.  Contracts\ncan interact with its account's ",(0,c.kt)("inlineCode",{parentName:"p"},"storage")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"published")," objects to store\nresources, structs, and references.\nThey do so by using the special ",(0,c.kt)("inlineCode",{parentName:"p"},"self.account")," object that is only accessible within the contract."),(0,c.kt)("p",null,"Imagine that these were declared in the above ",(0,c.kt)("inlineCode",{parentName:"p"},"FungibleToken")," contract."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"\n    pub fun createVault(initialBalance: Int): @Vault {\n        return <-create Vault(balance: initialBalance)\n    }\n\n    init(balance: Int) {\n        let vault <- create Vault(balance: 1000)\n        self.account.save(<-vault, to: /storage/initialVault)\n    }\n")),(0,c.kt)("p",null,"Now, any account could call the ",(0,c.kt)("inlineCode",{parentName:"p"},"createVault")," function declared in the contract\nto create a ",(0,c.kt)("inlineCode",{parentName:"p"},"Vault")," object.\nOr the owner could call the ",(0,c.kt)("inlineCode",{parentName:"p"},"withdraw")," function on their own ",(0,c.kt)("inlineCode",{parentName:"p"},"Vault")," to send new vaults to others."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"import FungibleToken from 0x42\n\n// Valid: Create an instance of the `Vault` type by calling the contract's\n// `createVault` function.\n//\nlet newVault <- create FungibleToken.createVault(initialBalance: 10)\n")),(0,c.kt)("h2",{id:"account-access"},"Account access"),(0,c.kt)("p",null,"Contracts have the implicit field ",(0,c.kt)("inlineCode",{parentName:"p"},"let account: AuthAccount"),",\nwhich is the account in which the contract is deployed too.\nThis gives the contract the ability to e.g. read and write to the account's storage."),(0,c.kt)("h2",{id:"deploying-updating-and-removing-contracts"},"Deploying, Updating, and Removing Contracts"),(0,c.kt)("p",null,"In order for a contract to be used in Cadence, it needs to be deployed to an account.\nThe deployed contracts of an account can be accessed through the ",(0,c.kt)("inlineCode",{parentName:"p"},"contracts")," object."),(0,c.kt)("h3",{id:"deployed-contracts"},"Deployed Contracts"),(0,c.kt)("p",null,'Accounts store "deployed contracts", that is, the code of the contract:'),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct DeployedContract {\n    /// The address of the account where the contract is deployed at.\n    pub let address: Address\n\n    /// The name of the contract.\n    pub let name: String\n\n    /// The code of the contract.\n    pub let code: [UInt8]\n\n    /// Returns an array of `Type` objects representing all the public type declarations in this contract\n    /// (e.g. structs, resources, enums).\n    ///\n    /// For example, given a contract\n    /// ```\n    /// contract Foo {\n    ///       pub struct Bar {...}\n    ///       pub resource Qux {...}\n    /// }\n    /// ```\n    /// then `.publicTypes()` will return an array equivalent to the expression `[Type<Bar>(), Type<Qux>()]`\n    pub fun publicTypes(): [Type]\n}\n")),(0,c.kt)("p",null,"Note that this is not the contract instance that can be acquired by importing it."),(0,c.kt)("h3",{id:"deploying-a-new-contract"},"Deploying a New Contract"),(0,c.kt)("p",null,"A new contract can be deployed to an account using the ",(0,c.kt)("inlineCode",{parentName:"p"},"add")," function:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"fun add(\n    name: String,\n    code: [UInt8],\n    ... contractInitializerArguments\n): DeployedContract\n")),(0,c.kt)("p",null,"  Adds the given contract to the account."),(0,c.kt)("p",null,"  The ",(0,c.kt)("inlineCode",{parentName:"p"},"code")," parameter is the UTF-8 encoded representation of the source code.\nThe code must contain exactly one contract or contract interface,\nwhich must have the same name as the ",(0,c.kt)("inlineCode",{parentName:"p"},"name")," parameter."),(0,c.kt)("p",null,"  All additional arguments that are given are passed further to the initializer\nof the contract that is being deployed."),(0,c.kt)("p",null,"  Fails if a contract/contract interface with the given name already exists in the account,\nif the given code does not declare exactly one contract or contract interface,\nor if the given name does not match the name of the contract/contract interface declaration in the code."),(0,c.kt)("p",null,"  Returns the ",(0,c.kt)("a",{parentName:"p",href:"#deployed-contracts"},"deployed contract"),"."),(0,c.kt)("p",null,"For example, assuming the following contract code should be deployed:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract Test {\n    pub let message: String\n\n    init(message: String) {\n        self.message = message\n    }\n}\n")),(0,c.kt)("p",null,"The contract can be deployed as follows:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},'// Decode the hex-encoded source code into a byte array\n// using the built-in function `decodeHex`.\n//\n// (The ellipsis ... indicates the remainder of the string)\n//\nlet code = "70756220636f6e...".decodeHex()\n\n// `code` has type `[UInt8]`\n\nlet signer: AuthAccount = ...\nsigner.contracts.add(\n    name: "Test",\n    code: code,\n    message: "I\'m a new contract in an existing account"\n)\n')),(0,c.kt)("h3",{id:"updating-a-deployed-contract"},"Updating a Deployed Contract"),(0,c.kt)(d,{type:"info",mdxType:"Callout"},(0,c.kt)("p",null,"\ud83d\udea7 Status: Updating contracts is ",(0,c.kt)("strong",{parentName:"p"},"experimental"),"."),(0,c.kt)("p",null,"Updating contracts is currently limited to maintain data consistency.\n",(0,c.kt)("a",{parentName:"p",href:"contract-updatability"},"Certain restrictions are imposed"),".")),(0,c.kt)("p",null,"A deployed contract can be updated using the ",(0,c.kt)("inlineCode",{parentName:"p"},"update__experimental")," function:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"fun update__experimental(name: String, code: [UInt8]): DeployedContract\n")),(0,c.kt)("p",null,"  Updates the code for the contract/contract interface in the account."),(0,c.kt)("p",null,"  The ",(0,c.kt)("inlineCode",{parentName:"p"},"code")," parameter is the UTF-8 encoded representation of the source code.\nThe code must contain exactly one contract or contract interface,\nwhich must have the same name as the ",(0,c.kt)("inlineCode",{parentName:"p"},"name")," parameter."),(0,c.kt)("p",null,"  Does ",(0,c.kt)("strong",{parentName:"p"},"not")," run the initializer of the contract/contract interface again.\nThe contract instance in the world state stays as is."),(0,c.kt)("p",null,"  Fails if no contract/contract interface with the given name exists in the account,\nif the given code does not declare exactly one contract or contract interface,\nor if the given name does not match the name of the contract/contract interface declaration in the code."),(0,c.kt)("p",null,"  Returns the ",(0,c.kt)("a",{parentName:"p",href:"#deployed-contracts"},"deployed contract")," for the updated contract."),(0,c.kt)("p",null,"For example, assuming that a contract named ",(0,c.kt)("inlineCode",{parentName:"p"},"Test")," is already deployed to the account\nand it should be updated with the following contract code:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract Test {\n    pub let message: String\n\n    init(message: String) {\n        self.message = message\n    }\n}\n")),(0,c.kt)("p",null,"The contract can be updated as follows:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},'// Decode the hex-encoded source code into a byte array\n// using the built-in function `decodeHex`.\n//\n// (The ellipsis ... indicates the remainder of the string)\n//\nlet code = "70756220636f6e...".decodeHex()\n\n// `code` has type `[UInt8]`\n\nlet signer: AuthAccount = ...\nsigner.contracts.update__experimental(name: "Test", code: code)\n')),(0,c.kt)("p",null,"Updating a contract does ",(0,c.kt)("strong",{parentName:"p"},"not")," currently change any existing stored data.\nOnly the code of the contract is updated."),(0,c.kt)("h3",{id:"getting-a-deployed-contract"},"Getting a Deployed Contract"),(0,c.kt)("p",null,"A deployed contract can be gotten from an account using the ",(0,c.kt)("inlineCode",{parentName:"p"},"get")," function:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"fun get(name: String): DeployedContract?\n")),(0,c.kt)("p",null,"  Returns the ",(0,c.kt)("a",{parentName:"p",href:"#deployed-contracts"},"deployed contract")," for the contract/contract interface with the given name in the account, if any."),(0,c.kt)("p",null,"  Returns ",(0,c.kt)("inlineCode",{parentName:"p"},"nil")," if no contract/contract interface with the given name exists in the account."),(0,c.kt)("p",null,"For example, assuming that a contract named ",(0,c.kt)("inlineCode",{parentName:"p"},"Test")," is deployed to an account, the contract can be retrieved as follows:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},'let signer: AuthAccount = ...\nlet contract = signer.contracts.get(name: "Test")\n')),(0,c.kt)("h3",{id:"borrowing-a-deployed-contract"},"Borrowing a Deployed Contract"),(0,c.kt)("p",null,"In contrast to a static contract import ",(0,c.kt)("inlineCode",{parentName:"p"},"import T from 0x1"),',\nwhich will always perform an import of a type,\ncontracts can be "borrowed" to effectively perform a dynamic import dependent on a specific execution path. '),(0,c.kt)("p",null,"A reference to a deployed contract contract can obtained using the ",(0,c.kt)("inlineCode",{parentName:"p"},"borrow")," function:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"fun borrow<T: &Any>(name: String): T?\n")),(0,c.kt)("p",null,"  This returns a reference to the contract value stored with that name on the account,\nif it exists, and if it has the provided type ",(0,c.kt)("inlineCode",{parentName:"p"},"T"),". "),(0,c.kt)("p",null,"  Returns ",(0,c.kt)("inlineCode",{parentName:"p"},"nil")," if no contract/contract interface with the given name exists in the account."),(0,c.kt)("p",null,"For example, assuming that a contract named ",(0,c.kt)("inlineCode",{parentName:"p"},"Test")," which conforms to the ",(0,c.kt)("inlineCode",{parentName:"p"},"TestInterface")," interface is deployed to an account, the contract can be retrieved as follows:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},'let signer: AuthAccount = ...\nlet contract: &TestInterface = signer.contracts.borrow<&TestInterface>(name: "Test")\n\n### Removing a Deployed Contract\n\nA deployed contract can be removed from an account using the `remove` function:\n\n```cadence\nfun remove(name: String): DeployedContract?\n')),(0,c.kt)("p",null," Removes the contract/contract interface from the account which has the given name, if any."),(0,c.kt)("p",null," Returns the removed ",(0,c.kt)("a",{parentName:"p",href:"#deployed-contracts"},"deployed contract"),", if any."),(0,c.kt)("p",null," Returns ",(0,c.kt)("inlineCode",{parentName:"p"},"nil")," if no contract/contract interface with the given name exist in the account."),(0,c.kt)("p",null,"For example, assuming that a contract named ",(0,c.kt)("inlineCode",{parentName:"p"},"Test")," is deployed to an account, the contract can be removed as follows:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},'let signer: AuthAccount = ...\nlet contract = signer.contracts.remove(name: "Test")\n')),(0,c.kt)("h2",{id:"contract-interfaces"},"Contract Interfaces"),(0,c.kt)("p",null,"Like composite types, contracts can have interfaces that specify rules\nabout their behavior, their types, and the behavior of their types."),(0,c.kt)("p",null,"Contract interfaces have to be declared globally.  Declarations\ncannot be nested in other types."),(0,c.kt)("p",null,"If a contract interface declares a concrete type, implementations of it\nmust also declare the same concrete type conforming to the type requirement."),(0,c.kt)("p",null,"If a contract interface declares an interface type, the implementing contract\ndoes not have to also define that interface.  They can refer to that nested\ninterface by saying ",(0,c.kt)("inlineCode",{parentName:"p"},"{ContractInterfaceName}.{NestedInterfaceName}")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a contract interface that declares an interface and a resource\n// that needs to implement that interface in the contract implementation.\n//\npub contract interface InterfaceExample {\n\n    // Implementations do not need to declare this\n    // They refer to it as InterfaceExample.NestedInterface\n    //\n    pub resource interface NestedInterface {}\n\n    // Implementations must declare this type\n    //\n    pub resource Composite: NestedInterface {}\n}\n\npub contract ExampleContract: InterfaceExample {\n\n    // The contract doesn't need to redeclare the `NestedInterface` interface\n    // because it is already declared in the contract interface\n\n    // The resource has to refer to the resource interface using the name\n    // of the contract interface to access it\n    //\n    pub resource Composite: InterfaceExample.NestedInterface {\n    }\n}\n")))}m.isMDXComponent=!0}}]);