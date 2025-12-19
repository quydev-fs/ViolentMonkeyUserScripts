// ==UserScript==
// @name         GitHub Gruvbox Theme
// @namespace    https://github.com/quydev-fs/ViolentMonkeyUserScripts
// @version      1.6
// @description  Apply Gruvbox dark theme to GitHub without flickering code
// @author       quydev-fs 
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

    // Main styling - THÊM CSS để ngăn flickering
    GM_addStyle(`
        /* === ẨN CODE UNSTYLED KHI ĐANG LOAD === */
        
        /* Ẩn tất cả code containers mặc định */
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
        }
        
        /* Hiện styled code */
        .react-code-file-contents[data-gruvbox-styled="true"],
        .react-code-lines[data-gruvbox-styled="true"],
        .react-file-line[data-gruvbox-styled="true"],
        .react-code-text[data-gruvbox-styled="true"],
        [data-line-number][data-gruvbox-styled="true"],
        .react-line-number[data-gruvbox-styled="true"],
        .blob-wrapper[data-gruvbox-styled="true"],
        .blob-code[data-gruvbox-styled="true"],
        .blob-code-inner[data-gruvbox-styled="true"],
        .blob-num[data-gruvbox-styled="true"] {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
        }
        
        /* =================================================================
           CODE VIEW STYLES - KHÔNG DÙNG !important
           ================================================================= */
        
        /* Code containers */
        .react-code-file-contents {
            background-color: ${gruvbox.bg0_h};
            color: ${gruvbox.fg};
        }
        
        .react-code-lines,
        .react-code-line-contents-no-virtualization {
            background-color: ${gruvbox.bg0_h};
            color: ${gruvbox.fg};
        }
        
        .react-file-line {
            background-color: ${gruvbox.bg0_h};
            color: ${gruvbox.fg};
        }
        
        .react-code-text {
            color: ${gruvbox.fg};
            background-color: ${gruvbox.bg0_h};
        }
        
        /* Line numbers */
        [data-line-number],
        .react-line-number {
            background-color: ${gruvbox.bg0};
            color: ${gruvbox.fg3};
            border-right: 1px solid ${gruvbox.bg2};
        }
        
        /* Blob code */
        .blob-wrapper {
            background-color: ${gruvbox.bg0_h};
        }
        
        .blob-code,
        .blob-code-inner {
            background-color: ${gruvbox.bg0_h};
            color: ${gruvbox.fg};
        }
        
        .blob-num {
            background-color: ${gruvbox.bg0};
            color: ${gruvbox.fg3};
            border-color: ${gruvbox.bg2};
        }
        
        /* Syntax highlighting */
        .pl-c,
        .pl-c1 {
            color: ${gruvbox.gray};
        }
        
        .pl-k,
        .pl-kos {
            color: ${gruvbox.red};
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
           GENERAL STYLES - VẪN DÙNG !important
           ================================================================= */
        
        body, html {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
        }
        
        .page-responsive {
            background-color: ${gruvbox.bg0} !important;
        }
        
        .Box {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        .feed-content {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        .AppHeader {
            background-color: ${gruvbox.bg0} !important;
            border-bottom-color: ${gruvbox.bg2} !important;
        }
        
        /* ... (giữ nguyên các general styles khác) ... */
        
        /* Ngăn fade-in animations cho code */
        .react-code-file-contents,
        .react-code-lines,
        .react-file-line {
            transition: none !important;
            animation: none !important;
        }
        
        /* Đảm bảo container code có chiều cao đúng */
        .react-code-file-contents {
            min-height: 20px !important;
        }
    `);

    // Function để apply styles và ngăn flickering
    function applyCodeViewStylesNoFlicker() {
        console.log('GitHub Gruvbox: Applying no-flicker code styles');
        
        // Tìm tất cả code elements
        const codeElements = [
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
        
        // Phase 1: Ẩn unstyled code và style chúng
        codeElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                // Đánh dấu là đã styled
                if (!element.hasAttribute('data-gruvbox-styled')) {
                    element.setAttribute('data-gruvbox-styled', 'true');
                    
                    // Apply styles
                    if (element.classList.contains('react-code-file-contents') || 
                        element.classList.contains('react-code-lines') ||
                        element.classList.contains('react-code-line-contents-no-virtualization') ||
                        element.classList.contains('blob-wrapper')) {
                        element.style.backgroundColor = gruvbox.bg0_h;
                        element.style.color = gruvbox.fg;
                    }
                    
                    if (element.classList.contains('react-file-line') ||
                        element.classList.contains('react-code-text') ||
                        element.classList.contains('blob-code') ||
                        element.classList.contains('blob-code-inner')) {
                        element.style.color = gruvbox.fg;
                        element.style.backgroundColor = gruvbox.bg0_h;
                    }
                    
                    if (element.hasAttribute('data-line-number') ||
                        element.classList.contains('react-line-number') ||
                        element.classList.contains('blob-num')) {
                        element.style.backgroundColor = gruvbox.bg0;
                        element.style.color = gruvbox.fg3;
                        element.style.borderRight = `1px solid ${gruvbox.bg2}`;
                    }
                }
                
                // Force hiển thị styled code
                element.style.opacity = '1';
                element.style.visibility = 'visible';
                element.style.display = '';
                
                // Remove any fade transitions
                element.style.transition = 'none';
                element.style.animation = 'none';
            });
        });
        
        // Phase 2: Apply syntax highlighting
        const syntaxSelectors = [
            '.pl-c', '.pl-c1', '.pl-k', '.pl-kos', 
            '.pl-s', '.pl-s1', '.pl-pds', '.pl-v', 
            '.pl-en', '.pl-e', '.pl-ent', '.pl-smi'
        ];
        
        syntaxSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (!element.hasAttribute('data-gruvbox-syntax')) {
                    element.setAttribute('data-gruvbox-syntax', 'true');
                    
                    if (element.classList.contains('pl-c') || element.classList.contains('pl-c1')) {
                        element.style.color = gruvbox.gray;
                    } else if (element.classList.contains('pl-k') || element.classList.contains('pl-kos')) {
                        element.style.color = gruvbox.red;
                    } else if (element.classList.contains('pl-s') || element.classList.contains('pl-s1') || element.classList.contains('pl-pds')) {
                        element.style.color = gruvbox.green;
                    } else if (element.classList.contains('pl-v') || element.classList.contains('pl-en')) {
                        element.style.color = gruvbox.blue;
                    } else if (element.classList.contains('pl-e') || element.classList.contains('pl-ent')) {
                        element.style.color = gruvbox.yellow;
                    } else if (element.classList.contains('pl-smi')) {
                        element.style.color = gruvbox.purple;
                    }
                }
            });
        });
        
        // Phase 3: Đảm bảo parent containers visible
        const parentContainers = document.querySelectorAll(
            '.react-code-file-contents, .blob-wrapper, .repository-content'
        );
        
        parentContainers.forEach(container => {
            container.style.opacity = '1';
            container.style.visibility = 'visible';
            
            // Force reflow để tránh flicker
            void container.offsetHeight;
        });
    }

    // Function để apply general styles
    function applyGeneralStyles() {
        // ... (giữ nguyên) ...
        document.body.style.backgroundColor = gruvbox.bg0;
        document.body.style.color = gruvbox.fg;
    }

    // Function chính với anti-flicker logic
    function initializeThemeNoFlicker() {
        console.log('GitHub Gruvbox: Initializing no-flicker theme');
        
        // Bước 1: Ngay lập tức ẩn code chưa styled
        const hideUnstyledCode = () => {
            const codeContainers = document.querySelectorAll(
                '.react-code-file-contents, .react-code-lines, .blob-wrapper'
            );
            
            codeContainers.forEach(container => {
                if (!container.hasAttribute('data-gruvbox-styled')) {
                    container.style.opacity = '0';
                    container.style.visibility = 'hidden';
                }
            });
        };
        
        // Bước 2: Apply styles và hiện styled code
        const showStyledCode = () => {
            applyCodeViewStylesNoFlicker();
            
            // Force re-render
            requestAnimationFrame(() => {
                applyCodeViewStylesNoFlicker();
            });
        };
        
        // Execute
        hideUnstyledCode();
        applyGeneralStyles();
        
        // Delay một chút rồi hiện styled code
        setTimeout(showStyledCode, 10);
        setTimeout(showStyledCode, 50);
        setTimeout(showStyledCode, 100);
        
        // Listen for DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                hideUnstyledCode();
                setTimeout(showStyledCode, 10);
                applyGeneralStyles();
            });
        }
        
        // Listen for page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                hideUnstyledCode();
                showStyledCode();
                applyGeneralStyles();
            }, 100);
        });
    }

    // Khởi động
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeThemeNoFlicker);
    } else {
        initializeThemeNoFlicker();
    }
    
    // Mutation observer chuyên xử lý code view
    const codeObserver = new MutationObserver((mutations) => {
        let hasCodeElements = false;
        
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        // Check if this is code-related
                        if (node.matches && (
                            node.matches('.react-code-file-contents, .react-code-lines, .blob-wrapper, .react-file-line') ||
                            node.querySelector('.react-code-file-contents, .react-code-lines, .blob-wrapper, .react-file-line')
                        )) {
                            hasCodeElements = true;
                            
                            // Ngay lập tức ẩn unstyled code
                            if (node.matches && !node.hasAttribute('data-gruvbox-styled')) {
                                node.style.opacity = '0';
                                node.style.visibility = 'hidden';
                            }
                            
                            // Check children too
                            if (node.querySelectorAll) {
                                node.querySelectorAll(
                                    '.react-code-file-contents, .react-code-lines, .blob-wrapper, .react-file-line'
                                ).forEach(child => {
                                    if (!child.hasAttribute('data-gruvbox-styled')) {
                                        child.style.opacity = '0';
                                        child.style.visibility = 'hidden';
                                    }
                                });
                            }
                        }
                    }
                });
            }
        });
        
        if (hasCodeElements) {
            // Apply styles after a very short delay
            setTimeout(() => {
                applyCodeViewStylesNoFlicker();
            }, 0);
            
            // And again after render
            requestAnimationFrame(() => {
                applyCodeViewStylesNoFlicker();
            });
        }
    });
    
    // Start observing
    setTimeout(() => {
        codeObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
        console.log('GitHub Gruvbox: Code observer started');
    }, 1000);
    
    // Monitor for SPA navigation
    let lastUrl = location.href;
    const urlObserver = setInterval(() => {
        if (lastUrl !== location.href) {
            lastUrl = location.href;
            console.log('GitHub Gruvbox: URL changed');
            
            // Reapply với anti-flicker
            setTimeout(() => {
                const hideUnstyled = () => {
                    document.querySelectorAll(
                        '.react-code-file-contents, .react-code-lines, .blob-wrapper'
                    ).forEach(el => {
                        if (!el.hasAttribute('data-gruvbox-styled')) {
                            el.style.opacity = '0';
                            el.style.visibility = 'hidden';
                        }
                    });
                };
                
                hideUnstyled();
                setTimeout(applyCodeViewStylesNoFlicker, 10);
                setTimeout(applyCodeViewStylesNoFlicker, 50);
            }, 100);
        }
    }, 1000);
    
    // Cleanup
    window.addEventListener('beforeunload', () => {
        clearInterval(urlObserver);
        codeObserver.disconnect();
    });
    
    console.log('GitHub Gruvbox Theme loaded - No flicker version');

})();
