

$(window).on("load", function () {
  $(".preloader").fadeOut();
})



$(document).ready(function(){
    



// let scrollBtn = document.querySelector('.scroll-btn');
// let aboutSec = document.querySelector('#about');
// scrollBtn.addEventListener('click', () => {
//   aboutSec.scrollIntoView({behavior: 'smooth'});
// });


// let buyBtn = document.querySelector('.buy-btn');
// let packages = document.querySelector('#packages');
// buyBtn.addEventListener('click', () => {
//   packages.scrollIntoView({behavior: 'smooth'});
// });

// let commonQuesBtn = document.querySelector('.common-ques-btn');
// let commonQuestions = document.querySelector('#commonQuestions');
// commonQuesBtn.addEventListener('click', () => {
//   commonQuestions.scrollIntoView({behavior: 'smooth'});
// });




// Typing Effect

let typingText ;
if($("html").attr("dir") == "rtl"){
 typingText = `نساعدك في الحصول على مقابلة عمل أسرع ثلاث مرات
من خلال بناء سيرة ذاتية إحترافية`; 
}else{
   typingText = `We help you get a job interview three times faster
  By building a professional CV`
}

const speed = 120; 
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
  // autoplay: true,
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

$(".openNav-btn").click(function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "hidden") ;
})
$(".closeNav-btn").click(function(){
  $("nav").addClass("open-nav");
  $("body").css("overflow" , "visible") ;
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

    //~~~~~~~~~ fixed header
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
        $("header").addClass("fixed");
        if($(window).width() > 768){
         $(".logo img").addClass("scroll-img")
        }
      } else {
        $("header").removeClass("fixed");
        if($(window).width() > 768){
          $(".logo img").removeClass("scroll-img")
        }
      
      }
    });
    var fixedBar = document.querySelector("header"),
      prevScrollposition = $(window).scrollTop();

    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
    })   
  





})  // end of document ready


/************************************************************************************************** */




