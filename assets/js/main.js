/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Nice Select Js
03. Data Background
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. Body overlay Js
08. Sticky Header Js
09. Slider Activation Area 
10. Blog Gallery Post Activation
11. Folks animation
12. Counter Animation
13. magnificPopup Animation
14. Popup Video Animation
16. Button hover animation
17. Mouse Custom Cursor 
18. hover reveal for image
19. hover reveal for text
20. Scroll animation
21. Start back to Top 
22. MagnificPopup img view
23. MagnificPopup video view
24. Wow Js
25. Counter Js
26. header height
27.Jquery Appear raidal
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// 02. Nice Select Js
	$('select').niceSelect();

	////////////////////////////////////////////////////
	// 03. Data Background
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// 04. Menu Controls JS
	$('.tp-main__menu nav > ul > li').slice(-1).addClass('menu-last');


	if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;

		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='far fa-angle-right'></i>";

			self.append(function () {
				return arrowBtn;
			});

			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("dropdown-opened");
				self.parent().toggleClass("expanded");
				self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
				self.parent().parent().children(".tp-submenu").slideToggle();


			});

		});
	}


	////////////////////////////////////////////////////
	// 05. Offcanvas Js
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});

	$(".tp-offcanvas-close-btn").on("click", function () {
		$(".tp-offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 06. Search Js
	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});

	$(".tp-search-close-btn").on("click", function () {
		$(".tp-search-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 07. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".tp-offcanvas__area").removeClass("offcanvas-opened");
		$(".tp-search-area").removeClass("opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 08. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
			$("#header-sticky-2").removeClass("header-sticky-2");
		} else {
			$("#header-sticky").addClass("header-sticky");
			$("#header-sticky-2").addClass("header-sticky-2");
		}
	});

	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$(".tp-side-menu-5").removeClass("sticky-active");
		} else {
			$(".tp-side-menu-5").addClass("sticky-active");
		}
	});


	////////////////////////////////////////////////////
	// ScrollSmoother
	ScrollSmoother.create({
		smooth: 1.2,
		effects: true,
		smoothTouch: 0.5,
		normalizeScroll: false,
		ignoreMobileResize: true,
	});


	////////////////////////////////////////////////////
	// Hero start updated by nestro
	let heroSlider = new Swiper('.tp-hero-2-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: false,
		speed: 1000,
		spaceBetween: 20,
		effect: 'slide',

		pagination: {
			el: ".swiper-pagination.hero2-pg",
			type: "fraction",
			formatFractionCurrent: function (number) {
				return number < 10 ? '0' + number : number;
			},
			formatFractionTotal: function (number) {
				return number < 10 ? '0' + number : number;
			},
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' +
					' / ' +
					'<span class="' + totalClass + '"></span>';
			}
		},

		navigation: {
			prevEl: '.hero2-prev',
			nextEl: '.hero2-next',
		},
	});

	// text-slider updated by nestro
	var tp_feature_slide = new Swiper(".tp-text__slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// Treatment  updated by nestro
	var treatmentSlider = new Swiper('.tp-treatment__active', {
		loop: true,
		speed: 1500,
		autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		},
		breakpoints: {
			1400: {
				slidesPerView: 6,
				spaceBetween: 60,
			},
			1300: {
				slidesPerView: 5,
				spaceBetween: 60,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 50,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			0: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},

		navigation: {
			prevEl: '.treat-prev',
			nextEl: '.treat-next',
		},

		pagination: {
			el: ".swiper-pagination.treat-pg",
			clickable: true,
		},
	});

	// testimonial
	let testiSlider = new Swiper('.tp-testimonial-active', {
		slidesPerView: 2,
		loop: true,
		autoplay: false,
		speed: 1000,
		spaceBetween: 20,
		effect: 'slide',
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},

		pagination: {
			el: ".swiper-pagination.tp-testi-pg",
			type: "fraction",
			formatFractionCurrent: function (number) {
				return number < 10 ? '0' + number : number;
			},
			formatFractionTotal: function (number) {
				return number < 10 ? '0' + number : number;
			},
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' +
					' / ' +
					'<span class="' + totalClass + '"></span>';
			}
		},

		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		}
	});

	// brand  updated by nestro
	var BrandSlider = new Swiper('.tp-brand__active', {
		slidesPerView: 1,
		loop: true,
		speed: 2500,
		autoplay: {
			delay: 1,
			disableOnInteraction: false,
		},
		breakpoints: {
			1400: {
				slidesPerView: 6,
				spaceBetween: 130,
			},
			1300: {
				slidesPerView: 5,
				spaceBetween: 60,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 50,
			},
			769: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			0: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	});

	// brand mouse hover stop
	const el = document.querySelector('.tp-brand__active');

	if (el) {
		el.addEventListener('mouseenter', () => {
			BrandSlider.autoplay.stop();
		});
		el.addEventListener('mouseleave', () => {
			BrandSlider.autoplay.start();
		});
	}

	// Image Zoom animation
	document.querySelectorAll(".tp-img-anim").forEach(el => {

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top 85%",
				toggleActions: "play none none reverse",
			}
		});

		tl.from(el.querySelector("img"), {
			scale: 1.5,
			duration: 1.3,
			ease: "power3.out"
		}).from(el, {
			scale: 0.9,
			duration: 1.3,
			ease: "power3.out"
		}, "<");
	});

	/////////////////////////////////////////////////////
	document.querySelectorAll(".tp-chars").forEach(el => {

		let tpCharsAnim = new SplitText(el, {
			type: "chars,lines",
			linesClass: "tp-line"
		});

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				end: "bottom 60%",
				toggleActions: "play none none reverse",
			}
		});

		tl.from(tpCharsAnim.chars, {
			y: 100,
			opacity: 0,
			duration: 1.5,
			stagger: 0.02,
			ease: "back.out(1.7)"
		});

	});
	/////////////////////////////////////////////////////


	/////////////////////////////////////////////////////
	// Fade Animation
	let fadeArray_items = document.querySelectorAll(".tp-fade");
	if (fadeArray_items.length > 0) {
		const fadeArray = gsap.utils.toArray(".tp-fade")
		fadeArray.forEach((item, i) => {
			var fade_direction = "bottom"
			var onscroll_value = 1
			var duration_value = 1.15
			var fade_offset = 50
			var delay_value = 0.15
			var ease_value = "power2.out"

			if (item.getAttribute("data-fade-offset")) {
				fade_offset = item.getAttribute("data-fade-offset");
			}
			if (item.getAttribute("data-duration")) {
				duration_value = item.getAttribute("data-duration");
			}

			if (item.getAttribute("data-fade-from")) {
				fade_direction = item.getAttribute("data-fade-from");
			}
			if (item.getAttribute("data-on-scroll")) {
				onscroll_value = item.getAttribute("data-on-scroll");
			}
			if (item.getAttribute("data-delay")) {
				delay_value = item.getAttribute("data-delay");
			}
			if (item.getAttribute("data-ease")) {
				ease_value = item.getAttribute("data-ease");
			}

			let animation_settings = {
				opacity: 0,
				ease: ease_value,
				duration: duration_value,
				delay: delay_value,
			}

			if (fade_direction == "top") {
				animation_settings['y'] = -fade_offset
			}
			if (fade_direction == "left") {
				animation_settings['x'] = -fade_offset;
			}

			if (fade_direction == "bottom") {
				animation_settings['y'] = fade_offset;
			}

			if (fade_direction == "right") {
				animation_settings['x'] = fade_offset;
			}

			if (onscroll_value == 1) {
				animation_settings['scrollTrigger'] = {
					trigger: item,
					start: 'top 85%',
				}
			}
			gsap.from(item, animation_settings);
		})
	}
	/////////////////////////////////////////////////////


	/////////////////////////////////////////////////////
	// 21. Image Reveal Animation 
	let imgs_reveal = document.querySelectorAll(".img-reveal");

	imgs_reveal.forEach((container) => {
		let image = container.querySelector("img");
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				toggleActions: "restart none none reset",
				once: true,
			}
		});

		tl.set(container, { autoAlpha: 1 });
		tl.from(container, 1.5, {
			xPercent: -100,
			ease: Power2.out
		});
		tl.from(image, 1.5, {
			xPercent: 100,
			scale: 1.3,
			delay: -1.5,
			ease: Power2.out
		});
	});
	/////////////////////////////////////////////////////

	////////////////////////////////////////////////////
	// 10. Blog Gallery Post Activation
	var tpgallerypost = new Swiper('.tp-blog-gallery-post-active', {
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: true,
		effect: 'slide',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			prevEl: '.tp-blog-gallery-post-arrow-prev',
			nextEl: '.tp-blog-gallery-post-arrow-next',
		},
	});


	// /*----------- Magnate Animation ----------*/
	var magnets = document.querySelectorAll('.gsap-magnetic')
	var strength = 50

	magnets.forEach((magnet) => {
		magnet.addEventListener('mousemove', moveMagnet);
		magnet.addEventListener('mouseout', function (event) {
			TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
		});
	});

	function moveMagnet(event) {
		var magnetButton = event.currentTarget
		var bounding = magnetButton.getBoundingClientRect()

		//console.log(magnetButton, bounding)

		TweenMax.to(magnetButton, 1, {
			x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
			y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
			ease: Power4.easeOut
		})
	}

	/************lettering js***********/
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter),
			inject = '';
		if (a.length) {
			$(a).each(function (i, item) {
				inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
			});
			t.empty().append(inject);
		}
	}

	var methods = {
		init: function () {

			return this.each(function () {
				injector($(this), '', 'char', '');
			});

		},

		words: function () {

			return this.each(function () {
				injector($(this), ' ', 'word', ' ');
			});

		},

		lines: function () {

			return this.each(function () {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function (method) {
		// Method calling logic
		if (method && methods[method]) {
			return methods[method].apply(this, [].slice.call(arguments, 1));
		} else if (method === 'letters' || !method) {
			return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
		}
		$.error('Method ' + method + ' does not exist on jQuery.lettering');
		return this;
	};

	$(".tp-circle-anime").lettering();


	/////////////////////////////////////////////////////
	// 13. magnificPopup Animation
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.popup-gallary-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/////////////////////////////////////////////////////
	// 14. Popup Video Animation
	$(".popup-video").magnificPopup({
		type: "iframe",
	});



	// before-after
	if ($(".tp-before-after").length > 0) {
		$('.tp-before-after').beforeAfter({
			movable: true,
			clickMove: true,
			position: 50,
			separatorColor: '#fafafa',
			bulletColor: '#fafafa',
			onMoveStart: function (e) {
				console.log(event.target);
			},
			onMoving: function () {
				console.log(event.target);
			},
			onMoveEnd: function () {
				console.log(event.target);
			},
		});
	}


	/////////////////////////////////////////////////////
	// 15. Mouse Move Here
	var moveSection = $(".tp-mouse-move-section");
	var moveSectionElements = $(".tp-mouse-move-element");

	if (moveSection && moveSectionElements) {
		moveSection.on("mousemove", function (e) {
			var x = e.clientX
			var y = e.clientY
			let viewportWidth = window.innerWidth;
			let viewportHeight = window.innerHeight;
			let center = viewportWidth / 2
			let centerHeight = innerHeight / 2

			if (x > center) {
				gsap.to(moveSectionElements, {
					x: 20,
					duration: 2,
					ease: "power4.out"
				})
			}
			else {
				gsap.to(moveSectionElements, {
					x: -20,
					scale: 1.1,
					duration: 2,
					ease: "power4.out"
				})
			}
			if (y > centerHeight) {
				gsap.to(moveSectionElements, {
					y: 5,
					duration: 2,
					ease: "power4.out"
				})
			}
			else {
				gsap.to(moveSectionElements, {
					y: -5,
					duration: 2,
					ease: "power4.out"
				})
			}
		});
	}

	////////////////////////////////////////////////////
	// 16. Button hover animation

	var hoverBtns = gsap.utils.toArray(".tp-hover__btn-wrap");

	const hoverBtnItem = gsap.utils.toArray(".tp-hover__btn-item");
	hoverBtns.forEach((btn, i) => {
		$(btn).mousemove(function (e) {
			callParallax(e);
		});
		function callParallax(e) {
			parallaxIt(e, hoverBtnItem[i], 80);
		}

		function parallaxIt(e, target, movement) {
			var $this = $(btn);
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			gsap.to(target, 0.5, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
				ease: Power2.easeOut,
			});
		}
		$(btn).mouseleave(function (e) {
			gsap.to(hoverBtnItem[i], 0.5, {
				x: 0,
				y: 0,
				ease: Power2.easeOut,
			});
		});
	});

	////////////////////////////////////////////////////
	// 17. Mouse Custom Cursor 
	function itCursor() {
		var myCursor = jQuery(".mouseCursor");
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n,
					i = 0,
					o = !1;
				(window.onmousemove = function (s) {
					o ||
						(t.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(e.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(n = s.clientY),
						(i = s.clientX);
				}),
					$("body").on("mouseenter", "button, a, .cursor-pointer", function () {
						e.classList.add("active"), t.classList.add("active");
					}),
					$("body").on("mouseleave", "button, a, .cursor-pointer", function () {
						($(this).is("a", "button") &&
							$(this).closest(".cursor-pointer").length) ||
							(e.classList.remove("active"),
								t.classList.remove("active"));
					}),
					(e.style.visibility = "visible"),
					(t.style.visibility = "visible");
			}
		}
	}
	itCursor();

	$(".tp-cursor-point-area").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});

	$(".tp-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});

	$(".tp-cursor-point-area-2").on("mouseenter", function () {
		$(".cursor-inner").addClass("active");
	});

	$(".tp-cursor-point-area-2").on("mouseleave", function () {
		$(".cursor-inner").removeClass("active");
	});

	// cursor style-2
	if (!$('body').hasClass("hide-magic-cursor")) {

		var magicCursor = document.getElementById("innerHTML");

		document.addEventListener("mousemove", mousemoveHandler);

		function mousemoveHandler(e) {

			var hideMagicCursor = $('.tp-work__2-item');
			hideMagicCursor.each(function (e) {
				$(this).on("mouseenter", function () {
					gsap.set(magicCursor, { opacity: 0 });
				});

				$(this).on("mouseleave", function () {
					gsap.set(magicCursor, { opacity: 1 });
				});
			})

		}
	}

	////////////////////////////////////////////////////
	// 18. hover reveal for image
	const hoverItem = document.querySelectorAll(".tp-hover__reveal-item");
	function moveImage(e, hoverItem, index) {
		const item = hoverItem.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverItem.children[index]) {
			hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
		}
	}
	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item, 1), 50);
		});
	});

	////////////////////////////////////////////////////
	// 19. hover reveal for text
	const hoverText = document.querySelectorAll(".tp-hover__reveal-text");
	function moveText(e, hoverText) {
		const item = hoverText.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverText.children[0].children[2]) {
			hoverText.children[0].children[2].style.transform = `translate(${x}px, ${y}px)`;
		}
	}

	hoverText.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveText(e, item), 100);
		});
	});

	////////////////////////////////////////////////////
	// 20. Scroll animation
	function scrollAnimi() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry)
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				} else {
					entry.target.classList.remove('show');
				}
			});
		});

		const hiddenElements = document.querySelectorAll('.tp-section-hidden');
		hiddenElements.forEach((el) => observer.observe(el));

	}
	scrollAnimi();


	////////////////////////////////////////////////////
	// 21. Start back to Top 
	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	////////////////////////////////////////////////////
	// 22. MagnificPopup img view
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	////////////////////////////////////////////////////
	// 23. MagnificPopup video view
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 24. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 25. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});


	////////////////////////////////////////////////////
	// 26. header height
	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;

		$(".tp-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
	}

	////////////////////////////////////////////////////
	// 27.Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
			var $this = $(this),
				knobVal = $this.attr('data-rel');

			$this.knob({
				'draw': function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function () {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {
				accX: 0,
				accY: -150,
			});
		});
	}


})(jQuery);