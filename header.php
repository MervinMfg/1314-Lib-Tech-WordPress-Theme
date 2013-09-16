<?php
    // GET THE REGION
    getRegionCode();
    // GET THE PAGE TITLE
    $GLOBALS['pageTitle'] = "";
    if (function_exists('is_tag') && is_tag()) {
        $GLOBALS['pageTitle'] .= single_tag_title("Tag Archive for &quot;", false) . '&quot; - ';
    } elseif (is_archive()) {
        $GLOBALS['pageTitle'] .= wp_title('', false) . ' Archive - ';
    } elseif (is_search()) {
        $GLOBALS['pageTitle'] .= 'Search for &quot;'.wp_specialchars($s).'&quot; - ';
    } elseif (!(is_404()) && (is_single()) || (is_page()) && !(is_front_page())) {
        $GLOBALS['pageTitle'] .= wp_title('-',false,'right');
    } elseif (is_404()) {
        $GLOBALS['pageTitle'] .=  'Not Found - ';
    }
    if (is_home() || is_front_page()) {
        $GLOBALS['pageTitle'] .= get_bloginfo('name') . ' - ' . get_bloginfo('description');
    } else {
        $GLOBALS['pageTitle'] .= get_bloginfo('name');
    }
    if ($paged>1) {
        $GLOBALS['pageTitle'] .=  ' - page '. $paged;
    }
    // SET DEFAULT PAGE IMAGE
    $GLOBALS['pageImage'] = get_bloginfo('template_directory') . "/_/img/fb-like.png";
    $pageDescriptionDefault = "We build snowboards. No really... that is what we do. We don’t order them from China or anywhere else and send someone to go check and see how they turned out. We physically hand build them right here at home in the USA. We buy the toughest, lightest, strongest, most environmental materials; many of which aren’t meant for snowboards or used by anyone else for what we use them for.";
    // GET THE PAGE DESCRIPTION, AND IMAGE IF IT'S SINGLE
    if (is_single()){
        if (have_posts()){
            while (have_posts()){
                the_post();
                $pageDescription = strip_tags(get_the_excerpt());
                // set page thumbnail now that we know we have a single post, used for FB likes
                $GLOBALS['pageImage'] = get_post_image('medium');
                $GLOBALS['pageImage'] = $GLOBALS['pageImage'][0];
            }
        }else{
            $pageDescription = $pageDescriptionDefault;
        }
    }else{
        if(has_post_thumbnail($post->ID) && !is_home()){
            $GLOBALS['pageImage'] = get_post_image('medium');
            $GLOBALS['pageImage'] = $GLOBALS['pageImage'][0];
        }
        if (have_posts() && !is_home()){
            while (have_posts()){
                the_post();
                $pageDescription = strip_tags(get_the_excerpt());
                if($pageDescription == ""){
                    $pageDescription = $pageDescriptionDefault;
                }
            }
        }else {
            $pageDescription = $pageDescriptionDefault;
        }
    }
    // check for the appropriate sport
    if (is_front_page() || is_tree('6886') || is_tree('7124') || get_post_type($post->ID) == "libtech_snowboards" || get_post_type($post->ID) == "libtech_bindings" || is_tree('18848') || get_post_type($post->ID) == "libtech_team_snow" || in_category( '220' ) || post_is_in_descendant_category( '220' )) {
        $GLOBALS['sport'] = "snow";
    } else if (is_tree('6884') || is_tree('18938') || get_post_type($post->ID) == "libtech_nas" || get_post_type($post->ID) == "libtech_team_nas" || in_category( '828' ) || post_is_in_descendant_category( '828' )) {
        $GLOBALS['sport'] = "ski";
    } else if (is_tree('11418') || is_tree('18952') || get_post_type($post->ID) == "libtech_waterboards") {
        $GLOBALS['sport'] = "surf";
    } else if (is_tree('7159') || is_tree('7161') || get_post_type($post->ID) == "libtech_skateboards" || get_post_type($post->ID) == "libtech_team_skate" || in_category( '190' ) || post_is_in_descendant_category( '190' ) || is_page('environmental')) {
        $GLOBALS['sport'] = "skate";
    } else {
        if (isset($_COOKIE["libtech_sport"])) { // check cookie for stored sport
            $GLOBALS['sport'] = $_COOKIE['libtech_sport'];
        } else {
            $GLOBALS['sport'] = "snow"; // default to snow if nothing was found
        }
    }
    if ($GLOBALS['sport'] == "ski") { // set the correct colored logo
        $logo = get_bloginfo('template_directory') . '/_/img/lib-tech-logo-ski.png';
    } else if ($GLOBALS['sport'] == "surf") {
        $logo = get_bloginfo('template_directory') . '/_/img/lib-tech-logo-surf.png';
    } else if ($GLOBALS['sport'] == "skate") {
        $logo = get_bloginfo('template_directory') . '/_/img/lib-tech-logo-skate.png';
    } else {
        $logo = get_bloginfo('template_directory') . '/_/img/lib-tech-logo.png';
    }
    setcookie('libtech_sport', $GLOBALS['sport'], time() + (86400 * 30), '/'); // 86400 = 1 day
    // set up classes to add to body
    $bodyClass = $GLOBALS['sport'];
    // check for international, will be removed by JS if imporoperly cached
    if (isset($_COOKIE["libtech_region"])) {
        if ($_COOKIE["libtech_region"] == "int") {
            $bodyClass .= " international";
        }
    }
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
<title><?php echo $GLOBALS['pageTitle']; ?></title>
    <meta name="title" content="<?php echo $GLOBALS['pageTitle']; ?>" />
    <meta name="description" content="<?php echo $pageDescription; ?>" />
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
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@libtechnologies">
    <!-- RSS FEEDS -->
    <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
    <link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
    <link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="<?php bloginfo('atom_url'); ?>" />
    <!-- Fav Icon -->
    <link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/_/img/favicon.ico" />
    <!-- Styles -->
    <link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" type="text/css" />
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
    <!-- WordPress Head -->
    <?php wp_head(); ?>
