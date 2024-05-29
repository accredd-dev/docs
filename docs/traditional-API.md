---
sidebar_position: 4
---

# Embedded UI API

The Embedded UI API model is useful if you want the fastest time to market and are not interested in building or maintaining an investor verification UI.  The out-of-the-box embedded UI modal is highly flexible and shipped with many configurable options which you can hide or show based on what information you want the user to see in your application.

#### Implementation Overview
- Obtain an API Key from your dashboard.
- Call the `embed-ui-link` endpoint to get an embeddable link.
- Use the embeddable link in your application.
- Get the status on a verification submission.  If you are in Development mode, you can set and get different verification statuses to complete your integration.  
- Seamlessly switch from Development mode to Production mode with the same API Key.
- Optionally, download a verification letter. If you are not interested in storing or managing a verification letter, you can skip this step.

## Implementation Suggestions

### Preloading user information into the modal
You can save the end user time by passing in information such as their legal name and whether they’re investing as an entity or an individual. Use the `LegalName` setting and `InvestorType` setting to pass in relevant information. We’ll load this data onto the modal for the end user. 

:::tip[Presets]
`InvestorType` is particularly helpful as it will surface the relevant accreditation options to the user. Entities have a different set of accreditation options than individuals.
:::

### Closing the modal after a user submits
To close the UI modal after a user submits their documents, you’ll want to use the `OnVerifyPostMessage` setting. Essentially, your site will wait to get a message from us once the user hits submit. You can then use this message to close the iframe.

### Passing our feedback to your users
The endpoint `GET/v1/verifications/{transactionID}` enables you to get the status for any given submission. If the status is “Failed”, the property `rejectionComment` has a string with specific feedback provided by our verification team. You can pass this along to the end user and enable them to try again.

This feedback is also helpful for the issuer (the investor's sponsor) so it keeps them in the loop. Best practice is to surface the feedback to the end user and their issuer.

### TransactionID versus ExternalID
They are the same. You can pass us an `externalUniqueID` or we will generate a unique transactionID for you. Either way, you will need this unique ID to get the status for a submission.

### Using the `PUT` endpoint for development
The endpoint `PUT/v1/verifications/{transactionID}` is used to manipulate the status of a submission (“Processing”, “Failed”, “Verified”, “Expired”) during development. This allows you to handle the various scenarios of the submission result.

## Request Body
You can manipulate the various parameters to show relevant options to the end user. For example, if you already have the end user's `LegalName`, you may pass it to us so we can display it for them. This saves the end user time.

| Parameter                   | Data Type     | Description      |
|-----------------------------|---------------|------------------|
| `IsPublicURL`               | boolean       | Set this to true if the link for the embedded UI is not customized for each investor and is reused for multiple verifications|
| `IsInsideIframe`            | boolean       | Set this to true if the link for the embedded UI will be hosted in an iframe|
| `OnVerifyPostMessage`       | boolean       | Set this to true if the hosting site needs to get a post message from Accredd right after the user submits a new verification. Requires `IsInsideIframe` to be true.|
| `ExternalUniqueID`          | string        | A unique parameter that is passed into Accredd as a part of a new submission. If the value is blank, a unique transactionID will be generated and returned. Use your externalUniqueID or our transactionID on subsequent API calls to track the submission. This requires `IsPublicURL` to be false.|
| `InvestorType`              | string        | The type of legal name submitted. Possible values: Individual or Entity|
| `LegalName`                 | string        | The legal name of an individual or entity for this submission|
| `Comment`                   | string        | Optional. Add a submission comment for reviewer|
| `InvalidRequestRedirectURL` | string        | If a submission is not successful, redirect to the URL  |
| `OnSubmitRedirectURL`       | string        | If a submission is successful, append a transactionID to the URL and redirect to it|
| `ShowIncomeTab`             | boolean       | Set this to true if displaying the Income upload option|
| `ShowNetWorthTab`           | boolean       | Set this to true if displaying the Net Worth upload option |
| `ShowOtherLicTab`           | boolean       | Set this to true if displaying the Licensed Professional upload option |
| `ShowOtherLetterTab`        | boolean       | Set this to true if displaying the Letter upload option |
| `ShowTopBar`                | boolean       | Set this to true if displaying the legal name and investor type fields for user input|
