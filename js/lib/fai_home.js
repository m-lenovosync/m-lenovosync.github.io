// console.log('okkkkk')
function FaiChart(){
	define(function() {
		var FaiPage = {};
	
		FaiPage.initworldmap = function(target) {
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
		return FaiPage;
	});		
}
FaiChart();