function closePopup() {
    var anchorElement = document.querySelector('.rq1ph a');
    if (anchorElement) {
        anchorElement.click();
        console.log('Popup closed.');
    } else {
        console.log('Close button not found.');
    }
}

function getDomaine() {
    return window.location.hostname;
}

if (getDomaine() === 'www.songsterr.com') {
    setInterval(closePopup, 250);
}

console.log('Songstarr autoclick loaded.');