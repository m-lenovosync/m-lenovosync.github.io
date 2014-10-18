require(["jquery"],function($){
    $( document ).on( "pagecreate", ".aduit-chart", function( event ) {
        //ROSE module
        if($('.aduit-chart').attr('data-page-name') == 'aduit'){
            require(['rose02'],function(){	
                rosefunction();
            });
        }
    });
	$( document ).on( "pagecreate", ".fai-chart", function( event ) {
        //ROSE module
        /*if($('.fai-chart').attr('data-page-name') == 'fai_home'){
            require(['fai_home02'],function(){	
                FaiChart();
            });
        }*/
    });
});




  
