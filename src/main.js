
if (window.location.hostname === 'www.songsterr.com') {
    function closePopup() {
        var pElement = document.querySelector('.C83v7g');
        if (pElement) {
            var anchorElement = pElement.querySelector('a');
            if (anchorElement) {
                // Click on anchor element as an human would do
                anchorElement.click();

                // Delete popup from DOM
                document.querySelector('.C8325s').remove();

                console.log('Popup closed.');
            } else {
                console.error('Close button not found.');
            }
        } else {
            console.error('Popup not found.');
        }
    }

    setInterval(closePopup, 1000);
    console.log('Songsterr autoclick loaded.');
}