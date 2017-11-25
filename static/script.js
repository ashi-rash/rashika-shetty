/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';

//building

var property = $('.property');

var toggleClass = function(el) {
  el.toggleClass('build');
};

property.on('click', function() {
  toggleClass(property);
});

setTimeout(function() { toggleClass(property) }, 250);

// carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    nav : true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});
