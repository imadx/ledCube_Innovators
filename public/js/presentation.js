// 0: LED cube
// 1: Line following robot
// 2: Hearth
// 3: Water rocket
// 4: Sphagetti Building

var currentCommand = "";

$(document).keyup(function(e){
	console.log(e.keyCode);
	if(e.keyCode == 27){
		currentCommand = "";
	}
	else if(e.keyCode == 13){
		executeCommand(currentCommand)
	} else {
		currentCommand += (String.fromCharCode(event.which));
	}
});

function executeCommand(currentCommand){
	console.log(currentCommand);
	if(currentCommand.startsWith("G")){
		console.log("Fucked up!")
	}
}

function showGame(id){
	switch(id){
		case 1:
			$("#display_icon").attr("src", "img/game_ledcube.png");
			$("#display_game").text("LED Cube");
			break;
		case 2:
			$("#display_icon").attr("src", "img/game_linefollower.png");
			$("#display_game").text("Line following Robot");
			break;
		case 3:
			$("#display_icon").attr("src", "img/game_hearth.png");
			$("#display_game").text("Hearth");
			break;
		case 4:
			$("#display_icon").attr("src", "img/game_waterrocket.png");
			$("#display_game").text("Water Rocket Challenge");
			break;
		case 5:
			$("#display_icon").attr("src", "img/game_building.png");
			$("#display_game").text("Sphagetti Building");
			break;
		case 0:
			$("#display_icon").attr("src", "img/game_logo.png");
			$("#display_game").text("Welcome");
			break;
	}
}


function showTeam(id){

};