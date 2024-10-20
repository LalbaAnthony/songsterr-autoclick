
function closePopup() {
  var anchorElement = document.querySelector('.rq1ph a');
  if (anchorElement) {
    anchorElement.click();
    console.log('Popup closed.');
  } else {
    console.log('Popup not found.');
  }
}

document.getElementById('start-btn').addEventListener('click', () => {
  setInterval(closePopup, 100);
  console.log('Autoclick started.');
});
