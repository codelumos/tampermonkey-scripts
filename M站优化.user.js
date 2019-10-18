// ==UserScript==
// @name         M站优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  优化bimibimi，去广告，允许选中和右键、还原鼠标样式
// @author       HaoNShi
// @match        http://www.bimibimi.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 去广告
    //$("#close").remove();
    $(document).ready(function() {
        $("div[style]").each(function() {
            if ($(this).css("z-index") == "2147483647") {
                $(this).css("display","none");
            }
        })
    });

    // 允许选中和右键
    document.oncontextmenu=function(e){return true;};
    document.onselectstart=function(e){return true;};

    // 还原鼠标样式
    document.body.style.cursor = "default";
    $("a").hover(function(){
        $("a").css("cursor","pointer");
    })

})();