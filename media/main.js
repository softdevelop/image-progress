$(document).ready(function() {
	$('input[name^="content"]').change(()=>{
		let value = $('input[name^="content"]').val();
		console.log(value);
		if (value>10){
			value=10;
			$('input[name^="content"]').val(10);
		}
		if (value<0){
			value=0;
			$('input[name^="content"]').val(0);
		}
		$('.background').css('background-color','hsl('+value*20+', 100%, 50%)');
		$('.right-cover').css('background-color','hsl('+value*20+', 100%, 50%)');
		if (value<=5){
			$('.right-percent').css('transform','rotate('+(0)*36+'deg)');
			$('.left-percent').css('transform','rotate('+(5-value)*36+'deg)');
			$('.right-percent').addClass('hide');
		}
		else{
			$('.left-percent').css('transform','rotate(0deg)');

			$('.right-percent').css('transform','rotate('+(5-value)*36+'deg)');
			$('.right-percent').removeClass('hide');
		}
	});
});

