(function($){
	$.fn.plusTab = function(options) {
		//定义要用的参数
		var opts = {
			opt_1:'cur',
			opt_2:'.tabBox',
			opt_3:'chartHide'
		};
		var opt = $.extend(opts, options);
		return this.each(function() {
			var _obj = $(this);
			_obj.click(function(e) {
				e.stopPropagation();
				_obj.addClass(opt.opt_1).siblings().removeClass(opt.opt_1);
				var i=_obj.index();
				$(opt.opt_2+ '> div').eq(i).removeClass(opt.opt_3).siblings().addClass(opt.opt_3);
			});
		});
		return this;
	};
})(jQuery);
$(function(){
	$('.chartsTab span').plusTab({opt_2:'.chartsBox'});
	$('.LenovoIconTab li').plusTab({opt_2:'.LenovoIconBox'});
	$('.ThinkTab li').plusTab({opt_2:'.ThinkBox'});
});