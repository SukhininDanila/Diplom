$(document).ready(function () {
	$('.menu__item').click(function () {
		$('#menu__toggle').prop('checked', false);
	});

	$(document).click(function (e) {
	  if ($(e.target).closest('.hamburger-menu').length) {
			// клик внутри элемента
			return;
	  }
	// клик снаружи элемента
		$('#menu__toggle').prop('checked', false);
		});
});