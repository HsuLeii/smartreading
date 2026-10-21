function checkBadgeRecord(BOOK_ID, FuncName, Type) {
    var result = "";
    // 取得
    $.ajax({
        url: "../../RP/ashx/CheckBadgeRecord.ashx",
        type: "POST",
        async: false,
        data: { SR_CONTEST: "Contest", BOOK_ID: BOOK_ID, FuncName: FuncName, Type: Type },
        success: function (ReturnData) {
            if (ReturnData === 'log_in_error') {
                alert('登入失敗!請重新登入!');
                window.location.href = window.location.hostname;
            } else {
                result = ReturnData;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // 主機回傳例外:
            console.log('CheckBadgeRecord.ashx[' + errorThrown + '] ');
        }
    });

    return result;
}