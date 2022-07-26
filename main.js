function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.parent('game_console');
	video.size(800,400);

	instializeInSetup(mario);
	poseNet = ml5.poseNet(video, modalLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}

function modalLoaded(){
	console.log("Modal is loaded");
}

function gotPoses(result){
if(result.length>0){
	console.log(result);
	noseX = result[0].pose.nose.x;
	noseY = result[0].pose.nose.y;
}
else{
	console.log("Your code has error");
}
}