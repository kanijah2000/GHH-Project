// timer button
document.addEventListener('DOMContentLoaded', function() {
    var checkTimerButton = document.getElementById('set-timer')
    checkTimerButton.addEventListener('click', function() {
    // null - don't need event
    // timed alert
        time = document.getElementById('time-options')
        setTimeout(alert("Hey! You've been working hard! Time to take a 2 minute break."),time);
    }, false);
}, false);