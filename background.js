chrome.browserAction.onClicked.addListener(function(tab) {
  // chrome.tabs.sendMessage(tab.id, "Action");
  chrome.windows.create({url: tab.url, type: "panel"}, function(window) {

  });
});