$(document).ready(function(){
	$('.getColor').keyup(function(){
		var getColor = $('.getColor').val();
		var setColor = $('.box-color').css('background-color');

		$('.box-color').css('background-color', getColor);
		$('.setColor').val(setColor);

		if (getColor == 0) {
			$('.box-color').css('background-color', '#fff');
			$('.setColor').val('');
		};
		
	});
});