// ==UserScript==
// @name         360搜索去广告
// @namespace    http://tampermonkey.net/
// @version      2.1
// @icon         https://www.so.com/favicon.ico
// @description  去除360搜索结果和页面中的绝大多数广告，包括：360搜索、360资讯、360问答、360导航等
// @author       CodeLumos
// @homepageURL  https://github.com/codelumos/tampermonkey-scripts
// @match        *://*.so.com/*
// @match        *://*.360kan.com/*
// @match        *://*.360kuai.com/*
// @match        *://*.66health.net/*
// @match        *://hao.360.com/*
// @match        *://*.hao.360.cn/*
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

const dom = {};
dom.query = jQuery.noConflict(true);
dom.query(document).ready(function ($) {
    'use strict';

    const GM_ADD_STYLE_HASH = `GM_addStyle_${parseInt(Math.random() * Date.now())}`; // 随机字符串
    const detection_cycle = 500; // 检测周期
    const cycle_callbacks = [];
    const {hostname, pathname} = location;

    function GM_addStyle(css, dom = document.head, id = GM_ADD_STYLE_HASH) {
        const style = document.getElementById(id) || (() => {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.id = id;
            dom.appendChild(style);
            return style;
        })();
        const sheet = style.sheet;
        css.split('\n\n').forEach(n => sheet.insertRule(n, (sheet.rules || sheet.cssRules || []).length));
    }

    function no_display(item) {
        const no_display_css = item + ` {display: none;}`;
        GM_addStyle(no_display_css);
    }

    switch (hostname.split(".")[0]) {
        case "www":
            switch (hostname.split(".")[1]) {
                // 360搜索
                case "so":
                    no_display("#so_bd-ad"); // 右侧栏广告
                    no_display(".res-mediav-right"); // 右侧栏广告
                    no_display("#lm-rightbottom"); // 猜你想搜
                    no_display(".e-buss"); // 条目广告
                    no_display("div[id*='--normal']"); // 文字广告
                    no_display("[class*='business']"); // mohe条目广告
                    no_display("#mohe-webgame"); // 360爱玩广告
                    no_display(".mh-sdk-sad"); // 相关消息广告
                    cycle_callbacks.push(function () {
                        $(".sad").remove(); // 热点条目广告
                        $(".lawnfooter-image__panel").remove(); // 底部遮罩广告

                        $("[class*='res-mediav']").remove(); // 条目广告
                    });
                    break;

                // 快资讯
                case "360kuai":
                    no_display("[data-ggclick='ad']"); // 条目广告
                    no_display("#as_shop_gg"); // 右侧栏广告
                    no_display(".flowcardtype--onepicbig"); // 条目广告

                    no_display(".footer-wrapper"); // 右下角广告
                    no_display(".g4"); // 横幅广告
                    no_display(".detail--v3"); // 右侧推荐广告
                    no_display(".recommend-article__wrapper"); // 推荐文章
                    no_display(".article__content__textgg"); // 文章中文字广告

                    no_display(".video__gg"); // 右侧推荐广告
                    no_display(".videogg--card"); // 大块广告
                    cycle_callbacks.push(function () {
                        $(".detail--v3").remove(); // 右侧推荐广告
                        $(".cc-pause-gg").remove(); // 视频暂停广告
                    });
                    break;

                // 360影视
                case "360kan":
                    no_display(".rt-btm-popup_ad"); // 右下角广告
                    no_display(".info-flow__ad"); // 横幅广告
                    no_display("#detail-ad"); // 右侧栏广告
                    break;
            }
            break;

        // 360资讯
        case "news":
            no_display("[data-from='ad']"); // 条目广告
            no_display("[data-from='mediav']"); // 条目广告
            no_display(".info-stream"); // 智能推荐

            cycle_callbacks.push(function () {
                $("#sd-lm").remove(); // 右侧栏猜你想搜
            });
            break;

        // 360问答
        case "wenda":
            no_display("#js-mod-fixed-float"); // 右下角广告
            no_display("#e_idea_wenda_leftBox"); // 条目广告
            no_display(".js-busi-item"); // 条目广告
            no_display("#mediaV"); // 右侧栏广告
            no_display(".js-right-busi"); // 右侧栏广告

            no_display(".js-left-flow-busi"); // 左侧栏广告
            no_display(".js-answer-adv-part"); // 伪回答广告
            no_display("#attention"); // 猜你关注
            no_display("#detail-guess-wrap"); // 您可能感兴趣的内容
            $(".js-mod-flow").remove(); // 今日热点
            break;

        // 360视频（360kan）
        case "tv":
        case "video":
            no_display("[data-so-mod='list-ad']"); // 条目广告
            no_display(".p-searchad-wrap"); // 文字广告
            break;

        // 360图片
        case "image":
            no_display(".starlist"); // 横幅广告
            cycle_callbacks.push(function () {
                $("[data-id*='cm_extended_init']").remove(); // 条目广告
                $("[data-id*='cm_display_init']").remove(); // 条目广告
                $("[data-id*='JumpAds']").remove(); // 条目广告
            });
            break;

        // 360良医
        case "ly":
            $("#news-card").remove(); // 热门资讯推荐
            $(".so-biz-ad-title").remove(); // 猜你想搜
            $("#lm-rightbottom").remove(); // 猜你想搜
            break;

        // 360地图
        case "ditu":
            no_display("[data-list-business-item='true']"); // 条目广告
            no_display("[class*='index-bottomBsCon']"); // 条目广告
            no_display("[class*='Ad']"); // 疫情广告
            break;

        // 360百科
        case "baike":
            no_display(".mod-side-busi"); // 右侧栏广告

            $("[id*='J-mod-right-ad']").remove(); // 右侧栏广告
            $("#J-mod-right-recommend").remove(); // 为您推荐
            no_display("#rightbanner"); // 右侧栏广告
            no_display(".entry-belong"); // 搜索发现
            no_display(".entry-plus"); // 热点资讯
            // 自动展开
            $(".entry-detail-fold-part").removeAttr("style");
            no_display(".entry-detail-fold-switch");
            break;

        // 360国学
        case "guoxue":
            $(".rtInterest").remove(); // 猜你感兴趣
            $(".rtAttention").remove(); // 猜你关注
            no_display(".js-fixed-rt"); // 右侧栏广告
            $("#interest-wrap").remove(); // 您可能感兴趣的内容
            no_display(".lm-bottom-container"); // 底部广告
            // 自动展开
            $("#content-area").removeClass("folded");
            break;

        // 360文库
        case "wenku":
            no_display("#e_idea_wenda_leftBox"); // 条目广告
            no_display("#js-fixed-rt"); // 右侧栏广告

            no_display(".fixed-rtbot"); // 右下角广告
            no_display(".page-busi"); // 页面间广告
            $("#interest").remove(); // 您可能感兴趣的内容
            $(".side-mod").remove(); // 今日热点
            $(".infoFlow").remove(); // 今日热点
            break;

        // 360翻译
        case "fanyi":
            no_display("#card_container"); // 热点推荐
            break;
    }

    // 放心健康
    if (location.href.indexOf('66health.net') > 0) {
        no_display(".hot-recom"); // 右侧栏广告
        no_display("._sab5d05j0v"); // 右侧栏广告
        $("._qjos0wqy38").remove(); // 搜索推荐广告
    }

    // 360导航
    if (location.href.indexOf('hao.360.com') > 0) {
        $("#daily-hotwords").remove(); // 顶栏广告
        $(".plane-priming").remove(); // 右侧栏广告
        no_display("#large2small"); // 右下角广告
        $(".qihoobannerslider").remove(); // 横幅广告
        cycle_callbacks.push(function () {
            $("._CUBE_A_D_CLK_").remove(); // cube广告
            // 删除cube广告占位
            $(".ad-text").parents(".bottom-line-wrap").remove(); // cube文字广告
            $("img[src='https://hao1.qhimg.com/dmfd/50_20_/t0196473cd73c354bfb.png']").parents(".item").remove(); // cube文字广告
            $(".ad-flag").parents(".cube-mod").remove(); // cube广告
            $("img[src='https://hao3.qhimg.com/t0135fb514cb52505c4.png']").parents(".cube-mod").remove(); // cube广告
            $("#cube-mod-haocube-QVd9iAfg4N0").remove(); // 旋转视界
            $(".feed-atlas").remove(); // 热点广告
            $(".feed-mv").remove(); // 热点广告
        });
    }
    if (location.href.indexOf('hao.360.cn') > 0) {
        no_display(".ads-goods"); // 右侧栏广告
        no_display(".feed-ads"); // 右侧栏广告
        no_display(".js-sticky"); // 右侧栏广告
    }

    if (!cycle_callbacks.length) {
        return;
    }

    cycle_callbacks.forEach(f => f());
    setInterval(() => cycle_callbacks.forEach(f => f()), detection_cycle);
});