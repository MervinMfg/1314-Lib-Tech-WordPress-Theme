<?php
/*
Template Name: NAS Detail
*/
	get_header();
	if (have_posts()) : while (have_posts()) : the_post();
		$thePostID = $post->ID;
		$slug = $post->post_name;
?>
        <div class="bg-product-details-top"></div>
        <section class="product-details bg-product-details <?php echo $slug; ?>">
        	<div class="section-content">
				<h1><?php the_title(); ?></h1>
				<div class="product-images">
					<ul id="image-list">
			       		<?php
							// get product image
							$productImageID = get_field('libtech_product_image');
							$productImageThumb = wp_get_attachment_image_src($productImageID, 'thumbnail', false);
			       			$productImageMedium = wp_get_attachment_image_src($productImageID, 'square-xlarge', false);
			       			$productImageFull = wp_get_attachment_image_src($productImageID, 'full', false);
			       			// set up variations
			       			$variations = Array();
							$isProductAvailable = "No";
							if(get_field('libtech_nas_variations')):
								while(the_repeater_field('libtech_nas_variations')):
									$variationLength = get_sub_field('libtech_nas_variations_length');
									$variationSKU = get_sub_field('libtech_nas_variations_sku');
									if ($GLOBALS['language'] == "ca") {
										$variationAvailable = get_sub_field('libtech_nas_variations_availability_ca');
									} else {
										$variationAvailable = get_sub_field('libtech_nas_variations_availability_us');
									}
									// set overall availability
									if($variationAvailable == "Yes"){
										$isProductAvailable = "Yes";
									}
									array_push($variations, Array($variationLength, $variationSKU, $variationAvailable));
								endwhile;
							endif;
							// set up sku list
							$productSkus = "";
							for ($i = 0; $i < count($variations); $i++) {
								$productSkus .= $variations[$i][1];
								if($i < count($variations)-1){
									$productSkus .= ", ";
								}
							}
							// build array of sizes
							$variationSizes = Array();
							if(get_field('libtech_nas_variations')):
								while(the_repeater_field('libtech_nas_variations')):
									$variationLength = get_sub_field('libtech_nas_variations_length');
									// add size to array
									array_push($variationSizes, $variationLength);
								endwhile;
							endif;
							// sort sizes
							array_multisort($variationSizes, SORT_ASC);
							// setup sizes text display
							$sizes = "";
							for ($i = 0; $i < count($variationSizes); $i++) {
								$sizes .= $variationSizes[$i];
								if($i < count($variationSizes)-1){
									$sizes .= ", ";
								}
							}
			       		?>
			       		<li><a href="<?php echo $productImageFull[0]; ?>" title="<?php the_title(); ?>"><img src="<?php echo $productImageMedium[0]; ?>" alt="<?php the_title(); ?>" width="<?php echo $productImageMedium[1]; ?>" height="<?php echo $productImageMedium[2]; ?>" /></a></li>
					</ul>
				</div><!-- END .product-images -->

				<div class="product-details-right">
					<h3><?php the_field('libtech_product_slogan'); ?></h3>
					<div class="image-list-thumbs hidden">
						<ul id="image-list-thumbs">
							<li><a href="<?php echo $productImageFull[0]; ?>" title="<?php the_title(); ?>" data-sku="<?php echo $productSkus; ?>" data-slide-index="<?php echo $i; ?>"><img src="<?php echo $productImageThumb[0]; ?>" alt="<?php the_title(); ?>" data-sub-alt="Sizes: <?php echo $sizes; ?>" width="<?php echo $productImageThumb[1]; ?>" height="<?php echo $productImageThumb[2]; ?>" /></a></li>
						</ul>
					</div>
					<div class="product-price">
						<?php echo getPrice( get_field('libtech_product_price_us'), get_field('libtech_product_price_ca'), get_field('libtech_product_on_sale'), get_field('libtech_product_sale_percentage') ); ?>
					</div>
					<div class="product-variations <?php if($isProductAvailable == "No"){echo 'hidden';} ?>">
						<select id="product-variation" class="select">
							<option value="-1">Select a Size</option>
							<?php
								// sort by variation name
								asort($variations);
								// render out snowboards dropdown
								foreach ($variations as $variation) {
							?>
							<option value="<?php echo $variation[1]; ?>" title="<?php echo $variation[0]; ?>"<?php if($variation[2] == "No") echo ' disabled="disabled"'; ?>><?php echo $variation[0]; ?></option>
							<?php
								}
							?>
						</select>
					</div>
					<div class="product-buy">
						<ul>
							<?php if($isProductAvailable == "Yes"): ?>
							<li class="loading hidden"></li>
							<li class="cart-button"><a href="#add-to-cart" class="add-to-cart h3">Add to Cart</a> <img src="<?php bloginfo('template_directory'); ?>/_/img/shopatron-secure-logo.png" alt="Shopatron Secure" /></li>
							<?php else: ?>
							<li>Item is currently not available online.</li>
							<?php endif; ?>
							<li class="find-dealer h4"><a href="/store-locator/">Find a Dealer</a></li>
						</ul>
						<div class="cart-success hidden"><p>The item has been added to your cart.</p><p><a href="/shopping-cart/" class="cart-link">View your shopping cart</a></p></div>
						<div class="cart-failure hidden"><p>There has been an error adding the item to your cart.</p><p>Try again later or <a href="/contact/">contact us</a> if the problem persists.</p></div>
					</div>
					<ul class="product-quick-specs">
						<li><span>Shape</span> <?php the_field('libtech_nas_shape'); ?></li>
						<li><span>Contour</span> <?php the_field('libtech_nas_contour'); ?></li>
						<li><span>Sizes:</span> <?php echo $sizes; ?></li>
					</ul>
					<ul class="product-share">
						<li><div class="fb-like" data-href="<? the_permalink(); ?>" data-layout="button_count" data-width="120" data-show-faces="false" data-colorscheme="dark" data-font="trebuchet ms"></div></li>
						<li><a href="https://twitter.com/share" class="twitter-share-button" data-via="libtechnas">Tweet</a></li>
						<li><div class="g-plusone" data-size="medium" data-href="<? the_permalink(); ?>"></div></li>
						<li><a href="http://pinterest.com/pin/create/button/?url=<?php the_permalink(); ?>&media=<?php echo $GLOBALS['pageImage']; ?>&description=<?php echo $GLOBALS['pageTitle']; ?>" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a></li>
					</ul>
				</div><!-- END .product-details-right -->
				<div class="clearfix"></div>
			</div><!-- END .section-content -->
		</section>
		<section class="product-zoom bg-product-details">
        	<div class="section-content">
        		<div class="zoom-title"></div>
        		<div class="zoom-image">
        			<img src="" />
        		</div>
        		<div class="zoom-controls">
        			<a href="#close-zoom" class="zoom-close h3">Close</a>
        			<ul id="zoom-thumbnails"></ul>
        		</div>
        	</div><!-- END .section-content -->
        </section><!-- END .product-zoom -->
		<div class="bg2-top"></div>
        <section class="product-extras bg2 info">
        	<div class="section-content">
        		<div class="product-mobile-nav">
        			<ul>
        				<li><a href="#info" class="h3 selected" id="info">Info</a></li>
        				<li><a href="#specs" class="h3" id="specs">Specs</a></li>
        				<li><a href="#tech" class="h3" id="tech">Tech</a></li>
        			</ul>
        		</div>
        		<div class="product-desc-awards-specs">
        			<div class="product-desc-awards">
		        		<div class="product-description">
		        			<?php the_content(); ?>
		        		</div>
		        		<?php // display awards if there are any
						$awards = get_field('libtech_product_awards');
						if( $awards ):
						?>
			        	<div class="product-awards">
							<h2>Awards</h2>
							<ul>
							<?php
								foreach( $awards as $award):
									$imageID = get_field('libtech_award_image', $award->ID);
									$imageFile = wp_get_attachment_image_src($imageID, 'full');
									echo '<li><img src="'.$imageFile[0].'" width="'.$imageFile[1].'" height="'.$imageFile[2].'" alt="' . get_the_title($award->ID) . '" /><div class="tool-tip">' . get_the_title($award->ID) . '</div></li>';
								endforeach;
							?>

							</ul>
							<div class="clearfix"></div>
						</div>
						<? endif; // end awards ?>
					</div><!-- END .product-desc-awards -->
					<div class="product-specs">
						<h2>Specifications</h2>
						<table>
							<thead>
								<tr>
									<th>Model<br />Name</th>
									<th>Contact<br />Length</th>
									<th>Side<br />Cut</th>
									<th>Nose<br />Width</th>
									<th>Waist<br />Width</th>
									<th>Tail<br />Width</th>
									<th>Flex<br /><span>10 = Firm</span></th>
									<th>Weight<br /><span>(lbs)</span></th>
								</tr>
							</thead>
							<tbody>
								<?php
									if(get_field('libtech_nas_specs')):
										while(the_repeater_field('libtech_nas_specs')):
								?>

								<tr>
									<td><?php the_sub_field('libtech_nas_specs_length'); ?></td>
									<td><?php the_sub_field('libtech_nas_specs_contact_length'); ?></td>
									<td><?php the_sub_field('libtech_nas_specs_side_cut'); ?></td>
									<td><?php the_sub_field('libtech_nas_specs_nose_width'); ?></td>
									<td><?php the_sub_field('libtech_nas_specs_waist_width'); ?></td>
									<td><?php the_sub_field('libtech_nas_specs_tail_width'); ?></td>
									<td><?php the_sub_field('libtech_nas_specs_flex_rating'); ?></td>
									<td><?php the_sub_field('libtech_nas_specs_weight'); ?></td>
								</tr>

								<?php
										endwhile;
									endif;
								?>
							</tbody>
							<tfoot>
								<tr>
									<td colspan="2"><a href="/skiing/specifications/" class="view-all-specs">View all specs</a></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div><!-- END .product-desc-awards-specs -->
				<div class="product-tech-major tech-major">
					<h2>Technology</h2>
					<ul>
						<?php
						$args = array( 'post_type' => 'libtech_technology', 'posts_per_page' => -1, 'orderby' => 'menu_order', 'order' => 'ASC' );
						$loop = new WP_Query( $args );
						while ( $loop->have_posts() ) : $loop->the_post();
							// check if item is major
							if(get_field("libtech_technology_type") == "Major"):
								// check if product is related to the tech
								$relatedItems = get_field('libtech_technology_related_products');
								if( $relatedItems ):
									foreach( $relatedItems as $relatedItem):
										if($relatedItem->ID == $thePostID):
											$videoID = get_field("libtech_technology_video");
						?>
						<li>
							<div class="tech-video">
								<iframe src="http://player.vimeo.com/video/<?php echo $videoID; ?>?title=0&amp;byline=0&amp;portrait=0&amp;color=fff100" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
							</div>
							<div class="tech-copy">
								<h4><?php the_title(); ?></h4>
								<?php the_content(); ?>
							</div>
							<div class="clearfix"></div>
						</li>
						<?php
										endif;
									endforeach;
								endif;
							endif;
						endwhile;
						wp_reset_query();
						?>
					</ul>
					<div class="clearfix"></div>
				</div><!-- END .product-tech-major -->
				<div class="product-tech-minor tech-minor">
					<h2>Ingredients</h2>
					<ul>
						<?php
						$args = array( 'post_type' => 'libtech_technology', 'posts_per_page' => -1, 'orderby' => 'menu_order', 'order' => 'ASC' );
						$loop = new WP_Query( $args );
						while ( $loop->have_posts() ) : $loop->the_post();
							// check if item is minor
							if(get_field("libtech_technology_type") == "Minor"):
								// check if product is related to the tech
								$relatedItems = get_field('libtech_technology_related_products');
								if( $relatedItems ):
									foreach( $relatedItems as $relatedItem ):
										if( $relatedItem->ID == $thePostID ):
											$imageID = get_field("libtech_technology_icon");
											$imageFile = wp_get_attachment_image_src($imageID, 'thumbnail');
						?>

						<li>
							<div class="tech-pad">
								<h4><img src="<?php echo $imageFile[0]; ?>" /><span><?php the_title(); ?></span></h4>
								<div class="tech-copy">
									<?php the_content(); ?>
								</div>
							</div>
						</li>

						<?php
										endif;
									endforeach;
								endif;
							endif;
						endwhile;
						wp_reset_query();
						?>
					</ul>
				</div><!-- END .product-tech-minor -->
			</div>
		</section>

		<?php
			// display video if we have an id
			$videoID = get_field('libtech_product_video');
			if( $videoID ):
		?>
		<div class="bg3-top product-video-top"></div>
        <section class="bg3 product-video">
        	<div class="section-content">
				<h2><span>Video</span></h2>
				<div class="video-player">
					<iframe src="http://player.vimeo.com/video/<?php echo $videoID; ?>?title=0&amp;byline=0&amp;portrait=0&amp;color=fff100" width="940" height="528" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
				</div>
				<div class="video-copy">
					<p class="quote h3"><?php the_field('libtech_product_video_quote'); ?></p>
					<p class="quote-attribution h4">- <?php the_field('libtech_product_video_quote_attribution'); ?></p>
				</div>
				<div class="clearfix"></div>
			</div>
		</section>
		<?php
			endif;
		?>

		<?php
			comments_template();
			// display the related products
			getRelatedProducts();
		?>
<?php
		endwhile;
	endif;
	get_footer();
?>