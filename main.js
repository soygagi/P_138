function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function draw() {
	game();
}
function modelLoaded(){
	console.log("El modelp se ha cargado");
}
function gotPoses(results){
	if(results.length>0){
		console.log(results);
		noseX = results[0].pose.nose.y;
		noseY = results[0].pose.nose.y;
	}
}





