<?php
/*
Template Name: Skateboard Ripper
*/
get_header();
	if (have_posts()) : while (have_posts()) : the_post();
		$thePostID = $post->ID;
		$slug = $post->post_name;
		$profilePhoto = get_field('libtech_team_profile_photo'); // libtech_team_related_products
		$profilePhoto = wp_get_attachment_image_src($profilePhoto, 'full', false);
?>
        <section class="ripper-details bg2 <?php echo $slug; ?>">
        	<div class="section-content">
        		<!--<div class="breadcrumb"><a href="/snowboarding/team/">&lt; Rippers Overview</a></div>-->
        		<h1><?php the_title(); ?></h1>
        		<div class="ripper-photo">
					<img src="<?php echo $profilePhoto[0]; ?>" alt="<?php the_title(); ?> Team Photo" width="<?php echo $profilePhoto[1]; ?>" height="<?php echo $profilePhoto[1]; ?>" />
				</div>
				<div class="ripper-right">
					<div class="ripper-meta">
						<?php if(get_field('libtech_team_home')) : ?><p class="ripper-home"><span>Local Skatepark: </span><?php the_field('libtech_team_home'); ?></p><?php endif; ?>
						<?php if(get_field('libtech_team_sponsors')) : ?><p class="ripper-sponsors"><span>Sponsors: </span><?php the_field('libtech_team_sponsors'); ?></p><?php endif; ?>
					</div>
					<h4><?php the_field('libtech_team_profile_tagline'); ?></h4>
					<div class="ripper-bio">
						<?php the_content(); ?>
					</div>
					<ul class="social-links">
						<?php if(get_field('libtech_team_facebook_username')) : ?><li><a href="http://www.facebook.com/<?php the_field('libtech_team_facebook_username'); ?>" class="facebook" target="_blank">Facebook</a></li><?php endif; ?>
						<?php if(get_field('libtech_team_twitter_username')) : ?><li><a href="http://twitter.com/<?php the_field('libtech_team_twitter_username'); ?>" class="twitter" target="_blank">Twitter</a></li><?php endif; ?>
						<?php if(get_field('libtech_team_vimeo_username')) : ?><li><a href="http://vimeo.com/<?php the_field('libtech_team_vimeo_username'); ?>" class="vimeo" target="_blank">Vimeo</a></li><?php endif; ?>
						<?php if(get_field('libtech_team_instagram_username')) : ?><li><a href="http://instagram.com/<?php the_field('libtech_team_instagram_username'); ?>" class="instagram" target="_blank">Instagram</a></li><?php endif; ?>
			        </ul>
			        <?php if(get_field('libtech_team_personal_website')) : ?><p class="personal-site"><a href="<?php the_field('libtech_team_personal_website'); ?>" target="_blank">Personal Website</a></p><?php endif; ?>
			    </div>
			    <div class="clearfix"></div>
        	</div><!-- END section-content -->
        </section><!-- END section-content -->
        <div class="bg3-top"></div>
		<section class="whats-new bg3">
			<div class="section-content">
				<h2>What's New</h2>
				<div class="content-grid" data-facebook="<?php if(get_field('libtech_team_facebook_username')) { the_field('libtech_team_facebook_username'); }; ?>" data-instagram="<?php if(get_field('libtech_team_instagram_username')) { the_field('libtech_team_instagram_username'); }; ?>">
					<ul>
						<?php
						// GET BLOG ENTRIES
						$post_cat_id = get_category_by_slug(get_field('libtech_team_blog_category_slug'));
						$post_cat_id = $post_cat_id->term_id;
						$args = array(
							'category' => $post_cat_id,
							'posts_per_page' => 3
						);
						$posts_query = get_posts($args);
						foreach($posts_query as $post) :
							$post_thumbnail = get_post_image('square-medium');
						?>

						<li class="grid-item blog item-<?php echo $i; ?>">
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
						endforeach;
						wp_reset_query(); // Reset Post Data

						// GET FEATURED PRODUCTS
						$post_objects = get_field('libtech_team_related_products');
						if( $post_objects ):
							$featuredProducts = Array();
							// get each related product
							foreach( $post_objects as $post_object):
								$postType = $post_object->post_type;
								// get variable values
								$imageID = get_field('libtech_product_image', $post_object->ID);
								// check which image size to use based on post type
								$productImage = wp_get_attachment_image_src($imageID, 'square-medium');
								$productLink = get_permalink($post_object->ID);
								$productTitle = get_the_title($post_object->ID);
								$productTag = get_field('libtech_product_slogan', $post_object->ID);
								// add to related product array
								array_push($featuredProducts, Array($productTitle, $productLink, $productImage, $productTag));
							endforeach;
							// randomly sort related products array
							shuffle($featuredProducts);
							// render out max of 4 related products
							// loop through products
							for($i = 0; $i < count($featuredProducts); ++$i) {
								if($i == 3){
									break;
								}
						?>
						<li class="grid-item product item-<?php echo $i; ?>">
		                	<div class="grid-item-wrapper">
			                    <a href="<?php echo $featuredProducts[$i][1]; ?>">
			                    	<div class="item-copy">
			                    		<p class="h3"><?php echo $featuredProducts[$i][0]; ?></p>
			                    		<p class="h5"><?php echo $featuredProducts[$i][3]; ?></p>
			                    	</div>
			                        <div class="item-image">
			                            <img src="<?php echo $featuredProducts[$i][2][0]; ?>" alt="<?php echo $featuredProducts[$i][0]; ?>" />
			                        </div>
			                    </a>
			                </div>
			            </li>
			            <?php
			        		}
						endif;
						?>

					</ul>
					<div class="clearfix"></div>
				</div><!-- END .content-grid -->
			</div><!-- END .section-content -->
		</section><!-- END .whats-new -->
		
<?php
		endwhile;
	endif;
	get_footer();
?>