$(window).resize(function(){
	if ($(window).width() <= 600){	
		$('.internetPhoto').hide()
	};
    if ($(window).width() >= 600){	
		$('.internetPhoto').show()
	}	
});