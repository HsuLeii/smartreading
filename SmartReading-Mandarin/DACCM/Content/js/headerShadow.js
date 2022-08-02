$(window).on('scroll',function() {
	if($(this).scrollTop() >= $('.header').height() ){
		$('.header > .container > .row').css({
				'box-shadow':	 '0px 20px 30px rgba(0, 0, 0, .2)',
		});
	}else{
		$('.header > .container > .row').css({
				'box-shadow': 'none',
		});
	}
});

