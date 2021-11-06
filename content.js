/*
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === 'clicked_browser_action') {
            var firstHref = $("a[href^='http']").eq(0).attr("href");

            console.log(firstHref);

            // send url back
            chrome.runtime.sendMessage({"message": "open_new_tab", "url":firstHref});
        }
    }
);
*/
// simple popup with text:
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt')
    checkPageButton.addEventListener('home', function() {
        chrome.tabs.getSelected(null, function(tab) {
            window.onload=function() {setTimeout(showPopup, 7000)}
            function showPopup() {
                alert("Hello! This is Timed Sloth");
            }
        });

    }, false);
}, false);

