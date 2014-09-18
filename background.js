
function onClickHandler(info, tab) {
    var selectedText = info.selectionText;
    chrome.tabs.create({ selected: true, url: "search/search.html?q=" + encodeURI(selectedText) });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.contextMenus.create({ "title": "Search torrent with this text", "id": "torrent_search_text", contexts: ["selection"] });

chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ selected: true, url: "search/search.html" });
});