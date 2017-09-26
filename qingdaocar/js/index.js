var flag1 = true,flag2 = true,flag3 = true;
time1 = setInterval(function(){
	$(".swiper-slide h5 img").fadeOut(1000);
	$(".swiper-slide h5").animate({
		bottom:"5%",
	},1000,function(){
		$(".swiper-slide h5").css({
			bottom:0
		});
		$(".swiper-slide h5 img").show();
	})
},1020);

time2 = setInterval(function(){
	$(".Slide3 h2 img").animate({
		top:"12%",
		right:"29%"
	},1000,function(){
		$(".Slide3 h2 img").css({
			top:"14%",
			right:"25%"
		})
	})
},1000);

$(".Slide3 h2 div").eq(0).click(function(){
	if(flag1){
		$(".Slide3 h4").animate({
		top:"10%",
		left:"10%"
		},100);
		flag1 = false;
		console.log(flag1);
	}else{
		$(".Slide3 h4").animate({
		top:"30%",
		left:"-30%"
		},100);
		flag1 = true;
	}
});
$(".Slide3 h2 div").eq(1).click(function(){
	if(flag2){
		$(".Slide3 h4 img").eq(1).css({
		display:"block"
		})
		flag2 = false;
	}else{
		$(".Slide3 h4 img").eq(1).css({
		display:"none"
		});
		flag2 = true;
	}
})
$(".Slide3 h2 div").eq(2).click(function(){
	if(flag3){
		$(".Slide3 h4").animate({
		top:"10%",
		left:"-60%"
		},100);
		flag3 = false;
	}else{
		$(".Slide3 h4").animate({
		top:"30%",
		left:"-30%"
		},100);
		flag3 = true;
	}
	
})
var q = true;
	$(".Slide4 h1 img").eq(0).click(function(){
		if(q){
			var n = 0;
			time3 = setInterval(function(){
			n++;
			if(n>71){
				n = 0;
			}
			$("#box img").eq(n).show().siblings().hide();
			},50);
			q = false;
		}else{
			clearInterval(time3);
			q = true;
		}
	})
var scale=1;
$(".jia").click(function(){
	scale+=0.5;
	if(scale>=2){scale=2}
	$("#box img").css("transform","scale("+scale+")")
});

$(".jian").click(function(){
	scale-=0.5;
	if(scale<=0.5){scale=0.5}
	$("#box img").css("transform","scale("+scale+")")
});

$(".Slide4 h1 img").eq(1).click(function(){
	$("#box img").css({
		width:"23rem"	
	})
	$("#box").css({
		left:"1.5rem",
		top:"3rem"
	})
	$(".Slide4 h1 img").eq(1).click(function(){
		$("#box img").css({
		width:"30rem"	
	})
	$("#box").css({
		left:"-3rem",
		top:"1rem"
	})
	})
});

time4 = setInterval(function(){
	$(".Slide5 h6").animate({
		top:"12%",
		right:"29%"
	},1000,function(){
		$(".Slide5 h6").css({
			top:"14%",
			right:"25%"
		})
	})
},1000);

$(".sa").click(function(){
	$(".sa").fadeOut(100);
	$(".sb").fadeOut(100,function(){
		$(".q").fadeIn(1000);
		$(".w").fadeIn(1000,function(){
			$(".q").fadeOut(1000);
			$(".w").fadeOut(1000,function(){
				$(".e").fadeIn(1000);
		        $(".r").fadeIn(1000,function(){
		        	$(".e").fadeOut(1000);
					$(".r").fadeOut(1000,function(){
						$(".sa").css("display","block")
						$(".sb").css("display","block");
					});				
		        });
			});
		});
	});	
});

time6 = setInterval(function(){
	$(".Slide6 .meng div").animate({
	fontSize:"1.9rem"
},1000,function(){
	$(".Slide6 .meng div").css({
		fontSize:"1.6rem"
	})
})
},1000);

$(".Slide6 .meng img").click(function(){
	$(".Slide6 .meng").hide();
});
$(".Slide6 .meng div").click(function(){
	$(".Slide6 .meng").hide();
})

time7 = setInterval(function(){
	$(".Slide7 h6 img").animate({
	left:"30%",
	bottom:"7.5%"
},1000,function(){
	$(".Slide7 h6 img").css({
		left: "36%",
		bottom: "5%"
	})
})
},1000);