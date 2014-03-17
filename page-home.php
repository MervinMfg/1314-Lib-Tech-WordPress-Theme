<?php
/*
Template Name: Homepage Template
*/
get_header(); 
?>

		<section class="featured-slider bg2">
			<div class="section-content">
				<div class="slider-wrapper">
					<ul class="bxslider">

						<?php
							if(get_field('libtech_homepage_banners')):
								$featuresArray = array();
								$promosArray = array();
								$snowArray = array();
								$skiArray = array();
								$surfArray = array();
								$skateArray = array();

								function renderBanner($banner) {
									if (strpos($banner['link'],'vimeo.com') !== false) : // display vimeo image/video
										echo '<li><a href="' . $banner['link'] . '" class="video-link"><div class="video-image"><img src="' . $banner['image'][0] . '" alt="' . $banner['altText'] . '" /></div></a></li>';
									else: // display standard image
										echo '<li><a href="' . $banner['link'] . '"><img src="' . $banner['image'][0] . '" alt="' . $banner['altText'] . '" /></a></li>';
									endif;
								}

								while(the_repeater_field('libtech_homepage_banners')):
									$bannerImage = get_sub_field('libtech_homepage_banners_image');
		       						$bannerImage = wp_get_attachment_image_src($bannerImage, 'full', false);
		       						$bannerlink = get_sub_field('libtech_homepage_banners_link_url');
		       						$bannerAltText = get_sub_field('libtech_homepage_banners_alt_text');
		       						$bannerCategory = get_sub_field('libtech_homepage_banners_cat');

		       						$banner = array(
										"image" => $bannerImage,
										"link" => $bannerlink,
										"altText" => $bannerAltText,
										"category" => $bannerCategory
									);

									switch ($banner['category']) {
										case 'features':
											array_push($featuresArray, $banner);
											break;
										case 'promos':
											array_push($promosArray, $banner);
											break;
										case 'snow':
											array_push($snowArray, $banner);
											break;
										case 'ski':
											array_push($skiArray, $banner);
											break;
										case 'surf':
											array_push($surfArray, $banner);
											break;
										case 'skate':
											array_push($skateArray, $banner);
											break;
									}
								endwhile;
								// display featured banners
								if(!empty($featuresArray)):
									foreach( $featuresArray as $banner):
			       						renderBanner($banner);
									endforeach;
								endif;
								// display promos
								if(!empty($promosArray)):
									shuffle($promosArray);
									renderBanner($promosArray[0]);
								endif;
								// display snow
								if(!empty($snowArray)):
									shuffle($snowArray);
									renderBanner($snowArray[0]);
								endif;
								// display ski
								if(!empty($skiArray)):
									shuffle($skiArray);
									renderBanner($skiArray[0]);
								endif;
								// display surf
								if(!empty($surfArray)):
									shuffle($surfArray);
									renderBanner($surfArray[0]);
								endif;
								// display skate
								if(!empty($skateArray)):
									shuffle($skateArray);
									renderBanner($skateArray[0]);
								endif;
							else:
						?>

						<li><a href="#"><img src="<?php bloginfo('template_directory'); ?>/_/img/placeholder-slider.jpg" alt="Have Kiker make a banner!" /></a></li>

						<?php
							endif;
						?>
					</ul>
				</div>
			</div><!-- END .section-content -->
			<div class="clearfix"></div>
		</section><!-- END .featured-slider -->
		<div class="bg3-top"></div>
		<section class="homepage-posts bg3">
			<div class="section-content">
				<h2>Bitchin' Board Stories</h2>
				<ul>

					<?php
						$args = array(
							'posts_per_page' => 6,
							'post__in'  => get_option( 'sticky_posts' ),
							'ignore_sticky_posts' => 1
						);
						$postsQuery = new WP_Query($args);

						$i=1;
						if (have_posts()) :
							while ($postsQuery->have_posts()) :
								$postsQuery->the_post();
								$postImage = get_post_image('square-medium');
					?>

					<li class="homepage-post">
						<div class="post-wrapper">
							<a href="<?php the_permalink() ?>">
								<img src="<?php echo $postImage[0]; ?>" alt="Image From <?php echo get_the_title(); ?>" />
								<h3 class="post-title"><?php the_title(); ?></h3>
								<p class="post-meta">
									<time datetime="<?php the_time('c') ?>"><?php the_time('F jS, Y') ?></time> | <span><fb:comments-count href=<?php the_permalink() ?>></fb:comments-count> Comments</span>
								</p>
								<p class="post-excerpt"><?php libtech_excerpt('libtech_excerptlength_home'); ?></p>
								<p class="post-more">READ MORE</p>
							</a>
						</div>
					</li>

					<?php
								$post_thumbnail = ""; $i++; // resetting image value, incrementing $i
							endwhile;
						endif;
						// Reset Post Data
						wp_reset_query();
					?>

				</ul>
			</div><!-- END .section-content -->
			<div class="clearfix"></div>
		</section><!-- END .homepage-posts -->
		<div class="homepage-sports-top bg1-top"></div>
		<section class="homepage-sports bg1">
			<div class="section-content">
				<h2>Sports</h2>
				<ul>
					<li class="homepage-sport">
						<div class="sport-wrapper">
							<a href="/snowboarding/">
								<img src="<?php bloginfo('template_directory'); ?>/_/img/home-snow.jpg" alt="Snowboarding" />
								<h4>Snowboarding</h4>
							</a>
						</div>
					</li>
					<li class="homepage-sport">
						<div class="sport-wrapper">
							<a href="/skiing/">
								<img src="<?php bloginfo('template_directory'); ?>/_/img/home-ski.jpg" alt="Nasing" />
								<h4>Nasing</h4>
							</a>
						</div>
					</li>
					<li class="homepage-sport">
						<div class="sport-wrapper">
							<a href="http://www.libtechwaterboarding.com" target="_blank">
								<img src="<?php bloginfo('template_directory'); ?>/_/img/home-surf.jpg" alt="Waterboarding" />
								<h4>Waterboarding</h4>
							</a>
						</div>
					</li>
					<li class="homepage-sport">
						<div class="sport-wrapper">
							<a href="/skateboarding/">
								<img src="<?php bloginfo('template_directory'); ?>/_/img/home-skate.jpg" alt="Skatboarding" />
								<h4>Skateboarding</h4>
							</a>
						</div>
					</li>
				</ul>
			</div><!-- END .section-content -->
			<div class="clearfix"></div>
		</section><!-- END .homepage-sports -->
		<div class="homepage-links-top bg2-top"></div>
		<section class="homepage-links bg2">
			<div class="section-content">
				<h2>Handcrafted in the USA near Canada</h2>
				<ul>
					<li class="homepage-link">
						<div class="link-wrapper">
							<a href="/snowboarding/team/">
								<img src="<?php bloginfo('template_directory'); ?>/_/img/home-rippers.jpg" alt="Team" />
								<h4>Rippers</h4>
							</a>
						</div>
					</li>
					<li class="homepage-link">
						<div class="link-wrapper">
							<a href="/category/kraftsmen/">
								<img src="<?php bloginfo('template_directory'); ?>/_/img/home-kraftsmen.jpg" alt="Kraftsmen" />
								<h4>Kraftsmen</h4>
							</a>
						</div>
					</li>
					<li class="homepage-link">
						<div class="link-wrapper">
							<a href="/category/artists/">
								<img src="<?php bloginfo('template_directory'); ?>/_/img/home-artists.jpg" alt="Artists" />
								<h4>Artists</h4>
							</a>
						</div>
					</li>
					<li class="homepage-link">
						<div class="link-wrapper">
							<a href="/technology/">
								<img src="<?php bloginfo('template_directory'); ?>/_/img/home-technology.jpg" alt="Technology" />
								<h4>Technology</h4>
							</a>
						</div>
					</li>
					<li class="homepage-link">
						<div class="link-wrapper">
							<a href="/environmental/">
								<img src="<?php bloginfo('template_directory'); ?>/_/img/home-environmental.jpg" alt="Environmental" />
								<h4><span>environ</span>Mental</h4>
							</a>
						</div>
					</li>
				</ul>
			</div><!-- END .section-content -->
			<div class="clearfix"></div>
		</section><!-- END .homepage-sports -->

<?php get_footer(); ?>