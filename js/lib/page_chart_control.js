define(function(){
	var LvPage = {
		chartArr:[]
	};
	LvPage.init = function(pageName,params){
		switch(pageName){
            case "fpy_oob":
				require(["chart_fpyoob"],function(LvFpyOob){ //AUDIT
          var timeLine_2 = new LvFpyOob('fpy_ood_line01','line');
					LvPage.chartArr.push(timeLine_2);
					LvPage.resetOptionChart();
				});
				break;
			case "fpy_oob_mp":
				require(["chart_fpyoob"],function(LvFpyOob){ //AUDIT
          var timeLine_3 = new LvFpyOob('fpy_ood_line02','timeLine');
					LvPage.chartArr.push(timeLine_3);
					LvPage.resetOptionChart();
				});
				break;
			case "fpy_oob_mp_odm":
				require(["chart_fpyoob"],function(LvFpyOob){ //AUDIT
          var timeLine_3 = new LvFpyOob('fpy_ood_mp_line','timeLine_2');
					LvPage.chartArr.push(timeLine_3);
					LvPage.resetOptionChart();
				});
				break;
			case "audit_home":
				require(["rose"],function(){ //AUDIT
				  home_aduit(".eb_audit_inner");
				});
				break;
			case "audit_odm":
				require(["chart_audit"],function(LvAudit){ //AUDIT
						var line = new LvAudit('chart_auditOdm_line', 'line');
				    var bar = new LvAudit('chart_auditOdm_bar', 'bar2');
				    LvPage.chartArr.push(line,bar);
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
				require(["chart_fai","fai_home"],function(LvFai,FaiPage){ //AUDIT
					var pie = new LvFai('ui_fai_pie','pie'),
						bar = new LvFai('ui_fai_bar','bar');
					LvPage.chartArr.push(pie, bar);
					LvPage.resetOptionChart();
					FaiPage.initworldmap('#ui_fai_map');
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
					//console.log(page_modules.params);
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
	    case "qstop_home":
	        require(["chart_map"], function (LvMap) {
	            var map = new LvMap('mapWrap');
	            LvPage.chartArr.push(map);
	            //LvPage.resetOptionChart();
	        });
	    case "qstop_chart":
	        require(["chart_qstop"], function (lvqstop) {
	            var bar = new lvqstop('chart_home_bar','dataZoom');
	            LvPage.chartArr.push(bar);
	            LvPage.resetOptionChart();
	        });
	        break;
	    case "qstop_odm":
	        require(["chart_qstop"], function (lvqstop) {
	            var bar = new lvqstop('chart_qstop_odm','dataZoom_2');
	            LvPage.chartArr.push(bar);
	            LvPage.resetOptionChart();
	        });
	        break;
			case "qstop_result":
			    require(["chart_qstop"], function (LvQStop) {
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
	LvPage.resetOptionChart = function () {//绘制chart
		$.each(LvPage.chartArr,function(k,v){
			v.resetOption();
		});
		LvPage.resizeChart();
	};
	return LvPage;
});