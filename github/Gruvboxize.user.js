// ==UserScript==
// @name         GitHub Gruvbox Theme
// @namespace    https://github.com/quydev-fs/ViolentMonkeyUserScripts
// @version      1.2
// @description  Apply Gruvbox dark theme to GitHub with enhanced code view
// @author       @quydev-fs
// @match        https://github.com/*
// @match        https://*.github.com/*
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
        gray: "#928374",
        
        // Bright variants
        bright_red: "#cc241d",
        bright_green: "#98971a",
        bright_yellow: "#d79921",
        bright_blue: "#458588",
        bright_purple: "#b16286",
        bright_aqua: "#689d6a",
        bright_orange: "#d65d0e",
        
        // UI Specific
        selection: "#45858833",
        border: "#3c3836",
        
        // Syntax highlighting colors
        syntax_comment: "#928374",
        syntax_keyword: "#fb4934",
        syntax_string: "#b8bb26",
        syntax_number: "#d3869b",
        syntax_function: "#83a598",
        syntax_variable: "#ebdbb2",
        syntax_type: "#fabd2f",
        syntax_constant: "#d3869b",
        syntax_operator: "#83a598",
        syntax_preprocessor: "#8ec07c",
        syntax_attr_name: "#83a598",
        syntax_tag: "#fb4934",
    };

    // Main styling with !important overrides
    GM_addStyle(`
        /* === ROOT AND BASE STYLES === */
        
        :root {
            --color-canvas-default: ${gruvbox.bg0} !important;
            --color-canvas-subtle: ${gruvbox.bg1} !important;
            --color-canvas-inset: ${gruvbox.bg0_h} !important;
            --color-border-default: ${gruvbox.bg3} !important;
            --color-border-muted: ${gruvbox.bg2} !important;
            --color-border-subtle: ${gruvbox.bg1} !important;
            --color-fg-default: ${gruvbox.fg} !important;
            --color-fg-muted: ${gruvbox.fg3} !important;
            --color-fg-subtle: ${gruvbox.fg4} !important;
            --color-accent-fg: ${gruvbox.blue} !important;
            --color-accent-emphasis: ${gruvbox.bright_blue} !important;
            --color-success-fg: ${gruvbox.green} !important;
            --color-danger-fg: ${gruvbox.red} !important;
            --color-attention-fg: ${gruvbox.yellow} !important;
            --color-done-fg: ${gruvbox.purple} !important;
        }
        
        /* =================================================================
           GITHUB CODE VIEW SPECIFIC STYLES
           ================================================================= */
        
        /* === CODE VIEW CONTAINER === */
        
        /* Main code view container */
        .react-code-file-contents,
        .CodeView-module__SplitPageLayout_Content--qxR1C,
        .CodeViewHeader-module__Box--PofRM,
        .react-code-view-bottom-padding,
        .react-code-view-header-element--narrow,
        .react-code-view-header-element--wide,
        .react-code-view-header-wrap--narrow {
            background-color: ${gruvbox.bg0_h} !important;
            border-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* Code lines container */
        .react-code-lines,
        .react-code-line-contents-no-virtualization,
        .react-no-virtualization-wrapper,
        .react-no-virtualization-wrapper-lines,
        .react-line-numbers-no-virtualization {
            background-color: ${gruvbox.bg0_h} !important;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important;
            font-size: 12px !important;
            line-height: 1.5 !important;
        }
        
        /* Individual code lines */
        .react-file-line,
        .react-code-text,
        .react-line-number {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg} !important;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important;
        }
        
        /* Line numbers */
        [data-line-number],
        .react-line-number,
        .code-navigation-cursor {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg3} !important;
            border-right: 1px solid ${gruvbox.bg2} !important;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important;
            font-size: 12px !important;
            padding: 0 10px !important;
            text-align: right !important;
            min-width: 50px !important;
        }
        
        /* Selected/hovered lines */
        .react-file-line:hover,
        .code-navigation-cursor {
            background-color: ${gruvbox.bg1} !important;
        }
        
        /* === BLOB VIEW HEADER === */
        
        .BlobViewHeader-module__Box--pvsIA,
        .BlobViewHeader-module__Box_1--PPihg,
        .BlobViewHeader-module__Box_2--G_jCG,
        .BlobViewHeader-module__Box_3--Kvpex,
        .BlobViewHeader-module__Box_4--vFP89,
        .react-blob-sticky-header,
        .react-blob-view-header-sticky {
            background-color: ${gruvbox.bg0} !important;
            border-bottom: 1px solid ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* Header buttons */
        .BlobViewHeader-module__IconButton--uO1fA,
        .BlobViewHeader-module__IconButton_2--KDy6i,
        .BlobViewHeader-module__LinkButton--DMph4,
        .react-blob-header-edit-and-raw-actions,
        .react-blob-header-edit-and-raw-actions-combined {
            background-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
        }
        
        .BlobViewHeader-module__IconButton--uO1fA:hover,
        .BlobViewHeader-module__IconButton_2--KDy6i:hover {
            background-color: ${gruvbox.bg3} !important;
            border-color: ${gruvbox.bg4} !important;
        }
        
        /* === SYNTAX HIGHLIGHTING === */
        
        /* Base code styling */
        .pl-c, /* comment */
        .pl-c1 /* constant, numeric, label */ {
            color: ${gruvbox.syntax_comment} !important;
            font-style: italic !important;
        }
        
        .pl-k, /* keyword */
        .pl-kos /* keyword operator symbol */ {
            color: ${gruvbox.syntax_keyword} !important;
            font-weight: bold !important;
        }
        
        .pl-s, /* string */
        .pl-s1 /* string content */,
        .pl-pds /* punctuation definition string */ {
            color: ${gruvbox.syntax_string} !important;
        }
        
        .pl-v, /* variable */
        .pl-en /* entity name function */ {
            color: ${gruvbox.syntax_variable} !important;
        }
        
        .pl-e, /* entity */
        .pl-ent /* entity tag */ {
            color: ${gruvbox.syntax_type} !important;
        }
        
        .pl-smi, /* storage modifier import */
        .pl-ent /* entity tag */ {
            color: ${gruvbox.syntax_keyword} !important;
        }
        
        .pl-ml /* markup list */,
        .pl-mh /* markup heading */ {
            color: ${gruvbox.syntax_constant} !important;
        }
        
        .pl-cce /* comment constant escape */,
        .pl-sr /* string regexp */ {
            color: ${gruvbox.syntax_preprocessor} !important;
        }
        
        .pl-ii /* invalid illegal */ {
            background-color: ${gruvbox.red} !important;
            color: ${gruvbox.bg0} !important;
        }
        
        .pl-iu /* invalid deprecated */ {
            color: ${gruvbox.gray} !important;
        }
        
        .pl-mb /* markup bold */ {
            font-weight: bold !important;
            color: ${gruvbox.fg0} !important;
        }
        
        .pl-mi /* markup italic */ {
            font-style: italic !important;
            color: ${gruvbox.fg} !important;
        }
        
        .pl-mc /* markup code */ {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-radius: 3px !important;
            padding: 2px 4px !important;
        }
        
        .pl-mi1 /* markup inserted */ {
            color: ${gruvbox.green} !important;
        }
        
        .pl-md /* markup deleted */ {
            color: ${gruvbox.red} !important;
            text-decoration: line-through !important;
        }
        
        /* === CODE BLOCK SPECIFIC === */
        
        /* Read-only text area */
        #read-only-cursor-text-area,
        .react-blob-textarea {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg} !important;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important;
            font-size: 12px !important;
            line-height: 1.5 !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
        }
        
        /* Symbol highlight */
        .symbol-highlight {
            background-color: ${gruvbox.bright_blue}33 !important;
            border: 1px solid ${gruvbox.bright_blue} !important;
            border-radius: 3px !important;
        }
        
        /* Find results */
        #find-result-marks-container {
            background-color: ${gruvbox.bg0_h} !important;
        }
        
        /* === CODE SIZE BANNER === */
        
        .react-code-size-details-banner,
        .react-code-size-details-in-header,
        .CodeSizeDetails-module__Box--QdxnQ,
        .CodeSizeDetails-module__Box_1--_uFDs {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 6px !important;
        }
        
        .CodeSizeDetails-module__Truncate_1--er0Uk {
            color: ${gruvbox.fg} !important;
        }
        
        /* === FILE TREE PANE === */
        
        .ReposFileTreePane-module__Pane--D26Sw,
        .ReposFileTreePane-module__HidePane--a07q8,
        .ReposFileTreePane-module__HideTree--IyYTf,
        .react-tree-toggle-button-with-indicator {
            background-color: ${gruvbox.bg0} !important;
            border-right: 1px solid ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* === FILE NAME HEADER === */
        
        .FileNameStickyHeader-module__Box_1--HSpOJ,
        .FileNameStickyHeader-module__Box_2--_pDx6,
        .FileNameStickyHeader-module__Box_3--AsYoJ,
        .FileNameStickyHeader-module__Box_4--IyPx8,
        .FileNameStickyHeader-module__Button--SaiiH,
        .FileNameStickyHeader-module__GoToTopButton--9lB4x,
        #file-name-id,
        #sticky-file-name-id,
        .StickyHeader {
            background-color: ${gruvbox.bg0} !important;
            border-bottom: 1px solid ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* === BLOB TOP BANNERS === */
        
        .BlobTopBanners-module__Box--g_bGk {
            background-color: ${gruvbox.bg1} !important;
            border-bottom: 1px solid ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* === BLOB TAB BUTTONS === */
        
        .BlobTabButtons-module__SegmentedControl--JMGov {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        /* === LATEST COMMIT INFO === */
        
        .LatestCommit-module__Box--Fimpo,
        .LatestCommit-module__Box_1--aQ5OG,
        .LatestCommit-module__Box_2--JDY37,
        .LatestCommit-module__IconButton--Zxaob,
        .CommitAttribution-module__CommitAttributionContainer--Si80C {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        /* === EXPAND FILE TREE BUTTON === */
        
        .ExpandFileTreeButton-module__Button_1--g8F6Q,
        .ExpandFileTreeButton-module__expandButton--oKI1R,
        .ExpandFileTreeButton-module__filesButtonBreakpoint--03FKA {
            background-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        /* === CODE PRINT HIDE === */
        
        .react-blob-print-hide {
            display: none !important;
        }
        
        /* === LINE CONTAINERS === */
        
        .child-of-line-106,
        .child-of-line-116,
        .child-of-line-126 {
            background-color: ${gruvbox.bg0_h} !important;
        }
        
        /* === CODE VIEW SPECIFIC UTILITIES === */
        
        .text-mono {
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important;
            color: ${gruvbox.fg} !important;
        }
        
        .lh-default {
            line-height: 1.5 !important;
        }
        
        /* === HIGHLIGHTED LINE MENU === */
        
        #highlighted-line-menu-container,
        #highlighted-line-menu-positioner {
            background-color: ${gruvbox.bg1} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
            box-shadow: 0 8px 24px rgba(0,0,0,0.3) !important;
        }
        
        /* === CLIPBOARD BUTTONS IN CODE VIEW === */
        
        #snippet-clipboard-copy-button,
        #snippet-clipboard-copy-button-unpositioned,
        .CopyToClipboardButton-module__tooltip--HDUYz {
            background-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
        }
        
        #snippet-clipboard-copy-button:hover {
            background-color: ${gruvbox.bg3} !important;
            border-color: ${gruvbox.bg4} !important;
        }
        
        /* === FILE RESULTS LIST === */
        
        .FileResultsList-module__FilesSearchBox--fSAh3,
        .CodeViewHeader-module__FileResultsList--bglyC {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* === REPOSITORY CONTENT AREA === */
        
        .repository-content,
        #repo-content-pjax-container,
        #repo-content-turbo-frame,
        .js-repo-pjax-container {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* === UNDERLINE NAV IN CODE VIEW === */
        
        .UnderlineNav,
        .UnderlineNav-body,
        .UnderlineNav-actions,
        .UnderlineNav-item,
        .js-repo-nav {
            background-color: ${gruvbox.bg0} !important;
            border-bottom-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        .UnderlineNav-item.selected {
            background-color: transparent !important;
            border-bottom-color: ${gruvbox.blue} !important;
            color: ${gruvbox.blue} !important;
        }
        
        /* === SCROLLBAR FOR CODE VIEW === */
        
        .react-code-lines::-webkit-scrollbar,
        .react-code-file-contents::-webkit-scrollbar {
            width: 12px !important;
            height: 12px !important;
            background-color: ${gruvbox.bg0_h} !important;
        }
        
        .react-code-lines::-webkit-scrollbar-thumb,
        .react-code-file-contents::-webkit-scrollbar-thumb {
            background-color: ${gruvbox.bg3} !important;
            border-radius: 6px !important;
            border: 2px solid ${gruvbox.bg0_h} !important;
        }
        
        .react-code-lines::-webkit-scrollbar-thumb:hover,
        .react-code-file-contents::-webkit-scrollbar-thumb:hover {
            background-color: ${gruvbox.bg4} !important;
        }
        
        /* === SELECTION IN CODE VIEW === */
        
        .react-code-lines ::selection,
        .react-code-file-contents ::selection {
            background-color: ${gruvbox.selection} !important;
            color: ${gruvbox.fg0} !important;
        }
        
        /* === CODE LINE SELECTION STATES === */
        
        .react-file-line.selected {
            background-color: ${gruvbox.bg2} !important;
        }
        
        .react-file-line.highlighted {
            background-color: ${gruvbox.bright_blue}22 !important;
        }
        
        /* === RESPONSIVE CODE VIEW === */
        
        @media (max-width: 768px) {
            .react-code-view-header-element--narrow,
            .react-code-view-header-wrap--narrow {
                background-color: ${gruvbox.bg0} !important;
            }
            
            .react-code-view-header-mb--narrow {
                margin-bottom: 16px !important;
            }
            
            .react-line-number {
                min-width: 40px !important;
                padding: 0 8px !important;
            }
        }
        
        /* === GUTTER STYLING === */
        
        [data-line-number]:before {
            content: attr(data-line-number);
            display: inline-block;
            width: 100%;
            text-align: right;
            color: ${gruvbox.fg3} !important;
        }
        
        /* === CODE BLOCK BORDERS === */
        
        .react-code-file-contents {
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 6px !important;
            overflow: hidden !important;
        }
        
        /* === FOCUS STATES FOR CODE NAVIGATION === */
        
        .react-file-line:focus,
        .react-code-text:focus {
            outline: 2px solid ${gruvbox.blue} !important;
            outline-offset: 2px !important;
        }
        
        /* =================================================================
           EXISTING STYLES (from original userscript)
           ================================================================= */
        
        /* (Include all the existing styles from the original userscript here) */
        /* ... existing styles ... */
        
        /* === BASE BODY STYLES === */
        
        body, html {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        }
        
        /* === APP HEADER === */
        
        .AppHeader, header, [data-testid="AppHeader"] {
            background-color: ${gruvbox.bg0} !important;
            border-bottom: 1px solid ${gruvbox.bg2} !important;
        }
        
        /* === BUTTONS === */
        
        .Button, .btn {
            background-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
        }
        
        .Button:hover, .btn:hover {
            background-color: ${gruvbox.bg3} !important;
        }
        
        /* === LINKS === */
        
        a, .Link {
            color: ${gruvbox.blue} !important;
        }
        
        a:hover, .Link:hover {
            color: ${gruvbox.aqua} !important;
        }
        
        /* === INPUTS === */
        
        input, textarea, select, .form-control {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
        }
        
        /* === AVATARS === */
        
        .avatar {
            border: 2px solid ${gruvbox.bg3} !important;
        }
        
        /* === ICONS === */
        
        .octicon {
            color: ${gruvbox.fg4} !important;
        }
        
        /* === UTILITY CLASSES === */
        
        .color-fg-default {
            color: ${gruvbox.fg} !important;
        }
        
        .color-fg-muted {
            color: ${gruvbox.fg3} !important;
        }
        
        .color-bg-default {
            background-color: ${gruvbox.bg0} !important;
        }
        
        .color-bg-subtle {
            background-color: ${gruvbox.bg1} !important;
        }
        
        /* === SCROLLBAR === */
        
        ::-webkit-scrollbar {
            width: 12px !important;
            background-color: ${gruvbox.bg1} !important;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: ${gruvbox.bg3} !important;
        }
    `);

    // Function to apply dynamic styles to code view
    function applyCodeViewStyles() {
        // Apply to dynamically loaded code containers
        document.querySelectorAll('.react-code-file-contents, .react-code-lines, .react-file-line').forEach(el => {
            if (!el.hasAttribute('data-gruvbox-codestyled')) {
                el.setAttribute('data-gruvbox-codestyled', 'true');
                
                // Force background colors
                if (el.classList.contains('react-code-file-contents')) {
                    el.style.backgroundColor = gruvbox.bg0_h;
                }
                if (el.classList.contains('react-code-lines')) {
                    el.style.backgroundColor = gruvbox.bg0_h;
                }
                if (el.classList.contains('react-file-line')) {
                    el.style.backgroundColor = gruvbox.bg0_h;
                    el.style.color = gruvbox.fg;
                }
            }
        });
        
        // Apply syntax highlighting classes
        document.querySelectorAll('.pl-c, .pl-k, .pl-s, .pl-v, .pl-en, .pl-smi').forEach(el => {
            if (!el.hasAttribute('data-gruvbox-syntax')) {
                el.setAttribute('data-gruvbox-syntax', 'true');
            }
        });
        
        // Apply to line numbers
        document.querySelectorAll('[data-line-number], .react-line-number').forEach(el => {
            if (!el.hasAttribute('data-gruvbox-linenumber')) {
                el.setAttribute('data-gruvbox-linenumber', 'true');
                el.style.backgroundColor = gruvbox.bg0;
                el.style.color = gruvbox.fg3;
                el.style.borderRight = `1px solid ${gruvbox.bg2}`;
            }
        });
        
        // Apply to code view header
        document.querySelectorAll('.BlobViewHeader-module__Box--pvsIA, .react-blob-sticky-header').forEach(el => {
            if (!el.hasAttribute('data-gruvbox-header')) {
                el.setAttribute('data-gruvbox-header', 'true');
                el.style.backgroundColor = gruvbox.bg0;
                el.style.borderBottom = `1px solid ${gruvbox.bg2}`;
            }
        });
    }

    // Function to enhance existing styles
    function enhanceExistingStyles() {
        // Apply to all code containers
        applyCodeViewStyles();
        
        // Force body background
        document.body.style.backgroundColor = gruvbox.bg0;
        document.body.style.color = gruvbox.fg;
        
        // Force html background
        document.documentElement.style.backgroundColor = gruvbox.bg0;
        
        // Check for code view specifically
        if (document.querySelector('.react-code-file-contents') || 
            document.querySelector('.blob-wrapper') ||
            document.querySelector('[data-testid="code-view-content"]')) {
            
            console.log('GitHub Gruvbox Theme: Code view detected, applying enhanced styles');
            
            // Add a custom class to body when in code view
            document.body.classList.add('gruvbox-code-view');
        }
    }

    // Initial application
    enhanceExistingStyles();
    
    // Apply on DOM changes with focus on code containers
    const observer = new MutationObserver((mutations) => {
        let shouldApply = false;
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                // Check if any added nodes are code-related
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Element node
                        if (node.matches && (
                            node.matches('.react-code-file-contents, .react-code-lines, .react-file-line') ||
                            node.querySelector('.react-code-file-contents, .react-code-lines, .react-file-line')
                        )) {
                            shouldApply = true;
                        }
                    }
                });
            }
        });
        if (shouldApply) {
            setTimeout(enhanceExistingStyles, 100);
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
    
    // Also apply on page load
    window.addEventListener('load', enhanceExistingStyles);
    document.addEventListener('DOMContentLoaded', enhanceExistingStyles);
    
    // Reapply for SPA navigation
    const intervalId = setInterval(enhanceExistingStyles, 1000);
    
    // Cleanup
    window.addEventListener('beforeunload', () => {
        clearInterval(intervalId);
        observer.disconnect();
    });

    console.log('GitHub Gruvbox Theme with Enhanced Code View loaded');

})();
