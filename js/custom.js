//why choose slider
$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    navText: ["<img src='images/icons/arrow_left.png'>","<img src='images/icons/arrow_right.png'>"],
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    dotsContainer: '#carousel-custom-dots'
  });
  $('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
  })
  $('.owl-dot').click(function () {
	  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
	})
})
   