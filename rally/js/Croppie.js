const $upload = $('#upload'),
  $crop = $('.crop_area'),
  $avatar_result = $('#avatar_result'),
  $crop_pie = $('#crop_pie');

var cr,
  cr_img = '',
  isCrop = 0;

//支援上傳檔案判斷
$(function () {
  if (window.File && window.FileList && window.FileReader)
    fileInit();
  else
    alert('您的裝置不支援圖片上傳');
});

//********* file select/drop *********
var file_select = document.getElementById("file_select");

function fileInit() {
  // file select
  file_select.addEventListener("change", FileSelectHandler, false);
  // is XHR2 available?
}

// file selection
function FileSelectHandler(e) {
  // cancel event and hover styling
  // fetch FileList object
  var files = e.target.files || e.dataTransfer.files;
  if (files[0] && files[0].type.match('image.*')) {
    var reader = new FileReader();
    reader.onload = function (e) {
      // $upload.hide();
      if (cr_img == '') { //第一次上傳
        cr_img = e.target.result;
        cropInit();
      } else { // 綁定照片
        cr_img = e.target.result;
        bindCropImg();
      }
      $crop.css("display", "flex");
      $(".cr-boundary").css("height", $(".cr-boundary").width());
      $(".cr-viewport").css("height", $(".cr-boundary").width());

    }
    reader.readAsDataURL(files[0]);
  }

}

//********* crop *********
//裁切設定
function cropInit() {

  cr = $crop_pie.croppie({
    mouseWheelZoom: false,
    enableOrientation: true
  });

  $(".cr-slider-wrap").append('<div class="dotRange"></div>', '<button id="cr-rotate" onClick="cropRotate(-90);"><i class="fa-solid fa-rotate-right"></i> Rotate</button>');

  bindCropImg();

}

//綁定圖片
function bindCropImg() {

  // 放大縮小range
  const crRange = document.querySelector(".cr-slider");
  const dotRange = document.querySelector(".dotRange");

  crRange.addEventListener("input", () => {
    setDotRange(crRange, dotRange);
  });

  function setDotRange(crRange, dotRange) {
    const val = crRange.value;
    const min = crRange.min ? crRange.min : 0;
    const max = crRange.max ? crRange.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));

    // Sorta magic numbers based on size of the native UI thumb
    dotRange.style.width = newVal + "%";
  }
  // 放大縮小range

  cr.croppie('bind', {
    url: cr_img
  });

  // 調整crop_area位置
  if ($('.crop_content_area').height() > $('.crop_area').height()) {
    //靠上
    $('.crop_area').css({
      "align-items": "flex-start"
    });
  } else {
    //上下置中
    $('.crop_area').css({
      "align-items": "center"
    });
  }

  $(window).on('resize', function () {
    Resize();
  });

  function Resize() {
    if ($('.crop_content_area').height() > $('.crop_area').height()) {
      //靠上
      $('.crop_area').css({
        "align-items": "flex-start"
      });
    } else {
      //上下置中
      $('.crop_area').css({
        "align-items": "center"
      });
    }
  }


}

//旋轉按鈕
function cropRotate(deg) {
  cr.croppie('rotate', parseInt(deg));
}

//取消裁切
function cropCancel() {
  $(".upload_avatar_area").addClass("uploading");
  $(".dotRange").css("width", "0px");

  $crop.hide();
  file_select.value = "";
  isCrop = 0;

}

//圖片裁切
function cropResult() {

  $(".crop_avatar").addClass("swiper-slide");

  if (!isCrop) {
    isCrop = 0;
    cr.croppie('result', {
      type: 'canvas', // canvas(base64)|html
      // size: {
      // width: img_w,
      //   height: $(".cr-boundary").width()
      // }, //'viewport'|'original'|{width:500, height:500}
      format: 'jpeg', //'jpeg'|'png'|'webp'
      quality: 1 //0~1
    }).then(function (resp) {
      $crop.hide();
      $avatar_result.find('img').attr('src', resp);
      $avatar_result.fadeIn(300);
    });
  }

}

$(window).on('resize', function () {
  Resize();
});

function Resize() {
  $(".cr-boundary").css("height", $(".cr-boundary").width());
  $(".cr-viewport").css("height", $(".cr-boundary").width());
}