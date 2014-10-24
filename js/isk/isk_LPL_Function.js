var isk_EverySync_LPL = function (dv, dd) {

    var thisClass = new Object;

    var thisName = "LPL";
    var thisVer = dv;
    var thisExp = _getTime();
    var thisData = [];
    var thisLevel1 = [];
    var thisLevel2 = [];
    var thisLevel3 = [];
    var thisLevel4 = [];

    thisClass.load = function (d) {
        if (_chkLocalCache() == -1) {
            window.localStorage.clear();
            _initialCache();
        } else {
            _loadCache();
        }
        _loadData();
        _loadUI();
    };

    function _chkLocalCache() {
        if (_getCache("plname") == null) {
            return -1;
        }
        if (_getCache("plver") != thisVer) {
            return -1;
        }
        if (_getCache("expires") == "" || (new Date(_getCache("expires")).getTime() - _getTime().getTime()) < 0) {
            return -1;
        }
        return 0;
    };

    function _initialCache() {
        thisExp.setDate(thisExp.getDate() + 1);
        thisData = dd;
        alert(thisData[2]);
        _setCache();
    };

    function _loadCache() {
        thisExp.setDate(thisExp.getDate() + 1);
        thisData = [_getCache("pldata1"), _getCache("pldata2"), _getCache("pldata3"), _getCache("pldata4")];
        _setCache();
    };

    function _loadData() {
        thisLevel1 = thisData[0].split(",");
        thisLevel2 = thisData[1].split(",");
        thisLevel3 = thisData[2].split(",");
        thisLevel4 = thisData[3].split(",");
    };

    function _loadUI() {
        setTemplateLevel1(thisLevel1);//level1
        setTemplate("dl_level2", thisLevel2); //level1
        setTemplate("dl_level3", thisLevel3); //level2
        setTemplate("dl_level4", thisLevel4); //level3
    };
    //设置表格数据
    function setTemplate(byId, data) {
        var iwrap = $('<div>');
        var liTemplate = '<span class="form_checkbox_wrap" style="display:none"><input type="checkbox"/><label class="form_checkbox">ALL</label></span>';
        $.each(data, function (key, item) {
            $tp = $(liTemplate);
            $tp.find("label").html(item.split("||")[1]);
            $tp.find("input").attr('id', item.split("||")[0]);
            $tp.find("input").attr('data-id', item.split("||")[0]);
            $tp.find("label").attr('for', item.split("||")[0]);
            iwrap.append($tp);
        });
        $("#" + byId).html(iwrap.html());
    }
    //设置一级表格数据
    function setTemplateLevel1(data)
    {
        var cwrap = $('<div>');
        var liTemplate = '<span class="ecSubTag" data-id="all">All</span>';
        cwrap.append($(liTemplate));
        $.each(data, function (key, item) {
            $tp2 = $(liTemplate);
            $tp2.html(item.split("||")[1]);
            $tp2.attr('data-id', item.split("||")[0]);
            cwrap.append($tp2);
        });
        $("#dl_level1").html(cwrap.html());
    }
    function _getCache(cName) {
        if (window.localStorage.getItem(cName)) {
            return window.localStorage.getItem(cName);
        }
        return null;
    };

    function _setCache() {
        window.localStorage.setItem("plname", thisName);
        window.localStorage.setItem("plver", thisVer);
        window.localStorage.setItem("pldata1", thisData[0]);
        window.localStorage.setItem("pldata2", thisData[1]);
        window.localStorage.setItem("pldata3", thisData[2]);
        window.localStorage.setItem("pldata4", thisData[3]);
        window.localStorage.setItem("expires", thisExp);
    };

    function _getTime() {
        var fmt = "2000-01-01 23:59:59";
        var dt = Date.parse(fmt.replace(/-/g, "/"));
        var setfmt = new Date(dt);
        return new Date();
    };

    return thisClass;

};