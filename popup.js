$(function() {
    var $qrcode = $('#qrcode');
    
    $qrcode.html('Wait for it...');
    
    chrome.tabs.getSelected(function(the_tab) {
        if(the_tab && the_tab.url) {
            $qrcode.html('');
            $qrcode.qrcode(the_tab.url);
        }
    });
});