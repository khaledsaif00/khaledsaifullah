$(document).ready(function(){

// one page nav activator //
  $('#nav').onePageNav();

// parallax activator //
  $('.intro').parallax({imageSrc: 'img/intro-img.jpg'});

// sticky activetor //
  $("#sticker").sticky({
    topSpacing:0,
    zIndex:999999999,

  });

  // owl carosel activetor //
    $('.owl-carousel').owlCarousel({

      items: 1,
      autoplay: true,
      loop: true,
      nav: true,
      dots: false,
      navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>","<i class='fa fa-chevron-right' aria-hidden='true'></i>"]
    });

    // Mixitup activetor //
      $('#Container').mixItUp();

});
