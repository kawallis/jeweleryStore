'use strict';

$(document).ready(function(){
  $('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true
  });
});

$('.icon-bars').on('click', function(event){
  $('.icon-bars').toggleClass('rotate');
  $('.nav-drop').toggle('slow');
});

$('.anchorLink').on('click', function(event){

  event.preventDefault();
  $('.icon-bars').toggleClass('rotate');
  $('.nav-drop').toggle('slow');

  var id = $(this).attr('href');
  var offset = $(id).offset();
  $('html, body').animate({
    scrollTop: offset.top
  }, 800);

});