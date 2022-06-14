//密碼顯示/隱藏
$(".show_hide_password").on('keyup', function(event) {
	$(this).find('input[type="password"]').addClass('hidePD');
});
$(".show_hide_password").find("i").on('click', function (event) {
    if ($(this).parents('.show_hide_password').find('[name="password"]').attr("type") == "text") {
        //console.log("顯示密碼 >> 隱藏密碼");
        $(this).parents('.show_hide_password').find('[name="password"]').attr('type', 'password').addClass('hidePD').removeClass('showPD');
        $(this).removeClass("fa-eye");
        $(this).addClass("fa-eye-slash");
    }
    else {
        //console.log("隱藏密碼 >> 顯示密碼");
        $(this).parents('.show_hide_password').find('[name="password"]').attr('type', 'text').addClass('showPD').removeClass('hidePD');
        $(this).removeClass("fa-eye-slash");
        $(this).addClass("fa-eye");
    }
});