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
      responsive: [
        {
          breakpoint: 1190,
          settings: {
            centerMode: false,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 991,
          settings: {
            centerMode: false,
            slidesToShow: 1,
          }
        },
      ]
    });

    $('.slider__events-inner').slick({
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1190,
          arrows: false,
        },
      ]
    });

 });