// ==UserScript==
// @name         网址导航去广告
// @namespace    http://tampermonkey.net/
// @version      2.0.2
// @icon         http://www.hao123.com/favicon.ico
// @description  去除网址导航页面中的绝大多数广告，包括：hao123、2345网址导航、360导航、搜狗网址导航、QQ导航、UC导航、毒霸网址大全等
// @author       CodeLumos
// @homepageURL  https://github.com/codelumos/tampermonkey-scripts
// @match        *://www.hao123.com/*
// @match        *://www.2345.com/*
// @match        *://hao.360.com/*
// @match        *://123.sogou.com/*
// @match        *://hao.qq.com/*
// @match        *://daohang.qq.com/*
// @match        *://www.uc123.com/*
// @match        *://www.duba.com/*
// @match        *://www.newduba.cn/*
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

jQuery.noConflict();
(function ($) {
    'use strict';

    const cycle = 500; // 广告检测周期

    // hao123
    if (location.href.indexOf('hao123.com') > 0) {
        setInterval(function () {
            $("#topbeWrapper").remove(); // 顶栏广告
            $("#lefttip").remove(); // 左侧悬浮广告
            $(".rightTip").remove(); // 右下角广告
            $("#box-famous-resource").remove(); // 横幅广告
            $(".bottom-banner-link-wrapper").remove(); // 底部广告
            $(".wm").remove(); // 推荐栏广告
        }, cycle);
    }

    // 2345网址导航
    if (location.href.indexOf('2345.com') > 0) {
        setInterval(function () {
            $(".tip_stopXP").remove(); // 顶部浏览器推广广告
            $("#corner_a").remove(); // 右上角广告
            $("#mzBrowserWrap").remove(); // 左侧悬浮浏览器推广广告
            $("#J_s11_logowall_left").remove(); // 左侧背景广告
            $("#J_s11_logowall_right").remove(); // 右侧背景广告
            $("#J_gul_yg").remove(); // 中部文字广告
            $("h3:contains('发现你喜欢')").parent().parent().parent().remove(); // 发现你喜欢广告
            $("#map_shop").remove(); // 实惠购物广告
            $(".ad-wrap").remove(); // 内容条目广告
            $(".adTag").parents(".slide-item").remove(); // 右侧轮播广告
            $("#J_hot_event").remove(); // 右侧轮播广告
            $("#rightXieCheng").remove(); // 右侧悬浮广告
            $("#J_right_bottom_ad").remove(); // 右下角广告
        }, cycle);
    }

    // 360导航
    if (location.href.indexOf('hao.360') > 0) {
        setInterval(function () {
            $("#corner-flash").remove(); // 右上角广告
            $("li[notice-ad = 'true']").remove(); // 消息广告
            $(".notice-panel-count").text("(2)"); // 修改顶部消息数量
            $("#daily-hotwords").remove(); // 搜索框右侧搜索热词广告

            $("#hotsite-view-front").remove(); // 名站推荐广告

            $("#activity").remove(); // 左侧广告
            $(".pubble-shape-wrap").remove(); // 360游戏广告

            $("h3:contains('发现你喜欢')").parent().parent().remove(); // 发现你喜欢广告

            $("#large2small").remove(); // 右下角广告

            $(".js-mv-infoflow-item").remove(); // 右侧推荐条目广告
            $(".ad").parent().remove(); // 右侧图片条目广告
            $(".textlink_ad_icon").parent().remove(); //右侧文字条目广告
            $("a[class*='mediav-ads']").remove(); // 左侧热门视频等条目广告

            $(".adMark").parents(".cube-mod").remove(); // 魔方广告
            $(".ads-img").parents(".right-content").remove(); // 魔方内文字条目广告
        }, cycle);

    }

    // 搜狗网址导航、QQ导航（上网导航）
    if (location.href.indexOf('123.sogou.com') > 0 || location.href.indexOf('hao.qq.com') > 0 || location.href.indexOf('daohang.qq.com') > 0) {
        setInterval(function () {
            $("#sdtom").parent().remove(); // 悬浮广告
            $("div[id*='AD']").remove();
            $(".hd-slider").remove(); // 邮箱右侧广告
            $(".cs_right_hw").remove(); // 搜索栏右侧广告
            $(".ads").remove(); // 导航栏广告
            $(".banner-ad").remove(); // 导航栏广告
            $("ul[pbflag='top3ad'] li:eq(0)").remove(); // 邮箱上方广告
            $("div[pbflag='guess']").remove(); // 猜你喜欢广告
            $("div[pbflag='rec_shop']").remove(); // 左侧购物广告
            $(".adword").remove(); // 文字栏广告
            $("div[pbflag='bt_baike']").parent().remove(); // 生活百科广告
            $("div[pbflag='bt_mai']").parent().remove(); // 实惠购物广告
            $(".tmallskin").remove(); // 网站背景广告
            $("div[pbflag='coolsitefeed_ad']").remove(); // 焦点条目广告
            $("div[pbflag='bt_newsb_ad']").remove(); // 信息流条目广告
            $("#wrap").remove(); // 右下角广告
        }, cycle);
    }

    // UC导航
    if (location.href.indexOf('uc123.com') > 0) {
        setInterval(function () {
            $(".header-push-container").remove(); // 顶栏广告
            $(".s-push-box").remove(); // 搜索栏广告
            $(".m-links").remove(); // 文字栏广告
            $(".side-hot").remove(); // 左侧广告
            $(".cool").remove(); // 左侧空位
            $("#J_shopping").remove(); // 阿里妈妈推广
            $("#J_shopping").remove(); // 阿里妈妈推广
        }, cycle);
    }

    // 毒霸网址大全
    if (location.href.indexOf('duba.com') > 0 || location.href.indexOf('newduba.cn') > 0) {
        setInterval(function () {
            $("#top_ad_tmall_ul").parent().remove(); // 顶部广告
            $("#__lawnImageContainer").remove(); // 底部广告
            $(".skin_bg").remove(); // 背景广告
            $(".m_site_ad_wrap").remove(); // 左侧栏广告
            $(".adTag").parents(".swiper-slide").remove(); // 右侧滚动广告
            $(".m_elevator.elevator_hidden").remove(); // 右侧悬浮广告
            $(".m_rec_game").remove(); // 右侧游戏广告
            // 资讯版
            $("#js-ysjpp").remove(); // 右上角广告
            $("#J_sideFooter").remove(); // 右下角广告
            $("div[opname='w_search_right_ad']").remove(); // 搜索栏右侧广告
            $(".rtcenter_game.jq_rtcenter_game").remove(); // 文字栏广告
            $(".fav_box_wrap").remove(); // 猜你喜欢广告
            $(".side_game").remove(); // 左侧游戏广告
            $(".side_taobao").remove(); // 左侧购物广告
            $(".left_ad_collection").remove(); // 左侧热点排行广告
            $(".jqrp_infoflow_ad").remove(); // 信息流条目广告
            // 标准版
            $(".top_func_ad").remove(); // 右上角广告
            $(".fav_box").remove(); // 猜你喜欢广告
            $(".taobao_search").remove(); // 购物广告
            $(".sort_wm").remove(); // 猜你感兴趣广告
            $(".sort_line").remove();
            $(".box_shopping").remove(); // 热门购物广告
            $(".box_happy").remove(); // 休闲娱乐广告
            $(".tj_ul").remove(); // 邮箱上方广告
            $(".ads-tag").parent().parent().parent().remove(); // 热点新闻广告
            $(".newslist > div").remove(); // 信息流条目广告
            // 精简版
            $(".mediavAd").remove(); // 信息流条目广告
        }, cycle);
    }

})(jQuery);