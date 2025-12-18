// ==UserScript==
// @name         Google AI Mode Gruvbox Theme
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Force Gruvbox dark theme backgrounds on Google with AI mode support
// @author       @quydev-fs
// @match        https://www.google.com/*
// @match        https://www.google.com/search?*
// @match        https://www.google.com/aimode*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Gruvbox Dark Colors
    const gruvbox = {
        // Backgrounds - Force these everywhere
        bg0_h: "#1d2021",    // Darkest background
        bg0: "#282828",      // Main background
        bg1: "#3c3836",      // Secondary background
        bg2: "#504945",      // Interactive background
        bg3: "#665c54",      // Border color
        bg4: "#7c6f64",      // Lightest background
        
        // Foreground
        fg: "#ebdbb2",       // Standard text
        fg0: "#fbf1c7",      // Bright text
        fg1: "#ebdbb2",      // Standard text
        fg2: "#d5c4a1",      // Dim text
        fg3: "#bdae93",      // Dimmer text
        fg4: "#a89984",      // Dimmed text
        
        // Colors
        red: "#fb4934",
        green: "#b8bb26",
        yellow: "#fabd2f",
        blue: "#83a598",
        purple: "#d3869b",
        aqua: "#8ec07c",
        orange: "#fe8019",
        
        // Bright variants
        bright_red: "#cc241d",
        bright_green: "#98971a",
        bright_yellow: "#d79921",
        bright_blue: "#458588",
        bright_purple: "#b16286",
        bright_aqua: "#689d6a",
        bright_orange: "#d65d0e",
        
        // UI Specific
        gray: "#928374",
        light_gray: "#a89984",
        selection: "#45858833", // Blue with transparency
        
        // AI Mode specific
        ai_bg: "#282828",
        ai_chat_bg: "#1d2021",
        ai_border: "#3c3836",
        ai_highlight: "#8ec07c33",
        ai_user: "#83a598",
        ai_assistant: "#fabd2f",
    };

    // Create a style element with !important overrides
    const style = document.createElement('style');
    style.id = 'gruvbox-forced-backgrounds';
    
    // Force background colors on ALL elements with !important
    style.textContent = `
        /* === FORCE BACKGROUND COLORS ON ALL ELEMENTS === */
        
        /* Force backgrounds on root and body */
        html, body {
            background-color: ${gruvbox.bg0} !important;
            background: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* Force backgrounds on all divs */
        div {
            background-color: ${gruvbox.bg0} !important;
            background: ${gruvbox.bg0} !important;
        }
        
        /* Force backgrounds on all sections and articles */
        section, article, aside, header, footer, nav, main {
            background-color: ${gruvbox.bg0} !important;
            background: ${gruvbox.bg0} !important;
        }
        
        /* Force backgrounds on all containers and wrappers */
        .container, .wrapper, .content, .main, .page, .app, .view {
            background-color: ${gruvbox.bg0} !important;
            background: ${gruvbox.bg0} !important;
        }
        
        /* === SPECIFIC GOOGLE CLASSES === */
        
        /* Force backgrounds on ALL Google classes */
        [class*="gb_"], /* All Google bar classes */
        [class^="gb_"], 
        .gLFyf, .RNNXgb, .A8SBwf, .a4bIc,
        .tF2Cxc, .MjjYud, .g, .VwiC3b,
        .kp-blk, .xpdopen, .ifM9O, .LGOjhe,
        .g-menu, .erkvQe, .UjBGL,
        .aajZCb, .lJ9FBc,
        .spch, .spch-dlg, .spchc,
        .hdtb-mn-hd, .hdtbItm, .hdtbUd,
        .GOE98c, .HbX59e,
        .pHiOh, .fbar, .uU7dJb {
            background-color: ${gruvbox.bg0} !important;
            background: ${gruvbox.bg0} !important;
        }
        
        /* Interactive elements */
        button, input, textarea, select {
            background-color: ${gruvbox.bg1} !important;
            background: ${gruvbox.bg1} !important;
        }
        
        /* === AI MODE SPECIFIC === */
        
        /* AI Mode containers - force backgrounds */
        #aim-lhs-panel-threads-view-container,
        #aim-chrome-initial-inline-async-container,
        .os-s,
        .inner-container,
        .eMf8ze,
        .m4l7Cf,
        .tonYlb {
            background-color: ${gruvbox.ai_bg} !important;
            background: ${gruvbox.ai_bg} !important;
        }
        
        /* AI Chat messages */
        .OxKcRe, .PT8cT, .Ipurxf,
        .zEStpb, .LudIE, .KPdTad,
        .X1jcy, .vx3JKb {
            background-color: ${gruvbox.ai_chat_bg} !important;
            background: ${gruvbox.ai_chat_bg} !important;
        }
        
        /* AI Action buttons */
        [id^="actions-button-"] {
            background-color: ${gruvbox.bg2} !important;
            background: ${gruvbox.bg2} !important;
        }
        
        /* === OVERRIDE ANY BACKGROUND IMAGES === */
        
        * {
            background-image: none !important;
        }
        
        [style*="background-color"] {
            background-color: ${gruvbox.bg0} !important;
            background: ${gruvbox.bg0} !important;
        }
        
        [style*="background:"] {
            background: ${gruvbox.bg0} !important;
        }
        
        [style*="background-image"] {
            background-image: none !important;
        }
        
        /* === SPECIFIC BACKGROUND OVERRIDES === */
        
        /* Override any light backgrounds */
        [class*="light"], [class*="white"], [class*="bg-white"] {
            background-color: ${gruvbox.bg0} !important;
        }
        
        [class*="dark"], [class*="black"], [class*="bg-dark"] {
            background-color: ${gruvbox.bg0_h} !important;
        }
        
        /* === DEEP BACKGROUND FORCING === */
        
        /* Target deeply nested elements */
        div > div,
        div > section,
        div > article,
        div > aside {
            background-color: ${gruvbox.bg0} !important;
        }
        
        /* Override inline styles */
        *[style] {
            background-color: ${gruvbox.bg0} !important;
        }
        
        /* === PREVENT TRANSPARENCY ISSUES === */
        
        body::before,
        body::after,
        div::before,
        div::after {
            background-color: transparent !important;
        }
        
        /* === FORCE TEXT COLORS === */
        
        * {
            color: ${gruvbox.fg} !important;
        }
        
        a, [href] {
            color: ${gruvbox.blue} !important;
        }
        
        a:visited {
            color: ${gruvbox.purple} !important;
        }
        
        a:hover {
            color: ${gruvbox.aqua} !important;
        }
        
        /* === BORDER OVERRIDES === */
        
        * {
            border-color: ${gruvbox.bg3} !important;
        }
    `;
    
    // Insert style at the very beginning
    if (document.head) {
        document.head.insertBefore(style, document.head.firstChild);
    } else {
        document.documentElement.appendChild(style);
    }

    // Main styling with comprehensive coverage
    GM_addStyle(`
        /* === MAIN GRUVBOX THEME === */
        
        /* Force background on ALL elements */
        * {
            background-color: ${gruvbox.bg0} !important;
            background: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        /* Root elements */
        html, body, :root {
            background-color: ${gruvbox.bg0} !important;
            background: ${gruvbox.bg0} linear-gradient(${gruvbox.bg0}, ${gruvbox.bg0_h}) !important;
        }
        
        /* Remove any background images */
        body {
            background-image: none !important;
        }
        
        /* Force background on containers */
        .container, .wrapper, .content, .main {
            background-color: ${gruvbox.bg0} !important;
        }
        
        /* === GOOGLE SPECIFIC ELEMENTS === */
        
        /* Google search bar */
        .gLFyf, .RNNXgb, .A8SBwf, .a4bIc {
            background-color: ${gruvbox.bg1} !important;
            border: 2px solid ${gruvbox.bg3} !important;
            border-radius: 24px !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* Search results */
        .tF2Cxc, .MjjYud, .g {
            background-color: ${gruvbox.bg0} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 8px !important;
            padding: 16px !important;
            margin-bottom: 16px !important;
        }
        
        /* Google header/nav */
        #gb, .gb, .appbar, #appbar {
            background-color: ${gruvbox.bg0} !important;
            border-bottom: 1px solid ${gruvbox.bg2} !important;
        }
        
        /* === AI MODE ELEMENTS === */
        
        /* tonYlb class - force background */
        .tonYlb {
            background-color: ${gruvbox.bg1} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 8px !important;
            padding: 12px !important;
            margin: 8px 0 !important;
        }
        
        /* AI containers */
        .os-s, .inner-container, .eMf8ze {
            background-color: ${gruvbox.ai_bg} !important;
            border: 1px solid ${gruvbox.ai_border} !important;
        }
        
        /* AI chat messages */
        .OxKcRe, .PT8cT, .Ipurxf {
            background-color: ${gruvbox.ai_chat_bg} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 8px !important;
        }
        
        /* AI action buttons */
        [id^="actions-button-"] {
            background-color: ${gruvbox.bg2} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* === FORCE BACKGROUND ON SPECIFIC CLASSES === */
        
        /* List of classes to force backgrounds on */
        .AGtNEf, .AU4m8b, .AmvCf, .Bvfzle,
        .CfiFM, .GpOaz, .HbX59e, .iRQHZe,
        .j8c53, .lNKMrf, .nQpXxb, .txxDge,
        .IKA0je, .iQXTJe, .zEStpb, .LudIE,
        .KPdTad, .X1jcy, .vx3JKb, .pz5bj,
        .spchx, .OxKcRe, .PT8cT, .Ipurxf {
            background-color: ${gruvbox.bg1} !important;
        }
        
        /* === OVERRIDE ANY REMAINING BACKGROUNDS === */
        
        /* Target elements by style attribute */
        [style*="background-color: white"],
        [style*="background: white"],
        [style*="background-color: #fff"],
        [style*="background: #fff"],
        [style*="background-color: #ffffff"],
        [style*="background: #ffffff"] {
            background-color: ${gruvbox.bg0} !important;
            background: ${gruvbox.bg0} !important;
        }
        
        [style*="background-color: light"],
        [style*="background: light"] {
            background-color: ${gruvbox.bg1} !important;
            background: ${gruvbox.bg1} !important;
        }
        
        /* === HANDLE GRADIENTS === */
        
        [style*="gradient"] {
            background: ${gruvbox.bg0} !important;
            background-image: none !important;
        }
        
        /* === FORCE BACKGROUND ON SVG AND CANVAS === */
        
        svg, canvas, img {
            background-color: ${gruvbox.bg1} !important;
        }
        
        /* === CUSTOM PROPERTY OVERRIDES === */
        
        :root {
            --background-color: ${gruvbox.bg0} !important;
            --bg-color: ${gruvbox.bg0} !important;
            --color-background: ${gruvbox.bg0} !important;
            --google-gray-50: ${gruvbox.bg0} !important;
            --google-gray-100: ${gruvbox.bg1} !important;
            --google-gray-900: ${gruvbox.bg0_h} !important;
        }
        
        /* === SCROLLBAR STYLING === */
        
        ::-webkit-scrollbar {
            background-color: ${gruvbox.bg1} !important;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: ${gruvbox.bg3} !important;
        }
        
        /* === SELECTION === */
        
        ::selection {
            background-color: ${gruvbox.selection} !important;
            color: ${gruvbox.fg0} !important;
        }
        
        /* === FOCUS STATES === */
        
        :focus {
            outline: 2px solid ${gruvbox.blue} !important;
            background-color: ${gruvbox.bg1} !important;
        }
        
        /* === MOBILE OPTIMIZATION === */
        
        @media (max-width: 768px) {
            * {
                background-color: ${gruvbox.bg0} !important;
            }
            
            .tF2Cxc, .MjjYud, .g {
                background-color: ${gruvbox.bg0} !important;
                padding: 12px !important;
            }
            
            .tonYlb {
                background-color: ${gruvbox.bg1} !important;
                padding: 8px !important;
            }
        }
    `);

    // Function to aggressively force background colors
    function forceBackgroundColors() {
        // Force background on all elements
        const allElements = document.querySelectorAll('*');
        
        allElements.forEach(el => {
            // Skip if already processed
            if (el.hasAttribute('data-gruvbox-forced')) return;
            
            // Force background color
            el.style.backgroundColor = gruvbox.bg0;
            el.style.background = gruvbox.bg0;
            el.style.color = gruvbox.fg;
            
            // Handle specific element types
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
                el.style.backgroundColor = gruvbox.bg1;
            }
            
            if (el.tagName === 'BUTTON') {
                el.style.backgroundColor = gruvbox.bg2;
            }
            
            // Handle Google specific classes
            if (el.className && typeof el.className === 'string') {
                const className = el.className;
                
                // Force background on tonYlb
                if (className.includes('tonYlb')) {
                    el.style.backgroundColor = gruvbox.bg1;
                }
                
                // Force background on AI mode elements
                if (className.includes('OxKcRe') || className.includes('PT8cT') || 
                    className.includes('Ipurxf') || className.includes('zEStpb')) {
                    el.style.backgroundColor = gruvbox.ai_chat_bg;
                }
                
                // Force background on action buttons
                if (el.id && el.id.startsWith('actions-button-')) {
                    el.style.backgroundColor = gruvbox.bg2;
                }
            }
            
            // Remove background images
            el.style.backgroundImage = 'none';
            
            // Mark as processed
            el.setAttribute('data-gruvbox-forced', 'true');
        });
        
        // Force background on body and html specifically
        document.documentElement.style.backgroundColor = gruvbox.bg0;
        document.documentElement.style.background = gruvbox.bg0;
        document.body.style.backgroundColor = gruvbox.bg0;
        document.body.style.background = gruvbox.bg0;
        document.body.style.backgroundImage = 'none';
        
        // Force background on any iframes
        document.querySelectorAll('iframe').forEach(iframe => {
            try {
                if (iframe.contentDocument && iframe.contentDocument.body) {
                    iframe.contentDocument.body.style.backgroundColor = gruvbox.bg0;
                    iframe.contentDocument.body.style.background = gruvbox.bg0;
                }
            } catch (e) {
                // Cross-origin iframe, can't access
            }
        });
        
        // Force background on shadow DOM elements
        document.querySelectorAll('*').forEach(el => {
            if (el.shadowRoot) {
                el.shadowRoot.querySelectorAll('*').forEach(shadowEl => {
                    shadowEl.style.backgroundColor = gruvbox.bg0;
                    shadowEl.style.background = gruvbox.bg0;
                });
            }
        });
    }

    // Apply immediately and aggressively
    forceBackgroundColors();
    
    // Apply continuously to catch new elements
    const forceInterval = setInterval(forceBackgroundColors, 100);
    
    // Mutation observer to catch new elements
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            forceBackgroundColors();
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
    
    // Also observe the entire document
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
    
    // Apply on page load and DOM changes
    document.addEventListener('DOMContentLoaded', forceBackgroundColors);
    window.addEventListener('load', forceBackgroundColors);
    
    // Cleanup
    window.addEventListener('beforeunload', () => {
        clearInterval(forceInterval);
        observer.disconnect();
    });

})();
        /* Icons */
        .z1asCe, .ExCKkf, .wM6W7d,
        .M2vV3, .goxjub, .gb_L {
            color: ${gruvbox.fg4} !important;
            fill: ${gruvbox.fg4} !important;
        }
        
        /* SVG Elements */
        svg, g, path, circle, rect,
        polygon, clippath, defs {
            fill: ${gruvbox.fg4} !important;
            stroke: ${gruvbox.fg4} !important;
        }
        
        /* Menu and Dropdowns */
        .g-menu, .erkvQe, .UjBGL,
        .aajZCb, .lJ9FBc, .ePopTe,
        .G43f7e, .jBkzfb {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
        }
        
        .g-menu-item:hover, .jBkzfb:hover,
        .ynRric:hover, .L3eUgb {
            background-color: ${gruvbox.bg2} !important;
        }
        
        /* Search Suggestions */
        .sbct, .sbl1, .sbl1p,
        .UUbT9 .aajZCb {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
        }
        
        .sbct:hover {
            background-color: ${gruvbox.bg2} !important;
        }
        
        /* Pagination */
        .SJajHc, .fl, .navend,
        .csb, .pagination, .AaVjTc {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-radius: 6px !important;
        }
        
        .SJajHc:hover, .fl:hover {
            background-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.blue} !important;
        }
        
        /* Footer */
        #footer, .fbar, .pHiOh,
        .uU7dJb, #sfooter, .lfootercc {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg3} !important;
            border-top: 1px solid ${gruvbox.bg2} !important;
            padding: 16px 0 !important;
        }
        
        /* Code and Technical Content */
        code, pre, .s, .source-code,
        .programlisting, .notranslate {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg1} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 4px !important;
            font-family: 'Consolas', 'Monaco', monospace !important;
            padding: 4px 8px !important;
        }
        
        /* Highlight Important Text */
        .VuuXrf, .q8U8x, .IZ6rdc,
        .highlight, .emphasized {
            color: ${gruvbox.yellow} !important;
            font-weight: bold !important;
        }
        
        /* Input Placeholders */
        ::placeholder, ::-webkit-input-placeholder,
        ::-moz-placeholder, :-ms-input-placeholder {
            color: ${gruvbox.fg4} !important;
            opacity: 0.7 !important;
        }
        
        /* Selection */
        ::selection {
            background-color: ${gruvbox.selection} !important;
            color: ${gruvbox.fg0} !important;
        }
        
        /* Focus Outlines */
        :focus, :focus-visible {
            outline: 2px solid ${gruvbox.blue} !important;
            outline-offset: 2px !important;
            border-radius: 4px !important;
        }
        
        /* Scrollbars */
        ::-webkit-scrollbar {
            width: 12px !important;
            height: 12px !important;
            background-color: ${gruvbox.bg1} !important;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: ${gruvbox.bg3} !important;
            border-radius: 6px !important;
            border: 2px solid ${gruvbox.bg1} !important;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background-color: ${gruvbox.bg4} !important;
        }
        
        ::-webkit-scrollbar-track {
            background-color: ${gruvbox.bg1} !important;
            border-radius: 6px !important;
        }
        
        /* Loading States */
        .loading, .progress, [role="progressbar"] {
            background-color: ${gruvbox.bg2} !important;
        }
        
        .loading::after, .progress::after {
            background-color: ${gruvbox.blue} !important;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 768px) {
            .tF2Cxc, .MjjYud, .g {
                padding: 12px !important;
                margin-bottom: 12px !important;
            }
            
            .OxKcRe, .PT8cT, .Ipurxf {
                padding: 8px !important;
            }
        }
        
        /* Dark/Light Mode Support */
        @media (prefers-color-scheme: dark) {
            /* Additional dark mode refinements */
            .kp-blk, .knowledge-panel {
                background-color: ${gruvbox.bg0_h} !important;
            }
        }
        
        /* Animation for Interactive Elements */
        button, a, [id^="actions-button-"] {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* Accessibility Improvements */
        [aria-label]:hover::after {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
        }
    `);

    // Function to apply dynamic styles
    function applyDynamicStyles() {
        // Apply to AI mode elements
        document.querySelectorAll('[id^="actions-button-"]').forEach(el => {
            if (!el.hasAttribute('data-gruvbox-styled')) {
                el.style.backgroundColor = gruvbox.bg2;
                el.style.color = gruvbox.fg;
                el.style.borderColor = gruvbox.bg3;
                el.setAttribute('data-gruvbox-styled', 'true');
            }
        });
        
        // Style AI chat inputs
        document.querySelectorAll('.OxKcRe, .PT8cT, .Ipurxf, .zEStpb, .LudIE').forEach(el => {
            if (!el.hasAttribute('data-gruvbox-styled')) {
                el.style.backgroundColor = gruvbox.ai_chat_bg;
                el.style.color = gruvbox.fg;
                el.style.borderColor = gruvbox.bg2;
                el.setAttribute('data-gruvbox-styled', 'true');
            }
        });
        
        // Style images in results
        document.querySelectorAll('[id^="img-"], .rg_i').forEach(el => {
            if (!el.hasAttribute('data-gruvbox-styled')) {
                el.style.borderColor = gruvbox.bg2;
                el.style.backgroundColor = gruvbox.bg1;
                el.setAttribute('data-gruvbox-styled', 'true');
            }
        });
    }

    // Initial application
    applyDynamicStyles();
    
    // Periodic re-application for dynamic content
    const intervalId = setInterval(applyDynamicStyles, 1000);
    
    // Mutation observer for DOM changes
    const observer = new MutationObserver((mutations) => {
        let shouldApply = false;
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                shouldApply = true;
            }
        });
        if (shouldApply) {
            applyDynamicStyles();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        clearInterval(intervalId);
        observer.disconnect();
    });

})();
