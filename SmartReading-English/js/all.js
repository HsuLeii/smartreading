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
});
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
// 常見問題開始

// 常見問題結束
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
// 閱讀地圖開始

//一年級
document.getElementById("btn_1").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_1").attr("src","image/photo/map/first_grade/color_1.png");
  $("#changeticket_2").attr("src","image/photo/ticket/first_grade/color_2.png");
});

document.getElementById("btn_2").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_2").attr("src","image/photo/map/first_grade/color_2.png");
  $("#changeticket_3").attr("src","image/photo/ticket/first_grade/color_3.png");
});

document.getElementById("btn_3").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_3").attr("src","image/photo/map/first_grade/color_3.png");
  $("#changeticket_4").attr("src","image/photo/ticket/first_grade/color_4.png");
});

document.getElementById("btn_4").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_4").attr("src","image/photo/map/first_grade/color_4.png");
  $("#changeticket_5").attr("src","image/photo/ticket/first_grade/color_5.png");
});

document.getElementById("btn_5").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_5").attr("src","image/photo/map/first_grade/color_5.png");
});

//二年級
document.getElementById("btn_1").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_6").attr("src","image/photo/map/second_grade/color_1.png");
  $("#changeticket_7").attr("src","image/photo/ticket/second_grade/color_2.png");
});

document.getElementById("btn_2").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_7").attr("src","image/photo/map/second_grade/color_2.png");
  $("#changeticket_8").attr("src","image/photo/ticket/second_grade/color_3.png");
});

document.getElementById("btn_3").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_8").attr("src","image/photo/map/second_grade/color_3.png");
  $("#changeticket_9").attr("src","image/photo/ticket/second_grade/color_4.png");
});

document.getElementById("btn_4").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_9").attr("src","image/photo/map/second_grade/color_4.png");
  $("#changeticket_10").attr("src","image/photo/ticket/second_grade/color_5.png");
});

document.getElementById("btn_5").addEventListener("click", function()
{
  $(this).parent().parent().parent(".ticket_wrap").addClass("exchange_ticket");
  $(this).parent().parent().parent().parent().next(".owl-item").children().children().children().children().removeAttr("disabled");;
  $("#changeimage_10").attr("src","image/photo/map/second_grade/color_5.png");
});

// 閱讀地圖結束

//閱讀地圖票券開始
$(".owl-carousel").owlCarousel({
  center: true,
    loop:false, // 循環播放
  nav: true, // 顯示箭頭
  dots: false,// 顯示點點
  rewindNav: false,
  navText: ["<span class='owl_arrow arrow_left'><</span>","<span class='owl_arrow arrow_right'>></span>"],
  responsive: {
    0: {
      items: 1.5 
    },
    499: {
      items: 2
    },
    768: {
      items: 2.5
    },
    1200: {
      items: 5,
      center: false,
    }
  }
});
//閱讀地圖票券結束