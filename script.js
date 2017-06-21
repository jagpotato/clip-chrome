chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "Action") {
    settop();
  }
});

function func() {
  alert("test");
}

function settop() {
  chrome.app.window.get("main-view").setAlwaysOnTop(true);
}