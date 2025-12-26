const raffle = document.querySelector("#raffle");

raffle.addEventListener("click", (e) => {
  e.preventDefault();
  const seed = document.querySelector("#seed");
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");
  let answer = "";  //문자열 vs 배열 (join(""))
  let i = 0;  
  
  while(i < Number(total.value)) {  
    let total_result = Math.floor(Math.random() * Number(seed.value) + 1);  //0-1사이 난수 * 여기까지 수 (로서 구함)
    answer += `${total_result}번, `;  //배열 아니고, 문자열에도 적용 가능능
    i++;
  }
  
  result.innerText = `당첨자 : ${answer}`;  
  result.classList.add("show");
});