

//HOME_AUDIT
function home_aduit(target) {
	//console.log(123)
	var jsonpURL = "jsonpcallback/jsonpcallback_audit.js";
	var jsonpCallback = "homeaudit";
	var jsonpCache;
	var renderLayoutCache;
	var $targey = $(target);	
	function getJsonp(jsonpURL) {
		//console.log(jsonpURL)
		$.ajax({
			type: "get",
			url: jsonpURL,
			dataType: "jsonp",
			jsonpCallback:jsonpCallback
		}).done(function(data) {
			// console.log(data)
			jsonpCache = data;
			splitjson();
		});
	}

	function splitjson() {
		var json_blue = new Array(),
			json_yellow = new Array(),
			json_red = new Array();
		$.each(jsonpCache, function(i,d) {
			d['score'] >= 95 ? json_blue= json_blue.concat(d):"";
			d['score'] < 95 && d["score"] >= 85 ? json_yellow = json_yellow.concat(d):"";
			d['score'] < 85 ? json_red = json_red.concat(d):"";
		});
		//console.log(json_blue);
		//console.log(json_yellow);
		//console.log(json_red);
		renderLayout(json_blue,json_yellow,json_red);
	}
	function renderLayout(b,y,r) {
		renderLayoutCache = $("<div>");
		var template = 
			'<div class="eb_audit_items">'+
			'<a href="Audit_ODM.html" data-transition="none">'+
			'	<div class="vam clearfix">'+
			'		<div class="eai_logo" style="background-image: url()"></div>'+
			'		<div class="eai_score">99</div>'+
			'		<div class="eai_comname">name</div>'+
			'		<div class="eai_state"></div>'+
			'	</div>'+
			'	</a>'+
			'</div>';
		function render(k,d,c) {
			for (var i = 0; i< k; i ++) {
                if(d[i]["logoURL"].indexOf("webapp")){
                    var web = "webapp/";
                }else{
                    var web = "";
                }
//                console.log(d[i]["logoURL"].indexOf("webapp"))
				var $tp = $(template);
				$tp.addClass(c+"_"+i);
				$tp.find(".eai_logo").css("background-image","url('"+ web + d[i]["logoURL"]  +"')");
				$tp.find(".eai_score").html(d[i]["score"]);
				$tp.find(".eai_comname").html(d[i]["name"]);
				$tp.find(".eai_state").addClass(d[i]["state"]);
				renderLayoutCache.append($tp);
				$tp = null;
			}
		}
		if (b.length) {render(b.length,b,"blue");}
		if (y.length) {render(y.length,y,"yellow");}
		if (r.length) {render(r.length,r,"red");}
		$targey.html( renderLayoutCache.html());
		json_blue = null;
		json_yellow = null;
		json_red = null;
		jsonpCache = null;
		renderLayoutCache = null;
	}
	getJsonp(jsonpURL);
}