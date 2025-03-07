const API_KEY = "61d89754a03951cee0afe40b2cccce27";

function onGeoOk(position){ // 사용자의 현재 위치(위도, 경도) 를 가져오는 함수.
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // 위도 경도 api
  // units=metric 옵션을 추가해 섭씨 온도(°C) 로 데이터를 받음
  fetch(url).then((response )=> response.json())
      .then((data)=>{
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;
        // 도시 이름, 날씨 상태, 현재 온도 표시
  });
  /* fetch(url): API 요청을 보내서 날씨 데이터를 받아옴.
.then(response => response.json()): 받은 응답을 JSON 형식으로 변환.
.then((data) => { ... }): 변환된 데이터를 이용해 HTML에 표시. */

}

function onGeoError(){ // 위치 가져오기 실패 시
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);