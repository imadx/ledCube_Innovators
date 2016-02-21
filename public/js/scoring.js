var scoreA = 0;
var scoreB = 0;
var scoreC = 0;
var scoreD = 0;
var scoreE = 0;
var scoreF = 0;

var allScores = {};
allScores["A"] = 0;
allScores["B"] = 0;
allScores["C"] = 0;
allScores["D"] = 0;
allScores["E"] = 0;
allScores["F"] = 0;

var bits = {};
bits["A"] = [];
bits["B"] = [];
bits["C"] = [];
bits["D"] = [];
bits["E"] = [];
bits["F"] = [];

$(".patternGroup").click(function(){
	var id = $(this).attr('id').replace("pattern_", "");
	var number = (id.charAt(0));
	var group = (id.charAt(2));

	var clickedElem = $("#pattern_" + number + "_" + group);

	clickedElem.find("a.btn").toggleClass("btn-success");
	clickedElem.find("a.btn").toggleClass("btn-info");

	var tmp_score = 0;

	// console.log(number);

	if (["1","2","3"].indexOf(number) != -1){
		tmp_score = 10;
	} else if (["4","5","6"].indexOf(number) != -1){
		tmp_score = 30;

	} else if (["7","8","9"].indexOf(number) != -1){
		tmp_score = 45;
	}

	if(clickedElem.find("a.btn").hasClass('btn-success')) {

		allScores[group] += tmp_score;
		bits[group].push(number);
	} else {
		allScores[group] -= tmp_score;
		// bits[group].push(number);

		var index = bits[group].indexOf(number);
		bits[group].splice(index, 1);
	}


	$("#score_" + group).text(allScores[group]);
	sendMarks();
});

function sendMarks(){

	// var url = "http://localhost:3000/request/scoreboard";
	var url = "https://hackersclub.herokuapp.com/request/scoreboard";

	$.ajax({
	  method: "POST",
	  url: url,
	  data: { scores: allScores, bits: bits }
	}).done(function( msg ) {
	    showNotification("<i class='material-icons'>notifications</i> Scores updated");
	  });
}
