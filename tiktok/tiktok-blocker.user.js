// ==UserScript==
// @name         TikTok Blocker
// @match        *://www.tiktok.com/*
// @match        *://m.tiktok.com/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/quydev-fs/ViolentMonkeyUserScript/refs/heads/main/tiktok/tiktok-blocker.user.js
// @homepageURL  https://github.com/quydev-fs/ViolentMonkeyUserScript/
// ==/UserScript==
(function () {
  // Stop TikTok JS before it breathes
  window.stop();
  window.alert("TikTok blocked");
  document.documentElement.innerHTML = `
    <html>
      <head>
        <title>TikTok Blocked | Script by quydev-fs</title>
      </head>
        </html>
  `;
})();
