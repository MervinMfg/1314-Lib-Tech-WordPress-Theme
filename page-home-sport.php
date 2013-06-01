<?php
/*
Template Name: Homepage Sport Template
*/
get_header(); 
?>

		<section class="featured-slider bg2">
			<div class="section-content">
				<div class="slider-wrapper">
					<ul class="bxslider">

						<?php
							if(get_field('libtech_homepage_banners')):
								while(the_repeater_field('libtech_homepage_banners')):
									$bannerImage = get_sub_field('libtech_homepage_banners_image');
		       						$bannerImage = wp_get_attachment_image_src($bannerImage, 'full', false);
		       						$bannerlink = get_sub_field('libtech_homepage_banners_link_url');
		       						$bannerAltText = get_sub_field('libtech_homepage_banners_alt_text');

		       						if (strpos($bannerlink,'vimeo.com') !== false) :
						?>

						<li><a href="<?php echo $bannerlink; ?>" class="video-link"><div class="video-image"><img src="<?php echo $bannerImage[0]; ?>" alt="<?php echo $bannerAltText; ?>" /></div></a></li>
						
						<?php
									else:

						?>

						<li><a href="<?php echo $bannerlink; ?>"><img src="<?php echo $bannerImage[0]; ?>" alt="<?php echo $bannerAltText; ?>" /></a></li>
						
						<?php

									endif;
								endwhile;
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
		</section><!-- END .featured-sliders -->
		<div class="bg-product-<?php echo $GLOBALS['sport']; ?>-top"></div>
		<section class="product-slider bg-product-<?php echo $GLOBALS['sport']; ?>">
			<div class="section-content">
				<ul class="product-listing bxslider">
		            <?php
		                // Get Snowboards
		                $args = array(
		                    'post_type' => 'libtech_snowboards',
		                    'posts_per_page' => -1,
		                    'orderby' => 'menu_order',
		                    'order' => 'ASC',
		                );
		                $loop = new WP_Query( $args );
		                while ( $loop->have_posts() ) : $loop->the_post();
		                    $postType = $post->post_type;
		                    $imageID = get_field('libtech_product_image');
		                    if($postType != "libtech_nas" && $postType != "libtech_skateboards"){
		                        $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb');
		                    }else{
		                        $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb-vertical');
		                    }
		            ?>

		            <li>
		                <a href="<? the_permalink(); ?>">
		                    <img src="<?php echo $imageFile[0]; ?>" width="<?php echo $imageFile[1]; ?>" height="<?php echo $imageFile[2]; ?>" alt="<?php the_title(); ?> Image" />
		                    <div class="product-peek">
		                    	<p class="product-title"><?php the_title(); ?></p>
		                    	<p class="product-type"><?php the_field('libtech_snowboard_contour'); ?></p>
		                    </div>
		                </a>
		            </li>

		            <?
		                endwhile;
		                wp_reset_query();
		            ?>
		        </ul>
			</div>
		</section><!-- END .product-slider -->

		<?php
			$facebookUsername = get_field('libtech_homepage_fb_username');
			if ($facebookUsername == "") { $facebookUsername = "libtech"; }
			$instagramUsername = get_field('libtech_homepage_instagram_username');
			if ($instagramUsername == "") { $instagramUsername = "libtechnologies"; }
			$vimeoUsername = get_field('libtech_homepage_vimeo_username');
			if ($vimeoUsername == "") { $vimeoUsername = "libtech"; }
			$twitterUsername = get_field('libtech_homepage_twitter_username');
			if ($twitterUsername == "") { $twitterUsername = "libtechnologies"; }
		?>

		<div class="bg2-top"></div>
		<section class="whats-new bg2">
			<div class="section-content">
				<h2>What's New:</h2>
				<div class="social-links">
					<p class="h4">Hit us up!</p>
					<ul>
						<li><a href="http://www.facebook.com/<?php echo $facebookUsername; ?>" class="facebook" target="_blank">Facebook</a></li>
						<li><a href="http://www.instagram.com/<?php echo $instagramUsername; ?>" class="instagram" target="_blank">Instagram</a></li>
						<li><a href="http://www.vimeo.com/<?php echo $vimeoUsername; ?>" class="vimeo" target="_blank">Vimeo</a></li>
						<li><a href="http://www.twitter.com/<?php echo $twitterUsername; ?>" class="twitter" target="_blank">Twitter</a></li>
					</ul>
					<div class="clearfix"></div>
				</div>
				<div class="content-grid" data-facebook="<?php echo $facebookUsername; ?>" data-instagram="<?php echo $instagramUsername; ?>">
					<ul>
						<?php
						// GET BLOG ENTRIES
						$post_cat_id = get_field('libtech_homepage_blog_cat_id');
						if ($post_cat_id != "") {
							$args = array(
								'cat' => $post_cat_id,
								'posts_per_page' => 3,
								'post__in'  => get_option( 'sticky_posts' ),
								'ignore_sticky_posts' => 1
							);
							$post_cat_slug = get_cat_slug($post_cat_id);
						}else{
							$args = array(
								'posts_per_page' => 3,
								'post__in'  => get_option( 'sticky_posts' ),
								'ignore_sticky_posts' => 1
							);
						}
						$home_query = new WP_Query($args);

						$i=1;
						if (have_posts()) :
							while ($home_query->have_posts()) :
								$home_query->the_post();
								$post_thumbnail = get_post_image('square-medium');
						?>

						<li class="grid-item blog">
							<div class="grid-item-wrapper">
								<a href="<?php the_permalink() ?>">
									<div class="blog-copy">
										<p class="h3"><?php the_title(); ?></p>
										<p class="meta"><time datetime="<?php the_time('c') ?>"><?php the_time('F jS, Y') ?></time> | <fb:comments-count href=<?php the_permalink() ?>></fb:comments-count> Comments</p>
										<p class="excerpt"><?php the_excerpt(); ?></p>
									</div>
									<div class="blog-image">
										<img src="<?php echo $post_thumbnail[0]; ?>" alt="Image From <?php echo get_the_title(); ?>" />
									</div>
									<div class="clearfix"></div>
								</a>
							</div>
						</li>

						<?php
							endwhile;
						endif;
						wp_reset_query(); // Reset Post Data

						// GET TEAM MEMBERS
	                    $args = array(
	                        'post_type' => 'libtech_team_snow',
	                        'posts_per_page' => 3,
	                        'orderby' => 'rand'
	                    );
	                    $loop = new WP_Query( $args );
	                    while ( $loop->have_posts() ) : $loop->the_post();
	                        // check if snowbaord is related to the tech
	                        $overviewPhoto = get_field('libtech_team_profile_photo');
	                        $overviewPhoto = wp_get_attachment_image_src($overviewPhoto, 'square-medium', false);
		                ?>

		                <li class="grid-item">
		                	<div class="grid-item-wrapper">
			                    <a href="<?php the_permalink(); ?>">
			                        <div class="team-member-image">
			                            <img src="<?php echo $overviewPhoto[0]; ?>" alt="<?php the_title(); ?> Profile" />
			                        </div>
			                    </a>
			                </div>
		                </li>

		                <?php
	                    endwhile;
	                    wp_reset_query(); // Reset Post Data

						// GET FEATURED PRODUCTS
						$post_objects = get_field('libtech_homepage_products');
						if( $post_objects ):
							$featuredProducts = Array();
							// get each related product
							foreach( $post_objects as $post_object):
								$postType = $post_object->post_type;
								// get variable values
								$imageID = get_field('libtech_product_image', $post_object->ID);
								// check which image size to use based on post type
								$productImage = wp_get_attachment_image_src($imageID, 'overview-thumb');
								$productLink = get_permalink($post_object->ID);
								$productTitle = get_the_title($post_object->ID);
								// add to related product array
								array_push($featuredProducts, Array($productTitle, $productLink, $productImage));
							endforeach;
							// randomly sort related products array
							shuffle($featuredProducts);
							// render out max of 4 related products
							// loop through products
							for($i = 0; $i < count($featuredProducts); ++$i) {
								if($i == 4){
									break;
								}
						?>
						<li class="grid-item">
		                	<div class="grid-item-wrapper">
			                    <a href="<?php echo $featuredProducts[$i][1]; ?>">
			                        <div class="team-member-image">
			                            <img src="<?php echo $featuredProducts[$i][2][0]; ?>" alt="<?php echo $featuredProducts[$i][0]; ?>" />
			                        </div>
			                    </a>
			                </div>
			            <?php
			        		}
						endif;
						?>

					</ul>
					<div class="clearfix"></div>
				</div><!-- END .content-grid -->
			</div><!-- END .section-content -->
		</section><!-- END .whats-new -->

		<div class="bg3-top"></div>
		<section class="events bg3">
			<div class="section-content">
				<h2>Events:</h2>
			</div>
		</section><!-- END .events -->

<?php get_footer(); ?>