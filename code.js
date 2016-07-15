    var init={
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] }
        // { locations: ["23", "33", "43"], hits: ["", "", ""] }
    ],

    print: function(){
    	for(var i = 0; i<this.ships.length;i++)
    	console.log(this.ships[i]);
    }
    };

    init.print();

    var s = [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] }];
        a = s[0].locations;
        console.log(a);