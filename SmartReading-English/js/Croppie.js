const $upload = $('#upload'),
      $crop = $('#crop'),
      $result = $('#result'),
      $croppie = $('#croppie');

var cr,
    cr_img = '',
    img_w = 320,
    img_h = 320,
    isCrop = 0;

//支援上傳檔案判斷
$(function(){
  if (window.File && window.FileList && window.FileReader)
    fileInit();
  else
    alert('您的裝置不支援圖片上傳');
});

//********* file select/drop *********
var fileselect = document.getElementById("fileselect"),
    filedrag = document.getElementById("filedrag");

function fileInit(){
  // file select
  fileselect.addEventListener("change", FileSelectHandler, false);
  // is XHR2 available?
  
}

// file selection
function FileSelectHandler(e) {
  // cancel event and hover styling
  // FileDragHover(e);
  // fetch FileList object
  var files = e.target.files || e.dataTransfer.files;
  if(files[0] && files[0].type.match('image.*')){
    var reader = new FileReader();
    reader.onload = function (e) {
      // $upload.hide();
      if(cr_img == '') { //第一次上傳
        cr_img = e.target.result;
        cropInit();
      }
      else {// 綁定照片
        cr_img = e.target.result;
        bindCropImg();
      }
      $crop.css("display" , "flex");
    }
    reader.readAsDataURL(files[0]);
  }
}

//********* crop *********
//裁切設定
function cropInit(){
  cr = $croppie.croppie({
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

  $(".cr-slider-wrap").append('<button id="cr-rotate" onClick="cropRotate(-90);"><i class="fa-solid fa-rotate-right"></i> Rotate</button>');

  bindCropImg();
}

//綁定圖片
function bindCropImg() {
  cr.croppie('bind', {
    url: cr_img
  });
}

//旋轉按鈕
function cropRotate(deg) {
  cr.croppie('rotate', parseInt(deg));
}

//取消裁切
function cropCancel() {
  $(".upload_avatar_area").addClass("uploading");
  $crop.hide();
    fileselect.value = "";
    isCrop = 0;
}

//圖片裁切
function cropResult() {
  $(".crop_avatar").addClass("swiper-slide");
  if(!isCrop){
    isCrop = 0;
    cr.croppie('result', {
      type: 'canvas', // canvas(base64)|html
      size: {width:img_w, height:img_h}, //'viewport'|'original'|{width:500, height:500}
      format: 'jpeg', //'jpeg'|'png'|'webp'
      quality: 1 //0~1
    }).then(function (resp) {
      $crop.hide();
      $result.find('img').attr('src', resp);
      $result.fadeIn(300);
    });
  }
  
}