$(function(){
	$(".mu-container .content").each(function(){
		var h = $(this).height();
		if(h>72){
			$(this).addClass("packup");
			$(".mu-container .dropdown").show();
		}
	});
	$(".mu-container .dropdown").on("click",function(){
		$(".mu-container .content").toggleClass("packup");
		$(".mu-container .dropdown").toggleClass("pup");
	});

	/*$(".downapp").on("click",function(){
        $(".mu-masking3").show();
    });*/
    $(".mu-masking3 .cancel,.mu-masking3 .bg").on("click",function(){
        $(".mu-masking3").hide();
    });

    $(".mu-more").on("click",function(){
        $(".mu-masking").show();
    });
    $(".mu-masking .cancel").on("click",function(){
        $(".mu-masking").hide();
    });

    /*$(".downapp").on("click",function(){
        $(".mu-masking2").show();
    });*/
    $(".mu-masking2 .cancel,.mu-masking2 .bg").on("click",function(){
        $(".mu-masking2").hide();
    });


    
    // 整合下载APP功能
    $(".downapp").on("click",function(){
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            //安卓手机
            if(isWeiXin()==true){
                // alert("android_wechat");
                $("#mu-wechat").show();
            }else{
                // alert("android");
                $("#mu-android").show();
            }
        } else if (u.indexOf('iPhone') > -1) {
            //苹果手机
            if(isWeiXin()==true){
                // alert("ios_wechat");
                $("#mu-wechat").show();
            }else{
                // alert("ios");
                $("#mu-ios").show();
            }
        }else{
            alert("您的浏览器不支持打开此页面，请更换浏览器！");
        }
    });

});

function isWeiXin(){ 
    var ua = navigator.userAgent.toLowerCase(); 
    if(ua.indexOf('micromessenger') != -1) { 
        return true; 
    } else { 
        return false; 
    } 
}