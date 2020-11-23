$(window).on("load",function(){
  $(".container").show();
  setTimeout(function(){$(".loader-wrapper").fadeOut("slow");
  //IE
  document.getElementsByClassName('loader-wrapper')[0].style.display="none";
  document.getElementsByClassName("container")[0].style.display="block";

  },2000);
});

function isIE() {
  ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  
  return is_ie; 
}

      // Burger menu
    var burger=$(".burger-menu");
    var navContent=$(".nav-content")
    // var navItem=$(".nav-item")
    var navItemLink=$(".nav-item a")

    var clickHandler=function(){

      navContent.toggleClass('side-nav-active');
      burger.toggleClass('burger--active');
      
      
      
    }

    burger.click(clickHandler);

    navItemLink.click(function(){
      if(burger.hasClass('burger--active')){
        clickHandler();
      }
    }
    )


    $(document).ready(function() {
        var NavY=90;
        
            var stickyNav = function(){
                var ScrollY = $(window).scrollTop();
                if (ScrollY > NavY) { 
                    $('.nav').addClass('sticky');
                    $('.nav').removeClass('non-sticky');
                } else {
                  $('.nav').removeClass('sticky'); 
                  $('.nav').addClass('non-sticky');
                }
        
          
          };
          
          //stickyNav();
          
          $(window).scroll(function() {
            if(window.matchMedia('(min-width: 769px)').matches){
            stickyNav();
            }
                
              
          });
        })


    //Scroll out
    ScrollOut()

    // Smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });



