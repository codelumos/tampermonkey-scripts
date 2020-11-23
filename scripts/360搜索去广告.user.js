// ==UserScript==
// @name         360搜索去广告
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      0.1
// @icon         https://www.so.com/favicon.ico
// @description  360搜索、360资讯、360问答、360影视、360图片、360良医、360地图、360百科、360国学、360文库、360音乐、360翻译去广告
// @author       HaoNShi
// @match        *://*.so.com/*
// @match        *://video.360kan.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var refreshTime = 1000;		// 检测广告的刷新时间

    // 360搜索去广告
    if(location.href.indexOf('www.so.com') > 0){
        setInterval(function(){
            $(".lawnfooter-image__panel").remove();// 首页下方横幅广告
            $("#side").remove(); // 侧边栏
            // 条目广告
            $(".res-mediav").remove();
            $(".m-spread-middle").remove();
            $("#news-sdk-sad").remove();
        }, refreshTime);
    }

    // 360资讯去广告
    if(location.href.indexOf('news.so.com') > 0){
        setInterval(function(){
            $("#side").remove(); // 侧边栏
            $(".info-flow").remove(); // 智能推荐
        }, refreshTime);
    }

    // 360问答去广告
    if(location.href.indexOf('wenda.so.com') > 0){
        setInterval(function(){
            $(".aside").remove(); // 侧边栏
            $("#js-mod-fixed-float").remove(); // 右下角广告
            // 条目广告
            $("#e_idea_wenda_leftBox").remove();
            $(".js-busi-item").remove();
        }, refreshTime);
    }

    // 360影视去广告
    if(location.href.indexOf('video.360kan.com') > 0){
        setInterval(function(){
            $(".p-searchad-wrap").remove(); // 文字广告
            // 条目广告
            $(".adbig").remove();
            $("[data-adclicklog]").remove();
        }, refreshTime);
    }

    // 360图片去广告
    if(location.href.indexOf('image.so.com') > 0){
        setInterval(function(){
            $("[data-id*='cm_extended_init']").remove(); // 条目广告
            $(".related_query").parent().remove(); // 相关搜索
        }, refreshTime);
    }

    // 360良医去广告
    if(location.href.indexOf('ly.so.com') > 0){
        setInterval(function(){
            $("#so_ob").remove(); // 侧边栏（保留提示）
            $("#news-card").remove(); // 热门资讯推荐
        }, refreshTime);
    }

    // 360地图去广告
    if(location.href.indexOf('ditu.so.com') > 0){
        setInterval(function(){
            $("[data-e_href]").remove(); // 条目广告
        }, refreshTime);
    }

    // 360百科去广告
    if(location.href.indexOf('baike.so.com/search') > 0){
        setInterval(function(){
            $(".aside").remove(); // 侧边栏
            $("#e_idea_wenda_leftBox").remove(); // 条目广告
            $("div[id*='mvdiv']").remove(); // 横幅广告
        }, refreshTime);
    }
    if(location.href.indexOf('baike.so.com/doc') > 0){
        setInterval(function(){
            // 右下角广告
            $("#js-mod-fixed-float").remove();
            $(".js-newsfeed-popup").remove();
            // 侧边栏广告
            $("div[id*='J-mod-right-ad']").remove(); // 侧边栏广告
            $("#J-mod-right-recommend").remove(); // 为您推荐广告
            $("#J-mod-hot-rank").remove(); // 实时热点
            $("#rightbanner").remove(); // 侧边栏广告
            // 底部广告
            $("#J-mod-interested-possible").remove(); // 搜索发现
            $(".entry-plus").remove(); // 热点资讯
            $("#js-doc-recommand").remove(); // 为您推荐广告
        }, refreshTime);
    }

    // 360国学去广告
    if(location.href.indexOf('guoxue.baike.so.com') > 0){
        setInterval(function(){
            $(".right").remove(); // 侧边栏
            $(".js-newsfeed-popup").remove();// 右下角广告
            $("#js-doc-recommand").remove(); // 为您推荐广告
            $(".lm-bottom-container").remove(); // 横幅广告
            $("#J-entry-newsfeed-bottom").remove(); // 资讯
        }, refreshTime);
    }

    // 360文库去广告
    if(location.href.indexOf('wenku.so.com/s') > 0){
        setInterval(function(){
            $(".rt-side").remove(); // 侧边栏
            $("#e_idea_wenda_leftBox").remove(); // 条目广告
        }, refreshTime);
    }
    if(location.href.indexOf('wenku.so.com/d') > 0){
        setInterval(function(){
            $("[id*='QIHOO__WEB__SO__BANNER_SLIDER']").remove(); // 右下角广告
            $(".page-busi").remove(); // 横幅广告
            $(".rec-left").remove(); // 为您推荐广告
            $("#news-card").parent().remove(); // 资讯
            $(".busi-article").remove(); // 文字广告
            $("#js-left-interest").parent().parent().remove(); // 您可能感兴趣的内容
            // 侧边栏
            $("#e_idea_wk_detail_hot").remove(); // 相关文档推荐广告
            $(".side-mod").remove(); // 今日热点广告
        }, refreshTime);
    }

    // 360音乐去广告
    if(location.href.indexOf('music.so.com') > 0){
        setInterval(function(){
            $("#right-top-ad").remove(); // 侧边栏
            $(".newsfeed").remove(); // 相关推荐广告
        }, refreshTime);
    }

    // 360翻译去广告
    if(location.href.indexOf('fanyi.so.com') > 0){
        setInterval(function(){
            $("#card_container").remove(); // 热点推荐广告
        }, refreshTime);
    }
})();
