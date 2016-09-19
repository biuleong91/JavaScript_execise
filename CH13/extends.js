//The dog object
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

//The dog object's prototype, other objects inheriting form the dog constructor will get this function
Dog.prototype.bark = function() {
    console.log("WOOF");
};

function ShowDog(name, breed, weight, handler) {
    Dog.call(this,name,breed,weight);        //reuse the ancestor the dog constructor code to process...
                                            // don't forget the this keyword
    this.handler = handler;
}

//The ShowDog object inherit from the Dog object
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor=ShowDog;  //Set up the showDog constructor explicitly
ShowDog.prototype.league = "Webville";  //The league property is owned by ShowDog
ShowDog.prototype.stack = function() {  //The stack function is owned by ShowDog
    console.log("Stack");
};
ShowDog.prototype.bait = function() {
    console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
    console.log("Groom");
};
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

console.log(scotty.name);
console.log(scotty.league);
scotty.bark();
scotty.gait("Walk");


var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);
