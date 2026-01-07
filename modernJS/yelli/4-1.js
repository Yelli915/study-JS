Num = parseInt(prompt("숫자를 입력하세요"))

function alerting(userNum){ 
	if (userNum != null){
		if (userNum > 0){
			alert("양수입니다")} 
		else if (userNum < 0){
			alert("음수입니다")} 
		else {
			alert("0입니다")
		}
    }}

alerting(Num);