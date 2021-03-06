# loki
API가 존재하지 않거나 응답을 신뢰할 수 없는 상황에서 프론트엔드 개발이 지속 가능한 방법을 제공합니다.


## Concept
![concept](https://user-images.githubusercontent.com/22005861/83355302-aa420a80-a399-11ea-885f-0a475628b8b7.jpeg)

>- miragejs는 API와 상관없이 프론트엔드 개발에 집중할 수 있도록 도와주는 라이브러리입니다. API, DB를 프론트엔드 내에서 직접 정의할 수 있으며 적은 코드로 API를 정의할 수 있습니다.
>- mapper: API 응답을 실제 화면/컴포넌트에서 필요한 형식으로 변환해주는 모듈

1. miragejs를 이용하여 client-side에서 실행되는 (실제 서버는 아닌)mock api를 실행한다.
2. 화면을 기준으로 각 API와 DB(json)를 모델링한다.
3. 백엔드와 작별인사하고 프론트 개발에 집중한다.
4. (백엔드에서)API 개발과 명세 작성이 완료되면, API 연동을 시작한다.
    - 실제 API응답을 기존 mock API 응답에 맞춘다. → mapper를 사용한다.
    - API 응답 수정이 이루어지면 mapper만 수정한다.
    - API가 동작하지 않을 경우 기존에 작성한 mock api를 실행하여 개발한다.
