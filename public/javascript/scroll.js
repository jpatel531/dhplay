$(document).ready(function(){

	$('.nav').hide();
	$('.work-footer').hide();

	var portfolioShowAndDissolve = function() {
		$('.nav').fadeTo('fast', 1).delay(1000).fadeTo("slow", 0);
		$('.work-footer').fadeTo('fast', 0.3).delay(1000).fadeTo("slow", 0);
		$('div.portfolio').addClass('active');
		$('div.portfolio').focus();
		$('ul.section-selector li#work').addClass('active');	
	}

	// var showAndDissolve = function(element){
	// 	element.fadeTo('fast', 1).delay(1000).fadeTo("slow", 0);
	// 	$('div.portfolio').addClass('active');
	// 	$('div.portfolio').focus();
	// 	$('ul.section-selector li#work').addClass('active');	
	// }

	var showMenuOnHover = function(){
		$('.nav').hover(function(){
			$('.nav').stop().fadeTo("fast", 1)
		}, function() {$('.nav').stop().fadeTo("slow", 0);
		});
		$('.work-footer').hover(function(){
			$('.work-footer').stop().fadeTo("fast", 0.3)
		}, function() {$('.work-footer').stop().fadeTo("slow", 0);
		});
	}

	// var showOnHover = function(element){
	// 	element.hover(function(){
	// 		element.stop().fadeTo("fast", 1)
	// 	}, function() {element.stop().fadeTo("slow", 0);
	// 	});
	// }

	var hideMenus = function(){
		$('.nav').hide();
		$('.work-footer').hide();
		$('div.portfolio').removeClass('active');
		$('ul.section-selector li#work').removeClass('active');	
	}

	$(window).on('scroll', function(){
		var storyOptionYPosition = $("div.option#bio").offset().top
		var scrollHeight = $(window).scrollTop();
		if(scrollHeight > storyOptionYPosition) {
			$('.nav').show();
			$('.work-footer').show()
			if ($('div.portfolio').hasClass('active') === false) {
				portfolioShowAndDissolve();
			}
			else {
				showMenuOnHover();
			}
		} else {
			hideMenus();
			// $('.work-footer').hide();
		}
	});

	var smoothScroll = function(clickThis, goTo, speed){
		$(clickThis).on('click', function(){
			$('html, body').animate({
				scrollTop: $(goTo).offset().top
			}, speed);
			return false;
		});
	};


	smoothScroll('div.option#portfolio', '#work-section', 500);
	smoothScroll('li#cover', '#summary-section', 500);



});
