// ==UserScript==
// @name         M站优化
// @namespace    http://tampermonkey.net/
// @version      1.1
// @icon         http://www.bimibimi.tv/favicon.ico
// @description  优化bimibimi：去广告，允许选中和右键，还原鼠标样式等
// @author       HaoNShi
// @match        *://www.bimibimi.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 去广告
    $("div[style]").each(function() {
        if ($(this).css("z-index") == "2147483647") {
            $(this).remove();
        } else if ($(this).css("z-index") == "2147483") {
            $(this).remove();
        }
    })
    $(".tuiguang").remove();

    // 允许选中和右键
    document.oncontextmenu = function(e) {
        return true;
    };
    document.onselectstart = function(e) {
        return true;
    };

    // 还原鼠标样式
    document.body.style.cursor = "default";
    $("a").hover(function() {
        $("a").css("cursor","pointer");
    })

    // 调整播放页的导航栏和关灯按钮的层级
    $(".wrapper > ul > li > ul").css("z-index", "999");

})();
