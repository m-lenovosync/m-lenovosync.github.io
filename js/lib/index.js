//日期控件默认js
Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});
//全局变量-----存放一些不方便传递的参数
var App_params = {};

//整体框架控制模块
function allFun(LvPage) {
    //主体内容高度设置
    var winHeight = $(window).height();
    var uiContent = $('.ui-page-active').find('.ui-content');
//    console.log(uiContent.hasClass('noFooter'))
    if(uiContent.hasClass('noFooter')){
        $('.ui-content').height(winHeight - 50);
    } else {
//        alert(123)
        $('.ui-content').height(winHeight - 105);
    }
	
	$(document).on("touchstart", "input", function(e) {
		e.preventDefault();
		e.initEvent("click", true, false);
	})
    //添加横屏时遮罩层
    //	$("body").append('<div class="trasfrm ds768"><div class="padArow"></div><div class="iconPad_1"><div class="iconpad_2"></div></div><div class="iconPad_1 trmoct"><div class="iconpad_2"></div></div><p class="trapf"><strong></strong> 请 <strong>切换到竖屏</strong> 以达到最佳浏览效果</p></div>');
    
    $('#startTime,#endTime').val(new Date().toDateInputValue());
    //控制tab切换
    $('.chartsTab.qstop span').plusTab({ 
        opt_2: '.chartsBox',
        callback:function(obj){
            if(obj.html() == "CHARTS"){
                LvPage.disposeChart();
                LvPage.init("qstop_chart");
            }else{
                LvPage.disposeChart();
                LvPage.init("qstop_home");
            }
        }
    });
    $('.chartsTab.fpyoob span').plusTab({ 
        opt_2: '.chartsBox',
        callback:function(obj){
            if(obj.html() == "MP"){
                LvPage.disposeChart();
                LvPage.init("fpy_oob_mp");
            }else{
                LvPage.disposeChart();
                LvPage.init("fpy_oob");
            }
        }
    });
    $('.LenovoIconTab li').plusTab({ opt_2: '.LenovoIconBox' });
    $('.ThinkTab li').plusTab({ opt_2: '.ThinkBox' });
}
//控制tab切换插件js
(function ($) {
    $.fn.plusTab = function (options) {
        //定义要用的参数
        var opts = {
            opt_1: 'cur',
            opt_2: '.tabBox',
            opt_3: 'chartHide',
            callback:function(obj){}
        };
        var opt = $.extend(opts, options);
        return this.each(function () {
            var _obj = $(this);
            _obj.click(function (e) {
                e.stopPropagation();
                if(_obj.hasClass(opt.opt_1)){
                    return false;
                }
                _obj.addClass(opt.opt_1).siblings().removeClass(opt.opt_1);
                var i = _obj.index();
                _obj.closest('.ui-page').find(opt.opt_2).children().eq(i).removeClass(opt.opt_3).siblings().addClass(opt.opt_3);
                opts.callback(_obj);
                //$(document).trigger("changeChart");
            });
        });
        return this;
    };
})(jQuery);

function appInit(){
    require(['page_chart_control'], function(LvPage) {
        allFun(LvPage);
        LvPage.init('qstop_home');
        $(document).on("pageshow", ".ui-page", function(event) {
            allFun(LvPage);
            var pageName = $(this).data('page-name');
            LvPage.init(pageName);
        }).on("pagebeforeshow", ".ui-page", function(event) {
            LvPage.disposeChart();
        });
    });
}