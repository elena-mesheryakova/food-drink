$(function(){

   $('.slider__inner').slick({
     arrows: false,
     dots: true,
   });
   $('.slider__offer-inner').slick({
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    });

    $('.slider__events-inner').slick({
      arrows: true,
      dots: false,
    });

 });