'use strict';

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    touchDrag:true,
    MouseDrag:true,
    // nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:5
      }
    }
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

// $('.icon-cart-plus').on('click',function(event){
//   $('#cart-container').show();
// });