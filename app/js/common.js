(function (){
  $('.full-width').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 3000
  });

  $('.map__item').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1200,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<span class="slick-next"><img src="img/right.png" alt="arrow"></span>',
    prevArrow: '<span class="slick-prev"><img src="img/left.png" alt="arrow"></span>',
  });

  $('.manager').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1200,
    nextArrow: '<span class="slick-next"><img src="img/right.png" alt="arrow"></span>',
    prevArrow: '<span class="slick-prev"><img src="img/left.png" alt="arrow"></span>',
  });
})();