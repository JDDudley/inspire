(function (){
    var clockMode = '24hr'; //default to 24 hour clock
    updateClock();
    function updateClock(){
        var now = new Date();
        var hr24 = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (clockMode == '24hr') {
            var hr = hr24;
        } else {
            if (hr24 > 12) {
                var hr = hr24 - 12;
            } else {
                var hr = hr24;
            }
        }
        $('#time').html(`${hr}:${min}:${sec}`);
        var t = setTimeout(updateClock, 500);
    }

    $('#time').on('click',function(){
        if (clockMode == '24hr') {
            clockMode = '12hr';
            updateClock();
        } else {
            clockMode = '24hr';
            updateClock();
        }
    });
    //greeting
    printGreeting();
    function printGreeting() {
        var now = new Date();
        var hr24 = now.getHours();
        if (hr24 < 12) {
            var greeting = "Good morning, ";
        } else if (hr24 < 5) {
            var greeting = "Good afternoon, ";
        } else {
            var greeting = "Good evening, ";
        }
        var name = localStorage.getItem('inspire-name');
        if (!name) {
            name = prompt('What\'s your name?');
            localStorage.setItem('inspire-name', name);
        }
        $('#greeting').html(greeting + name);
    }
}())