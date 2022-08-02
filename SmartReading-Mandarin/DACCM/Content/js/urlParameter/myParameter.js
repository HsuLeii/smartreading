//取url參數值
var strPara = location.search.substring(1);
var urlPara = [];
if (strPara != "") {
    var para_arr, value_arr;
    para_arr = strPara.split("&");
    for (var i = 0; i < para_arr.length; i++) {
        value_arr = para_arr[i].split("=");
        urlPara.push(value_arr[0]);
        urlPara[value_arr[0]] = decodeURIComponent(value_arr[1]);
    }
}