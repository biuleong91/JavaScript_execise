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
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] }
        // { locations: ["23", "33", "43"], hits: ["", "", ""] }
    ],
    fire: function(guess) {
        for (var i = 0; i < this.ships.length; i++) {
            var ship = this.ships[i];

            console.log("ships.length: " + this.ships.length);
            console.log("i: " + i + " : " + ship.locations);

            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSink(ship)) {
                    this.shipSunk++;
                    view.displayMessage("You sank my battleship!");
                }
                return true;
            } else {
                view.displayMiss(guess);
                view.displayMessage("MISS!");
            }
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

    }
};



var controller = {
    guesses: 0,
    process: function(guess) {
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
// view.displayHit("14");
// view.displayMiss("22");
// view.displayMessage("done");
// ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
//     { locations: ["24", "34", "44"], hits: ["", "", ""] },
//     { locations: ["23", "33", "43"], hits: ["", "", ""] }
model.fire(parseGuess("A6"));
model.fire(parseGuess("B6"));
model.fire(parseGuess("C6"));
model.fire(parseGuess("C4"));
model.fire(parseGuess("D4"));
model.fire(parseGuess("E4"));
