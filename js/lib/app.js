$(function(){
    //主体内容高度设置
    var winHeight = $(window).height();
    var uiContent = $('.ui-content');
//    console.log(uiContent.hasClass('noFooter'))
    if(uiContent.hasClass('noFooter')){
//        console.log(123)
        $('.ui-content').height(winHeight - 50);
    }else{
       $('.ui-content').height(winHeight - 105); 
    }
    //添加横屏时遮罩层
//	$("body").append('<div class="trasfrm ds768"><div class="padArow"></div><div class="iconPad_1"><div class="iconpad_2"></div></div><div class="iconPad_1 trmoct"><div class="iconpad_2"></div></div><p class="trapf"><strong></strong> 请 <strong>切换到竖屏</strong> 以达到最佳浏览效果</p></div>');
    //日期控件默认js
    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });
    $('#startTime,#endTime').val(new Date().toDateInputValue());
});
