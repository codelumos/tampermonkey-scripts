// ==UserScript==
// @name         问卷星允许选中复制
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @icon         https://www.wjx.cn/favicon.ico
// @description  解除问卷星对选中和右键的限制
// @author       CodeLumos
// @homepageURL  https://github.com/codelumos/tampermonkey-scripts
// @match        *://*.wjx.cn/*
// @match        *://*.wjx.top/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.oncontextmenu = function () {
        return true;
    };
    document.onselectstart = function () {
        return true;
    };
    $("body").css("user-select", "text");

})();
