// 學校下拉選單
var town = new Array();
town[0] = "";
town[1] = "中正區|安樂區|七堵區|暖暖區|仁愛區|中山區|安樂區|信義區";
town[2] = "松山區|信義區|大安區|中山區|中正區|大同區|萬華區|文山區|南港區|內湖區|士林區|北投區";
town[3] =
    "板橋區|三重區|中和區|永和區|新莊區|新店區|樹林區|鶯歌區|三峽區|淡水區|汐止區|瑞芳區|土城區|蘆洲區|五股區|泰山區|林口區|深坑區|石碇區|坪林區|三芝區|石門區|八里區|平溪區|雙溪區|貢寮區|金山區|萬里區|烏來區";
town[4] = "桃園區|中壢區|大溪區|楊梅區|蘆竹區|大園區|龜山區|八德區|龍潭區|平鎮區|新屋區|觀音區|復興區";
town[5] = "新竹1|新竹2|新竹3";

var school = new Array();
school[0] = "";
school[1] = "學校11|學校12|學校13|學校14|學校15";
school[2] = "學校21|學校22|學校23|學校24|學校25";
school[3] = "學校31|學校32|學校33|學校34|學校35";
school[4] = "學校41|學校42|學校43|學校44|學校45";
school[5] = "學校51|學校52|學校53|學校54|學校55";

var classOptions = new Array();
classOptions[0] = "";
classOptions[1] = "班級111|班級112|班級113|班級114|班級115";
classOptions[2] = "班級221|班級222|班級223|班級224|班級225";
classOptions[3] = "班級331|班級332|班級333|班級334|班級335";
classOptions[4] = "班級441|班級442|班級443|班級444|班級445";
classOptions[5] = "班級551|班級552|班級553|班級554|班級555";

$(document).ready(function () {
    //Populate Select Items
    $('#country').change(function () {
        populateSelectCountry(), populatePart();
    });
    $('#township').change(function () {
        populateSelectTown(), populatePart();
    });
    $('#schoolName').change(function () {
        populateSelectSchool(), populatePart();;
    });
    $('#className').change(function () {
        populatePart();
    });

    //縣市選完改變鄉鎮市區
    function populateSelectCountry() {

        Country = document.getElementById("country").selectedIndex;

        var TownshipElement = document.getElementById("township");

        TownshipElement.disabled = false;

        TownshipElement.length = 0;
        var Township_arr = town[Country].split("|");

        for (var i = 0; i < Township_arr.length; i++) {
            TownshipElement.options[TownshipElement.length] = new Option(Township_arr[i]);
        }

        var SelectTownship = TownshipElement.length;

        //鄉鎮選項改變size
        if (SelectTownship > 10) {
            $("#township").on({
                "change": function () {
                    $(this).blur();
                },
                'focus': function () {
                    $(this).attr('size', 10);
                },
                "blur": function () {
                    $(this).attr('size', 1);
                },
                "keyup": function (e) {
                    if (e.keyCode == 27)
                        $(this).attr('size', 10);
                }
            });
        } else {
            $("#township").on({
                "change": function () {
                    $(this).blur();
                },
                'focus': function () {
                    $(this).attr('size', SelectTownship);
                },
                "blur": function () {
                    $(this).attr('size', 1);
                },
                "keyup": function (e) {
                    if (e.keyCode == 27)
                        $(this).attr('size', SelectTownship);
                }
            });
        }

    }

    //鄉鎮市區選完改變學校名稱
    function populateSelectTown() {

        Town = document.getElementById("township").selectedIndex;

        var schoolNameElement = document.getElementById("schoolName");

        schoolNameElement.disabled = false;

        schoolNameElement.length = 0;
        var schoolName_arr = school[Town].split("|");

        for (var i = 0; i < schoolName_arr.length; i++) {
            schoolNameElement.options[schoolNameElement.length] = new Option(schoolName_arr[i]);
        }

        var SelectSchoolName = schoolNameElement.length;

        //學校選項改變size
        if (SelectSchoolName > 10) {
            $("#schoolName").on({
                "change": function () {
                    $(this).blur();
                },
                'focus': function () {
                    $(this).attr('size', 10);
                },
                "blur": function () {
                    $(this).attr('size', 1);
                },
                "keyup": function (e) {
                    if (e.keyCode == 27)
                        $(this).attr('size', 10);
                }
            });
        } else {
            $("#schoolName").on({
                "change": function () {
                    $(this).blur();
                },
                'focus': function () {
                    $(this).attr('size', SelectSchoolName);
                },
                "blur": function () {
                    $(this).attr('size', 1);
                },
                "keyup": function (e) {
                    if (e.keyCode == 27)
                        $(this).attr('size', SelectSchoolName);
                }
            });
        }
    }

    //學校名稱選完改變班級名稱
    function populateSelectSchool() {

        School = document.getElementById("schoolName").selectedIndex;

        var classOptionsElement = document.getElementById("className");

        classOptionsElement.disabled = false;

        classOptionsElement.length = 0;
        var className_arr = classOptions[School].split("|");

        for (var i = 0; i < className_arr.length; i++) {
            classOptionsElement.options[classOptionsElement.length] = new Option(className_arr[i]);
        }

        var SelectClassName = classOptionsElement.length;

        //班級選項改變size
        if (SelectClassName > 10) {
            $("#className").on({
                "change": function () {
                    $(this).blur();
                },
                'focus': function () {
                    $(this).attr('size', 10);
                },
                "blur": function () {
                    $(this).attr('size', 1);
                },
                "keyup": function (e) {
                    if (e.keyCode == 27)
                        $(this).attr('size', 10);
                }
            });
        } else {
            $("#className").on({
                "change": function () {
                    $(this).blur();
                },
                'focus': function () {
                    $(this).attr('size', SelectClassName);
                },
                "blur": function () {
                    $(this).attr('size', 1);
                },
                "keyup": function (e) {
                    if (e.keyCode == 27)
                        $(this).attr('size', SelectClassName);
                }
            });
        }
    }

    function populatePart() {
        Country = $('#country').val();
        Township = $('#township').val();
        schoolName = $('#schoolName').val();
        className = $('#className').val();
    }
});

//點選縣市改變size
var SelectCountry = $("select[id*=country]").children("option").length;
if (SelectCountry > 10) {
    $("#country").on({
        "change": function () {
            $(this).blur();
        },
        'focus': function () {
            $(this).attr('size', 10);
        },
        "blur": function () {
            $(this).attr('size', 1);
        },
        "keyup": function (e) {
            if (e.keyCode == 27)
                $(this).attr('size', 10);
        }
    });
} else {
    $("#country").on({
        "change": function () {
            $(this).blur();
        },
        'focus': function () {
            $(this).attr('size', SelectCountry - 1);
        },
        "blur": function () {
            $(this).attr('size', 1);
        },
        "keyup": function (e) {
            if (e.keyCode == 27)
                $(this).attr('size', SelectCountry - 1);
        }
    });
}