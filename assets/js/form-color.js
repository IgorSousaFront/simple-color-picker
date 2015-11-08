$(document).ready(function(){
	$('.getColor').keyup(function(){
		var getColor     = $('.getColor').val();
		var setColor     = $('.box-color').css('background-color');
		var colorLength  = setColor.length;
		console.log(colorLength);
		var textColor    = $('.result-content p');
		// var hexa         = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];


		$('.box-color').css('background-color', getColor);
		$('.setColor').val(setColor);

		if (colorLength > 15){
			var red = setColor.substring(4, 7);
			var redBox = 'rgb(' + red + ",000,000)";
			$('.red').css('background-color', redBox);

			var green = setColor.substring(8, 11);
			var greenBox = 'rgb(000,' + green + ",000)";
			$('.green').css('background-color', greenBox);

			var blue = setColor.substring(4, 7);
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