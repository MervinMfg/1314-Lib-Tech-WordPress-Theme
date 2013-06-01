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
		<footer>
			<div class="footer-top"></div>
			<div class="footer-wrapper">
				<div class="region-and-social">
					<div class="region-selector">
						<p class="h2">Region Selector</p>
						<ul>
			                <li><a href="#country-us" class="country-us">UNITED STATES</a></li>
			                <li><a href="#country-ca" class="country-ca">CANADA</a></li>
			                <li><a href="#country-int" class="country-int">INTERNATIONAL</a></li>
			            </ul>
					</div>
					<div class="social-links">
						<p class="h2">Hit us up!</p>
						<ul>
							<li><a href="http://www.facebook.com/libtech" class="facebook" target="_blank">Facebook</a></li>
							<li><a href="http://www.instagram.com/libtechnologies" class="instagram" target="_blank">Instagram</a></li>
							<li><a href="http://www.vimeo.com/libtech" class="vimeo" target="_blank">Vimeo</a></li>
							<li><a href="http://www.twitter.com/libtechnologies" class="twitter" target="_blank">Twitter</a></li>
							<li><a href="/feed/" class="rss">RSS</a></li>
						</ul>
					</div>
				</div>
				<nav class="nav-footer">
					<div class="sports">
						<p class="h2">Sports</p>
						<ul>
							<li><a href="/snowboarding/">Snow</a></li>
							<li><a href="/skiing/">Ski</a></li>
							<li><a href="/surfing/">Surf</a></li>
							<li><a href="/skateboarding/">Skate</a></li>
						</ul>
					</div>
					<div class="shop">
						<p class="h2">Shop</p>
						<ul>
							<li><a href="/snowboards/">Snowboards</a></li>
							<li><a href="/skis/">NAS</a></li>
							<li><a href="/surfboards/">Waterboards</a></li>
							<li><a href="/skateboards/">Skateboards</a></li>
							<li><a href="/bindings/">Bindings</a></li>
							<li><a href="/outerwear/">Outerwear</a></li>
							<li><a href="/apparel/">Apparel</a></li>
							<li><a href="/accessories/">Accessories</a></li>
							<li><a href="/luggage/">Luggage</a></li>
						</ul>
					</div>
					<div class="about">
						<p class="h2">About</p>
						<ul>
							<li><a href="/rippers/">Rippers</a></li>
							<li><a href="/kraftsmen/">Kraftsmen</a></li>
							<li><a href="/artists/">Artists</a></li>
							<li><a href="/technology/">Technology</a></li>
							<li><a href="/environmental/">Environmental</a></li>
							<li><a href="/faqs/">Faqs</a></li>
							<li><a href="/testimonials/">Testimonials</a></li>
							<li><a href="/dealers/">Dealers</a></li>
						</ul>
					</div>
					<div class="support">
						<p class="h2">Support</p>
						<ul>
							<li><a href="/rippers/">Contact</a></li>
							<li><a href="/rippers/">Register</a></li>
							<li><a href="/rippers/">Warranty</a></li>
							<li><a href="/rippers/">Policies</a></li>
							<li><a href="/rippers/">Privacy</a></li>
							<li><a href="/rippers/">My Account</a></li>
							<li><a href="/rippers/">Safety &amp; Security</a></li>
							<li><a href="/rippers/">30 Day Returns</a></li>
							<li><a href="/rippers/">Ordering Info</a></li>
						</ul>
					</div>
				</nav>
				<div class="logo">
					<img src="<?php bloginfo('template_directory'); ?>/_/img/footer-handcrafted.png" alt="Lib Tech - Handcrafted in the USA near Canada" />
				</div>
				<div class="search">
					<p class="h2">Search</p>
					<form name="footer-search" id="footer-search" method="get" action="/">
						<input type="text" id="searchinput-footer" class="text-input" name="s" value="" />
						<input type="submit" id="searchsubmit-footer" class="submit" value="Search" />
					</form>
				</div>
				<div class="subscribe">
						<p class="h2">Subscribe</p>
						<form target="_blank" class="validate clearfix" name="mc-embedded-subscribe-form" id="mc-embedded-subscribe-form" method="post" action="http://mervin.us1.list-manage1.com/subscribe/post?u=86253f560bfb6feb1f80233bb&amp;id=c0ed21a3a8">
							<fieldset>
								<input type="text" id="mce-EMAIL" class="text-input email" name="EMAIL" value="enter your email..." onfocus="if (this.value == 'enter your email...') {this.value = '';}" onblur="if (this.value == '') {this.value = 'enter your email...';}" />
								<?php if ( is_tree('6886') ) { ?><input type="hidden" value="2" name="group[22][2]" /><?php  // check the snowboarding box ?>
								<?php } elseif ( is_tree('6884') || is_tree('7030') ) { ?><input type="hidden" value="4" name="group[22][4]" /><?php   // NAS or NASSERS - check the NAS box ?>
								<?php } elseif ( is_tree('7159') || is_tree('7042') ) { ?><input type="hidden" value="16" name="group[22][16]" /><?php   // SKATE or SKATERS check the Skateboarding box ?>
								<?php } elseif ( is_tree('11418') ) { ?><input type="hidden" value="8" name="group[22][8]" /><?php   // WATERBOARD check the Waterboarding box ?>
								<?php  } else { // check just snowboarding ?>
								<input type="hidden" value="2" name="group[22][2]" />
								<?php } ?>
								<input type="submit" class="submit" id="mc-embedded-subscribe" name="subscribe" value="Go" />
							</fieldset>
						</form>
					</div>
				<div class="footer-copy">
					<p>701 N. 34th St, Ste #100 – Seattle, WA 98103<br />&copy; 2013 Lib Technologies – All rights reserved</p>
				</div>
				<div class="clearfix"></div>
			</div><!-- END .footer-wrapper -->
		</footer>
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
	<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/lib/jquery.fitvids.js"></script>
	<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/lib/jquery.bxslider.min.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/lib/jquery.treeview.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/lib/froogaloop.js"></script>
	<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/libtech.main.js"></script>
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