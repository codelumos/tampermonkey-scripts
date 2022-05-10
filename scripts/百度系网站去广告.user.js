// ==UserScript==
// @name         百度系网站去广告
// @namespace    http://tampermonkey.net/
// @version      5.2
// @icon         https://www.baidu.com/favicon.ico
// @description  去除百度搜索结果和页面中的绝大多数广告，包括：百度搜索、百度百科、百度知道、百度文库、百度贴吧等
// @author       CodeLumos
// @homepageURL  https://github.com/codelumos/tampermonkey-scripts
// @match        *://*.baidu.com/*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

const dom = {};
dom.query = jQuery.noConflict(true);
dom.query(document).ready(function ($) {
    'use strict';

    const detection_cycle = 500;
    const cycle_callbacks = [];
    const {hostname, pathname} = location;

    function no_display(item) {
        const no_display_css = item + " {display: none;}";
        GM_addStyle(no_display_css);
    }

    function add_sidebar_switcher(item) {
        if (!document.querySelector(item) || document.querySelector("#sidebar_switcher")) {
            return;
        }
        $(item).before("<span id='sidebar_switcher' style='margin-top: 40px; margin-right:40px; float:right'></span>");
        $("#sidebar_switcher").append("<button id='sidebar-btn'>显示</button>");
        let show_sidebar = GM_getValue("show_sidebar", false);
        if (show_sidebar) {
            $("#sidebar-btn").html("隐藏");
        } else {
            $(item).css("display", "none");
        }
        document.querySelector("#sidebar-btn").addEventListener("click", function () {
            return change_sidebar_status(item);
        }, true);
    }

    function change_sidebar_status(item) {
        let show_sidebar = GM_getValue("show_sidebar", false);
        if (show_sidebar) {
            GM_setValue("show_sidebar", false);
            $(item).css("display", "none");
            $("#sidebar-btn").html("显示");
        } else {
            GM_setValue("show_sidebar", true);
            $(item).css("display", "");
            $("#sidebar-btn").html("隐藏");
        }
    }

    switch (hostname.split(".")[0]) {
        // 百度搜索
        case "www":
            add_sidebar_switcher("#content_right");
            // 百度视频搜索
            if (pathname.startsWith("/sf/vsearch")) {
                no_display(".ecom_pingzhuan"); // 品牌广告
                no_display("div[id*='_canvas']"); // 品牌广告
            } else {
                // 百度搜索
                no_display("[tpl='feed-ad']"); // 资讯条目广告

                no_display("#top-ad"); // 超级品牌
                no_display(".ec-pc_comp_banner_cc_float_video-fwc"); // 品牌视频广告
                no_display("[tpl='sp_hot_sale']"); // 全网热卖
                no_display("[tpl='short_video']"); // 视频大全
                no_display("[tpl='sp_rank']"); // 单品榜
                no_display("[tpl*='game-page']"); // 百度游戏
                no_display("[tpl*='b2b_prod']"); // 百度爱采购
                no_display(".pc-btn-des"); // 安全下载提示文字
                // 右侧栏广告
                $("#content_right > div").each(function () {
                    if ($(this).attr("id") === undefined) {
                        $(this).css("display", "none");
                    }
                });
                // 条目广告
                $("#content_left > div").each(function () {
                    if ($(this).attr("id") === undefined && $(this).attr("class") === undefined) {
                        $(this).css("display", "none");
                    }
                });
                // 将官网移动为第一条搜索结果
                $("span").each(function () {
                    if ($(this).hasClass("c-text-blue")) {
                        $("#content_left").prepend($(this).parents(".result"));
                    }
                });

                // 百度资讯搜索
                no_display(".ecom_pingzhuan"); // 品牌广告

                cycle_callbacks.push(function () {
                    // 延迟出现条目广告
                    $("a").each(function () {
                        if ($(this)[0].innerHTML === "广告") {
                            $(this).parents(".result").remove();
                        }
                    });
                    // 去除“安全下载”按钮
                    $("span").each(function () {
                        if ($(this)[0].innerHTML === "安全下载") {
                            $(this).css("display", "none");
                        } else if ($(this)[0].innerHTML === " 普通下载 ") {
                            $(this).html("下载");
                            $(this).addClass("c-btn-primary");
                            $(this).css("margin-left", "0px");
                        }
                    });
                });
            }
            break;

        // 百度百科
        case "baike":
            no_display(".J-search-ad"); // 条目广告

            $("#side_box_unionAd").remove(); // 品牌广告
            no_display(".bottom-recommend-wrapper"); // 猜你喜欢
            break;

        // 百度知道搜索
        case "zhidao":
            no_display("div[id*='_canvas']"); // 右侧栏广告
            no_display(".leftup"); // 品牌广告
            no_display(".bannerdown"); // 条目广告

            no_display("#qb-side"); // 右侧栏
            no_display(".task-list-button"); // 右侧任务
            $("#answer-bar").removeClass("exp-answerbtn-yh"); // 有奖图标
            $(".new-icon").remove(); // 商城new图标
            $(".phone-icon").remove(); // 手机答题图标
            no_display(".question-number-text-chain"); // 话题广告
            no_display("#knowledge-answer"); // 回答广告
            no_display(".wgt-ads"); // 回答广告
            no_display(".businessvip-wrapper"); // 官方服务
            no_display("#qbleftdown-container"); // 可能关注的内容
            no_display(".wgt-bottom-union"); // 为你推荐
            cycle_callbacks.push(function () {
                // 回答自动展开
                $("div[id*='target-content']").removeAttr("style");
                $(".wgt-target-mask").css("display", "none");
                $("div[id*='best-content']").removeAttr("style");
                $(".wgt-best-mask").css("display", "none");
                $("div[id*='answer-content']").removeAttr("style");
                $(".wgt-answers-mask").css("display", "none");
            });
            break;

        // 百度文库搜索
        case "wenku":
            add_sidebar_switcher(".base-layout-content-wrap");
            no_display(".adlist-wrap"); // 右侧栏广告
            no_display(".fc-product-result-wrap"); // 品牌广告
            no_display(".fc-first-result-wrap"); // 条目广告
            no_display(".vip-guide-test"); // 末尾VIP广告

            no_display(".vip-activity-wrap-new"); // 顶栏VIP广告
            no_display(".vip-privilege-card-wrap"); // 右侧栏VIP广告
            no_display(".vip-pay-pop-v2-wrap"); // 末尾VIP广告
            no_display(".inner-vip"); // 下载按钮VIP广告
            no_display(".vip-layer-inner"); // 下载按钮VIP广告
            no_display(".fold-page-tip"); // 下载按钮VIP广告
            no_display(".hx-right-wrapper"); // 相关资源广告
            no_display(".vip-member-pop-content"); // 底部遮罩VIP广告
            cycle_callbacks.push(function () {
                $(".user-vip").remove(); // 顶栏VIP广告
                $(".xpage-special-card-wrap").remove(); // 条目广告

                $(".hx-warp").remove(); // 页面间广告
                $(".hx-recom-wrapper").remove(); // 末尾广告
                $(".content-wrap").remove(); // 末尾广告
                $(".hx-bottom-wrapper").remove(); // 你可能关注的内容
            });
            break;

        // 百度图片搜索
        case "image":
            no_display("#pnlBeforeContent"); // 品牌广告
            no_display(".newfcImgli"); // 条目广告
            break;

        // 百度贴吧
        case "tieba":
            no_display("div[id*='aside_ad']"); // 右侧栏广告
            no_display("div[id*='aside-ad']"); // 右侧栏广告
            no_display("div[id*='mediago-tb']"); // 条目广告
            no_display(".fengchao-wrap-feed"); // 条目广告
            cycle_callbacks.push(function () {
                $(".tb_poster_placeholder").remove(); // 文本框超级会员广告
            });
            break;

        // 百度地图
        case "map":
            cycle_callbacks.push(function () {
                $(".damoce-search-item-nopoi").remove(); // 条目广告
                $(".leadDownloadCard").remove(); // 百度地图APP广告
                $("#activity-banner-panel").remove(); // 百度地图APP广告
            });
            break;

        // 百度经验
        case "jingyan":
            no_display(".ec_ad"); // 条目广告

            no_display(".right-fixed-related-wrap"); // 右侧栏广告
            no_display("#bottom-ads-container"); // 底部广告
            no_display("#bottom-pic-ads-wrap"); // 底部广告
            break;

        // 百度翻译
        case "fanyi":
            no_display(".vip-btn"); // 顶栏VIP广告
            no_display("#transOtherRight"); // 右侧广告
            no_display("#app-read"); // 百度翻译APP广告
            break;

        // 百度网盘
        case "pan":
            $("[node-type=header-union]").remove(); // 顶栏广告
            no_display(".phone-banner"); // 资源链接底部广告
            no_display("#web-single-bottom"); // 资源下载底部广告
            no_display("#web-multi-bottom"); // 资源下载底部广告
            no_display("#web-right-view"); // 资源下载右侧广告
            break;

        // 一刻相册
        case "photo":
            no_display(".yk-header__link"); // 顶栏广告
            $(".yk-side__footer").remove(); // 左侧栏广告
            break;

        // 百度游戏
        case "wan":
            no_display(".game-home-accover-box"); // 全屏遮罩广告
            no_display(".extra"); // 侧边广告
            break;

        // 百度爱采购
        case "b2b":
            no_display(".gg-content"); // 右侧广告
            break;

        // 百度宝宝知道
        case "baobao":
            no_display(".bottom_back"); // 底部遮罩广告
            no_display(".wgt-ads"); // 右侧栏广告
            no_display(".gold-plan"); // 顶栏广告

            no_display(".circle-right-word"); // 社区右侧栏广告
            break;

        // 好看视频
        case "haokan":
            no_display(".landrightbanner"); // 右侧栏广告
            no_display(".land-recommend-ad"); // 播放列表广告
            no_display(".player-pause-code"); // 暂停广告
            break;

        // 百度视频
        case "v":
        case "vedio":
            no_display("#sidebarADRightWrap"); // 两侧悬浮广告
            $("#qzfcadid").remove(); // 两侧悬浮广告
            no_display("[id*='adframe_wrap']"); // 横幅广告
            no_display(".section-ad"); // 横幅广告
            no_display("[id*='FeedAdSys']"); // 热门推荐广告

            no_display("#pallcommoncolumnad"); // 顶栏广告
            no_display("#playerRightInnerList"); // 相关视频广告
            cycle_callbacks.push(function () {
                // 条目广告
                $("div[id*='pc']").remove();
                $("div[id*='PC']").remove();
            });
            break;
    }

    if (!cycle_callbacks.length) {
        return;
    }

    cycle_callbacks.forEach(f => f());
    setInterval(() => cycle_callbacks.forEach(f => f()), detection_cycle);
});