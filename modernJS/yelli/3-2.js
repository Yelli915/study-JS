a = parseInt(prompt("1보다 큰 숫자를 입력하세요"))
arr = []

if (a!=null && a>1){
	if(a%2==0){
		for (i=0;i<a/2;i++){ 
			arr.push(a);
			document.write(`${a} ----- ${arr[i]}<br>`)}
	}
}

// a/2 : 반복문 돌리는 횟수에 해당