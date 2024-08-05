document.addEventListener('DOMContentLoaded', function() {
  // Function to repeatedly click the <a> element
  function clickLink() {
    // Select the <a> element inside the <p> with class 'rq1ph'
    var anchorElement = document.querySelector('.rq1ph a');
    if (anchorElement) {
      // Trigger a click event on the <a> element
      anchorElement.click();
    }

    // Call this function again after 100ms
    setTimeout(clickLink, 100);
  }

  // Start the click loop
  clickLink();
});
