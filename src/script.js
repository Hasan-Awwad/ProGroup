// ---------Responsive-navbar-active-animation-----------
/* global $ */
var script = document.createElement('script')
script.src = "https://code.jquery.com/jquery-3.6.0.min.js"
document.head.appendChild(script)
script.onload = function () {
	$(document).ready(function () {
		function test() {
			var tabsNewAnim = $('#navbarSupportedContent');
			var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
			var activeItemNewAnim = tabsNewAnim.find('.active');
			var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
			var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
			var itemPosNewAnimTop = activeItemNewAnim.position();
			var itemPosNewAnimLeft = activeItemNewAnim.position();
			$(".hori-selector").css({
				"top": itemPosNewAnimTop.top + "px",
				"left": itemPosNewAnimLeft.left + "px",
				"height": activeWidthNewAnimHeight + "px",
				"width": activeWidthNewAnimWidth + "px"
			});
			$("#navbarSupportedContent").on("click", "li", function (e) {
				$('#navbarSupportedContent ul li').removeClass("active");
				$(this).addClass('active');
				var activeWidthNewAnimHeight = $(this).innerHeight();
				var activeWidthNewAnimWidth = $(this).innerWidth();
				var itemPosNewAnimTop = $(this).position();
				var itemPosNewAnimLeft = $(this).position();
				$(".hori-selector").css({
					"top": itemPosNewAnimTop.top + "px",
					"left": itemPosNewAnimLeft.left + "px",
					"height": activeWidthNewAnimHeight + "px",
					"width": activeWidthNewAnimWidth + "px"
				});
			});
		}
		$(document).ready(function () {
			setTimeout(function () { test(); });
		});
		$(window).on('resize', function () {
			setTimeout(function () { test(); }, 500);
		});
		
		// --------------add active class-on another-page move----------
		$(document).ready(function ($) {
			// Get current path and find target link
			var path = window.location.pathname.split("/").pop();

			// Account for home page with empty path
			if (path == '') {
				path = 'index.html';
			}

			var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
			// Add active class to target link
			target.parent().addClass('active');

			$('.footer_scroll').on('click', function(e) {
				e.preventDefault();
				var targetOffset = $('#footer').offset().top;

				$('html, body').animate({
					scrollTop: targetOffset
				}, 500);
			});

			$('.home_scroll').on('click', function(e) {
				e.preventDefault();
				var targetOffset = $('.navbar').offset().top;

				$('html, body').animate({
					scrollTop: targetOffset
				}, 500);
			});
		});

		// Add active class on another page linked
		// ==========================================
		// $(window).on('load',function () {
		//     var current = location.pathname;
		//     console.log(current);
		//     $('#navbarSupportedContent ul li a').each(function(){
		//         var $this = $(this);
		//         // if the current path is like this link, make it active
		//         if($this.attr('href').indexOf(current) !== -1){
		//             $this.parent().addClass('active');
		//             $this.parents('.menu-submenu').addClass('show-dropdown');
		//             $this.parents('.menu-submenu').parent().addClass('active');
		//         }else{
		//             $this.parent().removeClass('active');
		//         }
		//     })
		// });
	});
};

