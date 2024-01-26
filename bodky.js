function bodky(canvas, enabled, homeDir) {

	this.act = new Activity(canvas, enabled);

	this.act.onDragDrop = function(sprite) {
    	var ciel = sprite.findOverlapped(ciele);
        sprite.placeAt(ciel);
        //document.getElementById("vypis").innerHTML = this.getResult();
    }


	this.act.onClick = function(sprite) {
		if (lastBodka == null){
			lastBodka = sprite
			console.log(lastBodka)
		} else {
			console.log(lastBodka);
			var ciara = new Sprite(this.act, cesta + "vodo.png", lastBodka.name.split(";")[0], lastBodka.name.split(";")[1]);
			lastBodka = sprite;
		}
	}


	var velkost = 7;
	var cesta = homeDir;
	var x = 60;
    var y = 40;
	var y2 = 120;
	var lastBodka = null
	
    ciele = []
    j = 0
    for (var i = 0; i < 24; i++) {
        if (j == 12){
            y = y + 60;
            j = 0
        }
		ciele[j] = new Sprite(this.act, cesta + "prazdna.png", x + j * 50, y);
        j++;
	}

	j = 0;
	var bodky = []
	var rad = []
	for (var i = 0; i < velkost * velkost; i++) {
		
		if (j % velkost == 0){
			y2 = y2 + 70
			j = 0
			if (rad.length > 0)
			bodky.push(rad)
			rad = []
		}
		var bodka = new Sprite(this.act, cesta + "bodka.png",
		100 + j * x, y2, clickSprite);
		bodka.name = 100+j*x + ";" + y2;
		rad.push(bodka);
		j += 1;
	}
	bodky.push(rad);
	console.log(bodky);

};