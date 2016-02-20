$("#eNumber").focus(function(){
	$("#eNumber").val('E/14/');
});
$("#eNumber").blur(function(){
	if($("#eNumber").val() == 'E/14/'){
		$("#eNumber").val('');
	}
});

$("#resetBtn").click(function(){
	$("#eNumber").val('');
	$("#eNumberDiv").addClass('is-empty');
});