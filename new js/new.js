
/* При нажатии на кнопку поиска появлется поле для ввода текста. 
   В  */
$('#search-submit').click(function (e) {
  e.preventDefault();
  
  if ($('.search').hasClass('search-focus')) {
    $('#index-search').submit();
  } else {
    $('.search').addClass('search-focus');
  }

});

// Если браузер не поддерживает свойство object-fit 
if ('objectFit' in document.documentElement.style === false) {
  var container = document.getElementsByClassName('fit-img-js');
  for (var i = 0; i < container.length; i++) {
    var imageSource = container[i].querySelector('img').src;
    container[i].querySelector('img').style.opacity = '0';
    container[i].style.backgroundSize = 'cover';
    container[i].style.backgroundImage = 'url(' + imageSource + ')';
    container[i].style.backgroundPosition = 'center center';
    container[i].style.backgroundRepeat = 'no-repeat';
  }
} else {
    console.log('No worries, your browser supports objectFit');
}

