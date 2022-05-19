# Human scape

## 배포

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://app.netlify.com/sites/comfy-kitsune-a7c9f9/deploys)

## 기술 스택

Typescript, React, Redux, react-query

## 폴더 구조

```sh
HumanScape_1-main
├─ src
│  ├─ api
│  ├─ assets
│  ├─ components
│  ├─ modules
│  ├─ providers
│  ├─ styles
│  ├─ types
│  └─ utils
└────────────

```

- 구현한 방법과 이유, 어려웠던 점에 대한 간략한 내용 서술
- 누구나 따라 할 수 있을 정도의 자세한 실행 방법

## 실행방법

.env파일안에 있는 SECRET_KEY값을 변경

```sh
yarn && yarn start
```

## 구현한 방법

## Tab키로 이동 검색결과들 이동

## Debouncing을 활용한 검색 호출 최소화

- 유저가 키보드를 입력할때 마다 api를 호출하는것은 서버에 많은 부담을 주는것 같아 Debouncing 기법을 활용해 유저가 키보드에서 손을 땐 뒤 200ms 이후 서버로 요청이 가도록 구현했습니다.

## 로컬캐싱

- react-query를 활용해 데이터를 받아오는데 react-query unique한 키값을 기준으로 데이터를 캐싱합니다.
## 어려웠던 점
- 기존의 openAPI의 속도가 느려 input값을 받을 때 debounce걸게 되면 입력값이 들어가는 것이 delay가 걸려 API호출에 늦어지기 때문에 
API요청시에 Axios의 CancelToken을 이용하여 debounce를 구현했었습니다. 여러번 들어가는 요청을 취소 할 수 있었으나, 요청 자체가 줄어드는 것이 아니였기 때문에 input값을 변경할 때 debounce를 거는 것으로 변경했습니다.  

## 순서도

1. 유저가 검색(Search Bar의 input변경)
2. Debouncing을 활용해 입력이 200ms 초간 없으면 redux store의 searchString 변경
3. searchString이 변경되면서 useQuery의 키값이 변경되어 react-query가 새로운 api요청임을 인지하고 서버로 요청을 보냄,
4. 응답받은 값을 캐싱함 (이때 stale time이 infinity임으로 다시 이 검색어를 입력했을때 재검색하지 않고 원래 있던 데이터를 렌더링

![테스트](https://user-images.githubusercontent.com/46497281/169038287-83d13bf8-a774-4530-b678-1ebbe91f0861.gif)

![탭으로이동](https://user-images.githubusercontent.com/46497281/169039224-baaa03ca-7bac-46e2-9553-38d2f038942c.gif)
![클릭으로검색어선택](https://user-images.githubusercontent.com/46497281/169039306-5c863bcd-67f5-41c0-89a2-eaa88f773c70.gif)
![검색시연](https://user-images.githubusercontent.com/46497281/169039553-728ab224-27e3-4e73-86fc-8604c1e87f95.gif)
