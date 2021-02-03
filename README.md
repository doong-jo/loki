# loki
> [API없이 프론트엔드 개발하기](https://medium.com/@sdong001_28201/api-%EC%97%86%EC%9D%B4-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0-89fdabceaa19)

[Korean / 한국어](https://github.com/doong-jo/loki/blob/master/README.ko.md)

A repository that implements a sustainable way for frontend development in the absence of API or unreliable response.

![intro](https://user-images.githubusercontent.com/22005861/94770280-2eaba500-03ef-11eb-9405-69b47a1e91f1.gif)

## Concept
![concept](https://user-images.githubusercontent.com/22005861/83355302-aa420a80-a399-11ea-885f-0a475628b8b7.jpeg)

>- [miragejs](https://miragejs.com/) is a library that helps you focus on frontend development regardless of API. API and DB can be defined directly in the front end, and API can be defined with less code.
>- mapper: Module that converts API response from actual screen / component to the required format

1. Use miragejs to run a mock api (not a real server) running on the client-side.
2. Model each API and DB (json) based on the screen.
3. Say goodbye to the backend and focus on front development.
4. Once API development and specification creation (from the API server) are complete, API integration begins.
    - Match the actual API response to the existing mock API response. → "Use mapper (implemented by the developer)"
    - When the API response is modified, only the mapper is modified.
    - If the API does not work, develop by running the existing mock api.
