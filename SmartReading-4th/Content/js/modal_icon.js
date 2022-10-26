// fa-bookmark
$(".icon_img > .fa-bookmark").on('click', function(event) {
	event.preventDefault();
	if( $(".fa-bookmark").hasClass("far") ){
			$(this).addClass( "fas" );
			$(this).removeClass( "far" );
	}else {
		$(this).addClass( "far" );
			$(this).removeClass( "fas" );
	}
});

// fa-star
$(".icon_img > .fa-star").on('click', function(event) {
	event.preventDefault();
	if( $(".fa-star").hasClass("far") ){
			$(this).addClass( "fas" );
			$(this).removeClass( "far" );
	}else {
		$(this).addClass( "far" );
			$(this).removeClass( "fas" );
	}
});

// fa-comment
$(".icon_img > .fa-comment").on('click', function(event) {
	event.preventDefault();
	if( $(".fa-comment").hasClass("far") ){
			$(this).addClass( "fas" );
			$(this).removeClass( "far" );
	}else {
		$(this).addClass( "far" );
			$(this).removeClass( "fas" );
	}
});
