// document.addEventListener('DOMContentLoaded', function() {
  function closePopup() {
    var anchorElement = document.querySelector('.rq1ph a');
    if (anchorElement) {
      anchorElement.click();
      console.log('Popup closed.');
    }

    setTimeout(clickLink, 100);
  }

  closePopup();
// });
