$(document).ready(function(){

	var likes = 894;	// Change this values to
	var dislikes = 73;	// see how it works
	var total = (likes + dislikes);
	var percent = (likes * 100) / total;
	var rotation = (percent / 100) * 180;

		if (total === 0) {
		$(".wheel").css({"background": "grey"});
		}

		$(".points").append("<p>" + total + "</p>");
		$(".wheel").css({transform: 'rotate(' + rotation + 'deg)'});
		$(".wheelCenter, .points, .votes").css({transform: 'rotate(' + '-' + rotation + 'deg)'});
		$(".wheelBase").css({transform: 'scale(1.1) rotate(' + '-' + rotation + 'deg)'});
});