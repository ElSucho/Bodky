function bodky(canvas, enabled, homeDir) {

	this.act = new Activity(canvas, enabled);

	this.act.onDragDrop = function(sprite) {
    	var ciel = sprite.findOverlapped(ciele);
        sprite.placeAt(ciel);
        //document.getElementById("vypis").innerHTML = this.getResult();
    }



	var cesta = homeDir;
	var pozadie = new Sprite(this.act, cesta + "sipky.png", 100, 100);
	var x = 230;
    var y = 70;
	
    ciele = []
    j = 0
    for (var i = 0; i < 24; i++) {
        if (j == 11){
            y = 130
            j = 0
        }
		ciele[j] = new Sprite(this.act, cesta + "prazdna.png", x + j * 50, y);
        j++;
	}


	for (var i = 0; i < 6; i++) {
		
		if (j == 3){
			y2 = y2 + 110
			j = 0
		}
		var kar = new Sprite(this.act, cesta + usporiadanie[i] + ".png",
		100 + j * x, y2, dragSprite);
		kar.name = usporiadanie[i];
		j += 1;
	}	

};