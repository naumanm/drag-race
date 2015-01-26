/* mikeNauman

Game Flow
start game button changes UI, 
initializes keyboard listeners

pre-stage event listeners wait for both cars to be in 
pre stage, trigger the tree.

The tree is the Ground Launch Sequencer, prompts user, trigger 
lights, need listner for a car jumping the gun and finish
line.  Clock starts on green light

need a timer function for the clock.  To be initiated by the start 
the tree

car crosses finish, saves score in array, changes UI, 

Drag Race!
Build an in-browser game that will let a player race their awesome dragster 
on a race-track, by using the keyboard to control it.

What should it do?

When the game starts, the car should be in the pre-staging area and the first 
set of yellow lights should be on (pre-stage)
The game should start with a dragster that has its engine off at the dragstrip
The player should be able to start the engine with one of the keyboard keys
After starting the engine, the player can move the dragster into the staging 
area, crossing the pre-staging line
Once the dragster is in the staging area, the "stage" light should turn on
At this point, the next 3 sets of light should turn on, with 0.5 seconds between 
each set The second to last set is the set of green lights, which should 
indicate the start of the race If the player attempts to drive the car before
the green lights are turned on, the last set of lights should be lit in red, and the race is over
If the light is green, the player should be able to race their dragster down the racetrack
Crossing the finish line is the end of the race
Use HTML, CSS, some images from google, and JS to build the game
Bonuses

Calculate the drag race time
Restart the race keeping previous race times in a table
Save the drag race time and show the fastest drag race time
Super-bonus

Two-player drag race (use different parts of the keyboard to let two players control the game)
Add an AI that races against you
Give the AI different difficulty levels (easy, medium, hard) where each level is a different speed
Add a cheat code (http://en.wikipedia.org/wiki/Konami_Code) which automatically lets you win the race.
Super-duper-uber bonus

Turn the drag race into a race track!
Implement a way to draw an arbitrary race track, defined via a two-dimensional array, with coordinates in the cartesian plane
The two-dimensional array should be represented on screen by having the race-track be drawn based on it
The AI should be able to navigate the race track, and your car should only be able to move along the race track
Status API Training Shop Blog About
*/

window.onload = main;

// instantiate cars and game object

var redCar = new Car();
var blueCar = new Car();
var myGame = new Game();


// define car and game object
function Car() {
	this.engine = "off";
	this.racePosition = 0;
	this.ID = "";
	this.left = 0;	
	this.right = 0;
	this.preStaged = false;
	this.staged = false;
	this.falseStart = false;
	this.winnner = false;
}

function Game() {
	this.preStaged = false;
	this.staged = false;
	this.started = false;
	this.gameTime = false;
	this.redTime = 0;
	this.blueTime = 0;
}


// need a game loop that listens for change to any car
// or the game instance

// ----------------------------------------------
// moves cars and calls checks

 function main () {
 	var car1 = document.getElementById("redCar");
 	var car2 = document.getElementById("blueCar");
 	car1.style.left = "0px";
 	car2.style.left = "0px";
 	car1.style.right = "0px";
 	car2.style.right = "0px";
 
 	window.addEventListener('keyup', function(event){

 	// should this be a case?
	if (event.keyCode === 39) {
		car1.style.left = parseInt(car1.style.left, 10) + 5 + "px";
		redCar.racePosition += 5;
	}
	if (event.keyCode === 37) {
		car1.style.left = parseInt(car1.style.left, 10) - 5 + "px";
		redCar.racePosition -= 5;
	}
	if (event.keyCode === 83) {
		car2.style.left = parseInt(car2.style.left, 10) + 5 + "px";
		blueCar.racePosition += 5;
	}
	if (event.keyCode === 65) {
		car2.style.left = parseInt(car2.style.left, 10) - 5 + "px";
		blueCar.racePosition -= 5;
	}

	// these should be in a game loop
	checkPreStaged();
	checkStaged();	
	checkFalseStart();
	checkFinish();
	}); 
}

function checkPreStaged () {
	if (redCar.racePosition > 50) {
		changeLight("preStage", "Left", "On");
		redCar.preStaged = true;
	}
	if (blueCar.racePosition > 50) {
		changeLight("preStage", "Right", "On");
		blueCar.preStaged = true;
	}
}

function checkStaged () {
	// TODO: should update the Christmas Tree object
	if (redCar.racePosition > 70) {
		changeLight("stage", "Left", "On");
		redCar.staged = true;
	}
	if (blueCar.racePosition > 70) {
		changeLight("stage", "Right", "On");
		blueCar.staged = true;
	}
	if ((redCar.staged) && (blueCar.staged = true)) {
		myGame.staged = true;
		startTheClock();
	}
}

function checkFalseStart() {
	// TODO: style this more than the light
	if (!myGame.started) {
		if (redCar.racePosition > 85) {
			changeLight("red", "Left", "On");
			redCar.falseStart = true;
		}
		if (blueCar.racePosition > 85) {
			changeLight("red", "Right", "On");
			blueCar.falseStart = true;
		}
	return false;
	} 
}

function checkFinish() {
	// TODO: Style this not throw alerts
	if (redCar.racePosition > 550) {
		alert("red wins");
		redCar.winnner = true;
	}
	if (blueCar.racePosition > 550) {
		alert("blue wins");
		blueCar.winnner = true;
	}
}

function startTheClock() {
	setTimeout(function () {changeLight("yellow1", "Left", "On");}, 500);
	setTimeout(function () {changeLight("yellow1", "Right", "On");}, 500);
	setTimeout(function () {changeLight("yellow2", "Left", "On");}, 1000);
	setTimeout(function () {changeLight("yellow2", "Right", "On");}, 1000);
	setTimeout(function () {changeLight("yellow3", "Left", "On");}, 1500);
	setTimeout(function () {changeLight("yellow3", "Right", "On");}, 1500);
	setTimeout(function () {changeLight("start", "Left", "On");}, 2000);
	setTimeout(function () {changeLight("start", "Right", "On");}, 2000);
	setTimeout(function () {gameTimer();}, 2000);

}

function gameTimer() {

var start = new Date().getTime(), elapsed = '0.0';


window.setInterval(function()
{
    var time = new Date().getTime() - start;

    elapsed = Math.floor(time / 100) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

    console.log(elapsed);

}, 100);

}


function changeLight(light, side, myState ) {
	// TODO: refactor, all lights should be part of the Christmas tree object
	if (light === "preStage") { 
		document.getElementById("preStage" + side).setAttribute("src", "green" + myState + ".jpeg");
	}
	if (light === "stage") {
		document.getElementById("stage" + side).setAttribute("src", "green" + myState + ".jpeg");
	}
	if ((light === "yellow1") ||
		(light === "yellow2") ||
		(light === "yellow3")) {

		var myLight = light.substring(0, light.length - 1);
		// light is yellow1 but image is yellowOn and yellowOff becoming 
		document.getElementById(light + side).setAttribute("src", myLight + myState + ".jpeg");
	}
	if (light === "start") {
		document.getElementById(light + side).setAttribute("src", "green" + myState + ".jpeg");
		myGame.started = true;
	}
	if (light === "red") {
		document.getElementById(light + side).setAttribute("src", "red" + myState + ".jpeg");
		myGame.started = true;
	}
}
