var message = "Howdy" + " " + "JavaScript\n";
console.log(message);

var rand = Math.floor(Math.random() * 5);

console.log("The random number is: " + rand + "\n");

function takeaway(a, b) {
    return c =a - b;
}

console.log("Subtraction method: " + takeaway(1,3)+ "\n");

var array01 = [0,1,2,3,4];
token = array01[2];
console.log("The index 2 of array01 is: " + token+ "\n");

array01[1] = 10;
console.log("Assign the new value(10) to the array01 at index 1: " + array01+ "\n");

numArray01=array01.length;
console.log("The number of items of array01 is: " + numArray01+ "\n");

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var last = products.length-1;
var recent = products[last];	//products[products.length-1]
console.log("The recent item of products is: " + recent+ "\n");

var array02 = [1,2,"abc",true];
console.log("A array of various types is : " + array02+ "\n");

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


var markBubbles=[];

var maxNum=0;

for(i=0;i<=scores.length-1;i++){
	console.log("Bubble solution #" + i + ": " + scores[i]);
	if(true===findMaxNum(scores[i],maxNum)){
	maxNum=scores[i];
	}
}
for(i=0;i<=scores.length-1;i++){
	if(maxNum==scores[i]){
		markBubbles=markBubbles.concat(i);
	}
}

console.log("Bubbles test: " + scores.length);
console.log("Highest bubble scores: " + maxNum);
console.log("Solutoins with highest score: " + markBubbles);

function findMaxNum(num, maxNum){
	if (maxNum <= num){
		maxNum=num;
		return true;
	}else
	return false;
}

