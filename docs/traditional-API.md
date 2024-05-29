---
sidebar_position: 4
---

# Traditional API

This API model is useful if you want to completely build out your own investor verification user experience.  We recommend you start with the Embedded UI API model first unless you already have a verification UI or have some special requirements which you find the Embedded UI lacking.  Contact us if you need to talk to one of our experts about choosing an integration model.

#### Implementation Overview
- Generate Obtain an API Key from your dashboard.
- Submit a new verification.
- Get the status on a verification submission.  If you are in Development mode, you can set and get different verification statuses to complete your integration.  The API Key controls which mode you are in.
- Optionally download a verification letter.  If you are not interested in storing or managing a verification letter, you can skip this step.

## Implementation Suggestions

### Passing in multiple document types
The properties `Files` and `OtherFiles` are used here. You don’t need to specify the document type as our application will parse them automatically for review.


### Passing a unique identifier
You will use the property `ExternalUniqueID` to pass in a unique string to represent your end user’s submission. Please note you cannot pass in personal identifiable information. If you choose not to pass in a unique ID, we will generate a unique `transactionID` for you which you can then use to retrieve the status of a verification within our 12-hour service-level agreement timeframe.

### Passing our feedback to your users
The endpoint `GET/v1/verifications/{transactionID}` enables you to get the status for any given submission. If the status is “Failed”, the property `rejectionComment` has a string with specific feedback provided by our verification team. You can pass this along to the end user and enable them to try again.


:::tip[Best Practice]
The status and/or feedback is helpful for the issuer (the investor's sponsor) so it keeps them in the loop. It's best practice is to surface the feedback to all users (the investor, their issuer, your support team, etc) so everyone is on the same page.
:::

### TransactionID versus ExternalID
They are the same. You can pass us an `externalUniqueID` or we will generate a unique `transactionID` for you. Either way, you will need this unique ID to get the status for a submission.

### Using the `PUT` endpoint for development
The endpoint `PUT/v1/verifications/{transactionID}` is used to manipulate the status of a submission (“Processing”, “Failed”, “Verified”, “Expired”) during development. This allows you to handle the various scenarios of the submission result.

### Retrieving a submission
You can view production API submissions within the “Dashboard” tab by examining the interactive chart “API Count by Status”. It’s best to retrieve the status of your submissions programmatically using the corresponding endpoint. 

## Request Body
You can manipulate the various parameters to show relevant options to the end user. For example, if you already have the end user's `LegalName`, you may pass it to us so we can display it for them. This saves the end user time.

| Parameter                   | Data Type     | Description      |
|-----------------------------|---------------|------------------|
| `InvestorType`          | string    | The end user's entity type. Possible values are `Individual` or `Entity`|
| `VerificationType`      | string    | The SEC standard the investor is verifying through, e.g. Income, Net Worth, Financial Professional  |
| `LegalName`             | string    | The legal name the end user is trying to verify for accreditation. It could be a person's name or an entity's name|
| `Amount`                | number    | Input field for the end user to provide additional information such as expected income for the current year or overall net worth|
| `Comment`               | string    | Optional text field for the end user to include relevant details        |
| `LicensedProCRDNumber`  | string    | A professional license number our team would use to verify the validity of the end user's status|
| `Files`                 | array     | Input field for users to attach relevant documents. File limit size is 50MB. |
| `OtherFiles`            | array     | Additional input field for users to attach additional documents such as credit report or entity formation documents |
| `ExternalUniqueID`      | string    | Optional. A unique parameter that is passed into Accredd as part of a new submission. If the value is blank, a unique `transactionID` will be generated and returned. Use your `externalUniqueID` or our `transactionID` on subsequent API calls to track the submission. |

