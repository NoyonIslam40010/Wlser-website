
!(function ($) {

  // $("#toggle").click(function (e) { 
  //   $("#show").animate({
  //     width: "toggle",
  //   }, 1000);
  // });
  $('#serch').click(function(){
     $('#serch_border').css({"display":"block"});
   });  $('#close').click(function(){
     $('#serch_border').css({"display":"none"});
   });

  $(window).scroll(function () { 
     if($(window).scrollTop() > 150){
       $(".navbar").addClass("shadow fixed-top");

     }
     else{
       $(".navbar").removeClass("shadow fixed-top");
      }
  });

  $(".manubar").click(function () { 
    // alert("hellow")
    var bo = $("#main-mnue").html();
    $("#mnus-clone").html(bo);
    $("#mobile-header").show();

  });   

  $("#mobile-header #close").click(function () { 
   $("#mobile-header").hide();
   var got = $("#mnus-clone").html();
   $(got).remove();
  });


  
  // var owl = $(' .Team .owl-carousel');
  // owl.owlCarousel({
  //     items:1,
  //     loop:true,
  //     margin:10,
  //     autoplay:true,
  //     autoplayTimeout:1500,
  //     autoplayHoverPause:true
  // });

  $('.About_us .counter').counterUp({
    delay: 10,
    time: 3000
  });  
  $('.services_3 .counter').counterUp({
    delay: 10,
    time: 3000
  });  $('.testimonial .single_doctor  .cards .counter').counterUp({
    delay: 10,
    time: 3000
  });
  
  $("#show_popu").hide();
  $(" .Gallery .card img").click(function () { 
    var ok = $(this).attr("src");
    $("#show_popu").slideDown(1000);
    $("#show_popu .shows").html('<img src="'+ok+'" />');
  });

  $("#clos").click(function () { 
    $("#show_popu").slideUp();(1000);
  });
  
  $("#trig").click(function () { 
    $("#dropdown-menu").toggleClass("show");
  });
  $("#trig_S").click(function () { 
    $("#search_manue").toggleClass("show");
  });


  $('.baner-sliders').slick({
    vertical: true,
    autoplay:true,
    dots: true,
    appendDots: $('.slick-slider-dots'),
    speed:100,
    arrows:false
    
  });

  $('.thum_slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    autoplay:false,
    arrows: false,
    speed:100,
    dots: false

  });


  const slider = tns({
    container: '.testimonial_slider',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: true,    
    autoplay: false,
    speed: 100,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controls : false
  });

  

})(jQuery);