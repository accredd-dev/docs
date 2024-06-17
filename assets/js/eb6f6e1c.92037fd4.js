"use strict";(self.webpackChunkdocusaur=self.webpackChunkdocusaur||[]).push([[581],{7330:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(4848),s=t(8453);const r={sidebar_position:4},o="Traditional Implementation",a={id:"traditional-API",title:"Traditional Implementation",description:"This API model is useful if you want to completely build out your own investor verification user experience.  We recommend you start with the Embedded UI API model first unless you already have a verification UI or have some special requirements which you find the Embedded UI lacking.  Contact us if you need to talk to one of our experts about choosing an integration model.",source:"@site/docs/traditional-API.md",sourceDirName:".",slug:"/traditional-API",permalink:"/traditional-API",draft:!1,unlisted:!1,editUrl:"https://accredd.com/docs/traditional-API.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Embedded UI Implementation",permalink:"/embedded-ui"},next:{title:"Best Practices",permalink:"/best-practices"}},d={},l=[{value:"Implementation Overview",id:"implementation-overview",level:4},{value:"Implementation Suggestions",id:"implementation-suggestions",level:2},{value:"Passing in multiple document types",id:"passing-in-multiple-document-types",level:3},{value:"Passing a unique identifier",id:"passing-a-unique-identifier",level:3},{value:"Passing our feedback to your users",id:"passing-our-feedback-to-your-users",level:3},{value:"TransactionID versus ExternalID",id:"transactionid-versus-externalid",level:3},{value:"Using the <code>PUT</code> endpoint for development",id:"using-the-put-endpoint-for-development",level:3},{value:"Retrieving a submission",id:"retrieving-a-submission",level:3},{value:"Request Body",id:"request-body",level:2}];function c(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"traditional-implementation",children:"Traditional Implementation"}),"\n",(0,n.jsx)(i.p,{children:"This API model is useful if you want to completely build out your own investor verification user experience.  We recommend you start with the Embedded UI API model first unless you already have a verification UI or have some special requirements which you find the Embedded UI lacking.  Contact us if you need to talk to one of our experts about choosing an integration model."}),"\n",(0,n.jsx)(i.h4,{id:"implementation-overview",children:"Implementation Overview"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Generate Obtain an API Key from your dashboard."}),"\n",(0,n.jsx)(i.li,{children:"Submit a new verification."}),"\n",(0,n.jsx)(i.li,{children:"Get the status on a verification submission.  If you are in Development mode, you can set and get different verification statuses to complete your integration.  The API Key controls which mode you are in."}),"\n",(0,n.jsx)(i.li,{children:"Optionally download a verification letter.  If you are not interested in storing or managing a verification letter, you can skip this step."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"implementation-suggestions",children:"Implementation Suggestions"}),"\n",(0,n.jsx)(i.h3,{id:"passing-in-multiple-document-types",children:"Passing in multiple document types"}),"\n",(0,n.jsxs)(i.p,{children:["The properties ",(0,n.jsx)(i.code,{children:"Files"})," and ",(0,n.jsx)(i.code,{children:"OtherFiles"})," are used here. You don\u2019t need to specify the document type as our application will parse them automatically for review."]}),"\n",(0,n.jsx)(i.h3,{id:"passing-a-unique-identifier",children:"Passing a unique identifier"}),"\n",(0,n.jsxs)(i.p,{children:["You will use the property ",(0,n.jsx)(i.code,{children:"ExternalUniqueID"})," to pass in a unique string to represent your end user\u2019s submission. Please note you cannot pass in personal identifiable information. If you choose not to pass in a unique ID, we will generate a unique ",(0,n.jsx)(i.code,{children:"transactionID"})," for you which you can then use to retrieve the status of a verification within our 12-hour service-level agreement timeframe."]}),"\n",(0,n.jsx)(i.h3,{id:"passing-our-feedback-to-your-users",children:"Passing our feedback to your users"}),"\n",(0,n.jsxs)(i.p,{children:["The endpoint ",(0,n.jsx)(i.code,{children:"GET/v1/verifications/{transactionID}"})," enables you to get the status for any given submission. If the status is \u201cFailed\u201d, the property ",(0,n.jsx)(i.code,{children:"rejectionComment"})," has a string with specific feedback provided by our verification team. You can pass this along to the end user and enable them to try again."]}),"\n",(0,n.jsx)(i.admonition,{title:"Best Practice",type:"tip",children:(0,n.jsx)(i.p,{children:"The status and/or feedback is helpful for the issuer (the investor's sponsor) so it keeps them in the loop. It's best practice is to surface the feedback to all users (the investor, their issuer, your support team, etc) so everyone is on the same page."})}),"\n",(0,n.jsx)(i.h3,{id:"transactionid-versus-externalid",children:"TransactionID versus ExternalID"}),"\n",(0,n.jsxs)(i.p,{children:["They are the same. You can pass us an ",(0,n.jsx)(i.code,{children:"externalUniqueID"})," or we will generate a unique ",(0,n.jsx)(i.code,{children:"transactionID"})," for you. Either way, you will need this unique ID to get the status for a submission."]}),"\n",(0,n.jsxs)(i.h3,{id:"using-the-put-endpoint-for-development",children:["Using the ",(0,n.jsx)(i.code,{children:"PUT"})," endpoint for development"]}),"\n",(0,n.jsxs)(i.p,{children:["The endpoint ",(0,n.jsx)(i.code,{children:"PUT/v1/verifications/{transactionID}"})," is used to manipulate the status of a submission (\u201cProcessing\u201d, \u201cFailed\u201d, \u201cVerified\u201d, \u201cExpired\u201d) during development. This allows you to handle the various scenarios of the submission result."]}),"\n",(0,n.jsx)(i.h3,{id:"retrieving-a-submission",children:"Retrieving a submission"}),"\n",(0,n.jsx)(i.p,{children:"You can view production API submissions within the \u201cDashboard\u201d tab by examining the interactive chart \u201cAPI Count by Status\u201d. It\u2019s best to retrieve the status of your submissions programmatically using the corresponding endpoint."}),"\n",(0,n.jsx)(i.h2,{id:"request-body",children:"Request Body"}),"\n",(0,n.jsxs)(i.p,{children:["You can manipulate the various parameters to show relevant options to the end user. For example, if you already have the end user's ",(0,n.jsx)(i.code,{children:"LegalName"}),", you may pass it to us so we can display it for them. This saves the end user time."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameter"}),(0,n.jsx)(i.th,{children:"Data Type"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"InvestorType"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsxs)(i.td,{children:["The end user's entity type. Possible values are ",(0,n.jsx)(i.code,{children:"Individual"})," or ",(0,n.jsx)(i.code,{children:"Entity"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"VerificationType"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"The SEC standard the investor is verifying through, e.g. Income, Net Worth, Financial Professional"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"LegalName"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"The legal name the end user is trying to verify for accreditation. It could be a person's name or an entity's name"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Amount"})}),(0,n.jsx)(i.td,{children:"number"}),(0,n.jsx)(i.td,{children:"Input field for the end user to provide additional information such as expected income for the current year or overall net worth"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Comment"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"Optional text field for the end user to include relevant details"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"LicensedProCRDNumber"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsx)(i.td,{children:"A professional license number our team would use to verify the validity of the end user's status"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Files"})}),(0,n.jsx)(i.td,{children:"array"}),(0,n.jsx)(i.td,{children:"Input field for users to attach relevant documents. File limit size is 50MB."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"OtherFiles"})}),(0,n.jsx)(i.td,{children:"array"}),(0,n.jsx)(i.td,{children:"Additional input field for users to attach additional documents such as credit report or entity formation documents"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"ExternalUniqueID"})}),(0,n.jsx)(i.td,{children:"string"}),(0,n.jsxs)(i.td,{children:["Optional. A unique parameter that is passed into Accredd as part of a new submission. If the value is blank, a unique ",(0,n.jsx)(i.code,{children:"transactionID"})," will be generated and returned. Use your ",(0,n.jsx)(i.code,{children:"externalUniqueID"})," or our ",(0,n.jsx)(i.code,{children:"transactionID"})," on subsequent API calls to track the submission."]})]})]})]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var n=t(6540);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);