$(function(){$(".slider__inner").slick({arrows:!1,dots:!0}),$(".slider__offer-inner").slick({centerMode:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!0,responsive:[{breakpoint:1190,settings:{centerMode:!1,slidesToShow:2}},{breakpoint:991,settings:{centerMode:!1,slidesToShow:1}}]}),$(".slider__events-inner").slick({arrows:!0,dots:!1,responsive:[{breakpoint:1190,arrows:!1}]})}),$(".menu-btn").on("click",function(e){e.preventDefault(),$(".menu").toggleClass("menu_active"),$(".content").toggleClass("content_active")});