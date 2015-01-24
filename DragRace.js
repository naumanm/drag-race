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


window.onload = main;  // this should call the start, not main

// need to define car and game object

function Car() {
	this.engine = "off";
	this.racePosition = 0;
	this.ID;
	this.left = 0;	
	this.right = 0;
}

function Game() {
	this.preStaged = false;
	this.staged = false;
	this.started = false;
}

// instantiate cars and game object
var redCar = new Car();
var blueCar = new Car();
var myGame = new Game;

/* start button

function startGameButton () {
	startButton = document.getElementById("startButton");
	startButton.addEventListener("click", main);
	set Car engines to on
}

*/


// ----------------------------------------------
// this moves both cars left and right
function main () {
	redCar.ID = document.getElementById("redCar");
	blueCar.ID = document.getElementById("blueCar");
	window.addEventListener("keyup", function(event){

	if (event.keyCode === 39) {

		console.log("---------------------------------------");

		console.log("Red Left = " + redCar.left);
		console.log("Red Position = " + redCar.racePosition);

		redCar.left = parseInt(redCar.left, 10) + 10 + "px";
		redCar.racePosition += 10;

		console.log("Red Left = " + redCar.left);
		console.log("Red Position = " + redCar.racePosition);

		checkPreStaged();
		checkStaged();	
		checkStart();
	}

	if (event.keyCode === 37) {
		redCar.left = parseInt(redCar.left, 10) - 10 + "px";
		redCar.racePosition -= 10;		
	}

	if (event.keyCode === 83) {
		blueCar.left = parseInt(blueCar.left, 10) + 10 + "px";
		blueCar.racePosition += 10;
		checkPreStaged();
		checkStaged();
		checkStart();
	}

	if (event.keyCode === 65) {
		blueCar.style.left = parseInt(blueCar.left, 10) - 10 + "px";
		blueCar.racePosition -= 10;
	}

});

function checkPreStaged () {
	if (redCar.racePosition > 50) {
		document.getElementById("preStageLeft").setAttribute("src", "greenOn.jpeg");
		console.log("Red PRE STAGED!");
	}
	if (blueCar.racePosition > 50) {
		document.getElementById("preStageRight").setAttribute("src", "greenOn.jpeg");
		console.log("Blue PRE STAGED!");
	}
}

function checkStaged () {
	console.log("Check Staged redCar " + redCar.racePosition);
	console.log("Check Staged blueCar " + blueCar.racePosition);

	if (redCar.racePosition > 70) {
		document.getElementById("stageLeft").setAttribute("src", "greenOn.jpeg");
		console.log("Red STAGED!");
	}
	if (blueCar.racePosition > 70) {
		document.getElementById("stageRight").setAttribute("src", "greenOn.jpeg");
		console.log("Blue STAGED!");
	}

	if ((redCar.racePosition > 70) && (blueCar.racePosition > 70)) {
		console.log("STAGED! Start the clock");
		myGame.preStaged = true;
		//startTheRace();
	}
}

function checkStart() {

}



}
