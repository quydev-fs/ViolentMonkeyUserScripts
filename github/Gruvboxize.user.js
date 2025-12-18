// ==UserScript==
// @name         GitHub Gruvbox Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Apply Gruvbox dark theme to GitHub
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
        
        body, html {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        }
        
        /* === FEED CONTENT === */
        
        .feed-content {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
            padding: 16px !important;
            border-radius: 8px !important;
            border: 1px solid ${gruvbox.bg2} !important;
            margin-bottom: 16px !important;
            transition: all 0.2s ease !important;
        }
        
        .feed-content:hover {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg3} !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        }
        
        .feed-content > *:first-child {
            margin-top: 0 !important;
        }
        
        .feed-content > *:last-child {
            margin-bottom: 0 !important;
        }
        
        .feed-content h1,
        .feed-content h2,
        .feed-content h3,
        .feed-content h4,
        .feed-content h5,
        .feed-content h6 {
            color: ${gruvbox.fg0} !important;
            margin-top: 1em !important;
            margin-bottom: 0.5em !important;
        }
        
        .feed-content p {
            color: ${gruvbox.fg} !important;
            line-height: 1.6 !important;
            margin-bottom: 1em !important;
        }
        
        .feed-content a {
            color: ${gruvbox.blue} !important;
            text-decoration: none !important;
        }
        
        .feed-content a:hover {
            color: ${gruvbox.aqua} !important;
            text-decoration: underline !important;
        }
        
        .feed-content code {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg1} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 4px !important;
            padding: 2px 6px !important;
            font-family: 'SFMono-Regular', Consolas, monospace !important;
            font-size: 0.9em !important;
        }
        
        .feed-content pre {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg1} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 6px !important;
            padding: 16px !important;
            overflow-x: auto !important;
            margin: 1em 0 !important;
        }
        
        .feed-content blockquote {
            background-color: ${gruvbox.bg1} !important;
            border-left: 4px solid ${gruvbox.bg3} !important;
            color: ${gruvbox.fg2} !important;
            padding: 8px 16px !important;
            margin: 1em 0 !important;
            border-radius: 0 4px 4px 0 !important;
        }
        
        .feed-content ul,
        .feed-content ol {
            color: ${gruvbox.fg} !important;
            margin: 1em 0 !important;
            padding-left: 2em !important;
        }
        
        .feed-content li {
            margin-bottom: 0.5em !important;
        }
        
        .feed-content img {
            max-width: 100% !important;
            height: auto !important;
            border-radius: 6px !important;
            border: 1px solid ${gruvbox.bg2} !important;
        }
        
        .feed-content table {
            background-color: ${gruvbox.bg1} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 6px !important;
            overflow: hidden !important;
            margin: 1em 0 !important;
            width: 100% !important;
        }
        
        .feed-content th {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg0} !important;
            padding: 12px !important;
            text-align: left !important;
            border-bottom: 1px solid ${gruvbox.bg2} !important;
        }
        
        .feed-content td {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            padding: 12px !important;
            border-bottom: 1px solid ${gruvbox.bg2} !important;
        }
        
        .feed-content tr:hover td {
            background-color: ${gruvbox.bg2} !important;
        }
        
        /* === HEADER AND NAVIGATION === */
        
        /* AppHeader - main header */
        .AppHeader, header, [data-testid="AppHeader"] {
            background-color: ${gruvbox.bg0} !important;
            border-bottom: 1px solid ${gruvbox.bg2} !important;
        }
        
        .AppHeader-globalBar, .AppHeader-context {
            background-color: ${gruvbox.bg0} !important;
        }
        
        .AppHeader-logo {
            filter: invert(0.9) hue-rotate(180deg) brightness(1.2) saturate(0.8) !important;
        }
        
        /* Buttons in header */
        .AppHeader-button, .Button {
            background-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
            padding: 6px 12px !important;
        }
        
        .AppHeader-button:hover, .Button:hover {
            background-color: ${gruvbox.bg3} !important;
            border-color: ${gruvbox.bg4} !important;
        }
        
        .Button--primary {
            background-color: ${gruvbox.blue} !important;
            color: ${gruvbox.bg0} !important;
            border-color: ${gruvbox.blue} !important;
        }
        
        .Button--secondary {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        .Button--invisible {
            background-color: transparent !important;
            color: ${gruvbox.fg} !important;
            border-color: transparent !important;
        }
        
        /* Search bar */
        .AppHeader-search, .search-input, .form-control {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border: 2px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
        }
        
        .AppHeader-search:focus, .search-input:focus {
            border-color: ${gruvbox.blue} !important;
            box-shadow: 0 0 0 3px ${gruvbox.blue}33 !important;
        }
        
        /* === DASHBOARD LAYOUT === */
        
        .dashboard, .application-main, main {
            background-color: ${gruvbox.bg0} !important;
        }
        
        .dashboard-sidebar, .feed-left-sidebar, .feed-right-sidebar {
            background-color: ${gruvbox.bg0_h} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        .feed-main {
            background-color: ${gruvbox.bg0} !important;
        }
        
        .feed-background {
            background-color: ${gruvbox.bg0} !important;
        }
        
        .feed-next {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        /* === FEED ITEMS === */
        
        .feed-item-content, .js-feed-item-component {
            background-color: ${gruvbox.bg1} !important;
            border: 1px solid ${gruvbox.bg2} !important;
            border-radius: 8px !important;
            padding: 16px !important;
            margin-bottom: 16px !important;
        }
        
        .feed-item-content:hover {
            background-color: ${gruvbox.bg2} !important;
            border-color: ${gruvbox.bg3} !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
        }
        
        .feed-item-heading-icon {
            color: ${gruvbox.blue} !important;
        }
        
        .feed-item-user-avatar {
            border: 2px solid ${gruvbox.bg3} !important;
        }
        
        /* === REPOSITORY CARDS === */
        
        .Box, .Box-body, .Box-header {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        .Box-header {
            background-color: ${gruvbox.bg0_h} !important;
            border-bottom-color: ${gruvbox.bg2} !important;
        }
        
        .Box-title {
            color: ${gruvbox.fg} !important;
        }
        
        .Box--overlay {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg3} !important;
            box-shadow: 0 16px 48px rgba(0,0,0,0.4) !important;
        }
        
        .Box-btn-octicon {
            background-color: transparent !important;
            color: ${gruvbox.fg4} !important;
        }
        
        .Box-btn-octicon:hover {
            color: ${gruvbox.blue} !important;
            background-color: ${gruvbox.bg2} !important;
        }
        
        /* === LISTS AND MENUS === */
        
        .ActionList, .SelectMenu-list, .dropdown-menu {
            background-color: ${gruvbox.bg1} !important;
            border: 1px solid ${gruvbox.bg3} !important;
            border-radius: 6px !important;
            box-shadow: 0 8px 24px rgba(0,0,0,0.3) !important;
        }
        
        .ActionListItem, .SelectMenu-item, .dropdown-item {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            padding: 8px 12px !important;
        }
        
        .ActionListItem:hover, .SelectMenu-item:hover, .dropdown-item:hover {
            background-color: ${gruvbox.bg2} !important;
        }
        
        .ActionListItem-label {
            color: ${gruvbox.fg} !important;
        }
        
        .ActionListContent {
            color: ${gruvbox.fg} !important;
        }
        
        .ActionListWrap {
            background-color: ${gruvbox.bg1} !important;
        }
        
        .ActionListWrap--inset {
            background-color: ${gruvbox.bg2} !important;
        }
        
        .ActionList-sectionDivider {
            border-color: ${gruvbox.bg2} !important;
        }
        
        /* === OVERLAYS AND MODALS === */
        
        .Overlay, .Overlay-body, .Overlay-header, .Overlay-footer {
            background-color: ${gruvbox.bg1} !important;
            color: ${gruvbox.fg} !important;
            border-color: ${gruvbox.bg3} !important;
        }
        
        .Overlay-title {
            color: ${gruvbox.fg0} !important;
        }
        
        .Overlay-titleWrap {
            background-color: ${gruvbox.bg1} !important;
        }
        
        .Overlay-headerContentWrap {
            background-color: ${gruvbox.bg1} !important;
        }
        
        .Overlay-description {
            color: ${gruvbox.fg2} !important;
        }
        
        .Overlay-actionWrap {
            background-color: ${gruvbox.bg1} !important;
        }
        
        .Overlay-closeButton {
            color: ${gruvbox.fg4} !important;
            background-color: transparent !important;
        }
        
        .Overlay-closeButton:hover {
            color: ${gruvbox.fg} !important;
            background-color: ${gruvbox.bg2} !important;
        }
        
        .Overlay-header--divided {
            border-bottom-color: ${gruvbox.bg2} !important;
        }
        
        .Overlay-footer--divided {
            border-top-color: ${gruvbox.bg2} !important;
        }
        
        .Overlay-footer--alignEnd {
            justify-content: flex-end !important;
        }
        
        .Overlay-body--paddingNone {
            padding: 0 !important;
        }
        
        .Overlay--placement-right {
            border-left-color: ${gruvbox.bg2} !important;
        }
        
        .Details, .details-overlay {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        .details-reset {
            background-color: transparent !important;
        }
        
        /* === CODE AND TEXT CONTENT === */
        
        .markdown-body {
            background-color: ${gruvbox.bg0} !important;
            color: ${gruvbox.fg} !important;
        }
        
        .markdown-body pre, .markdown-body code {
            background-color: ${gruvbox.bg0_h} !important;
            color: ${gruvbox.fg1} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        .markdown-title {
            color: ${gruvbox.fg0} !important;
            font-weight: bold !important;
        }
        
        .comment-body {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg2} !important;
            color: ${gruvbox.fg} !important;
        }
        
        /* === LINKS === */
        
        a, .Link, .Link--primary {
            color: ${gruvbox.blue} !important;
            text-decoration: none !important;
        }
        
        a:hover, .Link:hover {
            color: ${gruvbox.aqua} !important;
            text-decoration: underline !important;
        }
        
        .Link--muted {
            color: ${gruvbox.fg3} !important;
        }
        
        .Link--secondary {
            color: ${gruvbox.fg2} !important;
        }
        
        .Link--underline {
            text-decoration: underline !important;
        }
        
        .Link--underline:hover {
            text-decoration: none !important;
        }
        
        /* === AVATARS === */
        
        .avatar, .avatar-user, .avatar-small {
            border: 2px solid ${gruvbox.bg3} !important;
            background-color: ${gruvbox.bg1} !important;
        }
        
        .avatar:hover {
            border-color: ${gruvbox.blue} !important;
            box-shadow: 0 0 0 3px ${gruvbox.blue}33 !important;
        }
        
        /* === ICONS === */
        
        .octicon {
            color: ${gruvbox.fg4} !important;
            fill: ${gruvbox.fg4} !important;
        }
        
        .octicon:hover {
            color: ${gruvbox.blue} !important;
            fill: ${gruvbox.blue} !important;
        }
        
        .octicon-star, .octicon-star-fill {
            color: ${gruvbox.yellow} !important;
            fill: ${gruvbox.yellow} !important;
        }
        
        .octicon-repo {
            color: ${gruvbox.purple} !important;
        }
        
        .octicon-git-pull-request {
            color: ${gruvbox.green} !important;
        }
        
        .octicon-issue-opened {
            color: ${gruvbox.red} !important;
        }
        
        .octicon-search {
            color: ${gruvbox.fg4} !important;
        }
        
        .octicon-home {
            color: ${gruvbox.blue} !important;
        }
        
        .octicon-inbox {
            color: ${gruvbox.purple} !important;
        }
        
        .octicon-graph {
            color: ${gruvbox.green} !important;
        }
        
        .octicon-person-add {
            color: ${gruvbox.aqua} !important;
        }
        
        .octicon-plus {
            color: ${gruvbox.green} !important;
        }
        
        .octicon-tag {
            color: ${gruvbox.yellow} !important;
        }
        
        .octicon-filter {
            color: ${gruvbox.blue} !important;
        }
        
        .octicon-smiley {
            color: ${gruvbox.yellow} !important;
        }
        
        .octicon-heart {
            color: ${gruvbox.red} !important;
        }
        
        .octicon-copilot {
            color: ${gruvbox.purple} !important;
        }
        
        .octicon-megaphone {
            color: ${gruvbox.orange} !important;
        }
        
        .octicon-feed-tag {
            color: ${gruvbox.green} !important;
        }
        
        .octicon-three-bars {
            color: ${gruvbox.fg4} !important;
        }
        
        .octicon-triangle-down {
            color: ${gruvbox.fg4} !important;
        }
        
        .octicon-x {
            color: ${gruvbox.fg4} !important;
        }
        
        .octicon-kebab-horizontal {
            color: ${gruvbox.fg4} !important;
        }
        
        .octicon-sidebar-expand {
            color: ${gruvbox.fg4} !important;
        }
        
        .octicon-copy {
            color: ${gruvbox.fg4} !important;
        }
        
        .octicon-check {
            color: ${gruvbox.green} !important;
        }
        
        .octicon-mark-github {
            filter: invert(0.9) hue-rotate(180deg) brightness(1.2) saturate(0.8) !important;
        }
        
        .footer-octicon {
            color: ${gruvbox.fg4} !important;
        }
        
        /* === REACTIONS === */
        
        .reactions-container, .social-reactions {
            background-color: ${gruvbox.bg1} !important;
            border-color: ${gruvbox.bg2} !important;
        }
        
        .reaction-dropdown-button, .social-button-emoji {
            background-color: ${gruvbox.bg2} !
