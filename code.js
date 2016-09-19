function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

Person.prototype.nationality = "English";
myFather.gender="male";



console.log(myFather.constructor);
console.log(myFather.nationality);
console.log(myFather.hasOwnProperty("gender"));
