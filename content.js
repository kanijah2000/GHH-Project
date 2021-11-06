// timer button
document.addEventListener('DOMContentLoaded', function() {
    var checkTimerButton = document.getElementById('set-timer')
    checkTimerButton.addEventListener('click', function() {
    // null - don't need event
    // timed alert
        var time = document.getElementById('time-options')
        // get selected option
        var val = time.options[time.selectedIndex].value;
        var text = time.options[time.selectedIndex].text;
        time_int = text.replace(/\D/g,'');
        // hours 
        if (time_int < 3) {
            milliseconds = time_int * 3600000
        }
        // minuts 
        else {
            milliseconds = time_int * 60000
        }

        setTimeout(alert("Hey! You've been working hard! Time to take a 2 minute break."), milliseconds);
        
    }, false);
}, false);