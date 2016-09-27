var a = 1,
    b = 10;
var array01 = [1, 5, 7];
var array02 = ['a','d','k'];

function randSelect(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randSelect2(array){
	return array[randInt(0,array.length)];
}

function randInt(a, b) {
   return Math.floor(a + Math.random() * (b - a));
}

//%j: array, %d: int, %s: sting
console.log("select a number in the array %j randomly: %d ",array01, randSelect(array01));
console.log("select a number in the array %j randomly: %s ",array02, randSelect2(array02));
// randInt(a, b);
