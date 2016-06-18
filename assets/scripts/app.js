$(function () {
//login按鈕取得使用者輸入名稱 表單引常 登入按鈕 秀出登出按鈕
$("#login").click(function () {
    var userName = $("#user").val();
    $("login-form").fadeOut();
    $("#login").fadeOut();
    $("#result").text("Hi " + userName);
    $("#logout").fadeIn();
});

$("#logout").click(function () {
    $("login-form").fadeIn();
    $("#login").fadeIn();
    $("#result").text("");
    $("#logout").fadeOut();
    $("input").val("");
});

$("#btn").click(function () {
    $("box1").fadeToggle();
});

$("btn").mousedown(function () {
    $("body").append("滑鼠按下去");
});


$(function () {
    var score1 = 0;
    var score2 = 0;
    var total = 0;

    function calculateTotalScores() {
        score1 = $("#q1:checked").val();
        score2 = $("#q2:checked").val();
        total = score1 + score2;
        $("#result").text(total);
    }
    for (var number = 1; number <= 2; number++) {
        $ {
            "#q" + number
        }.change(calculateTotalScores)
    };


});

);





$("btn").mouseup(function () {
$("body").append("滑鼠放開");
});

//$("box1").removeClass(function () {
//        $("body").append("滑鼠放開");
});



});
