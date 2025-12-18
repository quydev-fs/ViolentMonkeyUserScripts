// ==UserScript==
// @name         GooBox - Gruvbox Google (Stable)
// @author       @quydev-fs
// @namespace    https://github.com/quydev-fs
// @version      3.0
// @description  Gruvbox dark theme for Google Search + AI Mode (stable & sane)
// @match        https://www.google.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(() => {
  'use strict';

  /* ================== COLORS ================== */
  const C = {
    bg0: "#282828",
    bg0_h: "#1d2021",
    bg1: "#3c3836",
    bg2: "#504945",
    bg3: "#665c54",
    fg: "#ebdbb2",
    fg0: "#fbf1c7",
    blue: "#83a598",
    purple: "#d3869b",
    aqua: "#8ec07c",
    selection: "#45858833"
  };

  /* ================== CSS (90% WORK) ================== */
  GM_addStyle(`
    :root {
      background: ${C.bg0} !important;
      color: ${C.fg} !important;
    }

    html, body {
      background: ${C.bg0} !important;
      color: ${C.fg} !important;
    }

    * {
      background-color: ${C.bg0} !important;
      color: ${C.fg} !important;
      border-color: ${C.bg3} !important;
    }

    a { color: ${C.blue} !important; }
    a:visited { color: ${C.purple} !important; }
    a:hover { color: ${C.aqua} !important; }

    input, textarea, select {
      background: ${C.bg1} !important;
      color: ${C.fg} !important;
    }

    button {
      background: ${C.bg2} !important;
      color: ${C.fg} !important;
    }

    /* Search bar */
    .gLFyf, .RNNXgb, .A8SBwf, .a4bIc {
      background: ${C.bg1} !important;
      border: 1px solid ${C.bg3} !important;
      border-radius: 24px !important;
    }

    /* Search results */
    .tF2Cxc, .MjjYud, .g {
      background: ${C.bg0} !important;
      border: 1px solid ${C.bg2} !important;
      border-radius: 8px !important;
      padding: 12px !important;
    }

    /* AI Mode containers */
    .os-s, .inner-container, .tonYlb {
      background: ${C.bg1} !important;
      border: 1px solid ${C.bg3} !important;
      border-radius: 8px !important;
    }

    /* AI messages */
    .OxKcRe, .PT8cT, .Ipurxf {
      background: ${C.bg0_h} !important;
      border: 1px solid ${C.bg2} !important;
      border-radius: 8px !important;
    }

    /* Kill bright garbage */
    *[style*="background"],
    *[style*="background-color"],
    *[style*="background-image"] {
      background-image: none !important;
    }

    ::selection {
      background: ${C.selection} !important;
      color: ${C.fg0} !important;
    }
  `);

  /* ================== JS (ONLY FOR NEW NODES) ================== */
  const FORCE_CLASS = 'gruvbox-fixed';

  function forceNode(el) {
    if (!(el instanceof HTMLElement)) return;
    if (el.classList.contains(FORCE_CLASS)) return;

    el.style.backgroundColor = C.bg0;
    el.style.color = C.fg;
    el.style.backgroundImage = 'none';
    el.classList.add(FORCE_CLASS);
  }

  function handleMutations(mutations) {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType !== 1) continue;
        forceNode(node);
        node.querySelectorAll?.('*').forEach(forceNode);
      }
    }
  }

  function startObserver() {
    const obs = new MutationObserver(handleMutations);
    obs.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  if (document.documentElement) {
    startObserver();
  } else {
    document.addEventListener('DOMContentLoaded', startObserver, { once: true });
  }
})();
