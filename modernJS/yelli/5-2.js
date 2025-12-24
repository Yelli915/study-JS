const num1Input = document.querySelector("#number1");
const num2Input = document.querySelector("#number2");
const resultText = document.querySelector("#result");
const btn = document.querySelector("#calc");

function getGCD(num1, num2) { //최대공약수만 구하는 함수수
  let max = num1 > num2 ? num1 : num2;
  let answer = 1;
  for (let i = 1; i <= max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      answer = i; 
    }
  }
  return answer;
}

btn.onclick = function() { //버튼 클릭에 따른 함수 실행
  const num1 = num1Input.value;
  const num2 = num2Input.value;
  if (num1 && num2) {
    const res = getGCD(Number(num1), Number(num2));
    resultText.innerText = res;
  }
}


// let num1 = document.querySelector("#number1").value;
// let num2 = document.querySelector("#number2").value;
// 페이지 로드 시점에 value 읽어 빈 문자열 저장되는 문제점점

// let resultText = document.querySelector("#result");
// const btn = document.querySelector("#calc");

//   function getGCD(num1, num2) {
//     let answer = 1;
//     for (let i = 1; i <= num2; i++) {
//       if (num2 % i == 0 && num1 % i == 0) {
//         answer = i; 
//       }
//     }
    
//     return answer;
//   }
  
//   if (num1 && num2) {
//     let res = getGCD(num1, num2);
//     resultText.innerText = `${res}`
//   }


// btn.onclick = getGCD(num1, num2); //버튼 클릭시 호출 결과를 할당하는 문제제