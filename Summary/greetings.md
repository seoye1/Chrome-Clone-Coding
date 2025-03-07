## Overview
로그인 창 만들기

### Built with
- HTML, CSS, JavaScript
- local storage API

## What I learned

### ✅ console.dir(요소);

요소에 어떤 속성이 있는지 알아볼 때 사용함.

### ✅ required

값이 비어 있으면 제출 불가

### ✅ maxlength

입력 가능한 최대 문자 수 제한

### ✅ placeholder

입력 전 힌트 텍스트 표시

### ✅ input의 유효성 검사 하기 위해선 **input이 form 안에 있어야 한다.**

- input을 form 안에 넣었을 경우, enter 치면 웹사이트 새로고침됨. → form을 submit하면 새로고침 되는 게 기본 동작이기 때문.

### ✅ submit해도 새로고침 되지 않게 하는 법

<span style="background-color:#fff5b1">preventDefault()</span>: 기본 이벤트 동작을 막는 메서드

```JavaScript
// ex
function onLoginSubmit(event){ // event: 방금 일어난 event에 대한 정보가 담겨 있음.
    event.preventDefault(); // 기본 제출 동작(새로고침)을 막음
}

loginForm.addEventListener('submit', onLoginSubmit);
```

- 모든 EvenetListener function의 **첫 번째 인자**는 항상 **방금 일어난 event 객체**에 대한 정보를 제공

### ✅ classList

요소의 클래스 목록을 관리하는 객체

주요 메서드
- add(className) : 클래스 추가
- remove(className) : 클래스 제거
- toggle(className) : 클래스가 있으면 제거, 없으면 추가
- contains(className) : 해당 클래스가 있는지 확인 (boolean 반환)

```JavaScript
//ex
const element = document.querySelector("#myElement")
element.classList.add("active") // 클래스 추가
```
### ✅ innerText
요소의 텍스트 콘텐츠를 읽거나 수정하는 속성
```JavaScript
//ex
greeting.innerText = `Hello ${username}`;
```
### ✅ local storage API
- setItem(key, value) : 로컬 스토리지에 데이터를 저장하는 메서드
브라우저를 닫거나 새로고침해도 데이터가 유지됨
사용자 정보를 저장하거나, 설정값을 유지할 때 유용

- setItem(key, value): 로컬 스토리지에 데이터를  저장
- getItem(key): 로컬 스토리지에서 데이터를 읽음
- removeItem(key): 로컬 스토리지에서 데이터를 삭제

```JavaScript
// ex
localStorage.setItem("animal", "dog"); 
//animal이라는 "key"에 "dog"라는 값 저장
```
key: 저장할 데이터의 이름 (문자열)
value: 저장할 데이터의 값 (문자열로 변환 가능)

### ✅ 생성한 변수명이 반복 사용될 경우, 대문자 변수로 저장하는 게 좋다(관습)


