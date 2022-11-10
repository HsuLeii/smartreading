//取得播放range
var playRange = document.getElementById("playRange1");
//取得播放距離
var playRangeWidth = (value) => {
    document.documentElement.style.setProperty("--playRange", value + "%");
}


//更改播放距離顏色
function updatePlayRangeProperty() {
    playRangeWidth(playRange.value);
}


playRange.addEventListener("input", updatePlayRangeProperty);
