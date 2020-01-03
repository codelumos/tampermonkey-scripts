// ==UserScript==
// @name         百度系网站去广告
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      1.3
// @icon         http://www.baidu.com/favicon.ico
// @description  百度搜索、百度知道、百度百科、百度文库、百度图片、百度视频去广告
// @author       HaoNShi
// @match        *://www.baidu.com/s*
// @match        *://zhidao.baidu.com/*
// @match        *://baike.baidu.com/*
// @match        *://wenku.baidu.com/*
// @match        *://image.baidu.com/search/*
// @match        *://xueshu.baidu.com/s*
// @match        *://video.baidu.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var loadTime = 1000; // 延迟加载广告的加载时间
    var slowLoadTime = 2500; // 高延迟加载广告的加载时间
    var refreshTime = 1000; // 检测反复加载广告的刷新时间

    // 百度搜索去广告
    if(location.href.indexOf('www.baidu.com/s') > 0){
        $("[cmatchid]").remove();
        $("#content_right").remove();
        setTimeout(function(){
            $("span:contains('品牌广告')").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
            $("span:contains('广告')").parent().parent().remove();
        }, slowLoadTime);
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
        $("#wgt-ecom-banner").remove();
        $("#wgt-ecom-right").remove();
        $(".question-number-text-chain").remove();
        $(".grid-r.qb-side").remove();
        $(".wgt-ads").remove();
        $(".wgt-bottom-union").remove();
        setTimeout(function(){
            $(".ec-pc_mat_coeus__related_link_text-content").remove();
        }, refreshTime);
    }

    // 百度百科去广告
    if(location.href.indexOf('baike') > 0){
        setTimeout(function(){
            $("#navbarAdNew").remove();
            $(".userbar_mall").remove();
        }, loadTime);
    }
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
        setTimeout(function(){
            $(".zsj-topbar").remove();
            $(".lastcell-dialog").remove();
            $(".zsj-toppos").remove();
        }, loadTime);
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

    // 百度图片去广告
    if(location.href.indexOf('image.baidu.com/search/index') > 0){
        setInterval(function(){
            $(".fcImgli").remove();
        }, refreshTime);
    }
    if(location.href.indexOf('image.baidu.com/search/detail') > 0){
        $(".text-link-ads").remove();
        $(".rsresult-card").remove();
        $("#adCard").remove();
    }

    // 伪百度学术重定向
    if(location.href.indexOf('xueshu.baidu.com/s') > 0 && location.href.indexOf('xueshu.baidu.com/s?') <= 0){
        window.location.replace("https://xueshu.baidu.com");
    }
    if(location.href.indexOf('xueshu.baidu.com/s?') > 0 && location.href.indexOf('tn=SE_baiduxueshu_c1gjeupa') <= 0){
        window.location.replace("https://xueshu.baidu.com/s?tn=SE_baiduxueshu_c1gjeupa&"+window.location.search.substr(1));
    }

    // 百度视频去广告
    if(location.href.indexOf('video') > 0){
        setTimeout(function(){
            $("#pallcommoncolumnad").remove(); // 顶栏广告
            $("#PCFullScreenad").remove(); // 底栏广告
            $("#qzfcadid").remove(); // 侧边栏广告
            $("#PCallpagesidebar1").remove(); // 侧边栏广告
            $("#PCallpagesidebar2").remove(); // 侧边栏广告
            $(".bdvideo-adver-carousel").parent().remove(); // 右下角广告
        }, slowLoadTime);
        setInterval(function(){
            // 横幅广告
            $(".section-ad").remove();
            $("div[id*='pcindexpageColumn']").parent().remove();
            $("#PCindexColumnTVshow").remove();
            // 条目中的广告
            $("div[id*='PCFocusPoster']").remove(); // 最新要闻广告
            $("div[id*='pcIndex']").remove();
            $("div[id*='PCindex']").remove();
            $("div[id*='PCIndex']").remove();
            $("div[id*='adv-carousel-item']").parent().remove(); // 热点聚焦广告
            $("[id*='FeedAdSys']").remove(); // 热门推荐广告
            $("div[id*='PCbashortchannelRight']").parent().remove(); // 相关推荐广告
        }, refreshTime);
    }
    if(location.href.indexOf('video.baidu.com/channel') > 0){
        $("#pcshortchannelTopRight").remove();
    }

})();
