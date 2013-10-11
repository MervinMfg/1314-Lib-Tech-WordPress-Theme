/*

    Lib Tech DIY Builder - lib-tech.com
    VERSION 1.0
    AUTHOR brian.behrens@mervin.com & a freelancer we care not to mention

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
	"KnifecutPriceUS": "669.9",
	"KnifecutPriceCA": "694.9",
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
	"KnifecutPriceUS": "759.9",
	"KnifecutPriceCA": "789.9",
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
	"KnifecutPriceUS": "739.9",
	"KnifecutPriceCA": "759.9",
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
	"KnifecutPriceUS": "739.9",
	"KnifecutPriceCA": "759.9",
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
	"KnifecutPriceUS": "739.9",
	"KnifecutPriceCA": "769.9",
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
	"KnifecutPriceUS": "699.9",
	"KnifecutPriceCA": "719.9",
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
	"KnifecutPriceUS": "739.9",
	"KnifecutPriceCA": "769.9",
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
	"KnifecutPriceUS": "499.9",
	"KnifecutPriceCA": "509.9",
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
		"ContourTitle": "Eliptical Camber/Banana & Magne-Traction",
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
		"ContourTitle": "Camber Dominant Banana & Magne-Traction",
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
		nPlaxVal: $(window).width() / 10,
		nShapePlax: $(window).width() / 1.52,
		oImgShape: "",
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
		defaultBaseInput: ""
	},
	init: function () {
		var self = this;
		self.flyOutMenuInit();
		self.boardPreviewInit();
		// set base default colors
		self.setCustomTextColor('White');
		self.setCustomBaseColor('Black');

		self.config.$mainSlider = $('.bxDivSlider').bxSlider({
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
				$('.menuButtons li').css("font-weight", "400");
				$('.bxDivSlider > li').css('background-image', 'none');
			},
			onSlideAfter: function () {
				// don't run first time, wait for delayed load
				if(self.config.bFirstPlay == false) {
					self.setCurrentSection();
				}
			}
		});
		self.defaultBadgeInput = $('.board-badge-input-holder .board-badge-input').val();
		self.defaultBaseInput = $('#knifecut-base-controls .knifecut-input #board-text').val();
		$('.boardShape1 .bx-wrapper .bx-controls').css("display", "none");
		$('.boardShape1').css("left", "0px");
		self.config.nPlaxVal = 0;
		
		$(window).on('load', function () {
			delayLoad();
		});
		$(window).on('resize', function () {
			waitForFinalEvent(function () {
				self.config.aspectRatio = $(window).height() / $(window).width();
				if ($('#topSection').css('display') == 'none') {
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
			// topSection
			// PRELOAD AS MANY IMAGES AS WE CAN
			if ($('.bx-pager').css('display') == 'block') {
				self.config.isMobile = true;
			} else {
				self.config.isMobile = false;
			}
			self.config.aspectRatio = $(window).width() / $(window).height();
			if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
				self.config.isSafari = true;
			}
			$('#topSection').delay(59).animate({
				opacity: 1
			}, 200);
			if ($("#menuClose").css("display") === "block") {
				self.config.isIpad = true;
				//$('#blackBoxInfo').css('position','absolute');
			} else {
				//$('#blackBoxInfo').css('position','relative');
			}
			// listen for flag selection
	        $("#topFlag a").on('click', function (e) {
	            e.preventDefault();
	            e.stopPropagation(); // kill even from firing further
	            if (navigator.cookieEnabled === false) {
	                alert('Enable cookies in your browser in order to select your region.');
	            } else {
	                LIBTECH.main.regionSelectorOverlayInit();
	            }
	        });
			// set the first section
			self.setCurrentSection();
			// trigger resize
	        if (self.config.isMobile) {
				self.resizeForMobile();
			} else {
				self.resizeForDesktop();
			}
			// set region
			if (LIBTECH.main.utilities.cookie.getCookie('libtech_region') != "" && LIBTECH.main.utilities.cookie.getCookie('libtech_region') != undefined) {
				self.bbSetRegion(LIBTECH.main.utilities.cookie.getCookie('libtech_region'));
			}
			// hide the div blocker
			$('#divBlocker').delay(300).animate({
				opacity: '0'
			}, {
				duration: 700,
				complete: function () {
					$('#divBlocker').hide();  
					$(".bxDivSlider ul.bxDivShape").parent().css('height', $(window).height());
				}
			});
		}
		/// this pulls the preview from the buy
		if (self.config.nCurSlide != 0 || self.config.nCurSlide != 7) {
			$(".boardShape1").parent().css('overflow', 'hidden');
			$(".boardTop3").parent().css('overflow', 'hidden');
			$(".boardBase5").parent().css('overflow', 'hidden');
			$('.miniReciept').css('z-index', '-333');
		}
		// TODO INCREASE MAIN SLIDER HITBOXXXXX
		$('body').on('click', '.bx-pager-item', function () {
			self.config.$mainSlider.goToSlide($(this).find("a").html() - 1);
		});
	},
	shareInit: function () {
		var self = this;
		if (LIBTECH.main.utilities.cookie.getCookie('libtech_region') != "" && LIBTECH.main.utilities.cookie.getCookie('libtech_region') != undefined) {
			self.bbSetRegion(LIBTECH.main.utilities.cookie.getCookie('libtech_region'));
		}
		self.buildShare();
		$(window).on('load', function () {
			if (self.config.isMobile) {
				self.resizeForMobile();
			} else {
				self.resizeForDesktop();
			}
			$('#divBlocker').delay(300).animate({
				opacity: '0'
			}, {
				duration: 700,
				complete: function () {
					$('#divBlocker').hide();
				}
			});
		});
		$(window).on('resize', function () {
			waitForFinalEvent(function () {
				self.config.aspectRatio = $(window).height() / $(window).width();
				if ($('#topSection').css('display') == 'none') {
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
		(sReg != 'ca') ? self.config.bbRegionCurrency = "USD" : self.config.bbRegionCurrency = "CAD";
		self.config.bbRegion = sReg;
	},
	bbGetRegion: function () {
		var self = this;
		if (self.config.bbRegion == '' || self.config.bbRegion == undefined) {
			self.config.bbRegion = "US";
		}
		self.config.bbRegion = self.config.bbRegion.toUpperCase();
		return self.config.bbRegion;
	},
	setKnifeCutPrice: function (nKC) {
		var self = this;
		(nKC == '' || nKC == undefined) ? self.config.bbKnifeCutDiff = "0.00" : self.config.bbKnifeCutDiff = nKC;
		self.config.bbKnifeCutDiff = nKC;
	},
	getKnifeCutPrice: function () {
		var self = this;
		if (self.config.bbKnifeCutDiff == '' || self.config.bbKnifeCutDiff == undefined) {
			self.config.bbKnifeCutDiff = "0.00";
		}
		return self.config.bbKnifeCutDiff;
	},
	setBoardShape: function (oImg) {
		var self, spanVal, boardNum, theContour, sShape;
		self = this;
		if (oImg == "" || oImg == undefined) {
			spanVal = 1;
			boardNum = self.config.globalNum;
			self.setBoardSize('');
			$(".boardShape1 ul li img").each(function () {
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
		$('.boardTechName').text(sNoDash); // being hidden now
		// Board Details
		$('.boardTech2 .board-info .board').html(sNoDash); // being hidden now
		$('.boardTech2 .board-info .shape-desc').html("<strong>SHAPE &nbsp;</strong> " + boardData[boardNum].ShapeDescription);
		$('.boardTech2 .board-info .board-tagline').text(boardData[boardNum].BoardTagline);
		$('.boardTech2 .board-info .board-desc').text(boardData[boardNum].BoardDescription);
		// Contour Details
		theContour = boardData[boardNum].Contour;
		$('.boardTech2 .board-info .contour-title').html(contourData[theContour].ContourTitle);
		$('.boardTech2 .board-info .contour-desc').html(contourData[theContour].ContourDescription);
		// Size Details
		$('.boardTech2 .size-info .size-holder .sizes').html(self.calculateSizes(boardData[boardNum].Sizes));
		$('.boardTech2 .size-info .size-detail-table .table-data').html(self.printSizeInfo(boardData[boardNum].ContactLength, boardData[boardNum].Sidecut, boardData[boardNum].WaistWidth, boardData[boardNum].Flex) + "");
		$('.boardTech2 .size-info .size-detail-table .table-data').clone().wrap('<p>').parent().html();
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
		if (sShape == "" || sShape == undefined) {
			self.advanceArrowHide();
			// unselect board shape image
			$(".boardShape1 ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
			sShape = "";
			self.setBoardSize('');
		}
		// show arrow if shape a selected
		if (oImg != "" && oImg != undefined) {
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
		if (sSize == '' || sSize == undefined) {
			$('.menu2Title').html("Size");
			$('.menu2Title').removeClass('menuTitleFull');
			$('.menu2TitleX span').removeClass('menuXVisible')
			$(".size-detail-table .table-data li").each(function (index) {
				$(this).removeClass("sizeYellow");
			});
			$(".size-item").each(function (index) {
				$(this).css('background-color', '#ffffff');
			});
			self.advanceArrowHide();
		}
		self.config.bSize = sSize;
	},
	getBoardSize: function () {
		var self = this;
		if (self.config.bSize != null && self.config.bSize != undefined && self.config.bSize) {
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
		if (imgDesc == "" || imgDesc == undefined) {
			self.advanceArrowHide();
			self.setBoardArtist('');
			self.setBoardDescription('');
			self.config.bTop = "";
			$(".boardTop3 ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
		} else {
			self.setBoardArtist(imgName);
			self.setBoardDescription(imgDesc);
			self.config.bTop = imgDesc;
			$('.boardTop3 .topInfo h2').html(imgName);
			$('.boardTop3 .topInfo h3').html(imgDesc);
			$('.menu3Title').addClass('menuTitleFull');
			$('.menu3TitleX span').addClass('menuXVisible');
			$('.menu3Title').html("" + "" + imgName + " " + imgDesc + "<b><br>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
			self.boardPreviewSet(2);
		}
		self.updateBoardDisplay();
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
		if (self.config.bDesc == '' || self.config.bDesc == undefined) {
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
		if (self.config.bArtist == '' || self.config.bArtist == undefined) {
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
		if (sColor == "" || sColor == undefined) {
			self.advanceArrowHide();
			self.config.bSidewall = "";
			self.config.bSidewallDesc = "";
			self.advanceArrowHide();
			$(".boardSide4 ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
		} else {
			self.config.bSidewall = sColor;
			self.config.bSidewallDesc = sDesc;

			$('.menu4Title').html("" + " " + self.getBoardSidewall() + " " + "" + "<br><b>+ $ 0.00</b>");
			$('.menu4Title').addClass('menuTitleFull');
			$('.menu4TitleX span').addClass('menuXVisible');
		}
		self.updateBoardDisplay();
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
		if (imgDesc == "" || imgDesc == undefined) {
			self.advanceArrowHide();
			self.setBoardBaseArtist('');
			self.setBoardBaseDesc('');
			self.config.bBase = "";
			self.config.isKnifecut = false;
			$(".boardBase5 ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
		} else {
			self.setBoardBaseArtist(imgName);
			self.setBoardBaseDesc(imgDesc);
			self.config.bBase = imgName;
			$('.menu5Title').addClass('menuTitleFull');
			$('.menu5TitleX span').addClass('menuXVisible');
			if (imgName == 'Custom') {
				// KNIFE CUT BASE
				self.config.isKnifecut = true;
				self.setBoardBaseDesc($('.board-text-custom').val());
				if (self.bbGetRegion() == "CA") {
					var kcPrice = boardData[self.config.globalNum].KnifecutPriceCA;
					var nonKCPrice = boardData[self.config.globalNum].BasePriceCA;
				} else {
					var kcPrice = boardData[self.config.globalNum].KnifecutPriceUS;
					var nonKCPrice = boardData[self.config.globalNum].BasePriceUS;
				}
				var kcPriceDifference = parseFloat((kcPrice - nonKCPrice).toFixed(2));
				self.setKnifeCutPrice(kcPriceDifference);
				$('.menu5TitleX span').addClass('menuXVisible');
				$('.menu5Title').html("" + "  " + "CUSTOMIZED TEXT" + "<br /><b>+ $ " + kcPriceDifference + " " + self.config.bbRegionCurrency + "</b>");
			} else {
				// GRAPHIC BASE
				self.config.isKnifecut = false;
				$('.menu5Title').html("" + "  " + imgName + " " + imgDesc + "<br><b>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
			}
		}
		self.updateBoardDisplay();
	},
	getBoardBase: function () {
		var self = this;
		if (self.config.bBase == '' || self.config.bBase == undefined) {
			self.config.bBase = ""
		}
		return self.config.bBase;
	},
	setBoardBaseArtist: function (sBase) {
		var self = this;
		self.config.bBaseArtist = sBase;
	},
	getBoardBaseArtist: function () {
		var self = this;
		if (self.config.bBaseArtist == '' || self.config.bBaseArtist == undefined) {
			self.config.bBaseArtist = ""
		}
		return self.config.bBaseArtist;
	},
	setBoardBaseDesc: function (sBase) {
		var self = this;
		self.config.bBaseDesc = sBase;
	},
	getBoardBaseDesc: function () {
		var self = this;
		//TODO: SET DEFAULTS TO GREY!!!
		if (self.config.bBaseDesc == '' || self.config.bBaseDesc == undefined) {
			self.config.bBaseDesc = ""
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
		if (sBadge == "" || sBadge == undefined) {
			$('.menu6Title').html("Personalized Badge");
			$('.menu6Title').removeClass('menuTitleFull');
			$('.menu6TitleX span').removeClass('menuXVisible');
			$('.boardBadgeTextHolder .badge-text-wide').html('');
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
		if (topArist == "" || topArist == undefined || topDesc == undefined || topDesc == "") {
			self.config.topGraphicImg = self.config.baseImgPath + "snowboard-top/default/" + boardShape + ".png";
		} else {
			self.config.topGraphicImg = self.config.baseImgPath + "snowboard-top/top/" + boardShape + "-" + topArist + "-" + topDesc + ".png";
		}
		$('#boardDisplay .boardPreview .boardViews .previewTop .board .bImage img').attr('src', self.config.topGraphicImg);
		// SET SIDEWALL GRAPHIC
		if(sidewallColor == "" || sidewallColor == undefined) {
			//self.config.sidewallTopImg = self.config.baseImgPath + "snowboard-sidewall/sidewall/" + boardShape + "-YELLOW.png";
			$('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage img.sidewall-top').css('display', 'none');
		} else {
			self.config.sidewallTopImg = self.config.baseImgPath + "snowboard-sidewall/sidewall/" + boardShape + "-" + sidewallColor + ".png";
			$('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage img.sidewall-top').css('display', 'block');
		}
		// sidewall bottom image
		if (topArist == "" || topArist == undefined || topDesc == undefined || topDesc == "") {
			self.config.sidewallBottomImg = self.config.baseImgPath + "snowboard-sidewall/default/" + boardShape + ".png";
		} else {    	  	
			self.config.sidewallBottomImg = self.config.baseImgPath + "snowboard-sidewall/sidewall-top/" + boardShape + "-" + topArist + "-" + topDesc + ".png";
		}
		// END UPDATE SIDEWALL
		$('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage img.sidewall-top').attr('src', self.config.sidewallTopImg);
		$('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage img.sidewall-bottom').attr('src', self.config.sidewallBottomImg);
		// $('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage img.sidewall-hidden').attr('src', self.config.topGraphicImg); // just a placeholder
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
			$('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .base').attr('src', iNewBaseImg);
			$('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .custom-base-logo').attr('src', iNewBaseText);
			$('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .custom-base-logo').css('display', 'block');
			$('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .bText .board-text-custom').css('display', 'inline');
			// set knifecut text to be sure it's right
			if(self.getBoardBaseDesc() == "" || self.getBoardBaseDesc() == undefined) {
				var knifecutInputVal = $('#knifecut-base-controls .knifecut-input #board-text').val();
				if(self.defaultBaseInput == knifecutInputVal || knifecutInputVal == "") {
					$('#boardDisplay .previewBase .board .bText .rotate-one .board-text-custom').html('DIY BASE!');
				} else {
					$('#boardDisplay .previewBase .board .bText .rotate-one .board-text-custom').html(knifecutInputVal);
				}
			} else {
				$('#boardDisplay .previewBase .board .bText .rotate-one .board-text-custom').html(self.getBoardBaseDesc());
			}
			// set board font size			
			var knifecutText = $('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .bText .rotate-one .board-text-custom');
			var knifecutTextHolder = $("#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .bText");
			var boardWidth = $("#boardDisplay").width();
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
			$('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .bText .rotate-one .board-text-custom').css('color', customTextColorHex);
		} else {
			// GRAPHIC BASE
			if (baseArist == "" || baseArist == undefined) {
				iNewImgBase = self.config.baseImgPath + "snowboard-base/default/" + boardShape + ".png";
			} else {
				iNewImgBase = self.config.baseImgPath + "snowboard-base/base/" + boardShape + "-" + baseArist + "-" + baseDesc + ".png";
			}
			$('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .base').attr('src', iNewImgBase);
			$('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .custom-base-logo').css('display', 'none');
			$('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .bText .board-text-custom').css('display', 'none');
		}
	},
	resetAll: function () {
		var self = this;
		$('.menu1Title').html("SHAPE & CONTOUR");
		$('.menu1Title').removeClass('menuTitleFull');
		$('.menu1TitleX span').removeClass('menuXVisible');
		$('.menu2Title').html("Size");
		$('.menu2Title').removeClass('menuTitleFull');
		$('.menu2TitleX span').removeClass('menuXVisible');
		$('.menu3Title').html("Top Sheet Art");
		$('.menu3Title').removeClass('menuTitleFull');
		$('.menu3TitleX span').removeClass('menuXVisible');
		$('.menu4Title').html("Sidewall Color");
		$('.menu4Title').removeClass('menuTitleFull');
		$('.menu4TitleX span').removeClass('menuXVisible');
		$('.menu5Title').html("Base Options");
		$('.menu5Title').removeClass('menuTitleFull');
		$('.menu5TitleX span').removeClass('menuXVisible');
		$('.menu6Title').html("Personalized Badge");
		$('.menu6Title').removeClass('menuTitleFull');
		$('.menu6TitleX span').removeClass('menuXVisible');
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
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},
	buildShare: function () {
		var self = this;
		if(self.getParameterByName('shape') != "" && self.getParameterByName('size') != "" && self.getParameterByName('top') != "" && self.getParameterByName('sidewall') != "" && self.getParameterByName('badge') != "") {
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
			if(self.getParameterByName('base') != "") {
				// set graphic base
				var base, baseArtist, baseDesc;
				base = self.getParameterByName('base');
				baseArtist = base.split(" ")[0];
				baseDesc = base.split(" ")[1];
				self.setBoardBaseArtist(baseArtist);
				self.setBoardBaseDesc(baseDesc);
				self.config.bBase = baseArtist;
				self.config.isKnifecut = false;
			} else if (self.getParameterByName('kt') != "" && self.getParameterByName('kbc') != "" && self.getParameterByName('ktc') != "") {
				// set knifecut base
				var knifecutText, knifecutBaseColor, knifecutTextColor, kcPriceDifference;
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
					var kcPrice = boardData[self.config.globalNum].KnifecutPriceCA;
					var nonKCPrice = boardData[self.config.globalNum].BasePriceCA;
				} else {
					var kcPrice = boardData[self.config.globalNum].KnifecutPriceUS;
					var nonKCPrice = boardData[self.config.globalNum].BasePriceUS;
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
		$('#leftmenu').mouseenter(function () {
			TweenMax.to($(this), .135, {
				left: 0
			});
		}).mouseleave(function () {
			TweenMax.to($(this), .135, {
				left: -195
			});
		});
		$('#menuClose').bind("click touch", function () {
			$("#leftmenu").stop().animate({
				left: "-195px"
			}, 73);
		});
		// MENU - REMOVE OPTIONS
		$('.menu1TitleX').bind("click touch", function () {
			$('.menu1Title').html("Shape & Contour");
			$('.menu1Title').removeClass('menuTitleFull');
			$('.menu1TitleX span').removeClass('menuXVisible');
			self.advanceArrowHide();
			$('#blackBoxInfo').hide();
			self.setBoardShape('');
			self.confirmedShapeSelection = false;
			self.config.$mainSlider.goToSlide(0);
		});
		$('.menu2TitleX').bind("click touch", function () {
			$('.menu2Title').html("Size");
			$('.menu2Title').removeClass('menuTitleFull');
			$('.menu2TitleX span').removeClass('menuXVisible');
			self.setBoardSize("");
			self.config.$mainSlider.goToSlide(1);
		});
		$('.menu3TitleX').bind("click touch", function () {
			$('.menu3Title').html("Topsheet Art");
			$('.menu3Title').removeClass('menuTitleFull');
			$('.menu3TitleX span').removeClass('menuXVisible');
			self.setBoardTop("");
			self.config.$mainSlider.goToSlide(2);
		});
		$('.menu4TitleX').bind("click touch", function () {
			$('.menu4Title').html("Sidewall Color");
			$('.menu4Title').removeClass('menuTitleFull');
			$('.menu4TitleX span').removeClass('menuXVisible');
			self.setBoardSidewall("");
			self.config.$mainSlider.goToSlide(3);
		});
		$('.menu5TitleX').bind("click touch", function () {
			$('.menu5Title').html("Base Options");
			$('.menu5Title').removeClass('menuTitleFull');
			$('.menu5TitleX span').removeClass('menuXVisible');
			self.setBoardBase("");
			// reset knifecut text
			self.setCustomTextColor('White');
			self.setCustomBaseColor('Black');
			self.config.$mainSlider.goToSlide(4);
		});
		$('.menu6TitleX').bind("click touch", function () {
			$('.menu6Title').html("Personalized Badge");
			$('.menu6Title').removeClass('menuTitleFull');
			$('.menu6TitleX span').removeClass('menuXVisible');
			$('.boardBadgeTextHolder .badge-text-wide').html('');
			self.setBoardBadge('');
			$('input[name=badge]').val(self.defaultBadgeInput);
			self.config.$mainSlider.goToSlide(6);
		});
		$('.menu1, .menu1Title').bind("click touch", function () {
			self.config.$mainSlider.goToSlide(0);
		});
		$('.menu2, .menu2Title').bind("click touch", function () {
			self.config.$mainSlider.goToSlide(1);
		});
		$('.menu3, .menu3Title').bind("click touch", function () {
			self.config.$mainSlider.goToSlide(2);
		});
		$('.menu4, .menu4Title').bind("click touch", function () {
			self.config.$mainSlider.goToSlide(3);
		});
		$('.menu5, .menu5Title').bind("click touch", function () {
			self.config.$mainSlider.goToSlide(4);
		});
		$('.menu6, .menu6Title').bind("click touch", function () {
			self.config.$mainSlider.goToSlide(6);
		});
		$('.menu7, .menu7Title').bind("click touch", function () {
			self.config.$mainSlider.goToSlide(7);
		});
		$('.menu7B, .menu7TitleB').bind("click touch", function () {
			self.config.$mainSlider.goToSlide(7);
		});
	},
	boardPreviewInit: function () {
		var self = this;
		$('body').on('click touch', '.boardMenuLeftButton img', function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-left.png');
			self.boardPreviewCycle('left');
		});
		$('body').on('click touch', '.boardMenuRightButton img', function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-right.png');
			self.boardPreviewCycle('right');
		});
		$(".boardMenuLeftButton img").mouseover(function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-left-y.png');
		}).mouseout(function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-left-w.png');
		});
		$(".boardMenuRightButton img").mouseover(function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-right-y.png');
		}).mouseout(function () {
			$(this).attr('src', self.config.baseImgPath + 'bb-right-w.png');
		});
	},
	boardPreviewCycle: function (sDirection) {
		var self = this;
		$('.boardViews div.previewTop').hide();
		$('.boardViews div.preview34').hide();
		$('.boardViews div.previewBase').hide();

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
		if (sDirection == 'left' && self.config.nPreviewNum == 0) {
			$('.boardViews div.preview34').show();
		}
		if (sDirection == 'left' && self.config.nPreviewNum == 2) {
			$('.boardViews div.previewTop').show();
		}
		if (sDirection == 'left' && self.config.nPreviewNum == 1) {
			$('.boardViews div.previewBase').show();
			// make sure knifecut displays correctly
			self.updateBoardDisplay();
		}
		if (sDirection == 'right' && self.config.nPreviewNum == 1) {
			$('.boardViews div.previewBase').show();
			// make sure knifecut displays correctly
			self.updateBoardDisplay();
		}
		if (sDirection == 'right' && self.config.nPreviewNum == 2) {
			$('.boardViews div.previewTop').show();
		}
		if (sDirection == 'right' && self.config.nPreviewNum == 0) {
			$('.boardViews div.preview34').show();
		}
	},
	boardPreviewSet: function (nSlideNum) {
		var self = this;

		$('.boardViews div.previewTop').hide();
		$('.boardViews div.preview34').hide();
		$('.boardViews div.previewBase').hide();
		$('#boardDisplay .boardPreview .boardMenuLeftButton').show();
		$('#boardDisplay .boardPreview .boardMenuRightButton').show();

		// reset board view position
		$('.boardViews div.preview34').css('left', '0px');
		$('.boardViews div.previewBase').css('left', '0px');

		if (nSlideNum == 0) {
			$('#boardDisplay').hide();
		} else {
			$('#boardDisplay').show();
		}
		var boardWidth;
		if (nSlideNum == 1 || nSlideNum == 2 || nSlideNum == 6) {
			$('.boardViews div.previewTop').show();
			$('.boardViews div.preview34').hide();
			$('.boardViews div.previewBase').hide();
			boardWidth = $('.boardViews div.previewTop').width();
			self.config.nPreviewNum = 2;
		} else if (nSlideNum == 3) {
			$('.boardViews div.previewTop').hide();
			$('.boardViews div.preview34').show();
			$('.boardViews div.previewBase').hide();
			boardWidth = $('.boardViews div.preview34').width();
			self.config.nPreviewNum = 0;
		} else if (nSlideNum == 4 || nSlideNum == 5) {
			$('.boardViews div.previewTop').hide();
			$('.boardViews div.preview34').hide();
			$('.boardViews div.previewBase').show();
			boardWidth = $('.boardViews div.previewBase').width();
			self.config.nPreviewNum = 1;
		} else if (nSlideNum == 7) {
			$('.boardViews div.previewTop').show();
			$('.boardViews div.preview34').show();
			$('.boardViews div.previewBase').show();
			$('.boardViews div.preview34').css('left', $('.boardViews div.previewTop').width() - 40);
			$('.boardViews div.previewBase').css('left', $('.boardViews div.previewTop').width() * 2 - 60);
			$('#boardDisplay .boardPreview .boardMenuLeftButton').hide();
			$('#boardDisplay .boardPreview .boardMenuRightButton').hide();
		}
		// position board
		if (nSlideNum == 7) {
			$('#boardDisplay').css('left', '50%');
		} else {
			// center board within left 30% minus 90px for left menu
			var leftPosition = Math.floor((($(window).width() * .3 - 90) - boardWidth) / 2) + 90;
			$('#boardDisplay').css('left', leftPosition);
			//$('#boardDisplay').css('left', '90px');
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

			$("#leftmenu").stop().animate({
				left: "-195px"
			}, 73);
		});
		$('#advance-arrow').stop().animate({
			right: "0px"
		}, 133);
	},
	advanceArrowHide: function () {
		var self = this;
		$('#advance-arrow').stop().delay(33).animate({
			right: "-40px"
		}, 133);
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
		var sHTMLLength = "";
		var sizeArray = sPipedLengths.split('|');
		//size col!
		sizeArrayOnly = sizeArray;
		sHTMLLength += "<div class=\"info-list\"><ul class=\"length-list\"><li>Size</li>";
		sizeArrayOnly.forEach(function (entry) {
			var sz = entry.split(' - ')[0];
			sHTMLLength += "<li class=\"sizeOnly " + $.trim(sz).replace(".", "_") + "\"> " + $.trim(sz) + "</li>";
		});
		sHTMLLength += "</ul></div>";

		var cutArray = sSideCut.split('|');
		sHTMLLength += "<div class=\"info-list\"><ul class=\"side-list\"><li>Sidecut</li>";
		cutArray.forEach(function (cut) {
			var nSize = $.trim(cut.split(' - ')[0]).replace(".", "_");
			var nCut = $.trim(cut.split(' - ')[1]);
			sHTMLLength += "<li class=\"" + nSize + "\">" + nCut + "</li>";
		});
		sHTMLLength += "</ul></div>";

		var sizeArray = sWaistWidth.split('|');
		sHTMLLength += "<div class=\"info-list\"><ul class=\"waist-list\"><li>Waist Width</li>";
		sizeArray.forEach(function (entry) {
			var nSize = $.trim(entry.split(' - ')[0]).replace(".", "_");
			var nWidth = $.trim(entry.split(' - ')[1]);
			sHTMLLength += "<li class=\"" + nSize + "\">" + nWidth + "</li>";
		});
		sHTMLLength += "</ul></div>";

		var sizeArray = sFlex.split('|');
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
		if (nNum != 0) {
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
				$('#topSection').html("SELECT BOARD - SHAPE & CONTOUR");
				$('.pagerLabel').html("SHAPE");
				break;
			case 1:
				$('#topSection').html("SELECT SIZE - BOARD LENGTH");
				$('.pagerLabel').html("SIZE");
				break;
			case 2:
				$('#topSection').html("SELECT ART  -  TOP SHEET ART");
				$('.pagerLabel').html("TOP");
				break;
			case 3:
				$('#topSection').html("SELECT SIDE  -  SIDEWALL COLOR");
				$('.pagerLabel').html("SIDE");
				break;
			case 4:
				$('#topSection').html("SELECT BASE  -  BASE ART");
				$('.pagerLabel').html("BASE");
				break;
			case 5:
				$('#topSection').html("SELECT BASE  -  CUSOMIZED KNIFECUT");
				$('.pagerLabel').html("BASE");
				break;
			case 6:
				$('#topSection').html("SELECT BADGE  -  PERSONALIZE YOUR BADGE");
				$('.pagerLabel').html("BADGE");
				break;
			case 7:
				$('#topSection').html("BUY YOUR SNOWBOARD");
				$('.pagerLabel').html("BUY");
				break;
		}
	},
	showInfoBox: function (nIndex, nItems) {
		var self = this;
		if (nIndex > (nItems / 2) && !self.config.isMobile) {
			$('#blackBoxInfo').css("margin-left", "-350px"); // position arrow/diamond
			$('#blackBoxInfo .blackBoxDiamondL').hide();
			$('#blackBoxInfo .blackBoxDiamondR').show();
		} else {
			$('#blackBoxInfo').css("margin-left", "50px"); // position arrow/diamond
			$('#blackBoxInfo .blackBoxDiamondL').show();
			$('#blackBoxInfo .blackBoxDiamondR').hide();
		}
	},
	// STEPS CODE BEGINS
	// STEP 1 - SHAPE
	step1Init: function () {
		var self = this;
		// resize carousel
		var carouselWidth = 0;
		$(".boardShape1 ul li").each(function (index) {
			carouselWidth += $(this).outerWidth() + 4; // add 4 pixels to fix inline block spaces
		});
		$('.boardShape1').css('width', carouselWidth);
		// scroll carousel items & make black box follow mouse
		$(document).on('mousemove.step1', function (e) {
			var windowWidth, windowCenter, mouseXPos, percentage, containerWidth, containerCenter, containerCenteredX, containerX;
			windowWidth = $(window).width();
			windowCenter = windowWidth / 2;
			mouseXPos = e.pageX;
			percentage = ((mouseXPos / windowCenter) - 1) * -1;
			containerWidth = $('.boardShape1').width();
			containerCenter = containerWidth / 2;
			containerCenteredX = (containerCenter - windowCenter) * -1;
			containerX = containerCenteredX + (percentage * containerWidth);
			if (containerX > windowCenter) {
				containerX = windowCenter;
			} else if (containerX < (containerWidth - windowCenter) * -1) {
				containerX = (containerWidth - windowCenter) * -1;
			}
			TweenMax.to($('.boardShape1'), .3, {'left': containerX}); // $('.boardShape1').css('left', containerX);
			// BLACK BOX
			if (!self.config.isMobile) {
				$('#blackBoxInfo').css({
					left: e.pageX + 20,
					top: e.pageY - 20
				});
			};
		});

		var flag = false;
		$('.boardShape1 ul li img').on('mouseenter.step1', function () {
			self.config.oImgShape = $(this);
			processHover(self.config.oImgShape);
		}).on('mouseleave.step1', function () {
			$('#blackBoxInfo').hide();
			var boardImg = $(this);
			if (boardImg.hasClass('selectedShape')) {} else {
				boardImg.ScaleX = 1;
				boardImg.ScaleY = 1;
				if (!self.config.lockHover) boardImg.removeClass('selectedShape')
			}
		}).on('click.step1', function (e) {
			self.confirmedShapeSelection = true;

			$("#leftmenu").stop().animate({
				left: "0px"
			}, 273);
			if (!self.config.isMobile && !self.config.isIpad) {
				$('#blackBoxInfo').css('z-index', '9884');
				if (!self.config.isMobile || !self.config.isIpad) $(this).addClass('selectedShape');
			}
			processHover($(this));
			processClick($(this));

			self.setBoardShape($(this));
		}).on('touchend.step1', function (e) {
			if (!flag && isMobile) {
				flag = true;
				setTimeout(function () {
					flag = false;
				}, 60);
				
				if (!self.config.isMobile) {
					$('#blackBoxInfo').css('left', pointerEventToXY(e).x)
					$('#blackBoxInfo').css('top', pointerEventToXY(e).y)
				}
				processHover($(this));
				processClick($(this));

				self.setBoardShape($(this));
			}
			return false
		});
		/* STEP 1 - TOUCH  */
		var pointerEventToXY = function (e) {
			var out = {
				x: 0,
				y: 0
			};
			if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				out.x = touch.pageX;
				out.y = touch.pageY;
			} else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
				out.x = e.pageX;
				out.y = e.pageY;
			}
			return out;
		};
		function processHover(oImg) {
			$('#blackBoxInfo img, #blackBoxInfo h4, #blackBoxInfo p, #blackBoxInfo sizeInfo').css('display', 'block')
			$('#blackBoxInfo h5').css('display', 'none');
			if (!self.config.isMobile && !self.config.isIpad) $('#blackBoxInfo').show();
			nNum = oImg.attr("shapenum") - 1;
			/*if (self.config.isIpad) {
				if (!self.config.isMobile || !self.config.isIpad) oImg.addClass('selectedShape');
				processClick(oImg);
			}*/
			$('.topInfo h2').text(boardData[nNum].Model);
			$('.topInfo h3').text(boardData[nNum].BoardTagline);
			$('#blackBoxInfo h2').text(boardData[nNum].Contour + " - " + boardData[nNum].Model);
			$('#blackBoxInfo h3').text(boardData[nNum].BoardTagline);
			$('#blackBoxInfo p span').text(boardData[nNum].Sizes);
			theContour = boardData[nNum].Contour;
			$('#blackBoxInfo h4').text(contourData[theContour].ContourTitle);
			// BoardDescription
			splitArray = boardData[nNum].Sizes;
			splitArray = splitArray.split('|').join(' ') + "";
			$('#blackBoxInfo p span').text(splitArray);
			/*TODO: SET CONTOUR*/
			$('#blackBoxInfo img').attr('src', self.config.baseImgPath + boardData[nNum].ContourImage);
			self.showInfoBox(nNum, self.config.numBoardShapes);
			var boardImg = oImg;
			boardImg.ScaleX = 1;
			boardImg.ScaleY = 1;
			if (!self.config.isMobile || !self.config.isIpad) boardImg.addClass('selectedShape');
		}
		function processClick(oImg) {
			$("#leftmenu").stop().animate({
				left: "0px"
			}, 73);
			self.config.oImgShape = oImg;
			if (!self.config.isMobile && self.config.isIpad != true) $('#blackBoxInfo').show();

			$(".boardShape1 ul li img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
			oImg.addClass('confirmedShape');
			nNum = oImg.attr("shapenum") - 1;
			self.config.globalNum = nNum;

			var price;
			if (self.bbGetRegion() == "CA") {
				price = boardData[nNum].BasePriceCA;
			} else {
				price = boardData[nNum].BasePriceUS;
			}
			$('.menu1Title').html("" + "" + boardData[nNum].Model + "<br><b>+ $ " + price + " " + self.config.bbRegionCurrency + "</b>");
			$('.menu1Title').addClass('menuTitleFull');
			$('.menu1TitleX span').addClass('menuXVisible');
		}
		if (self.getBoardShape() == undefined || self.getBoardShape() == "" || !self.confirmedShapeSelection) {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
		self.setBackgroundImage(".boardShape1", 1);
	},
	step1Uninit: function () {
		$(document).off('mousemove.step1');
		$('.boardShape1 ul li img').off('mouseenter.step1 mouseleave.step1 click.step1 touchend.step1');
	},
	// STEP 2 - SIZE
	step2Init: function () {
		var self = this;
		self.setBackgroundImage(".boardTech2", 2);
		if (self.getBoardSize() == undefined || self.getBoardSize() == "") {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
		$('.size-item').on("click.step2 touch.step2", function () {
			//size-item click
			var nDetailHighlight = $(this).attr('val').replace(".", "_");
			var theSize = '#lengthList.' + nDetailHighlight
			$(".size-detail-table .table-data .info-list li").each(function (index) {
				$(this).removeClass("sizeYellow");
			});
			if ($('.size-detail-table .table-data .info-list li').hasClass(nDetailHighlight)) {
				$(this).addClass("sizeYellow");
			}
			$('.' + nDetailHighlight).addClass("sizeYellow");
			self.advanceArrowShow();
			$(".size-item").each(function (index) {
				$(this).css('background-color', '#ffffff');
			});
			self.setBoardSize($(this).text());
			$('.menu2Title').html("" + "Size " + self.getBoardSize() + "<b><br>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
			$('.menu2Title').addClass('menuTitleFull');
			$('.menu2TitleX span').addClass('menuXVisible');
			$(this).css('background-color', '#ffff00');
		});
	},
	step2Uninit: function () {
		$('.size-item').off("click.step2 touch.step2");
	},
	// STEP 3 - TOP
	step3Init: function () {
		var self = this;
		// resize carousel
		var carouselWidth = 0;
		$(".boardTop3 .carousel ul li.item").each(function (index) {
			carouselWidth += $(this).outerWidth() + 4; // add 4 pixels to fix inline block spaces
		});
		$('.boardTop3 .carousel').css('width', carouselWidth);
		// change height of container
		var carouselHeight = $(".boardTop3 .carousel").outerHeight();
		$('.boardTop3 .carousel-container').css('height', carouselHeight);
		// scroll carousel items & make black box follow mouse
		$(document).on('mousemove.step3', function (e) {
			var windowWidth, windowCenter, mouseXPos, percentage, containerWidth, containerCenter, containerCenteredX, containerX;
			windowWidth = $('.boardTop3 .carousel-container').width();
			windowCenter = windowWidth / 2;
			mouseXPos = e.pageX - $('.boardTop3 .carousel-container').position().left;
			percentage = ((mouseXPos / windowCenter) - 1) * -1;
			containerWidth = $('.boardTop3 .carousel').width();
			containerCenter = containerWidth / 2;
			containerCenteredX = (containerCenter - windowCenter) * -1;
			containerX = containerCenteredX + (percentage * containerWidth);
			if (containerX > windowCenter) {
				containerX = windowCenter;
			} else if (containerX < (containerWidth - windowCenter) * -1) {
				containerX = (containerWidth - windowCenter) * -1;
			}
			TweenMax.to($('.boardTop3 .carousel'), .3, {'left': containerX}); // $('.boardShape1').css('left', containerX);
			// BLACK BOX
			if (!self.config.isMobile) {
				$('#blackBoxInfo').css({
					left: e.pageX + 20,
					top: e.pageY - 20
				});
			};
		});
		$('.boardTop3 .carousel ul li.item img').on("mouseenter.step3", function () {
			var imgName, imgDesc, imgIndex, nNum;
			$('#blackBoxInfo img, #blackBoxInfo h4, #blackBoxInfo .sizeInfo').css('display', 'none')
			$('#blackBoxInfo h5').css('display', 'block');
			if (!self.config.isMobile) $('#blackBoxInfo').css('display', 'block');
			imgName = $(this).attr("artist");
			imgDesc = $(this).attr("desc");
			imgIndex = $(this).attr("data-count") - 1;
			if (!self.config.isMobile) {
				$('#blackBoxInfo h2').html(boardDescriptionData[imgIndex].Artist);
				$('#blackBoxInfo h3').html(boardDescriptionData[imgIndex].Type + " " + imgDesc + " " + boardDescriptionData[imgIndex].Color);
				$('#blackBoxInfo h5').html(boardDescriptionData[imgIndex].Description);
			}
			nNum = $('.boardTop3 .carousel ul li.item img').index($(this)) + 1;
			self.showInfoBox(nNum, self.config.numTopSheets);
		}).on("mouseleave.step3", function () {
			if (self.config.lockHover == false) $('#blackBoxInfo').css('display', 'none');
		}).on("click.step3 touch.step3", function () {
			// listen for click in carousel
			self.setBoardTop(this);
			// PROCESS ROLLOVER LOCK
			oImg = $(this);
			if (!self.config.isIpad) {
				oImg.addClass('selectedShape');
			}
			if (!self.config.isMobile) $('#blackBoxInfo').show();
			$(".boardTop3 .carousel ul li.item img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
			});
			if (!self.config.isIpad) oImg.addClass('confirmedShape');
			self.advanceArrowShow();
		});
		self.config.lockHover = false;
		self.setBackgroundImage(".boardTop3", 3);
		if (self.getBoardTop() == undefined || self.getBoardTop() == "") {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
	},
	step3Uninit: function () {
		$(document).off('mousemove.step3');
		$('.boardTop3 .carousel ul li.item img').off("mouseenter.step3 mouseleave.step3 click.step3 touch.step3");
	},
	// STEP 4 - SIDEWALL
	step4Init: function () {
		var self = this;
		// resize carousel
		var carouselWidth = 0;
		$(".boardSide4 .carousel ul li.item").each(function (index) {
			carouselWidth += $(this).outerWidth() + 4; // add 4 pixels to fix inline block spaces
		});
		$('.boardSide4 .carousel').css('width', carouselWidth);
		// change height of container
		var carouselHeight = $(".boardSide4 .carousel").outerHeight();
		$('.boardSide4 .carousel-container').css('height', carouselHeight);
		// scroll carousel items & make black box follow mouse
		$(document).on('mousemove.step4', function (e) {
			var windowWidth, windowCenter, mouseXPos, percentage, containerWidth, containerCenter, containerCenteredX, containerX;
			windowWidth = $('.boardSide4 .carousel-container').width();
			windowCenter = windowWidth / 2;
			mouseXPos = e.pageX - $('.boardSide4 .carousel-container').position().left;
			percentage = ((mouseXPos / windowCenter) - 1) * -1;
			containerWidth = $('.boardSide4 .carousel').width();
			containerCenter = containerWidth / 2;
			containerCenteredX = (containerCenter - windowCenter) * -1;
			containerX = containerCenteredX + (percentage * containerWidth);
			if (containerX > windowCenter) {
				containerX = windowCenter;
			} else if (containerX < (containerWidth - windowCenter) * -1) {
				containerX = (containerWidth - windowCenter) * -1;
			}
			TweenMax.to($('.boardSide4 .carousel'), .3, {'left': containerX});
			// BLACK BOX
			if (!self.config.isMobile) {
				$('#blackBoxInfo').css({
					left: e.pageX + 20,
					top: e.pageY - 20
				});
			};
		});

		$('.boardSide4 .carousel ul li.item img').on('mouseenter.step4', function () {
			$('#blackBoxInfo img, #blackBoxInfo h4, #blackBoxInfo .sizeInfo').css('display', 'none')
			$('#blackBoxInfo img, #blackBoxInfo h4').css('display', 'none')
			$('#blackBoxInfo h5').css('display', 'block');
			if (!self.config.isMobile) $('#blackBoxInfo').css('display', 'block');
			if (!self.config.isMobile) {
				$('#blackBoxInfo h2').html($(this).attr("color").toUpperCase());
				$('#blackBoxInfo h3').html("SWIRLED SIDEWALL");
				$('#blackBoxInfo h5').html("A Lib Tech innovation. Twice as sintered as any other sidewall. Tough, fast, hard, waterproof, handsome and light. NO TOXIC ABS!");
			} else {
				$('#blackBoxInfo div, #blackBoxInfo h4, #blackBoxInfo h3').css('display', 'none')
				$('#blackBoxInfo h2').html($(this).attr("color").toUpperCase());
			}
			//var nNum = $('.bxSliderSidewallHolder img').index($(this));

			var nNum = $('.boardSide4 .carousel ul li.item img').index($(this)) + 1;

			self.showInfoBox(nNum, self.config.numSideWalls);
			if (self.config.lockHover == true && !self.config.isIpad) return;
		}).on('mouseleave.step4', function () {
			if (self.config.lockHover == false) $('#blackBoxInfo').css('display', 'none');
		}).on('click.step4 touch.step4', function () {
			self.setBoardSidewall(this);
			// PROCESS ROLLOVER LOCK
			oImg = $(this);
			if (!self.config.isIpad) {
				oImg.addClass('selectedShape');
			}
			if (!self.config.isMobile) $('#blackBoxInfo').show();
			$('.boardSide4 .carousel ul li.item img').each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
				//$(this).removeAttr("style")
			});
			if (!self.config.isIpad) oImg.addClass('confirmedShape');
			self.boardPreviewSet(self.config.$mainSlider.getCurrentSlide());
			self.advanceArrowShow();
		});
		self.config.lockHover = false;
		self.setBackgroundImage(".boardSide4", 4);

		if (self.getBoardSidewall() == undefined || self.getBoardSidewall() == "") {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
	},
	step4Uninit: function () {
		$(document).off('mousemove.step4');
		$('.boardSide4 .carousel ul li.item img').off('mouseenter.step4 mouseleave.step4 click.step4 touch.step4');
	},
	// STEP 5a - BASE
	step5aInit: function () {
		var self = this;
		// resize carousel
		var carouselWidth = 0;
		$(".boardBase5 .carousel ul li.item").each(function (index) {
			carouselWidth += $(this).outerWidth() + 4; // add 4 pixels to fix inline block spaces
		});
		$('.boardBase5 .carousel').css('width', carouselWidth);
		// change height of container
		var carouselHeight = $(".boardBase5 .carousel").outerHeight();
		$('.boardBase5 .carousel-container').css('height', carouselHeight);
		// scroll carousel items & make black box follow mouse
		$(document).on('mousemove.step5a', function (e) {
			var windowWidth, windowCenter, mouseXPos, percentage, containerWidth, containerCenter, containerCenteredX, containerX;
			windowWidth = $('.boardBase5 .carousel-container').width();
			windowCenter = windowWidth / 2;
			mouseXPos = e.pageX - $('.boardBase5 .carousel-container').position().left;
			percentage = ((mouseXPos / windowCenter) - 1) * -1;
			containerWidth = $('.boardBase5 .carousel').width();
			containerCenter = containerWidth / 2;
			containerCenteredX = (containerCenter - windowCenter) * -1;
			containerX = containerCenteredX + (percentage * containerWidth);
			if (containerX > windowCenter) {
				containerX = windowCenter;
			} else if (containerX < (containerWidth - windowCenter) * -1) {
				containerX = (containerWidth - windowCenter) * -1;
			}
			TweenMax.to($('.boardBase5 .carousel'), .3, {'left': containerX}); // $('.boardShape1').css('left', containerX);
			// BLACK BOX
			if (!self.config.isMobile) {
				$('#blackBoxInfo').css({
					left: e.pageX + 20,
					top: e.pageY - 20
				});
			};
		});
		$('.boardBase5 .carousel ul li.item img').on('mouseenter.step5a', function () {
			$('#blackBoxInfo img, #blackBoxInfo h4, #blackBoxInfo .sizeInfo').css('display', 'none');
			$('#blackBoxInfo img, #blackBoxInfo h4').css('display', 'none');
			$('#blackBoxInfo, #blackBoxInfo h5').css('display', 'block');

			if (self.config.lockHover == true && !self.config.isIpad) return;

			var nNum = $(this).find('span').text();
			var imgName = $(this).attr("artist");
			var imgDesc = $(this).attr("desc");
			var imgIndex = $(this).attr("data-count");

			if (imgIndex >= 1) {
				$('#blackBoxInfo h2').html(boardDescriptionData[imgIndex - 1].Artist);
				$('#blackBoxInfo h3').html(boardDescriptionData[imgIndex - 1].Type + " " + imgDesc + " " + boardDescriptionData[imgIndex - 1].Color);
				$('#blackBoxInfo h5').html(boardDescriptionData[imgIndex - 1].Description);
			} else {
				$('#blackBoxInfo h2').text('DIY Base!');
				$('#blackBoxInfo h3').text('Personalize your base for an additional $29.95 ' + self.config.bbRegionCurrency);
				$('#blackBoxInfo h5').text('');
			}
			if (self.config.lockHover == true && !self.config.isIpad) return;
			var nNum = $('.boardBase5 .carousel ul li.item img').index($(this)) + 1;
			self.showInfoBox(nNum, self.config.numBoardBases);
		}).on('mouseleave.step5a', function () {
			if (self.config.lockHover == false) $('#blackBoxInfo').css('display', 'none');
		}).on("click.step5a touch.step5a", function () {
			self.setBoardBase(this);
			// PROCESS ROLLOVER LOCK
			oImg = $(this);
			if (!self.config.isIpad) {
				oImg.addClass('selectedShape');
			}
			if (!self.config.isMobile) $('#blackBoxInfo').show();
			$(".boardBase5 .carousel ul li.item img").each(function () {
				$(this).removeClass('selectedShape');
				$(this).removeClass('confirmedShape');
				//$(this).removeAttr("style")
			});
			if (!self.config.isIpad) oImg.addClass('confirmedShape');

			self.boardPreviewSet(4);
			self.advanceArrowShow();
		});
		// listen for knife cut base selection
		$('.boardBase5 .carousel ul li.item img#customBase').on("click.step5a touch.step5a", function () {
			self.config.bHasCustom = true;
			self.config.$mainSlider.goToSlide(5);
		});
		self.config.lockHover = false;
		self.setBackgroundImage('.boardBase5', '5');
		if (self.getBoardBase() == undefined || self.getBoardBase() == "") {
			self.advanceArrowHide();
		} else {
			self.advanceArrowShow();
		}
	},
	step5aUninit: function () {
		$(document).off('mousemove.step5a');
		$('.boardBase5 .carousel ul li.item img').off('mouseenter.step5a mouseleave.step5a click.step5a touch.step5a');
		$('.boardBase5 .carousel ul li.item img#customBase').off("click.step5a touch.step5a");
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
		$('#knifecut-base-controls .letter-color .greyBox').on("click touch", function () {
			setTextColor('Grey');
		});
		$('#knifecut-base-controls .letter-color .orangeBox').on("click touch", function () {
			setTextColor('Orange');
		});
		$('#knifecut-base-controls .letter-color .yellowBox').on("click touch", function () {
			setTextColor('Yellow');
		});
		$('#knifecut-base-controls .letter-color .blackBox').on("click touch", function () {
			setTextColor('Black');
		});
		$('#knifecut-base-controls .letter-color .whiteBox').on("click touch", function () {
			setTextColor('White');
		});
		$('#knifecut-base-controls .letter-color .greenBox').on("click touch", function () {
			setTextColor('Green');
		});
		$('#knifecut-base-controls .letter-color .blueBox').on("click touch", function () {
			setTextColor('Blue');
		});
		$('#knifecut-base-controls .letter-color .redBox').on("click touch", function () {
			setTextColor('Red');
		});
		// base color listeners
		$('#knifecut-base-controls .base-color .greyBox').on("click touch", function () {
			setBaseColor('Grey');
		});
		$('#knifecut-base-controls .base-color .orangeBox').on("click touch", function () {
			setBaseColor('Orange');
		});
		$('#knifecut-base-controls .base-color .yellowBox').on("click touch", function () {
			setBaseColor('Yellow');
		});
		$('#knifecut-base-controls .base-color .blackBox').on("click touch", function () {
			setBaseColor('Black');
		});
		$('#knifecut-base-controls .base-color .whiteBox').on("click touch", function () {
			setBaseColor('White');
		});
		$('#knifecut-base-controls .base-color .greenBox').on("click touch", function () {
			setBaseColor('Green');
		});
		$('#knifecut-base-controls .base-color .blueBox').on("click touch", function () {
			setBaseColor('Blue');
		});
		$('#knifecut-base-controls .base-color .redBox').on("click touch", function () {
			setBaseColor('Red');
		});
		// imput text listeners
		$('#knifecut-base-controls .knifecut-input #board-text').on('input.step5b', function () {
			self.setBoardBaseDesc(this.value);
			self.updateBoardDisplay();
			self.boardPreviewSet(5);
			
			if(this.value == "") {
				self.advanceArrowHide(); // on removal of text, hide arrow
			} else {
				self.advanceArrowShow(); // on update of text, show arrow
			}
			self.setBoardBaseDesc(this.value);
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
			if ($(this).val().length == 0) {
				$(this).val(self.defaultBaseInput);
			}
		});
		self.setBackgroundImage(".boardBase5b", "5");
		self.advanceArrowHide();
	},
	step5bUninit: function () {
		$('#knifecut-base-controls .knifecut-input #board-text').off('input.step5b keyup.step5b focus.step5b blur.step5b');
		$('#knifecut-base-controls .letter-color .greyBox').off("click touch");
		$('#knifecut-base-controls .letter-color .orangeBox').off("click touch");
		$('#knifecut-base-controls .letter-color .yellowBox').off("click touch");
		$('#knifecut-base-controls .letter-color .blackBox').off("click touch");
		$('#knifecut-base-controls .letter-color .whiteBox').off("click touch");
		$('#knifecut-base-controls .letter-color .greenBox').off("click touch");
		$('#knifecut-base-controls .letter-color .blueBox').off("click touch");
		$('#knifecut-base-controls .letter-color .redBox').off("click touch");
		$('#knifecut-base-controls .base-color .greyBox').off("click touch");
		$('#knifecut-base-controls .base-color .orangeBox').off("click touch");
		$('#knifecut-base-controls .base-color .yellowBox').off("click touch");
		$('#knifecut-base-controls .base-color .blackBox').off("click touch");
		$('#knifecut-base-controls .base-color .whiteBox').off("click touch");
		$('#knifecut-base-controls .base-color .greenBox').off("click touch");
		$('#knifecut-base-controls .base-color .blueBox').off("click touch");
		$('#knifecut-base-controls .base-color .redBox').off("click touch");
	},
	// STEP 6 - BADGE
	step6Init: function () {
		var self = this;
		// input text listeners
		$('.board-badge-input-holder .board-badge-input').on('input.step6', function () {
			if (this.value.length <= 13) {
				var maxFS = "200%";
				$('.boardBadgeTextHolder .badge-text-wide').css('font-size', maxFS);
				var the1Line = this.value.slice(0, 13);
				$('.boardBadgeTextHolder .badge-text-wide').html(the1Line);
			} else if (this.value.length > 13) {
				//var line1 = this.value; 
				var maxFS = "175%"; //240 - (this.value.length * 4) + "%";
				$('.boardBadgeTextHolder .badge-text-wide').css('font-size', maxFS);
				var the1Line = this.value.slice(0, 13);
				var the2Line = this.value.slice(13);
				//var theLines = the1Line + "<br>" + the2Line;
				var theLines = this.value;
				$('.boardBadgeTextHolder .badge-text-wide').html(theLines);
			}
			// set menu and display arrow if user begins to enter text
			if (this.value.length == 1) {
				self.advanceArrowShow();
				$('.menu6TitleX span').addClass('menuXVisible');
				$('.menu6Title').addClass('menuTitleFull');
				$('.menu6Title').html("Personalized Badge<br><b>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
			} else if (this.value.length == 0) {
				self.advanceArrowHide();
			}
			self.setBoardBadge(this.value);
		}).on('keyup.step6', function (e) {
			// on enter press, advance to next step
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 13 && $(this).val().length != 0) { // Enter keycode & input is not empty
				self.config.$mainSlider.goToSlide(7);
			}
		}).on('blur.step6', function () {
			if ($(this).val().length != 0 && $(this).val() != self.defaultBadgeInput) {
				self.advanceArrowShow();
				$('.menu6TitleX span').addClass('menuXVisible');
				$('.menu6Title').addClass('menuTitleFull');
				$('.menu6Title').html("Personalized Badge<br><b>+ $ 0.00 " + self.config.bbRegionCurrency + "</b>");
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
		$(".boardBadge6 .boardBadgeSize").html(self.getBoardSize());
		// set the background
		self.setBackgroundImage('.boardBadge6', 6);
		// decide if advance arrow should be shown
		if (self.getBoardBadge() == undefined || self.getBoardBadge() == "") {
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
		$(".boardBuy7 .thereciept .terms").css('display', 'none');
		$(".boardBuy7 .thereciept .terms-international").css('display', 'none');
		$(".boardBuy7 .thereciept .cart-error").css('display', 'none');
		$(".boardBuy7 .thereciept .buttonholder .agree-button").css('display', 'none');
		// show
		$(".boardBuy7 .thereciept .board-reciept").css('display', 'block');
		$(".boardBuy7 .thereciept .buttonholder .buy-button").css('display', 'block');
		
		function showTerms() {
			// hide
			$(".boardBuy7 .thereciept .buttonholder .buy-button").css('display', 'none');
			$(".boardBuy7 .thereciept .board-reciept").css('display', 'none');
			$(".boardBuy7 .thereciept .cart-error").css('display', 'none');
			// show
			$(".boardBuy7 .thereciept .buttonholder .agree-button").css('display', 'block');
			// determine which terms to show based on region
			if(self.bbGetRegion() == 'US' || self.bbGetRegion() == 'CA') {
				$(".boardBuy7 .thereciept .terms").css('display', 'block');
				$(".boardBuy7 .thereciept .terms-international").css('display', 'none');
			} else {
				$(".boardBuy7 .thereciept .terms-international").css('display', 'block');
				$(".boardBuy7 .thereciept .terms").css('display', 'none');
			}
		}
		function showError(sError) {
			// hide
			$(".boardBuy7 .thereciept .board-reciept").css('display', 'none');
			$(".boardBuy7 .thereciept .terms").css('display', 'none');
			$(".boardBuy7 .thereciept .terms-international").css('display', 'none');
			$(".boardBuy7 .thereciept .buttonholder .agree-button").css('display', 'none');
			// show
			$(".boardBuy7 .thereciept .cart-error").css('display', 'block');			
			$(".boardBuy7 .thereciept .buttonholder .buy-button").css('display', 'block');
		}
		function isComplete() {
			if (self.getBoardShape() != "" && self.getBoardShape() != undefined &&
				self.getBoardSize() != "" && self.getBoardSize() != undefined &&
				self.getBoardTop() != "" && self.getBoardTop() != undefined &&
				self.getBoardSidewall() != "" && self.getBoardSidewall() != undefined &&
				self.getBoardBase() != "" && self.getBoardBase() != undefined &&
				self.getBoardBadge() != "" && self.getBoardBadge() != undefined) {
				return true;
			} else {
				return false;
			}
		}
		function isNotComplete() {
			$("#leftmenu").stop().animate({
				left: "0px"
			}, 73);
			$("#leftmenu").delay(3000).stop().animate({
				left: "-195px"
			}, 73);

			if (self.getBoardShape() == "" || self.getBoardShape() == undefined) {
				highlightRed(1);
			}
			if (self.getBoardSize() == "" || self.getBoardSize() == undefined) {
				highlightRed(2);
				$("body").find('.recieptSize').addClass('recieptError');
			}
			if (self.getBoardTop() == "" || self.getBoardTop() == undefined) {
				highlightRed(3);
				$("body").find('.recieptTop').addClass('recieptError');
			}
			if (self.getBoardSidewall() == "" || self.getBoardSidewall() == undefined) {
				highlightRed(4);
				$("body").find('.recieptSidewall').addClass('recieptError');
			}
			if (self.getBoardBase() == "" || self.getBoardBase() == undefined) {
				highlightRed(5);
				$("body").find('.recieptBase').addClass('recieptError');
			}
			if (self.getBoardBadge() == "" || self.getBoardBadge() == undefined) {
				highlightRed(6);
				$("body").find('.recieptBadge').addClass('recieptError');
			}
		}
		function highlightRed(nNum) {
			$("body").find('.menu' + (nNum) + 'Title').css('background-image', 'url(' + self.config.baseImgPath + 'bb-redback.png' + ')');
			$("body").find('.menu' + (nNum) + '').css('background-image', 'url(' + self.config.baseImgPath + 'bb-redback.png' + ')');
			$("body").find('.menu' + (nNum) + 'TitleX').css('background-image', 'url(' + self.config.baseImgPath + 'bb-redback.png' + ')');
			$("body").find('.menu' + (nNum)).css("font-weight", "600");
		}
		function buildReciept() {
			// set shape
			$('.boardBuy7 .thereciept .board-reciept .shape span').html(self.getBoardShape());
			$('.boardBuy7 .thereciept .board-reciept .shape-cost').html("+ $" + self.getBoardPrice() + " " + self.config.bbRegionCurrency);
			// set size
			$('.boardBuy7 .thereciept .board-reciept .size span').html(self.getBoardSize());
			$('.boardBuy7 .thereciept .board-reciept .size-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			// set top
			$('.boardBuy7 .thereciept .board-reciept .top span').html(self.getBoardArtist() + " " + self.getBoardDescription());
			$('.boardBuy7 .thereciept .board-reciept .top-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			// set sidewall
			$('.boardBuy7 .thereciept .board-reciept .sidewall span').html(self.getBoardSidewall());
			$('.boardBuy7 .thereciept .board-reciept .sidewall-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			// set base
			if (self.config.isKnifecut) {
				$('.boardBuy7 .thereciept .board-reciept .base').html("KNIFECUT BASE - <span>" + self.getBoardBaseDesc() + "</span><div class=\"text-color\">TEXT COLOR - <span>" + self.getCustomBaseColor() + "</span></div><div class=\"base-color\">BASE COLOR - <span>" + self.getCustomTextColor() + "</span></div>");
				$('.boardBuy7 .thereciept .board-reciept .base-cost').html("+ $" + self.getKnifeCutPrice() + " " + self.config.bbRegionCurrency);
			} else {
				$('.boardBuy7 .thereciept .board-reciept .base').html("BASE - <span>" + self.getBoardBase() + " " + self.getBoardBaseDesc() + "</span>");
				$('.boardBuy7 .thereciept .board-reciept .base-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			}
			// set badge
			$('.boardBuy7 .thereciept .board-reciept .badge span').html(self.getBoardBadge());
			$('.boardBuy7 .thereciept .board-reciept .badge-cost').html("+ $0.00 " + self.config.bbRegionCurrency);
			// set subtotal
			if (self.config.isKnifecut) {
				$('.boardBuy7 .thereciept .board-reciept .subtotal-cost').html("$" + parseFloat(self.getBoardPrice() + self.getKnifeCutPrice()).toFixed(2) + " " + self.config.bbRegionCurrency);
			} else {
				$('.boardBuy7 .thereciept .board-reciept .subtotal-cost').html("$" + self.getBoardPrice() + " " + self.config.bbRegionCurrency);
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
		$('.boardBuy7 .thereciept .buttonholder .buy-button').on('click.step7', function () {
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
		$('.boardBuy7 .thereciept .buttonholder .agree-button').on('click.step7', function () {
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
		$('.boardBuy7 .thereciept .buttonholder .social-icons .socialfb').on('click.step7', function () {
			window.open(
				'https://www.facebook.com/sharer/sharer.php?u='+ encodeURIComponent(boardUrl()), 
				'facebook-share-dialog', 
				'width=626,height=436'
			);
			return false;
		});
		$('.boardBuy7 .thereciept .buttonholder .social-icons .socialtw').on('click.step7', function () {
			window.open(
				'http://twitter.com/share?url=' + encodeURIComponent(boardUrl()) + '&text=' + encodeURIComponent("I built my own @libtechnologies #snowboard with the DIY Board Builder! #LibTechDIY -"),
				'twitter-share-dialog',
				'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
			);
			return false;
		});
		$('.boardBuy7 .thereciept .buttonholder .social-icons .socialg').on('click.step7', function () {
			window.open(
				"https://plus.google.com/share?url=" + encodeURIComponent(boardUrl()),
				'gplus-share-dialog',
				'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
			);
			return false;
		});
		$('.boardBuy7 .thereciept .buttonholder .social-icons .sociale').on('click.step7', function () {
			email = "mailto:?subject=" + encodeURIComponent("I built my own Lib Tech Snowboard with the DIY Board Builder!") + "&body=" + encodeURIComponent(" Check out my personalized DIY Lib Tech Snowboard:") +  "%20%0D%0A%20" + encodeURIComponent(boardUrl()) + "%20%0D%0A%20" + encodeURIComponent("Build your dream snowboard!");
			window.open(email);
		});
		$('.boardBuy7 .thereciept .buttonholder .share-url #share-url-input').on('click.step7 touch.step7', function () {
			$(this).select();
		});

		$('.boardBuy7 .thereciept .buttonholder .share-url #share-url-input').val(boardUrl());

		self.advanceArrowHide();
		buildReciept();
		// share vs builder
		if ($('body').hasClass('page-template-page-snowboard-builder-share-php')) {
			self.setBackgroundImage(".wrapper", 7);
		} else {
			self.setBackgroundImage(".boardBuy7", 7);
		}
	},
	step7Uninit: function () {
		$('.boardBuy7 .thereciept .buttonholder .buy-button').off('click.step7');
		$('.boardBuy7 .thereciept .buttonholder .agree-button').off('click.step7');
		$('.boardBuy7 .thereciept .buttonholder .social-icons .socialfb').off('click.step7');
		$('.boardBuy7 .thereciept .buttonholder .social-icons .socialtw').off('click.step7');
		$('.boardBuy7 .thereciept .buttonholder .social-icons .socialg').off('click.step7');
		$('.boardBuy7 .thereciept .buttonholder .social-icons .sociale').off('click.step7');
		$('.boardBuy7 .thereciept .buttonholder .share-url #share-url-input').off('click.step7 touch.step7');
	},

	setCurrentSection: function () {
		var self = this;
		self.config.nCurSlide = self.config.$mainSlider.getCurrentSlide();
		self.updateHeaderLabel(self.config.nCurSlide);
		self.config.bFirstPlay = false;
		self.boardPreviewSet(self.config.nCurSlide);

		$(".menuXs ul li").css('background-image', 'none');
		$(".menuTitles ul li").css('background-image', 'none');
		$(".menuButtons ul li").css('background-image', 'none');

		self.config.lockHover = false;

		// menu stuff
		$(".bx-pager-item").removeClass('black50');
		$(".pagerTop .active").parent().addClass('black50');

		if (self.config.nCurSlide != 0 && self.config.isMobile) {
			$("#topTwo").css('display', 'block');
		} else {
			$("#topTwo").css('display', 'none');
		}

		$('#blackBoxInfo').hide();
		$('.bxSliderTop').hide();
		$('.bxSliderBase').hide();
		// set default snowboard shape
		if (self.getBoardShape() == "" || self.getBoardShape() == undefined && !self.confirmedShapeSelection) {
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
		// INIT CURRENT SECTION
		if (self.config.nCurSlide == 0) {
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

		if (self.config.nCurSlide == 5) {
			$("body").find('.menu' + (5) + 'Title').css('background-image', 'url(' + self.config.baseImgPath + 'bb-greyback-b0b0b0.png' + ')');
			$("body").find('.menu' + (5) + '').css('background-image', 'url(' + self.config.baseImgPath + 'bb-greyback-b0b0b0.png' + ')');
			$("body").find('.menu' + (5) + 'TitleX').css('background-image', 'url(' + self.config.baseImgPath + 'bb-greyback-b0b0b0.png' + ')');
			$("body").find('.menu' + (5)).css("font-weight", "700");
		} else if (self.config.nCurSlide == 6) {
			$("body").find('.menu' + (6) + 'Title').css('background-image', 'url(' + self.config.baseImgPath + 'bb-greyback-b0b0b0.png' + ')');
			$("body").find('.menu' + (6) + '').css('background-image', 'url(' + self.config.baseImgPath + 'bb-greyback-b0b0b0.png' + ')');
			$("body").find('.menu' + (6) + 'TitleX').css('background-image', 'url(' + self.config.baseImgPath + 'bb-greyback-b0b0b0.png' + ')');
			$("body").find('.menu' + (6)).css("font-weight", "700");
		} else {
			$("body").find('.menu' + (self.config.nCurSlide + 1) + 'Title').css('background-image', 'url(' + self.config.baseImgPath + 'bb-greyback-b0b0b0.png' + ')');
			$("body").find('.menu' + (self.config.nCurSlide + 1) + '').css('background-image', 'url(' + self.config.baseImgPath + 'bb-greyback-b0b0b0.png' + ')');
			$("body").find('.menu' + (self.config.nCurSlide + 1) + 'TitleX').css('background-image', 'url(' + self.config.baseImgPath + 'bb-greyback-b0b0b0.png' + ')');
			$("body").find('.menu' + (self.config.nCurSlide + 1)).css("font-weight", "700");
		}

		if (self.config.isMobile) {
			self.resizeForMobile();
		} else {
			self.resizeForDesktop();
		}
		/*SCROLLBARRR*/
		setTimeout(function () {
			window.scrollTo(0, 1);
		}, 0);
	}, // END setCurrentSection

	resizeForDesktop: function () {
		var self, windowHeight, windowWidth, headerHeight;
		self = this;
		windowHeight = $(window).height();
		windowWidth = $(window).width();
		headerHeight = $('#topLogo img').height();

		function resizeBoardDisplay() {
			var boardDisplayWidth, boardDisplayHeight, aspectRatio, newHeight, newWidth, maxWidth, arrowY;
			// check which view we're showing to the user
			if ($('#boardDisplay .boardPreview .boardViews .preview34').css('display') == 'block') {
				boardDisplayWidth = $('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage .sidewall-bottom').width();
				boardDisplayHeight = $('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage .sidewall-bottom').height();
			} else if ($('#boardDisplay .boardPreview .boardViews .previewBase').css('display') == 'block') {
				boardDisplayWidth = $('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .base').width();
				boardDisplayHeight = $('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .base').height();
			} else {
				boardDisplayWidth = $('#boardDisplay .boardPreview .boardViews .previewTop .board .bImage img').width();
				boardDisplayHeight = $('#boardDisplay .boardPreview .boardViews .previewTop .board .bImage img').height();
			}
			aspectRatio = boardDisplayWidth / boardDisplayHeight;
			newHeight = windowHeight - headerHeight;
			newWidth = Math.floor(newHeight * aspectRatio);
			maxWidth = Math.floor(windowWidth * .2);
			// make sure board display doesn't exceed max width
			if(newWidth > maxWidth) {
				newWidth = maxWidth;
			}
			$('#boardDisplay').width(newWidth);
			// figure out arrow posiiton
			if ($('#boardDisplay .boardPreview .boardViews .preview34').css('display') == 'block') {
				arrowY = $('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage .sidewall-bottom').height() / 2;
			} else if ($('#boardDisplay .boardPreview .boardViews .previewBase').css('display') == 'block') {
				arrowY = Math.floor($('#boardDisplay .boardPreview .boardViews .previewBase .board .bImage .base').height() / 2 - 25);
			} else {
				arrowY = Math.floor($('#boardDisplay .boardPreview .boardViews .previewTop .board .bImage img').height() / 2 - 25);
			}
			// set arrow position
			$('#boardDisplay .boardPreview .boardMenuLeftButton, #boardDisplay .boardPreview .boardMenuRightButton').css('top', arrowY);

			if (self.config.$mainSlider.getCurrentSlide() != 7) {
				// center board within left 30% minus 90px for left menu
				var leftPosition = Math.floor(((windowWidth * .3 - 90) - newWidth) / 2) + 90;
				$('#boardDisplay').css('left', leftPosition);
			} else {
				// adjust positioning of other views
				$('.boardViews div.preview34').css('left', $('.boardViews div.previewTop').width() - 40);
				$('.boardViews div.previewBase').css('left', Math.floor($('.boardViews div.previewTop').width() * 2 - 60));
			}
		}
		if ($('body').hasClass('page-template-page-snowboard-builder-php')) {
			// we're in the builder, not share
			resizeBoardDisplay();
			// Resize carousel images displayed
			var shapeWidth, shapeHeight, aspectRatio, newHeight, newWidth;
			shapeWidth = $('.carousel ul li.item img').width();
			shapeHeight = $('.carousel ul li.item img').height();
			aspectRatio = shapeWidth / shapeHeight;
			newHeight = windowHeight - headerHeight - 50; // remove 50 more to account for scale up on click
			newWidth = Math.floor(newHeight * aspectRatio);
			// set width on carousel images
			$('.carousel ul li.item img').each(function () {
				$(this).width(newWidth);
			});
			// check what step we're on and do appropriate resizing
			if (self.config.$mainSlider.getCurrentSlide() == 0) {
				// resize carousel
				var carouselWidth = 0; // add 10 pixels for safety so last board doesn't wrap to the bottom left
				$(".boardShape1 ul li").each(function (index) {
					carouselWidth += $(this).outerWidth() + 4; // add 4 pixels to fix inline block spaces
				});
				$('.boardShape1').css('width', carouselWidth);
				// reset background
				self.setBackgroundImage(".boardShape1", 1);
			} else if (self.config.$mainSlider.getCurrentSlide() == 1) {
				self.setBackgroundImage(".boardTech2", 2);
			} else if (self.config.$mainSlider.getCurrentSlide() == 2) {
				self.setBackgroundImage(".boardTop3", 3);
				// resize carousel
				var carouselWidth = 0;
				$(".boardTop3 .carousel ul li.item").each(function (index) {
					carouselWidth += $(this).outerWidth() + 4; // add 4 pixels to fix inline block spaces
				});
				$('.boardTop3 .carousel').css('width', carouselWidth);
				// change height of container
				var carouselHeight = $(".boardTop3 .carousel").outerHeight();
				$('.boardTop3 .carousel-container').css('height', carouselHeight);
			} else if (self.config.$mainSlider.getCurrentSlide() == 3) {
				self.setBackgroundImage(".boardSide4", 4);
				// resize carousel
				var carouselWidth = 0;
				$(".boardSide4 .carousel ul li.item").each(function (index) {
					carouselWidth += $(this).outerWidth() + 4; // add 4 pixels to fix inline block spaces
				});
				$('.boardSide4 .carousel').css('width', carouselWidth);
				// change height of container
				var carouselHeight = $(".boardSide4 .carousel").outerHeight();
				$('.boardSide4 .carousel-container').css('height', carouselHeight);
			} else if (self.config.$mainSlider.getCurrentSlide() == 4) {
				self.setBackgroundImage('.boardBase5', '5');
				// resize carousel
				var carouselWidth = 0;
				$(".boardBase5 .carousel ul li.item").each(function (index) {
					carouselWidth += $(this).outerWidth() + 4; // add 4 pixels to fix inline block spaces
				});
				$('.boardBase5 .carousel').css('width', carouselWidth);
				// change height of container
				var carouselHeight = $(".boardBase5 .carousel").outerHeight();
				$('.boardBase5 .carousel-container').css('height', carouselHeight);
			} else if (self.config.$mainSlider.getCurrentSlide() == 5) {
				self.setBackgroundImage(".boardBase5b", "5");
			} else if (self.config.$mainSlider.getCurrentSlide() == 6) {
				self.setBackgroundImage('.boardBadge6', 6);
			} else if (self.config.$mainSlider.getCurrentSlide() == 7) {
				self.setBackgroundImage(".boardBuy7", 7);
				// fix scroll
				$('.thereciept-scroll').css('height', $(window).height());
			}
		} else {
			// check to see if boards are rendering taller than the window is
			var boardDisplay = $('#boardDisplay');
			if(boardDisplay.height() > windowHeight) {
				var boardDisplayWidth, boardDisplayHeight, aspectRatio, newHeight, newWidth, maxWidth;
				boardDisplayWidth = $('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage .sidewall-bottom').width();
				boardDisplayHeight = $('#boardDisplay .boardPreview .boardViews .preview34 .board .bImage .sidewall-bottom').height();
				aspectRatio = boardDisplayWidth / boardDisplayHeight;
				newHeight = windowHeight - headerHeight;
				newWidth = Math.floor(newHeight * aspectRatio);
				maxWidth = Math.floor(windowWidth * .2);
				// make sure board display doesn't exceed max width
				if(newWidth > maxWidth) {
					newWidth = maxWidth;
				}
				boardDisplay.width(newWidth);
				if($('body.diy-share .wrapper #header-share').width() < windowWidth * .8) {
					boardDisplay.css('left', 'auto');
					boardDisplay.css('right', '30%');
				} else {
					boardDisplay.removeAttr('style');
				}
				// adjust positioning of other views
				$('.boardViews div.preview34').css('left', $('.boardViews div.previewTop').width() - 40);
				$('.boardViews div.previewBase').css('left', Math.floor($('.boardViews div.previewTop').width() * 2 - 60));
			} else {
				boardDisplay.removeAttr('style');
				$('.boardViews div.preview34').removeAttr('style');
				$('.boardViews div.previewBase').removeAttr('style');
			}
		}
		self.updateBoardDisplay();
	}, // END resizeForDesktop

	resizeForMobile: function () {
		return false;

		var self = this;
		$.plax.disable();
		$('#mobileblocker').css('display', 'block');
		// SMALLER IS LARGER - ADJUST PERCENTAGE*/
		var winW = $(window).width() / 3.95;
		/*HIGHER IS SMALLER*/
		$('.bxDivShape li').css("max-width", $(window).height() / 90 + "%"); //"13%");
		$('.boardShape1 .bx-wrapper').css("max-width", "100%");
		$('#blackBoxInfo').css("margin-left", "auto");
		$('#header').css("width", $(window).innerWidth()); //"13%");
		$('.pagerTop').css("width", $(window).innerWidth()); //"13%");
		$('.boardShape1').parent().css("width", $(window).innerWidth());
		if (self.config.$mainSlider.getCurrentSlide() == 7) {
			//self.calcBuyView();
		}
		if (self.config.$mainSlider.getCurrentSlide() == 2) {
			$('.boardTop3').parent().css("height", $(window).innerHeight()); //"13%");
			$(".boardTop3").css('width', $(window).innerWidth());
		}
		if (self.config.$mainSlider.getCurrentSlide() == 3) {
			$(".boardSide4 #boardSideItems").css('width', $(window).innerWidth());
		}
		if (self.config.$mainSlider.getCurrentSlide() == 5) {

		}
		if (self.config.$mainSlider.getCurrentSlide() == 6) {
			$(".boardBadge6").parent().css('width', $('#region-selector').width());
			$(".boardBadge6").parent().css('height', $('#region-selector').height());
		}
		if (self.config.$mainSlider.getCurrentSlide() == 7) {
			$('.boardBuy7').parent().delay(1).css("width", $('.wrapper').width()); //"13%");
		}
	} // END resizeForMobile
};
/* Adding visibility methods to jQuery,
not sure if this is even being used */
jQuery.fn.visible = function () {
	return this.css('visibility', 'visible');
}
jQuery.fn.invisible = function () {
	return this.css('visibility', 'hidden');
}
jQuery.fn.visibilityToggle = function () {
	return this.css('visibility', function (i, visibility) {
		return (visibility == 'visible') ? 'hidden' : 'visible';
	});
}
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