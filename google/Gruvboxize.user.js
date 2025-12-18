// ==UserScript==
// @name         Google AI Mode Gruvbox Theme
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Apply Gruvbox dark theme to Google with AI mode support
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
        
        // AI Mode specific
        ai_bg: "#282828",
        ai_chat_bg: "#1d2021",
        ai_border: "#3c3836",
        ai_highlight: "#8ec07c33",
        ai_user: "#83a598",
        ai_assistant: "#fabd2f",
    };

    // Main styling
    GM_addStyle(`
        /* Global styles */
        body, html {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
            font-family: 'Segoe UI', Roboto, sans-serif !important;
        }
        
        /* AI Mode Container */
        #aim-lhs-panel-threads-view-container,
        #aim-chrome-initial-inline-async-container,
        .os-s,
        .inner-container,
        .eMf8ze,
        .m4l7Cf {
            background-color: ${gruvbox.ai_bg} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.ai_border} !important;
        }
        
        /* AI Chat Messages */
        .OxKcRe, .PT8cT, .Ipurxf,
        .zEStpb, .LudIE, .KPdTad,
        .X1jcy, .vx3JKb {
            background-color: ${gruvbox.ai_chat_bg} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 8px !important;
            padding: 12px !important;
            margin: 8px 0 !important;
        }
        
        /* AI Input Fields */
        #spchx, .pz5bj,
        .OxKcRe.PT8cT.Ipurxf,
        .LudIE {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border: 2px solid ${gruvbox.bg3} !important;
            border-radius: 12px !important;
            padding: 12px 16px !important;
            font-size: 16px !important;
        }
        
        .LudIE::placeholder {
            color: ${gruvbox.fg4} !important;
            opacity: 0.7 !important;
        }
        
        /* AI Chat Bubbles */
        .user-message, [data-role="user"] {
            background-color: ${gruvbox.ai_user}22 !important;
            border-left: 4px solid ${gruvbox.ai_user} !important;
        }
        
        .assistant-message, [data-role="assistant"] {
            background-color: ${gruvbox.ai_assistant}22 !important;
            border-left: 4px solid ${gruvbox.ai_assistant} !important;
        }
        
        /* AI Action Buttons */
        [id^="actions-button-"] {
            background-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
            padding: 8px 12px !important;
            margin: 4px !important;
            transition: all 0.2s ease !important;
        }
        
        [id^="actions-button-"]:hover {
            background-color: ${gruvbox.bg3} !important;
            transform: translateY(-1px) !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
        }
        
        /* Main Search Components */
        .gLFyf, .RNNXgb, .A8SBwf, .a4bIc {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border: 2px solid ${gruvbox.bg3} !important;
            border-radius: 24px !important;
        }
        
        /* Search Results */
        .tF2Cxc, .MjjYud, .g,
        .ezI2Eb, .tGKKnb {
            background-color: ${gruvbox.bg0} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 8px !important;
            padding: 16px !important;
            margin-bottom: 16px !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        }
        
        .tF2Cxc:hover, .MjjYud:hover, .g:hover {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg3} !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
            transform: translateY(-2px) !important;
            transition: all 0.2s ease !important;
        }
        
        /* Links and Titles */
        a, .LC20lb, .iUh30, .TbwUpd,
        .NJjxre, .yuRUbf, .DKV0Md {
            color: ${gruvbox.blue} !important;
            text-decoration: none !important;
        }
        
        a:hover, .LC20lb:hover {
            color: ${gruvbox.aqua} !important;
            text-decoration: underline !important;
        }
        
        a:visited, .TbwUpd, .VuuXrf {
            color: ${gruvbox.purple} !important;
        }
        
        /* URL Display */
        .TbwUpd, .qzEoUe, .iUh30 {
            color: ${gruvbox.green} !important;
            font-size: 14px !important;
        }
        
        /* Snippets */
        .VwiC3b, .MUxGbd, .lyLwlc,
        .st, .IsZvec {
            color: ${gruvbox.fg2} !important;
            line-height: 1.6 !important;
        }
        
        /* Buttons */
        button, .EzVRq, .HDKvTb,
        .Tg7LZd, .gb_Dd, .gb_Qf,
        .gb_Xf, .gb_vd, .C7GGae {
            background-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
            padding: 8px 16px !important;
            font-weight: 500 !important;
            transition: all 0.2s ease !important;
        }
        
        button:hover, .gb_Dd:hover, .gb_Qf:hover {
            background-color: ${gruvbox.bg3} !important;
            transform: translateY(-1px) !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
        }
        
        /* Primary Action Buttons */
        .gNO89b, .Tg7LZd, .UUbT9,
        .aajZCb, .GqKJc, .CcNe6e {
            background-color: ${gruvbox.blue} !important;
            color: ${gruvbox.bg0} !important;
            border: none !important;
        }
        
        /* Navigation and Header */
        .gb_0, .gb_1, .gb_A, .gb_B,
        .gb_D, .gb_F, .gb_J, .gb_L,
        .gb_M, .gb_U, .gb_Z, .gb_y,
        .gb_z, #gb, .appbar, #appbar {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
            border-bottom: 1px solid ${gruvbox.bg2} !important;
        }
        
        /* Navigation Links */
        .gb_B, .gb_0a, .gb_R, .gb_S,
        .Wj9PNe, .C6AK7c {
            color: ${gruvbox.fg} !important;
        }
        
        .gb_B:hover, .gb_0a:hover {
            color: ${gruvbox.blue} !important;
            background-color: ${gruvbox.bg2} !important;
        }
        
        /* Search Tabs */
        .hdtb-mn-hd, .hdtbItm, .hdtbUd,
        .GOE98c, .HbX59e, .hdtb-tl-sel {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        .hdtb-tl-sel {
            background-color: ${gruvbox.blue} !important;
            color: ${gruvbox.bg0} !important;
        }
        
        /* Cards and Knowledge Panels */
        .kp-blk, .xpdopen, .ifM9O,
        .LGOjhe, .VjDLd, .ILfuVd,
        .NFQFxe, .g-blk, .knowledge-panel {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 8px !important;
            padding: 16px !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
        }
        
        /* Images in Results */
        [id^="img-"], .rg_i, .IVvPP,
        .img_large, .img_medium {
            border: 2px solid ${gruvbox.bg2} !important;
            border-radius: 8px !important;
            background-color: ${gruvbox.bg1} !important;
        }
        
        [id^="img-"]:hover, .rg_i:hover {
            border-color: ${gruvbox.blue} !important;
            box-shadow: 0 4px 12px rgba(131, 165, 152, 0.2) !important;
        }
        
        /* Voice Search */
        .spch, .spch-dlg, .spchc,
        #spch, #spch-dlg, #spchc {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border: 2px solid ${gruvbox.bg3} !important;
            border-radius: 16px !important;
        }
        
        .hb2Smf, .XDyW0e, .spchx {
            color: ${gruvbox.yellow} !important;
        }
        
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
