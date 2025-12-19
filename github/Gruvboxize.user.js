// ==UserScript==
// @name         GitHub Gruvbox Theme - Perfect Alignment
// @namespace    https://github.com/quydev-fs/ViolentMonkeyUserScripts
// @version      1.7
// @description  Apply Gruvbox dark theme to GitHub with perfect code alignment
// @author       You
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
        bg0_h: "#1d2021",
        bg0: "#282828",
        bg1: "#3c3836",
        bg2: "#504945",
        bg3: "#665c54",
        bg4: "#7c6f64",
        
        // Foreground
        fg: "#ebdbb2",
        fg0: "#fbf1c7",
        fg1: "#ebdbb2",
        fg2: "#d5c4a1",
        fg3: "#bdae93",
        fg4: "#a89984",
        
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
    };

    // Main styling - THÊM ALIGNMENT FIXES
    GM_addStyle(`
        /* === RESET POSITIONS FOR ALIGNMENT === */
        
        /* Đảm bảo tất cả code elements có position relative */
        .react-code-file-contents[data-gruvbox-styled="true"],
        .react-code-lines[data-gruvbox-styled="true"],
        .blob-wrapper[data-gruvbox-styled="true"] {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            transform: none !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        
        /* Fix line alignment */
        .react-file-line[data-gruvbox-styled="true"] {
            display: table-row !important;
            position: static !important;
            width: 100% !important;
        }
        
        /* Fix line number cells */
        [data-line-number][data-gruvbox-styled="true"],
        .react-line-number[data-gruvbox-styled="true"],
        .blob-num[data-gruvbox-styled="true"] {
            display: table-cell !important;
            position: static !important;
            vertical-align: top !important;
            text-align: right !important;
            white-space: nowrap !important;
            width: 1% !important;
            min-width: 50px !important;
            padding: 0 10px !important;
            box-sizing: border-box !important;
        }
        
        /* Fix code text cells */
        .react-code-text[data-gruvbox-styled="true"],
        .blob-code[data-gruvbox-styled="true"],
        .blob-code-inner[data-gruvbox-styled="true"] {
            display: table-cell !important;
            position: static !important;
            vertical-align: top !important;
            text-align: left !important;
            width: 99% !important;
            padding-left: 10px !important;
            box-sizing: border-box !important;
        }
        
        /* Đảm bảo table layout đúng */
        .react-code-lines[data-gruvbox-styled="true"] {
            display: table !important;
            width: 100% !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
        }
        
        /* Ẩn unstyled code hoàn toàn */
        .react-code-file-contents:not([data-gruvbox-styled]),
        .react-code-lines:not([data-gruvbox-styled]),
        .react-file-line:not([data-gruvbox-styled]),
        .react-code-text:not([data-gruvbox-styled]),
        [data-line-number]:not([data-gruvbox-styled]),
        .react-line-number:not([data-gruvbox-styled]),
        .blob-wrapper:not([data-gruvbox-styled]),
        .blob-code:not([data-gruvbox-styled]),
        .blob-code-inner:not([data-gruvbox-styled]),
        .blob-num:not([data-gruvbox-styled]) {
            opacity: 0 !important;
            visibility: hidden !important;
            display: none !important;
        }
        
        /* Hiện styled code với đúng layout */
        .react-code-file-contents[data-gruvbox-styled="true"],
        .react-code-lines[data-gruvbox-styled="true"],
        .blob-wrapper[data-gruvbox-styled="true"] {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
        }
        
        .react-file-line[data-gruvbox-styled="true"],
        [data-line-number][data-gruvbox-styled="true"],
        .react-line-number[data-gruvbox-styled="true"],
        .blob-num[data-gruvbox-styled="true"],
        .react-code-text[data-gruvbox-styled="true"],
        .blob-code[data-gruvbox-styled="true"],
        .blob-code-inner[data-gruvbox-styled="true"] {
            opacity: 1 !important;
            visibility: visible !important;
        }
        
        /* =================================================================
           CODE VIEW STYLES - VỚI ALIGNMENT
           ================================================================= */
        
        /* Main containers */
        .react-code-file-contents {
            background-color: ${gruvbox.bg0_h};
            color: ${gruvbox.fg};
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
            font-size: 12px;
            line-height: 20px;
            border: 1px solid ${gruvbox.bg2};
            border-radius: 6px;
            overflow: auto;
        }
        
        .react-code-lines {
            background-color: ${gruvbox.bg0_h};
            color: ${gruvbox.fg};
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }
        
        /* Line numbers */
        [data-line-number],
        .react-line-number {
            background-color: ${gruvbox.bg0};
            color: ${gruvbox.fg3};
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            border-right: 1px solid ${gruvbox.bg2};
            user-select: none;
            -webkit-user-select: none;
            cursor: default;
        }
        
        /* Code text */
        .react-file-line {
            background-color: ${gruvbox.bg0_h};
            color: ${gruvbox.fg};
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }
        
        .react-code-text {
            color: ${gruvbox.fg};
            background-color: ${gruvbox.bg0_h};
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            white-space: pre;
            word-break: normal;
            word-wrap: normal;
            overflow-wrap: normal;
        }
        
        /* Blob styles (GitHub classic) */
        .blob-wrapper {
            background-color: ${gruvbox.bg0_h};
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
            font-size: 12px;
            line-height: 20px;
        }
        
        .blob-code,
        .blob-code-inner {
            background-color: ${gruvbox.bg0_h};
            color: ${gruvbox.fg};
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            white-space: pre;
        }
        
        .blob-num {
            background-color: ${gruvbox.bg0};
            color: ${gruvbox.fg3};
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            border-color: ${gruvbox.bg2};
            user-select: none;
        }
        
        /* Syntax highlighting */
        .pl-c,
        .pl-c1 {
            color: ${gruvbox.gray};
            font-style: italic;
        }
        
        .pl-k,
        .pl-kos {
            color: ${gruvbox.red};
            font-weight: bold;
        }
        
        .pl-s,
        .pl-s1,
        .pl-pds {
            color: ${gruvbox.green};
        }
        
        .pl-v,
        .pl-en {
            color: ${gruvbox.blue};
        }
        
        .pl-e,
        .pl-ent {
            color: ${gruvbox.yellow};
        }
        
        .pl-smi {
            color: ${gruvbox.purple};
        }
        
        /* =================================================================
           GENERAL STYLES
           ================================================================= */
        
        body, html {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
        }
        
        .page-responsive {
            background-color: ${gruvbox.bg0} !important;
        }
        
        /* ... (giữ nguyên các styles khác) ... */
        
        /* Ngăn animations */
        .react-code-file-contents,
        .react-code-lines,
        .react-file-line,
        .blob-wrapper {
            transition: none !important;
            animation: none !important;
        }
    `);

    // Function để fix alignment
    function fixCodeAlignment() {
        console.log('GitHub Gruvbox: Fixing code alignment');
        
        // Đảm bảo container có đúng layout
        const mainContainers = document.querySelectorAll(
            '.react-code-file-contents[data-gruvbox-styled="true"], ' +
            '.blob-wrapper[data-gruvbox-styled="true"]'
        );
        
        mainContainers.forEach(container => {
            // Reset position
            container.style.position = 'relative';
            container.style.top = '0';
            container.style.left = '0';
            container.style.right = '0';
            container.style.bottom = '0';
            container.style.transform = 'none';
            container.style.margin = '0';
            container.style.padding = '0';
            container.style.display = 'block';
            container.style.overflow = 'auto';
            
            // Đảm bảo font và line height
            container.style.fontFamily = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";
            container.style.fontSize = '12px';
            container.style.lineHeight = '20px';
        });
        
        // Fix line containers
        const lineContainers = document.querySelectorAll(
            '.react-code-lines[data-gruvbox-styled="true"]'
        );
        
        lineContainers.forEach(container => {
            // Set as table for proper alignment
            container.style.display = 'table';
            container.style.width = '100%';
            container.style.borderCollapse = 'collapse';
            container.style.tableLayout = 'fixed';
        });
        
        // Fix individual lines
        const lines = document.querySelectorAll(
            '.react-file-line[data-gruvbox-styled="true"]'
        );
        
        lines.forEach(line => {
            line.style.display = 'table-row';
            line.style.position = 'static';
            line.style.width = '100%';
        });
        
        // Fix line numbers
        const lineNumbers = document.querySelectorAll(
            '[data-line-number][data-gruvbox-styled="true"], ' +
            '.react-line-number[data-gruvbox-styled="true"], ' +
            '.blob-num[data-gruvbox-styled="true"]'
        );
        
        lineNumbers.forEach(num => {
            // Table cell layout
            num.style.display = 'table-cell';
            num.style.position = 'static';
            num.style.verticalAlign = 'top';
            num.style.textAlign = 'right';
            num.style.whiteSpace = 'nowrap';
            num.style.width = '1%';
            num.style.minWidth = '50px';
            num.style.padding = '0 10px';
            num.style.boxSizing = 'border-box';
            
            // Style
            num.style.backgroundColor = gruvbox.bg0;
            num.style.color = gruvbox.fg3;
            num.style.borderRight = `1px solid ${gruvbox.bg2}`;
            num.style.fontFamily = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";
            num.style.fontSize = '12px';
            num.style.lineHeight = '20px';
            num.style.userSelect = 'none';
            num.style.WebkitUserSelect = 'none';
            num.style.cursor = 'default';
        });
        
        // Fix code text
        const codeTexts = document.querySelectorAll(
            '.react-code-text[data-gruvbox-styled="true"], ' +
            '.blob-code[data-gruvbox-styled="true"], ' +
            '.blob-code-inner[data-gruvbox-styled="true"]'
        );
        
        codeTexts.forEach(text => {
            // Table cell layout
            text.style.display = 'table-cell';
            text.style.position = 'static';
            text.style.verticalAlign = 'top';
            text.style.textAlign = 'left';
            text.style.width = '99%';
            text.style.paddingLeft = '10px';
            text.style.boxSizing = 'border-box';
            
            // Style
            text.style.color = gruvbox.fg;
            text.style.backgroundColor = gruvbox.bg0_h;
            text.style.fontFamily = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";
            text.style.fontSize = '12px';
            text.style.lineHeight = '20px';
            text.style.whiteSpace = 'pre';
            text.style.wordBreak = 'normal';
            text.style.wordWrap = 'normal';
            text.style.overflowWrap = 'normal';
        });
        
        // Apply syntax highlighting
        applySyntaxHighlighting();
    }

    // Function để apply syntax highlighting
    function applySyntaxHighlighting() {
        const syntaxMap = {
            'pl-c': gruvbox.gray,
            'pl-c1': gruvbox.gray,
            'pl-k': gruvbox.red,
            'pl-kos': gruvbox.red,
            'pl-s': gruvbox.green,
            'pl-s1': gruvbox.green,
            'pl-pds': gruvbox.green,
            'pl-v': gruvbox.blue,
            'pl-en': gruvbox.blue,
            'pl-e': gruvbox.yellow,
            'pl-ent': gruvbox.yellow,
            'pl-smi': gruvbox.purple
        };
        
        Object.keys(syntaxMap).forEach(className => {
            const elements = document.querySelectorAll(`.${className}[data-gruvbox-styled="true"]`);
            elements.forEach(el => {
                el.style.color = syntaxMap[className];
                
                // Thêm font styles cho keywords và comments
                if (className === 'pl-c' || className === 'pl-c1') {
                    el.style.fontStyle = 'italic';
                }
                if (className === 'pl-k' || className === 'pl-kos') {
                    el.style.fontWeight = 'bold';
                }
            });
        });
    }

    // Function chính để apply styles
    function applyCodeViewStyles() {
        console.log('GitHub Gruvbox: Applying styles');
        
        // Mark và style tất cả code elements
        const codeSelectors = [
            '.react-code-file-contents',
            '.react-code-lines',
            '.react-code-line-contents-no-virtualization',
            '.react-file-line',
            '.react-code-text',
            '[data-line-number]',
            '.react-line-number',
            '.blob-wrapper',
            '.blob-code',
            '.blob-code-inner',
            '.blob-num'
        ];
        
        codeSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (!element.hasAttribute('data-gruvbox-styled')) {
                    element.setAttribute('data-gruvbox-styled', 'true');
                }
            });
        });
        
        // Apply alignment fixes
        setTimeout(fixCodeAlignment, 0);
        
        // Force reflow
        requestAnimationFrame(() => {
            fixCodeAlignment();
            applySyntaxHighlighting();
        });
    }

    // Function để apply general styles
    function applyGeneralStyles() {
        document.body.style.backgroundColor = gruvbox.bg0;
        document.body.style.color = gruvbox.fg;
        
        // Apply to page-responsive
        const pageResp = document.querySelector('.page-responsive');
        if (pageResp) {
            pageResp.style.backgroundColor = gruvbox.bg0;
        }
    }

    // Khởi động theme
    function initializeTheme() {
        console.log('GitHub Gruvbox: Initializing with alignment fixes');
        
        // Bước 1: Ẩn unstyled code ngay lập tức
        const hideUnstyled = () => {
            const unstyledSelectors = [
                '.react-code-file-contents:not([data-gruvbox-styled])',
                '.react-code-lines:not([data-gruvbox-styled])',
                '.blob-wrapper:not([data-gruvbox-styled])'
            ];
            
            unstyledSelectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.visibility = 'hidden';
                    el.style.display = 'none';
                });
            });
        };
        
        // Bước 2: Apply styles và alignment
        const applyAllStyles = () => {
            applyGeneralStyles();
            applyCodeViewStyles();
        };
        
        // Execute
        hideUnstyled();
        setTimeout(applyAllStyles, 10);
        
        // Listeners
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                hideUnstyled();
                setTimeout(applyAllStyles, 10);
            });
        }
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                hideUnstyled();
                applyAllStyles();
            }, 100);
        });
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTheme);
    } else {
        initializeTheme();
    }
    
    // Mutation observer cho alignment fixes
    const alignmentObserver = new MutationObserver((mutations) => {
        let needsAlignmentFix = false;
        
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        // Check for code elements
                        if (node.matches && (
                            node.matches('.react-code-file-contents, .react-code-lines, .blob-wrapper') ||
                            node.querySelector('.react-code-file-contents, .react-code-lines, .blob-wrapper')
                        )) {
                            needsAlignmentFix = true;
                            
                            // Hide unstyled immediately
                            if (node.matches && !node.hasAttribute('data-gruvbox-styled')) {
                                node.style.opacity = '0';
                                node.style.visibility = 'hidden';
                                node.style.display = 'none';
                            }
                        }
                    }
                });
            }
            
            // Also check for style changes that might affect alignment
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const target = mutation.target;
                if (target.hasAttribute('data-gruvbox-styled')) {
                    needsAlignmentFix = true;
                }
            }
        });
        
        if (needsAlignmentFix) {
            // Apply fixes with proper timing
            setTimeout(() => {
                applyCodeViewStyles();
                fixCodeAlignment();
            }, 0);
            
            requestAnimationFrame(() => {
                fixCodeAlignment();
            });
        }
    });
    
    // Start observing
    setTimeout(() => {
        alignmentObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });
        console.log('GitHub Gruvbox: Alignment observer started');
    }, 1500);
    
    // SPA navigation detection
    let lastUrl = location.href;
    setInterval(() => {
        if (lastUrl !== location.href) {
            lastUrl = location.href;
            console.log('GitHub Gruvbox: Page changed, reapplying alignment');
            
            setTimeout(() => {
                // Re-hide unstyled
                document.querySelectorAll(
                    '.react-code-file-contents:not([data-gruvbox-styled]), ' +
                    '.react-code-lines:not([data-gruvbox-styled]), ' +
                    '.blob-wrapper:not([data-gruvbox-styled])'
                ).forEach(el => {
                    el.style.opacity = '0';
                    el.style.visibility = 'hidden';
                    el.style.display = 'none';
                });
                
                // Reapply
                applyCodeViewStyles();
                setTimeout(fixCodeAlignment, 50);
            }, 200);
        }
    }, 1000);
    
    console.log('GitHub Gruvbox Theme loaded with perfect alignment!');

})();
