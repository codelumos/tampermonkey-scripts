// ==UserScript==
// @name         百度系网站去广告
// @namespace    http://tampermonkey.net/
// @version      0.2
// @icon         http://www.baidu.com/favicon.ico
// @description  百度搜索、百度知道、百度百科、百度文库去广告
// @author       HaoNShi
// @match        *://*.baidu.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var loadTime = 1000; // 延迟加载广告的加载时间
    var refreshTime = 1000; // 检测反复加载广告的刷新时间
    var newAdRefreshTime = 3500; // 百度搜索中删除广告后出现新广告的加载时间

    // 百度搜索去广告
    if(location.href.indexOf('www.baidu.com/s') > 0){
        $("[cmatchid]").remove();
        $("#content_right").remove();
        setTimeout(function(){
            $("span:contains('广告')").parent().parent().remove();
        }, newAdRefreshTime);
    }

    // 百度知道去广告
    if(location.href.indexOf('zhidao') > 0){
        $(".shop-entrance").remove();
        $(".activity-entry").remove();
        $(".task-list-button").remove();
    }
    if(location.href.indexOf('zhidao.baidu.com/search') > 0){
        $(".bannerdown").remove();
        $(".aside.fixheight").remove();
        $(".wgt-bottom-ask").remove();
    }
    if(location.href.indexOf('zhidao.baidu.com/question') > 0){
        $(".adTopImg").remove();
        $(".exp-topwld-tip").remove();
        $(".question-number-text-chain").remove();
        $(".grid-r.qb-side").remove();
        $(".wgt-ads").remove();
        $(".wgt-bottom-union").remove();
    }

    // 百度百科去广告
    if(location.href.indexOf('baike.baidu.com/item') > 0){
        setTimeout(function(){
            $(".topA").remove();
            $(".right-ad").remove();
            $(".lemmaWgt-promotion-vbaike").remove();
            $(".lemmaWgt-promotion-slide").remove();
            $("#side_box_unionAd").remove();
        }, loadTime);
    }

    // 百度文库去广告
    if(location.href.indexOf('wenku') > 0){
        $(".banner-ad").remove();
        $(".ad-box").remove();
        $("#banurl").remove();
    }
    if(location.href.indexOf('wenku.baidu.com/search') > 0){
        $("#fengchaoad").remove();
        $(".yuedu-recommend-wrap").remove();
        $(".search-aside-adWrap").remove();
    }
    if(location.href.indexOf('wenku.baidu.com/view') > 0){
        $("#ggbtm-ads").remove();
        $(".union-ad-bottom").remove();
        $(".ad-vip-close-bottom").remove();
        $("#relative-videos-wrap").remove();
        $(".ggbtm-vip-close").remove();
        setInterval(function(){
            $(".view-like-recom-fc").remove();
        }, refreshTime);
    }

})();
