// banner slider
 $(document).ready(function(){
  $(".ban_main").slick({
   dots: false,
   arrows:true,
   nextArrow: ".next",
   prevArrow: ".prev",
   infinite: true,
   fade: true,
   fadeIn:500,
   cssEase: 'linear'
 });
});

// destination slider
$(document).ready(function(){
  $(".desti_main").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    
   nextArrow: ".next",
   prevArrow: ".prev",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: ".next",
          prevArrow: ".prev",
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: ".next",
          prevArrow: ".prev",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: ".next",
          prevArrow: ".prev",
        }
      }
    ]
  });

  $(".desti_2nd_row").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    
   nextArrow: ".next",
   prevArrow: ".prev",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: ".next",
          prevArrow: ".prev",
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: ".next",
          prevArrow: ".prev",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: ".next",
          prevArrow: ".prev",
        }
      }
    ]
  });

  $(".desti_3rd_row").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    
   nextArrow: ".next",
   prevArrow: ".prev",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: ".next",
          prevArrow: ".prev",
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: ".next",
          prevArrow: ".prev",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: ".next",
          prevArrow: ".prev",
        }
      }
    ]
  });
});
// about us slider
$(document).ready(function(){
  $(".about_main").slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows:false,
    
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

$(document).ready(function(){
$(".search_bar").click(function(){
    $(".search_txt").fadeIn()
    1000;
});
$(".search_close_btn").click(function(){
    $(".search_txt").fadeOut()
    1000;
});
});

$(document).ready(function(){
        document.getElementById("myDropdown").classList.toggle("show");

         window.onclick = function(e) {
            if (!e.target.matches('.dropbtn')) {
            var myDropdown = document.getElementById("myDropdown");
              if (myDropdown.classList.contains('show')) {
               myDropdown.classList.remove('show');
             }
           }
       }
 });

 
 $(window).scroll(function (){
   var scrolling = $(this).scrollTop()  
     if (scrolling > 30) {
       $(".nav_menu").addClass("bg");
   } else {     
       $(".nav_menu").removeClass("bg"); 
   }
  // if(scrolling> 30){
  //     $(".back_2_top").fadeIn();
  // } else{
  //     $(".back_2_top").fadeOut(500);
  // }
});

new VenoBox({
  selector: '.my-video-links',
});