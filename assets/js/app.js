(function ($) {
  "use strict";

  /*===================================
  //Fixed Header
  =====================================*/

  $(window).on("scroll", function () {
    if ($("header").hasClass("sticky-on")) {
      let stickyPlaceHolder = $("#sticky-placeholder"),
        menu = $("#navbar-wrap"),
        menuH = menu.outerHeight(),
        topbarH = $("#topbar-wrap").outerHeight() || 0,
        targrtScroll = topbarH,
        header = $("header");
      if ($(window).scrollTop() > targrtScroll) {
        header.addClass("sticky");
        stickyPlaceHolder.height(menuH);
      } else {
        header.removeClass("sticky");
        stickyPlaceHolder.height(0);
      }
    }
  });

  /*=====================================
  // testimonial-slider
  ======================================*/

  let rtThumbnailTliderThumbStyle1 = new Swiper(
    ".rt-thumbnail-slider-thumb-style-1", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 3,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        speed: 800,
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 3,
          },
        },
    }
  );
  let rtThumbnailTliderStyle1 = new Swiper(".rt-thumbnail-slider-style-1", {
    loop: true,
    spaceBetween: 30,
    speed: 800,
    // mousewheel: true,
    thumbs: {
        swiper: rtThumbnailTliderThumbStyle1,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
    },
  })

  /*-------------------------------------
    Card-slider
    -------------------------------------*/

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    simulateTouch: false ,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
      breakpoints:{
          0: {
              slidesPerView: 1,
          },
          520: {
              slidesPerView: 2,
          },
          772: {
            slidesPerView: 2,
        },
          950: {
              slidesPerView: 2,
          },
          1200: {
              slidesPerView: 3,
          },
      },
  });

  /*-------------------------------------
  sidebar-menu
  -------------------------------------*/
  
  $(document).ready(function(){
      $(".changable-button").click(function(){
          $("#sidebar-1").toggleClass("translate ") .style.transition=" all 2s";
      });
  });

/*-------------------------------------
Bc-to-top
-------------------------------------*/

var minSpeed 		= 500;
var maxSpeed		= 1500;
$(".kariez-bc-totop").off().on('click', function(e) {
  e.preventDefault();
  var speed		= ($(window).scrollTop()-$(window).height())/2;
  if(speed < minSpeed){speed = minSpeed;}
  if(speed > maxSpeed){speed = maxSpeed;}
  $("html, body").animate({ scrollTop: 0 }, speed);
  return false;
});

$(window).on('scroll', function(e) {
var WinOffset	= $(window).scrollTop();
var totop		= $('a.kariez-bc-totop');
  var scrollPercent = 100 * WinOffset / ($(document).height() - $(window).height());
  totop.find('.progress').css({height: `calc(${scrollPercent}% - 6px`});
  if(totop.length){
    if(WinOffset > 300){
      totop.addClass('active');
    }else{
      totop.removeClass('active');
    }
  }
});
    /*-------------------------------------
  Sidebar-overley
    -------------------------------------*/
function on() {
  document.getElementById("overlay").style.display = "block";
  }
  function off() {
  document.getElementById("overlay").style.display = "none";
  }
  // isotop
  // external js: isotope.pkgd.js

// // init Isotope elements
// var $box = $(".isotope-box").isotope({
//   itemSelector: ".isotope-item"
// });
// // filter functions
// // bind filter button click
// $(".isotope-toolbar").on("click", "button", function () {
//   var filterValue = $(this).attr("data-type");
//   $(".isotope-toolbar-btn").removeClass("active");
//   $(this).addClass("active");
//   if (filterValue !== "*") {
//     filterValue = '[data-type="' + filterValue + '"]';
//   }
//   console.log(filterValue);
//   $box.isotope({ filter: filterValue });
// });
/*--------------------------------------
Isotope initialization
--------------------------------------*/
  var $container = $(".isotope-wrap");
  if ($container.length > 0) {
    var $isotope;
    var blogGallerIso = $(".featuredContainer", $container).imagesLoaded(
      function () {
        $isotope = $(".featuredContainer", $container).isotope({
          filter: "*",
          transitionDuration: "1s",
          hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)",
          },
          visibleStyle: {
            transform: "scale(1)",
            opacity: 1,
          },
        });
      }
    );
    $container.find(".isotope-classes-tab").on("click", "a", function () {
      var $this = $(this);
      $this.parent(".isotope-classes-tab").find("a").removeClass("current");
      $this.addClass("current");
      var selector = $this.attr("data-filter");
      $isotope.isotope({
        filter: selector,
      });
      return false;
    });
  }
  // swiper
