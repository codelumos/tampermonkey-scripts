// ==UserScript==
// @name         M站优化
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      1.3
// @icon         http://www.bimibimi.tv/favicon.ico
// @description  bimibimi去广告以及其他一系列优化
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
        $("a").css("cursor", "pointer");
    })

    // 删除伪搜索历史框
    $(".search-history").remove();

    // 调整播放页的导航栏和关灯按钮的层级
    $(".wrapper > ul > li > ul").css("z-index", "999");

    // 对齐提示条
    $("div[style]").each(function() {
        if ($(this).css("width") == "1155px") {
            $(this).css("margin-left", "0px");
            $(this).css("width", "1190px");
        }
    })


})();
