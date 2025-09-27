function closePopup() {
    var pElement = document.querySelector('.C83v7g');
    if (pElement) {
        var anchorElement = pElement.querySelector('a');
        if (anchorElement) {
            anchorElement.click();
            console.log('Popup closed.');
        } else {
            console.log('Close button not found.');
        }
    }
}

function getDomaine() {
    return window.location.hostname;
}

if (getDomaine() === 'www.songsterr.com') {
    setInterval(closePopup, 250);
    console.log('Songsterr autoclick loaded.');
}
