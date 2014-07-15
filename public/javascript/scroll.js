$(document).ready(function(){
	$('.nav').hide();

	$(window).on('scroll', function(){
		// var elem = $("div.summary").height();
		var storyOptionYPosition = $("div.option#bio").offset().top
		var scrollHeight = $(window).scrollTop();
		if(scrollHeight > storyOptionYPosition) {
			if ($('div.portfolio').hasClass('active') === false) {
				$('.nav').fadeIn('slow').delay(5000).fadeOut();
				$('div.portfolio').addClass('active');
				$('div.portfolio').focus();
			}
		} else {
			$('.nav').fadeOut('fast');
			$('div.portfolio').removeClass('active');
		}
	});



});

