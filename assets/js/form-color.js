$(document).ready(function(){
	$('.getColor').keyup(function(){
		var getColor = $('.getColor').val();
		var setColor = $('.box-color').css('background-color');
		var colorLength = getColor.length;

		$('.box-color').css('background-color', getColor);
		$('.setColor').val(setColor);


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
		}else{
			
		};

		if (colorLength == 16){
			var red = getColor.substring(4, 7);
			var redBox = 'rgb(' + red + ",000,000)";
			$('.red').css('background-color', redBox);

			var green = getColor.substring(8, 11);
			var greenBox = 'rgb(000,' + green + ",000)";
			$('.green').css('background-color', greenBox);

			var blue = getColor.substring(4, 7);
			var blueBox = 'rgb(000,000,' + blue + ")";
			$('.blue').css('background-color', blueBox);
		};

		if (getColor == 0) {
			$('.box-color').css('background-color', '#fff');
			$('.setColor').val('');
			$('.result').css('background-color', '#fff');
		};
	});
});