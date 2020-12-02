// ==UserScript==
// @name         网址导航去广告
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      1.8.1
// @icon         http://www.hao123.com/favicon.ico
// @description  hao123、2345网址导航、360导航、搜狗网址导航、QQ导航、UC导航、毒霸网址大全去广告
// @author       HaoNShi
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
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

jQuery.noConflict();
(function ($) {
    'use strict';

    const loadTime = 1000;		// 延迟加载广告的加载时间
    const slowLoadTime = 2500;	// 高延迟加载广告的加载时间
    const refreshTime = 1000;		// 反复加载广告的检测刷新时间

    // hao123去广告
    if (location.href.indexOf('hao123.com') > 0) {
        $("#topbeWrapper").remove(); // 顶栏广告
        $(".header__item.header__item--joke").remove(); // 邮箱上方广告
        $("#bottom-be").remove(); // 左下角广告
        $(".rightTip").remove(); // 右下角广告
        setTimeout(function () {
            $(".bottom-banner-link-wrapper").remove(); // 底部广告
        }, loadTime);
        setInterval(function () {
            $(".wm").remove(); // 推荐栏广告
        }, refreshTime);
    }

    // 2345网址导航去广告
    if (location.href.indexOf('2345.com') > 0) {
        $(".tip_stopXP").remove(); // 顶栏广告
        $(".top_left").remove(); // 顶栏广告
        $("#headerHb").remove(); // 下拉红包广告
        $(".mes-area").remove(); // 消息轮播广告
        $("#actNavspec").remove(); // 导航栏广告
        $(".event1").remove(); // 右侧广告
        $("#J_broadcast").remove(); // 邮箱上方广告
        $(".mzdh_bottom").remove(); // 中间栏广告
        $("h3:contains('发现你喜欢')").parent().parent().parent().remove(); // 发现你喜欢广告
        setTimeout(function () {
            $("#topHf").remove(); // 顶栏广告
        }, loadTime);
        setInterval(function () {
            $(".item-feed").remove(); // 实时热点广告
            $("div[id*='bd-lvy']").remove(); // 栏目右上角广告
            $(".item-wm-lvy").remove(); // 今日头条、热点排行广告
        }, refreshTime);
    }

    // 重定向新版360导航
    if (location.href.indexOf('hao.360') > 0 && location.href.indexOf('2020') <= 0) {
        window.location.replace("https://hao.360.com/2020.html");
    }
    // 360导航去广告
    if (location.href.indexOf('hao.360') > 0) {
        setTimeout(function () {
            $("#corner-flash").remove(); // 右上角广告
            $("li[notice-ad = 'true']").remove(); // 消息广告
            $(".notice-panel-count").text("(2)"); // 修改顶部消息数量
            $("#daily-hotwords").remove(); // 搜索框右侧搜索热词广告

            $("#hotsite-view-front").remove(); // 名站推荐广告

            $("#activity").remove(); // 左侧广告
            $(".pubble-shape-wrap").remove(); // 360游戏广告

            $("h3:contains('发现你喜欢')").parent().parent().remove(); // 发现你喜欢广告

            $("#large2small").remove(); // 右下角广告

        }, loadTime);
        setInterval(function () {
            $(".js-mv-infoflow-item").remove(); // 右侧推荐条目广告
            $(".ad").parent().remove(); // 右侧图片条目广告
            $(".textlink_ad_icon").parent().remove(); //右侧文字条目广告
            $("a[class*='mediav-ads']").remove(); // 左侧热门视频等条目广告
        }, refreshTime);

    }

    // 搜狗网址导航、QQ导航（上网导航）去广告
    if (location.href.indexOf('123.sogou.com') > 0 || location.href.indexOf('hao.qq.com') > 0 || location.href.indexOf('daohang.qq.com') > 0) {
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
        $("div[pbflag='elevator']").find('li:eq(1)').remove(); // 右侧对应生活百科导航
        $("div[pbflag='elevator']").find('li:eq(1)').remove(); // 右侧对应实惠购物导航
        setInterval(function () {
            $(".tmallskin").remove(); // 网站背景广告
            $("div[pbflag='coolsitefeed_ad']").remove(); // 焦点条目广告
            $("div[pbflag='bt_newsb_ad']").remove(); // 信息流条目广告
        }, refreshTime);
    }

    // UC导航去广告
    if (location.href.indexOf('uc123.com') > 0) {
        $(".header-push-container").remove(); // 顶栏广告
        $(".s-push-box").remove(); // 搜索栏广告
        $(".m-links").remove(); // 文字栏广告
        $(".side-hot").remove(); // 左侧广告
        $(".cool").remove(); // 左侧空位
        $("#J_shopping").remove(); // 阿里妈妈推广
        setTimeout(function () {
            $("#J_shopping").remove(); // 阿里妈妈推广
        }, slowLoadTime);
    }

    // 毒霸网址大全去广告
    if (location.href.indexOf('duba.com') > 0 || location.href.indexOf('newduba.cn') > 0) {
        $(".skin_bg").remove(); // 背景广告
        // 资讯版
        $("#js-ysjpp").remove(); // 右上角广告
        $("#J_sideFooter").remove(); // 右下角广告
        $("div[opname='w_search_right_ad']").remove(); // 搜索栏右侧广告
        $(".rtcenter_game.jq_rtcenter_game").remove(); // 文字栏广告
        $(".fav_box_wrap").remove(); // 猜你喜欢广告
        $(".side_game").remove(); // 左侧游戏广告
        $(".side_taobao").remove(); // 左侧购物广告
        $(".left_ad_collection").remove(); // 左侧热点排行广告
        // 标准版
        $(".top_func_ad").remove(); // 右上角广告
        $(".fav_box").remove(); // 猜你喜欢广告
        $(".taobao_search").remove(); // 购物广告
        $(".sort_wm").remove(); // 猜你感兴趣广告
        $(".sort_line").remove();
        $(".box_shopping").remove(); // 热门购物广告
        $(".box_happy").remove(); // 休闲娱乐广告
        // 精简版
        $("div[class*='baidu_ad']").remove();
        setInterval(function () {
            // 资讯版
            $(".jqrp_infoflow_ad").remove(); // 信息流条目广告
            // 标准版
            $(".tj_ul").remove(); // 邮箱上方广告
            $(".ads-tag").parent().parent().parent().remove(); // 热点新闻广告
            $(".newslist > div").remove(); // 信息流条目广告
            // 精简版
            $(".mediavAd").remove(); // 信息流条目广告
        }, refreshTime);
    }

})(jQuery);
