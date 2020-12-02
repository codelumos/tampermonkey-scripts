// ==UserScript==
// @name         Glgoo学术优化
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      0.2.1
// @icon         https://xs.xiayige.org/favicon.ico
// @description  Glgoo学术搜索去广告和其他一系列优化
// @author       HaoNShi
// @match        *://xs.xiayige.org/*
// @match        *://scholar.123admin.com/*
// @match        *://xueshu.123admin.com/*
// @match        *://www.gugexueshu.com/
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';

    // 去广告
    $(".adsbygoogle").remove();
    $("#gs_hdr_act").remove();

    // 搜索栏增加logo
    $("#gs_hdr_lgo").append('<img id="logo" src="//gstatic.kkssl.com/logo.png" width="140" alt="Glgoo学术"/>');
    $("#logo").css({"margin": "15px 0px 0px 15px"});

})();
