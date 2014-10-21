define(['echarts','echarts/chart/line','echarts/chart/bar'],
    function(ec){
        var lvChart = {
            echarts:ec,
            ecConfig:require('echarts/config')
        };
        function LvFpyOob(container,chartType){
            MyChart.call(this, lvChart.echarts, lvChart.ecConfig, container, {}, 0, 0);
            this.chartType = chartType;
            this.getChartData(0);
        }
        iheritPrototype(LvFpyOob, MyChart);
        LvFpyOob.prototype.getChartData = function(drawFlag){
            switch(this.chartType){
                case "timeLine":
                    this.getChartDataTimeLine(drawFlag); break;
                case "timeLine_2":
                    this.getChartDataTimeLine_2(drawFlag); break;
                case "line":
                    this.getChartDataLine(drawFlag); break;
                default:break;
            }
        };
        LvFpyOob.prototype.bindEvents = function () {//绑定相关事件
            var self = this;
            switch(this.chartType){
                case "timeLine":
                    this.chart.on(lvChart.ecConfig.EVENT.CLICK, function(param){
                        page_modules.loadinto("moduleHtml/FPY_OOB_In.html", ".eachBlck" ,"demopagec-2 switch_2","fpyoob_in");
                    }); 
                    break;
                default:break;
            }
            var self = this;
            
        };
        LvFpyOob.prototype._setOptionTimeLine = function(mydata){
            var option = {
                timeline: {
                    show:false,
                    y2:30,
                    data:['1','2','3','4','5','6', '7','8','9','10','11','12'], 
                    label : {
                        'interval':0,
                        textStyle: {
                            color: 'rgba(255,255,255,0.65)'
                        },
                        formatter : function(s) {
                            var month = ['', 'Jay.','Feb.','Mar.','Apr.','May.','Jun.', 'Jul.','Aug.','Sept.','Oct.','Nov.','Dec.'];
                            return month[s];
                        }
                    },
                    symbol:'emptyCircle',
                    lineStyle:{color: 'rgba(255,255,255,0.7)', width: 1, type: 'solid'},
                    checkpointStyle:{
                        borderColor : '#076377',
                        borderWidth : 1
                    },
                    controlStyle:{
                        normal : { color : '#E2F3F6'},
                        emphasis : { color : '#E2F3F6'}
                    },  
                    autoPlay : false,
                    playInterval : 3000
                },
                options:[
                    {
                        title : {
                            'text':'',
                            x:40,
                            y:20,
                            textStyle:{
                                fontSize: 24, 
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        },
                        tooltip : {'trigger':'axis'},
                        color:['#B7E1EA','#FFF100','#E2F3F6','rgba(255,255,255,0.3)'],
                        legend : {
                            x:10,
                            y:10,
                            padding:25,
                            itemGap:25,
                            textStyle:{color: '#B7E1EA',fontSize:14},
                            'data':mydata.legend
                        },
                        toolbox : {
                            'show':false, 
                            orient : 'vertical',
                            x: 'right', 
                            y: 'center',
                            'feature':{
                                'mark':{'show':true},
                                'dataView':{'show':true,'readOnly':false},
                                'magicType':{'show':true,'type':['line','bar','stack','tiled']},
                                'restore':{'show':true},
                                'saveAsImage':{'show':true}
                            }
                        },
                        calculable : false,
                        animation:true,
                        animationDuration:600,
                        grid : {
                            'x':70,
                            'y':120,
                            'x2':70,
                            'y2':60,
                            borderWidth:0
                        },
                        dataZoom: {
                            show: true,
                            realtime: true,
                            height: 15,
                            //y:290,
                            fillerColor: 'rgba(119, 223, 220,0.5)',
                            handleColor: 'rgba(140, 227, 225,0.4)',
                            start: 1,
                            end:50,
                            zoomLock: true//数据缩放锁，默认为false，当设置为true时选择区域不能伸缩，即(end - start)值保持不变
                        },
                        xAxis : [{
                            'type':'category',
                            'axisLabel':{'interval':0,'rotate':-45,'textStyle':{color: 'rgba(255,255,255,0.65)'}},
                            'axisLine':{show : false,lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                            'axisTick':{show : true,lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                            'splitLine':{show : false},
                            'data':mydata.xAxis
                        }],
                        yAxis : [
                            {
                                'type':'value',
                                'splitLine':{show : false},
                                'axisTick':{show : true,inside:true,lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                                'axisLine':{lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                                'axisLabel':{'textStyle':{color: 'rgba(255,255,255,0.65)'}},
                                'name':'FPY（%）',
                                'nameTextStyle':{color: '#E2F3F6'}
                            },
                            {
                                'type':'value',
                                'splitLine':{show : false},
                                'axisTick':{show : true,inside:true,lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                                'axisLine':{lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                                'axisLabel':{'textStyle':{color: 'rgba(255,255,255,0.65)'}},
                                'name':'OOB（%）',
                                'nameTextStyle':{color: '#E2F3F6'}
                            }
                        ],
                        series : [
                            {
                                'name':'FPY',
                                'type':'bar',
                                'barCategoryGap':'40%',
                                'data': mydata.series_bar_1.data[0]
                            }, 
                            {
                                'name':'OOB',
                                'yAxisIndex':1,
                                'type':'line',
                                'smooth':true,
                                'symbol':'none',
                                'itemStyle': {
                                    'normal': {
                                        lineStyle: { // 系列级个性化折线样式
                                            width: 4
                                        }
                                    }
                                },
                                'data': mydata.series_line_1.data[0]
                            },
                            {
                                'name':'FPY Target',
                                'type':'line',
                                'yAxisIndex':0,
                                'symbol':'none',
                                'data': []
                            },
                            {
                                'name':'OOB Target',
                                'type':'line',
                                'symbol':'none',
                                'yAxisIndex':1,
                                'itemStyle': {
                                    'normal': {
                                        lineStyle: { // 系列级个性化折线样式
                                            type:'dotted'
                                        } 
                                    }
                                },
                                'data': []
                            }
                        ]
                    }
                ]
            };
            for (var i = 1; i < 12; i++) {
                option.options.push({
                    series : [
                        {'data': mydata.series_bar_1.data[i]},
                        {'data': mydata.series_line_1.data[i]}
                    ]
                })
            };
            var target1 = [],
                target2 = [];
            for (var i = 0; i < mydata.xAxis.length; i++) {
                target1.push(mydata.series_bar_target);
                target2.push(mydata.series_line_target);
            }
            option.options[0].series[2].data = target1;
            option.options[0].series[3].data = target2;  
            this.option = option;
            this.loadStatus = true;
            return option;
        };
        LvFpyOob.prototype.getChartDataTimeLine = function(drawFlag){
            var self = this;
            var mydata = {
              legend:['FPY','OOB','FPY Target','OOB Target'],
              xAxis: ['wk41', 'wk40', 'wk39', 'wk38', 'wk37', 'wk36', 'wk35', 'wk34', 'wk33', 'wk32', 'wk31', 'wk30', 'wk29', 'wk28', 'wk27', 'wk26', 'wk25', 'wk24', 'wk23', 'wk22', 'wk21'],
              series_bar_1:{name:'FPY',data:[]},
              series_line_1:{name:'OOB',data:[]},
              series_bar_target:25,
              series_line_target:30
            };
            for (var i = 12; i >= 0; i--) {
                var newBarArr = [],
                    newLineArr = [];
                for (var j = mydata.xAxis.length; j >= 0; j--) {
                    newBarArr.push(Math.floor(Math.random()*100));
                    newLineArr.push(Math.floor(Math.random()*100));
                };
                mydata.series_bar_1.data.push(newBarArr);
                mydata.series_line_1.data.push(newLineArr);
            };
            self._setOptionTimeLine(mydata);
            drawFlag&&self.resetOption();
        };

        //_setOptionTimeLine_2
        LvFpyOob.prototype._setOptionTimeLine_2 = function(mydata){
            var option = {
                timeline: {
                    show:false,
                    y2:50,
                    data:['1','2','3','4','5','6', '7','8','9','10','11','12'], 
                    label : {
                        'interval':0,
                        textStyle: {
                            color: 'rgba(255,255,255,0.65)'
                        },
                        formatter : function(s) {
                            var month = ['', 'CKSN','QSJN.','BLDN','SHPN','WKS','LCFC', 'PEG','CCD','WCD','ITUN','PON','ARG'];
                            return month[s];
                        }
                    },
                    symbol:'emptyCircle',
                    lineStyle:{color: 'rgba(255,255,255,0.7)', width: 1, type: 'solid'},
                    checkpointStyle:{
                        borderColor : '#076377',
                        borderWidth : 1
                    },
                    controlStyle:{
                        normal : { color : '#E2F3F6'},
                        emphasis : { color : '#E2F3F6'}
                    },  
                    autoPlay : false,
                    playInterval : 3000
                },
                options:[
                    {
                        title : {
                            'text':'',
                            x:40,
                            y:10,
                            textStyle:{
                                fontSize: 24, 
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        },
                        tooltip : {'trigger':'axis'},
                        color:['#B7E1EA','#FFF100','#E2F3F6','rgba(255,255,255,0.3)'],
                        legend : {
                            x:'right',
                            y:10,
                            padding:25,
                            itemGap:25,
                            textStyle:{color: '#B7E1EA',fontSize:14},
                            'data':mydata.legend
                        },
                        toolbox : {
                            'show':false, 
                            orient : 'vertical',
                            x: 'right', 
                            y: 'center',
                            'feature':{
                                'mark':{'show':true},
                                'dataView':{'show':true,'readOnly':false},
                                'magicType':{'show':true,'type':['line','bar','stack','tiled']},
                                'restore':{'show':true},
                                'saveAsImage':{'show':true}
                            }
                        },
                        calculable : false,
                        animation:true,
                        animationDuration:600,
                        grid : {
                            'x':70,
                            'y':120,
                            'x2':70,
                            'y2':60,
                            borderWidth:0
                        },
                        dataZoom: {
                            show: true,
                            realtime: true,
                            height: 15,
                            //y:290,
                            fillerColor: 'rgba(119, 223, 220,0.5)',
                            handleColor: 'rgba(140, 227, 225,0.4)',
                            start: 1,
                            end:50,
                            zoomLock: true//数据缩放锁，默认为false，当设置为true时选择区域不能伸缩，即(end - start)值保持不变
                        },
                        xAxis : [{
                            'type':'category',
                            'axisLabel':{'interval':0,'rotate':-45,'textStyle':{color: 'rgba(255,255,255,0.65)'}},
                            'axisLine':{show : false,lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                            'axisTick':{show : true,lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                            'splitLine':{show : false},
                            'data':mydata.xAxis
                        }],
                        yAxis : [
                            {
                                'type':'value',
                                'splitLine':{show : false},
                                'axisTick':{show : true,inside:true,lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                                'axisLine':{lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                                'axisLabel':{'textStyle':{color: 'rgba(255,255,255,0.65)'}},
                                'name':'FPY（%）',
                                'nameTextStyle':{color: '#E2F3F6'}
                            },
                            {
                                'type':'value',
                                'splitLine':{show : false},
                                'axisTick':{show : true,inside:true,lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                                'axisLine':{lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                                'axisLabel':{'textStyle':{color: 'rgba(255,255,255,0.65)'}},
                                'name':'OOB（%）',
                                'nameTextStyle':{color: '#E2F3F6'}
                            }
                        ],
                        series : [
                            {
                                'name':'FPY',
                                'type':'bar',
                                'barCategoryGap':'40%',
                                'data': mydata.series_bar_1.data[0]
                            }, 
                            {
                                'name': 'Monitor',
                                'yAxisIndex':1,
                                'type':'line',
                                'smooth':true,
                                'symbol':'none',
                                'itemStyle': {
                                    'normal': {
                                        lineStyle: { // 系列级个性化折线样式
                                            width: 4
                                        }
                                    }
                                },
                                'data': mydata.series_line_1.data[0]
                            },
                            {
                                'name': 'Close',
                                'type':'line',
                                'yAxisIndex':0,
                                'symbol':'none',
                                'data': []
                            },
                            {
                                'name':'irtc',
                                'type':'line',
                                'symbol':'none',
                                'yAxisIndex':1,
                                'itemStyle': {
                                    'normal': {
                                        lineStyle: { // 系列级个性化折线样式
                                            type:'dotted'
                                        } 
                                    }
                                },
                                'data': []
                            }
                        ]
                    }
                ]
            };
            for (var i = 1; i < 12; i++) {
                option.options.push({
                    series : [
                        {'data': mydata.series_bar_1.data[i]},
                        {'data': mydata.series_line_1.data[i]}
                    ]
                })
            };
            var target1 = [],
                target2 = [];
            for (var i = 0; i < mydata.xAxis.length; i++) {
                target1.push(mydata.series_bar_target);
                target2.push(mydata.series_line_target);
            }
            option.options[0].series[2].data = target1;
            option.options[0].series[3].data = target2;  
            this.option = option;
            this.loadStatus = true;
            return option;
        };
        LvFpyOob.prototype.getChartDataTimeLine_2 = function(drawFlag){
            var self = this;
            var mydata = {
                legend: ['FPY', 'OOB', 'FPY Target', 'OOB Target'],
                xAxis: ['09-22', '09-23', '09-24', '09-25', '09-26', '09-27', '09-28', '09-30', '10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12', '10-13', '10-14', '10-15'],
              series_bar_1:{name:'FPY',data:[]},
              series_line_1:{name:'OOB',data:[]},
              series_bar_target:25,
              series_line_target:30
            };
            for (var i = 12; i >= 0; i--) {
                var newBarArr = [],
                    newLineArr = [];
                for (var j = mydata.xAxis.length; j >= 0; j--) {
                    newBarArr.push(Math.floor(Math.random()*100));
                    newLineArr.push(Math.floor(Math.random()*100));
                };
                mydata.series_bar_1.data.push(newBarArr);
                mydata.series_line_1.data.push(newLineArr);
            };
            self._setOptionTimeLine_2(mydata);
            drawFlag&&self.resetOption();
        };


        LvFpyOob.prototype._setOptionLine = function(mydata){
            var option = {
                color:["#fff"],
                title : {
                    text: '',
                    subtext: ''
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer:{
                        type : 'line',
                        lineStyle : {
                          color: '#fff',
                          width: 2,
                          type: 'solid'
                        },
                        crossStyle : {
                          color: '#fff',
                          width: 2,
                          type: 'solid'
                        }
                    }
                },
                legend: {
                    y:-300,
                    data:mydata.legend
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                animation: true,
                calculable : false,
                grid : {
                    'x':70,
                    'x2':30,
                    'y':30,
                    'y2':70,
                    borderWidth:0
                },
                xAxis : [
                    {
                        'type':'category',
                        boundaryGap : false,
                        'axisLabel':{show : false,'interval':0,'textStyle':{color: '#E2F3F6'}},
                        'axisLine':{lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                        'axisTick':{show : true,inside:true,length:10,lineStyle:{color: 'rgba(255,255,255,0.4)', width: 1, type: 'solid'}},
                        'splitLine':{show : false},
                        data : mydata.xAxis
                    }
                ],
                yAxis : [
                    {                        
                        'type':'value',
                        'splitLine':{show : false},
                        'axisTick':{show : true,inside:true,lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                        'axisLine':{lineStyle:{color: '#076377', width: 1, type: 'solid'}},
                        'axisLabel':{'textStyle':{color: '#E2F3F6'}},
                        'nameTextStyle':{color: '#E2F3F6'}
                    }
                ],
                series : [
                    {
                        name:'Ramp',
                        type:'line',
                        'smooth':true,
                        'symbol':'none',
                        itemStyle: {normal: {areaStyle: {
                                // 区域图，纵向渐变填充
                                color : (function (){
                                    var zrColor = require('zrender/tool/color');
                                    return zrColor.getLinearGradient(
                                        0, 200, 0, 400,
                                        [[0, 'rgba(255,255,255,0.2)'],[1, 'rgba(255,255,255,0.1)']]
                                    )
                                })()
                            }}},
                        data:mydata.data
                    }
                ]
            };    
            this.option = option;
            this.loadStatus = true;
            return option;
        };
        LvFpyOob.prototype.getChartDataLine = function(drawFlag){
            var self = this;
            var mydata = {
                legend:["Ramp"],
                xAxis:['周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日'], 
                data:[10, 12, 21, 30, 35, 33, 30,28,30,35,40,43,47,50,46,44,46,50,55,60,57]
            };
            self._setOptionLine(mydata);
            drawFlag&&self.resetOption();
        };
        return LvFpyOob;
    }
);
     