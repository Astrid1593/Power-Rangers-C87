var canvas = new fabric.Canvas("myCanvas");
var x = 5;
var y = 5;
var width = 200;
var height = 400;
function upload(getIMG){
	fabric.Image.fromURL(getIMG, function(Img){
		var objectIMG = Img;
		objectIMG.scaleToWidth(width);
		objectIMG.scaleToHeight(height);
		objectIMG.set({
			left: x, top: y
		});
		canvas.add(objectIMG);
	});
}
window.addEventListener("keydown", keyDown);
function keyDown(e){
	var keyPressed = e.keyCode;
	//R key red power ranger
	if(keyPressed == "82"){
		console.log("Red Power Ranger!");
		upload("rr1.png");
		x = 50;
	}
	//P key pink power ranger
	if(keyPressed == "80"){
		console.log("Pink Power Ranger!");
		upload("pr.png");
		x = 250;
	}
	if(keyPressed == "89"){
		console.log("Yellow Power Ranger!");
		upload("yr.png");
		x = 400;
	}
	if(keyPressed == "71"){
		console.log("Green Power Ranger!");
		upload("gr.png");
		x = 600;
	}
	if(keyPressed == "66"){
		console.log("Blue Power Ranger!");
		upload("br.png");
		x = 600;
	};
}