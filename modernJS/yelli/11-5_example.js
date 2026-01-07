button.addEventListener('click',()=>{
    let current = gyeonggang.next();
    if(current.done !== true){
        result.innerHTML = current.value;
    }
    else{
        result.innerHTML = "종점!";
        button.setAttribute("disabled", "disabled");
    }
});

/*왜 "disabled"를 두 번?
HTML 표준 관례: 불리언 속성은 보통 속성 이름과 같은 값을 사용합니다.
명확성: 값이 있어야 속성이 활성화됨을 명확히 합니다.*/  