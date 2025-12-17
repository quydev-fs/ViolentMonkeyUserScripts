// ==UserScript==
// @name         TikTok Blocker
// @match        *://www.tiktok.com/*
// @match        *://m.tiktok.com/*
// @run-at       document-start
// @grant        none
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
