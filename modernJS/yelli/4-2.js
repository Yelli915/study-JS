let input1 = prompt("첫 번째 수를 입력하세요");
let input2 = prompt("두 번째 수를 입력하세요");
let a = parseInt(input1);
let b = parseInt(input2);

let num1, num2;

if (a > b) {
	num1 = a; 
	num2 = b;  
}
else if (a < b) {
	num1 = b;  
	num2 = a; 
}
else {
	alert("두 수가 같습니다. 최대공약수: " + a);
}

function abc(num1, num2) {
	let answer = 1;
	for (let i = 1; i <= num2; i++) {
		if (num2 % i == 0 && num1 % i == 0) {
			answer = i; 
		}
	}
	
	return answer;
}

if (num1 && num2) {
	let result = abc(num1, num2);
	alert("최대공약수: " + result);
}

// 1부터 키우면서 공통으로 나눠지는 수 찾기 - 나올 값 <- 함수 넣은 것임