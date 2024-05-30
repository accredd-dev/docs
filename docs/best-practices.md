---
sidebar_position: 5
---

# Best Practices

Below are a few best practices that apply to either implementation option. These best practices are a collection of suggestions from our API clients, some of whom process upwards of thousands of verifications through our API.

### Accredited for 5 years
The SEC made an ammendment in 2021 to the frequency in which issuers should reverify their investor's accreditation status. Prior to 2021, an investor's accreditation status was valid for a period of 90 days. This is why many verification vendors still have a 90-day expiration date on their accreditation letters.

The updated guidance is that an investor's accreditation status is valid for a period of 5 years, so long as the investor is reinvesting with the same issuer. The issuer is encouraged to check in with investors on subsequent investments to ensure the investor's accreditation status has not changed. Accredd was the first verifier to adopt these changes.

:::tip[Expiration Dates]
Our API status endpoint includes an expiration property that our clients use to keep track of this 5-year window for their end users.
:::

### Feedback for everyone
You likely have multiple stakeholders whether your website is a crowdfunding platform, a fund administrator, or an investor portal. Stakeholders may include: 
- end users (typically investors) 
- business user (typically issuers and their respective investor relations teams)
- your own support team

Sometimes the end user submits a picture of their dog instead of their income statement. Our API delivers specific feedback to help these end users resubmit successfully. Your platform can reduce support tickets by providing all stakeholders with visibility into the verification process: the current status for every investor and any feedback provided by our API.  

:::tip[Feedback]
Display the current status to all users. If the end user fails their initial verification, display text from the `feedback` property so users understand what's missing and how to resubmit for success.
:::

### Billing clients
Most of our API customers upsell the accreditation service to their clients (issuers). They track every verification internally and tie the verification to a specific customer. Some our our customers will send a monthly invoice for this added service, while others will include it in another tier of services.

:::tip[Issuers]
Our API call has a property `IssuerName` where you can pass the issuer name to us to display on the investor accreditation letter. You can also use this property to track and count how much submissions come through for any given client.
:::

### Getting status
We currently don't have a webhook to ping you when a status updates. It's best practice to run a chron job and call our API every hour within our 12 hour service-level agreement.