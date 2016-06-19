$(function () {

    var $message = $("#message");
    var $yesButton = $("#yesButton");
    var $noButton = $("#noButton");
    var $scene = $("#scene");
    var currentScene = 1;


    function renderScreen() {
        if (currentScene === 1) {
            $message.text("按下乾啦來了解");
            $yesButton.text("乾啦");
            $noButton.hide();

        } else if (currentScene === 4 || currentScene === 6 || currentScene === 7 || currentScene === 10) {
            $yesButton.text("重新來過");
            $noButton.hide();
            $message.text("GG惹!");
        } else if (currentScene === 9) {
            $noButton.hide();
            $message.text("繼續看下去");
        } else {
            $message.text("請選擇 1 或 2");
            $yesButton.text("1");
            $noButton.text("2");
            $noButton.show();
        }
        var url = "images/" + currentScene + ".jpg";
        $scene.attr("src", url);

    }


    function makeDecision(decision) {
        if (currentScene === 1) {
            currentScene = 2;
        } else if (currentScene === 2) {
            currentScene = decision === 1 ? 8 : 3;
        } else if (currentScene === 3) {
            currentScene = decision === 1 ? 4 : 5;
        } else if (currentScene === 5) {
            currentScene = decision === 1 ? 6 : 7;
        } else if (currentScene === 8) {
            currentScene = decision === 1 ? 9 : 10;
        } else if (currentScene === 9) {
            currentScene = 3;
        } else if (currentScene === 4 || currentScene === 6 || currentScene === 7 || currentScene === 10) {
            currentScene = 2;
        }
        renderScreen();
    }

    $yesButton.click(function () {
        makeDecision(1);
    });
    $noButton.click(function () {
        makeDecision(2);
    });


    renderScreen();



});
