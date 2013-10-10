<?php
/*
Template Name: Snowboard Builder
*/
// GET THE REGION
getRegionCode();
$page_url = get_site_url() . "/snowboarding/snowboard-builder/";
?>
<!doctype html>
<!--[if lt IE 7 ]> <html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 ie-lt10 ie-lt9 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 ie-lt10 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" <?php language_attributes(); ?>><!--<![endif]-->
<head id="www-lib-tech-com" data-template-set="lib-tech-wordpress-theme">
	<meta charset="<?php bloginfo('charset'); ?>">
	<!--[if IE ]>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<![endif]-->
    <title>Lib Tech's DIY Board Builder - Build your dream snowboard!</title>
	<meta name="title" content="Lib Tech's DIY Board Builder - Build your dream snowboard!" />
	<meta name="description" content="Lib Tech's DIY Snowboard Builder offers you the opportunity to order a custom, one of a kind, dream snowboard handmade in the USA. Customize your snowboard's shape, size, graphics and more in this online, custom snowboard building tool." />
	<meta name="keywords" content="custom snowboard, custom built snowboard, custom made snowboard, handmade snowboard, made in the USA, build your own, customize" />
	<meta name="author" content="Lib Tech" />
    <meta name="Copyright" content="Copyright Lib Tech <?php echo date('Y'); ?>. All Rights Reserved." />
	<!-- FB Meta Data -->
	<meta property="og:title" content="Lib Tech's DIY Board Builder - Build your dream snowboard!" />
	<meta property="og:description" content="This dream snowboard project is probably going to cause us some headaches, but you are going to be stoked! Lib Tech's DIY Board Builder offers you the opportunity to order a custom, one of a kind, dream snowboard that will be guided through our experiMENTAL Division’s prototyping process and handcrafted to your specifications in the USA." />
	<meta property="og:url" content="<?php echo $page_url; ?>" />
	<meta property="og:image" content="<?php bloginfo('template_directory'); ?>/_/img/bb/social-share.png" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Lib Technologies" />
	<meta property="fb:app_id" content="352899581451617"/>
	<!-- Google+ Meta Data -->
	<meta itemprop="name" content="Lib Tech's DIY Board Builder - Build your dream snowboard!" />
	<meta itemprop="description" content="This dream snowboard project is probably going to cause us some headaches, but you are going to be stoked! Lib Tech's DIY Board Builder offers you the opportunity to order a custom, one of a kind, dream snowboard that will be guided through our experiMENTAL Division’s prototyping process and handcrafted to your specifications in the USA." />
	<meta itemprop="image" content="<?php bloginfo('template_directory'); ?>/_/img/bb/social-share.png" />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@libtechnologies">
    <!-- Fav Icon -->
    <link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/_/img/favicon.ico" />
    <!-- Styles -->
    <link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" type="text/css" />
    <link href="<?php bloginfo('template_directory'); ?>/_/css/snowboard-builder.css" rel="stylesheet" type="text/css" />
	<meta name="viewport" content="user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="format-detection" content="telephone=no">
	<!--<link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/_/img/bb/apple-touch-icon.png">-->
    <!-- Misc. -->
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <!-- Google Site Verification -->
    <meta name="google-site-verification" content="wE_gDgt0-MYrOnCO0K7VH2HP7af_DuxpDK1EJFdohFc" />
    <!-- JavaScript Includes -->
	<script src="<?php bloginfo('template_directory'); ?>/_/js/lib/modernizr-2.6.2.min.js"></script>
	<!--[if lt IE 9]>
	<script src="<?php bloginfo('template_directory'); ?>/_/js/lib/respond.min.js"></script>
	<![endif]-->
    <!-- WordPress Head -->
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div class="wrapper">
	    <div id="header">	
    		<div id="topTwo"><p class="pOne">1</p><p class="pTwo">2</p></div>
    		<div id="topLogo"><a href="/snowboarding/" target="_blank"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/header-diy-logo.png" alt="Lib Tech DIY Board Builder" /></a></div>
    		<div id="topFlag"><a href="#region-selector"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/header-flag.png" alt="Handcrafted in the USA" /></a></div>
    		<div id="topSection">SELECT BOARD  -  SHAPE &amp; CONTOUR</div>
    		<div id="topSectionRight"></div>
	    </div>
	    <div id="leftmenu">
			<div id="menuClose">
				<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/X-button.png">
			</div>
			<div id="menuHeader">
				<h1>Choose Your</h1>
			</div>
			<div class="menu-options">
				<div class="menuXs">
					<ul>
						<li class="menu1TitleX"><span>X</span></li>
						<li class="menu2TitleX"><span>X</span></li>
						<li class="menu3TitleX"><span>X</span></li>
						<li class="menu4TitleX"><span>X</span></li>
						<li class="menu5TitleX"><span>X</span></li>
						<li class="menu6TitleX"><span>X</span></li>
						<li class="menu7TitleXB"><span></span></li>
					</ul>
				</div>
				<div class="menuTitles">
					<ul>
						<li class="menu1Title">Shape &amp; Contour</li>
						<li class="menu2Title">Size</li>
						<li class="menu3Title">Top Sheet Art</li>
						<li class="menu4Title">Sidewall Color</li>
						<li class="menu5Title">Base Options</li>
						<li class="menu6Title">Personalized Badge</li>
						<li class="menu7TitleB">Your Custom Board</li>
					</ul>
				</div>
				<div class="menuButtons">
					<ul>
						<li class="menu1">board</li>
						<li class="menu2">size</li>
						<li class="menu3">top</li>
						<li class="menu4">sidewall</li>
						<li class="menu5">base</li>
						<li class="menu6">badge</li>
						<li class="menu7B">buy &nbsp;&nbsp; <img src="<?php bloginfo('template_directory'); ?>/_/img/bb/bb-0-rightarrow.png" alt=">" /></li>					
					</ul>
				</div>
			</div>
		</div><!-- END #leftmenu" -->
		<div id="advance-arrow"></div>
	    <div class="pagerLabel">SHAPE</div>
	   	<div class="pagerTop" id="topPager"></div>
	   	<div class="miniReciept"></div>
	   	<div id="blackBoxInfo">
			<div class="blackBoxDiamondL"></div>
			<h2>BTX Skate Banana - Board</h2>
			<h3>DESC</h3>
			<div><img class="contourImg" src="<?php bloginfo('template_directory'); ?>/_/img/bb/bb-contour-none.jpg" /></div>
			<h4>POWER</h4>
			<div class="sizeInfo"><p>AVAILABLE SIZES:  <span></span></p></div>
			<h5></h5>
			<div class="blackBoxDiamondR"></div>
		</div>
		<div id="boardDisplay">
			<div class="boardTechName"></div>
			<div class="boardPreview">
				<div class="boardMenuLeftButton">
					<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/bb-left-w.png" class="menuLeft" />
				</div>								
				<div class="boardViews">
					<div class="previewTop">
						<div class="board">						 
							<div class="bImage">
								<div class="bText"></div>
								<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/default/SKATE-BANANA.png" class="responsive-image" />
							</div>
						</div>
					</div>
					<div class="preview34">
						<div class="board">
							<div class="bImage">
								<div class="bText"></div>
								<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-sidewall/sidewall/SKATE-BANANA-YELLOW.png" class="responsive-image sidewall-top" />
								<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-sidewall/default/SKATE-BANANA.png" class="responsive-image sidewall-bottom" />
								<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-sidewall/default/SKATE-BANANA.png" class="responsive-image sidewall-hidden" />
							</div>	
						</div>
					</div>
					<div class="previewBase">
						<div class="board">
							<div class="bImage">
								<div class="bText">
									<p class="rotate-one">
										<span class="board-text-custom">DIY BOARD!</span>
									</p>
								</div>
								<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/custom-colors-logo/LIB-LOGO-ALL-WHITE.png" class="responsive-image custom-base-logo" />
								<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/default/SKATE-BANANA.png" class="responsive-image base" />
							</div>
						</div>
					</div>
				</div>
				<div class="boardMenuRightButton">
					<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/bb-right-w.png" class="menuRight" />
				</div>
			</div>
		</div>
		<ul class="bxDivSlider">
			<!-- STEP 1 - SHAPE -->
			<li>
				<div class="boardShape1 carousel">
					<ul>
						<li class="item"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/default/SKATE-BANANA.png" shapenum="1" id="defaultShapeImage" /></li>
						<li class="item"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/default/ATTACK-BANANA.png" shapenum="2" /></li>
						<li class="item"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/default/TRAVIS-RICE-PRO-BLUNT.png" shapenum="3" /></li>
						<li class="item"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/default/TRAVIS-RICE-PRO-POINTY.png" shapenum="4" /></li>
						<li class="item"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/default/TRS.png" shapenum="5" /></li>
						<li class="item"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/default/HOT-KNIFE.png" shapenum="6" /></li>
						<li class="item"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/default/SKUNK-APE.png" shapenum="7" /></li>
						<li class="item"><img src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/default/BANANA-BLASTER.png" shapenum="8" /></li>
					</ul>
				</div>
			</li>
			<!-- STEP 2 - SIZE -->
			<li>
				<div class="boardTech2">
					<div class="boardItemHolder">
						<div class="boardText1">
							<div id="s2shapeTitle"></div>
							<div class="s2shapedescription"></div>
							<div class="s2shapedescriptiondetail"></div>
							<div id="s2contour"></div>
							<div id="s2contourdetail"></div>
						</div>
						<div class="boardText2">
							<h3 class="size-cta">SELECT SIZE</h3>
							<div id="s2-size-holder">
								<div class="s2-sizes"></div>
							</div>
							<div id="s2DetailTable">
								<div id="s2DetailTableData"></div>
							</div>
						</div>
					</div>
				</div>
			</li>
			<!-- STEP 3 - TOP SHEET -->
			<li>
		  		<div class="boardTop3">
		  			<div class="carousel-container">
						<div class="carousel">
							<ul>
								<li class="item"><img data-count="1" artist="Parillo" desc="Red" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/PARILLO-RED.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="1" artist="Parillo" desc="Blue" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/PARILLO-BLUE.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="1" artist="Parillo" desc="Pink" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/PARILLO-PINK.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="2" artist="Jamie" desc="Girl" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/JAMIE-GIRL.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="3" artist="Jamie" desc="Wave" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/JAMIE-WAVE.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="4" artist="Russian" desc="Red" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/RUSSIAN-RED.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="5" artist="Quigg" desc="Guitar"src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/QUIGG-GUITAR.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="6" artist="Davis" desc="Green" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/DAVIS-GREEN.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="6" artist="Davis" desc="Blue" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/DAVIS-BLUE.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="7" artist="Skeleton" desc="Yellow" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/SKELETON-YELLOW.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="7" artist="Skeleton" desc="Blue" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/SKELETON-BLUE.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="7" artist="Skeleton" desc="Pink" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/SKELETON-PINK.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="7" artist="Skeleton" desc="Green" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/SKELETON-GREEN.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="8" artist="Logo" desc="Black" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/LOGO-BLACK.png" class="responsive-image board-top-image" /></li>
								<li class="item"><img data-count="8" artist="Logo" desc="White" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-top/art/LOGO-WHITE.png" class="responsive-image board-top-image" /></li>
							</ul>
						</div>
			  		</div>
				</div>
			</li>
			<!-- STEP 4 - SIDEWALL -->
			<li>
				<div class="boardSide4">
					<div class="carousel-container">
						<div class="carousel">
							<ul>
								<li class="item"><img data-count="1" color="Black/Blue" desc="Blue" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-sidewall/colors/BLUE.png" class="responsive-image" /></li>
								<li class="item"><img data-count="2" color="Black/Slime Green" desc="Slime Green" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-sidewall/colors/GREEN.png" class="responsive-image" /></li>
								<li class="item"><img data-count="3" color="Black/Orange" desc="Orange" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-sidewall/colors/ORANGE.png" class="responsive-image" /></li>
								<li class="item"><img data-count="4" color="Black/Red" desc="Red" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-sidewall/colors/RED.png" class="responsive-image" /></li>
								<li class="item"><img data-count="5" color="Black/White" desc="White" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-sidewall/colors/WHITE.png" class="responsive-image" /></li>
								<li class="item"><img data-count="6" color="Black/Yellow" desc="Yellow" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-sidewall/colors/YELLOW.png" class="responsive-image" /></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<!-- STEP 5 - BASE -->
			<li>
				<div class="boardBase5">
					<div class="carousel-container">
						<div class="carousel">
							<ul>
								<li class="item"><img data-count="0" artist="Custom" desc="Custom" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/KNIFE-CUT.png" class="responsive-image board-base-image" id="customBase" /></li>
								<li class="item"><img data-count="1" artist="Parillo" desc="Red" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/PARILLO-RED.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="1" artist="Parillo" desc="Blue"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/PARILLO-BLUE.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="1" artist="Parillo" desc="Pink"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/PARILLO-PINK.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="2" artist="Jamie" desc="Girl"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/JAMIE-GIRL.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="2" artist="Jamie" desc="Wave"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/JAMIE-WAVE.png" class="responsive-image board-base-image"/></li>
								<li class="item"><img data-count="4" artist="Russian" desc="Red"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/RUSSIAN-RED.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="5" artist="Quigg" desc="Guitar" src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/QUIGG-GUITAR.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="6" artist="Davis" desc="Green"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/DAVIS-GREEN.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="6" artist="Davis" desc="Blue"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/DAVIS-BLUE.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="7" artist="Skeleton" desc="Grey"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/SKELETON-GREY.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="8" artist="Logo" desc="Black"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/LOGO-BLACK.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="8" artist="Logo" desc="White"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/LOGO-WHITE.png" class="responsive-image board-base-image" /></li>
								<li class="item"><img data-count="8" artist="Logo" desc="Grey"  src="<?php bloginfo('template_directory'); ?>/_/img/bb/snowboard-base/art/LOGO-GREY.png" class="responsive-image board-base-image" /></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
			<!-- STEP 5b - BASE TEXT -->
			<li>
				<div class="boardBase5b">
					<div class="boardItemHolder">
						<div id="knifecut-base-controls">
							<p>Base Text</p>
							<div class="knifecut-input">
								<input type="text" id="board-text" value="10 CHARACTER MAX" name="board" maxlength="10" />
							</div>
							<div class="letter-color">
								<p>Letter Color</p>
								<div class="greyBox color"></div>
								<div class="orangeBox color"></div>
								<div class="yellowBox color"></div>
								<div class="blackBox color"></div>
								<div class="whiteBox color"></div>
								<div class="greenBox color"></div>
								<div class="blueBox color"></div>
								<div class="redBox color"></div>
								<div class="clearfix"></div>
							</div>
							<div class="base-color">
								<p>Base Color</p>
								<div class="greyBox color"></div>
								<div class="orangeBox color"></div>
								<div class="yellowBox color"></div>
								<div class="blackBox color"></div>
								<div class="whiteBox color"></div>
								<div class="greenBox color"></div>
								<div class="blueBox color"></div>
								<div class="redBox color"></div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</li>
			<!-- STEP 6 - BADGE TEXT -->
			<li>
				<div class="boardBadge6">
					<div class="boardItemHolder">
						<div class="boardTopInfo1">
							<div id="boardBadgeItems">
								<div id="boardBadgeIcon1">
									<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/bb-6-badgelrg.png" class="responsive-image board-badge" />
									<div class="boardBadgeTextHolder">
										<div class="board-badge-text">
											<span class="badge-text-wide"></span>
										</div>
									</div>
									<div class="boardBadgeSize">151</div>
									<div class="board-badge-input-holder">
										<input type="text" class="board-badge-input" value="26 CHARACTER MAX" name="badge" maxlength="26" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
			<!-- STEP 7 - BUY -->
			<li>
				<div class="boardBuy7">
					<div class="thereciept-scroll">
						<div class="boardText1 thereciept">
							<div class="board-reciept">
								<h1>EXPENSE</h1>
								<h2 class="shape">BOARD - <span></span></h2>
								<p class="shape-cost"></p>
								<h2 class="size">SIZE - <span></span></h2>
								<p class="size-cost"></p>
								<h2 class="top">TOP - <span></span></h2>
								<p class="top-cost"></p>
								<h2 class="sidewall">SIDEWALL - <span></span></h2>
								<p class="sidewall-cost"></p>
								<h2 class="base"></h2>
								<p class="base-cost"></p>
								<h2 class="badge">BADGE - <span></span></h2>
								<p class="badge-cost"></p>
								<hr />
								<h3 class="subtotal">SUBTOTAL</h3>
								<h3 class="subtotal-cost"></h3>
								<div class="clearfix"></div>
							</div>
							<div class="terms">
								<h1>Lib Tech DIY Program Policy</h1>
								<p>The finished board may not appear exactly as it is shown on the screen. DIY board orders take 3-6 weeks to build and ship for United States/Canada. DIY board orders will be charged upon order confirmation. No returns or refunds on customized boards will be accepted or given.</p>
							</div>
							<div class="terms-international">
								<h1>Lib Tech DIY Program Policy</h1>
								<p>The finished board may not appear exactly as it is shown on the screen. DIY board orders take 6-9 weeks for countries outside of United States/Canada. For a list of countries we ship DIY boards to <a href='/snowboarding/snowboard-builder/international-countries/' target='_blank'>click here</a>. DIY board orders will be charged upon order confirmation. No returns or refunds on customized boards will be accepted or given.</p>
							</div>
							<div class="cart-error">
								<p>An error has occured. Verify your snowboard is complete and try again. If the problem persists <a href=”http://www.mervin.com/contact/” target=”_blank”>let us know</a>.</p>
							</div>
							<div class="buttonholder">
								<div class="buy-button">Buy this board!</div>
								<div class="agree-button">I agree</div>
								<div class="social-icons">
									<p>Share with your friends</p>
									<a href="#"><img class="socialfb" src="<?php bloginfo('template_directory'); ?>/_/img/bb/bb-social-fb.png" alt="Facebook" /></a>
									<a href="#"><img class="socialtw" src="<?php bloginfo('template_directory'); ?>/_/img/bb/bb-social-twitter.png" alt="Twitter" /></a>
									<a href="#"><img class="socialg" src="<?php bloginfo('template_directory'); ?>/_/img/bb/bb-social-google.png" alt="Google+" /></a>
									<a href="#"><img class="sociale" src="<?php bloginfo('template_directory'); ?>/_/img/bb/bb-social-email.png" alt="Email" /></a>
								</div>
								<div class="share-url">
									<p>Copy and Paste URL</p>
									<input type="text" id="share-url-input" value="http://www.lib-tech.com" readonly="readonly" />
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div id="region-selector">
			<div class="width-fix">
		        <div class="choose-region">
		            <h5 class="h1">Choose your region</h5>
		            <ul>
		                <li class="us">
		                	<div class="flag">
		                		<img src="<?php bloginfo('template_directory'); ?>/_/img/flag-us.png" alt="United States Flag" />
		                	</div>
		                	<div class="copy">
		                		<h3>USA</h3>
		                		<p>Shop in US currency<br />Ship to US address</p>
		                	</div>
		                	 <div class="clearfix"></div>
		                </li>
		                <li class="ca">
		                	<div class="flag">
			                	<img src="<?php bloginfo('template_directory'); ?>/_/img/flag-ca.png" alt="Canadian Flag" />
			                </div>
		                	<div class="copy">
			                	<h3>Canada</h3>
			                	<p>Shop in Canadian currency<br />Ship to Canadian address</p>
			                </div>
			                 <div class="clearfix"></div>
		                </li>
		                <li class="int">
		                	<div class="flag">
		                		<img src="<?php bloginfo('template_directory'); ?>/_/img/flag-lib.png" alt="International Flag" />
		                	</div>
		                	<div class="copy">
		                		<h3>International</h3>
		                		<p>Browse site in English<br />No online shopping internationally</p>
		                	</div>
		                	 <div class="clearfix"></div>
		                </li>
		            </ul>
		        </div>
		    </div>
	    </div>
	    <div id="mobileblocker">
			<h2>WHOA. SLOW DOWN!</h2>
			<h3>Our Mobile/Tablet DIY Snowboard Builder is not quite ready, but we are busy working on it.</h3>
			<h3>In the meantime, please use it on your desktop at an appropriate size.</h3>
	    </div>
		<div id="divBlocker"></div>
		<div id="divPreloader">
			<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/BACKGROUND-01.jpg" />
			<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/BACKGROUND-02.jpg" />
			<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/BACKGROUND-03.jpg" />
			<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/BACKGROUND-04.jpg" />
			<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/BACKGROUND-05.jpg" />
			<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/BACKGROUND-06.jpg" />
			<img src="<?php bloginfo('template_directory'); ?>/_/img/bb/BACKGROUND-07.jpg" />
		</div>
	</div><!-- END .wrapper -->

	<?php wp_footer(); ?>

	<!--[if lte IE 8]>
	<div id="ie-blocker">
		<h2>We do not support your browser.</h2>
		<p><a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p>
	</div>
	<![endif]-->
	<!-- JavaScript includes -->
	<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/lib/jquery-1.10.2.min.js"><\/script>')</script>
	<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/lib/jquery.bxslider.min.js"></script>
	<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/lib/TweenMax.min.js"></script>
 	<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/libtech.main.js"></script>
	<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/libtech.snowboardbuilder.js"></script>
	<!-- Init the main JS -->
	<script type="text/javascript">
	    $(document).ready(function(){
	        LIBTECH.main.init();
	    });
	</script>
	<!-- Google Analytics -->
	<script type="text/javascript">
	    var _gaq = _gaq || [];
	    _gaq.push(['_setAccount', 'UA-10240523-1']);
	    _gaq.push(['_setDomainName', '.lib-tech.com']);
	    _gaq.push(['_setAllowHash', false]);
	    _gaq.push(['_setAllowLinker', true]);
	    _gaq.push(['_trackPageview']);
	    (function() {
	        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	    })();
	</script>
</body>
</html>	