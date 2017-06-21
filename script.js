chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "Action") {
    func();
  }
});

function func() {
  alert("test");
}