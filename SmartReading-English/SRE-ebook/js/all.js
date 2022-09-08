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

$("#word-id").change(function () {
  if ($(this).is(":checked")) {
    box.classList.add("open");
    book.classList.add("move");
    var templatetextwidth = $(".book-page-bg > img").width();
    $(".text").css({
      "max-width": "90%" , "max-height": templatetextwidth 
    });
    $(".two-right-text").css({
      "max-width": "25%"
    });
    $(".half-text").css({
      "max-width": "90%" , "max-height": "calc((100vh - 200px) / 2.5)"
    });
    $(".nopic-text").css({
      "width": "auto" ,"max-width": "90%" , "max-height": "calc(100vh - 240px)"
    });
    $(".big-half-text").css({
      "width": halftextwidth , "max-height": "calc((100vh - 250px) / 4 * 1.2)"
    });
  } else {
    box.classList.remove("open");
    book.classList.remove("move");
    $(".text").css({
      "max-width": "none" , "max-height": "none"
    });
    $(".two-right-text").css({
      "max-width": "25%"
    });
    $(".half-text").css({
      "max-width": "100%" , "max-height": "calc((100vh - 200px) / 2.5)"
    });
    $(".nopic-text").css({
      "max-width": "45%" , "max-height": "calc(100vh - 240px)"
    });
    $(".big-half-text").css({
      "max-width": halftextwidth , "max-height": "calc((100vh - 250px) / 4 * 1.2)"
    });
  }
});

$("#read-id").change(function () {
  if ($(this).is(":checked")) {
    $(play).show();
    $('.sound-img').prop('disabled',false);
    $('.btn-speak').prop('disabled',false);
    $('.sound-line').removeClass("grey");
  } else {
    $(play).hide();
    $('.sound-img').prop('disabled',true);
    $('.btn-speak').prop('disabled',true);
    $('.sound-line').addClass("grey");
  }
});
$('.disabled').prop('disabled',true);
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

$("#pinyin-id").change(function () {
  if ($(this).is(":checked")) {
    $(".text p > ruby > rt").show();
    $(".text > .article > p > ruby > rt").show();
  } else {
    $(".text p > ruby > rt").hide();
    $(".text > .article > p > ruby > rt").hide();
  }
});
$("#text-id").change(function () {
  if ($(this).is(":checked")) {
    $(".text").show();
    $('#pinyin-id').prop('disabled',false);
  } else {
    $(".text").hide();
    $(".text > .article > p > ruby > rt").hide();
    $('#pinyin-id').prop('checked',false);
    $('#pinyin-id').prop('disabled',true);
  }
});

$(function () {
  // var templatetextwidth = $(".book-page-bg > img").width();
  // $(".text").css({
  //   "width": templatetextwidth
  // });
  var templatetextheight = $(".book-page-bg > img").height();
  $(".text").css({
    "height": templatetextheight
  });
  var nopicheight = $(".nopic-text").width();
  $(".nopic-text").css({
    "height": nopicheight
  });
  var halftextwidth = $(".book-page-bg").width();
  $(".big-half-text").css({"max-width": halftextwidth});
  // var textheight = $(".a2-2-book-page-bg > img").height() / 2;
  // $(".a2-2-text").css({"max-height": textheight});
});

if ($(window).width() <= 1024) {
  var templatetextwidth = $(".book-page-bg > img").width();
  $(".text").css({
    "width": templatetextwidth
  });
  var tworighttextheight = $(".book-page-bg > img").height() / 2;
  $(".two-right-text").css({
    "max-height": tworighttextheight
  });
  $("#word-id").change(function () {
    if ($(this).is(":checked")) {
      $(".two-right-text").css({
        "max-width": "100%" , "max-height": tworighttextheight
      });
    } else {
      $(".two-right-text").css({
        "max-width": "100%" , "max-height": tworighttextheight
      });
    }
  });
}
else {
}

// word.addEventListener('click', function () {
//   // this.classList.toggle("end-word");
//   vocabulary.classList.toggle("open");
//   speaking.classList.remove("open");
//   enlarge.classList.remove("open");
//   read.classList.remove("open");
//   text.classList.remove("open");
// });
// arrow.addEventListener('click', function () {
//   box.classList.toggle("open");
//   book.classList.toggle("move");
// });
// sound.addEventListener('click', function () {
//   this.classList.toggle("mute");
// });
// verbatim.addEventListener('click', function () {
//   read.classList.toggle("open");
//   enlarge.classList.remove("open");
//   speaking.classList.remove("open");
//   enlarge.classList.remove("open");
//   text.classList.remove("open");
//   vocabulary.classList.remove("open");
// });
// speak.addEventListener('click', function () {
//   speaking.classList.toggle("open");
//   page.classList.remove("screen");
//   text.classList.remove("open");
//   enlarge.classList.remove("open");
//   read.classList.remove("open");
//   vocabulary.classList.remove("open");
// });
// magnifier.addEventListener('click', function () {
//   enlarge.classList.toggle("open");
//   page.classList.remove("screen");
//   speaking.classList.remove("open");
//   text.classList.remove("open");
//   read.classList.remove("open");
//   vocabulary.classList.remove("open");
// });
// font.addEventListener('click', function () {
//   text.classList.toggle("open");
//   page.classList.remove("screen");
//   speaking.classList.remove("open");
//   enlarge.classList.remove("open");
//   read.classList.remove("open");
//   vocabulary.classList.remove("open");
// });
// screen.addEventListener('click', function () {
//   this.classList.toggle("end-screen");
//   box.classList.remove("open");
//   document.getElementById("word-id").checked = false;
//   book.classList.remove("move");
//   if (page.classList.contains('screen')) {
//     page.classList.remove('screen')
//   } else {
//     page.classList.add('screen')
//   }
// });
// play.addEventListener('click', function () {
//   this.classList.toggle("pause");
// });
// favorite.addEventListener('click', function () {
//   this.classList.toggle("click");
// });


$(".button-menu ul li button").click(function() {
  $(this).siblings().toggleClass("open");
  $(this).parent().siblings().children().siblings().removeClass("open");
});