// ==UserScript==
// @name         Google Gruvbox Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Apply Gruvbox dark theme to Google
// @author       @quydev-fs
// @match        https://www.google.com/*
// @match        https://www.google.com/search?*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Gruvbox Dark Colors
    const gruvbox = {
        // Backgrounds
        bg0_h: "#1d2021",    // Darkest
        bg0: "#282828",      // Standard
        bg1: "#3c3836",      // Lighter
        bg2: "#504945",      // Even lighter
        bg3: "#665c54",      // Even more lighter
        bg4: "#7c6f64",      // Lightest
        
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
    };

    // Main styling
    GM_addStyle(`
        /* Global styles */
        body {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* Search bar and input fields */
        .gLFyf, .RNNXgb, .A8SBwf, .a4bIc {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        /* Search button */
        .gNO89b, .Tg7LZd, .UUbT9, .aajZCb {
            background-color: ${gruvbox.blue} !important;
            color: ${gruvbox.bg0} !important;
        }
        
        /* Header/navigation */
        .gb_0, .gb_1, .gb_A, .gb_B, .gb_D, .gb_F, .gb_J, .gb_L, .gb_M, .gb_U, .gb_Z, .gb_y, .gb_z {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* Links */
        a, .LC20lb, .iUh30, .TbwUpd, .NJjxre {
            color: ${gruvbox.blue} !important;
        }
        
        a:visited, .TbwUpd, .VuuXrf {
            color: ${gruvbox.purple} !important;
        }
        
        a:hover, .LC20lb:hover {
            color: ${gruvbox.aqua} !important;
        }
        
        /* Search results */
        .tF2Cxc, .MjjYud, .g {
            background-color: ${gruvbox.bg0} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        /* Result snippets */
        .VwiC3b, .MUxGbd, .lyLwlc {
            color: ${gruvbox.fg2} !important;
        }
        
        /* URL/link display */
        .TbwUpd, .qzEoUe, .iUh30 {
            color: ${gruvbox.green} !important;
        }
        
        /* Buttons */
        button, .EzVRq, .HDKvTb, .Tg7LZd, .gb_Dd, .gb_Qf, .gb_Xf, .gb_vd {
            background-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        button:hover, .gb_Dd:hover, .gb_Qf:hover {
            background-color: ${gruvbox.bg3} !important;
        }
        
        /* Google logo */
        #hplogo, .lnXdpd {
            filter: invert(0.9) hue-rotate(180deg) brightness(1.2) !important;
        }
        
        /* Footer */
        #footer, .fbar, .pHiOh, .uU7dJb {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg3} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        /* Voice search */
        .hb2Smf, .XDyW0e {
            color: ${gruvbox.yellow} !important;
        }
        
        /* Icons */
        .z1asCe, .ExCKkf, .wM6W7d, .M2vV3 {
            color: ${gruvbox.fg4} !important;
        }
        
        /* Menu items and dropdowns */
        .g-menu, .erkvQe, .UjBGL, .aajZCb, .lJ9FBc {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        /* Menu items hover */
        .g-menu-item:hover, .jBkzfb:hover, .ynRric:hover {
            background-color: ${gruvbox.bg2} !important;
        }
        
        /* Search suggestions */
        .sbct, .sbl1, .sbl1p {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
        }
        
        .sbct:hover {
            background-color: ${gruvbox.bg2} !important;
        }
        
        /* Voice dialog */
        .spch, .spch-dlg {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* Settings and tools */
        .hdtb-mn-hd, .hdtbItm, .hdtbUd, .GOE98c, .HbX59e {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* Pagination */
        .SJajHc, .fl, .navend, .csb {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
        }
        
        .SJajHc:hover, .fl:hover {
            background-color: ${gruvbox.bg2} !important;
        }
        
        /* Knowledge panels and side panels */
        .kp-blk, .xpdopen, .ifM9O, .LGOjhe {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        /* Highlight important text */
        .VuuXrf, .q8U8x, .IZ6rdc {
            color: ${gruvbox.yellow} !important;
        }
        
        /* Code and preformatted text */
        code, pre, .s {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg1} !important;
        }
        
        /* Input placeholders */
        ::placeholder {
            color: ${gruvbox.fg4} !important;
            opacity: 0.7 !important;
        }
        
        /* Selection */
        ::selection {
            background-color: ${gruvbox.selection} !important;
            color: ${gruvbox.fg0} !important;
        }
        
        /* Scrollbars */
        ::-webkit-scrollbar {
            width: 12px !important;
            background-color: ${gruvbox.bg1} !important;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: ${gruvbox.bg3} !important;
            border-radius: 6px !important;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background-color: ${gruvbox.bg4} !important;
        }
        
        /* Focus outlines */
        :focus {
            outline: 2px solid ${gruvbox.blue} !important;
            outline-offset: 2px !important;
        }
        
        /* Special search features */
        .M8OgIe, .TQc1id, .ULSxyf {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        /* Google apps menu */
        .gb_E, .gb_oa, .gb_R, .gb_S, .gb_ka {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
        }
    `);

    // Function to apply dynamic styles to new elements
    function applyDynamicStyles() {
        // Apply to dynamically loaded content
        document.querySelectorAll('input[type="text"], input[type="search"]').forEach(el => {
            if (!el.style.backgroundColor || el.style.backgroundColor === '') {
                el.style.backgroundColor = gruvbox.bg1;
                el.style.color = gruvbox.fg;
                el.style.borderColor = gruvbox.bg3;
            }
        });
        
        document.querySelectorAll('button:not([style*="background"])').forEach(el => {
            el.style.backgroundColor = gruvbox.bg2;
            el.style.color = gruvbox.fg;
        });
    }

    // Apply styles immediately
    applyDynamicStyles();
    
    // Re-apply styles periodically for dynamic content
    setInterval(applyDynamicStyles, 1000);
    
    // Also apply on DOM changes
    const observer = new MutationObserver(applyDynamicStyles);
    observer.observe(document.body, { childList: true, subtree: true });

})();
