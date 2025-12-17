// ==UserScript==
// @name         YouTube Short Element Blocker
// @match        *://m.youtube.com/*
// @match        *://www.youtube.com/*
// @run-at       document-end
// @grant        none
// @homepageURL  https://github.com/quydev-fs/ViolentMonkeyUserScripts
// @updateURL    https://github.com/quydev-fs/ViolentMonkeyUserScripts/blob/main/tiktok/tiktok-blocker.user.js
// ==/UserScript==

(function () {
  const selectors = [
    'ytd-rich-section-renderer',          // Shorts shelf (desktop)
    'ytd-reel-shelf-renderer',
    'ytd-guide-entry-renderer a[title="Shorts"]',
    '.pivot-bar-item-tab.pivot-shorts',   // Shorts tab (mobile)
    'ytm-rich-item-renderer.is-shorts',
    '.reel-shelf-items',
    '.reel-shelf-header'
  ];

  const nuke = () => {
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.style.display = 'none';
      });
    });
  };

  // chạy ngay
  nuke();

  // YouTube thích load lại DOM như lên cơn, nên ta canh tiếp
  new MutationObserver(nuke).observe(document.body, {
    childList: true,
    subtree: true
  });
})();
