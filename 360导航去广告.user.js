// ==UserScript==
// @name         360导航去广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  删除360导航部分广告
// @author       HaoNShi
// @match        *://hao.360.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var loadTime = 2000; // 网站的加载时间，默认2s，可根据实际网络调整

    setTimeout(function(){
        $("#top-full-column-tips").remove(); // 顶部广告
        $("#doc").css("top", "0"); // 去除顶部广告后上移body

        $("#activity").remove(); // 左侧广告
        $(".textlink_ad_icon").parent().remove(); // 左侧热点中的广告条目
        $(".ad-textlink").parent().remove(); // 左侧猜你爱看中的广告条目

        $("#bottom_hotsite").remove(); // 主栏广告
        $(".ad-top").remove(); // 发现你喜欢
        $(".ad.infoflow-guess-mv-ad").parent().parent().parent().remove(); // 快资讯中的广告

        $(".plane-hd.plane-adsvc").remove(); // 右侧导航栏广告
        $("#popup_news").remove(); // 下方悬浮广告
        $("#large2small").remove(); // 右下角广告

    }, loadTime);
})();