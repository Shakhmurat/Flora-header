
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

