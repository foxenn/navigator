//why choose slider
$(document).ready(function() {
  var oneOwl = $('#choose_me_owl');
  var twoOwl = $('#get_quote_tab_owl');

  //choose me why slider
  oneOwl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    navText: ["<img src='images/icons/arrow_left.png'>","<img src='images/icons/arrow_right.png'>"],
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    dotsContainer: '#carousel-custom-dots'
  });
  $('#carousel-custom-dots .owl-dot').click(function () {
	  oneOwl.trigger('to.owl.carousel', [$(this).index(), 300]);
	})

  //get quote options 
  twoOwl.owlCarousel({
    items: 1,
    loop: false,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    smartSpeed:350,
    autoplayHoverPause: false,
    smartSpeed:450,
    dotsContainer: '#get_quote_nav',
    touchDrag: false,
    mouseDrag: false
  });
  $('#get_quote_nav .owl-dot').click(function () {
    twoOwl.trigger('to.owl.carousel', [$(this).index(), 300]);
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

  //END:  PLaceholder search functionality

  //START:  PLaceholder subscribe functionality

  $('#sub_email_inp').on("keypress", function(){
      $(this).siblings('.act_placeholder').eq(0).hide();
  });

  $('#sub_email_inp').on({
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

  //END:  Placeholder subscribe functionality


  //START: show search bar

  $('#search_btn').on("click", showSearchBar);
  $('#search_close_btn').on("click", hideSearchBar);

  function showSearchBar(){
    $('.nav_cover').hide();
    $('.get_quote').hide();
    $('.search_bar_top').css("display","inline-block");
    $('.search_bar_top').addClass('animated fadeInRight');
    $('#search__input').focus();
    $(this).hide();
    $('#search_close_btn').css("display","inline-block");
  }
  function hideSearchBar(){
    $('.nav_cover').css("display","inline-block");
    $('.get_quote').css("display","inline-block");
    $('.search_bar_top').removeClass('fadeInRight');
    $('.search_bar_top').hide();
    $(this).hide();
    $('#search_btn').css("display","inline-block");
  }

  //END: show search bar

})





   





