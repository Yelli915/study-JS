let arr = [1,3,5,7,9,11,16,15,17,19];
let arrNew = [];
for (i=0;i<arr.length;i++){
	if(arr[i]>10){
	arrNew.push(arr[i]);
}	
return arrNew;
}
document.write(arrNew);