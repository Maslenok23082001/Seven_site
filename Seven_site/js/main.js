$(document).ready(function(){
	console.log("agsidasgd");
		setTimeout(function(){
			$("#header #social ul li").addClass("animated fadeInUp");
			$("#header #menu").addClass("animated wobble");
		}, 300);
		setTimeout(function(){
			$("#header #menu").addClass("animated wobble");
		}, 100); 
		setTimeout(function(){
			$("#content #wrapper_slider").addClass("animated fadeInLeft");
		}, 200); 
		setTimeout(function(){
			$("#content #p1").addClass("animated fadeInRight");
		}, 200);
		setTimeout(function(){
			$("#content #wrapper_malesuada_recentwork #malesuada .males_div.1").addClass("animated fadeInUp");
		}, 200); 
		setTimeout(function(){
			$("#content #wrapper_malesuada_recentwork #malesuada .males_div.2").addClass("animated fadeInUp");
		}, 300);
		setTimeout(function(){
			$("#content #wrapper_malesuada_recentwork #malesuada .males_div.3").addClass("animated fadeInUp");
		}, 400); 

	$(window).scroll(function(){
		$(".mov").each(function(){
			var imagePos = $(this).offset().top;
			var topofwindow = $(window).scrollTop();
			if (imagePos < topofwindow+900) {
				$(this).addClass("animated fadeInUpBig");
			}
		});
	}); 


	$("#totop").click(function(){
		$("body").animate({scrollTop : 0}, 800);
	});

});