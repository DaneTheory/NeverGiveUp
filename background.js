chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    console.log("Tab closed.");
    var newURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    chrome.tabs.create({ url: newURL });
    chrome.tabs.create({ url: newURL });
})