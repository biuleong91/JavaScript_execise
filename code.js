function addN(n) {
var adder = function(x) {
return n + x;
};
console.log(adder);
return adder;
}

console.log(addN(2));