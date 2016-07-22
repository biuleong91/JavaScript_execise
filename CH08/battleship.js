var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");

    }
};

var model = {
    boardSize: 7,
    numShips: 3,
    shipSunk: 0,
    shipLength: 3,
    ships: [{ locations: ["", "", ""], hits: ["", "", ""] },
        { locations: ["", "", ""], hits: ["", "", ""] },
        { locations: ["", "", ""], hits: ["", "", ""] }
    ],
    RecordCorrectGuess: [],

    fire: function(guess) {
        for (var i = 0; i < this.ships.length; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                if (!this.checkHitRecord(guess)) {
                    console.log("Check hit records: " + this.RecordCorrectGuess + " Result: " + this.checkHitRecord(guess));
                    ship.hits[index] = "hit";
                    view.displayHit(guess);
                    view.displayMessage("HIT!");
                    this.RecordCorrectGuess.push(guess);
                    if (this.isSink(ship)) {
                        this.shipSunk++;
                        view.displayMessage("You sank my battleship!");
                    }
                    return true;
                } else {
                    view.displayHit(guess);
                    view.displayMessage("Replicate!");
                    return false;
                }
            } else {
                    console.log(index);
                    view.displayMiss(guess);
                    view.displayMessage("MISS!");
            }
        }
        return false;
    },
    checkHitRecord: function(guess) {
            if ((this.RecordCorrectGuess.indexOf(guess)) > -1){
                console.log(this.RecordCorrectGuess);
                return true;
        }
        return false;
    },
    isSink: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] != "hit") {
                return false;
            }
        }
        return true;
    },
    generateLocation: function() {
        var row, column;
        var newShipLocation = [];
        for (var j = 0; j < this.numShips; j++) {
            console.log("Creating the " + j + "th ship: ");
            do {
                newShipLocation = [];
                var direction = Math.floor(Math.random() * 2);

                if (0 === direction) {
                    row = Math.floor((Math.random() * this.boardSize));
                    column = Math.floor((Math.random() * (this.boardSize - this.shipLength)));
                    for (var i = 0; i < this.shipLength; i++) {
                        newShipLocation.push((row + "" + (column + i)));

                    }
                } else {
                    column = Math.floor((Math.random() * this.boardSize));
                    row = Math.floor((Math.random() * (this.boardSize - this.shipLength)));
                    for (var i = 0; i < this.shipLength; i++) {
                        newShipLocation.push(((row + i) + "" + column));
                    }


                }
            } while (model.collision(newShipLocation));
            this.ships[j].locations = newShipLocation;
        }
    },

    collision: function(newShipLocation) {
        console.log("Collision occured");
        for (var j = 0; j < this.numShips; j++) {
            for (var i = 0; i < this.shipLength; i++) {
                if (-1 < this.ships[j].locations.indexOf(newShipLocation[i]))
                    return true;
            }

        }
        return false;
    },
    printShips: function() {
        for (var i = 0; i < this.numShips; i++)
            console.log(this.ships[i].locations);
    }
};

var controller = {
    guesses: 0,
    processGuess: function(guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipSunk === model.numShips) {
                view.displayMessage("You sank all my battleships in " + this.guesses + " guesses");
            }
        }
    }
};

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize ||
            column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}

function init() {
    model.generateLocation();
    model.printShips();
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    document.getElementById("guessInput").onkeypress = handleKeyPress;
}

function handleKeyPress(e) {
    if (e.keyCode === 13) {
        document.getElementById("fireButton").click();
        return false;
    }
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}
window.onload = init;
// view.displayHit("14");
// view.displayMiss("22");
// view.displayMessage("done");
// ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
//     { locations: ["24", "34", "44"], hits: ["", "", ""] },
//     { locations: ["23", "33", "43"], hits: ["", "", ""] }
