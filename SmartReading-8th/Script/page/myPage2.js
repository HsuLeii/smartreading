var pageIndex = 0;//第幾頁
var itemCount = 0;//項目總量
var pageCount = 0;//總頁數
var pageLength = 10;//每頁項目數量

function pageInit() {
    if (itemCount == 0) {
        $("#div_page").css("display", "none");
        return;
    } else {
        $("#div_page").css("display", "block");
    }

    //總頁數
    pageCount = Math.ceil(itemCount / pageLength);
    $("#pageCount_txt").html(pageCount);
        
    //pageIndex = 0;
    //pageBtnReset();
}

//到第一頁
function toFirstPage() {
    pageIndex = 0;
    //pageBtnReset();
}

//到最後一頁
function toLastPage() {
    pageIndex = pageCount - 1;
    //pageBtnReset();
}

//往前一頁
function toPrePage() {
    if (pageIndex > 0) {
        pageIndex--;
        LoadDataByPage();
        //pageBtnReset();
    }
}

//往後一頁
function toNextPage() {
    if (pageIndex < (pageCount - 1)) {
        pageIndex++;
        LoadDataByPage();
        //pageBtnReset();
    }
}

//到指定頁
function toTargetPage(index) {
    pageIndex = index
    LoadDataByPage();
    //pageBtnReset();
}

function goPageByEnter(event) {
    //按下enter鍵後，才進行搜尋
    if ((event.keyCode || event.which) == 13) {
        goPage();

        //避免按下enter後，畫面重整
        event.cancleBubble = true;
        event.returnValue = false;
    }
}

function goPage() {
    var re = /^\d+$/;

    //先檢查輸入內容是否為數字
    if (re.test($("#txt_goPage").val())) {

        var index = parseInt($("#txt_goPage").val()) - 1;
        if (index >= 0 && index < pageCount) {
            toTargetPage(index);
        } else {
            alert("請輸入正確頁數。");
        }
        
    } else {
        alert("請輸入正確頁數。");
    }
}

//分頁按鈕重整
function pageBtnReset() {
    //顯示列表
    ShowData();

    //頁碼區調整
    $("#div_pageNO").empty();

    if (pageCount <= 7) {
        for (var i = 0; i < pageCount; i++) {
            var NO = i + 1;
            if (pageIndex == i) {
                $("#div_pageNO").append('<label style="color:red"> ' + NO + ' </label>');
            } else {
                $("#div_pageNO").append('<a class="btn btn-default btn-sm " href="javascript:void(0);" role="button" onclick="toTargetPage(' + i + ')">' + NO + '</a>');
            }
        }
    } else {
        //console.log("目前頁碼：", pageIndex +1);
        if (pageIndex < 4) {
            for (var i = 0; i < 5; i++) {
                var NO = i + 1;
                if (pageIndex == i) {
                    $("#div_pageNO").append('<label style="color:red"> ' + NO + ' </label>');
                } else {
                    $("#div_pageNO").append('<a class="btn btn-default btn-lg" href="javascript:void(0);" role="button" onclick="toTargetPage(' + i + ')">' + NO + '</a>');
                }
            }
            $("#div_pageNO").append('<label> ... </label>');
            //最後一頁
            NO = pageCount - 1;
            $("#div_pageNO").append('<a class="btn btn-default btn-lg" href="javascript:void(0);" role="button" onclick="toTargetPage(' + NO + ')">' + pageCount + '</a>');

        } else if (pageCount - pageIndex < 5) {
            $("#div_pageNO").append('<a class="btn btn-default btn-lg" href="javascript:void(0);" role="button" onclick="toTargetPage(1)">1</a>');
            $("#div_pageNO").append('<label> ... </label>');
            for (var i = pageCount - 4; i <= pageCount; i++) {
                var index = i - 1;
                if (pageIndex == index) {
                    $("#div_pageNO").append('<label style="color:red"> ' + i + ' </label>');
                } else {
                    $("#div_pageNO").append('<a class="btn btn-default btn-lg" href="javascript:void(0);" role="button" onclick="toTargetPage(' + index + ')">' + i + '</a>');
                }
            }
        } else {
            var index = pageIndex;
            //第一頁
            $("#div_pageNO").append('<a class="btn btn-default btn-lg" href="javascript:void(0);" role="button" onclick="toTargetPage(1)">1</a>');
            $("#div_pageNO").append('<label> ... </label>');
            //中間三頁
            for (var i = pageIndex - 1; i <= pageIndex + 1; i++) {
                var NO = i + 1;
                if (pageIndex == i) {
                    $("#div_pageNO").append('<label style="color:red"> ' + NO + ' </label>');
                } else {
                    $("#div_pageNO").append('<a class="btn btn-default btn-lg" href="javascript:void(0);" role="button" onclick="toTargetPage(' + i + ')">' + NO + '</a>');
                }
            }
            $("#div_pageNO").append('<label> ... </label>');
            //最後一頁
            index = pageCount - 1;
            $("#div_pageNO").append('<a class="btn btn-default btn-lg" href="javascript:void(0);" role="button" onclick="toTargetPage(' + index + ')">' + pageCount + '</a>');
        }
    }

    //分頁按鈕重整
    //去除不可點選的樣式
    //$("#Btn_first").removeClass("disabled");
    $("#Btn_pre").removeClass("disabled");
    $("#Btn_next").removeClass("disabled");
    //$("#Btn_last").removeClass("disabled");

    //第一頁，按鈕顯示情況
    if (pageIndex == 0) {
        //$("#Btn_first").prop("disabled", true);
        $("#Btn_pre").prop("disabled", true);
        //$("#Btn_first").addClass("disabled");
        $("#Btn_pre").addClass("disabled");

        //只有一頁的情況
        if (pageCount == 1) {
            $("#Btn_next").prop("disabled", true);
            //$("#Btn_last").prop("disabled", true);
            $("#Btn_next").addClass("disabled");
            //$("#Btn_last").addClass("disabled");
        } else {
            $("#Btn_next").prop("disabled", false);
            $("#Btn_last").prop("disabled", false);
        }
        
        return;
    }
    //最後一頁，按鈕顯示情況
    if (pageIndex == (pageCount - 1)) {
        //$("#Btn_first").prop("disabled", false);
        $("#Btn_pre").prop("disabled", false);
        $("#Btn_next").prop("disabled", true);
        //$("#Btn_last").prop("disabled", true);
        $("#Btn_next").addClass("disabled");
        //$("#Btn_last").addClass("disabled");
        
        return;
    }

    //$("#Btn_first").prop("disabled", false);
    $("#Btn_pre").prop("disabled", false);
    $("#Btn_next").prop("disabled", false);
    //$("#Btn_last").prop("disabled", false);
}