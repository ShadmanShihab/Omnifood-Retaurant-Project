
$(document).ready(function() {
    /*-------Sticky Navbar---------*/
    $('.js--section-feature').waypoint(function(direction){
        if(direction == "down"){
           $('nav').addClass('sticky');
           }else{
              $('nav').removeClass('sticky');
           }
    }, {
        offset: '60px;'
    });



    /*------- Scroll on Buttons ---------*/
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-feature').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000);
    });

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
          if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')&& location.hostname == this.hostname){
              var target = $(this.hash);
              target = target.length ? target: $('[name=' + this.hash.slice(1) + ']');
              if(target.length) {
                  $('html,body').animate({
                      scrollTop: target.offset().top}, 1000);
                  return false;
              }
          }
      });
  });
  

  /* Animations on scroll */
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animate__animated animate__backInRight');
  }, {
    offset: '50%'
  });


  /* Mobile Nav */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    nav.slideToggle(200)
  });

});
