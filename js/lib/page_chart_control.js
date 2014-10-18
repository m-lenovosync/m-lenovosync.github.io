define(function(){
	var LvPage = {
		chartArr:[]
	};
	LvPage.init = function(pageName,params){
		console.log('initchart');
		LvPage.disposeChart();
		switch(pageName){
			case "audit_odm":
				require(["chart_audit"],function(LvAudit){ //AUDIT
					var bar = new LvAudit('chart_auditOdm_bar','bar2'),
							timeLine = new LvAudit('chart_auditOdm_timeLine','timeLine');
					LvPage.chartArr.push(bar, timeLine);
					LvPage.resetOptionChart();
				});
				break;
			case "fai_odm":
				require(["chart_fai"],function(LvFai){ //AUDIT
					var pie = new LvFai('ui_faiodm_pie','pie'),
						bar = new LvFai('ui_faiodm_bar','bar_2');
					LvPage.chartArr.push(pie, bar);
					LvPage.resetOptionChart();
				});
				break;
			case "fai_home":
				require(["chart_fai"],function(LvFai){ //AUDIT
					var pie = new LvFai('ui_fai_pie','pie'),
						bar = new LvFai('ui_fai_bar','bar');
					LvPage.chartArr.push(pie, bar);
					LvPage.resetOptionChart();
				});
				break;
			case "fpyoob_in":
				require(["chart_fpyoob"],function(LvFpyOob){ //AUDIT
					var timeLine = new LvFpyOob('chart_fpy_timeLine2','timeLine_2');
					LvPage.chartArr.push(timeLine);
					LvPage.resetOptionChart();
				});
				break;
			case "audit_result":
				require(["chart_audit"],function(LvAudit){ //AUDIT
					var line = new LvAudit('chart_audit_result','line'); //(id, chart_type)
					LvPage.chartArr.push(line);					
					LvPage.resetOptionChart();
				});
				break;
			case "fai_result":
				require(["chart_fai"],function(LvFai){ //FAI
					console.log(page_modules.params);
					if(page_modules.params.type == 1){
						$("#chart_fai_result_bar").parent().show();
						var pie = new LvFai('chart_fai_result_pie','pie'),
								bar = new LvFai('chart_fai_result_bar','bar_2');
						LvPage.chartArr.push(pie,bar);
						LvPage.resetOptionChart();
					}else if(page_modules.params.type == 2){
						$("#chart_fai_result_bar").parent().show();
						var pie = new LvFai('chart_fai_result_pie','pie'),
								bar = new LvFai('chart_fai_result_bar','bar');
						LvPage.chartArr.push(pie,bar);
						LvPage.resetOptionChart();
					}else{
						$("#chart_fai_result_bar").parent().next().show();
					}
				});
				break;
			case "fpyoob_result":
				require(["chart_fpyoob"],function(LvFpyOob){ //FPYOOB
				    if (params == 1) {
						var timeLine = new LvFpyOob('chart_fpy_Line', 'timeLine_2');
						LvPage.chartArr.push(timeLine);
						LvPage.resetOptionChart();
				    } else if (params == 2) {
				        var timeLine = new LvFpyOob('chart_fpy_Line', 'timeLine');
				        LvPage.chartArr.push(timeLine);
				        LvPage.resetOptionChart();
				    } else if (params == 3) {
						var line = new LvFpyOob('chart_fpy_Line', 'line');
						var timeLine = new LvFpyOob('chart_fpy_timeLine', 'timeLine_2');
						LvPage.chartArr.push(timeLine);
						LvPage.chartArr.push(line);
						LvPage.resetOptionChart();
				    }
				    else if (params == 4) {
				        var line = new LvFpyOob('chart_fpy_Line', 'line');
				        LvPage.chartArr.push(line);
				        LvPage.resetOptionChart();
				    }
				});
				break;
			case "qstop_result":
			    require(["chart_qstop"], function (LvQStop) {//首页chart页
			        var bar = new LvQStop('chart_qstop_bar');
			        LvPage.chartArr.push(bar);
			        LvPage.resetOptionChart();
			    });
				break;
			default:break;
		}

	};
	LvPage.disposeChart = function(){//清除chart实例，减小内存使用
		$.each(LvPage.chartArr,function(k,v){
			if(v.chart){
				v.chart.dispose();
			}
			v = null;
		});
		LvPage.chartArr = [];
	};
	LvPage.resizeChart = function(){//resize图表
		$(window).off(".page");
		$(window).on('resize.page',function() {
			$.each(LvPage.chartArr,function(k,v){
				v.chart.resize();
				v.bindEvents();
			});
		});
	};
	LvPage.resetOptionChart = function(){//绘制chart
		$.each(LvPage.chartArr,function(k,v){
			v.resetOption();
		});
		LvPage.resizeChart();
	};
	return LvPage;
});