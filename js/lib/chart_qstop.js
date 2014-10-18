define(function () {
    var chartObj = {
        p1: []
    };
    var currIdx = 1;
    require(["qstop_result"], function (LvFai) { //AUDIT
        var pie = new LvFai('ui_qstop_r_pie', 'pie'),
				bar = new LvFai('ui_qstop_r_bar', 'bar_2');
        chartObj['p1'].push(pie, bar);
        resetOptionChart(1);
    });
    function disposeChart(index) {//清除chart实例，减小内存使用
        $.each(chartObj['p' + index], function (k, v) {
            v.chart.dispose();
        });
    }
    function resetOptionChart(index) {//绘制chart
        currIdx = index;
        $.each(chartObj['p' + index], function (k, v) {
            v.resetOption();
            //console.log('p'+index);
        });
    }
    window.onresize = function () {
        $.each(chartObj['p' + currIdx], function (k, v) {
            v.chart.resize();
        });
    }
});