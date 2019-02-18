function openCard(e) {
	var obj = document.getElementById("help_card__card");
	obj.style.display = "block";
}

function closeCard() {
	var obj = document.getElementById("help_card__card");
	obj.style.display = "none";
}

$(document).ready(function(){
  $("#button").click(function(){
  $(".card").fadeTo("fast",0.3);
  $(".spin").fadeIn("fast");
    });
});  	



$(function(){
	$('.NumGroup').groupinputs();
	$('.NumGroup').on('input propertychange', function(e) {
		var elem = $(e.target),
		value = elem.val(),
		caret = elem.caret(),
		newValue = value.replace(/[^0-9]/g, ''),
		valueDiff = value.length - newValue.length;
		if (valueDiff) {
			elem
			.val(newValue)
			.caret(caret.start - valueDiff, caret.end - valueDiff);
		}
	});
});
