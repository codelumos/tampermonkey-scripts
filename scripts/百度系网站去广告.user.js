// ==UserScript==
// @name         百度系网站去广告
// @namespace    http://tampermonkey.net/
// @version      4.6
// @icon         https://www.baidu.com/favicon.ico
// @description  去除百度搜索结果和页面中的绝大多数广告，包括：百度搜索、百度知道、百度百科、百度文库、百度图片、百度视频、百度贴吧、百度地图、百度经验、百度翻译、百度网盘等
// @author       CodeLumos
// @homepageURL  https://github.com/codelumos/tampermonkey-scripts
// @match        *://*.baidu.com/*
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

const dom = {};
dom.query = jQuery.noConflict(true);
dom.query(document).ready(function ($) {
    "use strict";

    const cycleCallbacks = [];
    const { hostname, pathname } = location;

    switch (hostname.split(".")[0]) {
        // 百度搜索
        case "www":
            // 左侧栏
            $("#content_left > div").each(function () {
                if ($(this).text().includes("已为您找到")) {
                    $(this).remove();
                }
            });

            // 右侧栏
            $("#content_right").remove();

            // 品牌广告
            $("#top-ad").remove();
            $(".ec-pl-container").remove();
            $("#content_left > div").each(function () {
                if (
                    $(this).attr("id") === undefined &&
                    $("> style", this).attr("id") !== undefined
                ) {
                    $(this).remove();
                }
            });

            // 防止导航栏出现白色
            if ($(".s-tab-item").css("color") === "rgb(255, 255, 255)") {
                $(".cur-tab").css("color", "black");
                $(".s-tab-item").css("color", "gray");
            }

            // 视频搜索
            if (pathname.startsWith("/sf/vsearch")) {
                // 品牌广告
                $("#s_tab")
                    .next()
                    .next()
                    .each(function () {
                        const id = String($(this).attr("id"));

                        if (id === "undefined") {
                            $(this).remove();
                        }
                    });
            }

            cycleCallbacks.push(function () {
                // 左侧栏
                $("#content_left > div").each(function () {
                    if ($(this).text().includes("已为您找到")) {
                        $(this).remove();
                    }
                });

                // 右侧栏
                $("#content_right").remove();

                // 搜索结果条目广告
                $("#content_left > div").each(function () {
                    if (
                        $(this).attr("id") === undefined &&
                        $("> div", this).attr("data-placeid") !== undefined
                    ) {
                        $(this).remove();
                    }
                });

                // 搜索结果延迟条目广告
                $("a").each(function () {
                    if ($(this)[0].innerHTML === "广告") {
                        $(this).parents(".result").remove();
                    }
                });

                // 推荐信息流广告屏蔽
                $(".san-card").each(function () {
                    if ($(this).attr("tpl") === "feed-ad") {
                        $(this).remove();
                    }
                });
            });
            break;

        // 百度知道
        case "zhidao":
            cycleCallbacks.push(function () {
                $(".shop-entrance").remove();
                $(".activity-entry").remove();
                $(".task-list-button").remove();
            });

            if (pathname.startsWith("/search")) {
                // 品牌广告
                $(".leftup").remove();
                $(".wgt-iknow-special-business").remove();

                // 右侧栏
                $(".aside.fixheight").remove();

                cycleCallbacks.push(function () {
                    $(".bannerdown").remove(); // 结果条目广告
                    $(".wgt-bottom-ask").remove();
                });
            }

            if (pathname.startsWith("/question")) {
                cycleCallbacks.push(function () {
                    $(".adTopImg").remove();
                    $(".exp-topwld-tip").remove();
                    $("#wgt-ecom-banner").remove();
                    $("#wgt-ecom-right").remove();
                    $(".question-number-text-chain").remove();
                    $(".grid-r.qb-side").remove();
                    $(".wgt-ads").remove();
                    $(".wgt-bottom-union").remove();
                    $(".ec-pc_mat_coeus__related_link_text-content").remove();
                    $(".businessvip-wrapper").remove();

                    // 按钮图标
                    $("#answer-bar").removeClass("exp-answerbtn-yh");
                    $(".new-icon").remove();
                    $(".phone-icon").remove();
                });
            }
            break;

        // 百度百科
        case "baike":
            cycleCallbacks.push(function () {
                $("#navbarAdNew").remove();
                $(".userbar_mall").remove();
            });

            if (pathname.startsWith("/item")) {
                cycleCallbacks.push(function () {
                    // 品牌广告
                    $(".pinzhuanWrap").remove();
                    $(".configModuleBanner").remove();
                    $(".topA").remove();
                    $(".right-ad").remove();
                    $(".lemmaWgt-promotion-vbaike").remove();
                    $(".lemmaWgt-promotion-slide").remove();
                    $("#side_box_unionAd").remove();
                    $(".after-content").remove(); // 搜索发现
                });
            }
            break;

        // 百度文库
        case "wenku":
            cycleCallbacks.push(function () {
                $(".tiger-lossUser-dialog-vip").remove();
                $(".banner-ad").remove();
                $(".ad-box").remove();
                $("#banurl").remove();
                $("#my-wkHome-vip-tips").parent().remove();
                $(".vip-card").remove();
                $(".zsj-topbar").remove();
                $(".lastcell-dialog").remove();
                $(".zsj-toppos").remove();
            });

            if (pathname.startsWith("/search")) {
                cycleCallbacks.push(function () {
                    $(".fc-product-result-wrap").remove(); // 品牌广告
                    $(".fc-first-result-wrap").remove(); // 搜索条目广告
                    $(".bottom-right-dsp-ad-wrap").remove(); // 右下角VIP推广
                });

                $(".user-vip").remove(); // 顶栏VIP推广
                $(".base-layout-content-right").remove(); // 右侧栏
                $(".vip-guide-test").remove(); // 结果条目VIP推广
            }

            if (pathname.startsWith("/view")) {
                cycleCallbacks.push(function () {
                    // 全页面广告
                    $(".pager-container").remove();
                    $(".add-has-money-pay").remove();
                    $(".experience-card-wrap").remove();

                    // VIP推广
                    $(".experience-card-bar-wrap").remove();
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
                    $(".pc-common-sidebar").remove(); // 右下角广告
                    $(".vip-privilege-card-wrap").remove();
                    $(".woniu-guide-card").remove(); // 蜗牛广告

                    // 底部广告
                    $(".hx-recom-wrapper").remove();
                    $(".hx-bottom-wrapper").remove();
                    $("#relative-videos-wrap").remove();
                    $("#ggbtm").parent().remove();
                    $("#ggbtm-ads").parent().remove();
                    $(".union-ad-bottom").parent().remove();
                    $(".bottom-pop-wrap").remove();
                    $(".inner-vip").remove();
                });
            }
            break;

        // 百度图片
        case "image":
            if (pathname.startsWith("/search/index")) {
                // 品牌广告
                $("#pnlBeforeContent").remove();
                $(".adMask").remove();

                cycleCallbacks.push(function () {
                    $(".newfcImgli").remove();
                });
            }

            if (pathname.startsWith("/search/detail")) {
                cycleCallbacks.push(function () {
                    $(".text-link-ads").remove();
                    $(".rsresult-card").remove();
                    $("#adCard").remove();
                });
            }
            break;

        // 百度视频
        case "v":
        case "video":
            cycleCallbacks.push(function () {
                $("#pallcommoncolumnad").remove(); // 顶栏广告
                $("#index_right_top").remove(); // 搜索栏右侧广告
                $("#qzfcadid").remove(); // 侧边栏广告
                $("#PCallpagesidebar1").remove(); // 侧边栏广告
                $("#PCallpagesidebar2").remove(); // 侧边栏广告
                $("#sidebarADRightWrap").remove(); // 侧边栏广告
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
                $(".adv-container").remove();
                $(".full-collunm-ad").remove();
                $("div[id*='channelBannerAdver']").remove();
                $("div[id*='channelColumn']").parent().remove();
                $("div[id*='ChannelColumn']").parent().remove();

                // 结果条目广告
                $("div[id*='pc']").remove();
                $("div[id*='PC']").remove();
                $("div[id*='adv-carousel-item']").parent().remove(); // 热点聚焦广告
                $("[id*='FeedAdSys']").remove(); // 热门推荐广告
                $("div[id*='TabAd']").remove();

                // 底栏广告
                $("#topic-wrap-v2").remove();
            });

            if (pathname.startsWith("/v")) {
                // 品牌广告
                $(".top-ad-cont").remove();

                cycleCallbacks.push(function () {
                    // 横幅广告
                    $("div[id*='searchMoreLong']").remove();
                    $("#searchPagefeedBanner").remove();
                    $(".side-content").remove();
                    $("#psBottomColumn").parent().remove();

                    // 条目中的广告
                    $("#searchResultAdOne").remove();
                    $("#searchHotShortSeven").remove();
                    $("#searchHotShortSevenTwo").remove();
                });
            }
            break;

        // 百度贴吧
        case "tieba":
            if (pathname.startsWith("/f/search")) {
                $(".s_aside").remove();
            }

            if (pathname.startsWith("/f")) {
                cycleCallbacks.push(function () {
                    $(".fengchao-wrap-feed").remove();
                    $(".tb_poster_placeholder").remove(); // 回复会员广告

                    // 右侧广告
                    $("div[id$='_ad']").remove();
                    $("#lu-frs-aside").remove();
                    $("#lu-frs-aside-seat").remove();
                });
            }

            if (pathname.startsWith("/p")) {
                $("#j_p_postlist")
                    .find("div")
                    .each(function () {
                        const isAd = String($(this).attr("ad-dom-img"));

                        if (isAd === "true") {
                            $(this).remove();
                        }
                    });

                cycleCallbacks.push(function () {
                    $(".tb_poster_placeholder").remove(); // 回复会员广告
                });
            }
            break;

        // 百度地图
        case "map":
            // 品牌广告
            cycleCallbacks.push(function () {
                $("#activity-banner-panel").remove();
                $(".damoce-search-item").remove();
            });
            break;

        // 百度经验
        case "jingyan":
            if (pathname.startsWith("/search")) {
                $(".ec_ad").parent().remove();
            }

            if (pathname.startsWith("/article")) {
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
                $(".wgt-cms-banner").remove();

                // 底部广告
                $(".bottom-pic-ads").remove();
            }
            break;

        // 百度翻译
        case "fanyi":
            $("#sideAdContainer").remove();
            $(".spread-wrap").remove();
            $("#sideBannerContainer").remove();
            break;

        // 百度网盘
        case "pan":
            cycleCallbacks.push(function () {
                $("[node-type=header-union]").remove();
            });

            if (pathname.startsWith("/share/")) {
                $(".phone-banner").remove();
            }

            if (pathname.startsWith("/s/")) {
                $("#web-right-view").remove();
                $(".ad-platform-tips").remove();
                $(".btn-img-tips").remove();

                cycleCallbacks.push(function () {
                    $(".rights-section").remove();
                    $(".bottom-tip-bar").remove();
                });
            }
            break;

        default:
            return;
    }

    if (!cycleCallbacks.length) {
        return;
    }

    cycleCallbacks.forEach(f => f());
    setInterval(() => cycleCallbacks.forEach(f => f()), 500);
});