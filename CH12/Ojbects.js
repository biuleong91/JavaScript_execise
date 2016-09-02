function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 20)
            console.log(this.name + " Woof");
        else
            console.log(this.name + " Miao");
    };
}


var happy = new Cat("Happy", "Golden", 22);
var lucky = new Cat("Lucky", "Kurl", 10);
var cats = [happy, lucky];

for (var i = 0; i < cats.length; i++) {
    cats[i].bark();
}

function Coffee(params) {
    this.roast = params.roast;
    this.ounces = params.ounces;
    this.size = function() {
        var msg1 = "You've ordered a ";
        var msg2 = " House Blend coffce.";

        if (this.ounces <= 8)
            return msg1 + "small" + msg2;
        else if (this.ounces > 8 && this.ounces < 16)
            return msg1 + "medium" + msg2;
        else
            return msg1 + "large" + msg2;

    };
}

var clientParams = {
    roast: "4",
    ounces: 11
};

// var client1 = new Coffee("1", 0);
// var client2 = new Coffee("2", 10);
// var client3 = new Coffee("3", 19);
var client4 = new Coffee(clientParams);
var clients = [client4];

for (var i = 0; i < clients.length; i++) {
    console.log(clients[i].roast + " " + clients[i].size());
}

if(client4 instanceof Coffee){
    console.log("Client4 is a kind of Coffee");
}