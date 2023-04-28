"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||c;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<c;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const c={title:"Cadence Testing Framework"},i=void 0,s={unversionedId:"cadence/testing-framework",id:"cadence/testing-framework",title:"Cadence Testing Framework",description:"The Cadence testing framework provides a convenient way to write tests for Cadence programs in Cadence.",source:"@site/docs/cadence/testing-framework.mdx",sourceDirName:"cadence",slug:"/cadence/testing-framework",permalink:"/docs/cadence/testing-framework",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1682708799,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Cadence Testing Framework"},sidebar:"tutorialSidebar",previous:{title:"Syntax Highlighting Cadence",permalink:"/docs/cadence/syntax-highlighting"},next:{title:"1. First Steps",permalink:"/docs/cadence/tutorial/01-first-steps"}},o={},l=[{value:"Test Standard Library",id:"test-standard-library",level:2},{value:"Assertion",id:"assertion",level:2},{value:"assert",id:"assert",level:3},{value:"fail",id:"fail",level:3},{value:"expect",id:"expect",level:3},{value:"Matchers",id:"matchers",level:2},{value:"Built-in matcher functions",id:"built-in-matcher-functions",level:3},{value:"Blockchain",id:"blockchain",level:2},{value:"Creating a blockchain",id:"creating-a-blockchain",level:3},{value:"Creating accounts",id:"creating-accounts",level:3},{value:"Executing scripts",id:"executing-scripts",level:3},{value:"Executing transactions",id:"executing-transactions",level:3},{value:"Commit block",id:"commit-block",level:3},{value:"Deploying contracts",id:"deploying-contracts",level:3},{value:"Configuring import addresses",id:"configuring-import-addresses",level:3},{value:"Errors",id:"errors",level:3},{value:"Reading from files",id:"reading-from-files",level:2}],u=(p="Callout",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const d={toc:l},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Cadence testing framework provides a convenient way to write tests for Cadence programs in Cadence.\nThis functionality is provided by the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," contract."),(0,r.kt)(u,{type:"info",mdxType:"Callout"},"The testing framework can only be used off-chain, e.g. by using the [Flow CLI](https://developers.flow.com/tools/flow-cli)."),(0,r.kt)("p",null,"Tests must be written in the form of a Cadence script.\nA test script may contain testing functions that starts with the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," prefix,\na ",(0,r.kt)("inlineCode",{parentName:"p"},"setup")," function that will always run before the tests,\nand a ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," function that will always run at the end of all test cases.\nBoth ",(0,r.kt)("inlineCode",{parentName:"p"},"setup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown")," functions are optional."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// A `setup` function that will always run before the rest of the methods.\n// Can be used to initialize things that would be used across the test cases.\n// e.g: initialling a blockchain backend, initializing a contract, etc.  \npub fun setup() {\n}\n\n// Test functions start with the 'test' prefix.\npub fun testSomething() {\n}\n\npub fun testAnotherThing() {\n}\n\npub fun testMoreThings() {\n}\n\n// A `tearDown` function that will always run at the end of all test cases.\n// e.g: Can be used to stop the blockchain back-end used for tests, etc. or any cleanup.\npub fun tearDown() {\n}\n")),(0,r.kt)("h2",{id:"test-standard-library"},"Test Standard Library"),(0,r.kt)("p",null,"The testing framework can be used by importing the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"import Test\n")),(0,r.kt)("h2",{id:"assertion"},"Assertion"),(0,r.kt)("h3",{id:"assert"},"assert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"fun assert(_ condition: Bool, message: String)\n")),(0,r.kt)("p",null,"Fails a test-case if the given condition is false, and reports a message which explains how the condition is false."),(0,r.kt)("p",null,"The message argument is optional."),(0,r.kt)("h3",{id:"fail"},"fail"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"fun fail(message: String)\n")),(0,r.kt)("p",null,"Immediately fails a test-case, with a message explaining the reason to fail the test."),(0,r.kt)("p",null,"The message argument is optional."),(0,r.kt)("h3",{id:"expect"},"expect"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," function tests a value against a matcher (see ",(0,r.kt)("a",{parentName:"p",href:"#matchers"},"matchers")," section), and fails the test if it's not a match."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"fun expect(_ value: AnyStruct, _ matcher: Matcher)\n")),(0,r.kt)("h2",{id:"matchers"},"Matchers"),(0,r.kt)("p",null,"A matcher is an object that consists of a test function and associated utility functionality."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Matcher {\n\n    pub let test: ((AnyStruct): Bool)\n\n    pub init(test: ((AnyStruct): Bool)) {\n        self.test = test\n    }\n\n    /// Combine this matcher with the given matcher.\n    /// Returns a new matcher that succeeds if this and the given matcher succeed.\n    ///\n    pub fun and(_ other: Matcher): Matcher {\n        return Matcher(test: fun (value: AnyStruct): Bool {\n            return self.test(value) && other.test(value)\n        })\n    }\n\n    /// Combine this matcher with the given matcher.\n    /// Returns a new matcher that succeeds if this or the given matcher succeeds.\n    ///\n    pub fun or(_ other: Matcher): Matcher {\n        return Matcher(test: fun (value: AnyStruct): Bool {\n            return self.test(value) || other.test(value)\n        })\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," function defines the evaluation criteria for a value, and returns a boolean indicating whether the value\nconforms to the test criteria defined in the function."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," functions can be used to combine this matcher with another matcher to produce a new matcher with\nmultiple testing criteria.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," method returns a new matcher that succeeds if both this and the given matcher are succeeded.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," method returns a new matcher that succeeds if at-least this or the given matcher is succeeded."),(0,r.kt)("p",null,"A matcher that accepts a generic-typed test function can be constructed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"newMatcher")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"fun newMatcher<T: AnyStruct>(_ test: ((T): Bool)): Test.Matcher\n")),(0,r.kt)("p",null,"The type parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is bound to ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyStruct")," type. It is also optional."),(0,r.kt)("p",null,"For example, a matcher that checks whether a given integer value is negative can be defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let isNegative = Test.newMatcher(fun (_ value: Int): Bool {\n    return value < 0\n})\n\n// Use `expect` function to test a value against the matcher.\nTest.expect(-15, isNegative)\n")),(0,r.kt)("h3",{id:"built-in-matcher-functions"},"Built-in matcher functions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," contract provides some built-in matcher functions for convenience."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fun equal(_ value: AnyStruct): Matcher")),(0,r.kt)("p",{parentName:"li"},"Returns a matcher that succeeds if the tested value is equal to the given value.\nAccepts an ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyStruct")," value."))),(0,r.kt)("h2",{id:"blockchain"},"Blockchain"),(0,r.kt)("p",null,"A blockchain is an environment to which transactions can be submitted to, and against which scripts can be run.\nIt imitates the behavior of a real network, for testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"/// Blockchain emulates a real network.\n///\npub struct Blockchain {\n\n    pub let backend: AnyStruct{BlockchainBackend}\n\n    init(backend: AnyStruct{BlockchainBackend}) {\n        self.backend = backend\n    }\n\n    /// Executes a script and returns the script return value and the status.\n    /// `returnValue` field of the result will be `nil` if the script failed.\n    ///\n    pub fun executeScript(_ script: String, _ arguments: [AnyStruct]): ScriptResult {\n        return self.backend.executeScript(script, arguments)\n    }\n\n    /// Creates a signer account by submitting an account creation transaction.\n    /// The transaction is paid by the service account.\n    /// The returned account can be used to sign and authorize transactions.\n    ///\n    pub fun createAccount(): Account {\n        return self.backend.createAccount()\n    }\n\n    /// Add a transaction to the current block.\n    ///\n    pub fun addTransaction(_ tx: Transaction) {\n        self.backend.addTransaction(tx)\n    }\n\n    /// Executes the next transaction in the block, if any.\n    /// Returns the result of the transaction, or nil if no transaction was scheduled.\n    ///\n    pub fun executeNextTransaction(): TransactionResult? {\n        return self.backend.executeNextTransaction()\n    }\n\n    /// Commit the current block.\n    /// Committing will fail if there are un-executed transactions in the block.\n    ///\n    pub fun commitBlock() {\n        self.backend.commitBlock()\n    }\n\n    /// Executes a given transaction and commit the current block.\n    ///\n    pub fun executeTransaction(_ tx: Transaction): TransactionResult {\n        self.addTransaction(tx)\n        let txResult = self.executeNextTransaction()!\n        self.commitBlock()\n        return txResult\n    }\n\n    /// Executes a given set of transactions and commit the current block.\n    ///\n    pub fun executeTransactions(_ transactions: [Transaction]): [TransactionResult] {\n        for tx in transactions {\n            self.addTransaction(tx)\n        }\n\n        let results: [TransactionResult] = []\n        for tx in transactions {\n            let txResult = self.executeNextTransaction()!\n            results.append(txResult)\n        }\n\n        self.commitBlock()\n        return results\n    }\n\n    /// Deploys a given contract, and initilizes it with the arguments.\n    ///\n    pub fun deployContract(\n        name: String,\n        code: String,\n        account: Account,\n        arguments: [AnyStruct]\n    ): Error? {\n        return self.backend.deployContract(\n            name: name,\n            code: code,\n            account: account,\n            arguments: arguments\n        )\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockchainBackend")," provides the actual functionality of the blockchain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"/// BlockchainBackend is the interface to be implemented by the backend providers.\n///\npub struct interface BlockchainBackend {\n\n    pub fun executeScript(_ script: String, _ arguments: [AnyStruct]): ScriptResult\n\n    pub fun createAccount(): Account\n\n    pub fun addTransaction(_ tx: Transaction)\n\n    pub fun executeNextTransaction(): TransactionResult?\n\n    pub fun commitBlock()\n\n    pub fun deployContract(\n        name: String,\n        code: String,\n        account: Account,\n        arguments: [AnyStruct]\n    ): Error?\n}\n")),(0,r.kt)("h3",{id:"creating-a-blockchain"},"Creating a blockchain"),(0,r.kt)("p",null,"A new blockchain instance can be created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"newEmulatorBlockchain")," method.\nIt returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Blockchain")," which is backed by a new ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/emulator"},"Flow Emulator")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let blockchain = Test.newEmulatorBlockchain()\n")),(0,r.kt)("h3",{id:"creating-accounts"},"Creating accounts"),(0,r.kt)("p",null,"It may be necessary to create accounts during tests for various reasons, such as for deploying contracts, signing transactions, etc.\nAn account can be created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAccount")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let acct = blockchain.createAccount()\n")),(0,r.kt)("p",null,"The returned account consist of the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," of the account, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey")," associated with it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"/// Account represents info about the account created on the blockchain.\n///\npub struct Account {\n    pub let address: Address\n    pub let publicKey: PublicKey\n\n    init(address: Address, publicKey: PublicKey) {\n        self.address = address\n        self.publicKey = publicKey\n    }\n}\n")),(0,r.kt)("h3",{id:"executing-scripts"},"Executing scripts"),(0,r.kt)("p",null,"Scripts can be run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeScript")," function, which returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptResult"),".\nThe function takes script-code as the first argument, and the script-arguments as an array as the second argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let result = blockchain.executeScript("pub fun main(a: String) {}", ["hello"])\n')),(0,r.kt)("p",null,"The script result consists of the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," of the script execution, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"returnValue")," if the script execution was\nsuccessful, or an ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," otherwise (see ",(0,r.kt)("a",{parentName:"p",href:"#errors"},"errors")," section for more details on errors)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"/// The result of a script execution.\n///\npub struct ScriptResult {\n    pub let status: ResultStatus\n    pub let returnValue: AnyStruct?\n    pub let error: Error?\n\n    init(status: ResultStatus, returnValue: AnyStruct?, error: Error?) {\n        self.status = status\n        self.returnValue = returnValue\n        self.error = error\n    }\n}\n")),(0,r.kt)("h3",{id:"executing-transactions"},"Executing transactions"),(0,r.kt)("p",null,"A transaction must be created with the transaction code, a list of authorizes,\na list of signers that would sign the transaction, and the transaction arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"/// Transaction that can be submitted and executed on the blockchain.\n///\npub struct Transaction {\n    pub let code: String\n    pub let authorizers: [Address]\n    pub let signers: [Account]\n    pub let arguments: [AnyStruct]\n\n    init(code: String, authorizers: [Address], signers: [Account], arguments: [AnyStruct]) {\n        self.code = code\n        self.authorizers = authorizers\n        self.signers = signers\n        self.arguments = arguments\n    }\n}\n")),(0,r.kt)("p",null,"The number of authorizers must match the number of ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthAccount")," arguments in the ",(0,r.kt)("inlineCode",{parentName:"p"},"prepare")," block of the transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let tx = Test.Transaction(\n    code: "transaction { prepare(acct: AuthAccount) {} execute{} }",\n    authorizers: [account.address],\n    signers: [account],\n    arguments: [],\n)\n')),(0,r.kt)("p",null,"There are two ways to execute the created transaction."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Executing the transaction immediately",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let result = blockchain.executeTransaction(tx)\n")),"This may fail if the current block contains transactions that have not being executed yet.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adding the transaction to the current block, and executing it later."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Add to the current block\nblockchain.addTransaction(tx)\n\n// Execute the next transaction in the block\nlet result = blockchain.executeNextTransaction()\n")))),(0,r.kt)("p",null,"The result of a transaction consists of the status of the execution, and an ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," if the transaction failed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"/// The result of a transaction execution.\n///\npub struct TransactionResult {\n    pub let status: ResultStatus\n    pub let error: Error?\n\n    init(status: ResultStatus, error: Error) {\n        self.status = status\n        self.error = error\n    }\n }\n")),(0,r.kt)("h3",{id:"commit-block"},"Commit block"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"commitBlock")," block will commit the current block, and will fail if there are any un-executed transactions in the block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"blockchain.commitBlock()\n")),(0,r.kt)("h3",{id:"deploying-contracts"},"Deploying contracts"),(0,r.kt)("p",null,"A contract can be deployed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployContract")," function of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Blockchain"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let contractCode = "pub contract Foo{ pub let msg: String;   init(_ msg: String){ self.msg = msg }   pub fun sayHello(): String { return self.msg } }"\n\nlet err = blockchain.deployContract(\n    name: "Foo",\n    code: contractCode,\n    account: account,\n    arguments: ["hello from args"],\n)\n')),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," is returned if the contract deployment fails. Otherwise, a ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," is returned."),(0,r.kt)("h3",{id:"configuring-import-addresses"},"Configuring import addresses"),(0,r.kt)("p",null,"A common pattern in Cadence projects is to define the imports as file locations and specify the addresses\ncorresponding to each network in the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli/configuration#contracts"},"Flow CLI configuration file"),".\nWhen writing tests for a such project, it may also require to specify the addresses to be used during the tests as well.\nHowever, during tests, since accounts are created dynamically and the addresses are also generated dynamically,\nspecifying the addresses statically in a configuration file is not an option."),(0,r.kt)("p",null,"Hence, the test framework provides a way to specify the addresses using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"useConfiguration(_ configuration: Test.Configuration)")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"Blockchain"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," struct consists of a mapping of import locations to their addresses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"/// Configuration to be used by the blockchain.\n/// Can be used to set the address mapping.\n///\npub struct Configuration {\n    pub let addresses: {String: Address}\n\n    init(addresses: {String: Address}) {\n        self.addresses = addresses\n    }\n}\n")),(0,r.kt)(u,{type:"info",mdxType:"Callout"},"The `Blockchain.useConfiguration` is a run-time alternative for [statically defining contract addresses in the flow.json config file](https://developers.flow.com/tools/flow-cli/configuration#advanced-format)."),(0,r.kt)("p",null,"The configurations can be specified during the test setup as a best-practice."),(0,r.kt)("p",null,"e.g: Assume running a script that imports ",(0,r.kt)("inlineCode",{parentName:"p"},"FooContract")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BarContract"),".\nThe import locations for the two contracts can be specified using the two placeholders ",(0,r.kt)("inlineCode",{parentName:"p"},'"FooContract"')," and\n",(0,r.kt)("inlineCode",{parentName:"p"},'"BarContract"'),". These placeholders can be any unique strings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'import FooContract from "FooContract"\nimport BarContract from "BarContract"\n\npub fun main() {\n    // do something\n}\n')),(0,r.kt)("p",null,"Then, before executing the script, the address mapping can be specified as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'pub var blockchain = Test.newEmulatorBlockchain()\npub var accounts: [Test.Account] = []\n\npub fun setup() {\n    // Create accounts in the blockchain.\n\n    let acct1 = blockchain.createAccount()\n    accounts.append(acct1)\n\n    let acct2 = blockchain.createAccount()\n    accounts.append(acct2)\n\n    // Set the configuration with the addresses.\n    // They keys of the mapping should be the placeholders used in the imports.\n\n    blockchain.useConfiguration(Test.Configuration({\n        "FooContract": acct1.address,\n        "BarContract": acct2.address\n    }))\n}\n')),(0,r.kt)("p",null,"The subsequent operations on the blockchain (e.g: contract deployment, script/transaction execution) will resolve the\nimport locations to the provided addresses."),(0,r.kt)("h3",{id:"errors"},"Errors"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," maybe returned when an operation (such as executing a script, executing a transaction, etc.) is failed.\nContains a message indicating why the operation failed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Error is returned if something has gone wrong.\n//\npub struct Error {\n    pub let message: String\n\n    init(_ message: String) {\n        self.message = message\n    }\n}\n")),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," may typically be handled by failing the test case or by panicking (which will result in failing the test)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let err: Error? = ...\n\nif let err = err {\n    panic(err.message)\n}\n")),(0,r.kt)("h2",{id:"reading-from-files"},"Reading from files"),(0,r.kt)("p",null,"Writing tests often require constructing source-code of contracts/transactions/scripts in the test script.\nTesting framework provides a convenient way to load programs from a local file, without having to manually construct\nthem within the test script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let contractCode = Test.readFile("./sample/contracts/FooContract.cdc")\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"readFile")," returns the content of the file as a string."))}m.isMDXComponent=!0}}]);