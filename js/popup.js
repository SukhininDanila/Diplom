$(document).ready(function() {

	//script for popup
		$('.show_popup').click(function () {
			 $('.popup').fadeIn(500);
			$("body").append("<div id='overlay'></div>");
			$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
			return false;				
		});
		
		$('.popup__close').click(function () {
			$(this).parent().fadeOut(100);
			$('#overlay').remove();
			return false;
		});
	
		$(document).click( function(e){
    if ( $(e.target).closest('.popup').length ) {
        // клик внутри элемента
        return;
    }
    // клик снаружи элемента
    $('.popup').fadeOut(100);
    $('#overlay').remove();
        });			
});