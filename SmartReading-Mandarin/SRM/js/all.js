var question = document.getElementsByClassName("faq-question");
var meter = document.getElementsByClassName("meter");
var bookimgheight = $(".book-img").width();
var read = document.getElementsByClassName('read');
var mapcontent = document.getElementsByClassName('map-content');
var lowestwidth = $(".lowest").width();
$(".lowest , .highest , .average").css({"height": lowestwidth }); 

$(".book-img").css({"height": bookimgheight }); 
$(".topic").before("<img src=''/>");
$(function () {
  // $("div.faq-answer").hide(); //子選單(div.faq-answer)隱藏
  // $(question).click(function () {
  //   $("div.faq-answer").slideUp();
  //   if ($("+div", this).css("display") == "none") {
  //     $("+div", this).slideDown();
  //     $(question).siblings("span").children("img").removeClass("up");
  //     $(this).siblings("span").children("img").addClass("up");
  //     //被點擊的元素新增一組class(open)
  //   } else if ($("+div", this).css("display") == "block") {
  //     $("+div", this).slideUp();
  //     $(this).siblings("span").children("img").removeClass("up");
  //     //被點擊的元素新增一組class(open)
  //   }
  // })

  // $("span.question-arrow").click(function () {
  //   $("div.faq-answer").slideUp();
  //   if ($(this).prev().css("display") == "none") {
  //     $(this).prev().slideDown();
  //     $("span.question-arrow").children("img").removeClass("up");
  //     $(this).children("img").addClass("up");
  //     //被點擊的元素新增一組class(open)
  //   } else if ($(this).prev().css("display") == "block") {
  //     $(this).prev().slideUp();
  //     $("span.question-arrow").children("img").removeClass("up");
  //     //被點擊的元素新增一組class(open)
  //   }
  // })
  $(".menu-avatar").click(function () {
    $(".dropdown-content.content-avatar-menu").toggle();
  });
  $(read).click(function () {
    alert("繼續閱讀請登入");
  });
  $(".main >h1").click(function () {
    alert("繼續閱讀請登入");
  });

    $(".dacc-test").click(function(){
      $(".dacctest-text > p").html("測驗已完成，下次測驗時間:<br />2022/10/14 7:00AM-2022/12/31 5:00PM");
      $(this).hide();
      $(".daccPage-DACC__chart").show();
    });


  $(".pre-meter").children("span").addClass("active");
  $(meter).click(function () {
    $(meter).siblings(".grade-content").css("display", "none");
    $(this).siblings(".grade-content").css("display", "block");
    $(meter).children("span").removeClass("active");
    $(this).children("span").addClass("active");
  });
  $(meter).hover(function () {
    $(meter).siblings(".grade-content").css("display", "none");
    $(this).siblings(".grade-content").css("display", "block");
    $(meter).children("span").removeClass("active");
    $(this).children("span").addClass("active");
  });

  $("#toggle").click(function () {
    $(".menu").toggleClass("opened");
    $(this).toggleClass("open");
    $("body").toggleClass("fixed");
  });

  $(".avatar-area").click(function () {
    $(this).children("li.avatar").children("img").toggleClass("active");
    $(this).siblings("div").children("li.avatar").children("img").removeClass("active");
  });
  

  $('.modal-btn ul li.introduction').click(function(){
    $('.modal-btn ul li').removeClass('active');
    $('.modal-btn ul li.introduction').addClass('active');
    var selector = $('.modal-btn ul li.introduction').attr('data-filter');
      $('.introduction-item').isotope({
        filter: selector
      })
  });
  $('.item.vocabulary').hide();
  $('.modal-btn ul li.vocabulary').click(function(){
    $('.modal-btn ul li').removeClass('active');
    $('.modal-btn ul li.vocabulary').addClass('active');
    $('.item.vocabulary').addClass('active');
    $('.item.vocabulary').show();
    var selector = $('.modal-btn ul li.vocabulary').attr('data-filter');
      $('.introduction-item').isotope({
        filter: selector
      })
  });
  
  $(".bullet").click(function(){
    $(this).siblings(".icontext").addClass("change");  
    $(this).parent(".point").siblings(".point").children(".icontext").removeClass("change");
  });
  
  $(".bullet").hover(function(){
    $(this).siblings(".icontext").addClass("change");  
    $(this).parent(".point").siblings(".point").children(".icontext").removeClass("change");
  });

  $(".icontext").click(function(){
    $(this).addClass("change");  
    $(this).parent(".point").siblings(".point").children(".icontext").removeClass("change");
  });
  
  $(".icontext").hover(function(){
    $(this).addClass("change");  
    $(this).parent(".point").siblings(".point").children(".icontext").removeClass("change");
  });

  $(".icontext.pre").hover(function(){
    $(".indicator").hide(); 
    $(".indicator.pre").show();  
  });
  $(".icontext.a1").hover(function(){
    $(".indicator").hide(); 
    $(".indicator.a1").show();  
  });
  $(".icontext.a2").hover(function(){
    $(".indicator").hide(); 
    $(".indicator.a2").show();  
  });
  $(".icontext.b1").hover(function(){
    $(".indicator").hide(); 
    $(".indicator.b1").show();  
  });
  $(".icontext.b2").hover(function(){
    $(".indicator").hide(); 
    $(".indicator.b2").show();  
  });
  $(".icontext.c1").hover(function(){
    $(".indicator").hide(); 
    $(".indicator.c1").show();  
  });
  $(".icontext.c2").hover(function(){
    $(".indicator").hide(); 
    $(".indicator.c2").show();  
  });

  $( ".book-block , .book-text" ).hover(function() {
    $( this ).parent().toggleClass("active");
  });

  $( ".option-tag" ).hover(function() {
    $(this).addClass("active");
    $(this).siblings("div").removeClass("active");
    if ( $(".pre-tag").hasClass("active") ){
      $(".folder").css("border-color", "#4c8f36");
      $(".folder-item p").css("color", "#4c8f36");
    }
    if ( $(".a1-tag").hasClass("active") ){
      $(".folder").css("border-color", "#19ba94");
      $(".folder-item p").css("color", "#19ba94");
    }
    if ( $(".a2-tag").hasClass("active") ){
      $(".folder").css("border-color", "#0d7d67");
      $(".folder-item p").css("color", "#0d7d67");
    }
    if ( $(".b1-tag").hasClass("active") ){
      $(".folder").css("border-color", "#e97f5c");
      $(".folder-item p").css("color", "#e97f5c");
    }
    if ( $(".b2-tag").hasClass("active") ){
      $(".folder").css("border-color", "#fd9b1f");
      $(".folder-item p").css("color", "#fd9b1f");
    }
    if ( $(".c1-tag").hasClass("active") ){
      $(".folder").css("border-color", "#418291");
      $(".folder-item p").css("color", "#418291");
    }
    if ( $(".c2-tag").hasClass("active") ){
      $(".folder").css("border-color", "#204d7a");
      $(".folder-item p").css("color", "#204d7a");
    }
  });

  $( ".option-tag" ).click(function() {
    $(this).addClass("active");
    $(this).siblings("div").removeClass("active");
    if ( $(".pre-tag").hasClass("active") ){$(this).parent(".folder-tag").parent(".folder").css("border-color", "#4c8f36");}
    if ( $(".a1-tag").hasClass("active") ){$(this).parent(".folder-tag").parent(".folder").css("border-color", "#0B98CF");}
    if ( $(".a2-tag").hasClass("active") ){$(this).parent(".folder-tag").parent(".folder").css("border-color", "#0C4367");}
    if ( $(".b1-tag").hasClass("active") ){$(this).parent(".folder-tag").parent(".folder").css("border-color", "#7B002C");}
    if ( $(".b2-tag").hasClass("active") ){$(this).parent(".folder-tag").parent(".folder").css("border-color", "#C82030");}
    if ( $(".c1-tag").hasClass("active") ){$(this).parent(".folder-tag").parent(".folder").css("border-color", "#F77800");}
    if ( $(".c2-tag").hasClass("active") ){$(this).parent(".folder-tag").parent(".folder").css("border-color", "#93A315");}
  });

  $(".sort-time").click(function () {
    $(this).children("p").children("img").toggleClass("up");
  });

  $(".sort-difficulty").click(function () {
    $(".navigator").toggleClass("open");
  });

  $(".navigator-close").click(function () {
    $(".navigator").hide();
  });
  
  if ($(this).width() < 1024) {
    $(document).ready(function () {
      $(".button-about-menu").click(function () {
        $(".content-about-menu").toggleClass("open");
      });
      $(".button-login-menu").click(function () {
        $(".content-login-menu").toggleClass("open");
        $(".login-dropdown").toggleClass("open");
      });
      $(".button-personal-menu").click(function () {
        $(".content-personal-menu").toggleClass("open");
      });
      $(".button-map-menu").click(function () {
        $(".content-map-menu").toggleClass("open");
      });
      $(".button-language-menu").click(function () {
        $(".content-language-menu").toggleClass("open");
      });
      $(".arrow").click(function () {
        $(this).toggleClass("up");
      });
    });
  }

  if ($(this).width() < 768) {
    $(document).ready(function () {
      $(".icontext.pre").addClass("change");
      $(".bullet").click(function(){
        $(this).siblings(".icontext").addClass("change");  
        $(this).siblings(".icontext").children("p").show();      
        $(this).parent(".point").siblings(".point").children(".icontext").removeClass("change");
        $(this).parent(".point").siblings(".point").children(".icontext").children("p").hide(); 
      });
      
      $(".bullet").hover(function(){
        $(this).siblings(".icontext").addClass("change");  
        $(this).siblings(".icontext").children("p").show();      
        $(this).parent(".point").siblings(".point").children(".icontext").removeClass("change");
        $(this).parent(".point").siblings(".point").children(".icontext").children("p").hide(); 
      });
  
      $(".icontext").click(function(){
        $(this).addClass("change");  
        $(this).children("p").show();      
        $(this).parent(".point").siblings(".point").children(".icontext").removeClass("change");
        $(this).parent(".point").siblings(".point").children(".icontext").children("p").hide(); 
      });
      
      $(".icontext").hover(function(){
        $(this).addClass("change");  
        $(this).children("p").show();      
        $(this).parent(".point").siblings(".point").children(".icontext").removeClass("change");
        $(this).parent(".point").siblings(".point").children(".icontext").children("p").hide(); 
      });
      });
  }
});



var swiper = new Swiper(".mySwiper", {

  autoplay: false,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
      loop: false,
    }
  }
});

var avatarswiper = new Swiper(".avatarSwiper", {

  autoplay: false,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
    snapOnRelease: true,
    dragSize: 20,
  },
  navigation: {
    nextEl: ".avatar-swiper-button-next",
    prevEl: ".avatar-swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});

var slideswiper = new Swiper(".slideSwiper", {
  autoplay: false,
  navigation: {
    nextEl: '.banner-swiper-button-next',
    prevEl: '.banner-swiper-button-prev',
  },
  pagination: {
    el: ".banner-swiper-pagination",
    dynamicBullets: true,
  },
});












