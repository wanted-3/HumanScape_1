# Human scape

## 배포

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://app.netlify.com/sites/comfy-kitsune-a7c9f9/deploys)

<br/>

## 기술 스택
|||||
|:---:|:---:|:---:|:---:|
|<img src="https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white%22%3E" alt="typescript"/>|<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black%22/%3E" alt="react"/>|<img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white%22/%3E" alt="redux"/>|<img src="https://img.shields.io/badge/react_query-CA4245.svg?style=for-the-badge&logo=reactquery&logoColor=white%22%3E" alt="react-query"/>|

<br/>

## 폴더 구조

```sh
src
│  
├─ api  # api 폴더
├─ assets  # 이미지 파일(svg)을 모아놓은 폴더
├─ components  # 컴포넌트를 모아놓은 폴더
│     ├─ SearchBar  # 검색어 input창
│     ├─ SearchList  # 검색어 list창
│     └─ SearchListItem  # 검색어 개별 item
├─ modules
│     ├─ axios  # 비동기 axios 통신
│     ├─ reactQuery  # react-qeury 설정 (ex. queyrClient)
│     └─ redux  # redux 설정 (ex. slice, store)
├─ providers  # react-query, redux Provider
├─ styles  # CSS 스타일을 위한 폴더
├─ types  # Typescript 정의 파일
└─ utils  # 디바운싱 유틸기능을 넣은 폴더

```
<br/>

## 진행과정
**기간 : 5월 18일 ~ 20일**

1일) 과제 요구사항 확인 및 설계 논의   
2일) UI - 검색기능 - 상태값 관리 - 쿼리와 디바운싱 - highlight 등의 기능 구현 및 배포   
3일) 리팩토링 및 퍼지 문자열 재도전 및 readme 작성   


<br/><br/>

## 순서도

1. 유저가 검색 (Search Bar의 input변경하고 inputString 저장)
2. Debouncing을 활용해 입력이 200ms 초간 없으면 redux store의 searchString 변경
3. searchString이 변경되면서 useQuery의 키 값이 변경되어 react-query가 새로운 api요청임을 인지하고 서버로 요청을 보냄
4. 응답받은 값을 캐싱함 (이때 stale time이 infinity임으로 다시 이 검색어를 입력했을때 재검색하지 않고 원래 있던 데이터를 렌더링해서 보여줌)

<br/>


## 실행방법  

### 1. 프로젝트 받아오기

```
git clone https://github.com/wanted-3/HumanScape_1.git
```
### 2. 설치  

```sh
yarn install -g && yarn start
```
yarn을 이용하여 프로젝트를 설치한다

```
//.env

REACT_APP_SECRET_KEY= <고유의 key값>
```
.env파일에 [공공API](https://www.data.go.kr/data/15001675/openapi.do)에서 받은 API_KEY를 입력한다

검색어를 입력하면 [공공API](https://www.data.go.kr/data/15001675/openapi.do)의 데이터를 불러오게 된다
<br/>

### 3. 작동방법  
<br/>

|검색어 클릭|키보드 이동|
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/46497281/169039306-5c863bcd-67f5-41c0-89a2-eaa88f773c70.gif" width="310px" alt="클릭으로 검색어 선택">|<img src="https://user-images.githubusercontent.com/46497281/169039224-baaa03ca-7bac-46e2-9553-38d2f038942c.gif" width="310px" alt="탭으로 이동">|

1. 기본적으로 마우스로 이동하며, 탭(Tab)을 1번 누르면 검색 버튼으로 이동한다  

2. 위 단계에서 탭을 1번 더 누르면 리스트로 이동한다  
리스트로 이동 후 탭을 통해 지속적으로 이동할 수 있다  
<br/><br/>


## 구현한 방법

### Debouncing기법과 redux, react-query를 활용한 검색 호출 최소화

- 유저가 키보드를 입력할때 마다 api를 호출하는것은 서버에 많은 부담을 주는것 같아 **Debouncing** 기법을 활용해 유저가 키보드에서 입력이 없다면 200ms 이후 서버로 요청이 가도록 구현했습니다.

- **redux**를 활용해서 검색 input의 value의 즉각적인 처리를 하는 상태값과 react-query의 키와 연동되어 디바운싱 하는 상태값을 전역적으로 관리해주었습니다.


### 로컬캐싱

- **react-query**를 활용하여 데이터를 받아오는데 react-query unique한 키값을 기준으로 데이터를 캐싱합니다.

- staleTime과 cacheTime을 활용해서 신선도를 유지하고 받아온 데이터를 기억하여 서버로 호출 빈도를 낮추었습니다.

### Tab키로 이동, highlight 기능

- Tab키를 사용하여 키보드를 통해 사용할 수 있게 만들었으며, 검색하는 특정 단어에 맞추어 highlight되는 기능을 구현했으며 netlify를 통해 배포하였습니다.
<br/>

### 스택 구현 이유

원티드 과정을 통해 배우게 된 redux, react-query와 netlify 등을 프로젝트 단계에서 사용해보기 위해 결정했으며 redux의 미들웨어를 활용해서 비동기 작업을 일원화 하는 것보다 API 호출의 빈도를 낮추는 것이 이번 과제의 핵심이었기에 react-query를 이용한 캐시타임을 이용하는 것으로 결정했습니다.

<br/>

## 구현할 때 어려운 점
처음 배우는 새로운 스택들(ex. reqact-query ...)로 프로젝트에 바로 사용하려는 점이 까다로웠습니다.

### 퍼지문자열

영어가 아닌 한글은 초성,중성,종성으로 판단하여 검색기능을 구현해야했기에 어려웠습니다. 또한 'ㄱ'을 검색하면 ㄱ을 포함하는 API의 범위를 어디까지 호출해야하는지 등의 파생되는 많은 문제가 있었기에 어려웠습니다.

### api 호출 취소
기존의 openAPI의 속도가 느려 input값을 받을 때 debounce걸게 되면 입력값이 들어가는 것이 delay가 걸려 API호출에 늦어지기 때문에 
API요청시에 Axios의 CancelToken을 이용하여 debounce를 구현했었습니다. 여러번 들어가는 요청을 취소 할 수 있었으나, 요청 자체가 줄어드는 것이 아니였기 때문에 input값을 변경할 때 debounce를 거는 것으로 변경했습니다.  

<br/><br/>
