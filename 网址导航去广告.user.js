// ==UserScript==
// @name         网址导航去广告
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      1.2
// @icon         http://www.hao123.com/favicon.ico
// @description  hao123、360导航去广告
// @author       HaoNShi
// @match        *://hao.360.com/*
// @match        *://www.hao123.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var refreshTime = 1000; // 检测广告的刷新时间

    // hao123去广告
    if(location.href.indexOf('hao123.com') > 0){
        $("#topbeWrapper").remove(); // 顶栏广告
        $(".header__item.header__item--joke").remove(); // 邮箱上方广告
        $("#bottom-be").remove(); // 左下角广告
        $(".rightTip").remove(); // 右下角广告
        setInterval(function(){
            $(".wm").remove(); // 推荐栏广告
        }, refreshTime);
    }

    // 360导航去广告
    if(location.href.indexOf('hao.360.com') > 0){
        setInterval(function(){
            $("#top-full-column-tips").remove(); // 顶部广告
            $("#doc").css("top", "0"); // 去除顶部广告后上移body
            $("li[notice-ad = 'true']").remove(); // 消息广告
            $("#daily-hotwords").remove(); // 搜索热词广告

            $("#activity").remove(); // 左侧广告
            $(".ad").parent().remove(); // 左侧热点图片
            $(".textlink_ad_icon").parent().remove(); // 热点广告条目
            $(".ad-textlink").parent().remove(); // 猜你爱看广告条目

            $("#channel-game").remove(); // 左侧游戏广告栏
            $("#channel-mall").remove(); // 左侧购物广告栏
            $("#channel-car").remove(); // 左侧汽车广告栏

            $(".front-view-lb").remove(); // 网址栏广告
            $("#bottom_hotsite").remove(); // 类导航栏广告
            $(".ad-top").remove(); // 删除发现你喜欢
            $(".ad.infoflow-guess-mv-ad").parent().parent().parent().remove(); // 快资讯广告
            $(".infoflow-item.mv").remove(); // 娱乐头条广告
            $(".mv").remove(); // 游戏攻略广告
            $(".clearfix.feed-mv.js-mv-infoflow-item").remove(); // 娱乐沸点广告
            $(".feed-item.feed-mv.js-mv-infoflow-item").remove(); // 推荐广告

            $("#service-gouwu").remove(); // 购物广告
            $("#service-youxi").remove(); // 游戏广告
            $("#service-licai").remove(); // 金融广告

            $(".plane-hd.plane-adsvc").remove(); // 右侧导航栏广告
            $("#festival_float_bottom").remove(); // 底部横幅广告
            $("#popup_news").remove(); // 下方悬浮广告
            $(".festival_float_bottom-leftBottom").remove();// 左下角广告
            $("#large2small").remove(); // 右下角广告

        }, refreshTime);

        $(".notice-panel-count").text("(2)"); // 修改顶部消息数量
        $(".plane-bd").find('li:eq(2)').remove(); // 右侧对应购物导航
        $(".plane-bd").find('li:eq(2)').remove(); // 右侧对应游戏导航
        $(".plane-bd").find('li:eq(3)').remove(); // 右侧对应理财导航
    }

})();
