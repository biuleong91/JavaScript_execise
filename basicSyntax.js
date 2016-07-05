
//Hello world
var message = "Howdy" + " " + "JavaScript\n";
console.log(message);

//Random number, get the number from 1 to 5 using the floor method
var rand = Math.floor(Math.random() * 5);

console.log("The random number is: " + rand + "\n");

//Function
function takeaway(a, b) {
    return c = a - b;
}

console.log("Subtraction method: " + takeaway(1, 3) + "\n");

//Array
var array01 = [0, 1, 2, 3, 4];
token = array01[2];
console.log("The index 2 of array01 is: " + token + "\n");

//Set values of array
array01[1] = 10;
console.log("Assign the new value(10) to the array01 at index 1: " + array01 + "\n");

//Get the length of array
numArray01 = array01.length;
console.log("The number of items of array01 is: " + numArray01 + "\n");

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var last = products.length - 1;
var recent = products[last]; //products[products.length-1]
console.log("The recent item of products is: " + recent + "\n");

//Various types in an array
var array02 = [1, 2, "abc", true];
console.log("A array of various types is : " + array02 + "\n");

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    			34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    			46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44
];
var costs = [0.25, 0.27, 0.25, 0.25, 0.25, 0.25,
			0.33, 0.31, 0.25, 0.29, 0.27, 0.22,
			0.31, 0.25, 0.25, 0.33, 0.21, 0.25,
			0.25, 0.25, 0.28, 0.25, 0.24, 0.22,
			0.20, 0.25, 0.30, 0.25, 0.24, 0.25,
			0.25, 0.25, 0.27, 0.25, 0.26, 0.29];

var bestSolutions = [];

var highestScore = 0;

//For loop
for (i = 0; i <= scores.length - 1; i++) {
    console.log("Bubble solution #" + i + ": " + scores[i]);
    if (true === findHigherScore(scores[i], highestScore)) {
        highestScore = scores[i];
    }
}

getBestSolutions(scores, bestSolutions);
var index = getMostCostEffectiveSolution(scores, costs, highestScore);

console.log("Bubbles test: " + scores.length);
console.log("Highest bubble scores: " + highestScore);
console.log("Solutoins with highest score: " + bestSolutions);
console.log("The most cost effective solution is: " +index+ " with the score of " + scores[index] +" and the cost of " + costs[index]);

function getBestSolutions(scores, bestSolutions) {
    for (i = 0; i <= scores.length - 1; i++) {
        if (highestScore == scores[i]) {
            bestSolutions.push(i);
        }
    }

}

function findHigherScore(num, highestScore) {
    if (highestScore <= num) {
        highestScore = num;
        return true;
    } else
        return false;
}

function getHighestScore(scores) {
    var highestScore = 0;

    for (var i = 0; i <= scores.length; i++) {
        if (scores[i] > highestScore)
            highestScore = scores[i];
    }
    return highestScore;
}

function getMostCostEffectiveSolution(scores, costs, highscore) {
    var cost = 100;
    var index;

    for (var i = 0; i <= scores.length; i++) {
        if (scores[i] == getHighestScore(scores))
            if (cost > costs[i]){
                index = i;
        		cost = costs[i];
        		}
    }
    return index;
}

//Object
var dog={
	name: "happy",
	age: 10,
	isMale: false,
	toSit: function(){
		console.log(this.name + " is sitting");
	}
};
console.log("Dog name: " + dog.name);

dog.name="Happy";
console.log("Dog name02: " + dog.name);

dog.weight=45;
console.log("Dog weight: " + dog.weight);

console.log("Dog isMale: " + dog.isMale);
delete dog.isMale;
console.log("Dog isMale: " + dog.isMale);
console.log(dog);

var dog2=dog;
console.log(dog2);
dog2.age=12;
console.log(dog);

for(var prop in dog){
	console.log(prop + ": " + dog[prop]);
}
dog.toSit();

// for(var prop in document){
// 	console.log(prop + ": " + document[prop]);
// }

var string01 = ["string"];
function func01(){
	return null;
}
var nullValue = null;
var notAssign;

console.log("The type of String01(Array): " + typeof string01);
console.log("The type of func01: " + typeof func01());
console.log("The type of nullValue(null): " + typeof nullValue);
console.log("The type of notAssign(nothing): " + typeof notAssign);
console.log("The type of __ (doesn't exist): " + typeof nothingAtAll);

myNum = "A";
console.log("tests var by isNAN(): "+isNaN(myNum));





