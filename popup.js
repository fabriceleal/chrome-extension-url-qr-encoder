$(function() {
    var $qrcode = $('#qrcode');
    var $closeme = $('#closeme');
    
    $qrcode.html('Wait for it...');
    
    $closeme.click(function() {
        window.close();
    });
    
    chrome.tabs.getSelected(function(the_tab) {
        if(the_tab && the_tab.url) {
            $qrcode.html('');
            $qrcode.qrcode(the_tab.url);
        }
    });
});