/*扩展搜索页功能[Qstop_Search.html,FPY_Search.html,FAI_Search.html,EC_Search.html]*/
require(["isk_LPL"], function (isk) {
    isk.init && isk.init();
});
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
                //getSelectedItem();
            }
            else {
                $(".ecSubTag[data-id='all']").removeClass("cur");
                showInput($(this), $(this).hasClass("cur"));
                //getSelectedItem();
            }
            if ($(".product-item").is(":hidden"))
                $(".product-item").slideToggle({ duration: "slow", easing: "swing" });
        });
        //展开收起
        $(".selectedSure").on("click", function () {
            $(this).toggleClass("sure");
            $(".product-item").slideToggle({ duration: "slow", easing: "swing" });
        });
        //单个选择
        $(".product-item input:checkbox").on("click", function () {
            showInput($(this), $(this).prop("checked"));
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
        function getSelectedItem() {
            var appId = "", appText = "";
            $.each($(".product-item input:checkbox"), function (i, item) {
                if ($(this).prop("checked")) {
                    
                    appId += "," + $(this).attr("data-id");
                    appText += "," + $(this).parent().find("label").html();
                }
            });
            appId = appId.substring(1);
            appText = appText.substring(1);
            //console.log(appId + "\n" + appText);
        }
    }
    return thisClass;
});