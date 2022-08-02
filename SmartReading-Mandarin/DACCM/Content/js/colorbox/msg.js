function ShowMsg(msg) {
    var html = '<div style="padding:10px; background:#fff;">' + msg + '</div>';

    $.colorbox({
        html: html, //在燈箱中要顯示的html字段
        /*overlayClose: false,
        closeButton: false*/
    });
}