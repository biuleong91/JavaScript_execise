var count = 0; //Global variable

function counter() {
    count = count + 1;
    return count;
}

// Demonstration of closure

function makeCounter1() {
    var count = 0; //Free varible inside a closure. This advantage is that won't clash with other code

    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}
var doCount1 = makeCounter1();
console.log(doCount1());
console.log(doCount1());
console.log("=============");

//Return function
function makeCounter2() {
    var count = 0;
    return function counter() {
        return ++count;
    };
}
var doCount2 = makeCounter2();
console.log(doCount2());
console.log(doCount2());
console.log("=============");

//Return object
function makeCounter3() {
    var count = 0;
    return {
        Increment: function() {
            return ++count;
        }
    };
}
var doCount3 = makeCounter3();
console.log(doCount3.Increment());
console.log(doCount3.Increment());
console.log("=============");

//Multiple
function multN(n) {
    return function multBy(m) {
        return n * m;
    };
}
var multBy3 = multN(3);
console.log(multBy3(2));
console.log(multBy3(3));

console.log("=============");
function makePassword(password){
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    };
}
var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));


function alert(msg){
	console.log("simulation alert: " + msg);
}
function makeTimerMassage(msg,n){
	setTimeout(function(){alert(msg);},n);
	msg="show up again";
}
var msg="show up";
makeTimerMassage(msg,500);
setTimeout(function(){(alert(msg));},1000);
