
//點選錄音跟播放顯示聲音動態
$(".function_btn_item_microphone").click(function () {
    $(".sound_bar_area").toggleClass("play_animation");
});

$(".function_btn_item_play").click(function () {
    $(".sound_bar_area").toggleClass("play_animation");

    
			if( $(this).children('i').hasClass( "fa-play" ) ){//原本是播放
				$(this).children('i').addClass( "fa-stop" );
				$(this).children('i').removeClass( "fa-play" );
			}else{//原本是停止
				$(this).children('i').addClass( "fa-play" );
				$(this).children('i').removeClass( "fa-stop" );
			}

    var playText = document.getElementById("playText");
    if (playText.innerHTML === "停止") {
        playText.innerHTML = "播放";
      } else {
        playText.innerHTML = "停止";
      }
});