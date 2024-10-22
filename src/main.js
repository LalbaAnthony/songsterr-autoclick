
function closePopup() {
    var anchorElement = document.querySelector('.rq1ph a');
    if (anchorElement) {
        anchorElement.click();
        console.log('Popup closed.');
    } else {
        console.log('Close button not found.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Autoclick loaded.');
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            setInterval(closePopup, 250);
            console.log('Autoclick started.');
        });
        console.log('Start button found.');
    } else {
        console.log('Start button not found.');
    }
});