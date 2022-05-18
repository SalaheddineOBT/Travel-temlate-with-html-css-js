$(document).ready(function(){
	$('.fa-bars').click(function(){
	$(this).toggleClass('fa-times');
	$('.navbar').toggleClass('navbar-Changed');
	});
	$(window).on("load scroll",function(){
		$('.fa-bars').removeClass('fa-times');
		$('.navbar').removeClass('navbar-Changed');
		if($(window).scrollTop()>30){
			$("header").addClass("header-Active");
		}else{
			$("header").removeClass("header-Active");
		}
		
		$('section').each(function(){
			let height = $(this).height();
			let top=$(window).scrollTop();
			let id=$(this).attr('id');
			let offset=$(this).offset().top-200;
			if(top>=offset && top<height+offset){
				$('.navbar ul li a').removeClass('active');
				$('.navbar').find(`[href="#${id}"]`).addClass('active');
			}
			
			
		});
	});
	$('.navbar li a').click(function(){
		$("html").css("scrollBehavior","smooth");
	});
	
});