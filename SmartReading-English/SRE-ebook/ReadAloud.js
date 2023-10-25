/* 串流相關 */
const SERVER_PATH = "smil.empowerchinese.net";//"smildemo.csie.ntnu.edu.tw"; //"smil.empowerchinese.net";
const PORT = "8366";
var gDetect_error = false; //if occur error diable record button

var average_score = 0;

// var tt = new Transcription();
var dictate;

function setDictate() {
    dictate = new Dictate({
        server: "wss://" + SERVER_PATH + ":" + PORT + "/client/ws/speech",
        serverStatus: "wss://" + SERVER_PATH + ":" + PORT + "/client/ws/status",
        recorderWorkerPath: '../Content/lib/recorderWorker.js',
        onReadyForSpeech: function () {
            console.log("[onReadyForSpeech]", "READY FOR SPEECH");

            $("#span_wait").text("");

            //計時 (正式開始錄音)
            time = timeTotal;
            timer = setTimeout(countTime, 1000);
        },
        onEndOfSpeech: function (_hasScore) {
            console.log("[onEndOfSpeech]", "END OF SPEECH");
            //__status("End of speech...");
            //__updatePrompt("Wait a minute ... ");
        },
        onEndOfSession: function () {
            console.log("[onEndOfSession]", "End of session");
        },
        onServerStatus: function (json) {
            //__serverStatus(json.num_workers_available + ':' + json.num_requests_processed);
            console.log(json.num_workers_available + ':' + json.num_requests_processed);
            console.log("Available workers", json.num_workers_available);
            //check if worker amount
            if (json.num_workers_available == 0 || gDetect_error) {
                console.log("[onServerStatus]", "狀態：不可錄音");
            } else {
                console.log("[onServerStatus]", "狀態：可錄音");
            }
        },
        onPartialResults: function (hypos) {
            // TODO: demo the case where there are more hypos
            // tt.add(hypos[0].transcript, false);
            //__updateTranscript(tt.toString());
            console.log("[onPartialResults]", hypos);
        },
        onResults: function (trans_list, word_score_list, word_fluency_score_list, phone_list, phone_duration_list, stress_list, sound_phone_list) {
            console.log("trans_list: ", trans_list);
            console.log("word_score_list: ", word_score_list);

            //__SetFinalPrompt(trans_list, word_score_list);
            if (trans_list != "...") {
                trans_arr = trans_list;
                wordScore_arr = word_score_list;
            } else {
                trans_arr = [];
                wordScore_arr = [];
            }
            
        },
        onWavBlob: function (blob) {
            console.log("[onWavBlob]", blob);
            myBlob = blob;
            audio2 = document.createElement("audio");

            //拿到blob音頻url
            audio2.src = URL.createObjectURL(myBlob);
        },
        onError: function (code, data) {
            // gDetect_error = true;
            // $("#buttonStart").prop("disabled", true);
            //document.getElementById("buttonStart").style.cursor = "not-allowed";
            __error(code, data);
            dictate.cancel();
        },
        onEvent: function (code, data) {
            //$("#buttonStart").prop("disabled", false);
            //document.getElementById("buttonStart").style.cursor = null;
            if (code == 8) {
                var data = JSON.parse(data);
                //__message(data);
            }
            //__updatePrompt("");
        }
    });

    dictate.init();
}

function __error(code, data) {
    if (code == 5) {
        gDetect_error = true;
        //$("#buttonStart").prop("disabled", true);
        console.log("Please insert your microphone!");
        //errMsg.innerHTML = "Please insert your microphone!";
    } else if (code == 6) {
        console.log("ERR: " + code + ": " + data);
        //var start = document.getElementById("buttonStart");
        //var stop = document.getElementById("buttonStop");
        //start.style.display = "block";
        //stop.style.display = "none";
        //errMsg.innerHTML = data;
    } else if (code == 12) {
        console.log("ERR: " + code + ": " + data);
        //var start = document.getElementById("buttonStart");
        //var stop = document.getElementById("buttonStop");
        //start.style.display = "block";
        //stop.style.display = "none";
        //errMsg.innerHTML = data;
    } else {
        console.log("ERR: " + code + ": " + data);
    }
}

/* 串流相關 */

/* 唸讀模式-按鈕設定 */
$('a[href="#recording_modal"]').click(function () {
    $(this).modal({
        clickClose: false
    });
});

$('a[href="#recording_result_modal"]').click(function () {
    $(this).modal({
        clickClose: false
    });
});

var mp3_index = 0;
function ReadModal(index) {
    //聲音檔索引
    mp3_index = index;

    //初始按鈕狀態
    $("#Btn_playRec").attr("disabled", true);
    $("#Btn_send").attr("href", "#recording_modal").addClass("recording_modal_close").css("cursor","default");
}

