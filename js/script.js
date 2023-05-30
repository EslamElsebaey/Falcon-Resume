

$(window).on("load", function () {
  $(".preloader").fadeOut();
})



$(document).ready(function(){
    







// Typing Effect

let typingText ;
if($("html").attr("dir") == "rtl"){
 typingText = `نساعدك في الحصول على مقابلة عمل أسرع ثلاث مرات
من خلال بناء سيرة ذاتية إحترافية`; 
}else{
   typingText = `We help you get a job interview three times faster
  By building a professional CV`
}

const speed = 80; 
let i = 0;

function typeWriter() {
  if (i < typingText.length) {
    document.getElementById("typingText").innerHTML += typingText.charAt(i);
    i++;
  }
  setTimeout(typeWriter, speed);
}

typeWriter();



// Common Questions

$(".main-question").click(function(){
  $(this).children(".ques-answer").slideToggle(300);
  $(this).toggleClass("active").siblings().removeClass("active");
  $(".ques-answer").not($(this).children(".ques-answer")).slideUp(300);
})


/************************************************************************************************** */

// Succes Story Swiper
const successStory = new Swiper('.success-story .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .success-story .swiper-button-next',
    prevEl: '.success-story .swiper-button-prev',
  },

  pagination: {
    el: '.success-story .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});





/************************************************************************************************** */





// open and close sideBar

$(".menu-bars").click(function(){
  $(this).toggleClass("open-bars");
  $("nav").toggleClass("reset-left");
  $(".hamburger-lines .line").toggleClass("bg-dark")
  $("body").toggleClass("overflowHidden");
})






/************************************************************************************************** */
 

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 0);
}) 



/************************************************************************************************** */


//fixed nav


    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
        if($(window).width() > 768){
         $(".logo img").addClass("scroll-img")
         $("header").addClass("fixed");
        }else{
          $("header").addClass("bg-blue")
        }
      } else {
       
        if($(window).width() > 768){
          $("header").removeClass("fixed");
          $(".logo img").removeClass("scroll-img")
        }else{
          $("header").removeClass("bg-blue")
        }
      }
    });
  
  





})  // end of document ready


/************************************************************************************************** */




