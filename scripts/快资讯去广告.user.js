// ==UserScript==
// @name         快资讯去广告
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @icon         https://p5.ssl.qhimg.com/t013ed96d9c4cf74064.png
// @description  删除快资讯中的广告
// @author       HaoNShi
// @homepageURL  https://github.com/HaoNShi/tampermonkey-scripts
// @match        *://www.360kuai.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const refreshTime = 1000;		// 反复加载广告的检测刷新时间

    setInterval(function () {
        $("#as_shop_gg").remove(); // 主页购物广告
        $(".popupgg").remove(); // 详情页右下角广告
        $(".top-part").remove(); // 顶栏广告
        $("[data-ggclick='ad']").remove(); // 主页广告条目
        $(".g4").remove(); // 横幅广告
        $("[data-ggsrc]").remove(); // 详情页广告条目
        $(".guessgg").remove(); // 详情页购物广告
        $(".bkg-block").remove(); // 背景广告
        $(".bkg-close").remove(); // 背景广告
    }, refreshTime);
})();
