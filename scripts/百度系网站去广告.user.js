// ==UserScript==
// @name         百度系网站去广告
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      1.17
// @icon         http://www.baidu.com/favicon.ico
// @description  百度搜索、百度知道、百度百科、百度文库、百度图片、百度视频、百度贴吧、百度地图、百度经验去广告
// @author       HaoNShi
// @match        *://www.baidu.com/s*
// @match        *://zhidao.baidu.com/*
// @match        *://baike.baidu.com/*
// @match        *://wenku.baidu.com/*
// @match        *://image.baidu.com/search/*
// @match        *://xueshu.baidu.com/s*
// @match        *://v.baidu.com/*
// @match        *://video.baidu.com/*
// @match        *://tieba.baidu.com/*
// @match        *://map.baidu.com/*
// @match        *://jingyan.baidu.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

jQuery.noConflict();
(function($) {
    'use strict';

    // Your code here...
    var loadTime = 1000;		// 延迟加载广告的加载时间
    var slowLoadTime = 2500;	// 高延迟加载广告的加载时间
    var refreshTime = 1000;		// 反复加载广告的检测刷新时间

    // 百度搜索去广告
    if(location.href.indexOf('www.baidu.com/s') > 0){
        $("[cmatchid]").remove();
        $("#content_right").remove();
    }
    if(location.href.indexOf('www.baidu.com/s?') > 0){
        // 品牌广告
        $("#content_left").find("div:eq(0)").each(function() {
            var id = String($(this).attr("id"));
            if (id == "undefined") {
                $(this).remove();
            }
        })
        setTimeout(function(){
            $("span").each(function() {
                if ($(this)[0].innerHTML == '广告') {
                    console.log($(this)[0].innerHTML);
                    $(this).parent().parent().remove();
                }
            })
        }, slowLoadTime);
    }

    // 百度知道去广告
    if(location.href.indexOf('zhidao.baidu.com') > 0){
        $(".shop-entrance").remove();
        $(".activity-entry").remove();
        $(".task-list-button").remove();
    }
    if(location.href.indexOf('zhidao.baidu.com/search') > 0){
        $(".bannerdown").remove();
        $(".aside.fixheight").remove();
        $(".wgt-bottom-ask").remove();
        // 品牌广告
        $(".leftup").remove();
        $(".wgt-iknow-special-business").remove();
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
        }, loadTime);
    }

    // 百度百科去广告
    if(location.href.indexOf('baike.baidu.com') > 0){
        setTimeout(function(){
            $("#navbarAdNew").remove();
            $(".userbar_mall").remove();
        }, loadTime);
    }
    if(location.href.indexOf('baike.baidu.com/item') > 0){
        // 品牌广告
        $(".pinzhuanWrap").remove();
        $(".configModuleBanner").remove();
        setTimeout(function(){
            $(".topA").remove();
            $(".right-ad").remove();
            $(".lemmaWgt-promotion-vbaike").remove();
            $(".lemmaWgt-promotion-slide").remove();
            $("#side_box_unionAd").remove();
        }, loadTime);
    }

    // 百度文库去广告
    if(location.href.indexOf('wenku.baidu.com') > 0){
        $(".banner-ad").remove();
        $(".ad-box").remove();
        $("#banurl").remove();
        $("#my-wkHome-vip-tips").parent().remove();
        $(".vip-card").remove();
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
        $("#ggbtm").parent().remove();
        $(".union-ad-bottom").remove();
        $(".ad-vip-close-bottom").remove();
        $("#relative-videos-wrap").remove();
        $(".add-has-money-pay").remove();
        $(".wk-color-vip-red").parent().parent().remove();
        $(".vip-tips-wrap").parent().remove();
        $(".top-ads-banner-wrap").remove();

        $(".operation-wrapper").remove();
        $(".relative-course-wrapper").remove();
        $(".hot-search-wrapper").remove();
        $(".hx-right-wrapper").remove();
        $(".hx-bottom-wrapper").remove();
        $(".relative-recommend-wrapper").remove();
        $(".fc-container").remove();

        $("#ggbtm-ads").parent().remove();
        setTimeout(function(){
            $(".wangpan-tip").remove();
            $(".new-user-discount-tip").remove();
            $(".pay-vip-btn-wrap").remove();
            $(".relative-doc-ad-wrapper").remove();
        }, loadTime);
        setInterval(function(){
            $(".view-like-recom-fc").remove();
            $(".EC_result").remove();
        }, refreshTime);
    }

    // 百度图片去广告
    if(location.href.indexOf('image.baidu.com/search/index') > 0){
        // 品牌广告
        $("#pnlBeforeContent").remove();
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
    if(location.href.indexOf('video.baidu.com') > 0 || location.href.indexOf('v.baidu.com') > 0){
        setTimeout(function(){
            $("#pallcommoncolumnad").remove(); // 顶栏广告
            $("#index_right_top").remove(); // 搜索栏右侧广告
            $("#qzfcadid").remove(); // 侧边栏广告
            $("#PCallpagesidebar1").remove(); // 侧边栏广告
            $("#PCallpagesidebar2").remove(); // 侧边栏广告
            $(".bdvideo-adver-carousel").parent().remove(); // 右下角广告
            $("div[id*='adone']").remove();
            $("div[id*='adtwo']").remove();
            // 详情页广告
            $("#detail_adm_right").remove();
            $(".ctt-adver1-banner").remove();
            $("div[id*='PCDetailPageTopRightList']").remove();
            // 频道页广告
            $("#pcshortchannelTopRight").remove();
            $("#__lawnImageContainer").parent().parent().remove();
        }, loadTime);
        setInterval(function(){
            // 横幅广告
            $(".section-ad").remove();
            $(".full-collunm-ad").remove();
            $("div[id*='channelBannerAdver']").remove();
            $("div[id*='channelColumn']").parent().remove();
            $("div[id*='ChannelColumn']").parent().remove();
            // 条目中的广告
            $("div[id*='pc']").remove();
            $("div[id*='PC']").remove();
            $("div[id*='adv-carousel-item']").parent().remove(); // 热点聚焦广告
            $("[id*='FeedAdSys']").remove(); // 热门推荐广告
            $("div[id*='TabAd']").remove();
        }, refreshTime);
    }
    if(location.href.indexOf('video.baidu.com/v') > 0 || location.href.indexOf('v.baidu.com/v') > 0){
        // 品牌广告
        $(".top-ad-cont").remove();
        setTimeout(function(){
            // 横幅广告
            $("div[id*='searchMoreLong']").remove();
            $("#searchPagefeedBanner").remove();
            $(".side-content").remove();
            $("#psBottomColumn").parent().remove();
        }, loadTime);
        setInterval(function(){
            // 条目中的广告
            $("#searchResultAdOne").remove();
            $("#searchHotShortSeven").remove();
            $("#searchHotShortSevenTwo").remove();
        }, refreshTime);
    }
    if(location.href.indexOf('www.baidu.com/sf/vsearch') > 0){
        // 品牌广告
        $("#s_tab").next().next().each(function() {
            var id = String($(this).attr("id"));
            if (id == "undefined") {
                $(this).remove();
            }
        })
    }

    // 百度贴吧去广告
    if(location.href.indexOf('tieba.baidu.com/f/search') > 0){
        $(".s_aside").remove();
    }
    if(location.href.indexOf('tieba.baidu.com/f?') > 0){
        setInterval(function(){
            $("span:contains('广告')").parent().parent().parent().parent().parent().remove();
        }, refreshTime);
    }
    if(location.href.indexOf('tieba.baidu.com/p') > 0){
        $("#j_p_postlist").find("div").each(function() {
            var isAd = String($(this).attr("ad-dom-img"));
            if (isAd == "true") {
                $(this).remove();
            }
        })
    }

    // 百度地图去广告
    if(location.href.indexOf('map.baidu.com/search') > 0){
        // 品牌广告
        setInterval(function(){
            $(".damoce-search-item.damoce-search-item-nopoi").remove();
        }, loadTime);
    }

    // 百度经验去广告
    if(location.href.indexOf('jingyan.baidu.com/search') > 0){
        $(".ec_ad").parent().remove();
    }
    if(location.href.indexOf('jingyan.baidu.com/article') > 0){
        $("#fresh-share-exp-e").remove();
        $(".wgt-income-money").remove();
        $(".aside-pro-container").remove();
        $("#bottom-ads-container").remove();
        $(".magzine-list").remove();
    }

})(jQuery);
