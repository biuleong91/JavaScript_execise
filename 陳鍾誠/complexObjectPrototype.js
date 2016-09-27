var Complex = function(r, i) {
    this.r = r;
    this.i = i;
};
Complex.prototype.add = function(c2) {
    return new Complex(this.r + c2.r, this.i + c2.i);
};
Complex.prototype.sub = function(c2) {
    return new Complex(this.r - c2.r, this.i - c2.i);
};
Complex.prototype.mul = function(c2) {
    return new Complex(this.r * c2.r - this.i * c2.i,
        this.r * c2.i + this.i * c2.r);
};
Complex.prototype.toString = function() {
    return this.r + "+" + this.i + "i";
};
var c = console;
var c1 = new Complex(1, 2),
    c2 = new Complex(2, 1);
var c3 = c1.add(c2).sub(c2).add(c2).sub(c2);
c.log("c1=%s", c1);
c.log("c2=%s", c2);
c.log("c1.add(c2)=%s", c1.add(c2));
c.log("c1.sub(c2)=%s", c1.sub(c2));
c.log("c1.mul(c2)=%s", c1.mul(c2));
c.log("c3=%s", c3);
