// ==UserScript==
// @name         百度系网站去广告
// @namespace    https://github.com/HaoNShi/tampermonkey-scripts
// @version      3.5
// @icon         https://www.baidu.com/favicon.ico
// @description  百度搜索、百度知道、百度百科、百度文库、百度图片、百度视频、百度贴吧、百度地图、百度经验、百度翻译去广告
// @author       HaoNShi
// @match        *://*.baidu.com/*
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

var dom = {};
dom.query = jQuery.noConflict(true);
dom.query(document).ready(function ($) {
    'use strict';

    const refreshTime = 1000; // 检测广告的刷新时间

    // 百度搜索去广告
    if (location.href.indexOf('www.baidu.com') > 0) {
        setInterval(function () {
            $("#content_right").remove();
            // 品牌广告
            $("#top-ad").remove();
            $(".ec-pl-container").remove();
            // 条目广告
            $("#content_left > div").each(function () {
                if ($(this).attr('id') === undefined && $('> div', this).attr('data-placeid') !== undefined) {
                    $(this).remove();
                }
            })
            // 品牌广告
            $("#content_left > div").each(function () {
                if ($(this).attr('id') === undefined && $('> style', this).attr('id') !== undefined) {
                    $(this).remove();
                }
            })
            // 延迟加载条目广告
            $("a").each(function () {
                if ($(this)[0].innerHTML === '广告') {
                    $(this).parents(".result").remove();
                }
            })
        }, refreshTime);
    }

    // 百度知道去广告
    if (location.href.indexOf('zhidao.baidu.com') > 0) {
        setInterval(function () {
            $(".shop-entrance").remove();
            $(".activity-entry").remove();
            $(".task-list-button").remove();
        }, refreshTime);
    }
    if (location.href.indexOf('zhidao.baidu.com/search') > 0) {
        setInterval(function () {
            $(".bannerdown").remove();
            $(".aside.fixheight").remove();
            $(".wgt-bottom-ask").remove();
            // 品牌广告
            $(".leftup").remove();
            $(".wgt-iknow-special-business").remove();
        }, refreshTime);
    }
    if (location.href.indexOf('zhidao.baidu.com/question') > 0) {
        setInterval(function () {
            $(".adTopImg").remove();
            $(".exp-topwld-tip").remove();
            $("#wgt-ecom-banner").remove();
            $("#wgt-ecom-right").remove();
            $(".question-number-text-chain").remove();
            $(".grid-r.qb-side").remove();
            $(".wgt-ads").remove();
            $(".wgt-bottom-union").remove();
            $(".ec-pc_mat_coeus__related_link_text-content").remove();
        }, refreshTime);
    }

    // 百度百科去广告
    if (location.href.indexOf('baike.baidu.com') > 0) {
        setInterval(function () {
            $("#navbarAdNew").remove();
            $(".userbar_mall").remove();
        }, refreshTime);
    }
    if (location.href.indexOf('baike.baidu.com/item') > 0) {
        setInterval(function () {
            // 品牌广告
            $(".pinzhuanWrap").remove();
            $(".configModuleBanner").remove();
            $(".topA").remove();
            $(".right-ad").remove();
            $(".lemmaWgt-promotion-vbaike").remove();
            $(".lemmaWgt-promotion-slide").remove();
            $("#side_box_unionAd").remove();
        }, refreshTime);
    }

    // 百度文库去广告
    if (location.href.indexOf('wenku.baidu.com') > 0) {
        setInterval(function () {
            $(".tiger-lossUser-dialog-vip").remove();
            $(".banner-ad").remove();
            $(".ad-box").remove();
            $("#banurl").remove();
            $("#my-wkHome-vip-tips").parent().remove();
            $(".vip-card").remove();
            $(".zsj-topbar").remove();
            $(".lastcell-dialog").remove();
            $(".zsj-toppos").remove();
        }, refreshTime);
    }
    if (location.href.indexOf('wenku.baidu.com/search') > 0) {
        setInterval(function () {
            $("#pzsearchtop").remove(); // 品牌广告
            $(".topicBox").remove();
            $("#fengchaoad").remove();
            $(".yuedu-recommend-wrap").remove();
            $(".search-aside-adWrap").remove();
            $(".search-knowledge").parent().remove();
            $(".new-vip-card-position").remove();
            // 移除百度文库0下载券查询页面的遮盖层
            $(".coverImg").remove();
        }, refreshTime);
    }
    if (location.href.indexOf('wenku.baidu.com/view') > 0) {
        setInterval(function () {
            // 全页面广告
            $(".pager-container").remove();
            $(".add-has-money-pay").remove();
            $(".experience-card-wrap").remove();
            // VIP推广
            $(".join-vip").remove();
            $(".vip-card-wrap").remove();
            $(".vip-pop-wrap").remove();
            $(".vip-activity-wrap").remove();
            $(".fold-page-tip").remove();
            $(".hx-warp").remove(); // 文档中横幅广告
            $(".convert-tip").remove();
            $(".new-user-discount-tip").remove();
            $(".top-ads-banner-wrap").remove();
            $(".banner-core-wrap.super-vip").remove();
            $(".vip-layer-inner").remove();
            $(".vip-activity-wrap-new").remove();
            $(".vip-pay-pop-v2-wrap").remove();
            $(".zhenxuan-guide").remove(); // 甄选
            // 右侧栏广告
            $(".fufei-activity-bar").remove();
            $(".qua-box").remove();
            $(".service-entry").remove();
            $(".relative-doc-ad-wrapper").remove(); // 相关文档广告
            $(".ad-onff").remove(); // 相关文档广告
            $(".second-ad").remove(); // 相关文档广告
            $(".relative-course-wrapper").remove(); // 精品课程广告
            $(".hx-right-wrapper").remove(); // 相关资源广告
            $(".extension").remove(); // 右下角广告
            $(".reader-extensin").remove(); // 右下角广告
            // 底部广告
            $(".hx-recom-wrapper").remove();
            $(".hx-bottom-wrapper").remove();
            $("#relative-videos-wrap").remove();
            $("#ggbtm").parent().remove();
            $("#ggbtm-ads").parent().remove();
            $(".union-ad-bottom").parent().remove();
            $(".bottom-pop-wrap").remove();
        }, refreshTime);
    }

    // 百度图片去广告
    if (location.href.indexOf('image.baidu.com/search/index') > 0) {
        setInterval(function () {
            // 品牌广告
            $("#pnlBeforeContent").remove();
            $(".adMask").remove();
            $(".newfcImgli").remove();
        }, refreshTime);
    }
    if (location.href.indexOf('image.baidu.com/search/detail') > 0) {
        setInterval(function () {
            $(".text-link-ads").remove();
            $(".rsresult-card").remove();
            $("#adCard").remove();
        }, refreshTime);
    }

    // 伪百度学术重定向
    if (location.href.indexOf('xueshu.baidu.com/s') > 0 && location.href.indexOf('xueshu.baidu.com/s?') <= 0) {
        window.location.replace("https://xueshu.baidu.com");
    }
    if (location.href.indexOf('xueshu.baidu.com/s?') > 0 && location.href.indexOf('tn=SE_baiduxueshu_c1gjeupa') <= 0) {
        window.location.replace("https://xueshu.baidu.com/s?tn=SE_baiduxueshu_c1gjeupa&" + window.location.search.substr(1));
    }

    // 百度视频去广告
    if (location.href.indexOf('video.baidu.com') > 0 || location.href.indexOf('v.baidu.com') > 0) {
        setInterval(function () {
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
    if (location.href.indexOf('video.baidu.com/v') > 0 || location.href.indexOf('v.baidu.com/v') > 0) {
        // 品牌广告
        $(".top-ad-cont").remove();
        setInterval(function () {
            // 横幅广告
            $("div[id*='searchMoreLong']").remove();
            $("#searchPagefeedBanner").remove();
            $(".side-content").remove();
            $("#psBottomColumn").parent().remove();
            // 条目中的广告
            $("#searchResultAdOne").remove();
            $("#searchHotShortSeven").remove();
            $("#searchHotShortSevenTwo").remove();
        }, refreshTime);
    }
    if (location.href.indexOf('www.baidu.com/sf/vsearch') > 0) {
        // 品牌广告
        $("#s_tab").next().next().each(function () {
            let id = String($(this).attr("id"));
            if (id === "undefined") {
                $(this).remove();
            }
        })
    }

    // 百度贴吧去广告
    if (location.href.indexOf('tieba.baidu.com/f/search') > 0) {
        $(".s_aside").remove();
    }
    if (location.href.indexOf('tieba.baidu.com/f?') > 0) {
        setInterval(function () {
            $("span:contains('广告')").parent().parent().parent().parent().parent().remove();
        }, refreshTime);
    }
    if (location.href.indexOf('tieba.baidu.com/p') > 0) {
        $("#j_p_postlist").find("div").each(function () {
            let isAd = String($(this).attr("ad-dom-img"));
            if (isAd === "true") {
                $(this).remove();
            }
        });
        $(".tb_poster_placeholder").remove(); // 回复会员广告
    }

    // 百度地图去广告
    if (location.href.indexOf('map.baidu.com/search') > 0) {
        // 品牌广告
        setInterval(function () {
            $(".damoce-search-item").remove();
        }, refreshTime);
    }

    // 百度经验去广告
    if (location.href.indexOf('jingyan.baidu.com/search') > 0) {
        $(".ec_ad").parent().remove();
    }
    if (location.href.indexOf('jingyan.baidu.com/article') > 0) {
        $("#fresh-share-exp-e").remove();
        $(".wgt-income-money").remove();
        $(".aside-pro-container").remove();
        $("#bottom-ads-container").remove();
        $(".magzine-list").remove();
        $("#wgt-left-promo").remove();
        // 侧边栏广告
        $(".right-fixed-related-wrap").remove();
        $("#task-panel-wrap").remove();
        $("#aside-ads-container").remove();
        // 底部广告
        $(".bottom-pic-ads").remove();
    }

    // 百度翻译去广告
    if (location.href.indexOf('fanyi.baidu.com') > 0) {
        $("#sideAdContainer").remove();
        $(".spread-wrap").remove();
    }

});
