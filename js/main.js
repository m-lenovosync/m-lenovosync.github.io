//配置页面加载模块参数
require.config({
	paths: {
		"jquery"				:['jquery/jquery-2.1.1.min','http://cdn.bootcss.com/jquery/2.1.1/jquery.min','http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min','jquery/jquery-2.1.1.min'],
		"jqueryMobile"		:['jquery/jquery.mobile-1.3.0.min','http://libs.baidu.com/jquerymobile/1.3.0/jquery.mobile-1.3.0.min.js','jquery/jquery.mobile-1.3.0.min'],
		"echarts"			:"echart/echarts-map",
		'echarts/chart/pie' : 'echart/echarts-map',
		'echarts/chart/line': 'echart/echarts-map',
		'echarts/chart/bar' : 'echart/echarts-map',
		'echarts/chart/map' : 'echart/echarts-map',
		'echarts/chart/gauge' : 'echart/echarts-map',  
		"echartsConfig"	:"echart/echartsConfig",
		"chart_map"	:"echart/chart_map",
		"chart_home"	:"echart/chart_home",
		"chart_fpyoob"	:"echart/chart_fpyoob",
		"chart_fpyoob_ramp"	:"echart/chart_fpyoob_ramp",
		"chart_audit"	:"echart/chart_audit",
		"chart_fai"	:"echart/chart_fai",
		"home_chart_control"	:"echart/home_chart_control",
		"index"				:"lib/index",
		"app"				:"lib/app",
		"rose": "lib/rose",
		"rose02": "../../js/lib/rose",
		'chart_qstop': 'echart/chart_qstop',
		'page_chart_control': 'lib/page_chart_control',
		'fai_home':'lib/fai_home',
		'fai_home02':'../../js/lib/fai_home'
		
	},
	shim: {//模块依赖关系
		jquery			: {exports: '$'},
		'chart_map'	: {deps: ['echartsConfig']},
		'chart_home'	: {deps: ['echartsConfig']},
		'chart_fpyoob'	: {deps: ['echartsConfig']},
		'chart_fpyoob_ramp'	: {deps: ['echartsConfig']},
		'chart_audit'	: {deps: ['echartsConfig']},
		'chart_fai': { deps: ['echartsConfig'] },
		'chart_qstop': { deps: ['echartsConfig'] },
        'jqueryMobile' : {deps: ['jquery']},
        'index' : {deps: ['jquery']},
        // 'rose' : {deps: ['jquery','jqueryMobile','echarts/chart/bar','chart_audit','chart_fai']},
		'app'  			: {deps: ['jquery','jqueryMobile']}
	}
});
require(['jquery','index','app'],function(){
	// console.log($(document).find('.audit_search').is('div'));
	//根据页面加载所需的echarts	
	//ROSE module
//	if($(document).find('.fai_search').is('div') || $(document).find('.audit_odm').is('div') || $(document).find('.ui_audit').is('div')){
//		require(['rose'],function(){	
//			rosefunction();
//		});
//	}
    if($('.aduit-chart').attr('data-page-name') == 'aduit'){
        require(['rose'],function(){	
            rosefunction();
        });
    }

	//AUDIT module
	if($(document).find('.audit_search').is('div')){
	    require(['page_chart_control'], function (LvPage) {
			LvPage.init('audit_result');
		});
	}

	//FAI odm module
	if($(document).find('.fai_odm').is('div')){
	    require(['page_chart_control'], function (LvPage) {
			LvPage.init('fai_odm');
		});
	}

	//FAI home module
	if($(document).find('.fai_home').is('div')){
	    require(['page_chart_control', 'fai_home'], function (LvPage, FaiPage) {
			LvPage.init('fai_home');
			FaiPage.initworldmap('#ui_fai_map');
			// console.log(LvPage,FaiPage)
		});
	}

	if ($(document).find('.qstop_result').is('div')) {
	    require(['page_chart_control'], function (LvPage) {
	        LvPage.init('qstop_result');
	    });
	}


	if ($(document).find('.fpy_oob_result1').is('div')) {
	    require(['page_chart_control'], function (LvPage) {
	        LvPage.init('fpyoob_result', 1);
	    });
	} if ($(document).find('.fpy_oob_result2').is('div')) {
	    require(['page_chart_control'], function (LvPage) {
	        LvPage.init('fpyoob_result', 2);
	    });
	}
	if ($(document).find('.fpy_oob_result3').is('div')) {
	    require(['page_chart_control'], function (LvPage) {
	        LvPage.init('fpyoob_result', 3);
	    });
	}
	if ($(document).find('.fpy_oob_result4').is('div')) {
	    require(['page_chart_control'], function (LvPage) {
	        LvPage.init('fpyoob_result', 4);
	    });
	}
});
