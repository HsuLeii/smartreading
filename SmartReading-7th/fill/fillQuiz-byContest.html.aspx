<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="fillQuiz-byContest.aspx.cs" Inherits="SmartReading.v3.RP.fillQuiz_byContest" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="SmartReading 適性閱讀">
    <meta name="author" content="SmartReading 適性閱讀">
    <title>SmartReading X 科普閱讀力大賽</title>
    <link rel="shortcut icon" type="image/x-icon" href="../Content/images/SR.ico">
    <!-- font-awesome core CSS -->
    <link rel="stylesheet" type="text/css" href="../Content/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="../Content/css/bootstrap-lg.min.css">
    <link rel="stylesheet" type="text/css" href="../Content/css/ie10-viewport-bug-workaround.css">
    <link rel="stylesheet" type="text/css" href="../Content/widgets/fontawesome-free-5.15.3-web/css/all.css">

    <!-- this page widgets CSS -->
    
    <!-- SR core CSS -->
    <link rel="stylesheet" type="text/css" href="../Content/css/promote-styles.css">

    <style>
        /**/
        h2 {
	        text-align: center;
	        color: #183d7d;
	        position:relative;
        }
        h2 > mark {
	        display: inline-block;
	        margin: 0 auto;
	        background-color: #183d7d;
	        color: #FFF;
	        border-radius: 20px 20px 0 0;
	        padding: 8px 30px;
	        text-shadow: 1px 1px rgba(0,0,0,.5);
        }
        h2 > small {
	        display: block;
	        line-height: 1.2;
	        border-top: 3px solid #183d7d;
	        padding-top: 12px;
        }
        h2 >.fa-magic-right {
	        -moz-transform: rotate(-90deg);
	        -webkit-transform: rotate(-90deg);
	        -o-transform: rotate(-90deg);
	        -ms-transform: rotate(-90deg);
	        transform: rotate(-90deg);
        }
        h2 > .choice-mascot{
	        position:absolute;
	        bottom:-15px;
	        right:0;
        }
        .btn-stars-score {
	        font-size: 5em;
	        line-height: 1em;
	        margin-top: 10px;
        }
        .btn-stars-group {
	        margin-top: 5px;
	        margin-bottom: 20px;
        }
        @media (max-width: 768px) {
        .btn-stars-group {
	        text-align: center;
        }
        }
        .btn-stars-group >.btn {
	        background-color: transparent;
	        padding: 0px 2px;
	        color: #777;
        }
        .btn-stars-group >.btn:hover, .btn-stars-group >.btn.hover, .btn-stars-group >.btn.light {
	        color: #FC3;
        }
        .btn-stars-group >.btn.focus, .btn-stars-group >.btn:focus {
	        outline-color: transparent;
        }
        .btn-stars-group >.btn.active, .btn-stars-group >.btn:active {
	        box-shadow: none;
        }

        /**/
        .assessment-score{
	        font-size:3em;
        }
    </style>
