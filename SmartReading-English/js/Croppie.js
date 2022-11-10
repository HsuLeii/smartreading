const $upload = $('#upload'),
  $crop = $('.crop_area'),
  $avatar_result = $('#avatar_result'),
  $crop_pie = $('#crop_pie');

var cr,
  cr_img = '',
  img_w = 320,
  img_h = 320,
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
    }
    reader.readAsDataURL(files[0]);
  }
}

//********* crop *********
//裁切設定
function cropInit() {
  cr = $crop_pie.croppie({
    viewport: {
      width: img_w,
      height: img_h
    },
    boundary: {
      width: img_w,
      height: img_h
    },
    mouseWheelZoom: false,
    enableOrientation: true
  });
  
  $(".cr-slider-wrap").append('<div class="dotRange"></div>','<button id="cr-rotate" onClick="cropRotate(-90);"><i class="fa-solid fa-rotate-right"></i> Rotate</button>');

  bindCropImg();

}

//綁定圖片
function bindCropImg() {
  cr.croppie('bind', {
    url: cr_img
  });

  const crRange = document.querySelector(".cr-slider");
  const dotRange = document.querySelector(".dotRange");

  crRange.addEventListener("input", () => {
    setDotRange(crRange, dotRange);
  });
  setDotRange(crRange, dotRange);


function setDotRange(crRange, dotRange) {
  const val = crRange.value;
  const min = crRange.min ? crRange.min : 0;
  const max = crRange.max ? crRange.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));

  // Sorta magic numbers based on size of the native UI thumb
  dotRange.style.width = newVal + "%";
}

}

//旋轉按鈕
function cropRotate(deg) {
  cr.croppie('rotate', parseInt(deg));
}

//取消裁切
function cropCancel() {
  $(".upload_avatar_area").addClass("uploading");
  $crop.hide();
  file_select.value = "";
  isCrop = 0;
}

//圖片裁切
function cropResult() {
  const dotRange = document.querySelector(".dotRange");

  // Sorta magic numbers based on size of the native UI thumb
  dotRange.style.width = 0 + "%";

  $(".crop_avatar").addClass("swiper-slide");
  if (!isCrop) {
    isCrop = 0;
    cr.croppie('result', {
      type: 'canvas', // canvas(base64)|html
      size: {
        width: img_w,
        height: img_h
      }, //'viewport'|'original'|{width:500, height:500}
      format: 'jpeg', //'jpeg'|'png'|'webp'
      quality: 1 //0~1
    }).then(function (resp) {
      $crop.hide();
      $avatar_result.find('img').attr('src', resp);
      $avatar_result.fadeIn(300);
    });
  }

}