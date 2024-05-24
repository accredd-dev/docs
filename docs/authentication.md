---
sidebar_position: 2
---

# Authentication & API Keys

## Authentication

Accredd authenticates your API requests using your account’s API keys. Accredd will return an invalid request error if your request doesn’t include a valid API key.

Accredd makes revoking or managing an API key very simple. You can create a `Development` key, a `Production` key, or change access permissions all with a click of a button.

You can use the Accredd Dashboard to generate and control the API keys between `Development` mode and `Production` mode.

All Accredd API requests happen in either Development mode or Production mode. Use the former to test and access dummy data, in addition to manipulating the status of a submission so you can handle the various scenarios. Switch from Development mode to Production mode when you’re ready to deploy the API in a live environment.

## API Keys

The Accredd API uses API keys to authenticate requests. You can create, view, and manage your API keys in the Accredd Dashboard.

Your API keys carry many privileges, so please make sure to keep them secured by not sharing your secret API keys in public spaces such as shared docs, GitHub, client-side code, etc.

The API key has two modes: 
- `Development` 
- `Production`

You can easily switch between the modes within the Accredd Dashboard. This allows your to make changes and test them in `Development` mode, and immediately move those changes to `Production` when you're ready.