</head>
<body>
    <main>
        <!-- fillAssessment-header START/... -->
        <div class="fillAssessment-header">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-5 col-lg-5">
                        <div class="fillAssessment-title">
                            <div class="row">
                                <div class="col-xs-4 col-md-3">
                                    <div class="fillAssessment-title__img">
                                        <img src="../Content/images/fillAssessment/fillAssessment-bySystem-img.png" class="img-responsive center-block">
                                    </div>
                                </div>
                                <div class="col-xs-8 col-md-9">
                                    <div class="fillAssessment-title__text">
                                        <h1>閱讀力大賽 選擇題
                                            <label class="pull-right" id="demo-score">
                                                <span id="span_degree" class=""></span>
                                                <!--<span class="userScore passed bySystem">A+</span>-->
                                            </label>
                                            <small>你已閱讀完此書，請填寫下方測驗。</small>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-2 col-lg-5 col-lg-offset-2">
                        <div class="fillAssessment-book">
                            <div class="row">
                                <div class="col-xs-4">
                                    <div class="fillAssessment-book__front">
                                        <img src="<%--https://smartreading.net/RP/BookContent/BookFront/006.jpg--%>" class="img-responsive center-block">
                                    </div>
                                </div>
                                <div class="col-xs-8">
                                    <div class="fillAssessment-book__intro">
                                        <h2>
                                            <label><%--第一條魚--%></label>
                                        </h2>
                                        <p>
                                            圖書難度：SR
                                            <label><%--187--%></label>
                                        </p>
                                        <p>
                                            分類：
                                            <label><%--成長/生命教育--%></label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .../fillAssessment-header END -->

        <!-- fillAssessment-body START/... -->
        <div class="fillAssessment-body">
            <div id="div_list" class="container">
                <!-- 區塊版型 START -->
                <%--<div class="row">
                    <div class="col-sm-12">
                        <div class="fillAssessment-section">
                            <h3 class="fillAssessment-section__header">學生填寫評量</h3>
                            <div class="fillAssessment-section__body">
                                <!-- 選擇題-學生填寫 start -->
                                <div class="questionType choice">
                                    <label class="questionType__stem">1、「忙碌的爸爸很容易心情不好」中，「忙碌」是什麼意思？</label>
                                    <div class="questionType__area">
                                        <div class="SRradioRound-green">
                                            <input type="radio" id="A" name="Q1" />
                                            <label for="A">繁忙</label>
                                        </div>
                                        <div class="SRradioRound-green">
                                            <input type="radio" id="B" name="Q1" />
                                            <label for="B">匆忙</label>
                                        </div>
                                        <div class="SRradioRound-green">
                                            <input type="radio" id="C" name="Q1" />
                                            <label for="C">勞碌</label>
                                        </div>
                                    </div>
                                </div>
                                <!-- 選擇題-學生填寫 end -->
                            </div>
                        </div>
                    </div>
                </div>--%>
                <!-- 區塊版型 END -->
            </div>

            <!--書籍評分-->
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h2>
                            <i class="fa fa-magic fa-magic-left" aria-hidden="true"></i>&nbsp;
                            <mark>評分</mark>
                            &nbsp;<i class="fa fa-magic fa-magic-right" aria-hidden="true"></i> <small>我是書評家（書籍推薦指數)：請問這本書在心目中能夠得到幾顆星?選完才能按送出喔！ </small>
                        </h2>
                        <div id="div_likeScore" class="btn-stars-score text-center">?</div>
                        <div class="btn-stars-group text-center">
                            <button type="button" class="btn btn_like" title="我非常不喜歡這本書。"><i class="fa fa-star fa-4x"></i></button>
                            <button type="button" class="btn btn_like" title="我不太喜歡這本書。"><i class="fa fa-star fa-4x"></i></button>
                            <button type="button" class="btn btn_like" title="我覺得這本書還不錯。"><i class="fa fa-star fa-4x"></i></button>
                            <button type="button" class="btn btn_like" title="我很喜歡這本書，很好！"><i class="fa fa-star fa-4x"></i></button>
                            <button type="button" class="btn btn_like" title="我非常喜歡這本書，超棒！"><i class="fa fa-star fa-4x"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .../fillAssessment-body END -->

        

        <!-- fillAssessment-footer START/... -->
        <div class="fillAssessment-footer">
            <div class="container">
                <div class="fillAssessment-btns text-center">
                    <button id="btn_back" class="btn btn-lg btn-default" type="button" onclick="goBack()">回閱讀計畫</button>
                    <button id="btn_sent" class="btn btn-lg btn-main" type="submit" onclick="Sent()">送出</button>
                </div>
            </div>
        </div>
        <!-- .../fillAssessment-footer END -->
    </main>
    <!-- ------- ------- ------- ------- ------- ------- ------- -->

    <!-- ------- ------- ------- ------- ------- ------- ------- -->
    <!-- ------- ------- ------- ------- ------- ------- ------- -->
    <!-- ------- ------- ------- ------- ------- ------- ------- -->
    <script src="../Script/jquery.min.js"></script>
    <script src="../Script/bootstrap-lg.min.js"></script>
    <script src="../Script/ie10-viewport-bug-workaround.js"></script> 

    <script src="../Script/urlParameter/myParameter.js"></script>

    <!--大賽相關-->
    <script src="../Script/contest/contest.js"></script>

    <script>
        //星星評分
        $(function () {
            $(".btn-stars-group .btn").hover(function () {
                $(this).addClass("hover")
                    .prevAll().addClass("hover");
            }, function () {
                $(this).parent().find(".btn").removeClass("hover");
            });

            $(".btn-stars-group .btn").click(function () {
                $_countIndex = $(".btn-stars-group .btn").index(this);//算位置
                $_countCss = $_countIndex + 1;//css位置

                $(".btn-stars-group .btn:nth-child(" + $_countCss + ")").addClass("light").html('<i class="fa fa-star fa-4x"></i>');
                $(".btn-stars-group .btn:nth-child(" + $_countCss + ")").prevAll().addClass("light").html('<i class="fa fa-star fa-4x"></i>');
                $(".btn-stars-group .btn:nth-child(" + $_countCss + ")").nextAll().removeClass("light").html('<i class="fa fa-star-o fa-4x"></i>');

                $(".btn-stars-score").html($_countCss);
            });
        });
    </script>
    
    <script>
        //書籍編號
        var bookID = (urlPara["bookID"] == null) ? 0 : urlPara["bookID"];
        var version = "0";  //題目版本
        var count = 0;      //總題數
        var ques_arr = [];  //題目

        //有分數的狀態
        var onlyRead = (urlPara["onlyRead"] == null) ? false : urlPara["onlyRead"]; 
        var degree = (urlPara["degree"] == null) ? "" : urlPara["degree"];  //分數
        var tag = (urlPara["tag"] == null) ? "" : urlPara["tag"];           //分數樣式

        $(document).ready(function () {

            // 禁止右鍵菜單
            document.oncontextmenu = function () { return false; };
            
            if (bookID != "0") Init();
        });

        function Init() {
            window.parent.ShowLoadingImage();

            GetUserInfo();
        }

        //取得相關資訊
        function GetUserInfo() {

            $.ajax({
                type: "POST",
                url: "fillAssessment-byContest.aspx/GetUserInfo",
                data: JSON.stringify({
                    bookID: bookID
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var data = jQuery.parseJSON(decodeURIComponent(response.d));
                    window.parent.getOut(data["myID"]);

                    if (!data["canTest"]) {
                        //不可測驗，回閱讀計畫
                        window.parent.HideLoadingImage();
                        window.parent.CloseModal();
                    }
                },
                error: function (jqXHR, textStatus, err) {
                    console.log("[GetUserInfo]：" + jqXHR.responseText);
                }
            }).then(function () {
                LoadBook();
                LoadQues();

                //撈紀錄
                LoadRecord();
                });
        }

        function LoadBook() {
            $.ajax({
                type: "POST",
                url: "fillQuiz-byContest.aspx/LoadBook",
                data: JSON.stringify({
                    bookID: bookID
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var data = jQuery.parseJSON(decodeURIComponent(response.d));
                    window.parent.getOut(data["myID"]);

                    var book = data["book"];
                    $('.fillAssessment-book__front img').attr("src", book["cover"]);
                    $('.fillAssessment-book__intro h2 label').html(book["name"]);
                    $('.fillAssessment-book__intro').find('p').first().find('label').html(book["SR"]);
                    $('.fillAssessment-book__intro').find('p').next().find('label').html(book["category"]);
                },
                error: function (jqXHR, textStatus, err) {
                    console.log("[Init]：" + jqXHR.responseText);
                }
            }).then(function () {
                
                });
        }

        function LoadQues() {
            $.ajax({
                type: "POST",
                url: "fillQuiz-byContest.aspx/LoadQues",
                data: JSON.stringify({
                    bookID: bookID
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var data = jQuery.parseJSON(response.d);
                    window.parent.getOut(data["myID"]);

                    //清空
                    $("#div_list").empty();

                    //列出題目
                    ques_arr = data["ques_arr"];
                    count = ques_arr.length;
                    if (count > 0) {
                        //題目版本
                        version = ques_arr[0]["version"];

                        //題目列表
                        for (var i = 0; i < count; i++) {
                            var ques = ques_arr[i];
                            var content = JSON.parse(ques["content"]);

                            //選擇題 
                            var obj = '<div class="row"><div class="col-sm-12"><div class="fillAssessment-section"><h3 class="fillAssessment-section__header">學生填寫評量</h3>';
                            obj += '<div class="fillAssessment-section__body"><div class="questionType choice">';
                            //題目
                            obj += '<label class="questionType__stem">' + ques["number"] + '、' + content["topic"] + '</label>';
                            obj += '<div class="questionType__area">';
                            //選項
                            for (var index in content) {
                                if (index != "topic") {
                                    obj += '<div class="SRradioRound-green"><input type="radio" name="ques_' + ques["number"] + '" value="' + index + '" /><label>' + content[index] + '</label></div>';
                                }
                            }
                            obj += '</div></div></div></div></div></div>'; 
                            $("#div_list").append(obj);
                        }
                    }
                },
                error: function (jqXHR, textStatus, err) {
                    console.log("[LoadQues]：" + jqXHR.responseText);
                }
            }).then(function () {
                window.parent.HideLoadingImage(); //隱藏進度

                //學生填寫評量/教師評量批閱 標題 RWD隱藏
                $('.fillAssessment-body>.container>.row:not(:first-child) .fillAssessment-section>.fillAssessment-section__header').addClass('hidden-xs hidden-sm hidden-md hidden-lg');

                //選擇題作答設定
                $('.SRradioRound-green').on('click',  function() {
                    $(this).find('input').prop("checked", true);
                }); 
            });
        }

        //撈作答紀錄
        function LoadRecord() {
            $.ajax({
                type: "POST",
                url: "fillQuiz-byContest.aspx/LoadRecord",
                data: JSON.stringify({
                    bookID: bookID
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var data = jQuery.parseJSON(decodeURIComponent(response.d));
                    window.parent.getOut(data["myID"]);
                    
                    //對書籍的喜歡程度
                    if (data["likeScore"] != "") {
                        $("#div_lokeScore").html(data["likeScore"]);

                        //根據喜歡程度，塗滿相對應的星星數
                        $_countCss = parseInt(data["likeScore"]);//css位置

                        $(".btn-stars-group .btn:nth-child(" + $_countCss + ")").addClass("light").html('<i class="fa fa-star fa-4x"></i>');
                        $(".btn-stars-group .btn:nth-child(" + $_countCss + ")").prevAll().addClass("light").html('<i class="fa fa-star fa-4x"></i>');
                        $(".btn-stars-group .btn:nth-child(" + $_countCss + ")").nextAll().removeClass("light").html('<i class="fa fa-star-o fa-4x"></i>');

                        $(".btn-stars-score").html($_countCss);

                    }
                },
                error: function (jqXHR, textStatus, err) {
                    console.log("[LoadRecord]：" + jqXHR.responseText);
                }
            });
        }

        //送出
        function Sent() {
            window.parent.ShowLoadingImage();

            //判斷是否填寫書籍的喜歡程度
            if ($("#div_likeScore").html() == "?") {
                alert("請選填本書在你心目中的星數。");
                window.parent.HideLoadingImage();
                return;
            }

            //作答紀錄
            var ans_arr = {};

            //檢查是否有題目尚未完成
            var tmp_count = 0;
            var score = 0;
            for (var i = 1; i <= count; i++) {                
                ans_arr[i] = $('input[name="ques_' + i + '"]:checked').val();
                if (!ans_arr[i]) {
                    alert("尚有題目未作答完成喔!");
                    window.parent.HideLoadingImage();
                    return;
                } 
            }

            //儲存答案
            SaveRecord(ans_arr);
        }

        function SaveRecord(ans_arr) {
            $.ajax({
                type: "POST",
                url: "fillQuiz-byContest.aspx/SaveRecord",
                data: JSON.stringify({
                    bookID: bookID,
                    version: version,
                    ans: JSON.stringify(ans_arr),
                    likeScore: $("#div_likeScore").html()
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var data = jQuery.parseJSON(decodeURIComponent(response.d));
                    window.parent.getOut(data["myID"]);
                    
                    //取得分數，並顯示等第
                    $("#span_degree").text(data["degree"]);
                    $("#span_degree").addClass("userScore " + data["tag"]);
                    $("#span_degree").show();

                    //不可更動作答
                    $('.SRradioRound-green').prop("disabled", true);
                    $("#btn_sent").hide();

                    //大賽徽章紀錄
                    checkBadgeRecord(bookID, "add", "evaluation");

                    //閱讀計畫資料重整
                    window.parent.AfterScore();
                },
                error: function (jqXHR, textStatus, err) {
                    console.log("[SaveRecord]：" + jqXHR.responseText);
                }
            }).then(function () {
                window.parent.HideLoadingImage();
                window.scrollTo(0, 0); // 畫面移至最上頭
                });
        }

        //回閱讀計畫
        function goBack() {
            window.parent.CloseModal();
        }

        
    </script>
</body>
</html>
