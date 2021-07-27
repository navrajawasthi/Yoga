//menu toggle
$('.menu-toggle').on('click', function (e) {
  $('body').toggleClass("active-responsive-menu");
});

// Submenu onclick function
$('.feat-btn').click(function () {
  $('nav ul .drop-down1').toggleClass("show");
  $('nav ul .first').toggleClass("rotate");
});

$('.feat-btn1').click(function () {
  $('nav ul .drop-down2').toggleClass("show1");
  $('nav ul .second').toggleClass("rotate");
});

$('.feat-btn2').click(function () {
  $('nav ul .drop-down3').toggleClass("show2");
  $('nav ul .third').toggleClass("rotate");
});


// Slick Slider for banner
$('.hero-slider-wrapper').slick({
  infinite: true,
  dots: false,
  arrows: false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

//slick slider multiple for gallery
$(".hero-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


//slick slider multiple for lab wrapper
$(".hero-slider-wrap").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
   autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

// magnific-popup

$('.project-pop').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});


//Video play pause 
$('.video').parent().click(function () {
  if ($(this).children(".video").get(0).paused) {
    $(this).children(".video").get(0).play(); $(this).children(".playpause").fadeOut();
  } else {
    $(this).children(".video").get(0).pause();
    $(this).children(".playpause").fadeIn();
  }
});

//sticky
$(document).on("scroll", function () {
  if ($(document).scrollTop()) {
    $('.header-wrapper').addClass('active_sticky');
  }
  else {
    $('.header-wrapper').removeClass('active_sticky');
  }
})


// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header-wrapper').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 0);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If scrolled down and past the navbar, add class .nav-up.
  if (st > lastScrollTop && st > 0) {
    // Scroll Down
    $('.header-wrapper').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.header-wrapper').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

//back-to-top
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $('.back-top-arrow').fadeIn();
    $(".back-top-arrow").css("opacity", "1");
    $(".back-top-arrow").css("visibility", "visible");
  } else {
    $('.back-top-arrow').fadeOut();
  }
});

//spinner loader

$(window).on('load', function () {
  $(".spinner-wrapper").css("opacity", "0");
  $(".spinner-wrapper").css("transition", "0.5s ease");
  $(".spinner-wrapper").css("z-index", "-1");
  // $("body").css("overflow", "auto");
  // animation wow // after preloader wow.js will start
  new WOW().init();
});



