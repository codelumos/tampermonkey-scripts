// ==UserScript==
// @name         360导航去广告
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  删除360导航部分广告
// @author       HaoNShi
// @match        *://hao.360.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var refreshTime = 1000; // 检测广告的刷新时间

    setInterval(function(){
        $("#top-full-column-tips").remove(); // 顶部广告
        $("#doc").css("top", "0"); // 去除顶部广告后上移body

        $("#activity").remove(); // 左侧广告
        $(".textlink_ad_icon").parent().remove(); // 热点广告条目
        $(".ad-textlink").parent().remove(); // 猜你爱看广告条目

        $("#bottom_hotsite").remove(); // 类导航栏广告
        $(".ad-top").remove(); // 删除发现你喜欢
        $(".ad.infoflow-guess-mv-ad").parent().parent().parent().remove(); // 快资讯广告
        $(".infoflow-item.mv").remove(); // 娱乐头条广告
        $(".mv").remove(); // 游戏攻略广告
        $(".clearfix.feed-mv.js-mv-infoflow-item").remove(); // 娱乐沸点广告
        $(".feed-item.feed-mv.js-mv-infoflow-item").remove(); // 推荐广告

        $(".plane-hd.plane-adsvc").remove(); // 右侧导航栏广告
        $("#festival_float_bottom").remove(); // 底部横幅广告
        $("#popup_news").remove(); // 下方悬浮广告
        $(".festival_float_bottom-leftBottom").remove();// 左下角广告
        $("#large2small").remove(); // 右下角广告

    }, refreshTime);

})();
