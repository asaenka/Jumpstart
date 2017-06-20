$(function() {
  $('.carousel').slick({
    accessibility: false,
    appendDots: false,
    appendArrows: false,
    autoplay: true,
    autoplaySpeed: 3000000
  });

  var $navbar = $(".navbar");
  var navbarHeight = $navbar.css('height');
  var navbarVisible = true;

  $(window).on("scroll", function() {
    var scrollY = $(this).scrollTop();

    if(scrollY > 50) {
      if(navbarVisible) {
        $navbar.animate({top: '-' + navbarHeight}, 100);
        navbarVisible = false;
      }
    } else {
      if(!navbarVisible) {
        $navbar.animate({top: "0px"}, 100);
        navbarVisible = true;
      }
    }
  });
});


