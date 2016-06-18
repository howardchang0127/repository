//當檔案讀取完成後 要執行的事
$(function () {
    var $btn1 = $("#btn1");
    var $box1 = $("#box1");
    var $box2 = $("#box2");
    var $btna = $("#btna");


    var isOpened = false;
    $btn1.click(function () {

        if (isOpened) {
            $box1.slideUp(500);
        } else {
            $box1.slideDown(500);
        }

        isOpened = !isOpened;
    });


    $btn1.click(function () {

        $box1.slideDown(500).slideUp(500).fadeIn(500).fadeOut(500);

    });

    var box2Text = $box2.text();
    $box2.mouseenter(function () {
        $box2.text("Hello");
    });

    $box2.mouseleave(function () {
        $box2.text(box2Text);
    });


    $btna.click(function () {

        var ans = $("input[name=q1]:checked").val();
        $("[id^=result]").hide();
        $("#result" + ans).slideDown();

    });


    //$btn1.dbclick(function () {    });
});
