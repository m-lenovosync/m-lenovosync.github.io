define('page_chart_control',[],function(){
	var LvPage = {
		chartArr:[]
	};
	LvPage.init = function(pageName,params){
		switch(pageName){
			//QSTOP
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
			case "qstop_search":
	        require(["page_search"],function(search){
						search.init&&search.init();
			    });
	        break;
			case "qstop_result":
			    require(["chart_qstop"], function (LvQStop) {
			        var bar = new LvQStop('chart_qstop_bar','dataZoomSearch');
			        LvPage.chartArr.push(bar);
			        //LvPage.resetOptionChart();
			    });
				break;
			//FPYOOB
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
			case "fpyoob_search":
	        require(["page_search"],function(search){
						search.init&&search.init();
			    });
	        break;
			case "fpyoob_result_1":
				require(["chart_fpyoob"],function(LvFpyOob){ //FPYOOB
						var timeLine = new LvFpyOob('chart_fpy_line', 'timeLine_2');
						LvPage.chartArr.push(timeLine);
						LvPage.resetOptionChart();
				});
				break;
			case "fpyoob_result_2":
				require(["chart_fpyoob"],function(LvFpyOob){ //FPYOOB
	        var timeLine = new LvFpyOob('chart_fpy_line', 'timeLine_2');
	        LvPage.chartArr.push(timeLine);
	        LvPage.resetOptionChart();
				});
				break;
			case "fpyoob_result_3":
				require(["chart_fpyoob"],function(LvFpyOob){ //FPYOOB
					var timeLine = new LvFpyOob('chart_fpy_timeLine', 'timeLine_2');
	        var line = new LvFpyOob('chart_fpy_line', 'line');
					LvPage.chartArr.push(timeLine,line);
					LvPage.resetOptionChart();
				});
				break;
			case "fpyoob_result_4":
				require(["chart_fpyoob"],function(LvFpyOob){ //FPYOOB
	        var line = new LvFpyOob('chart_fpy_line', 'line');
					LvPage.chartArr.push(line);
					LvPage.resetOptionChart();
				});
				break;
			//AUDIT
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
			case "audit_search":
	        require(["page_search"],function(search){
						search.init&&search.init();
			    });
	        break;
			case "audit_result":
				require(["chart_audit"],function(LvAudit){ //AUDIT
					var line = new LvAudit('chart_audit_result','lineSearch'); //(id, chart_type)
					LvPage.chartArr.push(line);					
					LvPage.resetOptionChart();
				});
				break;
			//FAI
			case "fai_home":
				require(["chart_fai","worldmap"],function(LvFai,worldmap){ 
					var pie = new LvFai('ui_fai_pie','pie'),
						bar = new LvFai('ui_fai_bar','bar');
					LvPage.chartArr.push(pie, bar);
					LvPage.resetOptionChart();
					worldmap.initworldmap('#ui_fai_map');
				});
				break;
			case "fai_odm":
				require(["chart_fai"],function(LvFai){ 
					var pie = new LvFai('ui_faiodm_pie','pie'),
						bar = new LvFai('ui_faiodm_bar','bar_2');
					LvPage.chartArr.push(pie, bar);
					LvPage.resetOptionChart();
				});
				break;
			case "fai_search":
	        require(["page_search"],function(search){
						search.init&&search.init();
			    });
	        break;
			case "fai_result_1":
				require(["chart_fai"],function(LvFai){ //FAI
					var pie = new LvFai('chart_fai_result_pie','pie'),
							bar = new LvFai('chart_fai_result_bar','bar_2');
					LvPage.chartArr.push(pie,bar);
					LvPage.resetOptionChart();
				});
				break;
			case "fai_result_2":
				require(["chart_fai"],function(LvFai){ //FAI
					var pie = new LvFai('chart_fai_result_pie','pie'),
							bar = new LvFai('chart_fai_result_bar','bar');
					LvPage.chartArr.push(pie,bar);
					LvPage.resetOptionChart();
				});
				break;
			case "fai_result_3":break;
			//EC
			case "ec_search":
	        require(["page_search"],function(search){
						search.init&&search.init();
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

//搜索页需要执行的事件。。如checkbox、提交按钮
define('page_search',[],function(){
	var thisClass = new Object;
	var hrefObj = {
		qstop:"Qstop_SearchResult.html",
		fpyoob:"FPY_OOB_SearchResult.html",
		audit:"Audit_SearchResult.html",
		fai:"FAI_SearchResult.html",
		ec:"EC_SearchResult.html"
	};
	thisClass.moduleName = 'qstop';
	thisClass.pageHref = '';
	thisClass.init = function(){
		thisClass.moduleName = $('.form_btn_search').data('module');
		//checkBox全选功能
		require(["check_LPL"], function (check) {
		  check.init && check.init();
		});		
		/*扩展搜索页功能[Qstop_Search.html,FPY_Search.html,FAI_Search.html,EC_Search.html]*/
		if(thisClass.moduleName == 'qstop' || thisClass.moduleName == 'fpyoob' || thisClass.moduleName == 'ec'){
			require(["isk_LPL"], function (isk) {
			    isk.init && isk.init();
			});
		}
		//搜索按钮
	  $(".ui-page").on('tap',".form_btn_search",function(){
	  	//此处做些输入校验。。。
	  	//如果校验不通过  
	  	//return false;
	  	
	  	//如果校验通过  
	  	App_params.search_opt = thisClass.getSearchOpts();
	  	if(thisClass.moduleName == 'fpyoob'){
	  		//thisClass.pageHref = 'FPY_OOBSearchResult-1.html';
	  		//thisClass.pageHref = 'FPY_OOBSearchResult-2.html';
	  		//thisClass.pageHref = 'FPY_OOBSearchResult-3.html';
	  		thisClass.pageHref = 'FPY_OOBSearchResult-4.html';
	  	}else if(thisClass.moduleName == 'fai'){
	  		//thisClass.pageHref = 'FAI_SearchResult-1.html';
	  		//thisClass.pageHref = 'FAI_SearchResult-2.html';
	  		thisClass.pageHref = 'FAI_SearchResult-3.html';
	  	}else{
	  		thisClass.pageHref = hrefObj[thisClass.moduleName];
	  	}
	  	thisClass.goToResultPage();
	  });
	};
	//获取查询条件
	thisClass.getSearchOpts = function(){
		var opts = {
			"date_type":"1",  //时间类型
			"beginDate":"2012-10-23",
			"endDate":"2014-10-23",
			"product_type":"11,12,13,14,15,17,16,19,18,21,20,23,22,25,24,27,26,29,28,31,30,34,35,32,33,38,39,36,37,42,43,40,41",
			"product":"all",
			"odm":"6,10,12,13,14,15,17,19",
			"os":"all",
			" type":"all",
			"geo":"all",
			"issue_type":"all",
			"issue_category":"all",
			"ons":"1",  //ons 1/0
			"irct":"1,2", //irct
		};
		return opts;
	};
	//校验条件通过，带着条件进入查询结果页与后台进行交互
	thisClass.goToResultPage = function(){
		$.mobile.changePage(thisClass.pageHref, {
      transition: "none",
      reverse: false,
      changeHash: true
    });
	};
	return thisClass;
});
//产品选择框
define('isk_LPL', ["isk/isk_LPL_Data", "isk/isk_LPL_Function"], function () {
    var thisClass = new Object;
    var chkinput = null;
    thisClass.init = function () {
        //加载product，如果本地存储已经有了且没有过期就读取本地存储
        var incData = new isk_EverySync_Data();
        var incFunct = new isk_EverySync_LPL(incData.thisVer, incData.thisData);
        incFunct.load();
        $(".ecSubTag").on("click", function () {
            $(this).toggleClass("cur");
            self =  $(this);
            if ($(this).attr("data-id") == "all") {
                $.each($(this).siblings(), function (i, content) {
                    self.hasClass("cur") ? $(content).addClass("cur") : $(content).removeClass("cur");
                    showInput(content, self.hasClass("cur"));
                });
            }
            else {
                $(".ecSubTag[data-id='all']").removeClass("cur");
                showInput($(this), $(this).hasClass("cur"));
            }
            if ($(".product-item").is(":hidden"))
                $(".product-item").slideToggle({ duration: "slow", easing: "swing" });

            setSelectedItem();
        });
        //展开收起
        $(".selectedSure").on("click", function () {
            $(this).toggleClass("sure");
            $(".product-item").slideToggle({ duration: "slow", easing: "swing" });
        });
        //单个选择
        $(".product-item input:checkbox").on("click", function () {
            showInput($(this), $(this).prop("checked"));
            if (!$(this).prop("checked"))
                $(".ecSubTag[data-id='all']").removeClass("cur");
            setSelectedItem();
        });
        //递归子节点显示/隐藏
        function showInput(item, flag) {
            var data_id = $(item).attr('data-id').split("|");
            var level = parseInt(data_id[0]) + 1;
            var last_step = parseInt(data_id[1]);
            var next_step = parseInt(data_id[2]);
            if (level < 4) {
                var qz = level + '|' + next_step + '|';
                var curr = $(".product-item input:checkbox").filter('input[data-id^="' + qz + '"]');
                $(curr).prop("checked", flag);
                curr.each(function () {
                    $(this).parent().css('display', flag ? 'block' : 'none');
                    showInput(this, flag);
                });
            }
        }
        //获取选择列表
        function setSelectedItem() {
            var appId = "";
            if ($(".ecSubTag[data-id='all']").hasClass("cur"))
            {//全选
                appId = "all";
            }else
            {
                $.each($(".product-item input:checkbox"), function (i, item) {
                    if ($(this).prop("checked")) {
                        appId += "," + $(this).attr("data-id");
                    }
                });
                appId = appId.substring(1);
            }
            $("#Product-SelectedItem").val(appId);
        }
    }
    return thisClass;
});
//checkbox的一些功能
define('check_LPL', [], function () {
	var thisClass = new Object;
	thisClass.init = function () {
		//其它查询项按钮
	  $(".other-item input:checkbox").on("click", function () {
	      var typeName = $(this).attr("id").split("-")[0];
	      var typeId = $(this).attr("id").split("-")[1];
	      if (typeId == "All") { //全选
	          $(this).parent().parent().find("input[id^='" + typeName + "']").prop("checked", $(this).prop("checked"));
	      }
	      else {//单选
	          if (!$(this).prop("checked"))
	              $("#" + typeName+"-All").prop("checked", $(this).prop("checked"));
	      }
	      otherSelectedItem(this);
	  });
	};
  //其它查询项值
  function otherSelectedItem(byItem) {
      var appText = "";
      if ($(byItem).attr("id").indexOf("-All") != -1) {
          //全选
          appText = $(byItem).prop("checked") ? "all" : "";
      } else { //单选
          $.each($(byItem).parent().parent().find("input:checkbox"), function (i, item) {
              if ($(item).prop("checked") && $(item).attr("id").indexOf("-All") == -1) {
                  appText += "," + $(item).attr("id");
              }
          });
          appText = appText.substring(1);
      }
      $("#" + $(byItem).attr("id").split('-')[0] + "-SelectedItem").val(appText);
  }
  return thisClass;
});
//worldmap加载
define('worldmap', [],function() {
	var worldmap = {};
	worldmap.initworldmap = function(target) {
		// console.log(target)
		$(target).load("worldmap.html #worldmapsvg", function() {

			function tap_act($tar, obj) {
				$tar.on("tap", obj, function(e) {
					e.stopPropagation();
					var newClassName = $(obj).attr("id");
					$tar.attr("class", newClassName).trigger(newClassName);
				});
			}

			var $maptar = $("#worldmapsvg");
			tap_act($maptar, "#AG");
			tap_act($maptar, "#EMEA");
			tap_act($maptar, "#PRC");
			tap_act($maptar, "#EAP");
			tap_act($maptar, "#MAP");
			//世界地图触发的事件:
			// $maptar.on({
			// 	"AG":function() { console.log(1)},
			// 	"EMEA":function() {console.log(2)},
			// 	"PRC":function() {console.log(3)},
			// 	"EAP":function() {console.log(4)},
			// 	"MAP":function() {console.log(5)}
			// });
		});
	}
	return worldmap;
});	