//播放句子
$("#Btn_listen").click(function () {
    if (!$(".sound_bar_area").hasClass("play_animation")) {
        //播放
        $(".sound_bar_area").addClass("play_animation");
        $(this).addClass("active");
        $(this).find(".modal_text_play_tw").html("停止播放");
        $(this).find(".modal_text_play_en").html("停止播放英文");
        $(this).find("i").removeClass("fa-play").addClass("fa-stop");

        $("#Btn_record").attr("disabled", true);
        $("#Btn_playRec").attr("disabled", true);

        Read_playSentence(mp3_index, 1);
    } else {
        //停止播放
        audio.pause();
        audio.currentTime = 0;

        $(".sound_bar_area").removeClass("play_animation");
        $(this).removeClass("active");
        $(this).find(".modal_text_play_tw").html("播放句子");
        $(this).find(".modal_text_play_en").html("Play sentence audio");
        $(this).find('i').removeClass("fa-stop").addClass("fa-play");

        $("#Btn_record").attr("disabled", false);
        $("#Btn_playRec").attr("disabled", false);
    }
});

//播放老師的聲音
$("#Btn_listen2").click(function () {
    if (!$(".sound_bar_area").hasClass("play_animation")) {
        //播放
        $(".sound_bar_area").addClass("play_animation");
        $(this).addClass("active");
        $(this).find("i").removeClass("fa-play").addClass("fa-stop");

        $("#Btn_playRec2").attr("disabled", true);

        Read_playSentence(mp3_index, 0);
    } else {
        //停止播放
        audio.pause();
        audio.currentTime = 0;

        $(".sound_bar_area").removeClass("play_animation");
        $(this).removeClass("active");
        $(this).find('i').removeClass("fa-stop").addClass("fa-play");

        $("#Btn_playRec2").attr("disabled", false);
    }
});

//錄音
$("#Btn_record").click(function () {

    if ($(this).attr("atWork") == "0") {
        $(this).attr("atWork", "1");

        //錄製中閃爍效果
        $(".sound_bar_area").addClass("play_animation");

        $(this).addClass("active");
        $(this).find("i").removeClass("fa-play").addClass("fa-stop");

        $("#Btn_listen").attr("disabled", true);
        $("#Btn_playRec").attr("disabled", true);
        $("#Btn_send").attr("href", "#recording_modal").addClass("recording_modal_close").css("cursor", "default");

        time = timeTotal;
        //開始錄音
        startRec();

    } else {
        $(this).attr("atWork", "0");
        $(this).removeClass("active");

        //停止錄音
        stopRec();
    }
});

//句子播放
function Read_playSentence(index, inRecord) {
    audio.src = path + 'audio/' + mp3_arr[index];
    //console.log(mp3_arr[index]);
    audio.volume = audio_volume;    //音量 
    audio.playbackRate = audio_rate;//語速
    audio.play();

    audio.onended = function () {
        $(".sound_bar_area").removeClass("play_animation");

        switch (inRecord) {
            case 0:
                //看回饋
                $("#Btn_listen2").removeClass("active");
                $("#Btn_listen2").find('i').removeClass("fa-stop").addClass("fa-play");

                $("#Btn_playRec2").attr("disabled", false);
                break;

            case 1:
                //錄音狀態
                $("#Btn_listen").removeClass("active");
                $("#Btn_listen").find("p").html("播放句子");
                $("#Btn_listen").find('i').removeClass("fa-stop").addClass("fa-play");

                $("#Btn_record").attr("disabled", false);
                break;
        }
    }
}

//唸讀相關
var trans_arr = [];
var wordScore_arr = [];

