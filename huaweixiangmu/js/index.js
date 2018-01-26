window.onload = function(){
//顶部
$(function(){
	$("#dbu").show(50);
	$("#dbu span").click(function(){
		$("#dbu").hide(50);
	})
})



//导航
	$(".navR1 a").mouseenter(function(){
	$(".navR1 a").css("color","#fff");
	$(this).css({"color":"#c81118","border-bottom":"1px solid #c81118"});
		
		$(".navR1 a").mouseleave(function(){
			$(this).css({"border-bottom":"none","color":"#fff"});
		})

	})
//轮播图侧边栏弹出

$(".bannerLo .bannerLo1-1").css("display","none")
$(".bannerL div").hover(function(){
	$(".bannerLo .bannerLo1-1").css("display","none");
	var index = $(this).index();
	$(".bannerLo .bannerLo1-1").eq(index).css("display","block")
	$(this).css("display","block")
},function(){
	$(".bannerLo .bannerLo1-1").css("display","none")
})








//轮播图
var timer = setInterval(autoPlay,2000);
var index = 0;
function autoPlay(){
	index++;
	if( index==$("#banner ol li").size() ){
		index=0;
	}
	$("#banner ol li").eq(index)
			  .addClass("current")
			  .siblings()
			  .removeClass("current");
	$("#banner ul li").eq(index)
					  .fadeIn(1500)
					  .siblings()
					  .fadeOut(1500);
}
$("#banner").mouseenter(function(){
	clearInterval(timer)
	index=$(this).index()
	
}).mouseleave(function(){
	timer = setInterval(autoPlay,2000)
})


$("#banner ol li").mouseenter(function(){
	clearInterval(timer)
index=$(this).index()-1;
autoPlay();

}).mouseleave(function(){
	timer = setInterval(autoPlay,1500)
})

			//case	
$(".caseT1 a").mouseenter(function(){
	$(".caseT1 a").css("color","#333");
	$(this).css("color","#c81118");
}).mouseleave(function(){
	$(".caseT1 a").css("color","#333");
})

$(".caseT .a1").mouseenter(function(){
	$(".caseT .a1").css("background","#fff");
	$(this).css("background","#c81118")
	$(".caseT .a1").css("color","#c81118");
	$(this).css("color","#fff")
}).mouseleave(function(){
	$(".caseT .a1").css("background","#fff");
	$(".caseT .a1").css("color","#c81118")
})

//caseT2
$(".caseT2 a").mouseenter(function(){
	$(".caseT2 a").css("color","#333");
	$(this).css("color","#C81118");
}).mouseleave(function(){
	$(".caseT2 a").css("color","#333")
})
//case3 case3-1  文本轮播
//var num =0;
//var timer = setInterval(autoPlay,20);
//var oDiv = document.getElementById("oDiv");
//var h = oDiv.children[0].Height;
//function autoPlay(){
//	num--;
//	oDiv.style.top = num + "px";
//	if( num< -h ){
//		num = 0;
//	}
//}


//caseT3-2 鼠标滑过变色

$(".caseT3-2 a").mouseenter(function(){
	$(".caseT3-2 a").css("color","#333");
	$(this).css("color","#C81118");
}).mouseleave(function(){
	$(".caseT3-2").css("color","#333")
})

//phoneT  鼠标滑过样式
$(".phoneT a").mouseenter(function(){
	$(".phoneT a").css("color","#333");
	$(this).css({"color":"#C81118","border-bottom":"1px solid #c81118"});
	$(".phoneT h3 a").css("border-bottom","none")
}).mouseleave(function(){
	$(this).css({"border-bottom":"none","color":"#333"})
})

//laptopT 鼠标滑过样式
$(".laptopT a").mouseenter(function(){
	$(".laptopT a").css("color","#333");
	$(this).css({"color":"#c81118","border-bottom":"1px solid #c81118"});
	$(".laptopT h3 a").css("border-bottom","none")
}).mouseleave(function(){
	$(this).css("border-bottom","none")
})

//.caseCon-show3-1轮播（点击无缝轮播）
//var flag =true;
$(".btn1").click(function(){
//	if(flag){
//		flag = false;
		$(".caseCon-show3-1-1").animate({"marginLeft":-1202},1500,function(){
			$(".caseCon-show3-1-1").css("margin-left",0)
								   .find(".caseCon-show3-1-1")
								   .appendTo($(".caseCon-show3-1-1"));
//							flag=true; 
		})
//	}
})
//$(".btn2").click(function(){
//	if(flag){
//		flag=false;
//		$(".caseCon-show3-1-1").prependTo($(".caseCon-show3-1-1"));
//		$(".caseCon-show3-1-1").css({"marginLeft":0},1500,function(){
//			flag=true;
//		})
//	}
//})






}