/*===================================
//Fixed popup
=====================================*/

$(window).on('scroll', function() {
  var height = $(window).scrollTop();
  var $fixedPopup = $('.fixed-popup-wrap');

  if($fixedPopup.length > 0) {
    if (height < 100) {
      $fixedPopup.removeClass('scrolling');
    } else {
      $fixedPopup.addClass('scrolling');
    }
  }
});

/*=====================================
//	Jquery Serch Box
===================================*/
$('a[href="#template-search"]').on("click", function (event) {
  event.preventDefault();
  let target = $("#template-search");
  target.addClass("open");
  setTimeout(function () {
    target.find("input").focus();
  }, 600);
  return false;
});

$("#template-search, #template-search button.close").on(
  "click keyup",
  function (event) {
    if (
      event.target === this ||
      event.target.className === "close" ||
      event.keyCode === 27
    ) {
      $(this).removeClass("open");
    }
  }
);

/*-------------------------------------
  Mobile Menu Toggle
  -------------------------------------*/
  $(".sidebarBtn").on("click", function (e) {
    e.preventDefault();
    if ($(".rt-slide-nav").is(":visible")) {
      $(".rt-slide-nav").slideUp();
      $("body").removeClass("slidemenuon");
    } else {
      $(".rt-slide-nav").slideDown();
      $("body").addClass("slidemenuon");
    }
  });

  /*-------------------------------------
      Sidebar Menu Control
    -------------------------------------*/
  $(".sidebar-toggle").on("click", function() {
      window.setTimeout(function() {
          $("#wrapper").toggleClass("sidebar-collapsed");
      }, 500);
  });
  /*-------------------------------------
      Sidebar Menu Control Mobile
    -------------------------------------*/
  $(".sidebar-toggle-mobile").on("click", function() {
      $("#wrapper").toggleClass("sidebar-collapsed-mobile");
      if ($("#wrapper").hasClass("sidebar-collapsed")) {
          $("#wrapper").removeClass("sidebar-collapsed");
      }
  });
  /*-------------------------------------
      Mobile Menu Dropdown
    -------------------------------------*/
  let rtMobileMenu = $(".offscreen-navigation .menu");

  if (rtMobileMenu.length) {
    rtMobileMenu.children("li").addClass("menu-item-parent");
    rtMobileMenu.find(".menu-item-has-children > a").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("opened");
      let n = $(this).next(".sub-menu"),
        s = $(this).closest(".menu-item-parent").find(".sub-menu");
      rtMobileMenu
        .find(".sub-menu")
        .not(s)
        .slideUp(250)
        .prev("a")
        .removeClass("opened"),
        n.slideToggle(250);
    });
    rtMobileMenu
      .find(".menu-item:not(.menu-item-has-children) > a")
      .on("click", function (e) {
        $(".rt-slide-nav").slideUp();
        $("body").removeClass("slidemenuon");
      });
  }

  /*-------------------------------------
      Image-slider
    -------------------------------------*/
      $.fn.imageSlider = function(options) {
        "use strict";
        // default options
        var defaults = {    
          sliderId: 1,                
          effect: 'fadeout',          
          delay: 5000,                // an integer indicating the number of milliseconds to delay execution of the next item in the queue
          fadeOut: 3000,              // a string or number determining how long the animation will run
          shuffle: false,             // randomizes the order of the photos in the gallery
          navButtons: false,          // navigation disabled
          progressBar: false,         // progressbar disabled
          verticalProgressBar: false, // false: horizontal, true: vertical prograsbar
          slideShow: true,            // slideshow enabled
          selectWithProgressBar: true // if it is enabled you change active photo with the progressbar too
        }
            
        // technical variables
        var that;                // plugin's object pointer
        var $srcPlugin;          // original DOM element's jquery pointer
        var $desPlugin;          // destination DOM element's jquery pointer (this build with this blugin)
        var isInProgress=false;  // animation is in progress (and tilt the interaction until finish)
        var timer;               // slideshow's timer
                
        this.shuffleArray = function(arr) {
          var i = arr.length, j, temp;
          if ( i == 0 ) return arr;
          while ( --i ) {
             j = Math.floor( Math.random() * ( i + 1 ) );
             temp = arr[i];
             arr[i] = arr[j];
             arr[j] = temp;
          }
          return arr;
        }
          
        /**
         * Load default config 
         **/
        this.loadDataFromConfig = function() {        
          that.opts = $.extend( {}, defaults, options );             
          that.sliderId  = that.opts['sliderId'];
          that.delay     = that.opts['delay'];
          that.duration  = that.opts['duration'];
          that.slideShow = that.opts['slideShow'];
        }
        
        /**
         * load images' urls from DOM
         */
        this.loadImages = function() {    
          var images = [];
          
          $srcPlugin.find('img').each(function() {
            images.push($(this).attr('src'));
          });          
          
          return images;
        }    
        
        /**
         * load data from original DOM
         *   - shuffle (random order) images (optional) 
         *   - open title
         */
        this.loadDataFromDOM = function() {        
          that.images = that.loadImages();      
          
          // random order
          if (that.opts['shuffle'] === true) {
            that.images = that.shuffleArray(that.images);  
          }
         
          that.idxLastImage = that.images.length-1;              
          
          that.title = $("#image-slider span").html() || '';                   
        }
        
        /**
         * Generate plugin's frame
         */
        this.createWrap = function() {
          that.$wrap = $('<div id="image-slider-'+that.sliderId+'-wrap"></div>');        
          that.$frame = [$('<div class="frame-0"></div>'), $('<div class="frame-1"></div>')];            
          var $frameText = $('<div class="frame-text">'+that.title+'</div>');        
          
          that.$wrap.append(that.$frame[0], that.$frame[1], $frameText);
          
          // init image sources in the slider divs    
          that.$frame[0].css('background-image', "url('"+that.images[0]+"')");
          that.$frame[1].css('background-image', "url('"+that.images[0]+"')");    
        }  
        
        /**
         * Add navigation
         *  - previous and next image button (optional)
         *  - close button (optional)
         */
        this.addNavigation = function() {
          // Add prev and next button
          if (that.opts.navButtons===true) {
            $('<button class="btn-prev"></button>').appendTo(that.$wrap);
            $('<button class="btn-next"></button>').appendTo(that.$wrap);                     
          }
          
          // add close button
          if (that.opts.onClose !== undefined) {
            $('<button class="btn-close"></button>').appendTo(that.$wrap);
          }       
        }
        
        /**
         * Add progressbar (optional)
         */
        this.addProgressBar = function() {     
          if (that.opts.progressBar===true) {      
            $('<div class="progress"><div class="indicator"></div></div>').appendTo(that.$wrap);                  
          }    
        }
        
        /**
         * Change photo with click on progressbar
         */
        this.clickProgressBar = function (e) {
          if (that.opts.selectWithProgressBar !== true || isInProgress) {          
            return 0;
          }
          
          if (that.opts.verticalProgressBar === true) {                        
            var percent = (100/that.$progressBar.height())*e.offsetY;    
          } else {
            var percent = (100/that.$progressBar.width())*e.offsetX;      
          }
      
          var idxImageOld = that.idxImage;
          that.idxImage = Math.floor(((that.idxLastImage+1)/100)*percent);
      
          if (idxImageOld != that.idxImage) { 
            var direction = that.idxImage < idxImageOld ? 'left' : 'right';
            that.slideImage(that.idxImage, direction);          
          }    
        }
        
        /**
         * Refresh progressbar's indicator
         */
        this.refreshIndicator = function() {
          var count = that.idxLastImage + 1;
          var unit =  (100 / count);
          var percent = unit * that.idxImage;    
          
          if (that.opts.verticalProgressBar === true) {            
            // vertival margin-top doesn't work with percent
            var percentByPixel = (that.$progressBar.height()/100)*percent;
            that.$indicator.height(unit+'%').css('margin-top', percentByPixel+'px');   
          } else {
            that.$indicator.width(unit+'%').css('margin-left', percent+'%');                 
          }
        }
        
        /**
         * Replace original DOM to generated HTML
         */
        this.replaceDOM = function() {  
          that.createWrap();        
          that.addNavigation();    
          that.addProgressBar();
               
          // replace original DOM with the generated
          $srcPlugin.after(that.$wrap);                 
          $srcPlugin.remove();     
              
          $desPlugin = $('#image-slider-'+that.sliderId+'-wrap');
          that.$progressBar = $desPlugin.find('.progress');    
          that.$indicator = $desPlugin.find('.indicator');     
          
          that.$progressBar.click(that.clickProgressBar);
        }
        
        /**
         * Close button trigger
         */
        this.closeTrigger = function() {     
          if (that.opts.onClose !== undefined) {
            $desPlugin.find('button.btn-close').on('click', function(e) {  
               that.opts.onClose.call($desPlugin, that.sliderId, that.idxImage);          
            });
          }      
        }
        
        /**
         * Slide trigger (when photo index change)
         */
        this.slideTrigger = function() {    
          if (that.opts.onSlide !== undefined) {      
             that.opts.onSlide.call($desPlugin, that.sliderId, that.idxImage);                
          }
        }        
        
        /**
         * Slide image (manual or automatic way)
         */
        this.slideImage = function(idx, direction) {    
          
          if (isInProgress) {
            return false;
          } else {
            isInProgress = true; 
          }        
              
          var $frame = that.$frame[that.idxFront]; // frame that you can see
          var $nextFrame = that.$frame[1-that.idxFront];  // the next frame that you can't see
          var nextImageUrl = that.images[that.idxImage];
          
          if (that.opts.effect !== 'slide') {
            // next photo send back and show
            $nextFrame
              .css('z-index', 0)    
              .css('background-image', "url('"+nextImageUrl+"')")
              .show();
      
            // actual photo send front and fadeout
            $frame
              .css('z-index', 1) 
              .stop()
              .fadeOut(that.duration, function() { 
                    // change frame index
                    that.idxFront = 1-that.idxFront;
                    // trigger change photo
                    that.slideTrigger();  
                    isInProgress = false;
             });
           } else {
             // slide effect
             var width = $nextFrame.width();
                           
             $nextFrame.css('background-image', "url('"+nextImageUrl+"')");
             $nextFrame.css('left', direction=='left'?width:-width);
             
             $frame.animate({left: direction=='left'?-width:width}, that.opts.duration);
             $nextFrame.animate({left: 0}, that.opts.duration, function() {
                // change frame index
                that.idxFront = 1-that.idxFront;
                isInProgress = false;
                that.slideTrigger();  
             });
                    
           }
             
            that.refreshIndicator();          
        }
        
        /**
         * Adding triggers to the next and the prev buttons
         */
        this.addNavigationTriggers = function() {
          this.cmdPrevButton = $desPlugin.find('button.btn-prev');
          this.cmdNextButton = $desPlugin.find('button.btn-next');
                  
          this.cmdPrevButton.on('click', function() {            
            that.idxImage = that.idxImage < 1 ? that.idxLastImage : that.idxImage-1;               
            that.slideImage(that.idxImage, 'left');              
          });
              
          this.cmdNextButton.on('click', function() {      
            that.idxImage = that.idxImage > that.idxLastImage-1 ? 0 : that.idxImage+1;      
            that.slideImage(that.idxImage, 'right');
          });    
        }
        
        /**
         * Run slideshow with timer
         */
        this.runSlideShow = function() {
          if (isInProgress) {
            setTimeout(that.runSlideShow, that.delay);
            return false;
          }  
          
          that.idxImage = that.idxImage > that.idxLastImage-1 ? 0 : that.idxImage+1;      
          that.slideImage(that.idxImage, 'right');    
          setTimeout(that.runSlideShow, that.delay);
        }
        
        
        /**
         * Start plugin
         */
        this.init = function() {          
          
          that = this; // pointer to class properties    
          $srcPlugin = $(this); // pointer to original DOM
            
          that.idxImage = 0; // Active photo index                 
          that.idxFront = 1; // Active frame index  
          
          that.loadDataFromConfig();     
          that.loadDataFromDOM();    
          
          that.replaceDOM(); 
          
          that.closeTrigger(); 
          
          that.addNavigationTriggers();
                              
          // start timer
          if (that.slideShow) {
            that.runSlideShow();
          } else {    
            that.refreshIndicator();
          }
        }
        
        this.init();   
      }  
      
      
      /*
       *
       * USAGE EXAMPLES
       *
       */
      
      
      /**
       * Show event on the eventlog (event box)
       */
      function showEvent(message, sliderId, idxImage, color) {    
        $('#eventlog').prepend('<p style="color: '+color+'">'+(new Date).toLocaleTimeString()+': '+message+' [sliderId: '+sliderId+' idxImage:'+idxImage+']</p>');
      }
      
      // first slider
      $('#image-slider').imageSlider({     
          delay: 5000,        // delay in milisecond 
          effect: 'slide',    // slider's effect
          duration: 1000,     // fade in milisecond    
          navButtons: true,   // enable left and right navigation
          progressBar: true,  // show progressbar      
          onSlide: function(sliderId, idxImage) {
            showEvent('Slide first&nbsp; slider.', sliderId, idxImage, '#448');   
          }
      });
      
      // second slider
      $('#image-slider-2').imageSlider({  
        sliderId: 2, // unique id (from second div)  
        delay: 500,
        duration: 4000,  
        shuffle: true,
        navButtons: true,
        progressBar: true,
        verticalProgressBar: true,
        //selectWithProgressBar: false,
        onClose: function(sliderId, idxImage) {      
          showEvent('Close second slider.', sliderId, idxImage, '#844'); 
          alert('Second slider: Close Trigger');
        },  
        onSlide: function(sliderId, idxImage) {
            showEvent('Slide second slider.', sliderId, idxImage, '#844');   
          }
      });
  /*------------------------------------
   //  Offcanvas Menu activation code
   -----------------------------------*/
   $("#wrapper").on("click", ".offcanvas-menu-btn", function (e) {
    e.preventDefault();
    const $this = $(this),
      wrapper = $(this).parents("body").find(">#wrapper"),
      wrapMask = $("<div />").addClass("offcanvas-mask"),
      offCancas = $("#offcanvas-wrap"),
      position = offCancas.data("position") || "left";
    if ($this.hasClass("menu-status-open")) {
      wrapper.addClass("open").append(wrapMask);
      $this.removeClass("menu-status-open").addClass("menu-status-close");
      offCancas.css({
        transform: "translateX(0)",
      });
    } else {
      removeOffcanvas();
    }
    function removeOffcanvas() {
      wrapper.removeClass("open").find("> .offcanvas-mask").remove();
      $this.removeClass("menu-status-close").addClass("menu-status-open");
      if (position === "left") {
        offCancas.css({
          transform: "translateX(-105%)",
        });
      } else {
        offCancas.css({
          transform: "translateX(105%)",
        });
      }
    }
    $(".offcanvas-mask, .offcanvas-close").on("click", function () {
      removeOffcanvas();
    });
    return false;
  });


  /*===================================
   // Section background image 
  ====================================*/
  imageFunction();

  function imageFunction() {
    $("[data-bg-image]").each(function () {
      let img = $(this).data("bg-image");
      $(this).css({
        backgroundImage: "url(" + img + ")",
      });
    });
  }
    /*=================================
   // counter up
   ==================================*/
    $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 10000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }

    });  
  });
  /*=====================================
  // Active
  ======================================*/

  $(document).ready(function(){
    $('.swiper-button-arrow').click(function(){
      $('.swiper-button-arrow').removeClass("active");
      $(this).addClass("active");
  });
  });

    /*=====================================
  // Hover
  ======================================*/


  $(".menu-link").hover(function () {
    $(".menu-link").removeClass("active");
    $(this).addClass("active");
  });

  



  $(".overlay").hover(function () {
    $(".overlay").removeClass("active");
    $(this).addClass("active");
  });

  /*=====================================
  // Hamburger
  ======================================*/

  $(document).ready(function(){
    $(".kariez-hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  })



    /*-------------------------------------
    Isotop
    -------------------------------------*/
    
  //   $('.isotop-wrap').imagesLoaded(function() {
  //     // filter items on button click
  //     $('.isotope-classes-tab').on('click', 'button', function() {
  //         var filterValue = $(this).attr('data-filter');
  //         $grid.isotope({
  //             filter: filterValue
  //         });
  //     });
  //     // init Isotope
  //     var $grid = $('.isotope-list').isotope({
  //         itemSelector: '.project',
  //         percentPosition: true,
  //         transitionDuration: '0.7s',
  //         layoutMode: 'fitRows',
  //         masonry: {
  //             // use outer width of grid-sizer for columnWidth
  //             columnWidth: 1,
  //         }
  //     });
  // });
  // $('.isotope-button button').on('click', function(event) {
  //     $(this).siblings('.is-checked').removeClass('is-checked');
  //     $(this).addClass('is-checked');
  //     event.preventDefault();
  // });


    /*-------------------------------------
  Intersection Observer
  -------------------------------------*/
if (!!window.IntersectionObserver) {
  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active-animation");
              observer.unobserve(entry.target);
          }
      });
  }, {
      rootMargin: "0px 0px -100px 0px"
  });
  document.querySelectorAll('.has-animation').forEach(block => {
      observer.observe(block)
  });
  } else {
      document.querySelectorAll('.has-animation').forEach(block => {
          block.classList.remove('has-animation')
      });
  }

  /*=====================================
  // Testimonial-slider
  ======================================*/

  var swiper1 = new Swiper(".kariez-testimonial-slider", {
    spaceBetween: 24,
    slidesPerView: 2,
    loop: true,
     autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
    /*=====================================
  // Testimonial-slider
  ======================================*/

  var swiper4 = new Swiper(".kariez-testimonial-slider-2", {
    spaceBetween: 24,
    slidesPerView: 1,
    loop: true,
    //  autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
      speed: 800,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });


  /*=====================================
  // Project-slider
  ======================================*/

  var swiper2 = new Swiper(".kariez-project-slider", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 60,
     autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 500,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

   /*=====================================
  // Service-slider
  ======================================*/

  var swiper3 = new Swiper(".kariz-service-slider", {
    spaceBetween: 24,
    slidesPerView: 1,
    loop: true,
    speed: 1200,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*=====================================
  // Packages-slider
  ======================================*/

  var swiper1 = new Swiper(".kariez-packages-slider", {
    spaceBetween: 60,
    slidesPerView: 4,
    loop: true,
     autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /*=====================================
  // Team Hover
  ======================================*/
  function mousemove_team_hover_effect() {
    if (jQuery( window ).width() > 0 ) {
        if ( jQuery('#wrapper').find(".rt-portfolio-default").length > 0 ) {
            jQuery(".rt-portfolio-default .team-item,.kariez-project-box-2,.kariez-portfolio-box").each(function() {
                let $Purpose = jQuery(this);
                let $PurposeInner = $Purpose.find('.port-hover-effect');
                $Purpose.mousemove(function(event){
                    let y = event.pageY - $Purpose.offset().top + 10;
                    let x = event.pageX - $Purpose.offset().left + 10;
                    $PurposeInner.css({'top': y,'left': x,'bottom': "auto",'right': "auto",'opacity': 1});
                })
                .mouseleave(function() {
                    $PurposeInner.css({'top': 'auto','left': 10,'bottom': 10,'right': "auto",'opacity': 0});
                });
            });
        }
    }
  }
  $(function() {
    mousemove_team_hover_effect();
  });
  /*=====================================
  //	Select
  ===================================*/
  let rtSelect = $(".rt-select");

  if (rtSelect.length) {
    rtSelect.select2({
      // theme: "classic",
      dropdownAutoWidth: true,
      width: "100%",
    });
  }
/* ===================================
   PopUp
  ======================================= */

var yPopup = $(".play-btn");
if (yPopup.length) {
    yPopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

/*==============================
   //  Back to Top
   ===============================*/
   let $window = $(window);
   let distance = 300;
   $window.scroll(function () {
     if ($window.scrollTop() >= distance) {
       $("#back-to-top").fadeIn();
     } else {
       $("#back-to-top").fadeOut();
     }
   });
   $("#back-to-top").click(function () {
     $("html, body").animate(
       {
         scrollTop: 0,
       },
       800
     );
   });
  
  /*-------------------------------------
  //Contact Form initiating
  -------------------------------------*/
  let contactForm = $(".rt-contact-form");
  if (contactForm.length) {
    contactForm.each(function () {
      let innerContactForm = $(this);
      innerContactForm.validator().on("submit", function (e) {
        let $this = $(this),
          $target = innerContactForm.find(".form-response");
        if (e.isDefaultPrevented()) {
          $target.html(
            "<div class='alert alert-danger'><p>Please select all required field.</p></div>"
          );
        } else {
          $.ajax({
            url: "php/mailer.php",
            type: "POST",
            data: innerContactForm.serialize(),
            beforeSend: function () {
              $target.html(
                "<div class='alert alert-info'><p>Loading ...</p></div>"
              );
            },
            success: function (response) {
              if (response == "success") {
                $this[0].reset();
                $target.html(
                  "<div class='alert alert-success'><p>Message has been sent successfully.</p></div>"
                );
              } else {
                res = JSON.parse(response);
                if (res.message.length) {
                  let messages = null;
                  res.message.forEach(function (message) {
                    messages += "<p>" + message + "</p>";
                  });
                  $target.html(
                    "<div class='alert alert-success'><p>" +
                      messages +
                      "</p></div>"
                  );
                }
              }
            },
            error: function () {
              $target.html(
                "<div class='alert alert-success'><p>Error !!!</p></div>"
              );
            },
          });
          return false;
        }
      });
    });
  }
  
  var wow = new WOW({
    animateClass: "animate__animated",
    mobile: false,
  });
  wow.init(); 
  
  /*==============================
  // Preloader
  ===============================*/

  $(window).on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

//Near By Point Click
if($('.near-by-clicker').length){
  $(".near-by-clicker").on('click', '.acc-btn', function() {
    $('.place-holder').removeClass('active');
    
    var outerBox = $(this).parents('.near-by-clicker');
    var target = $(this).parents('.accordion');
    
    if($(this).hasClass('active')!==true){
      $(outerBox).find('.accordion .acc-btn').removeClass('active');
    }
    
    if ($(this).next('.acc-content').is(':visible')){
      return false;
    }else{
      $(this).addClass('active');
      $(outerBox).children('.accordion').removeClass('active-block');
      $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
      target.addClass('active-block');
      $(this).next('.acc-content').slideDown(300);	
    }
  });	
  
  
  $(".neighbour-section .place-outer .place-holder .place-mark").on('click', function() {
    
    var outerBox = $(this).parents('.neighbour-section');
    var targetBox = $(this).attr('data-clicker');
    var target = $(targetBox).find('.acc-content');
    var targetBtn = $(targetBox).find('.acc-btn');
    var targetPop = $(this).parent('.place-holder');
    
    if ($(target).is(':visible')){
      $(targetPop).addClass('active');
      return false;
    }else{
      $(outerBox).find('.place-holder').removeClass('active');
      $(targetPop).addClass('active');
      $(outerBox).find('.accordion .acc-btn').removeClass('active');
      $(targetBtn).addClass('active');
      $(outerBox).find('.accordion').removeClass('active-block');
      $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
      $(targetBox).addClass('active-block');
      $(target).slideDown(300);
    }
  });	
}
})(jQuery);