</head>
<body <?php body_class($bodyClass); ?>>
	<div class="wrapper">
		<header>
			<div class="logo-wrapper">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" id="logo"><img src="<?php echo $logo; ?>" alt="<?php bloginfo( 'name' ); ?> – <?php bloginfo( 'description' ); ?>" /></a>
			</div>
			<?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'main_menu',
                        'container' => 'nav',
                        'container_class' => 'nav-main'
                    )
                );
            ?>
			<div class="nav-sub-wrapper <? echo $GLOBALS['sport']; ?>">
                <?php
                    if ($GLOBALS['sport'] != "" && !is_front_page() && !is_home() && !is_page('environmental') && !is_page('technology') && !is_page('dealer-locator') && !is_page('search')) { // we have a sport, so use their menus
                        $productNav = $GLOBALS['sport'] . '_products';
                        $subNav = $GLOBALS['sport'] . '_sub';
                        wp_nav_menu( // sport products menu
                            array(
                                'theme_location' => $productNav,
                                'container' => 'nav',
                                'container_class' => 'nav-product'
                            )
                        );
                        wp_nav_menu( // sport sub menu
                            array(
                                'theme_location' => $subNav,
                                'container' => 'nav',
                                'container_class' => 'nav-sub'
                            )
                        );
                    } else {
                        wp_nav_menu( // default sub menu
                            array(
                                'theme_location' => 'sub_menu',
                                'container' => 'nav',
                                'container_class' => 'nav-sub'
                            )
                        );
                    }
                ?>

                <div class="mobile-btn"></div>
			</div>
			<div class="nav-utility">
				<div class="region-selector">
					<ul>
	                    <li><a href="#country-us" class="country-us">UNITED STATES</a></li>
	                    <li><a href="#country-ca" class="country-ca">CANADA</a></li>
	                    <li><a href="#country-int" class="country-int">INTERNATIONAL</a></li>
	                </ul>
				</div>
				<div class="link-dealer">
					<a href="/dealer-locator/">Find a dealer</a>
				</div>
				<div class="search">
					<a href="#search">Search</a>
					<form name="header-search" id="header-search" method="get" action="/search/">
						<input type="text" class="text-input" name="q" value="" />
						<input type="submit" class="submit" value="Search" />
					</form>
				</div>
				<div id="quick-cart">
					<a href="/shopping-cart/"><span></span></a>
				</div>
				<div class="link-account">
					<a href="http://lib-tech.shptron.com/account/?mfg_id=4374.4&language_id=1" target="_blank">My Account</a>
				</div>
			</div>
		</header>