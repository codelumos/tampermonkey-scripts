// ==UserScript==
// @name         快资讯去广告
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      0.1
// @icon         https://p5.ssl.qhimg.com/t013ed96d9c4cf74064.png
// @description  删除快资讯中的广告
// @author       HaoNShi
// @match        *://www.360kuai.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var loadTime = 1000;		// 延迟加载广告的加载时间
    var refreshTime = 1000;		// 反复加载广告的检测刷新时间

    setTimeout(function(){
        $("#as_shop_gg").remove(); // 主页购物广告
        $(".popupgg").remove(); // 详情页右下角广告
    }, loadTime);

    setInterval(function(){
        $("[data-ggclick='ad']").remove(); // 主页广告条目
        $("[data-ggsrc]").remove(); // 详情页广告条目
        $(".guessgg").remove(); // 详情页购物广告
    }, refreshTime);
})();
