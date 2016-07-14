var view = {
	displayMessage: function(msg){
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");

	}
};

var model = {
	boardSize:7,
	numShips:3,
	shipSunk:0,
	shipLength:3,
	ships: [{ locations: ["06","16","26"], hits: ["","",""]},
			{ locations: ["24","34","54"], hits: ["","",""]},
			{ locations: ["23","33","43"], hits: ["","",""]}],
	fire: function(guess){
		for(var i=0;i<this.ships.length;i++){
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			if (index>=0){
				ship.hits[index]="hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");
				if(this.isSink(ship)){
					view.displayMessage("You sank my battleship!");
				}
				return true;
			}
			else{
				view.displayMiss(guess);
				view.displayMessage("MISS!");
			}
			return false;
		}
	},
	isSink: function(ship){
		for(var i=0;i<this.shipLength;i++){
			if (ship.hits[i]!="hit"){
				return false;
			}
		}
		return true;

	}
	};

	model.fire("16");
	model.fire("06");
	model.fire("66");


// view.displayHit("14");
// view.displayMiss("22");
// view.displayMessage("done");
