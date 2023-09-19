"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1534],{83266:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});o(67294);var n=o(85893),a=o(11151);const l={},s=void 0,i={unversionedId:"tools/clients/unity-sdk/guides/flow-control",id:"tools/clients/unity-sdk/guides/flow-control",title:"FlowControl",description:"FlowControl is a set of Unity tools and functions designed to streamline development and interactions with the Flow blockchain.",source:"@site/docs/tools/clients/unity-sdk/guides/flow-control.md",sourceDirName:"tools/clients/unity-sdk/guides",slug:"/tools/clients/unity-sdk/guides/flow-control",permalink:"/docs/next/tools/clients/unity-sdk/guides/flow-control",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tools/clients/unity-sdk/guides/flow-control.md",tags:[],version:"current",lastUpdatedBy:"Jordan Ribbink",lastUpdatedAt:1695141690,formattedLastUpdatedAt:"Sep 19, 2023",frontMatter:{},sidebar:"tools",previous:{title:"Dev Wallet",permalink:"/docs/next/tools/clients/unity-sdk/guides/dev-wallet"},next:{title:"iOS Support",permalink:"/docs/next/tools/clients/unity-sdk/guides/ios-support"}},r={},c=[{value:"FlowControl Emulator Settings",id:"flowcontrol-emulator-settings",level:2},{value:"Advanced Options",id:"advanced-options",level:2},{value:"FlowControl Accounts",id:"flowcontrol-accounts",level:2},{value:"FlowControl Text Replacement",id:"flowcontrol-text-replacement",level:2},{value:"FlowControl Tools",id:"flowcontrol-tools",level:2},{value:"Manage Contracts",id:"manage-contracts",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Create New Account",id:"create-new-account",level:3},{value:"FlowControl inspector",id:"flowcontrol-inspector",level:2}];function d(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",img:"img",strong:"strong",em:"em",h3:"h3",a:"a"},(0,a.ah)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"flowcontrol",children:"FlowControl"}),"\n",(0,n.jsx)(e.p,{children:"FlowControl is a set of Unity tools and functions designed to streamline development and interactions with the Flow blockchain."}),"\n",(0,n.jsx)(e.p,{children:"After installing the Unity Flow SDK, open the FlowControl Manager window by clicking on Windows->Flow->Flow Control."}),"\n",(0,n.jsx)(e.p,{children:"This will open the FlowControl Manager window.  It will also add a Flow Control object to your scene and create a FlowControlData resource to store your data if they are not already present.  You can have multiple FlowControlData resources to act as presets and switch between them as needed."}),"\n",(0,n.jsx)(e.h2,{id:"flowcontrol-emulator-settings",children:"FlowControl Emulator Settings"}),"\n",(0,n.jsx)(e.p,{children:"The first panel that displays will be your emulator settings."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:o(52887).Z+"",loading:"lazy",alt:"FlowControl Emulator Settings",width:"593",height:"329"})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Installation Detection:"}),'  FlowControl will attempt to find the flow binary in your path.  If it can\'t detect it, it will display a button with the label "Install" linking you to the install instructions.']}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Emulator Data Directory:"}),"  This field is required if you wish to control the emulator from FlowControl.  Set this to the ",(0,n.jsx)(e.strong,{children:"directory"})," where you would like to store your persisted\r\nemulator state (flowdb), and your initial emulator configuration (flow.json).  This should typically be outside your project folder.  The folder must exist."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Emulator endpoint:"}),"  If you want to connect to an emulator running on a different computer, such as when testing on mobile devices or several clients all connecting\r\nto the same emulator instance, you can specify an emulator endpoint address here."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Run emulator in play mode?"}),"  This determines if the emulator should automatically start when you enter play mode."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Start Emulator"})," button:  This will start the emulator in the background to allow you to interact with it in edit mode."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Stop Emulator"})," button:  This will stop a running emulator process."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Clear Persistent Data"})," button:  The Flow emulator maintains the state of the emulated blockchain in a database.  This allows you to persist data between runs.  If you would like to reset the emulated blockchain to its initial state, use this button.  This will delete the flowdb directory located in the Emulator Data Directory.  It will be recreated the next time you start the emulator."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Show Emulator Log"})," button:  This opens the Emulator Output window.  You can use this to verify that scripts you run against the emulator execute\r\nproperly and will display debug messages if something goes wrong.  You can also open the log using Window->Flow->Emulator Output"]}),"\n",(0,n.jsx)(e.h2,{id:"advanced-options",children:"Advanced Options"}),"\n",(0,n.jsxs)(e.p,{children:["Some options are not exposed in the Flow Control Manager, but can be changed directly in the FlowControlData asset.\r\n",(0,n.jsx)(e.img,{src:o(99845).Z+"",loading:"lazy",alt:"FlowControlData asset",width:"748",height:"138"})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Flow Executable Path Override:"}),"  This allows you to select the flow binary you would like to use.  This will override the auto detected flow binary."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Persist Data:"}),"  This allows you disable persisting the emulated blockchain to disk.  If this is disabled, all changes you make to the emulated blockchain will be lost when the emulator stops or restarts."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Kill Other Flow:"}),'  When starting or restarting the emulator, any running flow processes will be terminated.  If you wish to run your own emulator instance outside the control of Flow Control, uncheck this, as well as "Run Emulator in Play Mode" to ensure it doesn\'t get terminated.']}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Verbose:"}),"  This controls the verbosity of emulator output.  Verbose output is usually desired, but if you would like non-verbose output for any reason, this allows you to control that setting."]}),"\n",(0,n.jsx)(e.h2,{id:"flowcontrol-accounts",children:"FlowControl Accounts"}),"\n",(0,n.jsxs)(e.p,{children:["The Accounts panel allows you to store account information for easy access at runtime.\r\n",(0,n.jsx)(e.em,{children:(0,n.jsx)(e.strong,{children:"Note:  Adding accounts to this panel does not create accounts on the blockchain"})})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:o(46498).Z+"",loading:"lazy",alt:"FlowControl Accounts",width:"753",height:"228"})}),"\n",(0,n.jsx)(e.p,{children:'The "+" button at the top will add a blank account entry for you to fill in.  The fields may differ depending on which Gateway is selected, but Gateway and Name are always required.'}),"\n",(0,n.jsx)(e.p,{children:"The emulator_service_account account will be created/updated each time you start the emulator so that it will always be valid."}),"\n",(0,n.jsx)(e.p,{children:"If it is a Testnet account, a link to the Testnet Flowscan page for that account will be provided.  Clicking on it will open the page in your default browser."}),"\n",(0,n.jsx)(e.h2,{id:"flowcontrol-text-replacement",children:"FlowControl Text Replacement"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:o(86921).Z+"",loading:"lazy",alt:"FlowControl Text Replacement",width:"812",height:"547"})}),"\n",(0,n.jsx)(e.p,{children:"The Text Replacement panel allows you to manage string replacement inside your Cadence scripts.  If you're switching between emulator and Testnet, this makes it easy to replace account addresses and other strings without having to edit the scripts each time."}),"\n",(0,n.jsx)(e.p,{children:"All instances of Original Text will be replaced with Replacement Text.  There is no required format, but it is recommended that you enclose the placeholder text in a separator character to ensure that there are no conflicting replacements."}),"\n",(0,n.jsx)(e.p,{children:"The Description field is optional and is just used to make it easy to remember what each replacement is for."}),"\n",(0,n.jsx)(e.p,{children:"The Active checkbox indicates if this text replacement should be performed."}),"\n",(0,n.jsx)(e.p,{children:'"Apply to accounts" allows you to select specific accounts this replacement should apply to.  Any transactions or script executions performed via these accounts will have this replacement applied.'}),"\n",(0,n.jsx)(e.p,{children:'"Apply to gateways" allows you to select specific gateways this replacement should apply to.  Any transactions or script executions performed via an account utilizing these gateways will have this replacement performed.'}),"\n",(0,n.jsx)(e.p,{children:"Accounts must meet both the account and gateway requirements for a text replacement to take place.  If an account is listed in the accounts list, but uses a gateway that is not in the gateways list, the replacement will not be processed and vice-versa."}),"\n",(0,n.jsx)(e.h2,{id:"flowcontrol-tools",children:"FlowControl Tools"}),"\n",(0,n.jsx)(e.p,{children:"The FlowControl Tools panel can be used to deploy contracts and create accounts."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:o(4738).Z+"",loading:"lazy",alt:"FlowControl Tools",width:"638",height:"439"})}),"\n",(0,n.jsx)(e.h3,{id:"manage-contracts",children:"Manage Contracts"}),"\n",(0,n.jsx)(e.p,{children:"The Contract Name is the name of the contract as it will appear on the blockchain.  It must match the contract name in the contract file.  Text replacements are done on the contract file before deploying."}),"\n",(0,n.jsx)(e.p,{children:"Contract is the cadence contract file that you want to deploy."}),"\n",(0,n.jsx)(e.p,{children:"Account is the account that should deploy the contract.  The contract will be deployed to the same network that the account gateway uses."}),"\n",(0,n.jsx)(e.p,{children:"The Deploy Contract button will attempt to deploy the contract.  Check the emulator logs or flowscan.org to monitor the progress of deployment and check for errors."}),"\n",(0,n.jsxs)(e.p,{children:["The Update Contract button will attempt to update an existing contract.  There are rules as to what can change in a contract for an update to be accepted.  See ",(0,n.jsx)(e.a,{href:"/docs/next/cadence/language/contract-updatability",children:"cadence/language/contract-updatability"})," for more information."]}),"\n",(0,n.jsx)(e.p,{children:"The Remove Contract button will attempt to delete the contract with the given name from the specified account.  Once a contract is deleted, a new contract with the same name can not be created on the same account.  When using the emulator, clearing the database will allow you to recreate the contract.  When using testnet or mainnet, that contract name will become unavailable for the account.  This is done to prevent bypassing the contract update rules by deleting and recreating a contract with incompatible changes."}),"\n",(0,n.jsx)(e.h3,{id:"transactions",children:"Transactions"}),"\n",(0,n.jsx)(e.p,{children:"This section will allow you to execute a transaction against the gateway associated with the Signer account.  Currently it does not allow you to pass arguments to the transaction, but you can use a Text Replacement to work around this."}),"\n",(0,n.jsx)(e.h3,{id:"create-new-account",children:"Create New Account"}),"\n",(0,n.jsx)(e.p,{children:"The Paying account is the account that will initially fund the new account.  The new account name is not stored on the blockchain, and is only used to identify the new account in the Accounts panel.  After the account is created, the account information will be added to the Accounts panel.  Make sure to save a copy of this information somewhere.  If the private key is lost, that account will not be accessible.  You can change the account Name in the Accounts panel.  Note that changing the Address or Private Key fields will not change these on the blockchain."}),"\n",(0,n.jsx)(e.h2,{id:"flowcontrol-inspector",children:"FlowControl inspector"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:o(17817).Z+"",loading:"lazy",alt:"FlowControl Inspector",width:"749",height:"152"})}),"\n",(0,n.jsx)(e.p,{children:"Clicking the FlowControl object in your scene will give you access to the inspector.  This will allow you to select which FlowControlData resource you would like to use\r\nas well as export to/import from JSON.  JSON is useful if you would like to modify FlowControl variables from a built project, since you will not be able to save the\r\nFlowControlData resource from a built project.  The Log JSON button will serialize the FlowControlData resource into a string and display it.  The Load JSON button will\r\ndeserialize the displayed JSON into the selected FlowControlData resource."})]})}const h=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,a.ah)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(d,t)})):d(t)}},46498:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/FlowControlAccounts-7f56c339379851094b816c3cc121fe97.png"},99845:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/FlowControlDataAsset-6480503fd66121a579ac553929c82e24.png"},52887:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/FlowControlEmulator-5a0c10f3cf60bf74e299064099db5103.png"},17817:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/FlowControlInspector-3a4ef2b7dc385cbaac7489865f0ac85e.png"},86921:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/FlowControlTextReplacement-55cc10bc8ab427dd3bca35ed920355e5.png"},4738:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/FlowControlTools-1e5f53a9898a5afcdb8394e4b4cc0ec4.png"}}]);