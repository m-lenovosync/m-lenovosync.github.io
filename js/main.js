//配置页面加载模块参数
require.config({
    baseUrl:"http://localhost/Lenovo/webapp/js",
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
		"rose": "lib/rose",
		'fai_home': 'echart/fai_home',
		'page_chart_control': 'lib/page_chart_control',
	},
	shim: {//模块依赖关系
		jquery			: {exports: '$'},
		'chart_map'	: {deps: ['echartsConfig']},
		'chart_home'	: {deps: ['echartsConfig']},
		'chart_fpyoob'	: {deps: ['echartsConfig']},
		'chart_fpyoob_ramp'	: {deps: ['echartsConfig']},
		'chart_audit'	: {deps: ['echartsConfig']},
		'chart_fai': { deps: ['echartsConfig'] },
        'jqueryMobile' : {deps: ['jquery']},
        'index': { deps: ['jquery', 'echartsConfig'] },
	}
});
require(["index"]);