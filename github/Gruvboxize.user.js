// ==UserScript==
// @name         GitHub Gruvbox Dark (Clean, No JS Hacks)
// @namespace    https://github.com/quydev-fs/ViolentMonkeyUserScripts/
// @version      2.1
// @author       quydev-fs
// @description  Gruvbox Dark for GitHub - CSS only, stable on Kiwi + ViolentMonkey
// @match        https://github.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  const c = {
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
    selection: "#45858855",
    border: "#3c3836",
  };

  GM_addStyle(`
/* ================= GLOBAL ================= */
html, body {
  background: ${c.bg0} !important;
  color: ${c.fg} !important;
}

/* Page responsive - từ homepage JSON */
.page-responsive {
  background: ${c.bg0} !important;
  color: ${c.fg} !important;
}

.logged-in {
  background: ${c.bg0} !important;
}

.env-production {
  background: ${c.bg0} !important;
}

/* Application main container */
.application-main,
main {
  background: ${c.bg0} !important;
  color: ${c.fg} !important;
}

/* Repository content */
.repository-content {
  background: ${c.bg0} !important;
  color: ${c.fg} !important;
}

/* Dashboard */
.dashboard,
.dashboard-route {
  background: ${c.bg0} !important;
  color: ${c.fg} !important;
}

/* ================= HEADER ================= */
.AppHeader,
header,
[data-testid="AppHeader"] {
  background: ${c.bg0} !important;
  border-bottom: 1px solid ${c.bg2} !important;
  color: ${c.fg} !important;
}

.AppHeader-globalBar {
  background: ${c.bg0} !important;
}

.AppHeader-context {
  background: ${c.bg0} !important;
}

.AppHeader-logo {
  filter: invert(0.9) hue-rotate(180deg) brightness(1.2) saturate(0.8) !important;
}

/* ================= BUTTONS ================= */
.AppHeader-button,
.Button,
.btn {
  background: ${c.bg2} !important;
  color: ${c.fg} !important;
  border: 1px solid ${c.bg3} !important;
  border-radius: 6px !important;
}

.AppHeader-button:hover,
.Button:hover,
.btn:hover {
  background: ${c.bg3} !important;
  border-color: ${c.bg4} !important;
}

.Button--primary,
.btn-primary {
  background: ${c.blue} !important;
  color: ${c.bg0} !important;
  border-color: ${c.blue} !important;
}

.Button--secondary,
.btn-secondary {
  background: ${c.bg1} !important;
  color: ${c.fg} !important;
  border-color: ${c.bg3} !important;
}

.Button--invisible,
.btn-invisible {
  background: transparent !important;
  color: ${c.fg} !important;
  border-color: transparent !important;
}

/* ================= SEARCH ================= */
.AppHeader-search,
.search-input,
.form-control {
  background: ${c.bg1} !important;
  color: ${c.fg} !important;
  border: 2px solid ${c.bg3} !important;
  border-radius: 6px !important;
}

.AppHeader-search:focus,
.search-input:focus {
  border-color: ${c.blue} !important;
  box-shadow: 0 0 0 3px ${c.blue}33 !important;
}

/* ================= BOX COMPONENTS ================= */
.Box {
  background: ${c.bg1} !important;
  border: 1px solid ${c.bg2} !important;
  color: ${c.fg} !important;
  border-radius: 6px !important;
}

.Box-body {
  background: ${c.bg1} !important;
  color: ${c.fg} !important;
}

.Box-header {
  background: ${c.bg0_h} !important;
  border-bottom: 1px solid ${c.bg2} !important;
  color: ${c.fg} !important;
}

.Box-title {
  color: ${c.fg} !important;
}

.Box--overlay {
  background: ${c.bg1} !important;
  border-color: ${c.bg3} !important;
  box-shadow: 0 16px 48px rgba(0,0,0,0.4) !important;
}

.Box-btn-octicon {
  background: transparent !important;
  color: ${c.fg4} !important;
}

.Box-btn-octicon:hover {
  color: ${c.blue} !important;
  background: ${c.bg2} !important;
}

/* ================= FEED CONTENT ================= */
.feed-content {
  background: ${c.bg1} !important;
  color: ${c.fg} !important;
  border: 1px solid ${c.bg2} !important;
  border-radius: 8px !important;
  padding: 16px !important;
}

.feed-content:hover {
  background: ${c.bg2} !important;
  border-color: ${c.bg3} !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
}

.feed-item-content {
  background: ${c.bg1} !important;
  border: 1px solid ${c.bg2} !important;
  border-radius: 8px !important;
}

.feed-item-content:hover {
  background: ${c.bg2} !important;
  border-color: ${c.bg3} !important;
}

.feed-background {
  background: ${c.bg0} !important;
}

.feed-main {
  background: ${c.bg0} !important;
}

.feed-next {
  background: ${c.bg1} !important;
  border-color: ${c.bg2} !important;
}

.feed-left-sidebar {
  background: ${c.bg1} !important;
  border-color: ${c.bg2} !important;
}

.feed-right-sidebar {
  background: ${c.bg1} !important;
  border-color: ${c.bg2} !important;
}

/* ================= CODE VIEW ================= */

/* Main code container */
.react-code-file-contents,
.blob-wrapper {
  background: ${c.bg0_h} !important;
  color: ${c.fg} !important;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
  font-size: 12px !important;
  line-height: 20px !important;
  border: 1px solid ${c.bg2} !important;
  border-radius: 6px !important;
  overflow: auto !important;
}

/* Line numbers */
.blob-num,
.react-line-number,
[data-line-number] {
  background: ${c.bg0} !important;
  color: ${c.fg3} !important;
  border-right: 1px solid ${c.bg2} !important;
  user-select: none !important;
  -webkit-user-select: none !important;
}

/* Code text */
.blob-code,
.blob-code-inner,
.react-code-text,
.react-file-line {
  background: ${c.bg0_h} !important;
  color: ${c.fg} !important;
  white-space: pre !important;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
  font-size: 12px !important;
  line-height: 20px !important;
}

/* ================= SYNTAX ================= */

/* comments */
.pl-c,
.pl-c1 {
  color: ${c.gray} !important;
  font-style: italic !important;
}

/* keywords */
.pl-k,
.pl-kos {
  color: ${c.red} !important;
  font-weight: 600 !important;
}

/* strings */
.pl-s,
.pl-s1,
.pl-pds {
  color: ${c.green} !important;
}

/* variables / names */
.pl-v,
.pl-en {
  color: ${c.blue} !important;
}

/* functions / entities */
.pl-e,
.pl-ent {
  color: ${c.yellow} !important;
}

/* types */
.pl-smi {
  color: ${c.purple} !important;
}

/* ================= LINKS ================= */
a,
.Link,
.Link--primary {
  color: ${c.blue} !important;
  text-decoration: none !important;
}

a:hover,
.Link:hover {
  color: ${c.aqua} !important;
  text-decoration: underline !important;
}

.Link--muted {
  color: ${c.fg3} !important;
}

.Link--secondary {
  color: ${c.fg2} !important;
}

/* ================= INPUTS ================= */
input,
textarea,
select {
  background: ${c.bg1} !important;
  color: ${c.fg} !important;
  border: 1px solid ${c.bg3} !important;
  border-radius: 4px !important;
  padding: 6px 10px !important;
}

input:focus,
textarea:focus,
select:focus {
  border-color: ${c.blue} !important;
  outline: none !important;
  box-shadow: 0 0 0 3px ${c.blue}33 !important;
}

input::placeholder,
textarea::placeholder {
  color: ${c.fg4} !important;
  opacity: 0.7 !important;
}

.form-control {
  background: ${c.bg1} !important;
  color: ${c.fg} !important;
  border-color: ${c.bg3} !important;
}

.input-contrast {
  background: ${c.bg0_h} !important;
}

.input-block {
  width: 100% !important;
}

.form-actions {
  background: ${c.bg1} !important;
  border-color: ${c.bg2} !important;
}

/* ================= COLOR UTILITIES ================= */
.color-fg-default {
  color: ${c.fg} !important;
}

.color-fg-muted {
  color: ${c.fg3} !important;
}

.color-fg-subtle {
  color: ${c.fg4} !important;
}

.color-fg-success {
  color: ${c.green} !important;
}

.color-fg-on-emphasis {
  color: ${c.bg0} !important;
}

.color-bg-default {
  background: ${c.bg0} !important;
}

.color-bg-subtle {
  background: ${c.bg1} !important;
}

.color-bg-accent-emphasis {
  background: ${c.blue} !important;
  color: ${c.bg0} !important;
}

.color-bg-transparent {
  background: transparent !important;
}

.color-border-default {
  border-color: ${c.bg3} !important;
}

.color-border-muted {
  border-color: ${c.bg2} !important;
}

.color-border-subtle {
  border-color: ${c.bg1} !important;
}

/* ================= TYPOGRAPHY ================= */
.lh-condensed {
  line-height: 1.25 !important;
  color: ${c.fg} !important;
}

.lh-default {
  line-height: 1.5 !important;
  color: ${c.fg} !important;
}

.lh-0 {
  line-height: 0 !important;
}

.text-bold {
  font-weight: bold !important;
  color: ${c.fg0} !important;
}

.text-normal {
  font-weight: normal !important;
  color: ${c.fg} !important;
}

.text-small {
  font-size: 12px !important;
  color: ${c.fg3} !important;
}

.text-left {
  text-align: left !important;
}

/* ================= AVATARS ================= */
.avatar,
.avatar-user,
.avatar-small {
  border: 2px solid ${c.bg3} !important;
  background: ${c.bg1} !important;
}

.avatar:hover {
  border-color: ${c.blue} !important;
  box-shadow: 0 0 0 3px ${c.blue}33 !important;
}

/* ================= ICONS ================= */
.octicon {
  color: ${c.fg4} !important;
  fill: ${c.fg4} !important;
}

.octicon:hover {
  color: ${c.blue} !important;
  fill: ${c.blue} !important;
}

.octicon-star,
.octicon-star-fill {
  color: ${c.yellow} !important;
  fill: ${c.yellow} !important;
}

.octicon-repo {
  color: ${c.purple} !important;
}

.octicon-git-pull-request {
  color: ${c.green} !important;
}

.octicon-issue-opened {
  color: ${c.red} !important;
}

.octicon-search {
  color: ${c.fg4} !important;
}

.octicon-home {
  color: ${c.blue} !important;
}

.octicon-mark-github {
  filter: invert(0.9) hue-rotate(180deg) brightness(1.2) saturate(0.8) !important;
}

/* ================= UNDERLINE NAV ================= */
.UnderlineNav {
  background: ${c.bg0} !important;
  border-bottom-color: ${c.bg2} !important;
}

.UnderlineNav-item {
  color: ${c.fg} !important;
}

.UnderlineNav-item.selected {
  border-bottom-color: ${c.blue} !important;
  color: ${c.blue} !important;
}

/* ================= ACTION LISTS ================= */
.ActionList,
.SelectMenu-list,
.dropdown-menu {
  background: ${c.bg1} !important;
  border: 1px solid ${c.bg3} !important;
  border-radius: 6px !important;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3) !important;
}

.ActionListItem,
.SelectMenu-item,
.dropdown-item {
  background: ${c.bg1} !important;
  color: ${c.fg} !important;
  padding: 8px 12px !important;
}

.ActionListItem:hover,
.SelectMenu-item:hover,
.dropdown-item:hover {
  background: ${c.bg2} !important;
}

.ActionListItem-label {
  color: ${c.fg} !important;
}

.ActionListContent {
  color: ${c.fg} !important;
}

.ActionListWrap {
  background: ${c.bg1} !important;
}

.ActionListWrap--inset {
  background: ${c.bg2} !important;
}

/* ================= OVERLAYS ================= */
.Overlay,
.Overlay-body,
.Overlay-header,
.Overlay-footer {
  background: ${c.bg1} !important;
  color: ${c.fg} !important;
  border-color: ${c.bg3} !important;
}

.Overlay-title {
  color: ${c.fg0} !important;
}

.Overlay-description {
  color: ${c.fg2} !important;
}

.Overlay-closeButton {
  color: ${c.fg4} !important;
  background: transparent !important;
}

.Overlay-closeButton:hover {
  color: ${c.fg} !important;
  background: ${c.bg2} !important;
}

/* ================= MARKDOWN ================= */
.markdown-body {
  background: ${c.bg0} !important;
  color: ${c.fg} !important;
}

.markdown-body pre,
.markdown-body code {
  background: ${c.bg0_h} !important;
  color: ${c.fg1} !important;
  border-color: ${c.bg2} !important;
}

.markdown-title {
  color: ${c.fg0} !important;
  font-weight: bold !important;
}

.comment-body {
  background: ${c.bg1} !important;
  border-color: ${c.bg2} !important;
  color: ${c.fg} !important;
}

/* ================= FLASH MESSAGES ================= */
.flash,
.flash-container {
  background: ${c.bg2} !important;
  color: ${c.fg} !important;
  border-color: ${c.bg3} !important;
  border-radius: 6px !important;
}

.flash-full {
  background: ${c.bg1} !important;
}

.flash-close {
  color: ${c.fg4} !important;
}

.flash-close:hover {
  color: ${c.fg} !important;
}

/* ================= PROGRESS BARS ================= */
.Progress,
.progress-pjax-loader {
  background: ${c.bg1} !important;
  border-color: ${c.bg2} !important;
}

.Progress-item,
.progress-pjax-loader-bar {
  background: ${c.blue} !important;
}

/* ================= FOOTER ================= */
footer,
.footer {
  background: ${c.bg0_h} !important;
  color: ${c.fg3} !important;
  border-top: 1px solid ${c.bg2} !important;
}

/* ================= SCROLLBARS ================= */
::-webkit-scrollbar {
  width: 12px !important;
  height: 12px !important;
  background: ${c.bg1} !important;
}

::-webkit-scrollbar-thumb {
  background: ${c.bg3} !important;
  border-radius: 6px !important;
  border: 2px solid ${c.bg1} !important;
}

::-webkit-scrollbar-thumb:hover {
  background: ${c.bg4} !important;
}

::-webkit-scrollbar-track {
  background: ${c.bg1} !important;
  border-radius: 6px !important;
}

/* ================= SELECTION ================= */
::selection {
  background: ${c.selection} !important;
  color: ${c.fg0} !important;
}

/* ================= FOCUS STATES ================= */
:focus,
:focus-visible {
  outline: 2px solid ${c.blue} !important;
  outline-offset: 2px !important;
  border-radius: 4px !important;
}

/* ================= NO ANIMATION ================= */
* {
  transition: none !important;
  animation: none !important;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 768px) {
  .dashboard-sidebar,
  .feed-left-sidebar,
  .feed-right-sidebar {
    background: ${c.bg0} !important;
  }
  
  .feed-item-content {
    padding: 12px !important;
    margin-bottom: 12px !important;
  }
  
  .feed-content {
    padding: 12px !important;
  }
}

/* ================= BADGES ================= */
.private,
.public {
  background: ${c.bg2} !important;
  color: ${c.fg} !important;
  border-color: ${c.bg3} !important;
}

.private {
  background: ${c.red}22 !important;
  color: ${c.red} !important;
}

.public {
  background: ${c.green}22 !important;
  color: ${c.green} !important;
}

/* ================= REACTIONS ================= */
.reactions-container,
.social-reactions {
  background: ${c.bg1} !important;
  border-color: ${c.bg2} !important;
}

.reaction-dropdown-button {
  background: ${c.bg2} !important;
  color: ${c.fg} !important;
  border-color: ${c.bg3} !important;
}

.reaction-dropdown-button:hover {
  background: ${c.bg3} !important;
}
`);
})();
