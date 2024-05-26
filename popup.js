document.getElementById('redirect').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const mediumUrlPattern = /^https:\/\/medium\.com\/.+/;
    if (mediumUrlPattern.test(tab.url)) {
      const archiveUrl = `https://archive.ph/${tab.url}`;
      chrome.tabs.update(tab.id, { url: archiveUrl }, (updatedTab) => {
        chrome.scripting.executeScript({
          target: { tabId: updatedTab.id },
          files: ['content.js']
        });
      });
    } else {
      alert("This extension only works on Medium articles.");
    }
  });
});
