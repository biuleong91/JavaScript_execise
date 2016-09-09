var bday = new Date();
console.log(bday);

var serials=new Array(3);
console.log(serials);
serials[1]=2;
serials[2]=2;
serials[3]=2;
console.log(serials);
console.log(serials.length);

console.log(serials.every(function(x){
    return (x%2==0);
}));