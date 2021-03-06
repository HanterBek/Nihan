

$(document).ready(function() {
	$('.responsive-nav').slideAndSwipe();
});




$(function() {
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 1 ? $('.main-nav').addClass('navShadow') : $('.main-nav').removeClass('navShadow');
		windowTop > 1 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('.logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});


	
});



var swiper = new Swiper('.main-slider', {
	spaceBetween: 30,
	loop	:	true,
	parallax: true,
	speed: 1000,
	autoplay: {
		delay: 25000,
		disableOnInteraction: false,
	},
	
	pagination: {
		el: '.main-pagination',
		dynamicBullets: true,
	},

});



var swiper = new Swiper('.second-container', {
	loop: true,
	effect: 'cube',
	grabCursor: true,
	speed: 800,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});



var swiper = new Swiper('.third-container', {
	loop: true,
	slidesPerView: 4,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	breakpoints: {
		1380: {
			slidesPerView: 3,
		},
		1250: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		800: {
			slidesPerView: 2,
		},
		500: {
			slidesPerView: 1,
		},
	}
});



var swiper = new Swiper('.fourth-container', {
	effect: 'coverflow',
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows : true,
	},
});

/* uparrow */
$(window).scroll(function() {

	if($(this).scrollTop() > 350) {

		$('#toTop').fadeIn();

	} else {

		$('#toTop').fadeOut();

	}

});

$('#toTop').click(function() {

	$('body,html').animate({scrollTop:0},1500);

});

new WOW().init();

	//typed.js
$('document').ready(function(){
	var typed = new Typed ('#typed',{
		strings: ["Khiva is a city in the Khorezm region of Uzbekistan.","Historical inner city of Khiva - the pearl of the Khorezm oasis."],
		startDelay: 4000 ,
		typeSpeed: 80,
		backSpeed: 40,
		loop: true,
	});
});
$('document').ready(function(){
		var typed = new Typed ('#myTyped',{
			strings: ["Welcome to UZBEKISTAN!"],
			startDelay: 0 ,
			typeSpeed: 100,
			backSpeed: 60,
		});
	});
$('document').ready(function(){
		var typed = new Typed ('#typed1',{
			strings: ["Bukhara is an ancient Uzbek city through which the Great Silk Road.","The Middle Ages city was a major center of Islamic theology and culture."],
			startDelay: 4000 ,
			typeSpeed: 80,
			backSpeed: 40,
			loop: true,
		});
	});
$('document').ready(function(){
	var typed = new Typed ('#myTyped1',{
		strings: ["Welcome to UZBEKISTAN!"],
		startDelay: 0 ,
		typeSpeed: 100,
		backSpeed: 60,
	});
});

$('document').ready(function(){
		var typed = new Typed ('#typed2',{
			strings: ["Registan is an area in the center of Samarkand.","'Registan' was called the main square in the cities of the Middle East."],
			startDelay: 4000 ,
			typeSpeed: 80,
			backSpeed: 40,
			loop: true,
		});
	});
$('document').ready(function(){
	var typed = new Typed ('#myTyped2',{
		strings: ["Welcome to UZBEKISTAN!"],
		startDelay: 0 ,
		typeSpeed: 100,
		backSpeed: 60,
	});
});