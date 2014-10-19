//整体框架控制模块
require(["jquery", "jqueryMobile"], function($) {
    $(document).on("pagecreate", ".aduit-chart", function(event) {
        //ROSE module
        if ($('.aduit-chart').attr('data-page-name') == 'aduit') {
            require(['rose'], function() {
                rosefunction();
            });
        }
    });

    $(window).hashchange(function() {
        //var hash = location.hash;

        // console.log(location.href);

        //FAI home module
        if ($(document).find('.fai_home').is('div')) {
            require(['page_chart_control', 'fai_home'], function(LvPage, FaiPage) {
                LvPage.init('fai_home');
                FaiPage.initworldmap('#ui_fai_map');
                // console.log(LvPage,FaiPage)
            });
        }

    });
});

  
