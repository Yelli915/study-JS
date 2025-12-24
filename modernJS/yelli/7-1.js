const btn = document.querySelector("form > button")
const userName = document.querySelector("#username")
const userMajor = document.querySelector("major")


btn.addEventListener("click",(e)=>{
	e.preventDefault();
	let tLine = document.querySelector("#attendant>tbody")
	let newTr = document.createElement("tr")

	let name = document.createElement("td")
	name.innerText = username.value;
	userName.value = ""; //이래야 입력칸이 다시 비어요

	let major = document.createElement("td")
	major.innerText = userMajor.value;
	userMajor.value = ""; //이래야 입력칸이 다시 비어요
	
	newTr.appendChild(name);
	newTr.appendChild(major);
	
	tLine.appendChild(newTr);

})