$("#toggle").click(function () {
  $(".menu").toggleClass("opened");
  $(this).toggleClass("open");
  $("body").toggleClass("fixed");
});