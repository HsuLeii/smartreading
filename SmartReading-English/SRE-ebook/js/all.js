var word = document.querySelector('.btn-word');
var box = document.querySelector('.word-area');
var arrow = document.querySelector('.arrow')
var sound = document.querySelector('.sound-img');
var magnifier = document.querySelector('.btn-magnifier');
var font = document.querySelector('.btn-font');
var favorite = document.querySelector('.btn-favorite');
var record = document.querySelector('.btn-record');
var speak = document.querySelector('.btn-speak');
var verbatim = document.querySelector('.btn-verbatim');
var screen = document.querySelector('.btn-screen');
var play = document.querySelector('.btn-play');
var book = document.querySelector('.book-page');
var speaking = document.querySelector('.speak-menu-container');
var enlarge = document.querySelector('.magnifier-menu-container');
var text = document.querySelector('.font-menu-container');
var read = document.querySelector('.read-menu-container');
var vocabulary = document.querySelector('.word-menu-container');
var page = document.querySelector('.book-page');
var playarea = document.querySelector('.play-area');
var halftextwidth = $(".book-page-bg").width();

//單字表
$("#word-id").change(function () {
  if ($(this).is(":checked")) {
    $(".word-area").addClass("open");
    $(".book-page").addClass("move");
    $(".book-page").remove("noMove");

    // 版型:兩頁開始
    var twoRightHeight = $(".book-page-bg > img").height();
    $(".two-right-text").css({
      "max-height": twoRightHeight
    });
    // 版型:兩頁結束

    // 版型:文壓圖開始
    var topTextHeight = $(".book-page-bg > img").height();
    $(".top-text").css({
      "max-height": topTextHeight
    });
    // 版型:文壓圖結束

    // 版型:句子開始
    var sentenceHeight = $(".book-page-bg > img").height();
    $(".sentence").css({
      "max-height": sentenceHeight
    });
    // 版型:句子結束

    if ($(window).width() <= 1024) {

      // 版型:兩頁開始
      var twoRightTextHeight = $(".book-page-bg > img").height() / 2;
      $(".two-right-text").css({
        "max-height": twoRightTextHeight
      });
      // 版型:兩頁結束
    }

  } else {
    $(".word-area").remove("open");
    $(".book-page").remove("move");
    $(".book-page").add("noMove");

    // 版型:兩頁開始
    $(".two-right-text").css({
      "max-height": "calc(100vh - 240px)"
    });
    // 版型:兩頁結束

    // 版型:文壓圖開始
    $(".top-text").css({
      "max-height": "calc(100vh - 240px)"
    });
    // 版型:文壓圖結束

    // 版型:句子開始
    $(".sentence").css({
      "max-height": "calc(100vh - 240px)"
    });
    // 版型:句子結束

    if ($(window).width() <= 1024) {

      // 版型:兩頁開始
      var twoRightTextHeight = $(".book-page-bg > img").height() / 2;
      $(".two-right-text").css({
        "max-height": twoRightTextHeight
      });
      // 版型:兩頁結束
    }
  }
});

//唸讀切換
$("#read-id").change(function () {
  if ($(this).is(":checked")) {
    $(play).show();
    $('.sound-img').prop('disabled', false);
    $('.btn-speak').prop('disabled', false);
    $('.sound-line').removeClass("grey");
    $('.sound-draggable-button').removeClass("grey");
  } else {
    $(play).hide();
    $('.sound-img').prop('disabled', true);
    $('.btn-speak').prop('disabled', true);
    $('.sound-line').addClass("grey");
    $('.sound-draggable-button').addClass("grey");
  }
});
$('.disabled').prop('disabled', true);
// $("#read-id").click(function() {
//   $(play).toggle();
//   $('.sound-line').toggleClass("grey");
//   if ($('.sound-img').prop('disabled')) {
//     $('.sound-img').prop('disabled',false);
//   }else{
//     $('.sound-img').prop('disabled',true);
//   }
//   if ($('.btn-speak').prop('disabled')) {
//     $('.btn-speak').prop('disabled',false);
//   }else{
//     $('.btn-speak').prop('disabled',true);
//   }
// });

// 拼音顯示
$("#pinyin-id").change(function () {
  if ($(this).is(":checked")) {
    $(".text p > ruby > rt").show();
    $(".text > .article > p > ruby > rt").show();
  } else {
    $(".text p > ruby > rt").hide();
    $(".text > .article > p > ruby > rt").hide();
  }
});

//內文顯示
$("#text-id").change(function () {
  if ($(this).is(":checked")) {
    $(".text").show();
    $('#pinyin-id').prop('disabled', false);
  } else {
    $(".text").hide();
    $(".text > .article > p > ruby > rt").hide();
    $('#pinyin-id').prop('checked', false);
    $('#pinyin-id').prop('disabled', true);
  }
});

$(function () {

  // 版型:文壓圖開始
  var topTextWidth = $(".book-page-bg > img").width();
  var topTextHeight = $(".book-page-bg > img").width();
  $(".top-text").css({
    "width": topTextWidth,
    "height": topTextHeight
  });
  // 版型:文壓圖結束

  // 版型:上下圖文開始
  var halfTextWidth = $(".book-page-bg > img").width();
  $(".half-text").css({
    "max-width": halfTextWidth
  });
  // 版型:上下圖文結束

  // 版型:句子開始
  var sentenceWidth = $(".book-page-bg > img").width();
  var sentenceHeight = $(".book-page-bg > img").height();
  $(".sentence").css({
    "width": sentenceWidth,
    "height": sentenceHeight
  });
  // 版型:句子結束

});

if ($(window).width() <= 1024) {

  // 版型:兩頁開始
  var twoRightTextWidth = $(".book-page-bg > img").width();
  $(".two-right-text").css({
    "width": twoRightTextWidth
  });
  var twoRightTextHeight = $(".book-page-bg > img").height() / 2;
  $(".two-right-text").css({
    "max-height": twoRightTextHeight
  });
  // 版型:兩頁結束
}

// 功能選單設定
$(".button-menu ul li button").click(function () {
  $(this).siblings().toggleClass("open");
  $(this).parent().siblings().children().siblings().removeClass("open");
});

// 內文高度超過顯示高度不垂直置中
if ($('.article').height() > $('.text').height()) {
  $('.text').css("align-items", "flex-start");
} else {
  $('.text').css("align-items", "center");
}

// 單字表沒關閉書本顯示區域加move
if ($(".word-area").hasClass("open")) {
  $(".book-page").addClass("move");
}