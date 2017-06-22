chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "Action") {
    getTabInfo();
  }
});

function func() {
  alert("test");
}

function settop() {
  chrome.app.window.current().setAlwaysOnTop(true);
}

function getTabInfo() {
  chrome.tabs.query(null, function(tab) {
    console.log(tab);
  });

  // chrome.windows.getCurrent(function(currentWindow) {
  //   console.log(currentWindow);
  // });
}