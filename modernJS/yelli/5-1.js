const detail = document.querySelector("#detail")
const btn = document.querySelector("#view")

btn.addEventListener("click",function(){
	detail.classList.toggle("hidden")
})