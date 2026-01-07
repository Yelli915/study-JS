function showData(name,age){
    alert(name + "님의 나이는 " + age + "살입니다.");
}

function getData(callback){ //인수를 받아 매개변수에 대입
    // 해당 함수 내부에서 callback = showData가 됨 
    let userName = prompt("이름을 입력하세요");
    let userAge = prompt("나이를 입력하세요");
    callback(userName,userAge); //showData(userName, userAge)와 동일일)
}

getData(showData); //함수 호출 with 인수

/*
1. getData(showData) 호출
   ↓
2. showData (인수) → callback (매개변수)에 전달
   ↓
3. getData 내부에서:
   - userName = "홍길동" 입력받음
   - userAge = "25" 입력받음
   ↓
4. callback(userName, userAge) 실행
   → callback은 showData이므로
   → showData("홍길동", "25") 실행
   ↓
5. alert("홍길동님의 나이는 25살입니다.") 출력

[ 핵심 ]
함수도 값: showData는 함수 객체이므로 변수에 저장하거나 전달할 수 있습니다.
참조 전달: showData를 전달하면 함수 자체가 아니라 함수의 참조(주소)가 전달됩니다.
이름은 중요하지 않음: callback이라는 이름이지만 실제로는 showData를 가리킵니다.

*/