# counter-api
Against the apis.

[Korean, 한국어](https://github.com/doong-jo/counter-api/blob/master/README.ko.md)

## Concept
- [miragejs](https://miragejs.com/) is a library that helps you focus on frontend development regardless of API. API and DB can be defined directly in the front end, and API can be defined with less code.
- mapper: Module that converts API response from actual screen / component to the required format

1. Use miragejs to run a mock api (not a real server) running on the client-side.
2. Model each API and DB (json) based on the screen.
3. Say goodbye to the backend and focus on front development.
4. Once API development and specification creation (from the backend) are complete, API integration begins.
    - Match the actual API response to the existing mock API response. → [Use mapper](https://github.com/doong-jo/counter-api/tree/master/app/src/mapper).
    - When the API response is modified, only the mapper is modified.
    - If the API does not work, develop by running the existing mock api.
