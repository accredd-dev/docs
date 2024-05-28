---
sidebar_position: 3
---

# Embedded UI API

The Embedded UI API model is useful if you want the fastest time to market and are not interested in building or maintaining an investor verification UI.  The out-of-the-box embedded UI modal is highly flexible and shipped with many configurable options which you can hide or show based on what information you want the user to see in your application.

- Obtain an API Key from your dashboard.
- Call the `embed-ui-link` endpoint to get back an embeddable link.
- Use the embeddable link in your application.
- Get the status on a verification submission.  If you are in Development mode, you can set and get different verification statuses to complete your integration.  
- Seamlessly switch from Development mode to Production mode with the same API Key controls which mode you are in.
- Optionally, download a verification letter. If you are not interested in storing or managing a verification letter, you can skip this step.

### Preloading user information into the modal
You can save the end user time by passing in information such as their legal name and whether they’re investing as an entity or an individual. Use the `LegalName` setting and `InvestorType` setting to pass in relevant information. We’ll load this data onto the modal for the end user. 

:::tip[Presets]
`InvestorType` is particularly helpful as it will surface the relevant accreditation options to the user. Entities have a different set of accreditation options than individuals.
:::

### Closing the modal after a user submits
To close the UI modal after a user submits their documents, you’ll want to use the `OnVerifyPostMessage` setting. Essentially, your site will wait to get a message from us once the user hits submit. You can then use this message to close the iframe.

### Passing our feedback to your users
The endpoint `GET/v1/verifications/{transactionID}` enables you to get the status for any given submission. If the status is “Failed”, the property `rejectionComment` has a string with specific feedback provided by our verification team. You can pass this along to the end user and enable them to try again.

### TransactionID versus ExternalID
They are the same. You can pass us an `externalUniqueID` or we will generate a unique transactionID for you. Either way, you will need this unique ID to get the status for a submission.

### Using the `PUT` endpoint for development
The endpoint `PUT/v1/verifications/{transactionID}` is used to manipulate the status of a submission (“Processing”, “Failed”, “Verified”, “Expired”) during development. This allows you to handle the various scenarios of the submission result.

