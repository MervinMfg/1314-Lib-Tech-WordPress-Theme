<?php
/*
Template Name: Snowboard Builder
*/
?>
<!doctype html>
<!--[if lt IE 7 ]> <html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 ie-lt10 ie-lt9 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 ie-lt10 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" <?php language_attributes(); ?>><!--<![endif]-->
<!--
                          ,
                          ,,
                         ,,,
                        ,,,,,
                       ,,, ,,
                       ,,  ,,,
                      ,,    ,,
                     ,,,    ,,,
                    ,,,     ,,,
                   ,,,      ,,,,
                   ,,,       ,,,
                  ,,,         ,,
                ,,,,,,,,,,    ,,,
               ,,,,,,,,,,,,,, ,,,
             ,,,,        ,,,,,,,,,
           ,,,,  ,,,        ,,,,,,
          ,,,    ,,,,          ,,,,
         ,,      ,,,,,,, ,,,    ,,
        ,,,      ,, ,,, ,,,,    ,,,
        ,,       ,,         ,,,  ,,,
        ,,      ,,,         ,,,   ,,
        ,,,     ,,,         ,,    ,,
         ,,      ,,        ,,,   ,,,
         ,,,     ,,,       ,,    ,,
          ,,,     ,,,,    ,,,   ,,
           ,,,,    ,,,,,,,,,  ,,,,
            ,,,       ,,,,   ,,,,
              ,,,,,,      ,,,,,
                ,,,,,,,,,,,,
                ,,    ,
,,,            ,,     ,
  ,,,          ,,     ,
     ,,        ,      ,     ,,
       ,,,    ,,     ,,,,,,,,,,,
        ,,,,  ,,
           ,,,,
            ,,,
-->
<head id="www-lib-tech-com" data-template-set="lib-tech-wordpress-theme">
	<meta charset="<?php bloginfo('charset'); ?>">
	<!--[if IE ]>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<![endif]-->
	<?php if (is_search()) echo '<meta name="robots" content="noindex, nofollow" />'; ?>
	<?php
        // GET THE REGION
        getRegionCode();
        $GLOBALS['pageImage'] = get_bloginfo('template_directory') . "/_/img/fb-like.png";
    ?>

	<title>Lib Tech Custom Snowboard Builder</title>
	<meta name="title" content="Lib Tech Custom Snowboard Builder" />
	<meta name="description" content="We build snowboards. No really... that is what we do. We don’t order them from China or anywhere else and send someone to go check and see how they turned out. We physically hand build them right here at home in the USA. We buy the toughest, lightest, strongest, most environmental materials; many of which aren’t meant for snowboards or used by anyone else for what we use them for." />
	<meta name="keywords" content="snowboards, skateboards, snowskates, waterboards, surfboards, NAS, Outerwear, Goggles, Clothing, Apparel, Accessories, Lib Tech, Lib Technologies, surf, skate, snow, skateboard, deck, skateboarding, p2, skate technology, tech" />
    <meta name="author" content="Lib Tech" />
    <meta name="Copyright" content="Copyright Lib Tech <?php echo date('Y'); ?>. All Rights Reserved." />
    <!-- Application-specific meta tags -->
    <!-- FB Meta Data -->
    <meta property="og:title" content="<?php echo $GLOBALS['pageTitle']; ?>" />
    <meta property="og:description" content="<?php echo $pageDescription; ?>" />
    <meta property="og:url" content="<? the_permalink(); ?>" />
    <meta property="og:image" content="<?php echo $GLOBALS['pageImage']; ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Lib Technologies" />
    <meta property="fb:app_id" content="352899581451617"/>
    <!-- Google+ Meta Data -->
    <meta itemprop="name" content="<?php echo $GLOBALS['pageTitle']; ?>" />
    <meta itemprop="description" content="<?php echo $pageDescription; ?>" />
    <meta itemprop="image" content="<?php echo $GLOBALS['pageImage']; ?>" />
    <!-- Twitter -->
	<meta name="twitter:card" content="">
	<meta name="twitter:site" content="">
	<meta name="twitter:title" content="">
	<meta name="twitter:description" content="">
	<meta name="twitter:url" content="">
	<!-- Windows 8 -->
	<meta name="application-name" content="" /> 
	<meta name="msapplication-TileColor" content="" /> 
	<meta name="msapplication-TileImage" content="" />
    <!-- Fav Icon -->
    <link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/_/img/favicon.ico" />
    <!-- Styles -->
    <link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" type="text/css" />
    <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
    <!--  Mobile Meta Info -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/_/img/apple-touch-icon.png">
    <!-- Misc. -->
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <!-- Google Site Verification -->
    <meta name="google-site-verification" content="wE_gDgt0-MYrOnCO0K7VH2HP7af_DuxpDK1EJFdohFc" />
    <!-- JavaScript Includes -->
	<script src="<?php bloginfo('template_directory'); ?>/_/js/lib/modernizr-2.6.2.min.js"></script>
	<!--[if lt IE 9]>
	<script src="<?php bloginfo('template_directory'); ?>/_/js/lib/respond.min.js"></script>
	<![endif]-->
	<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/lib/jquery-1.10.2.min.js"><\/script>')</script>
    <!-- WordPress Head -->
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div class="wrapper">

		<p><a href="#add-to-cart" id="add-to-cart" class="h2">Add to Cart</a></p>
		<p id="added" style="display: none;" class="h4">Custom board added to cart - <a href="/shopping-cart/">View Shopping Cart</a></p>

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
	</div><!-- END .wrapper -->

	<?php wp_footer(); ?>
	
	<!-- SOCIAL MEDIA INCLUDES -->
	<div id="fb-root"></div>
	<script type="text/javascript">
	    // Facebook
	    (function(d, s, id) {
	        var js, fjs = d.getElementsByTagName(s)[0];
	        if (d.getElementById(id)) return;
	        js = d.createElement(s); js.id = id;
	        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=352899581451617";
	        fjs.parentNode.insertBefore(js, fjs);
	    }(document, 'script', 'facebook-jssdk'));
	    // Twitter
	    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	    // Google+
	    (function() {
	        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	        po.src = 'https://apis.google.com/js/plusone.js';
	        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	    })();
	</script>
	<script type="text/javascript" src="//assets.pinterest.com/js/pinit.js"></script>
	<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
		 chromium.org/developers/how-tos/chrome-frame-getting-started -->
	<!--[if lt IE 8]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
	<!-- JavaScript includes -->
	<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/lib/jquery.bxslider.min.js"></script>
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