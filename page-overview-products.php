<?php
/*
Template Name: Products Overview
*/
get_header();
?>
        <div class="bg-product-<?php echo $GLOBALS['sport']; ?>-top"></div>
        <section class="featured-product-slider bg-product-<?php echo $GLOBALS['sport']; ?>">
            <div class="section-content">
                <h2>Rad Shit:</h2>
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
                            $imageFile = wp_get_attachment_image_src($imageID, 'full');
                    ?>

                    <li>
                        <div class="product-image">
                            <img src="<?php echo $imageFile[0]; ?>" width="<?php echo $imageFile[1]; ?>" height="<?php echo $imageFile[2]; ?>" alt="<?php the_title(); ?> Image" />
                        </div>
                        <div class="product-copy">
                            <div class="title h2"><?php the_title(); ?></div>
                            <div class="contour h3"><?php the_field('libtech_snowboard_contour'); ?></div>
                            <p class="slogan h4"><?php the_field('libtech_product_slogan'); ?></p>
                            <div class="description">
                                <?php the_content(); ?>
                            </div>
                            <p class="price h3">$696.69</p>
                            <a href="<? the_permalink(); ?>" class="buy h4">Buy Now!</a>
                        </div>
                        <div class="clearfix"></div>
                    </li>

                    <?
                        endwhile;
                        wp_reset_query();
                    ?>
                </ul>
            </div>
            <div class="clearfix"></div>
        </section><!-- END .product-slider -->
        <div class="bg3-top"></div>
        <section class="product-overview bg3">
            <div class="section-content">
                <h1>Snowboards</h1>
                <ul class="product-listing">
                    <?php
                        // Get Snowboards
                        $args = array(
                            'post_type' => 'libtech_snowboards',
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'libtech_snowboard_categories',
                                    'field' => 'slug',
                                    'terms' => 'snowboards'
                                )
                            )
                        );
                        $counter = 1;
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $postType = $post->post_type;
                            $imageID = get_field('libtech_product_image');
                            if($postType != "libtech_nas" && $postType != "libtech_skateboards"){
                                $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb');
                            }else{
                                $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb-vertical');
                            }

                            if($counter % 4 == 0){
                                $class = "product-item last ";
                            }else{
                                $class = "product-item";
                            }
                            $counter++;

                            // build array of sizes
                            $snowboardSizes = Array();
                            if(get_field('libtech_snowboard_specs')):
                                while(the_repeater_field('libtech_snowboard_specs')):
                                    $snowboardLength = get_sub_field('libtech_snowboard_specs_length');
                                    $snowboardWidth = get_sub_field('libtech_snowboard_specs_width');
                                    // add the proper width abbreviation if not standard
                                    if($snowboardWidth == "Narrow"){
                                        $snowboardLength = $snowboardLength . "N";
                                    }else if($snowboardWidth == "Wide"){
                                        $snowboardLength = $snowboardLength . "W";
                                    }
                                    // add size to array
                                    array_push($snowboardSizes, $snowboardLength);
                                endwhile;
                            endif;
                            // sort sizes
                            array_multisort($snowboardSizes, SORT_ASC);
                            // setup sizes text display
                            $sizes = "";
                            for ($i = 0; $i < count($snowboardSizes); $i++) {
                                $sizes .= $snowboardSizes[$i];
                                if($i < count($snowboardSizes)-1){
                                    $sizes .= ", ";
                                }
                            }
                    ?>

                    <li class="<?php echo $class; ?>">
                        <a href="<? the_permalink(); ?>">
                            <img src="<?php echo $imageFile[0]; ?>" width="<?php echo $imageFile[1]; ?>" height="<?php echo $imageFile[2]; ?>" alt="<?php the_title(); ?> Image" />
                            <h3><?php the_title(); ?></h3>
                            <div class="price">
                                <?php getDisplayPrice( get_field('libtech_product_price_us'), get_field('libtech_product_price_ca'), get_field('libtech_product_on_sale'), get_field('libtech_product_sale_percentage') ); ?>
                            </div>
                            <div class="sizes">
                                <span>Sizes:</span><br /><?php echo $sizes; ?>
                            </div>
                        </a>
                    </li>

                    <?
                        endwhile;
                        wp_reset_query();
                    ?>
                </ul>

                <h1>Splitboards</h1>
                <ul class="product-listing">
                    <?php
                        // Get Snowboards
                        $args = array(
                            'post_type' => 'libtech_snowboards',
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'libtech_snowboard_categories',
                                    'field' => 'slug',
                                    'terms' => 'splitboards'
                                )
                            )
                        );
                        $counter = 1;
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $postType = $post->post_type;
                            $imageID = get_field('libtech_product_image');
                            if($postType != "libtech_nas" && $postType != "libtech_skateboards"){
                                $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb');
                            }else{
                                $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb-vertical');
                            }

                            if($counter % 4 == 0){
                                $class = "product-item last ";
                            }else{
                                $class = "product-item";
                            }
                            $counter++;

                            // build array of sizes
                            $snowboardSizes = Array();
                            if(get_field('libtech_snowboard_specs')):
                                while(the_repeater_field('libtech_snowboard_specs')):
                                    $snowboardLength = get_sub_field('libtech_snowboard_specs_length');
                                    $snowboardWidth = get_sub_field('libtech_snowboard_specs_width');
                                    // add the proper width abbreviation if not standard
                                    if($snowboardWidth == "Narrow"){
                                        $snowboardLength = $snowboardLength . "N";
                                    }else if($snowboardWidth == "Wide"){
                                        $snowboardLength = $snowboardLength . "W";
                                    }
                                    // add size to array
                                    array_push($snowboardSizes, $snowboardLength);
                                endwhile;
                            endif;
                            // sort sizes
                            array_multisort($snowboardSizes, SORT_ASC);
                            // setup sizes text display
                            $sizes = "";
                            for ($i = 0; $i < count($snowboardSizes); $i++) {
                                $sizes .= $snowboardSizes[$i];
                                if($i < count($snowboardSizes)-1){
                                    $sizes .= ", ";
                                }
                            }
                    ?>

                    <li class="<?php echo $class; ?>">
                        <a href="<? the_permalink(); ?>">
                            <img src="<?php echo $imageFile[0]; ?>" width="<?php echo $imageFile[1]; ?>" height="<?php echo $imageFile[2]; ?>" alt="<?php the_title(); ?> Image" />
                            <h3><?php the_title(); ?></h3>
                            <div class="price">
                                <?php getDisplayPrice( get_field('libtech_product_price_us'), get_field('libtech_product_price_ca'), get_field('libtech_product_on_sale'), get_field('libtech_product_sale_percentage') ); ?>
                            </div>
                            <div class="sizes">
                                <span>Sizes:</span><br /><?php echo $sizes; ?>
                            </div>
                        </a>
                    </li>

                    <?
                        endwhile;
                        wp_reset_query();
                    ?>
                </ul>

                <h1>Youth Boards</h1>
                <ul class="product-listing">
                    <?php
                        // Get Snowboards
                        $args = array(
                            'post_type' => 'libtech_snowboards',
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'libtech_snowboard_categories',
                                    'field' => 'slug',
                                    'terms' => 'youth-snowboards'
                                )
                            )
                        );
                        $counter = 1;
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $postType = $post->post_type;
                            $imageID = get_field('libtech_product_image');
                            if($postType != "libtech_nas" && $postType != "libtech_skateboards"){
                                $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb');
                            }else{
                                $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb-vertical');
                            }

                            if($counter % 4 == 0){
                                $class = "product-item last ";
                            }else{
                                $class = "product-item";
                            }
                            $counter++;

                            // build array of sizes
                            $snowboardSizes = Array();
                            if(get_field('libtech_snowboard_specs')):
                                while(the_repeater_field('libtech_snowboard_specs')):
                                    $snowboardLength = get_sub_field('libtech_snowboard_specs_length');
                                    $snowboardWidth = get_sub_field('libtech_snowboard_specs_width');
                                    // add the proper width abbreviation if not standard
                                    if($snowboardWidth == "Narrow"){
                                        $snowboardLength = $snowboardLength . "N";
                                    }else if($snowboardWidth == "Wide"){
                                        $snowboardLength = $snowboardLength . "W";
                                    }
                                    // add size to array
                                    array_push($snowboardSizes, $snowboardLength);
                                endwhile;
                            endif;
                            // sort sizes
                            array_multisort($snowboardSizes, SORT_ASC);
                            // setup sizes text display
                            $sizes = "";
                            for ($i = 0; $i < count($snowboardSizes); $i++) {
                                $sizes .= $snowboardSizes[$i];
                                if($i < count($snowboardSizes)-1){
                                    $sizes .= ", ";
                                }
                            }
                    ?>

                    <li class="<?php echo $class; ?>">
                        <a href="<? the_permalink(); ?>">
                            <img src="<?php echo $imageFile[0]; ?>" width="<?php echo $imageFile[1]; ?>" height="<?php echo $imageFile[2]; ?>" alt="<?php the_title(); ?> Image" />
                            <h3><?php the_title(); ?></h3>
                            <div class="price">
                                <?php getDisplayPrice( get_field('libtech_product_price_us'), get_field('libtech_product_price_ca'), get_field('libtech_product_on_sale'), get_field('libtech_product_sale_percentage') ); ?>
                            </div>
                            <div class="sizes">
                                <span>Sizes:</span><br /><?php echo $sizes; ?>
                            </div>
                        </a>
                    </li>

                    <?
                        endwhile;
                        wp_reset_query();
                    ?>
                </ul>


                <h1>Snowskates</h1>
                <ul class="product-listing">
                    <?php
                        // Get Snowboards
                        $args = array(
                            'post_type' => 'libtech_snowboards',
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'libtech_snowboard_categories',
                                    'field' => 'slug',
                                    'terms' => 'snowskates'
                                )
                            )
                        );
                        $counter = 1;
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $postType = $post->post_type;
                            $imageID = get_field('libtech_product_image');
                            if($postType != "libtech_nas" && $postType != "libtech_skateboards"){
                                $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb');
                            }else{
                                $imageFile = wp_get_attachment_image_src($imageID, 'overview-thumb-vertical');
                            }

                            if($counter % 4 == 0){
                                $class = "product-item last ";
                            }else{
                                $class = "product-item";
                            }
                            $counter++;

                            // build array of sizes
                            $snowboardSizes = Array();
                            if(get_field('libtech_snowboard_specs')):
                                while(the_repeater_field('libtech_snowboard_specs')):
                                    $snowboardLength = get_sub_field('libtech_snowboard_specs_length');
                                    $snowboardWidth = get_sub_field('libtech_snowboard_specs_width');
                                    // add the proper width abbreviation if not standard
                                    if($snowboardWidth == "Narrow"){
                                        $snowboardLength = $snowboardLength . "N";
                                    }else if($snowboardWidth == "Wide"){
                                        $snowboardLength = $snowboardLength . "W";
                                    }
                                    // add size to array
                                    array_push($snowboardSizes, $snowboardLength);
                                endwhile;
                            endif;
                            // sort sizes
                            array_multisort($snowboardSizes, SORT_ASC);
                            // setup sizes text display
                            $sizes = "";
                            for ($i = 0; $i < count($snowboardSizes); $i++) {
                                $sizes .= $snowboardSizes[$i];
                                if($i < count($snowboardSizes)-1){
                                    $sizes .= ", ";
                                }
                            }
                    ?>

                    <li class="<?php echo $class; ?>">
                        <a href="<? the_permalink(); ?>">
                            <img src="<?php echo $imageFile[0]; ?>" width="<?php echo $imageFile[1]; ?>" height="<?php echo $imageFile[2]; ?>" alt="<?php the_title(); ?> Image" />
                            <h3><?php the_title(); ?></h3>
                            <div class="price">
                                <?php getDisplayPrice( get_field('libtech_product_price_us'), get_field('libtech_product_price_ca'), get_field('libtech_product_on_sale'), get_field('libtech_product_sale_percentage') ); ?>
                            </div>
                            <div class="sizes">
                                <span>Sizes:</span><br /><?php echo $sizes; ?>
                            </div>
                        </a>
                    </li>

                    <?
                        endwhile;
                        wp_reset_query();
                    ?>
                </ul>
            </div>
        </section><!-- end product overview -->
<?php get_footer(); ?>