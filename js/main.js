$ (function () {
  let visible_block = 0;
  $("a.btn").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
    $('a.call-btn').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
});

$ ('.btn-country').click(function (e) {
	e.preventDefault();
	if(visible_block===0){
      $('.destinations-more').addClass('destinations-visible');
      visible_block=1;
    }
	else{
      $('.destinations-more').removeClass('destinations-visible');
      visible_block=0;
    }
})
var newElems = $("<div class='dcell'></div>")
        .append("<img src='http://professorweb.ru/downloads/jquery/lily.png'/>")
        .append("<label for='lily'>Лилии:</label>")
        .append("<input name='lily' value='0' required />");
    
    newElems.css("border", "thick solid red");
    
    $('#row1').append(newElems); 
});
