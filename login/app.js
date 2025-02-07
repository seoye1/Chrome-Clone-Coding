const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// 생성한 변수명이 반복 사용될 경우, 대문자 변수로 저장하는 관습
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { // savedUsername == null일 경우 실행됨.
    event.preventDefault(); // 폼 제출로 인한 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value); // 키, 값 저장
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME); // 그리팅 보이게 하기
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){ // 유저 정보가 로컬스토리지에 없을 경우
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼 보이게 하기
    loginForm.addEventListener('submit', onLoginSubmit);
} else{ // 유저 정보가 로컬스토리지에 있을 경우
    // show the greeting
    paintGreetings();
}