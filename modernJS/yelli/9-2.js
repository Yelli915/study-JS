class Cat extends Pet { 
	constructor(name, color, breed){
		super(name, color);
		this.breed = breed;
	}
	viewInfo = function(){
		alert(`${this.name}, ${this.color}, ${this.breed} `);
	}
}

const cat1 = new Cat("steven","black","koreanShortHair")
console.log(cat1.viewInfo())