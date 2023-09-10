# API
Description of the API here

## Data
How the data will be stored, why this format matters, and how to access it

### Entity Relationship Diagram
![entity relationship diagram](docs/app-erd.png)

### Access Patterns
The table below captures the ways our application will access our data:

| Access pattern      | Index   | Parameters | Notes       |
| ------------------- | ------- | ---------- | ----------- |
| Create thing        | primary | thingid    | transaction |
| Get single thing    | primary | thingid    | transaction |
| Update single thing | primary | thingid    | transaction |
| Delete thing        | primary | thingid    | transaction |
| Get all things      | primary | userid     | listview    |

### Entity Chart
DynamoDB example can be replaced:

| Entity | PartitionyKey | SortKey | GSI 1 | GSI 2 |
| ------ | ------------- | ------- | ----- | ----- |
| Users  | userid        | userid  | n/a   | n/a   |
| Things | userid        | thingid | n/a   | n/a   |

## Endpoint logic

Alex Krupp has [an excellent essay](https://alexkrupp.typepad.com/sensemaking/2021/06/django-for-startup-founders-a-better-software-architecture-for-saas-startups-and-consumer-apps.html) on designing RESTful API endpoints.  This is directly borrowed from him.  Each endpoint should perform these 7 steps in the same order:

1. **Specify permissions** — Who is allowed to access this endpoint?
2. **Copy input to local variables** — What parameters (query params or body params) does this endpoint take?
3. **Sanitize user input** — User input must always be sanitized before further processing.
4. **Validate user input** — Ensure the user has supplied all of the same required parameters for this endpoint in the correct format. If there are errors, aggregate all of the input validation errors into a dictionary-style response as described below.
5. **Enforce business requirements** — Check for cases where the user is allowed to access the endpoint and submitted all of the required parameters correctly, but they aren't allowed to perform a specific action due to the business logic of the application. E.g. creating an account with a username that has already been taken. If there is an error, return the first error that occurs, as described below.
6. **Perform business logic** — Do whatever this endpoint is actually supposed to do, e.g. altering state in the database, returning data to the API consumer, sending data to a third-party processor, etc.
7. **Return HTTP response** — Return any data necessary for the API consumer(s), along with a status code.

## Development
How to develop the API, useful commands, etc.

## Setup
How to get first setup to modify server side code
