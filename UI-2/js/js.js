// index页面的设置
$(function(){
	
	
	headerHeight();
	mediateHeight();
	courseHeight();
	feedHeight();
	

	
	//当滚动条发生变化的时候
	var data = $('#data').offset().top;
	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		if(winTop > data-500){
			count(0,2530,10);
			count(1,6780,20);
			count(2,1060,5);
			count(3,12400,50);
//			console.log(winTop > data);
		}
	});
	
	//增加函数
function count(index,num,and){
	var x = 0;
	var t = setInterval(function(){
		x+=and;
			$('.ds').eq(index).find('h1').html(x);
		if(x===num){
			clearTimeout(t);
			data = 9999999999999999999999999999;
		   }
		},1); 
}
	
	
});

/**************************************************************************/

//设置header部分的高度
function headerHeight(){
	var winHeight = $(window).height();
	$('header').css('height',winHeight+'px');
}

//设置header部分的高度
function mediateHeight(){
	var winHeight = $(window).height();
	$('.mediate').css('height',winHeight+'px');
}

// 对所有页面的设置

	
	//当滚动条发生变化时被触发
	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		
		//当距离大于指定高度给导航添加css样式
		if(winTop > 10){
		   $('nav').addClass('active');
		}else{
		   $('nav').removeClass('active');
		}
	});
	