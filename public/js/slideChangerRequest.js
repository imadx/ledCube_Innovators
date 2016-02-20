$("#resetBtn").click(function(){
	$("#slideNumber").val('');
	$("#slideNumberDiv").addClass('is-empty');
	$("#signInBtn").html('<i class="material-icons">send</i> Send');
});

$("#slideNumber").change(function(){

	var value = $("#slideNumber").val();
	if(value <= 0) {
		$("#slideNumber").val('1');
		showNotification("<i class='material-icons'>notifications</i> Slide number should in the range (1 - 10)");
	}
	else if(value >10) {
		$("#slideNumber").val('10');
		showNotification("<i class='material-icons'>notifications</i> Slide number should in the range (1 - 10)");
	}
	else if (value <= 10 && value > 0){
		return true;
	} else {
		$("#slideNumber").val('0');
		showNotification("<i class='material-icons'>notifications</i> Something is wrong with your pattern number..");
	}
});

var sendRequest = function(){
	var value = $("#slideNumber").val();
	if(!isNaN(value) == true){
		$("#signInBtn").html('<i class="material-icons">send</i> Sending... ');

		// var url = "http://localhost:3000/request/pattern";
		var url = "https://hackersclub.herokuapp.com/request/pattern";

		$.ajax({
		  method: "POST",
		  url: url,
		  data: { id: value }
		}).done(function( msg ) {
		    showNotification("<i class='material-icons'>notifications</i> Your Request is on the Queue..");
		    $("#signInBtn").html('<i class="material-icons">send</i> Send');
		  });
	}
};

var showNotification = function(msg){
	var options =  {
	    content: msg, // text of the snackbar
	    timeout: 5000, // time in milliseconds after the snackbar autohides, 0 is disabled
	    htmlAllowed: true
	}

	$.snackbar(options);
};