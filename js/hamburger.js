$(document).ready(function () {
	
	//блокировка и разблокировка прокрутки страницы при открытии и закрытии меню
	$('#menu__toggle').click(function () {
		if($("#menu__toggle").is(':checked')) {
			$("body").addClass("open-modal");
		} else {
			$("body").removeClass("open-modal");
		}
	});
	
	// клик на элемент меню
	$('.menu__item').click(function () {
		$('#menu__toggle').prop('checked', false);
		$("body").removeClass("open-modal");
	});

	$(document).click(function (e) {
	  if ($(e.target).closest('.hamburger-menu').length) {
			// клик внутри элемента
			return;
	  }
	// клик снаружи элемента
		$('#menu__toggle').prop('checked', false);
		$("body").removeClass("open-modal");
		});
	
	
});