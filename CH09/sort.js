var numbersArray = [60, 50, 62, 58, 54, 54];
var alphabetArray = ["Dog","Cat","Ear","As","Ben","B"];

var objArray = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

objArray.sort(compareObjectBysold);

numbersArray.sort();
numbersArray.reverse();

alphabetArray.sort();
alphabetArray.reverse();

console.log(numbersArray);
console.log(alphabetArray);

console.log(objArray);

function compareNumbers(num1, num2) {
if (num1 > num2) {
return 1;
} else{
return 0;
}
}

function compareObjectBysold(obj1, obj2) {
	return obj1.sold - obj2.sold;
}

function compareObjectByName(obj1, obj2) {
if (obj1.name > obj2.name) {
return 1;
} else{
return 0;
}
}