//why choose slider
$(document).ready(function() {
  var oneOwl = $('#choose_me_owl');
  var twoOwl = $('#get_quote_tab_owl');

  //choose me why slider
  oneOwl.owlCarousel({
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
  // $('.play').on('click', function() {
  //   oneOwl.trigger('play.oneOwl.autoplay', [1000])
  // })
  // $('.stop').on('click', function() {
  //   oneOwl.trigger('stop.oneOwl.autoplay')
  // })
  $('.owl-dot').click(function () {
	  oneOwl.trigger('to.oneOwl.carousel', [$(this).index(), 300]);
	})

  //get quote options 
  twoOwl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    animateOut: 'fadeIn',
    animateIn: 'fadeOut',
    autoplayHoverPause: false,
    smartSpeed:450,
    dotsContainer: '#get_quote_nav'
  });
  // $('.play').on('click', function() {
  //   twoOwl.trigger('play.twoOwl.autoplay', [1000])
  // })
  // $('.stop').on('click', function() {
  //   twoOwl.trigger('stop.twoOwl.autoplay')
  // })
  $('#twoOwl .owl-dot').click(function () {
    twoOwl.trigger('to.twoOwl.carousel', [$(this).index(), 300]);
  })



  //START:  PLaceholder search functionality

  $('#search__input').on("keypress", function(){
      $(this).siblings('.act_placeholder').eq(0).hide();
  });

  $('#search__input').on({
    blur: function(){
      if($(this).val() == "") {
          $(this).siblings('.act_placeholder').eq(0).show();
      }
    },
    keyup: function(){
      if($(this).val() == "") {
          $(this).siblings('.act_placeholder').eq(0).show();
      }
    }
  });


  $('#search_btn').on("click", showSearchBar);
  $('#search_close_btn').on("click", hideSearchBar);

  function showSearchBar(){
    $('.nav_cover').hide();
    $('.get_quote').hide();
    $('.search_bar_top').css("display","inline-block");
    $(this).hide();
    $('#search_close_btn').css("display","inline-block");
  }
  function hideSearchBar(){
    $('.nav_cover').css("display","inline-block");
    $('.get_quote').css("display","inline-block");
    $('.search_bar_top').hide();
    $(this).hide();
    $('#search_btn').css("display","inline-block");
  }


})





   





