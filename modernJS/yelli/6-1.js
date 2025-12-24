const picture = document.querySelector("#container > img")
picture.addEventListener("mouseover",function(){
	picture.src = "~"
})
picture.addEventListener("mouseout",function(){
	picture.src = "~~"
})