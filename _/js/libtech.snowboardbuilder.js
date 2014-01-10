/*

    Lib Tech DIY Builder - lib-tech.com
    VERSION 1.1
    AUTHOR brian.behrens@mervin.com

    DEPENDENCIES:
    - jQuery v1.10.2
    - Shopatron API v2.2.0
    - Modernizr v2.6.2
    - Respond.js
    - TweenMax beta 1.10.2
    - LIBTECH.main v2.0
    - BxSlider v4.1.1

*/
var boardData = [{
	"Model": "Skate Banana",
	"Contour": "BTX",
	"BaseSku": "3223275",
	"BasePriceUS": "639.95",
	"BasePriceCA": "664.95",
	"KnifecutSku": "3223276",
	"KnifecutPriceUS": "669.95",
	"KnifecutPriceCA": "694.95",
	"HPSku": "",
	"HPPriceUS": "",
	"HPPriceCA": "",
	"KifecutHpSku": "",
	"KifecutHpPriceUS": "",
	"KifecutHpPriceCA": "",
	"Sizes": "145N | 148N | 154 | 156",
	"ContactLength": "145N - 108 | 148N - 111 | 154 - 115 | 156 - 117",
	"Sidecut": "145N - 7.9 | 148N - 8.1 | 154 - 8.2 | 156 - 8.3",
	"WaistWidth": "145N - 23.9 | 148N - 24.2 | 154 - 25.3 | 156 - 25.5",
	"Flex": "145N - 4.5 | 148N - 5 | 154 - 5 | 156 - 6",
	"BoardTagline": "The Original Rocker Snowboard",
	"BoardDescription": "Fun, easy to ride and high performance. Kills powder, rails, hardpack and ice.",
	"ShapeDescription": "True Twin",
	"Sidewall Options": "",
	"Custom KnifeCut Color Options": "",
	"ContourImage": "bb-contour-btx.gif",
	"HPDetail": ""
}, {
	"Model": "Attack Banana",
	"Contour": "EC2 BTX",
	"BaseSku": "3223277",
	"BasePriceUS": "729.95",
	"BasePriceCA": "759.95",
	"KnifecutSku": "3223278",
	"KnifecutPriceUS": "759.95",
	"KnifecutPriceCA": "789.95",
	"HPSku": "",
	"HPPriceUS": "",
	"HPPriceCA": "",
	"KifecutHpSku": "",
	"KifecutHpPriceUS": "",
	"KifecutHpPriceCA": "",
	"Sizes": "151N | 153 | 156 |159",
	"ContactLength": "151N - 111 | 153 - 113 | 156 - 116 | 159 - 119",
	"Sidecut": "151N - 8.1 | 153 - 8.2 | 156 - 8.3 | 159 - 8.4",
	"WaistWidth": "151N - 24.7 | 153 - 25.1 | 156 - 25.3 | 159 - 25.5",
	"Flex": "151N - 5 | 153 - 6 | 156 - 6.5 | 159 - 6.5",
	"BoardTagline": "All Terrain Techno Quiver Killer",
	"BoardDescription": "Great for playing in the park, with enough stability to feel powerful anywhere and still float effortlessly in the pow.",
	"ShapeDescription": "True Twin",
	"Sidewall Options": "",
	"Custom KnifeCut Color Options": "",
	"ContourImage": "bb-contour-ec2-btx.gif",
	"HPDetail": ""
}, {
	"Model": "Travis Rice Pro Blunt",
	"Contour": "C2 BTX",
	"BaseSku": "3223279",
	"BasePriceUS": "709.95",
	"BasePriceCA": "729.95",
	"KnifecutSku": "3223280",
	"KnifecutPriceUS": "739.95",
	"KnifecutPriceCA": "759.95",
	"HPSku": "3223281",
	"HPPriceUS": "849.95",
	"HPPriceCA": "$XXX.XX",
	"KifecutHpSku": "3223282",
	"KifecutHpPriceUS": "879.95",
	"KifecutHpPriceCA": "$XXX.XX",
	"Sizes": "155 | 157",
	"ContactLength": "155 - 119 | 157 - 121",
	"Sidecut": "155 - 8.1 | 157 - 8.2",
	"WaistWidth": "155 - 25.5 | 157 - 25.8",
	"Flex": "155 - 6.5 | 157 - 7",
	"BoardTagline": "All Terrain Freestyle Geometries",
	"BoardDescription": "Designed with plans to take over the world. A perfect board to change snowboarding with.",
	"ShapeDescription": "Twin Blunt",
	"Sidewall Options": "",
	"Custom KnifeCut Color Options": "",
	"ContourImage": "bb-contour-c2-btx.gif",
	"HPDetail": ""
}, {
	"Model": "Travis Rice Pro Pointy",
	"Contour": "C2 BTX",
	"BaseSku": "3223279",
	"BasePriceUS": "709.95",
	"BasePriceCA": "729.95",
	"KnifecutSku": "3223280",
	"KnifecutPriceUS": "739.95",
	"KnifecutPriceCA": "759.95",
	"HPSku": "3223281",
	"HPPriceUS": "849.95",
	"HPPriceCA": "$XXX.XX",
	"KifecutHpSku": "3223282",
	"KifecutHpPriceUS": "879.95",
	"KifecutHpPriceCA": "$XXX.XX",
	"Sizes": "161.5 | 164.5",
	"ContactLength": "161.5 - 124.5 | 164.5 - 127",
	"Sidecut": "161.5 - 8.4 | 164.5 - 8.5",
	"WaistWidth": "161.5 - 26 | 164.5 - 26.2",
	"Flex": "161.5 - 7 | 164.5 - 7",
	"BoardTagline": "All Terrain Freestyle Geometries",
	"BoardDescription": "Designed with plans to take over the world. A perfect board to change snowboarding with.",
	"ShapeDescription": "Pointy Pow",
	"Sidewall Options": "",
	"Custom KnifeCut Color Options": "",
	"ContourImage": "bb-contour-c2-btx.gif",
	"HPDetail": ""
}, {
	"Model": "TRS",
	"Contour": "XC2 BTX",
	"BaseSku": "3223283",
	"BasePriceUS": "709.95",
	"BasePriceCA": "739.95",
	"KnifecutSku": "3223284",
	"KnifecutPriceUS": "739.95",
	"KnifecutPriceCA": "769.95",
	"HPSku": "3223285",
	"HPPriceUS": "849.95",
	"HPPriceCA": "$XXX.XX",
	"KifecutHpSku": "3223286",
	"KifecutHpPriceUS": "879.95",
	"KifecutHpPriceCA": "$XXX.XX",
	"Sizes": "148N | 151N | 154 | 157 | 159",
	"ContactLength": "148N - 113 |151N - 114 | 154 - 115 | 157 - 117 | 159 - 119",
	"Sidecut": "148N - 7.9 | 151N - 8.1 | 154 - 8.2 | 157 - 8.3 | 159 - 8.3",
	"WaistWidth": "148N - 23.7 |151N - 24.7 | 154 - 25.3 | 157 - 25.3 | 159 - 25.3",
	"Flex": "148N - 5 |151N - 5 | 154 - 5 | 157 - 6 | 159 - 6",
	"BoardTagline": "Rider Designed True Twin Power Banana",
	"BoardDescription": "The twin shape has lengthened camber under foot for increased end to end stability.",
	"ShapeDescription": "True Twin",
	"Sidewall Options": "",
	"Custom KnifeCut Color Options": "",
	"ContourImage": "bb-contour-xc2-btx.gif",
	"HPDetail": ""
}, {
	"Model": "Hot Knife",
	"Contour": "C3 BTX",
	"BaseSku": "3223287",
	"BasePriceUS": "669.95",
	"BasePriceCA": "689.95",
	"KnifecutSku": "3223288",
	"KnifecutPriceUS": "699.95",
	"KnifecutPriceCA": "719.95",
	"HPSku": "",
	"HPPriceUS": "",
	"HPPriceCA": "",
	"KifecutHpSku": "",
	"KifecutHpPriceUS": "",
	"KifecutHpPriceCA": "",
	"Sizes": "156 | 159",
	"ContactLength": "156 - 117 | 159 - 120",
	"Sidecut": "156 - 8.2 | 159 - 8.3",
	"WaistWidth": "156 - 25.3 | 159 - 25.5",
	"Flex": "156 - 5.5 | 159 - 6.5",
	"BoardTagline": "Agressive Twin Freestyle/Freeride",
	"BoardDescription": "A catchfree freestyle freedom, combined with the precise control, power pop, and stability of traditional camber.",
	"ShapeDescription": "Twin Freeride",
	"Sidewall Options": "",
	"Custom KnifeCut Color Options": "",
	"ContourImage": "bb-contour-c3-btx.gif",
	"HPDetail": ""
}, {
	"Model": "Skunk Ape",
	"Contour": "C2 BTX",
	"BaseSku": "3223289",
	"BasePriceUS": "709.95",
	"BasePriceCA": "739.95",
	"KnifecutSku": "3223290",
	"KnifecutPriceUS": "739.95",
	"KnifecutPriceCA": "769.95",
	"HPSku": "3223291",
	"HPPriceUS": "849.95",
	"HPPriceCA": "$XXX.XX",
	"KifecutHpSku": "3223292",
	"KifecutHpPriceUS": "879.95",
	"KifecutHpPriceCA": "$XXX.XX",
	"Sizes": "161 | 165 | 169",
	"ContactLength": "161 - 121 | 165 - 124 | 169 - 127",
	"Sidecut": "161 - 8.5 | 165 - 8.6 | 169 - 8.6",
	"WaistWidth": "161 - 26.8 | 165 - 26.8 | 169 - 26.8",
	"Flex": "161 - 7 | 165 - 7 | 169 - 7",
	"BoardTagline": "Big Wide Freestyle/Freeride",
	"BoardDescription": "Big guys need powerful setups. Perfect for todays progressive freestyle or powder ape looking for the ultimate in performance.",
	"ShapeDescription": "Directional Twin",
	"Sidewall Options": "",
	"Custom KnifeCut Color Options": "",
	"ContourImage": "bb-contour-c2-btx.gif",
	"HPDetail": ""
}, {
	"Model": "Banana Blaster",
	"Contour": "BTX",
	"BaseSku": "3223297",
	"BasePriceUS": "469.95",
	"BasePriceCA": "479.95",
	"KnifecutSku": "3223298",
	"KnifecutPriceUS": "499.95",
	"KnifecutPriceCA": "509.95",
	"HPSku": "",
	"HPPriceUS": "",
	"HPPriceCA": "",
	"KifecutHpSku": "",
	"KifecutHpPriceUS": "",
	"KifecutHpPriceCA": "",
	"Sizes": "130 | 140",
	"ContactLength": "130 - 95 | 140 - 105",
	"Sidecut": "130 - 6.9 | 140 - 7.1",
	"WaistWidth": "130 - 23 | 140 - 23.5",
	"Flex": "130 - 4 | 140 - 5",
	"BoardTagline": "The Ultimate in Fun and Progression",
	"BoardDescription": "Learn everything faster and reduce scorpion factor by at least 200%",
	"ShapeDescription": "True Twin",
	"Sidewall Options": "",
	"Custom KnifeCut Color Options": "",
	"ContourImage": "bb-contour-btx.gif",
	"HPDetail": ""
}];
var contourData = {
	"BTX": {
		"ContourTitle": "Banana Tech & Magne-Traction",
		"ContourDescription": "Revolutionary all terrain freestyle banana blend. Rocker between your feet with flat to mild camber to contact points. Mild tip pressure for unreal float and jibbing, solid pressure between your feet for easy turning and great ice edge hold."
	},
	"EC2 BTX": {
		"ContourTitle": "Eliptical Camber/Banana & Magne-Traction .5",
		"ContourDescription": "Quiver killing freestyle blend halfway between original Banana Tech and C2. Medium tip and tail pressure for end-to end-stability and pop combined with a medium amount of pressure between your feet for unreal carving and float in pow."
	},
	"C2 BTX": {
		"ContourTitle": "Power Banana/Camber Blend & Magne-Traction",
		"ContourDescription": "Our favorite camber rocker blend for aggressive power snowboarders. Solid tip and tail pressure for power, pop, precision and end-to-end stability combined with a medium amount of pressure between your feet for float, carving and edge hold."
	},
	"XC2 BTX": {
		"ContourTitle": "Power Banana/Camber Blend & Magne-Traction",
		"ContourDescription": "A new formula of C2 with a shorter but, aggressive banana rocker combined with cambers that sit more underfoot. Extra solid tip and tail pressure for power, pop, precision and end-to-end stability combined with a medium amount of pressure between your feet for carving, edge hold on ice and float in pow."
	},
	"C3 BTX": {
		"ContourTitle": "Camber Dominant Banana & Magne-Traction .5",
		"ContourDescription": "Camber made better with the addition of mild Banana Tech rocker between your feet. Mild pressure between your feet for carving, edge grip, float in powder and our maximum tip and tail pressure for precise control, power stability and pop. The world’s best camber is a banana!"
	},
	"!BTX!": {
		"ContourTitle": "Enhanced Banana Tech & Magne-Traction",
		"ContourDescription": "A magical dynamic blend of our highest Banana Tech rocker between your feet and a secret numerical formula of camber to the contact points. Mild tip pressure for incredible float in powder, catchfree freestyle combined with solid pressure between your feet for precise carving on ice."
	}
};
var boardDescriptionData = [{
	"Artist": "Mike Parillo",
	"Type": "Tetons",
	"Color": "",
	"Description": "Mike P was originally a Lib Tech team rider along side Jamie Lynn and has built an incredible art style and career that extends way beyond snowboarding. We have had the privilege of working with him every year for decades and his stunning mind warping art is constantly improving and evolving. The Tetons painting is Mikes first oil painting and one of the first board graphics we worked with him on… it is a Lib favorite."
}, {
	"Artist": "Jamie Lynn",
	"Type": "Blue",
	"Color": "",
	"Description": "Jamie's riding and artwork are part of the foundation of Lib Tech. His bold lines and colors communicate clearly who he is. The bold lines and raw committed power he snowboards with defined freestyle snowboarding in the 90's and still inspire the very best pros today. We picked a couple classics for this project."
}, {
	"Artist": "Jamie Lynn",
	"Type": "Moon",
	"Color": "",
	"Description": "Jamie's riding and artwork are part of the foundation of Lib Tech. His bold lines and colors communicate clearly who he is. The bold lines and raw committed power he snowboards with defined freestyle snowboarding in the 90's and still inspire the very best pros today. We picked a couple classics for this project."
}, {
	"Artist": "Nick Russian",
	"Type": "Humming Bird",
	"Color": "",
	"Description": "Nick Russian is an original Lib Tech kraftsmen artist. The Emma Peel model was his vision or model both with shape and graphics, he did the art for every Emma for 12 years running. The Humming Bird we have selected was one of our shop favorites, the movement and color work really well with our eco-sublimation system and it looks great. Nick is still working at Mervin 20 years later and continues to paint and create graphics."
}, {
	"Artist": "Quincy Quigg",
	"Type": "Guitar",
	"Color": "",
	"Description": "Quincy is another Kraftsmen artist…he began working with us by making artwork with sidewalls resin and other found items around the snowboard shop. He has a style that is sometimes refer to as refined junior high but, his incredible attention to detail, unique vision and ability to cut through all the bullshit and find truth and fun in his artwork is always a treat."
}, {
	"Artist": "Ryan Davis",
	"Type": "Poly",
	"Color": "",
	"Description": "Ryan Davis is a classic Kraftsmen artist… he began working at Mervin in finishing and turned in artwork year after year. He developed a unique style of photography, surf and mountain based outdoor lifestyle imagery and painting. Ryan has done many graphics for us over the years, he is our NW rep and continues create beautiful imagery every year."
}, {
	"Artist": "Mark Gale",
	"Type": "Original Skeleton",
	"Color": "",
	"Description": "This is the Original Mark Gale skeleton graphic that all Lib Tech's began with.  At the time skeletons were completely dead and cartoons were dominating skateboarding. Our old Gnu distributor told us the artwork would never sell and refused to let us use it. We put it on every Lib Tech we built that first year and sold every one and ended up meeting a lot of Dead Heads too!"
}, {
	"Artist": "In House Creative",
	"Type": "Classic Logo",
	"Color": "",
	"Description": "After a good first year run of all skeleton graphics we also introduced a clean understated black option. For this project we are offering the clean in white and black."
}];
var boardBaseDescriptionData = [{
	"Artist": "Mike Parillo",
	"Type": "Tetons",
	"Color": "Red",
	"Description": "Mike P was originally a Lib Tech team rider along side Jamie Lynn and has built an incredible art style and career that extends way beyond snowboarding. We have had the privilege of working with him every year for decades and his stunning mind warping art is constantly improving and evolving. The Tetons painting is Mikes first oil painting and one of the first board graphics we worked with him on…it is a Lib favorite."
}, {
	"Artist": "Jamie Lynn",
	"Type": "Blue",
	"Color": "Girl",
	"Description": "Jamie's riding and artwork are part of the foundation of Lib Tech. His bold lines and colors communicate clearly who he is. The bold lines and raw committed power he snowboards with defined freestyle snowboarding in the 90's and still inspire the very best pros today. We picked a couple classics for this project."
}, {
	"Artist": "Jamie Lynn",
	"Type": "Moon",
	"Color": "Wave",
	"Description": "Jamie's riding and artwork are part of the foundation of Lib Tech. His bold lines and colors communicate clearly who he is. The bold lines and raw committed power he snowboards with defined freestyle snowboarding in the 90's and still inspire the very best pros today. We picked a couple classics for this project."
}, {
	"Artist": "Nick Russian",
	"Type": "Humming Bird",
	"Color": "",
	"Description": "Nick Russian is an original Lib Tech kraftsmen artist. The Emma Peel model was his vision or model both with shape and graphics, he did the art for every  Emma for 12 years running. The Humming Bird we have selected was one of our shop favorites, the movement and color work really well with our eco-sublimation system and it looks great. Nick is still working at Mervin 20 years later and continues to paint and create graphics."
}, {
	"Artist": "Quincy Quigg",
	"Type": "Guitar",
	"Color": "Skull",
	"Description": "Quincy is another Kraftsmen artist…he began working with us by making artwork with sidewalls resin and other found items around the snowboard shop. He has a style that is sometimes refer to as refined junior high but, his incredible attention to detail, unique vision and ability to cut through all the bullshit and find truth and fun in his artwork is always a treat."
}, {
	"Artist": "Ryan Davis",
	"Type": "Poly",
	"Color": "",
	"Description": "Ryan Davis is a classic Kraftsmen artist… he began working at Mervin in finishing and turned in artwork year after year. He developed a unique style of photography, surf and mountain based outdoor lifestyle imagery and painting. Ryan has done many graphics for us over the years, he is our NW rep and continues create beautiful imagery every year."
}, {
	"Artist": "Mark Gale",
	"Type": "Original Skeleton",
	"Color": "",
	"Description": "This is the Original Mark Gale skeleton graphic that all Lib Tech's began with. At the time skeletons were completely dead and cartoons were dominating skateboarding. Our old Gnu distributor told us the artwork would never sell and refused to let us it. We put it on every Lib Tech we built that first year and sold every one and ended up meeting a lot of Dead Heads too!"
}, {
	"Artist": "In House Creative",
	"Type": "Classic Logo",
	"Color": "",
	"Description": "After a good first year run of all skeleton graphics we also introduced a clean understated black option. For this project we are offering the clean in silver, white and black. "
}];

