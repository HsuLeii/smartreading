//取得播放range
var playRange = document.getElementById("playRange");
//取得播放距離
var playRangeWidth = (value) => {
    document.documentElement.style.setProperty("--playRange", value + "%");
}

//取得聲音range
var soundRange = document.getElementById("soundRange");
//取得聲音距離
var soundRangeWidth = (value) => {
    document.documentElement.style.setProperty("--soundRange", 100 - value + "%");
    if (value < 1) {
        $(".icon_volume").removeClass("fa-volume-high");
        $(".icon_volume").removeClass("fa-volume-low");
        $(".icon_volume").addClass("fa-volume-xmark");

    } else if (value < 45) {
        $(".icon_volume").removeClass("fa-volume-xmark");
        $(".icon_volume").removeClass("fa-volume-high");
        $(".icon_volume").addClass(" fa-volume-low");

    } else {
        $(".icon_volume").removeClass("fa-volume-low");
        $(".icon_volume").removeClass("fa-volume-xmark");
        $(".icon_volume").addClass("fa-volume-high");
    }
}

//更改播放距離顏色
function updatePlayRangeProperty() {
    playRangeWidth(playRange.value);
}

function updateSoundRangeProperty() {
    soundRangeWidth(soundRange.value);
}

playRange.addEventListener("input", updatePlayRangeProperty);
soundRange.addEventListener("input", updateSoundRangeProperty);