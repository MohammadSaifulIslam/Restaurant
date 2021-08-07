$(function () {
  $('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    prevArrow: false,
    nextArrow: false,
  });


})
// food slider

$(function () {

  $('.food_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    speed: 1000,
    prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
    nextArrow: '<i class="fas fa-chevron-right next_arr"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

})

// venobox
$(function () {
  $('.venobox').venobox();


})
$(function(){
    // counter up 

    $('.count').counterUp({
      delay: 10,
      time: 1000,
  });
  
})