'use strict';

$(document).ready(function(){
  $('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 500,
  });
});

// Handlers for the navbar
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

// Simple Cart code

simpleCart({
  checkout: {
    type: 'PayPal' ,
    email: 'wallaccm@email.sc.edu'
  },
  tax: 		0.075,
  currency: 	'USD'
});