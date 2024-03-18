chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentTab = tabs[0];
    if (currentTab.url) {
      if (currentTab.url.includes("go.botmaker.com")) {
        chrome.windows.create({ url: 'popup/index.html', type: 'popup' });
      } else if (currentTab.url.includes("tramitesdigitales.buenosaires.gob.ar")) {
        chrome.windows.create({ url: 'popup/index2.html', type: 'popup' });
      }
    }
  });
});
