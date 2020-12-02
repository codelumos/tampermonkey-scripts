// ==UserScript==
// @name         M站优化
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      1.6
// @icon         http://www.bimiacg.com/favicon.ico
// @description  bimi动漫去广告以及其他一系列优化
// @author       HaoNShi
// @match        *://www.bimiacg.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 去广告
    setTimeout(function () {
        $("#HMRichBox").remove(); // 右下角广告
        $("#HMcoupletDivleft").remove(); // 右下角广告
        $("#HMcoupletDivright").remove(); // 右下角广告
    }, 500);
    $(".tuiguang").remove();

    // 允许选中和右键
    document.oncontextmenu = function () {
        return true;
    };
    document.onselectstart = function () {
        return true;
    };

    // 还原鼠标样式
    document.body.style.cursor = "default";
    $("a").hover(function () {
        $("a").css("cursor", "pointer");
    })

    // 删除伪搜索历史框
    $(".search-history").remove();

    // 调整播放页的导航栏和关灯按钮的层级
    $(".wrapper > ul > li > ul").css("z-index", "999");

    // 对齐提示条
    $("div[style]").each(function () {
        if ($(this).css("width") === "1155px") {
            $(this).css("margin-left", "0px");
            $(this).css("width", "1190px");
        }
    })

})();