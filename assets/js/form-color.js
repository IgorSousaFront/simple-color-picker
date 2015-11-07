$(document).ready(function(){
	$('.getColor').keyup(function(){
		var getColor = $('.getColor').val();
		var setColor = $('.box-color').css('background-color');
		var colorLength = getColor.length;

		$('.box-color').css('background-color', getColor);
		$('.setColor').val(setColor);

		if (getColor == 0) {
			$('.box-color').css('background-color', '#fff');
			$('.setColor').val('');
		};
		if (colorLength == 7){
			var red = getColor.substring(1, 3);
			var redBox = '#' + red + "0000";
			$('.red').css('background-color', redBox);

			var green = getColor.substring(3, 5);
			var greenBox = '#00' + green + "00";
			$('.green').css('background-color', greenBox);

			var blue = getColor.substring(5, 7);
			var blueBox = '#0000' + blue;
			$('.blue').css('background-color', blueBox);
		};
	});

});