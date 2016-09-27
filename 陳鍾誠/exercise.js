var sum = 1;
var i = 10;
while (i >= 1) {
    sum = sum * i;
    i--;
}

function fac(i){
	if(i===1) return 1;
	else return i*fac(i-1);
}
console.log(fac(10));

console.log(sum);
var str="";
for(var i=1;i<=10;i++){
	for(var j=1;j<=10;j++){
		str = str + " " + i*j;
	}
	console.log(str);
	var str="";
}

