if (window.location.hostname === 'www.songsterr.com') {

    function closePopup() {
        var pElement = document.querySelector('.C83v7g');

        if (pElement) {
            var anchorElement = pElement.querySelector('a');

            if (anchorElement) {
                anchorElement.click();

                var popup = document.querySelector('.C8325s');
                if (popup) popup.remove();

                console.log('Popup closed.');
            } else {
                console.log('Close button not found yet.');
            }
        } else {
            console.log('Popup not found yet.');
        }

        // Trigger "Escape" key event to close any remaining popups
        var escEvent = new KeyboardEvent('keydown', {
            key: 'Escape',
            bubbles: true
        });
        document.dispatchEvent(escEvent);

        setTimeout(closePopup, 1000);
    }

    closePopup();

    console.log('Songsterr autoclick loaded.');
}
