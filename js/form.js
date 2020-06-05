$(document).ready(function () {
	
	$('form').submit(function () {
    // для читаемости кода
    var $form = $(this);

    // чистим ошибки
    $form.find('.popup__error').remove();

    // проверяем поле с именем пользователя
    if ($form.find('input[name=username]').val() === '') {
        // добавляем текст ошибки
      $form.find('input[name=username]').attr('placeholder', 'ВВЕДИТЕ ИМЯ');
			return false;
			
			
    } else if ($form.find('input[name=phone]').val() === '') {
        // добавляем текст ошибки
      $form.find('input[name=phone]').attr('placeholder', 'ВВЕДИТЕ НОМЕР ТЕЛЕФОНА');
			// прерываем дальнейшую обработку
      return false;
    }

    // всё хорошо - отправляем запрос на сервер
    $.post(
      $form.attr('action'), // ссылка куда отправляем данные
      $form.serialize(),     // данные формы
      function (response) {
        console.log('Запрос отправлен успешно');
        console.log('Ответ сервера: ', response);
      }
    );
//    $('body').append('<div class="notification">Ваша заявка принята</div>');
//      закрытие попапа
		function closeNotification() {
			$('#overlay').remove();
			$('.notification').remove();
		}
				
//      закрытие попапа через 1,5 сек
    setTimeout($('.popup').fadeOut(100), 500);
		$('body').append('<div class="notification">Ваша заявка принята</div>');
		setTimeout(closeNotification, 1500);
    // отключаем действие по умолчанию
    return false;
  });
});