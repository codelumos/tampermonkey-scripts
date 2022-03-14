// ==UserScript==
// @name         bimi动漫优化
// @namespace    http://tampermonkey.net/
// @version      2.1
// @icon         https://www.bimiacg5.net/favicon.ico
// @description  bimi动漫（M站）去广告以及其他一系列优化
// @author       CodeLumos
// @homepageURL  https://github.com/codelumos/tampermonkey-scripts
// @match        *://*.dodoge.me/*
// @match        *://*.bimiacg.net/*
// @match        *://*.bimiacg4.net/*
// @match        *://*.bimiacg5.net/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 去广告
    setInterval(function () {
        $("#HMRichBox").remove(); // 右下角广告
        $("#HMcoupletDivleft").remove(); // 右下角广告
        $("#HMcoupletDivright").remove(); // 右下角广告
        $("iframe").contents().find("#adv_wrap_hh").remove(); // 播放器暂停广告
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

    // 删除APP推荐遮罩层
    $("#bkcl").remove();

})();
