//配置页面加载模块参数
require.config({
	paths: {
		"jquery"				:['jquery/jquery-2.1.1.min','http://cdn.bootcss.com/jquery/2.1.1/jquery.min','http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min','jquery/jquery-2.1.1.min'],
		"jqueryMobile"			:['jquery/jquery.mobile-1.3.0.min','http://libs.baidu.com/jquerymobile/1.3.0/jquery.mobile-1.3.0.min.js','jquery/jquery.mobile-1.3.0.min'],
		"echarts"				:"echart/echarts-map",
		'echarts/chart/pie'		:'echart/echarts-map',
		'echarts/chart/line'	:'echart/echarts-map',
		'echarts/chart/bar'		:'echart/echarts-map',
		'echarts/chart/map'		:'echart/echarts-map',
		"echartsConfig"			:"echart/echartsConfig",
		"chart_map"				:"echart/chart_map",
		'chart_qstop'			:'echart/chart_qstop',
		"chart_fpyoob"			:"echart/chart_fpyoob",
		"chart_audit"			:"echart/chart_audit",
		"chart_fai"				:"echart/chart_fai",
		"home_chart_control"	:"echart/home_chart_control",
		"index"					:"lib/index",
		"rose"					:"lib/rose",
		'page_chart_control'    : 'lib/page_chart_control',
		'search_result_control' : 'lib/search_result_control',
		'createjs'				:'jquery/easeljs.min',
		'chartline'				:'lib/chart_line',
		'fastclick'				:'fastclick'
	},
	waitSeconds:30,
	shim: {//模块依赖关系
		jquery					: {exports: '$'},
		'chart_map'				: {deps: ['echartsConfig']},
		'chart_home'			: {deps: ['echartsConfig']},
		'chart_fpyoob'			: {deps: ['echartsConfig']},
		'chart_fpyoob_ramp'		: {deps: ['echartsConfig']},
		'chart_audit'			: {deps: ['echartsConfig']},
		'chart_fai'				: {deps: ['echartsConfig']},
		'jqueryMobile'          : { deps: ['jquery'] },
		'page_chart_control'    : { deps: ['jquery'] },
        'index'					: {deps: ['jquery', 'echartsConfig','fastclick'] },
        'chartline'				: {deps: ['createjs']}
	}
});
require(["jquery", "jqueryMobile",'fastclick',"index"], function($) {
		$(function() {
			//FastClick.attach(document.body);
			appInit();		
		});
});