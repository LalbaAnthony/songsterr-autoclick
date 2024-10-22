chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            console.log("This runs on the main page!");
            alert("Hello from your extension!");
        }
    });
});
