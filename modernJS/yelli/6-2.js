const btn = document.querySelector("#bttn");
const navi = document.querySelector("#nav");


btn.addEventListner("click",function(){
	navi.classList.toggle("active");
	btn.classList.toggle("active")
})