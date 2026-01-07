class Pet { 
	constructor(name, color){
		this.name = name;
		this.color = color;}
	run = function(){
		alert(`${this.name} is running`);
	}
}

dog = new Pet("dog", "black");
dog.run();