const year = document.querySelector("#year");
const month = document.querySelector("#month");
const date = document.querySelector("#date");
const bttn = document.querySelector("#bttn");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");

const today = new Date();

bttn.addEventListener("click", () => {
  const birthDay = new Date(year.value, month.value - 1, date.value);
  //값을 가져와서 Date객체 인스턴스화필요함

  const result = today.getTime() - birthDay.getTime(); // 오늘 날짜와 생일 날짜의 차이를 밀리초로 계산
  const day_as = Math.floor(result / (1000 * 60 * 60 * 24));
  const hours_as = Math.floor(result / (1000 * 60 * 60));
  
  days.innerText = `날짜로는 ${day_as} 일이 흐르고, `;
  hours.innerText = `시간으로는 ${hours_as} 시간이 흘렀습니다.`;
  
  year.value = "";
  month.value = "";
  date.value = "";
});