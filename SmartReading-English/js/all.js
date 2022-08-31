var question = document.getElementsByClassName("faq-question");

$("#toggle").click(function () {
  $(".menu").toggleClass("opened");
  $(this).toggleClass("open");
  $("body").toggleClass("fixed");
});

$(".about_dropdown").click(function () {
  $(this).toggleClass("open");
  $(this).children(".dropdown_content").toggleClass("open");
  $(".language_dropdown").removeClass("open");
  $(".language_dropdown").children(".dropdown_content").removeClass("open");
});

$(".language_dropdown").click(function () {
  $(this).toggleClass("open");
  $(this).children(".dropdown_content").toggleClass("open");
  $(".about_dropdown").removeClass("open");
  $(".about_dropdown").children(".dropdown_content").removeClass("open");
  $(".avatar_dropdown").children(".dropdown_content").removeClass("open");

});

$(".avatar_dropdown").click(function () {
  $(this).children(".dropdown_content").toggleClass("open");
  (".language_dropdown").removeClass("open");
  $(".language_dropdown").children(".dropdown_content").removeClass("open");
});

//scroll-top 按鈕開始
$(document).ready(function () {
  $('.scroll_top').hide();
  $(window).scroll(function () {
    var windowTop = $(window).scrollTop();
    if (windowTop > 100) {
      $('.scroll_top').fadeIn();
    } else {
      $('.scroll_top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('.scroll_top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });
});
//scroll-top 按鈕結束

// 彈跳視窗資訊書籍選擇開始
$('.modal_btn ul li.introduction').click(function () {
  $('.modal_btn ul li').removeClass('active');
  $('.modal_btn ul li.introduction').addClass('active');
  var selector = $('.modal_btn ul li.introduction').attr('data_filter');
  $('.introduction_item').isotope({
    filter: selector
  })
});
$('.item.vocabulary').hide();
$('.modal_btn ul li.vocabulary').click(function () {
  $('.modal_btn ul li').removeClass('active');
  $('.modal_btn ul li.vocabulary').addClass('active');
  $('.item.vocabulary').addClass('active');
  $('.item.vocabulary').show();
  var selector = $('.modal_btn ul li.vocabulary').attr('data_filter');
  $('.introduction_item').isotope({
    filter: selector
  })
});
// 彈跳視窗資訊書籍選擇結束

// 分級對應開始
$(".grade_content").hide();
$(".first_grade_content").show();
$(".first_grade_background").children("p").addClass("active");
$(".first_grade_background").click(function () {
  $(".grade_content").hide();
  $(".first_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".first_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".second_grade_background").click(function () {
  $(".grade_content").hide();
  $(".second_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".second_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".third_grade_background").click(function () {
  $(".grade_content").hide();
  $(".third_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".third_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".fourth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".fourth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".fourth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".fifth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".fifth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".fifth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".sixth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".sixth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".sixth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".seventh_grade_background").click(function () {
  $(".grade_content").hide();
  $(".seventh_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".seventh_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".eighth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".eighth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".eighth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".ninth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".ninth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".ninth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
// 分級對應結束

//閱讀地圖票券開始
// $(".owl-carousel").owlCarousel({
//   center: true,
//     loop:false, // 循環播放
//   nav: true, // 顯示箭頭
//   dots: false,// 顯示點點
//   rewindNav: false,
//   navText: ["<span class='owl_arrow arrow_left'><</span>","<span class='owl_arrow arrow_right'>></span>"],
//   responsive: {
//     0: {
//       items: 1.5 
//     },
//     499: {
//       items: 2
//     },
//     768: {
//       items: 2.5
//     },
//     1200: {
//       items: 5,
//       center: false,
//     }
//   }
// });
//閱讀地圖票券結束

