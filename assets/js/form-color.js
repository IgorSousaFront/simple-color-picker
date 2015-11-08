$(document).ready(function(){
	$('.button').click(function(){
		var getColor     = $('.getColor').val();
		var setColor     = $('.box-color').css('background-color');
		var colorLength  = setColor.length;
		var textColor    = $('.result-content p');


		$('.box-color').css('background-color', getColor);
		$('.setColor').val(setColor);

		if (colorLength > 15){
			var red = setColor.substring(4, 7);
			console.log(red);
			var redBox = 'rgb(' + red + ",000,000)";
			$('.red').css('background-color', redBox);

			var green = setColor.substring(9, 12);
			console.log(green);
			var greenBox = 'rgb(000,' + green + ",000)";
			$('.green').css('background-color', greenBox);

			var blue = setColor.substring(14, 17);
			console.log(blue);
			var blueBox = 'rgb(000,000,' + blue + ")";
			$('.blue').css('background-color', blueBox);
		};

		if (getColor.length <= 1) {
			$('.box-color').css('background-color', '#fff');
			$('.setColor').val('');
			$('.result').css('background-color', '#fff');
		};
	});
});