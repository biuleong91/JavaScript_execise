function Dog(name,weight,breed){
	this.name = name;
	this.weight = weight;
	this.breed = breed;
}

Dog.prototype.species = "canine";
Dog.prototype.bark = function(){
	if (this.weight>20){
		console.log(this.name + " says WOOF");
		}else 
			console.log(this.name + " says yip");
};

var dog1 = new Dog("dog1",21,"A");
var dog2 = new Dog("dog2",11,"B");
var dogs = [dog1,dog2];

dog2.bark = function(){
 console.log(this.name + " says Woof");
};


dog1.bark();
dog2.bark();

Dog.prototype.sit = function(){
	console.log(this.name + " is sitting");
};
dog2.sit();