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

## Development
How to develop the API, useful commands, etc.

## Setup
How to get first setup to modify server side code
