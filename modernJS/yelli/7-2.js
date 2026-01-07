const btn = document.querySelector("#bttn");
const noti = document.querySelector("#noti-box")

btn.addEventListener("click",()=>{
	const mes = document.createElement("div")
	mes.classList.add("noti")
	mes.innerText = "알림내용이 표시됩니다";
	noti.appendChild(mes)

	setTimeout(()=>{
	noti.remove();
    },3000)

});

/*
const noti = document.createElement('div');
noti.classList.add('noti');
const textNode = document.createTextNode("알림 내용이 표시됩니다.");
noti.appendChild(textNode);
notiBox.appendChild(noti);

그리고 계속 이어 붙이기도 가능

*/