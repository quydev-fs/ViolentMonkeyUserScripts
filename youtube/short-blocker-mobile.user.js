// ==UserScript==
// @name         YouTube Short Blocker (mobile)
// @version      1.0.0
// @description  Hide Shorts tab, chips shelf, and behavior-training UI on m.youtube.com
// @match        *://m.youtube.com/*
// @run-at       document-start
// @grant        none
// @author       @quydev-fs
// @homepageURL  https://github.com/quydev-fs/ViolentMonkeyUserScripts
// ==/UserScript==

(function () {
  'use strict';

  const selectors = [
    '.chip-bar-contents', // chips
    '.pivot-bar-item-tab.pivot-shorts', // Shorts tab (bottom)
    'yt-tab-shape.yt-tab-shape--host-clickable:nth-of-type(3)', // top shelf
    '.ytm-chips-shelf-view-model.ytm-chips-shelf-view-model--is-inner-chips-shelf > div:nth-of-type(1)'
  ];

  const hide = () => {
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.style.setProperty('display', 'none', 'important');
      });
    });
  };
  
  hide();
  new MutationObserver(hide).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