var LIBTECH = LIBTECH || {};

LIBTECH.snowboardbuilder = {
	config: {
		baseImgPath: 'http://www.lib-tech.com/wp-content/themes/libtech_2/_/img/bb/',
		topGraphicImg: 0, // top
		baseGraphicImg: 0, // base
		sidewallTopImg: 0,
		sidewallBottomImg: 0,
		nCurSlide: 0,
		iJSON: 0,
		bBoardShape: "",
		bBoardPrice: "",
		bTech: "",
		bSize: false,
		bHP: "",
		bTop: "",
		bDesc: "",
		bArtist: "",
		bSidewall: "",
		bSidewallDesc: "",
		bBase: "",
		bBaseArtist: "",
		bBaseDesc: "",
		bCustomBaseColor: "black",
		bCustomTextColor: "white",
		bHasCustom: false,
		bBadge: "",
		nPreviewNum: 0,
		bFirstPlay: true,
		lockHover: false,
		confirmedShapeSelection: false,
		globalNum: 0,
		isSafari: false,
		bbRegion: "",
		bbRegionCurrency: "",
		bbKnifeCutDiff: "",
		isKnifecut: "",
		isMobile: false,
		isIpad: false,
		numBoardShapes: 6,
		numTopSheets: 16,
		numSideWalls: 5,
		numBoardBases: 13,
		$mainSlider: "",
		defaultBadgeInput: "",
		defaultBaseInput: "",
		currentCarousel: "",
		showLeftMenu: true,
		carouselItemWidth: 0
	},
	init: function () {
		var self = this;
		
		// set base default colors
		self.setCustomTextColor('White');
		self.setCustomBaseColor('Black');

		self.config.$mainSlider = $('.bx-div-slider').bxSlider({
			slideMargin: 0,
			speed: 231,
			touchEnabled: false,
			pager: true,
			pagerSelector: '.pagerTop',
			controls: false,
			preventDefaultSwipeX: true,
			auto: false,
			mode: 'horizontal',
			useCSS: false,
			/*preventDefaultSwipeX:false,*/
			onSlideLoad: function () {},
			onSlideBefore: function () {
				self.advanceArrowHide();
				$('.bx-div-slider > li').css('background-image', 'none');
			},
			onSlideAfter: function () {
				// don't run first time, wait for delayed load
				if(self.config.bFirstPlay === false) {
					self.setCurrentSection();
				}
			}
		});
		self.defaultBadgeInput = $('.board-badge-input-holder .board-badge-input').val();
		self.defaultBaseInput = $('#knifecut-base-controls .knifecut-input #board-text').val();
		$('.step1-board').css("left", "0px");
		
		$(window).on('load', function () {
			delayLoad();
		});
		$(window).on('resize', function () {
			waitForFinalEvent(function () {
				self.config.aspectRatio = $(window).height() / $(window).width();
				if ($('#header .top-section').css('display') == 'none') {
					self.config.isMobile = true;
				} else {
					self.config.isMobile = false;
				}
				maxW = (($(window).height() + 100) / 100) + 2.5 + "%";
				if (self.config.isMobile) {
					self.resizeForMobile();
				} else {
					self.resizeForDesktop();
				}
				$(".bxDivShape > li:first-child").css("max-width", maxW);
			}, 500, "mervinsbb");
		});
		function delayLoad() {
			// SET CONFIG SETTINGS
			if ($('.bx-pager').css('display') == 'block') {
				self.config.isMobile = true;
			} else {
				self.config.isMobile = false;
			}
			self.config.aspectRatio = $(window).width() / $(window).height();
			// check for Safari
			if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
				self.config.isSafari = true;
			}
			// check if device is an iPad
			//var iPad = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
			self.config.isIpad = /(iPad)/g.test(navigator.userAgent);

			// listen for flag selection
			$("#header .top-flag a").on('click', function (e) {
				e.preventDefault();
				e.stopPropagation(); // kill even from firing further
				if (navigator.cookieEnabled === false) {
					alert('Enable cookies in your browser in order to select your region.');
				} else {
					LIBTECH.main.regionSelectorOverlayInit();
				}
			});
			// init the overview
			$('#overview .overview-content .right-column a').on('click', function (e) {
				e.preventDefault();
				// hide overview
				TweenMax.to($('#overview'), 0.5, {opacity:0, onComplete:hideOverview});
				function hideOverview () {
					$('#overview').hide();
					$('#overview .overview-content .right-column a').off('click');
				}
				// set the first section
				self.setCurrentSection();
				// trigger resize
				if (self.config.isMobile) {
					self.resizeForMobile();
				} else {
					self.resizeForDesktop();
				}
				// set region
				if (LIBTECH.main.utilities.cookie.getCookie('libtech_region') !== "" && LIBTECH.main.utilities.cookie.getCookie('libtech_region') !== undefined) {
					self.bbSetRegion(LIBTECH.main.utilities.cookie.getCookie('libtech_region'));
				}
			});
			// make sure overview video fits
			$('#overview .overview-content .right-column .overview-video').fitVids();
			// hide the div blocker
			TweenMax.to($('#div-blocker'), 0.5, {opacity: 0, onComplete: hideDivBlocker});
			function hideDivBlocker () {
				$('#div-blocker').hide();
				$(".bx-div-slider ul.bxDivShape").parent().css('height', $(window).height());
			}
			self.flyOutMenuInit();
			self.boardPreviewInit();
		}
		/// this pulls the preview from the buy
		if (self.config.nCurSlide !== 0 || self.config.nCurSlide != 7) {
			$(".step1-board").parent().css('overflow', 'hidden');
			$(".step3-top").parent().css('overflow', 'hidden');
			$(".step5-base").parent().css('overflow', 'hidden');
			$('.miniReciept').css('z-index', '-333');
		}
		// TODO INCREASE MAIN SLIDER HITBOXXXXX
		$('body').on('click', '.bx-pager-item', function () {
			self.config.$mainSlider.goToSlide($(this).find("a").html() - 1);
		});
	},
	shareInit: function () {
		var self = this;
		if (LIBTECH.main.utilities.cookie.getCookie('libtech_region') !== "" && LIBTECH.main.utilities.cookie.getCookie('libtech_region') !== undefined) {
			self.bbSetRegion(LIBTECH.main.utilities.cookie.getCookie('libtech_region'));
		}
		self.buildShare();
		$(window).on('load', function () {
			if (self.config.isMobile) {
				self.resizeForMobile();
			} else {
				self.resizeForDesktop();
			}
			$('#div-blocker').delay(300).animate({
				opacity: '0'
			}, {
				duration: 700,
				complete: function () {
					$('#div-blocker').hide();
				}
			});
		});
		$(window).on('resize', function () {
			waitForFinalEvent(function () {
				self.config.aspectRatio = $(window).height() / $(window).width();
				if ($('#header .top-section').css('display') == 'none') {
					self.config.isMobile = true;
				} else {
					self.config.isMobile = false;
				}
				if (self.config.isMobile) {
					self.resizeForMobile();
				} else {
					self.resizeForDesktop();
				}
			}, 500, "mervinsbb");
		});
	},
	bbSetRegion: function (sReg) {
		var self = this;
		self.config.bbRegionCurrency = (sReg != 'ca') ? "USD" : "CAD";
		self.config.bbRegion = sReg;
	},
	bbGetRegion: function () {
		var self = this;
		if (self.config.bbRegion === '' || self.config.bbRegion === undefined) {
			self.config.bbRegion = "US";
		}
		self.config.bbRegion = self.config.bbRegion.toUpperCase();
		return self.config.bbRegion;
	},
	setKnifeCutPrice: function (nKC) {
		var self = this;
		self.config.bbKnifeCutDiff = (nKC === '' || nKC === undefined) ? "0.00" : nKC;
		self.config.bbKnifeCutDiff = nKC;
	},
	getKnifeCutPrice: function () {
		var self = this;
		if (self.config.bbKnifeCutDiff === '' || self.config.bbKnifeCutDiff === undefined) {
			self.config.bbKnifeCutDiff = "0.00";
		}
		return self.config.bbKnifeCutDiff;
	},
	setBoardShape: function (oImg) {
		var self, spanVal, boardNum, theContour, sShape;
		self = this;
		if (oImg === "" || oImg === undefined) {
			spanVal = 1;
			boardNum = self.config.globalNum;
			self.setBoardSize('');
			$(".step1-board .carousel ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
		} else {
			spanVal = self.config.globalNum;
			boardNum = spanVal;
		}
		self.config.iJSON = spanVal;
		sNoDash = boardData[boardNum].Model;
		// updated board display
		$('.board-tech-name').text(sNoDash); // being hidden now
		// Board Details
		$('.step2-size .board-info .board').html(sNoDash); // being hidden now
		$('.step2-size .board-info .shape-desc').html("<span>SHAPE</span> " + boardData[boardNum].ShapeDescription);
		$('.step2-size .board-info .board-tagline').text(boardData[boardNum].BoardTagline);
		$('.step2-size .board-info .board-desc').text(boardData[boardNum].BoardDescription);
		// Contour Details
		theContour = boardData[boardNum].Contour;
		$('.step2-size .board-info .contour-title').html(contourData[theContour].ContourTitle);
		$('.step2-size .board-info .contour-desc').html(contourData[theContour].ContourDescription);
		// Size Details
		$('.step2-size .size-info .size-holder .sizes').html(self.calculateSizes(boardData[boardNum].Sizes));
		$('.step2-size .size-info .size-detail-table .table-data').html(self.printSizeInfo(boardData[boardNum].ContactLength, boardData[boardNum].Sidecut, boardData[boardNum].WaistWidth, boardData[boardNum].Flex) + "");
		$('.step2-size .size-info .size-detail-table .table-data').clone().wrap('<p>').parent().html();
		// set price
		if (self.bbGetRegion() == "CA") {
			self.setBoardPrice(boardData[boardNum].BasePriceCA);
		} else {
			self.setBoardPrice(boardData[boardNum].BasePriceUS);
		}
		// var that is carried over
		sShape = boardData[boardNum].Model;
		// clear board size
		self.setBoardSize('');
		if (sShape === "" || sShape === undefined) {
			self.advanceArrowHide();
			// unselect board shape image
			$(".step1-board .carousel ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
			sShape = "";
			self.setBoardSize('');
		}
		// show arrow if shape a selected
		if (oImg !== "" && oImg !== undefined) {
			self.advanceArrowShow();
		}
		self.config.bBoardShape = sShape;
		self.updateBoardDisplay();
	},
	getBoardShape: function () {
		var self = this;
		if (self.config.bBoardShape === '' || self.config.bBoardShape === undefined) {
			self.config.bBoardShape = "";
		}
		return self.config.bBoardShape;
	},
	setBoardPrice: function (nPrice) {
		var self = this;
		self.config.bBoardPrice = nPrice;
	},
	getBoardPrice: function () {
		var self = this;
		return parseFloat(self.config.bBoardPrice);
	},
	setBoardTech: function (sTech) {
		var self = this;
		self.config.bTech = sTech;
	},
	getBoardTech: function () {
		var self = this;
		return self.config.bTech;
	},
	setBoardSize: function (sSize) {
		var self = this;
		if (sSize === '' || sSize === undefined) {
			$('#left-menu .menu2 .menu-title').html("Size");
			$('#left-menu .menu2').removeClass('complete');
			$(".step2-size .size-info .size-detail-table .table-data li").each(function (index) {
				$(this).removeClass("selected");
			});
			$(".step2-size .size-info .size-holder .sizes .size-item").each(function (index) {
				$(this).removeClass('selected');
			});
			self.advanceArrowHide();
		}
		self.config.bSize = sSize;
	},
	getBoardSize: function () {
		var self = this;
		if (self.config.bSize !== null && self.config.bSize !== undefined && self.config.bSize) {
			return self.config.bSize;
		} else {
			return "";
		}
	},
	setBoardHP: function (sHP) {
		var self = this;
		self.config.bHP = sHP;
	},
	getBoardHP: function () {
		var self = this;
		return self.config.bHP;
	},
	/* TOP */
	setBoardTop: function (selectedTopImg) {
		var self, imgName, imgDesc;
		self = this;
		imgName = $(selectedTopImg).attr("artist");
		imgDesc = $(selectedTopImg).attr("desc");
		if (imgDesc === "" || imgDesc === undefined) {
			self.advanceArrowHide();
			self.setBoardArtist('');
			self.setBoardDescription('');
			self.config.bTop = "";
			$(".step3-top ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
		} else {
			self.setBoardArtist(imgName);
			self.setBoardDescription(imgDesc);
			self.config.bTop = imgDesc;
			$('.step3-top .topInfo h2').html(imgName);
			$('.step3-top .topInfo h3').html(imgDesc);
			$('#left-menu .menu3').addClass('complete');
			$('#left-menu .menu3 .menu-title').html("" + "" + imgName + " " + imgDesc + "<b><br>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
			self.boardPreviewSet(2);
		}
		self.updateBoardDisplay();
		// show arrow if shape a selected
		if (selectedTopImg !== "" && selectedTopImg !== undefined) {
			self.advanceArrowShow();
		}
	},
	getBoardTop: function () {
		var self = this;
		return self.config.bTop;
	},
	setBoardDescription: function (sDesc) {
		var self = this;
		self.config.bDesc = sDesc;
	},
	getBoardDescription: function () {
		var self = this;
		//TODO: SET DEFAULTS TO GREY!!!
		if (self.config.bDesc === '' || self.config.bDesc === undefined) {
			self.config.bDesc = "";
		}
		return self.config.bDesc;
	},
	setBoardArtist: function (sArtist) {
		var self = this;
		self.config.bArtist = sArtist;
	},
	getBoardArtist: function () {
		var self = this;
		if (self.config.bArtist === '' || self.config.bArtist === undefined) {
			self.config.bArtist = "";
		}
		return self.config.bArtist;
	},
	/* SIDEWALL */
	setBoardSidewall: function (selectedSidewallImg) {
		var self, sColor, sDesc;
		self = this;
		sColor = $(selectedSidewallImg).attr("color");
		sDesc = $(selectedSidewallImg).attr("desc");
		if (sColor === "" || sColor === undefined) {
			self.advanceArrowHide();
			self.config.bSidewall = "";
			self.config.bSidewallDesc = "";
			self.advanceArrowHide();
			$(".step4-sidewall ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
		} else {
			self.config.bSidewall = sColor;
			self.config.bSidewallDesc = sDesc;
			$('#left-menu .menu4 .menu-title').html("" + " " + self.getBoardSidewall() + " " + "" + "<br><b>+ $ 0.00</b>");
			$('#left-menu .menu4').addClass('complete');
		}
		self.updateBoardDisplay();
		// show arrow if shape a selected
		if (selectedSidewallImg !== "" && selectedSidewallImg !== undefined) {
			self.advanceArrowShow();
		}
	},
	getBoardSidewall: function () {
		var self = this;
		return self.config.bSidewall;
	},
	getBoardSidewallDesc: function () {
		var self = this;
		return self.config.bSidewallDesc;
	},
	/* BASE */
	setBoardBase: function (selectedBaseImg) {
		var self, imgName, imgDesc;
		self = this;
		imgName = $(selectedBaseImg).attr("artist");
		imgDesc = $(selectedBaseImg).attr("desc");
		if (imgDesc === "" || imgDesc === undefined) {
			self.advanceArrowHide();
			self.setBoardBaseArtist('');
			self.setBoardBaseDesc('');
			self.config.bBase = "";
			self.config.isKnifecut = false;
			$(".step5-base ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
		} else {
			self.setBoardBaseArtist(imgName);
			self.config.bBase = imgName;
			if (imgName == 'Custom') {
				var kcPrice, nonKCPrice, kcPriceDifference;
				// KNIFE CUT BASE
				self.config.isKnifecut = true;
				self.setBoardBaseDesc($('.board-text-custom').val());
				if (self.bbGetRegion() == "CA") {
					kcPrice = boardData[self.config.globalNum].KnifecutPriceCA;
					nonKCPrice = boardData[self.config.globalNum].BasePriceCA;
				} else {
					kcPrice = boardData[self.config.globalNum].KnifecutPriceUS;
					nonKCPrice = boardData[self.config.globalNum].BasePriceUS;
				}
				kcPriceDifference = parseFloat((kcPrice - nonKCPrice).toFixed(2));
				self.setKnifeCutPrice(kcPriceDifference);
				$('#left-menu .menu5 .menu-title').html("" + "  " + "CUSTOMIZED TEXT" + "<br /><b>+ $ " + kcPriceDifference + " " + self.config.bbRegionCurrency + "</b>");
				// show menu 5b
				$('#left-menu .menu5b').addClass('show');
			} else {
				// GRAPHIC BASE
				self.setBoardBaseDesc(imgDesc);
				self.config.isKnifecut = false;
				$('#left-menu .menu5 .menu-title').html("" + "  " + imgName + " " + imgDesc + "<br><b>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
				// remove menu 5b
				$('#left-menu .menu5b').removeClass('show');
			}
			$('#left-menu .menu5').addClass('complete');
		}
		self.updateBoardDisplay();
		// show arrow if shape a selected
		if (selectedBaseImg !== "" && selectedBaseImg !== undefined) {
			self.advanceArrowShow();
		}
	},
	getBoardBase: function () {
		var self = this;
		if (self.config.bBase === '' || self.config.bBase === undefined) {
			self.config.bBase = "";
		}
		return self.config.bBase;
	},
	setBoardBaseArtist: function (sBase) {
		var self = this;
		self.config.bBaseArtist = sBase;
	},
	getBoardBaseArtist: function () {
		var self = this;
		if (self.config.bBaseArtist === '' || self.config.bBaseArtist === undefined) {
			self.config.bBaseArtist = "";
		}
		return self.config.bBaseArtist;
	},
	setBoardBaseDesc: function (sBase) {
		var self = this;
		self.config.bBaseDesc = sBase;
		if(self.getBoardBaseArtist() === "Custom" && sBase !== "") {
			$('#left-menu .menu5b .menu-title').html(sBase);
			$('#left-menu .menu5b').addClass('complete');
		}
	},
	getBoardBaseDesc: function () {
		var self = this;
		//TODO: SET DEFAULTS TO GREY!!!
		if (self.config.bBaseDesc === '' || self.config.bBaseDesc === undefined) {
			self.config.bBaseDesc = "";
		}
		return self.config.bBaseDesc;
	},
	setCustomBaseColor: function (sBaseColor) {
		var self = this;
		self.config.bCustomBaseColor = sBaseColor;
	},
	getCustomBaseColor: function () {
		var self = this;
		return self.config.bCustomBaseColor;
	},
	setCustomTextColor: function (sBaseTextColor) {
		var self = this;
		self.config.bCustomTextColor = sBaseTextColor;
	},
	getCustomTextColor: function () {
		var self = this;
		return self.config.bCustomTextColor;
	},
	setBoardBadge: function (sBadge) {
		var self = this;
		if (sBadge === "" || sBadge === undefined) {
			$('#left-menu .menu6 .menu-title').html("Personalized Badge");
			$('#left-menu .menu6').removeClass('complete');
			$('.step6-badge .board-badge .badge-text').html('');
			//$('input[name=badge]').val("25 CHARACTER MAX");
		}
		self.config.bBadge = sBadge;
	},
	getBoardBadge: function () {
		var self = this;
		return self.config.bBadge;
	},
	updateBoardDisplay: function () {
		var self, boardShape, topArist, topDesc, customTextColor, customBaseColor, baseArist, baseDesc, sidewallColor;
		self = this;
		boardShape = self.getBoardShape().toUpperCase().split(' ').join('-');
		topArist = self.getBoardArtist().toUpperCase().split(' ').join('-');
		topDesc = self.getBoardDescription().toUpperCase().split(' ').join('-');
		customTextColor = self.getCustomTextColor().toUpperCase().split(' ').join('-');
		customBaseColor = self.getCustomBaseColor().toUpperCase().split(' ').join('-');
		baseArist = self.getBoardBaseArtist().toUpperCase().split(' ').join('-');
		baseDesc = self.getBoardBaseDesc().toUpperCase().split(' ').join('-');
		sidewallColor = self.getBoardSidewallDesc().toUpperCase().split(' ').join('-');
		// SET TOP GRAPHIC
		if (topArist === "" || topArist === undefined || topDesc === undefined || topDesc === "") {
			self.config.topGraphicImg = self.config.baseImgPath + "snowboard-top/default/" + boardShape + ".png";
		} else {
			self.config.topGraphicImg = self.config.baseImgPath + "snowboard-top/top/" + boardShape + "-" + topArist + "-" + topDesc + ".png";
		}
		$('#board-display .board-preview .board-views .preview-top .board .board-image img').attr('src', self.config.topGraphicImg);
		// SET SIDEWALL GRAPHIC
		if(sidewallColor === "" || sidewallColor === undefined) {
			// set default to yellow, so we don't error when building sidewall
			self.config.sidewallTopImg = self.config.baseImgPath + "snowboard-sidewall/sidewall/" + boardShape + "-YELLOW.png";
			// but hide the default yellow sidewall
			$('#board-display .board-preview .board-views .preview-side .board .board-image img.sidewall-top').css('display', 'none');
		} else {
			self.config.sidewallTopImg = self.config.baseImgPath + "snowboard-sidewall/sidewall/" + boardShape + "-" + sidewallColor + ".png";
			// show the new, selected sidewall
			$('#board-display .board-preview .board-views .preview-side .board .board-image img.sidewall-top').css('display', 'block');
		}
		// sidewall bottom image
		if (topArist === "" || topArist === undefined || topDesc === undefined || topDesc === "") {
			self.config.sidewallBottomImg = self.config.baseImgPath + "snowboard-sidewall/default/" + boardShape + ".png";
		} else {
			self.config.sidewallBottomImg = self.config.baseImgPath + "snowboard-sidewall/sidewall-top/" + boardShape + "-" + topArist + "-" + topDesc + ".png";
		}
		// END UPDATE SIDEWALL
		// load new sidewall images
		$('#board-display .board-preview .board-views .preview-side .board .board-image img.sidewall-top').attr('src', self.config.sidewallTopImg);
		$('#board-display .board-preview .board-views .preview-side .board .board-image img.sidewall-bottom').attr('src', self.config.sidewallBottomImg);
		// $('#board-display .board-preview .board-views .preview-side .board .board-image img.sidewall-hidden').attr('src', self.config.topGraphicImg); // just a placeholder
		// SET BASE GRAPHIC
		if(self.config.isKnifecut) {
			// KNIFE CUT BASE
			// if banana blaster, asign different logo image... it's smaller
			if(boardShape == "BANANA-BLASTER") {
				iNewBaseText = self.config.baseImgPath + "snowboard-base/custom-colors-logo/LIB-LOGO-BANANA-BLASTER-" + customTextColor + ".png";
			} else {
				iNewBaseText = self.config.baseImgPath + "snowboard-base/custom-colors-logo/LIB-LOGO-ALL-" + customTextColor + ".png";
			}
			iNewBaseImg = self.config.baseImgPath + "snowboard-base/custom-colors-board/" + boardShape + "-" + customBaseColor + ".png";
			$('#board-display .board-preview .board-views .preview-base .board .board-image .base').attr('src', iNewBaseImg);
			$('#board-display .board-preview .board-views .preview-base .board .board-image .custom-base-logo').attr('src', iNewBaseText);
			$('#board-display .board-preview .board-views .preview-base .board .board-image .custom-base-logo').css('display', 'block');
			$('#board-display .board-preview .board-views .preview-base .board .board-image .board-text .board-text-custom').css('display', 'inline');
			// set knifecut text to be sure it's right
			if(self.getBoardBaseDesc() === "" || self.getBoardBaseDesc() === undefined) {
				var knifecutInputVal = $('#knifecut-base-controls .knifecut-input #board-text').val();
				if(self.defaultBaseInput === knifecutInputVal || knifecutInputVal === "") {
					$('#board-display .preview-base .board .board-text .rotate-one .board-text-custom').html('DIY BASE!');
				} else {
					$('#board-display .preview-base .board .board-text .rotate-one .board-text-custom').html(knifecutInputVal);
				}
			} else {
				$('#board-display .preview-base .board .board-text .rotate-one .board-text-custom').html(self.getBoardBaseDesc());
			}
			// set board font size			
			var knifecutText = $('#board-display .board-preview .board-views .preview-base .board .board-image .board-text .rotate-one .board-text-custom');
			var knifecutTextHolder = $("#board-display .board-preview .board-views .preview-base .board .board-image .board-text");
			var boardWidth = $("#board-display").width();
			knifecutText.css('font-size', Math.floor(boardWidth/2) + 'px');
			// scale font down till it fits
			while(knifecutText.width() >= knifecutTextHolder.width()) {
				var currentSize = knifecutText.css('font-size');
				var newSize = currentSize.replace("px","");
				newSize = Math.floor(newSize - 1);
				knifecutText.css('font-size', newSize + 'px');
			}
			var textHeight = knifecutText.height();
			knifecutTextHolder.css('left', Math.floor((boardWidth - textHeight)/2));
			// determine hex value
			var customTextColorHex;
			switch (customTextColor) {
				case 'GREY':
					customTextColorHex = "#999999";
					break;
				case 'ORANGE':
					customTextColorHex = "#FF6600";
					break;
				case 'YELLOW':
					customTextColorHex = "#FFCC00";
					break;
				case 'BLACK':
					customTextColorHex = "#000000";
					break;
				case 'WHITE':
					customTextColorHex = "#FFFFFF";
					break;
				case 'GREEN':
					customTextColorHex = "#99CC00";
					break;
				case 'BLUE':
					customTextColorHex = "#0099FF";
					break;
				case 'RED':
					customTextColorHex = "#CC3333";
					break;
			}
			$('#board-display .board-preview .board-views .preview-base .board .board-image .board-text .rotate-one .board-text-custom').css('color', customTextColorHex);
		} else {
			// GRAPHIC BASE
			if (baseArist === "" || baseArist === undefined) {
				iNewImgBase = self.config.baseImgPath + "snowboard-base/default/" + boardShape + ".png";
			} else {
				iNewImgBase = self.config.baseImgPath + "snowboard-base/base/" + boardShape + "-" + baseArist + "-" + baseDesc + ".png";
			}
			$('#board-display .board-preview .board-views .preview-base .board .board-image .base').attr('src', iNewImgBase);
			$('#board-display .board-preview .board-views .preview-base .board .board-image .custom-base-logo').css('display', 'none');
			$('#board-display .board-preview .board-views .preview-base .board .board-image .board-text .board-text-custom').css('display', 'none');
		}
	},
	resetAll: function () {
		var self = this;
		// reset menu titles
		$('#left-menu .menu1 .menu-title').html("SHAPE & CONTOUR");
		$('#left-menu .menu2 .menu-title').html("Size");
		$('#left-menu .menu3 .menu-title').html("Top Sheet Art");
		$('#left-menu .menu4 .menu-title').html("Sidewall Color");
		$('#left-menu .menu5 .menu-title').html("Base Options");
		$('#left-menu .menu5b .menu-title').html("Text");
		$('#left-menu .menu6 .menu-title').html("Personalized Badge");
		// remove complete bolding
		$('#left-menu li').removeClass('complete');
		// make sure knifecut menu option is hidden
		$('#left-menu .menu5b').removeClass('show');
		// reset saved input values
		self.setBoardShape('');
		self.setBoardSize('');
		self.setBoardTop('');
		self.setBoardArtist('');
		self.setBoardDescription('');
		self.setBoardSidewall('');
		self.setBoardBase('');
		self.setBoardBaseArtist('');
		self.setBoardBaseDesc('');
		self.setBoardBadge('');
	},
	getParameterByName: function (name) {
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},
	buildShare: function () {
		var self = this;
		if(self.getParameterByName('shape') !== "" && self.getParameterByName('size') !== "" && self.getParameterByName('top') !== "" && self.getParameterByName('sidewall') !== "" && self.getParameterByName('badge') !== "") {
			// set shape
			var shape = self.getParameterByName('shape');
			// set global number based on matching shape
			for (var i = 0; i < boardData.length; i++) {
				if(boardData[i].Model == shape) {
					self.config.globalNum = i;
				}
			}
			self.setBoardShape(shape);
			// set size
			self.setBoardSize(self.getParameterByName('size'));
			// set top
			var top = self.getParameterByName('top');
			var topArtist = top.split(" ")[0];
			var topDesc = top.split(" ")[1];
			self.setBoardArtist(topArtist);
			self.setBoardDescription(topDesc);
			// set sidewall
			var sidewall = self.getParameterByName('sidewall');
			var sidewallDesc = sidewall.split("/")[1];
			self.config.bSidewall = sidewall;
			self.config.bSidewallDesc = sidewallDesc;
			// set badge
			var badge = self.getParameterByName('badge');
			self.setBoardBadge(badge);
			if(self.getParameterByName('base') !== "") {
				// set graphic base
				var base, baseArtist, baseDesc;
				base = self.getParameterByName('base');
				baseArtist = base.split(" ")[0];
				baseDesc = base.split(" ")[1];
				self.setBoardBaseArtist(baseArtist);
				self.setBoardBaseDesc(baseDesc);
				self.config.bBase = baseArtist;
				self.config.isKnifecut = false;
			} else if (self.getParameterByName('kt') !== "" && self.getParameterByName('kbc') !== "" && self.getParameterByName('ktc') !== "") {
				// set knifecut base
				var knifecutText, knifecutBaseColor, knifecutTextColor, kcPriceDifference, kcPrice, nonKCPrice;
				knifecutText = self.getParameterByName('kt');
				knifecutBaseColor = self.getParameterByName('kbc');
				knifecutTextColor = self.getParameterByName('ktc');
				self.setBoardBaseArtist('Custom');
				self.setBoardBaseDesc(knifecutText);
				self.setCustomBaseColor(knifecutBaseColor);
				self.setCustomTextColor(knifecutTextColor);
				self.config.isKnifecut = true;
				// set knifecut price
				if (self.bbGetRegion() == "CA") {
					kcPrice = boardData[self.config.globalNum].KnifecutPriceCA;
					nonKCPrice = boardData[self.config.globalNum].BasePriceCA;
				} else {
					kcPrice = boardData[self.config.globalNum].KnifecutPriceUS;
					nonKCPrice = boardData[self.config.globalNum].BasePriceUS;
				}
				kcPriceDifference = parseFloat((kcPrice - nonKCPrice).toFixed(2));
				self.setKnifeCutPrice(kcPriceDifference);
			} else {
				// no base found
				window.location.href = "/snowboarding/snowboard-builder/";
				return;
			}
		} else {
			// not all parameters found
			window.location.href = "/snowboarding/snowboard-builder/";
			return;
		}
		self.updateBoardDisplay();
		self.step7Init();
	},
	flyOutMenuInit: function () {
		var self = this;
		$('#left-menu, #left-menu .menu-header').on("mouseenter.left-menu, touch.left-menu", function () {
			$('#left-menu').addClass('open');
		});
		$('#left-menu').on("mouseleave.left-menu", function () {
			$('#left-menu').removeClass('open');
		});
		// check if iPad
		if (self.config.isIpad) {
			$('#left-menu .menu-close').on("click.left-menu touch.left-menu", function () {
				$('#left-menu').removeClass('open');
			});
		}
		// MENU - REMOVE OPTIONS
		$('#left-menu .menu1 .menu-x').on("click.left-menu touch.left-menu", function () {
			$('#left-menu .menu1 .menu-title').html("Shape & Contour");
			$('#left-menu .menu1').removeClass('complete');
			self.advanceArrowHide();
			self.setBoardShape('');
			self.confirmedShapeSelection = false;
			self.config.$mainSlider.goToSlide(0);
			// hide info box
			$('#info-box').removeClass('show');
		});
		$('#left-menu .menu2 .menu-x').on("click.left-menu touch.left-menu", function () {
			$('#left-menu .menu2 .menu-title').html("Size");
			$('#left-menu .menu2').removeClass('complete');
			self.setBoardSize("");
			self.config.$mainSlider.goToSlide(1);
		});
		$('#left-menu .menu3 .menu-x').on("click.left-menu touch.left-menu", function () {
			$('#left-menu .menu3 .menu-title').html("Topsheet Art");
			$('#left-menu .menu3').removeClass('complete');
			self.setBoardTop("");
			self.config.$mainSlider.goToSlide(2);
		});
		$('#left-menu .menu4 .menu-x').on("click.left-menu touch.left-menu", function () {
			$('#left-menu .menu4 .menu-title').html("Sidewall Color");
			$('#left-menu .menu4').removeClass('complete');
			self.setBoardSidewall("");
			self.config.$mainSlider.goToSlide(3);
		});
		$('#left-menu .menu5 .menu-x').on("click.left-menu touch.left-menu", function () {
			$('#left-menu .menu5 .menu-title').html("Base Options");
			$('#left-menu .menu5').removeClass('complete');
			$('#left-menu .menu5b').removeClass('show');
			self.setBoardBase("");
			// reset menu5b
			// reset input field
			self.setBoardBaseDesc('DIY Base!');
			// reset knifecut text
			self.setCustomTextColor('White');
			self.setCustomBaseColor('Black');
			// update
			self.updateBoardDisplay();
			self.boardPreviewSet(4);
			$('#board-text').val('');
			// reset left menu
			$('#left-menu .menu5b .menu-title').html("Text");
			$('#left-menu .menu5b').removeClass('complete');
			// display correct slide
			self.config.$mainSlider.goToSlide(4);
		});
		$('#left-menu .menu5b .menu-x').on("click.left-menu touch.left-menu", function () {
			// reset input field
			self.setBoardBaseDesc('DIY Base!');
			// reset knifecut text
			self.setCustomTextColor('White');
			self.setCustomBaseColor('Black');
			// update
			self.updateBoardDisplay();
			self.boardPreviewSet(5);
			$('#board-text').val('').focus();
			// reset left menu
			$('#left-menu .menu5b .menu-title').html("Text");
			$('#left-menu .menu5b').removeClass('complete');
			self.setBoardBase($('#customBase'));
			self.config.$mainSlider.goToSlide(5);
		});
		$('#left-menu .menu6 .menu-x').on("click.left-menu touch.left-menu", function () {
			$('#left-menu .menu6 .menu-title').html("Personalized Badge");
			$('#left-menu .menu6').removeClass('complete');
			$('.step6-badge .board-badge .badge-text').html('');
			self.setBoardBadge('');
			$('input[name=badge]').val(self.defaultBadgeInput);
			self.config.$mainSlider.goToSlide(6);
		});
		$('#left-menu .menu1, #left-menu .menu1 .menu-title').on("click.left-menu touch.left-menu", function () {
			self.config.$mainSlider.goToSlide(0);
			$('#left-menu').addClass('open');
		});
		$('#left-menu .menu2, #left-menu .menu2 .menu-title').on("click.left-menu touch.left-menu", function () {
			self.config.$mainSlider.goToSlide(1);
			$('#left-menu').addClass('open');
		});
		$('#left-menu .menu3, #left-menu .menu3 .menu-title').on("click.left-menu touch.left-menu", function () {
			self.config.$mainSlider.goToSlide(2);
			$('#left-menu').addClass('open');
		});
		$('#left-menu .menu4, #left-menu .menu4 .menu-title').on("click.left-menu touch.left-menu", function () {
			self.config.$mainSlider.goToSlide(3);
			$('#left-menu').addClass('open');
		});
		$('#left-menu .menu5, #left-menu .menu5 .menu-title').on("click.left-menu touch.left-menu", function () {
			self.config.$mainSlider.goToSlide(4);
			$('#left-menu').addClass('open');
		});
		$('#left-menu .menu5b, #left-menu .menu5b .menu-title').on("click.left-menu touch.left-menu", function () {
			self.config.$mainSlider.goToSlide(5);
			$('#left-menu').addClass('open');
		});
		$('#left-menu .menu6, #left-menu .menu6 .menu-title').on("click.left-menu touch.left-menu", function () {
			self.config.$mainSlider.goToSlide(6);
			$('#left-menu').addClass('open');
		});
		$('#left-menu .menu7, #left-menu .menu7 .menu-title').on("click.left-menu touch.left-menu", function () {
			self.config.$mainSlider.goToSlide(7);
			$('#left-menu').addClass('open');
		});
	},
	boardPreviewInit: function () {
		var self = this;
		$('body').on('click touch', '.board-menu-left-button img', function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-left.png');
			self.boardPreviewCycle('left');
		});
		$('body').on('click touch', '.board-menu-right-button img', function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-right.png');
			self.boardPreviewCycle('right');
		});
		$(".board-menu-left-button img").mouseover(function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-left-y.png');
		}).mouseout(function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-left-w.png');
		});
		$(".board-menu-right-button img").mouseover(function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-right-y.png');
		}).mouseout(function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-right-w.png');
		});
	},
	boardPreviewCycle: function (sDirection) {
		var self = this;
		$('.board-views div.preview-top').hide();
		$('.board-views div.preview-side').hide();
		$('.board-views div.preview-base').hide();

		if (sDirection == 'left') {
			self.config.nPreviewNum--;
		} else {
			self.config.nPreviewNum++;
		}
		if (self.config.nPreviewNum > 2) {
			self.config.nPreviewNum = 0;
		}
		if (self.config.nPreviewNum < 0) {
			self.config.nPreviewNum = 2;
		}
		if (sDirection == 'left' && self.config.nPreviewNum === 0) {
			$('.board-views div.preview-side').show();
		}
		if (sDirection == 'left' && self.config.nPreviewNum == 2) {
			$('.board-views div.preview-top').show();
		}
		if (sDirection == 'left' && self.config.nPreviewNum == 1) {
			$('.board-views div.preview-base').show();
			// make sure knifecut displays correctly
			self.updateBoardDisplay();
		}
		if (sDirection == 'right' && self.config.nPreviewNum == 1) {
			$('.board-views div.preview-base').show();
			// make sure knifecut displays correctly
			self.updateBoardDisplay();
		}
		if (sDirection == 'right' && self.config.nPreviewNum == 2) {
			$('.board-views div.preview-top').show();
		}
		if (sDirection == 'right' && self.config.nPreviewNum === 0) {
			$('.board-views div.preview-side').show();
		}
	},
	boardPreviewSet: function (nSlideNum) {
		var self = this;

		$('.board-views div.preview-top').hide();
		$('.board-views div.preview-side').hide();
		$('.board-views div.preview-base').hide();
		$('#board-display .board-preview .board-menu-left-button').show();
		$('#board-display .board-preview .board-menu-right-button').show();

		// reset board view position
		$('.board-views div.preview-side').css('left', '0px');
		$('.board-views div.preview-base').css('left', '0px');

		if (nSlideNum === 0) {
			$('#board-display').hide();
		} else {
			$('#board-display').show();
		}
		var boardWidth;
		if (nSlideNum == 1 || nSlideNum == 2 || nSlideNum == 6) {
			$('.board-views div.preview-top').show();
			$('.board-views div.preview-side').hide();
			$('.board-views div.preview-base').hide();
			boardWidth = $('.board-views div.preview-top').width();
			self.config.nPreviewNum = 2;
		} else if (nSlideNum == 3) {
			$('.board-views div.preview-top').hide();
			$('.board-views div.preview-side').show();
			$('.board-views div.preview-base').hide();
			boardWidth = $('.board-views div.preview-side').width();
			self.config.nPreviewNum = 0;
		} else if (nSlideNum == 4 || nSlideNum == 5) {
			$('.board-views div.preview-top').hide();
			$('.board-views div.preview-side').hide();
			$('.board-views div.preview-base').show();
			boardWidth = $('.board-views div.preview-base').width();
			self.config.nPreviewNum = 1;
		} else if (nSlideNum == 7) {
			$('.board-views div.preview-top').show();
			$('.board-views div.preview-side').show();
			$('.board-views div.preview-base').show();
			$('.board-views div.preview-side').css('left', $('.board-views div.preview-top').width() - 40);
			$('.board-views div.preview-base').css('left', $('.board-views div.preview-top').width() * 2 - 60);
			$('#board-display .board-preview .board-menu-left-button').hide();
			$('#board-display .board-preview .board-menu-right-button').hide();
		}
		// position board
		if (nSlideNum == 7) {
			$('#board-display').css('left', '50%');
		} else {
			// center board within left 30% minus 90px for left menu
			var leftPosition = Math.floor((($(window).width() * 0.3 - 90) - boardWidth) / 2) + 90;
			$('#board-display').css('left', leftPosition);
		}
	},
	advanceArrowShow: function () {
		var self = this;
		// add click/touch listener
		$('#advance-arrow').on("click touch", function () {
			if (!self.config.isKnifecut && self.config.$mainSlider.getCurrentSlide() == 4) {
				self.config.$mainSlider.goToSlide(6);
			} else {
				self.config.$mainSlider.goToNextSlide();
			}
			self.advanceArrowHide();
			$('#left-menu').removeClass('open');
		});
		TweenMax.to($('#advance-arrow'), 0.3, {right: "0px"});
	},
	advanceArrowHide: function () {
		var self = this;
		TweenMax.to($('#advance-arrow'), 0.3, {right: "-40px"});
		// remove click/touch listener
		$('#advance-arrow').off("click touch");
	},
	calculateSizes: function (sPipedSizes) {
		var sHTMLSizes = "";
		var sizeArray = sPipedSizes.split('|');
		sizeArray.forEach(function (entry) {
			entry = entry.trim();
			sHTMLSizes += "<div class=\"size-item\" val=\"" + entry + "\">" + entry + "</div>";
		});
		return sHTMLSizes;
	},
	printSizeInfo: function (sPipedLengths, sSideCut, sWaistWidth, sFlex) {
		var sHTMLLength, sizeArray, cutArray;
		sHTMLLength = "";
		sizeArray = sPipedLengths.split('|');
		//size col!
		sizeArrayOnly = sizeArray;
		sHTMLLength += "<div class=\"info-list\"><ul class=\"length-list\"><li>Size</li>";
		sizeArrayOnly.forEach(function (entry) {
			var sz = entry.split(' - ')[0];
			sHTMLLength += "<li class=\"sizeOnly " + $.trim(sz).replace(".", "_") + "\"> " + $.trim(sz) + "</li>";
		});
		sHTMLLength += "</ul></div>";

		cutArray = sSideCut.split('|');
		sHTMLLength += "<div class=\"info-list\"><ul class=\"side-list\"><li>Sidecut</li>";
		cutArray.forEach(function (cut) {
			var nSize = $.trim(cut.split(' - ')[0]).replace(".", "_");
			var nCut = $.trim(cut.split(' - ')[1]);
			sHTMLLength += "<li class=\"" + nSize + "\">" + nCut + "</li>";
		});
		sHTMLLength += "</ul></div>";

		sizeArray = sWaistWidth.split('|');
		sHTMLLength += "<div class=\"info-list\"><ul class=\"waist-list\"><li>Waist Width</li>";
		sizeArray.forEach(function (entry) {
			var nSize = $.trim(entry.split(' - ')[0]).replace(".", "_");
			var nWidth = $.trim(entry.split(' - ')[1]);
			sHTMLLength += "<li class=\"" + nSize + "\">" + nWidth + "</li>";
		});
		sHTMLLength += "</ul></div>";

		sizeArray = sFlex.split('|');
		sHTMLLength += "<div class=\"info-list\"><ul class=\"flex-list\"><li>Flex</li>";
		sizeArray.forEach(function (entry) {
			var nSize = $.trim(entry.split(' - ')[0]).replace(".", "_");
			var nFlex = $.trim(entry.split(' - ')[1]);
			sHTMLLength += "<li class=\"" + nSize + "\"> " + nFlex + "</li>";
		});
		sHTMLLength += "</ul></div>";
		return sHTMLLength;
	},
	setBackgroundImage: function (item, nNum) {
		var self = this;
		//if(self.config.isMobile) return;
		$(item).parent().css('height', $(window).height());
		if (nNum !== 0) {
			$(item).parent().css('background-image', 'url(' + self.config.baseImgPath + 'BACKGROUND-0' + nNum + '.jpg' + ')');
			setTimeout(function () {
				$(item).parent().stop().fadeTo(333, 1);
			}, 136);
		} else {
			$(item).css('background-image', 'url(' + self.config.baseImgPath + 'BACKGROUND-0' + nNum + '.jpg' + ')');
			$(item).stop().fadeTo(333, 1);
		}
	},
	updateHeaderLabel: function (nSection) {
		switch (nSection) {
			case 0:
				$('#header .top-section').html("SELECT BOARD - SHAPE &amp; CONTOUR");
				$('.pagerLabel').html("SHAPE");
				break;
			case 1:
				$('#header .top-section').html("SELECT SIZE - BOARD LENGTH");
				$('.pagerLabel').html("SIZE");
				break;
			case 2:
				$('#header .top-section').html("SELECT TOP - TOP SHEET ART");
				$('.pagerLabel').html("TOP");
				break;
			case 3:
				$('#header .top-section').html("SELECT SIDE - SIDEWALL COLOR");
				$('.pagerLabel').html("SIDE");
				break;
			case 4:
				$('#header .top-section').html("SELECT BASE - BASE ART");
				$('.pagerLabel').html("BASE");
				break;
			case 5:
				$('#header .top-section').html("SELECT BASE - CUSOMIZED KNIFECUT");
				$('.pagerLabel').html("BASE");
				break;
			case 6:
				$('#header .top-section').html("SELECT BADGE - PERSONALIZE YOUR BADGE");
				$('.pagerLabel').html("BADGE");
				break;
			case 7:
				$('#header .top-section').html("BUY YOUR SNOWBOARD");
				$('.pagerLabel').html("BUY");
				break;
		}
	},
	createCarousel: function (container) {
		var self, carouselWidth, containerWidth, containerCenter, dragMaxX, dragMinX, gridWidth, offset, selectedItemIndex;
		self = this;
		// resize carousel
		carouselWidth = 0;
		$(container).first().find(".carousel ul li").each(function (index) {
			carouselWidth += self.config.carouselItemWidth + 40; // add padding
			// store selected item
			if($(this).find('img').hasClass('selectedShape')) {
				selectedItemIndex = index;
			}
		});
		$(container + ' .carousel ul').css('width', carouselWidth);
		// set the height of the carousel
		$(container).first().find(".carousel").height($(container).first().find(".carousel ul").outerHeight() + 20); // add 20 because of scaleup
		// create dragable list of board shape images
		containerWidth = $(container).width();
		containerCenter = containerWidth / 2;
		gridWidth = $(container + ' .carousel ul li').outerWidth();
		dragMaxX = containerCenter - gridWidth / 2;
		dragMinX = (carouselWidth - (containerCenter + gridWidth / 2)) * -1;
		offset = (containerCenter - Math.floor(containerCenter / gridWidth) * gridWidth);
		// set up draggable features of carousel
		self.config.currentCarousel = new Draggable.create(container + " .carousel ul", {
			type:"left",
			edgeResistance:0.65,
			bounds:{minX:dragMinX, maxX:dragMaxX},
			throwProps:true,
			maxDuration: 0.5,
			snap: {
				x: function(endValue) {
					var snapX = ((Math.round(endValue / gridWidth) * gridWidth) + offset) - gridWidth / 2;
					return snapX;
				}
			},
			onDragStart: function () {
				$('#info-box').removeClass('show');
				$(container + " ul").addClass('dragging');
			},
			onDragEnd: function () {
				$(container + " ul").removeClass('dragging');
			},
			onClick: function () {
				var clickTarget = this;
				$(container + " .carousel ul li").each(function( index ) {
					var carouselItem = $(this);
					if(clickTarget.pointerX >= carouselItem.offset().left && clickTarget.pointerX <= carouselItem.offset().left + gridWidth) {
						selectItem(index);
						return false;
					}
				});
			},
			onThrowComplete: function () {
				// check to find item in center selection
				$(container + " .carousel ul li").each(function( index ) {
					var carouselItem, containerOffset;
					carouselItem = $(this);
					containerOffset = $(container + ' .carousel-container').offset().left;
					if(containerCenter + containerOffset >= carouselItem.offset().left && containerCenter + containerOffset <= carouselItem.offset().left + gridWidth) {
						processSelection($(this));
						return false;
					}
				});
			}
		});
		$(document).on('keyup.carousel', function (e) {
			var code, maxIndex, prevIndex, nextIndex;
			maxIndex = $(container).first().find(".carousel ul li").size() - 1;
			$(container + " .carousel ul li").each(function( index ) {
				var carouselItem, containerOffset;
				carouselItem = $(this);
				containerOffset = $(container + ' .carousel-container').offset().left;
				if(containerCenter + containerOffset >= carouselItem.offset().left && containerCenter + containerOffset <= carouselItem.offset().left + gridWidth) {
					// set prev index
					prevIndex = index - 1;
					if(prevIndex < 0) prevIndex = maxIndex;
					// set next index
					nextIndex = index + 1;
					if(nextIndex > maxIndex) nextIndex = 0;
					return false;
				}
			});
			// get the code
			code = (e.keyCode ? e.keyCode : e.which);
			// check which arrow key
			if (code == 39) {
				// right arrow
				selectItem(nextIndex);
			} else if (code == 37) {
				// left arrow
				selectItem(prevIndex);
			}
		});
		function selectItem(index) {
			// find x position of arrowed to carousel item
			var carouselItemX = (index * gridWidth - (containerCenter - gridWidth/2)) * -1;
			TweenMax.to(container + " .carousel ul", 0.5, {left:carouselItemX + 'px'});
			processSelection($(container + " .carousel ul li")[index]);
		}
		// method for setting the carousel selection
		function processSelection(listItem) {
			var selectedImage, nNum, price;
			selectedImage = $(listItem).find('img');
			self.confirmedShapeSelection = true;

			if (self.config.nCurSlide === 0) {
				// STEP 1 - BOARD
				var theContour, splitArray;
				// get the shape number
				nNum = selectedImage.attr("shapenum") - 1;
				self.config.globalNum = nNum;
				// set the correct hover display items to be visible
				$('#info-box .contour, #info-box h4, #info-box .sizes').css('display', 'block');
				$('#info-box h5').css('display', 'none');
				// board attributes
				theContour = boardData[nNum].Contour;
				splitArray = boardData[nNum].Sizes;
				splitArray = splitArray.split('|').join(' ') + "";
				// set the appropriate display copy
				$('.topInfo h2').text(boardData[nNum].Model);
				$('.topInfo h3').text(boardData[nNum].BoardTagline);
				$('#info-box h2').text(boardData[nNum].Model + " - " + theContour);
				$('#info-box h3').text(boardData[nNum].BoardTagline);
				$('#info-box .sizes p span').text(boardData[nNum].Sizes);
				$('#info-box h4').text(contourData[theContour].ContourTitle);
				$('#info-box .sizes p span').text(splitArray);
				// set contour image
				$('#info-box .contour img').attr('src', self.config.baseImgPath + boardData[nNum].ContourImage);
				// get the price for the board
				if (self.bbGetRegion() == "CA") {
					price = boardData[nNum].BasePriceCA;
				} else {
					price = boardData[nNum].BasePriceUS;
				}
				// Update left menu
				// on slide 1 - board selection
				// update the left menu
				$('#left-menu .menu1 .menu-title').html("" + "" + boardData[nNum].Model + "<br><b>+ $ " + price + " " + self.config.bbRegionCurrency + "</b>");
				$('#left-menu .menu1').addClass('complete');
				// show left menu if it's the first time using
				if(self.config.showLeftMenu === true) {
					$('#left-menu').addClass('open');
					self.config.showLeftMenu = false;
				}
				// update board shape
				self.setBoardShape(selectedImage);
			} else if (self.config.nCurSlide === 2) {
				// STEP 3 - TOP
				var imgName, imgDesc, imgIndex;
				// set the correct hover display items to be visible
				$('#info-box .contour, #info-box h4, #info-box .sizes').css('display', 'none');
				$('#info-box h5').css('display', 'block');
				// top sheet attributes
				imgName = selectedImage.attr("artist");
				imgDesc = selectedImage.attr("desc");
				imgIndex = selectedImage.attr("data-count") - 1;
				// set the appropriate display copy
				$('#info-box h2').html(boardDescriptionData[imgIndex].Artist);
				$('#info-box h3').html(boardDescriptionData[imgIndex].Type + " " + imgDesc + " " + boardDescriptionData[imgIndex].Color);
				$('#info-box h5').html(boardDescriptionData[imgIndex].Description);
				// update board topsheet
				self.setBoardTop(selectedImage);
			} else if (self.config.nCurSlide === 3) {
				// STEP 4 - SIDEWALL
				// set the correct hover display items to be visible
				$('#info-box .contour, #info-box h4, #info-box .sizes').css('display', 'none');
				$('#info-box h5').css('display', 'block');
				if (!self.config.isMobile) {
					$('#info-box h2').html(selectedImage.attr("color").toUpperCase());
					$('#info-box h3').html("SWIRLED SIDEWALL");
					$('#info-box h5').html("A Lib Tech innovation. Twice as sintered as any other sidewall. Tough, fast, hard, waterproof, handsome and light. NO TOXIC ABS!");
				} else {
					$('#info-box div, #info-box h4, #info-box h3').css('display', 'none');
					$('#info-box h2').html(selectedImage.attr("color").toUpperCase());
				}
				self.setBoardSidewall(selectedImage);
				self.boardPreviewSet(3);
			} else if (self.config.nCurSlide === 4) {
				// STEP 5a - BASE
				var imgName, imgDesc, imgIndex;
				$('#info-box .contour, #info-box h4, #info-box .sizes').css('display', 'none');
				$('#info-box, #info-box h5').css('display', 'block');

				imgName = selectedImage.attr("artist");
				imgDesc = selectedImage.attr("desc");
				imgIndex = selectedImage.attr("data-count");

				if (imgIndex >= 1) {
					$('#info-box h2').html(boardDescriptionData[imgIndex - 1].Artist);
					$('#info-box h3').html(boardDescriptionData[imgIndex - 1].Type + " " + imgDesc + " " + boardDescriptionData[imgIndex - 1].Color);
					$('#info-box h5').html(boardDescriptionData[imgIndex - 1].Description);
				} else {
					$('#info-box h2').text('DIY Base!');
					$('#info-box h3').text('Personalize your base for an additional $29.95 ' + self.config.bbRegionCurrency);
					$('#info-box h5').text('');
				}
				self.setBoardBase(selectedImage);
				self.boardPreviewSet(4);
			}
			// show the info box
			$('#info-box').addClass('show');
			// remove old selections
			$(container + " .carousel ul li img").each(function () {
				$(this).removeClass('selectedShape');
			});
			// set image scale
			selectedImage.ScaleX = 1;
			selectedImage.ScaleY = 1;
			selectedImage.addClass('selectedShape');
		}
		if(selectedItemIndex !== "" && selectedItemIndex !== undefined) {
			selectItem(selectedItemIndex);
		}
	},
	destroyCarousel: function (container) {
		var self = this;
		for (var i = 0; i < self.config.currentCarousel.length; i++) {
			self.config.currentCarousel[i].disable();
		}
		self.config.currentCarousel = "";
		$(document).off('keyup.carousel');
	},
	// STEPS CODE BEGINS
	// STEP 1 - SHAPE
	step1Init: function () {
		var self = this;
		// set up carousel for step 1
		self.createCarousel('.step1-board');
		// check to see if advance arrow should be shown
		if (self.getBoardShape() === undefined || self.getBoardShape() === "" || !self.confirmedShapeSelection) {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
		// set the correct BG image on init
		self.setBackgroundImage(".step1-board", 1);
		// remove offset for info box
		$('#info-box').removeClass('offset');
	},
	step1Uninit: function () {
		var self = this;
		self.destroyCarousel('.step1-board');
	},
	// STEP 2 - SIZE
	step2Init: function () {
		var self = this;
		self.setBackgroundImage(".step2-size", 2);
		if (self.getBoardSize() === undefined || self.getBoardSize() === "") {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
		$('.step2-size .size-info .size-holder .sizes .size-item').on("click.step2 touch.step2", function () {
			// get the selected size and create the appropriate class
			var selectedSize = $(this).attr('val').replace(".", "_");
			// find and select the correct size data
			$(".step2-size .size-info .size-detail-table .table-data .info-list li").each(function (index) {
				if ($(this).hasClass(selectedSize)) {
					$(this).addClass("selected");
				} else {
					$(this).removeClass("selected");
				}
			});
			// add class
			//$('.' + selectedSize).addClass("sizeYellow");
			self.advanceArrowShow();

			$(".step2-size .size-info .size-holder .sizes .size-item").each(function (index) {
				$(this).removeClass('selected')
			});
			$(this).addClass('selected');

			self.setBoardSize($(this).text());
			$('#left-menu .menu2 .menu-title').html("" + "Size " + self.getBoardSize() + "<b><br>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
			$('#left-menu .menu2').addClass('complete');
		});
	},
	step2Uninit: function () {
		$('.step2-size .size-info .size-holder .sizes .size-item').off("click.step2 touch.step2");
	},
	// STEP 3 - TOP
	step3Init: function () {
		var self = this;
		// set up carousel for step 3
		self.createCarousel('.step3-top');
		// check to see if advance arrow should be shown
		if (self.getBoardTop() === undefined || self.getBoardTop() === "") {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
		// set the correct BG image on init
		self.setBackgroundImage(".step3-top", 3);
		// add offset for info box
		$('#info-box').addClass('offset');
	},
	step3Uninit: function () {
		var self = this;
		self.destroyCarousel('.step3-top');
	},
	// STEP 4 - SIDEWALL
	step4Init: function () {
		var self = this;
		// set up carousel for step 4
		self.createCarousel('.step4-sidewall');
		// check to see if advance arrow should be shown
		if (self.getBoardSidewall() === undefined || self.getBoardSidewall() === "") {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
		// set the correct BG image on init
		self.setBackgroundImage(".step4-sidewall", 4);
		// add offset for info box
		$('#info-box').addClass('offset');
	},
	step4Uninit: function () {
		var self = this;
		self.destroyCarousel('.step4-sidewall');
	},
	// STEP 5a - BASE
	step5aInit: function () {
		var self = this;
		// set up carousel for step 5
		self.createCarousel('.step5-base');
		// check to see if advance arrow should be shown
		if (self.getBoardBase() === undefined || self.getBoardBase() === "") {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
		// set the correct BG image on init
		self.setBackgroundImage(".step5-base", 5);
		// add offset for info box
		$('#info-box').addClass('offset');
	},
	step5aUninit: function () {
		var self = this;
		self.destroyCarousel('.step5-base');
	},
	// STEP 5b - KNIFE CUT BASE
	step5bInit: function () {
		var self = this;
		self.config.isKnifecut = true;
		function setTextColor(sColor) {
			if (sColor == self.getCustomBaseColor()) return;
			self.boardPreviewSet(5);
			self.setCustomTextColor(sColor);
			self.updateBoardDisplay();
		}
		function setBaseColor(sBaseColor) {
			if (sBaseColor == self.getCustomTextColor()) return;
			self.boardPreviewSet(5);
			self.setCustomBaseColor(sBaseColor);
			self.updateBoardDisplay();
		}
		// letter color listeners
		$('#knifecut-base-controls .letter-color .box-grey').on("click touch", function () {
			setTextColor('Grey');
		});
		$('#knifecut-base-controls .letter-color .box-orange').on("click touch", function () {
			setTextColor('Orange');
		});
		$('#knifecut-base-controls .letter-color .box-yellow').on("click touch", function () {
			setTextColor('Yellow');
		});
		$('#knifecut-base-controls .letter-color .box-black').on("click touch", function () {
			setTextColor('Black');
		});
		$('#knifecut-base-controls .letter-color .box-white').on("click touch", function () {
			setTextColor('White');
		});
		$('#knifecut-base-controls .letter-color .box-green').on("click touch", function () {
			setTextColor('Green');
		});
		$('#knifecut-base-controls .letter-color .box-blue').on("click touch", function () {
			setTextColor('Blue');
		});
		$('#knifecut-base-controls .letter-color .box-red').on("click touch", function () {
			setTextColor('Red');
		});
		// base color listeners
		$('#knifecut-base-controls .base-color .box-grey').on("click touch", function () {
			setBaseColor('Grey');
		});
		$('#knifecut-base-controls .base-color .box-orange').on("click touch", function () {
			setBaseColor('Orange');
		});
		$('#knifecut-base-controls .base-color .box-yellow').on("click touch", function () {
			setBaseColor('Yellow');
		});
		$('#knifecut-base-controls .base-color .box-black').on("click touch", function () {
			setBaseColor('Black');
		});
		$('#knifecut-base-controls .base-color .box-white').on("click touch", function () {
			setBaseColor('White');
		});
		$('#knifecut-base-controls .base-color .box-green').on("click touch", function () {
			setBaseColor('Green');
		});
		$('#knifecut-base-controls .base-color .box-blue').on("click touch", function () {
			setBaseColor('Blue');
		});
		$('#knifecut-base-controls .base-color .box-red').on("click touch", function () {
			setBaseColor('Red');
		});
		// imput text listeners
		$('#knifecut-base-controls .knifecut-input #board-text').on('input.step5b', function () {
			var inputValue = this.value.toUpperCase();
			if(inputValue === "") {
				self.advanceArrowHide(); // on removal of text, hide arrow
			} else {
				self.advanceArrowShow(); // on update of text, show arrow
			}
			self.setBoardBaseDesc(inputValue);
			self.updateBoardDisplay();
			self.boardPreviewSet(5);
		}).on( "keyup.step5b", function (e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 13) { // Enter keycode
				self.config.$mainSlider.goToSlide(6);
			}
		}).on('focus.step5b', function () {
			// clear text when default is selected
			if ($(this).val() == self.defaultBaseInput) {
				$(this).val("");
			}
		}).on('blur.step5b', function () {
			// reset default if nothing is inputed
			if ($(this).val().length === 0) {
				$(this).val(self.defaultBaseInput);
			}
		});
		self.setBackgroundImage(".step5b-base-text", "5");
		self.advanceArrowHide();
	},
	step5bUninit: function () {
		$('#knifecut-base-controls .knifecut-input #board-text').off('input.step5b keyup.step5b focus.step5b blur.step5b');
		$('#knifecut-base-controls .letter-color .box-grey').off("click touch");
		$('#knifecut-base-controls .letter-color .box-orange').off("click touch");
		$('#knifecut-base-controls .letter-color .box-yellow').off("click touch");
		$('#knifecut-base-controls .letter-color .box-black').off("click touch");
		$('#knifecut-base-controls .letter-color .box-white').off("click touch");
		$('#knifecut-base-controls .letter-color .box-green').off("click touch");
		$('#knifecut-base-controls .letter-color .box-blue').off("click touch");
		$('#knifecut-base-controls .letter-color .box-red').off("click touch");
		$('#knifecut-base-controls .base-color .box-grey').off("click touch");
		$('#knifecut-base-controls .base-color .box-orange').off("click touch");
		$('#knifecut-base-controls .base-color .box-yellow').off("click touch");
		$('#knifecut-base-controls .base-color .box-black').off("click touch");
		$('#knifecut-base-controls .base-color .box-white').off("click touch");
		$('#knifecut-base-controls .base-color .box-green').off("click touch");
		$('#knifecut-base-controls .base-color .box-blue').off("click touch");
		$('#knifecut-base-controls .base-color .box-red').off("click touch");
	},
	// STEP 6 - BADGE
	step6Init: function () {
		var self = this;
		// input text listeners
		$('.board-badge-input-holder .board-badge-input').on('input.step6', function () {
			var maxFS, inputValue;
			inputValue = this.value.toUpperCase();
			if (inputValue.length <= 13) {
				maxFS = "200%";
				$('.step6-badge .board-badge .badge-text').css('font-size', maxFS);
				var the1Line = inputValue.slice(0, 13);
				$('.step6-badge .board-badge .badge-text').html(the1Line);
			} else if (inputValue.length > 13) {
				maxFS = "175%";
				$('.step6-badge .board-badge .badge-text').css('font-size', maxFS);
				//var the1Line = this.value.slice(0, 13);
				//var the2Line = this.value.slice(13);
				//var theLines = the1Line + "<br />" + the2Line;
				$('.step6-badge .board-badge .badge-text').html(inputValue);
			}
			// set menu and display arrow if user begins to enter text
			if (inputValue.length == 1) {
				self.advanceArrowShow();
				$('#left-menu .menu6 .menu-title').html("Personalized Badge<br><b>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
				$('#left-menu .menu6').addClass('complete');
			} else if (inputValue.length === 0) {
				self.advanceArrowHide();
			}
			self.setBoardBadge(inputValue);
		}).on('keyup.step6', function (e) {
			// on enter press, advance to next step
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 13 && $(this).val().length !== 0) { // Enter keycode & input is not empty
				self.config.$mainSlider.goToSlide(7);
			}
		}).on('blur.step6', function () {
			if ($(this).val().length !== 0 && $(this).val() != self.defaultBadgeInput) {
				self.advanceArrowShow();
				$('#left-menu .menu6 .menu-title').html("Personalized Badge<br><b>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
				$('#left-menu .menu6').addClass('complete');
			} else {
				self.advanceArrowHide();
				self.setBoardBadge('');
				$(this).val(self.defaultBadgeInput);
			}
		}).on('focus.step6', function () {
			if ($(this).val() == self.defaultBadgeInput) {
				$(this).val("");
			}
		});
		// get the board size
		$(".step6-badge .board-badge .badge-size").html(self.getBoardSize());
		// set the background
		self.setBackgroundImage('.step6-badge', 6);
		// decide if advance arrow should be shown
		if (self.getBoardBadge() === undefined || self.getBoardBadge() === "") {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
	},
	step6Uninit: function () {
		$('.board-badge-input-holder .board-badge-input').off('input.step6 blur.step6 keyup.step6 mouseleave.step6 focus.step6');
	},
	// STEP 7 - BUY
	step7Init: function () {
		var self = this;
		// fix scroll
		$('.thereciept-scroll').css('height', $(window).height());
		// reset view
		// hide
		$(".step7-buy .thereciept .terms").css('display', 'none');
		$(".step7-buy .thereciept .terms-international").css('display', 'none');
		$(".step7-buy .thereciept .cart-error").css('display', 'none');
		$(".step7-buy .thereciept .buttonholder .agree-button").css('display', 'none');
		// show
		$(".step7-buy .thereciept .board-reciept").css('display', 'block');
		$(".step7-buy .thereciept .buttonholder .buy-button").css('display', 'block');
		
		function showTerms() {
			// hide
			$(".step7-buy .thereciept .buttonholder .buy-button").css('display', 'none');
			$(".step7-buy .thereciept .board-reciept").css('display', 'none');
			$(".step7-buy .thereciept .cart-error").css('display', 'none');
			// show
			$(".step7-buy .thereciept .buttonholder .agree-button").css('display', 'block');
			// determine which terms to show based on region
			if(self.bbGetRegion() == 'US' || self.bbGetRegion() == 'CA') {
				$(".step7-buy .thereciept .terms").css('display', 'block');
				$(".step7-buy .thereciept .terms-international").css('display', 'none');
			} else {
				$(".step7-buy .thereciept .terms-international").css('display', 'block');
				$(".step7-buy .thereciept .terms").css('display', 'none');
			}
		}
		function showError(sError) {
			// hide
			$(".step7-buy .thereciept .board-reciept").css('display', 'none');
			$(".step7-buy .thereciept .terms").css('display', 'none');
			$(".step7-buy .thereciept .terms-international").css('display', 'none');
			$(".step7-buy .thereciept .buttonholder .agree-button").css('display', 'none');
			// show
			$(".step7-buy .thereciept .cart-error").css('display', 'block');
			$(".step7-buy .thereciept .buttonholder .buy-button").css('display', 'block');
		}
		function isComplete() {
			if (self.getBoardShape() !== "" && self.getBoardShape() !== undefined &&
				self.getBoardSize() !== "" && self.getBoardSize() !== undefined &&
				self.getBoardTop() !== "" && self.getBoardTop() !== undefined &&
				self.getBoardSidewall() !== "" && self.getBoardSidewall() !== undefined &&
				self.getBoardBase() !== "" && self.getBoardBase() !== undefined && self.getBoardBaseDesc() !== "" && self.getBoardBaseDesc() !== undefined &&
				self.getBoardBadge() !== "" && self.getBoardBadge() !== undefined) {
				return true;
			} else {
				return false;
			}
		}
		function isNotComplete() {
			if (self.getBoardShape() === "" || self.getBoardShape() === undefined) {
				highlightRed(1);
			}
			if (self.getBoardSize() === "" || self.getBoardSize() === undefined) {
				highlightRed(2);
			}
			if (self.getBoardTop() === "" || self.getBoardTop() === undefined) {
				highlightRed(3);
			}
			if (self.getBoardSidewall() === "" || self.getBoardSidewall() === undefined) {
				highlightRed(4);
			}
			if (self.getBoardBase() === "" || self.getBoardBase() === undefined || self.getBoardBaseDesc() === "" || self.getBoardBaseDesc() === undefined) {
				if(self.getBoardBase() !== "Custom") {
					highlightRed(5);
				} else {
					highlightRed('5b');
				}
			}
			if (self.getBoardBadge() === "" || self.getBoardBadge() === undefined) {
				highlightRed(6);
			}
			$('#left-menu').addClass('open');
		}
		function highlightRed(nNum) {
			$('#left-menu').find('.menu' + (nNum)).addClass('alert');
		}
		function buildReciept() {
			// set shape
			$('.step7-buy .thereciept .board-reciept .shape span').html(self.getBoardShape());
			$('.step7-buy .thereciept .board-reciept .shape-cost').html("+ $" + self.getBoardPrice() + " " + self.config.bbRegionCurrency);
			// set size
			$('.step7-buy .thereciept .board-reciept .size span').html(self.getBoardSize());
			$('.step7-buy .thereciept .board-reciept .size-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			// set top
			$('.step7-buy .thereciept .board-reciept .top span').html(self.getBoardArtist() + " " + self.getBoardDescription());
			$('.step7-buy .thereciept .board-reciept .top-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			// set sidewall
			$('.step7-buy .thereciept .board-reciept .sidewall span').html(self.getBoardSidewall());
			$('.step7-buy .thereciept .board-reciept .sidewall-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			// set base
			if (self.config.isKnifecut) {
				$('.step7-buy .thereciept .board-reciept .base').html("KNIFECUT BASE - <span>" + self.getBoardBaseDesc() + "</span><div class=\"text-color\">TEXT COLOR - <span>" + self.getCustomTextColor() + "</span></div><div class=\"base-color\">BASE COLOR - <span>" + self.getCustomBaseColor() + "</span></div>");
				$('.step7-buy .thereciept .board-reciept .base-cost').html("+ $" + self.getKnifeCutPrice() + " " + self.config.bbRegionCurrency);
			} else {
				$('.step7-buy .thereciept .board-reciept .base').html("BASE - <span>" + self.getBoardBase() + " " + self.getBoardBaseDesc() + "</span>");
				$('.step7-buy .thereciept .board-reciept .base-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			}
			// set badge
			$('.step7-buy .thereciept .board-reciept .badge span').html(self.getBoardBadge());
			$('.step7-buy .thereciept .board-reciept .badge-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			// set subtotal
			if (self.config.isKnifecut) {
				$('.step7-buy .thereciept .board-reciept .subtotal-cost').html("$" + parseFloat(self.getBoardPrice() + self.getKnifeCutPrice()).toFixed(2) + " " + self.config.bbRegionCurrency);
			} else {
				$('.step7-buy .thereciept .board-reciept .subtotal-cost').html("$" + self.getBoardPrice() + " " + self.config.bbRegionCurrency);
			}
		}
		function boardUrl() {
			var boardBuilderURL = "http://www.lib-tech.com/diy/";
			if (isComplete() || $('body').hasClass('page-template-page-snowboard-builder-share-php')) {
				boardBuilderURL += "?shape=" + encodeURIComponent(self.getBoardShape());
				boardBuilderURL += "&size=" + encodeURIComponent(self.getBoardSize());
				boardBuilderURL += "&top=" + encodeURIComponent(self.getBoardArtist() + ' ' + self.getBoardDescription());
				boardBuilderURL += "&sidewall=" + encodeURIComponent(self.getBoardSidewall());
				// set up correct base variables
				if (self.config.isKnifecut) {
					boardBuilderURL += "&kt=" + encodeURIComponent(self.getBoardBaseDesc());
					boardBuilderURL += "&kbc=" + encodeURIComponent(self.getCustomBaseColor());
					boardBuilderURL += "&ktc=" + encodeURIComponent(self.getCustomTextColor());
				} else {
					boardBuilderURL += "&base=" + encodeURIComponent(self.getBoardBase() + ' ' + self.getBoardBaseDesc());
				}
				boardBuilderURL += "&badge=" + encodeURIComponent(self.getBoardBadge());
			}
			//boardBuilderURL = encodeURIComponent(boardBuilderURL);
			return boardBuilderURL;
		}
		
		// Listen for user to click buy
		$('.step7-buy .thereciept .buttonholder .buy-button').on('click.step7', function () {
			if ($('body').hasClass('page-template-page-snowboard-builder-share-php')) {
				// share page
				showTerms();
			} else {
				// builder page
				if (isComplete()) {
					showTerms();
				} else {
					isNotComplete();
				}
			}
		});
		// Listen for user to click agree
		$('.step7-buy .thereciept .buttonholder .agree-button').on('click.step7', function () {
			var top = self.getBoardArtist() + ' ' + self.getBoardDescription();
			var partNum = boardData[self.config.globalNum].BaseSku;
			if (self.config.isKnifecut) {
				partNum = boardData[self.config.globalNum].KnifecutSku;

				Shopatron.addToCart({
					quantity: '1',
					partNumber: partNum,
					itemOptions: {
						895305: self.getBoardSize(), // Size
						895306: top, // Top Graphic
						895307: self.getBoardSidewall(), // Sidewall Color
						895308: self.getBoardBase(), // Base Graphic
						895310: self.getBoardBaseDesc(), // Knife Cut Text
						895311: self.getCustomBaseColor(), // Knife Cut Base Color
						895312: self.getCustomTextColor(), // Knife Cut Text Color
						895314: self.getBoardBadge(), // Badfge Text
						895321: boardUrl(),
					}
				}, {
					// All event handlers are optional
					success: function (data, textStatus) {
						window.location.href = "/shopping-cart/";
					},
					error: function (textStatus, errorThrown) {
						showError(textStatus.responseText);
					},
					complete: function (textStatus) {}
				});
			} else {
				var base = self.getBoardBase() + ' ' + self.getBoardBaseDesc();
				Shopatron.addToCart({
					quantity: '1',
					partNumber: partNum,
					itemOptions: {
						895305: self.getBoardSize(), // Size
						895306: top, // Top Graphic
						895307: self.getBoardSidewall(), // Sidewall Color
						895308: base, // Base Graphic
						895314: self.getBoardBadge(), // Badfge Text
						895321: boardUrl() // URL
					}
				}, {
					// All event handlers are optional
					success: function (data, textStatus) {
						window.location.href = "/shopping-cart/";
					},
					error: function (textStatus, errorThrown) {
						showError(textStatus.responseText);
					},
					complete: function (textStatus) {}
				});
			}
		});
		// Social Links
		$('.step7-buy .thereciept .buttonholder .social-icons .socialfb').on('click.step7', function () {
			window.open(
				'https://www.facebook.com/sharer/sharer.php?u='+ encodeURIComponent(boardUrl()),
				'facebook-share-dialog',
				'width=626,height=436'
			);
			return false;
		});
		$('.step7-buy .thereciept .buttonholder .social-icons .socialtw').on('click.step7', function () {
			window.open(
				'http://twitter.com/share?url=' + encodeURIComponent(boardUrl()) + '&text=' + encodeURIComponent("I built my own @libtechnologies #snowboard with the DIY Board Builder! #LibTechDIY -"),
				'twitter-share-dialog',
				'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
			);
			return false;
		});
		$('.step7-buy .thereciept .buttonholder .social-icons .socialg').on('click.step7', function () {
			window.open(
				"https://plus.google.com/share?url=" + encodeURIComponent(boardUrl()),
				'gplus-share-dialog',
				'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
			);
			return false;
		});
		$('.step7-buy .thereciept .buttonholder .social-icons .sociale').on('click.step7', function () {
			email = "mailto:?subject=" + encodeURIComponent("I built my own Lib Tech Snowboard with the DIY Board Builder!") + "&body=" + encodeURIComponent(" Check out my personalized DIY Lib Tech Snowboard:") +  "%20%0D%0A%20" + encodeURIComponent(boardUrl()) + "%20%0D%0A%20" + encodeURIComponent("Build your dream snowboard!");
			window.open(email);
		});
		$('.step7-buy .thereciept .buttonholder .share-url #share-url-input').on('click.step7 touch.step7', function () {
			$(this).select();
		});

		$('.step7-buy .thereciept .buttonholder .share-url #share-url-input').val(boardUrl());

		self.advanceArrowHide();
		buildReciept();
		// share vs builder
		if ($('body').hasClass('page-template-page-snowboard-builder-share-php')) {
			self.setBackgroundImage(".wrapper", 7);
		} else {
			self.setBackgroundImage(".step7-buy", 7);
		}
	},
	step7Uninit: function () {
		$('.step7-buy .thereciept .buttonholder .buy-button').off('click.step7');
		$('.step7-buy .thereciept .buttonholder .agree-button').off('click.step7');
		$('.step7-buy .thereciept .buttonholder .social-icons .socialfb').off('click.step7');
		$('.step7-buy .thereciept .buttonholder .social-icons .socialtw').off('click.step7');
		$('.step7-buy .thereciept .buttonholder .social-icons .socialg').off('click.step7');
		$('.step7-buy .thereciept .buttonholder .social-icons .sociale').off('click.step7');
		$('.step7-buy .thereciept .buttonholder .share-url #share-url-input').off('click.step7 touch.step7');
	},

	setCurrentSection: function () {
		var self = this;
		self.config.nCurSlide = self.config.$mainSlider.getCurrentSlide();
		self.updateHeaderLabel(self.config.nCurSlide);
		self.config.bFirstPlay = false;
		self.boardPreviewSet(self.config.nCurSlide);

		$('#left-menu ul li').removeClass('selected');

		self.config.lockHover = false;

		// menu stuff
		$(".bx-pager-item").removeClass('black50');
		$(".pagerTop .active").parent().addClass('black50');

		if (self.config.nCurSlide !== 0 && self.config.isMobile) {
			$("#header .top-two").css('display', 'block');
		} else {
			$("#header .top-two").css('display', 'none');
		}

		$('#info-box').removeClass('show');
		$('.bxSliderTop').hide();
		$('.bxSliderBase').hide();
		// set default snowboard shape
		if (self.getBoardShape() === "" || self.getBoardShape() === undefined && !self.confirmedShapeSelection) {
			self.setBoardShape($("#defaultShapeImage"));
		}
		// UNINIT ALL SECTIONS
		self.step1Uninit();
		self.step2Uninit();
		self.step3Uninit();
		self.step4Uninit();
		self.step5aUninit();
		self.step5bUninit();
		self.step6Uninit();
		self.step7Uninit();

		if (self.config.isMobile) {
			self.resizeForMobile();
		} else {
			self.resizeForDesktop();
		}
		// INIT CURRENT SECTION
		if (self.config.nCurSlide === 0) {
			self.step1Init();
		} else if (self.config.nCurSlide == 1) {
			self.step2Init();
		} else if (self.config.nCurSlide == 2) {
			self.step3Init();
		} else if (self.config.nCurSlide == 3) {
			self.step4Init();
		} else if (self.config.nCurSlide == 4) {
			self.step5aInit();
		} else if (self.config.nCurSlide == 5) {
			self.step5bInit();
		} else if (self.config.nCurSlide == 6) {
			self.step6Init();
		} else if (self.config.nCurSlide == 7) {
			self.step7Init();
		}
		// set the left menu correctly
		if (self.config.nCurSlide == 5) {
			$('#left-menu .menu5b').addClass('selected');
			$('#left-menu .menu5b').removeClass('alert');
		} else if (self.config.nCurSlide == 6) {
			$('#left-menu .menu6').addClass('selected');
			$('#left-menu .menu6').removeClass('alert');
		} else {
			$("#left-menu").find('.menu' + (self.config.nCurSlide + 1)).addClass('selected');
			$("#left-menu").find('.menu' + (self.config.nCurSlide + 1)).removeClass('alert');
		}
		/*SCROLLBARRR*/
		setTimeout(function () {
			window.scrollTo(0, 1);
		}, 0);
	}, // END setCurrentSection

	resizeForDesktop: function () {
		var self, windowHeight, windowWidth, headerHeight, shapeWidth, shapeHeight, aspectRatio, newHeight, newWidth, carouselWidth, carouselHeight;
		self = this;
		windowHeight = $(window).height();
		windowWidth = $(window).width();
		headerHeight = $('#header .top-logo img').height();

		function resizeBoardDisplay() {
			var boardDisplayWidth, boardDisplayHeight, aspectRatio, newHeight, newWidth, maxWidth, arrowY;
			// check which view we're showing to the user
			if ($('#board-display .board-preview .board-views .preview-side').css('display') == 'block') {
				boardDisplayWidth = $('#board-display .board-preview .board-views .preview-side .board .board-image .sidewall-bottom').width();
				boardDisplayHeight = $('#board-display .board-preview .board-views .preview-side .board .board-image .sidewall-bottom').height();
			} else if ($('#board-display .board-preview .board-views .preview-base').css('display') == 'block') {
				boardDisplayWidth = $('#board-display .board-preview .board-views .preview-base .board .board-image .base').width();
				boardDisplayHeight = $('#board-display .board-preview .board-views .preview-base .board .board-image .base').height();
			} else {
				boardDisplayWidth = $('#board-display .board-preview .board-views .preview-top .board .board-image img').width();
				boardDisplayHeight = $('#board-display .board-preview .board-views .preview-top .board .board-image img').height();
			}
			aspectRatio = boardDisplayWidth / boardDisplayHeight;
			newHeight = windowHeight - headerHeight;
			newWidth = Math.floor(newHeight * aspectRatio);
			maxWidth = Math.floor(windowWidth * 0.2);
			// make sure board display doesn't exceed max width
			if(newWidth > maxWidth) {
				newWidth = maxWidth;
			}
			$('#board-display').width(newWidth);
			// figure out arrow posiiton
			if ($('#board-display .board-preview .board-views .preview-side').css('display') == 'block') {
				arrowY = $('#board-display .board-preview .board-views .preview-side .board .board-image .sidewall-bottom').height() / 2;
			} else if ($('#board-display .board-preview .board-views .preview-base').css('display') == 'block') {
				arrowY = Math.floor($('#board-display .board-preview .board-views .preview-base .board .board-image .base').height() / 2 - 25);
			} else {
				arrowY = Math.floor($('#board-display .board-preview .board-views .preview-top .board .board-image img').height() / 2 - 25);
			}
			// set arrow position
			$('#board-display .board-preview .board-menu-left-button, #board-display .board-preview .board-menu-right-button').css('top', arrowY);

			if (self.config.$mainSlider.getCurrentSlide() != 7) {
				// center board within left 30% minus 90px for left menu
				var leftPosition = Math.floor(((windowWidth * 0.3 - 90) - newWidth) / 2) + 90;
				$('#board-display').css('left', leftPosition);
			} else {
				// adjust positioning of other views
				$('.board-views div.preview-side').css('left', $('.board-views div.preview-top').width() - 40);
				$('.board-views div.preview-base').css('left', Math.floor($('.board-views div.preview-top').width() * 2 - 60));
			}
		}
		if ($('body').hasClass('page-template-page-snowboard-builder-php')) {
			// we're in the builder, not share
			resizeBoardDisplay();
			// Resize carousel images displayed
			shapeWidth = $('.carousel ul li.item img').width();
			shapeHeight = $('.carousel ul li.item img').height();
			aspectRatio = shapeWidth / shapeHeight;
			newHeight = windowHeight - headerHeight - 50; // remove 50 more to account for scale up on click
			newWidth = Math.floor(newHeight * aspectRatio);
			self.config.carouselItemWidth = newWidth;
			// set width on carousel images
			$('.carousel ul li.item img').each(function () {
				$(this).css('width', newWidth);
			});
			// check what step we're on and do appropriate resizing
			if (self.config.$mainSlider.getCurrentSlide() === 0) {
				// reset background
				self.setBackgroundImage(".step1-board", 1);
				// reset carousel
				self.destroyCarousel('.step1-board');
				self.createCarousel('.step1-board');
			} else if (self.config.$mainSlider.getCurrentSlide() == 1) {
				self.setBackgroundImage(".step2-size", 2);
			} else if (self.config.$mainSlider.getCurrentSlide() == 2) {
				self.setBackgroundImage(".step3-top", 3);
				// reset carousel
				self.destroyCarousel('.step3-top');
				self.createCarousel('.step3-top');
			} else if (self.config.$mainSlider.getCurrentSlide() == 3) {
				self.setBackgroundImage(".step4-sidewall", 4);
				// reset carousel
				self.destroyCarousel('.step4-sidewall');
				self.createCarousel('.step4-sidewall');
			} else if (self.config.$mainSlider.getCurrentSlide() == 4) {
				self.setBackgroundImage('.step5-base', '5');
				// reset carousel
				self.destroyCarousel('.step5-base');
				self.createCarousel('.step5-base');
			} else if (self.config.$mainSlider.getCurrentSlide() == 5) {
				self.setBackgroundImage(".step5b-base-text", "5");
			} else if (self.config.$mainSlider.getCurrentSlide() == 6) {
				self.setBackgroundImage('.step6-badge', 6);
			} else if (self.config.$mainSlider.getCurrentSlide() == 7) {
				self.setBackgroundImage(".step7-buy", 7);
				// fix scroll
				$('.thereciept-scroll').css('height', $(window).height());
			}
		} else {
			// check to see if boards are rendering taller than the window is
			var boardDisplay = $('#board-display');
			if(boardDisplay.height() > windowHeight) {
				var boardDisplayWidth, boardDisplayHeight, maxWidth;
				boardDisplayWidth = $('#board-display .board-preview .board-views .preview-side .board .board-image .sidewall-bottom').width();
				boardDisplayHeight = $('#board-display .board-preview .board-views .preview-side .board .board-image .sidewall-bottom').height();
				aspectRatio = boardDisplayWidth / boardDisplayHeight;
				newHeight = windowHeight - headerHeight;
				newWidth = Math.floor(newHeight * aspectRatio);
				maxWidth = Math.floor(windowWidth * 0.2);
				// make sure board display doesn't exceed max width
				if(newWidth > maxWidth) {
					newWidth = maxWidth;
				}
				boardDisplay.width(newWidth);
				if($('body.diy-share .wrapper #header-share').width() < windowWidth * 0.8) {
					boardDisplay.css('left', 'auto');
					boardDisplay.css('right', '30%');
				} else {
					boardDisplay.removeAttr('style');
				}
				// adjust positioning of other views
				$('.board-views div.preview-side').css('left', $('.board-views div.preview-top').width() - 40);
				$('.board-views div.preview-base').css('left', Math.floor($('.board-views div.preview-top').width() * 2 - 60));
			} else {
				boardDisplay.removeAttr('style');
				$('.board-views div.preview-side').removeAttr('style');
				$('.board-views div.preview-base').removeAttr('style');
			}
		}
		self.updateBoardDisplay();
	}, // END resizeForDesktop

	resizeForMobile: function () {
		return false;

		var self = this;
		$('#mobile-blocker').css('display', 'block');
		// SMALLER IS LARGER - ADJUST PERCENTAGE*/
		var winW = $(window).width() / 3.95;
		/*HIGHER IS SMALLER*/
		$('.bxDivShape li').css("max-width", $(window).height() / 90 + "%"); //"13%");
		$('#info-box').css("margin-left", "auto");
		$('#header').css("width", $(window).innerWidth()); //"13%");
		$('.pagerTop').css("width", $(window).innerWidth()); //"13%");
		$('.step1-board').parent().css("width", $(window).innerWidth());
		if (self.config.$mainSlider.getCurrentSlide() == 7) {
			//self.calcBuyView();
		}
		if (self.config.$mainSlider.getCurrentSlide() == 2) {
			$('.step3-top').parent().css("height", $(window).innerHeight()); //"13%");
			$(".step3-top").css('width', $(window).innerWidth());
		}
		if (self.config.$mainSlider.getCurrentSlide() == 3) {
			$(".step4-sidewall #boardSideItems").css('width', $(window).innerWidth());
		}
		if (self.config.$mainSlider.getCurrentSlide() == 5) {

		}
		if (self.config.$mainSlider.getCurrentSlide() == 6) {
			$(".step6-badge").parent().css('width', $('#region-selector').width());
			$(".step6-badge").parent().css('height', $('#region-selector').height());
		}
		if (self.config.$mainSlider.getCurrentSlide() == 7) {
			$('.step7-buy').parent().delay(1).css("width", $('.wrapper').width()); //"13%");
		}
	} // END resizeForMobile
};
/* Adding visibility methods to jQuery,
not sure if this is even being used */
jQuery.fn.visible = function () {
	return this.css('visibility', 'visible');
};
jQuery.fn.invisible = function () {
	return this.css('visibility', 'hidden');
};
jQuery.fn.visibilityToggle = function () {
	return this.css('visibility', function (i, visibility) {
		return (visibility == 'visible') ? 'hidden' : 'visible';
	});
};
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
			clearTimeout(timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();
window.addEventListener("load", function () {
	setTimeout(function () {
		window.scrollTo(0, 1);
	}, 0);
});
/*$(document).bind("mobileinit", function (event) {
	$.extend($.mobile.zoom, {
		locked: true,
		enabled: false
	});
});*/
// $(document).bind('touchmove', false);
$(document).keydown(function (objEvent) {
	if (objEvent.keyCode == 9) { //tab pressed
		objEvent.preventDefault(); // stops its action
	}
});