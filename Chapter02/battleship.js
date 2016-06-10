var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (!isSunk) {
    guess = prompt("Ready, aim, fire!! (enter a number 0-6): ");
    if (guess < 0 || guess > 6) {
        alert("Enter a valiid number between 0 and 6.");
    } else if (null == guess) { alert("End the game. ")} else {
        if (location3 == guess || location2 == guess || location1 == guess) {
            hits = hits + 1;
            if (3 == hits) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else  alert("MISS");
    }

    guesses = guesses + 1;
}
var stats = "You took  " + guesses + " guesses to sink  the battleship, " + "which means your shooting accuracy is " + 3 / guesses * 100 + "%.";
console.log(stats);
alert(stats);
alert("The location of the battleship was: " + location1 + ", " + location2 + ", " + location3);
