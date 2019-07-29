window.onload = function(){
	var oPreload = document.getElementById('preload');
	var oHome = document.getElementById('home');
	var oNav = document.getElementById('nav');
	var oFadeTrainer = document.getElementById('fadeTrainer');
	var oFadeBlock = document.getElementById('FadeBlock');
	var oAbout = document.getElementById('about');
	var aFade = oHome.getElementsByClassName('changeFade')[0];
	var aImg = aFade.getElementsByTagName('img');
	var num = 0;
	// var scrollPos;

	// 加载部分完成后隐藏
	var timer = setTimeout(function(){
		oPreload.style.display='none';
	},1000)

	//banner图循环播放
	function changeImg(){
		aImg[num].className = 'unselect';
		num++;
		num%=aImg.length;
		var index = num;
		aImg[index].className = 'select';
	}
	setInterval(changeImg,3000);

	// 检测鼠标滚动距离
 
     
	function getScrollTop() { 
        if(window.pageYOffset) {  
        	scrollPos = window.pageYOffset; 
    	}else if(document.compatMode && document.compatMode != 'BackCompat'){  
        	scrollPos = document.documentElement.scrollTop; 
        }else if(document.body) { 
        	scrollPos = document.body.scrollTop;
        }
        console.log(scrollPos);
	}

	// 鼠标向下滚动时出现导航

	function animateEvent(){
		getScrollTop();
		if(scrollPos!==0){
			oNav.className = 'navbar navbar-default navbar-fixed-top sticky-navigation navdown';
		}
		if(scrollPos===0){
			oNav.className = 'navbar navbar-default navbar-fixed-top sticky-navigation navup';
		}
		if(280<scrollPos){
			oAbout.className = 'fadeInUp col-md-4 col-sm-12';
		}
		if(350<scrollPos){
			oFadeBlock.className = 'fadeInUp';
		}
		if(850<scrollPos){
			oFadeTrainer.className = 'fadeInUp col-md-12 col-sm-12'
		}
	}
	animateEvent();
	document.onscroll = animateEvent;

	


}
	