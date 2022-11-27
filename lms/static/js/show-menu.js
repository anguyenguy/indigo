$(".site-header .right-ct").hover(
    function () {
      $(this).find('ul').addClass('show-menu');
    }, 
    function () {
      $(this).find('ul').removeClass('show-menu');
    }
);