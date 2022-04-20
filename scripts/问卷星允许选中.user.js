// ==UserScript==
// @name         问卷星允许选中
// @namespace    http://tampermonkey.net/
// @version      0.2
// @icon         https://www.wjx.cn/favicon.ico
// @description  问卷星允许选中和右键
// @author       CodeLumos
// @homepageURL  https://github.com/codelumos/tampermonkey-scripts
// @match        https://*.wjx.cn/*
// @match        https://*.wjx.top/*
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
