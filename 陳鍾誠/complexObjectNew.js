function createComplex(r,i){
	this.r = r;
	this.i = i;
	this.add = function(c2){
		console.log("%s+%si", this.r+c2.r,this.i+c2.i);
	};
}

var c1 =new createComplex(1,2);
var c2 =new createComplex(3,4);
c1.add(c2);