//送出-取得報表並記錄分數
$("#Btn_send").click(function () {    
    if (trans_arr.length != 0) {
        startSpin();
        
        $.ajax({
            type: "POST",
            url: "ebook_cn.aspx/GetReport",
            data: JSON.stringify({
                path: path,
                text: speak_text0,
                trans_arr: trans_arr,
                wordScore_arr: wordScore_arr
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var data = jQuery.parseJSON(decodeURIComponent(response.d));
                getOut(data["myID"]);

                //總評語
                $("#div_comment").removeClass().addClass(data["commentClass"]);
                $("#div_comment").html("<h4>" + data["comment"] + "</h4>");

                //單字表現
                $("#recordingResult").html("<h4>" + data["log_tmp"] + "</h4>");
            },
            error: function (jqXHR, textStatus, err) {
                console.log("GetReport", jqXHR.responseText);
            }
        }).then(function () {
            stopSpin(); //隱藏進度
        });
    } else {
        //沒有錄製成功
        var pathName = location.pathname;
        if (pathName.indexOf("ebook_tw") != -1) {
            $("#div_comment").html("<h4>你沒有錄音成功，可以再錄一次。</h4>");
        } else if (pathName.indexOf("ebook_cn") != -1) {
            $("#div_comment").html("<h4>你没有录音成功，可以再录一次。</h4>");
        }
        $("#div_comment").removeClass().addClass("results_comments_item");
        $("#recordingResult").html("<h4></h4>");
    }
});

//重錄
$("#Btn_reRecord").click(function () {
    $("#Btn_playRec").attr("disabled", true);
    $("#Btn_send").attr("href", "#recording_modal").addClass("recording_modal_close").css("cursor", "default");

    trans_arr = [];
    wordScore_arr = [];
});
/* 唸讀模式-按鈕設定 */

/* 錄音、播放錄音 */
var rec;            //錄音用
var myBlob;         //音訊
var audio2;         //audio
var timeTotal = 20; //總秒數(設定此參數，避免無限錄音)
var time = 0;       //錄音累計秒數
var timer;          //計時器
var timer_on = false; //計時器是否開啟

//開始錄音
function startRec() {
    //音訊清空
    myBlob = "";

    //開始錄音(串流用)
    dictate.startListening(speak_text);

    //倒數計時
    timeTotal = 20;
    timer_on = true;
    countTime();
};

//錄音計時
function countTime() {
    //console.log("錄音計時", time);
    if (timer_on) {
        time--;

        if (time >= 0) {
            timer = setTimeout(countTime, 1000);

        } else {
            $("#Btn_startRec").attr("atWork", "0");
            stopRec();//時間到，停止錄音
        }
    }
}

//停止錄音
function stopRec() {
    //停止計時
    timer_on = false;
    clearTimeout(timer);

    //停止錄音，得到了錄音文件blob二進制對象，想幹嘛就幹嘛
    dictate.stopListening();

    //停止錄音，移除閃爍效果
    $(".sound_bar_area").toggleClass("play_animation");

    $("#Btn_record").find('i').addClass("fa-microphone-lines").removeClass("fa-stop");
    $("#Btn_playRec").attr("disabled", false);
    $("#Btn_listen").attr("disabled", false);
    $("#Btn_send").attr("href", "#recording_result_modal").removeClass("recording_modal_close").css("cursor", "pointer");
};

//播放錄音
$("#Btn_playRec").click(function () {

    if ($(this).find('i').hasClass("fa-play")) {
        //播放中閃爍效果
        $(".sound_bar_area").toggleClass("play_animation");
        $(this).find('i').addClass("fa-stop").removeClass("fa-play");

        //播放中，不可錄製
        $("#Btn_startRec").attr("disabled", true);
        $("#Btn_listen").attr("disabled", true);

        //播放
        audio2.volume = audio_volume;    //音量 
        audio2.playbackRate = audio_rate;//語速
        audio2.play();
        audio2.onended = function () {
            setBtnLayout(1);
        }
    } else {

        //停止播放
        audio2.pause();
        audio2.currentTime = 0;

        setBtnLayout(1);

    }
});

//播放你的聲音
$("#Btn_playRec2").click(function () {

    if ($(this).find('i').hasClass("fa-play")) {
        console.log("你的聲音");
        //播放中閃爍效果
        $(".sound_bar_area").toggleClass("play_animation");
        $(this).find('i').addClass("fa-stop").removeClass("fa-play");


        $("#Btn_listen2").attr("disabled", true);

        //播放
        audio2.volume = audio_volume;    //音量 
        audio2.playbackRate = audio_rate;//語速
        audio2.play();
        audio2.onended = function () {
            setBtnLayout(0);
        }
    } else {

        //停止播放
        audio2.pause();
        audio2.currentTime = 0;

        setBtnLayout(0);

    }
});

function setBtnLayout(inRecord) {

    switch (inRecord) {
        case 0:
            //看回饋

            $("#Btn_listen2").attr("disabled", false);
            $("#Btn_playRec2").find('i').addClass("fa-play").removeClass("fa-stop");
            break;

        case 1:
            //錄音狀態

            //可以再次錄製
            $("#Btn_listen").attr("disabled", false);
            $("#Btn_startRec").attr("disabled", false);
            $("#Btn_playRec").find('i').addClass("fa-play").removeClass("fa-stop");
            break;
    }

    if ($(".sound_bar_area").hasClass("play_animation")) $(".sound_bar_area").removeClass("play_animation");
}
/* 錄音、播放錄音 */