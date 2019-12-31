// ==UserScript==
// @name         Glgoo学术优化
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      0.1
// @icon         https://xs.xiayige.org/favicon.ico
// @description  Glgoo学术搜索去广告，搜索栏增加logo
// @author       HaoNShi
// @match        *://xs.xiayige.org/*
// @match        *://scholar.123admin.com/*
// @match        *://www.gugexueshu.com/
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $(".adsbygoogle").remove();
    $("#gs_hdr_act").remove();
    $("#gs_hdr_lgo").append('<img id="logo" src="//gstatic.kkssl.com/logo.png" width="158" height="46"></img>');
    $("#logo").css({"margin":"10px 0px 0px 10px"});

})();
