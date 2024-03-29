<?php
/*
Template Name: Products Overview
*/
get_header();
?>
        <?php
        // GET FEATURED PRODUCTS
        $post_objects = get_field('libtech_featured_products');
        if( $post_objects ):
        ?>
        <div class="bg-product-<?php echo $GLOBALS['sport']; ?>-top"></div>
        <section class="featured-product-slider bg-product-<?php echo $GLOBALS['sport']; ?> <?php echo strtolower(get_the_title()); ?>">
            <div class="section-content">
                <ul class="product-listing bxslider">
                    <?php if($post_objects[0]->post_type == 'libtech_snowboards') : ?>
                    <li>
                        <div class="product-image">
                            <a href="/snowboarding/snowboard-builder/"><img src="<?php bloginfo('template_directory'); ?>/_/img/diy-board-builder-640x640.png" width="640" height="640" alt="DIY Snowboard Builder" /></a>
                        </div>
                        <div class="product-copy">
                            <div class="title h2">DIY Board Builder</div>
                            <p class="slogan h4">Build your dream snowboard!</p>
                            <div class="description">
                                <p>This dream snowboard project is probably going to cause us some headaches, but you are going to be stoked! Lib Tech's DIY Board Builder offers you the opportunity to order a custom, one of a kind, dream snowboard that will be guided through our experiMENTAL Division’s prototyping process and handcrafted to your specifications in the USA.</p>
                            </div>
                            <div class="price"></div>
                            <a href="/snowboarding/snowboard-builder/" class="buy build h4">Build Your Own!</a>
                        </div>
                    </li>
                    <?php
                    endif;
                    // get each related product
                    foreach( $post_objects as $post_object):
                        $postType = $post_object->post_type;
                        // get variable values
                        $imageID = get_field('libtech_product_image', $post_object->ID);
                        // check which image size to use based on post type
                        if($postType == "libtech_snowboards" || $postType == "libtech_nas" || $postType == "libtech_skateboards") {
                            $productImage = wp_get_attachment_image_src($imageID, 'square-large');
                        } else {
                            $productImage = wp_get_attachment_image_src($imageID, 'square-medium');
                        }
                        $productLink = get_permalink($post_object->ID);
                        $productTitle = get_the_title($post_object->ID);
                        $productContent = apply_filters('the_content', $post_object->post_content);
                        $productTag = get_field('libtech_product_slogan', $post_object->ID);
                        $productPrice = getPrice( get_field('libtech_product_price_us', $post_object->ID), get_field('libtech_product_price_ca', $post_object->ID), get_field('libtech_product_on_sale', $post_object->ID), get_field('libtech_product_sale_percentage', $post_object->ID) );
                    ?>
                    <li>
                        <div class="product-image">
                            <a href="<?php echo $productLink; ?>"><img src="<?php echo $productImage[0]; ?>" width="<?php echo $productImage[1]; ?>" height="<?php echo $productImage[2]; ?>" alt="<?php echo $productTitle; ?> Image" /></a>
                        </div>
                        <div class="product-copy">
                            <div class="title h2"><?php echo $productTitle; ?></div>
                            <?php if($postType == "libtech_snowboards"): ?><div class="contour h3"><?php the_field('libtech_snowboard_contour', $post_object->ID); ?></div><?php endif; ?>
                            <p class="slogan h4"><?php echo $productTag; ?></p>
                            <div class="description">
                                <?php echo $productContent; ?>
                            </div>
                            <div class="price"><?php echo $productPrice; ?></div>
                            <a href="<?php echo $productLink; ?>" class="buy h4">Buy Now!</a>
                        </div>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="clearfix"></div>
        </section><!-- END .product-slider -->
        <?php endif; ?>
        
        <?php
        $productsArray = Array();
        // find product post type to query
        switch (get_the_title()) {
            case "Snowboards":
                $postType = "libtech_snowboards";
                $imageSize = "square-large";
                break;
            case "Skis":
                $postType = "libtech_nas";
                $imageSize = "square-large";
                break;
            case "Surfboards":
                $postType = "libtech_surfboards";
                $imageSize = "square-medium";
                break;
            case "Skateboards":
                $postType = "libtech_skateboards";
                $imageSize = "square-large";
                break;
            case "Outerwear":
                $postType = "libtech_outerwear";
                $imageSize = "square-medium";
                break;
            case "Apparel":
                $postType = "libtech_apparel";
                $imageSize = "square-medium";
                break;
            case "Accessories":
                $postType = "libtech_accessories";
                $imageSize = "square-medium";
                break;
            case "Luggage":
                $postType = "libtech_luggage";
                $imageSize = "square-medium";
                break;
            case "Bindings":
                $postType = "libtech_bindings";
                $imageSize = "square-medium";
                break;
            default:
                $postType = "libtech_snowboards";
                $imageSize = "square-large";
        }
        // Get Products
        $args = array(
            'post_type' => $postType,
            'posts_per_page' => -1,
            'orderby' => 'menu_order',
            'order' => 'ASC'
        );
        $loop = new WP_Query( $args );
        while ( $loop->have_posts() ) : $loop->the_post();
            $productArray = Array();
            $filterList = ""; // start list of items to filter by
            $productArray['postType'] = $post->post_type;
            $productArray['title'] = get_the_title();
            $productArray['link'] = get_permalink($post->ID);
            $imageID = get_field('libtech_product_image');
            $productArray['imageFile'] = wp_get_attachment_image_src($imageID, $imageSize);
            $productArray['available'] = "No";
            $productArray['price'] = getPrice( get_field('libtech_product_price_us'), get_field('libtech_product_price_ca'), get_field('libtech_product_on_sale'), get_field('libtech_product_sale_percentage') );

            switch ($productArray['postType']) {
                case "libtech_snowboards":
                    // BEGIN SETTING UP SNOWBOARD FILTER CLASSES
                    // check snowboard product availability
                    if(get_field('libtech_snowboard_options')):
                        while(the_repeater_field('libtech_snowboard_options')):
                            $optionVariations = get_sub_field('libtech_snowboard_options_variations');
                            // loop through variations
                            for ($i = 0; $i < count($optionVariations); $i++) {
                                if ($GLOBALS['language'] == "ca") {
                                    $variationAvailable = $optionVariations[$i]['libtech_snowboard_options_variations_availability_ca'];
                                } else {
                                    $variationAvailable = $optionVariations[$i]['libtech_snowboard_options_variations_availability_us'];
                                }
                                // set overall availability
                                if($variationAvailable == "Yes"){
                                    $productArray['available'] = "Yes";
                                }
                            }
                        endwhile;
                    endif;
                    // build array of snowboard sizes
                    $productSize = Array();
                    $productWidth = Array();
                    if(get_field('libtech_snowboard_specs')):
                        while(the_repeater_field('libtech_snowboard_specs')):
                            $snowboardLength = str_replace('&quot;', '_', get_sub_field('libtech_snowboard_specs_length'));
                            $snowboardWidth = get_sub_field('libtech_snowboard_specs_width');
                            // add size & width to arrays
                            array_push($productSize, $snowboardLength);
                            array_push($productWidth, $snowboardWidth);
                            // add length and width to filter list
                            $filterList .= " " . $snowboardLength;
                            $filterList .= " " . $snowboardWidth;
                        endwhile;
                    endif;
                    // sort sizes
                    array_multisort($productSize, SORT_ASC);
                    $productArray['size'] = $productSize;
                    $productArray['width'] = $productWidth;
                    // build filter list of snowboard categories
                    $productCategories = Array();
                    $categories = get_the_terms( $post->ID , 'libtech_snowboard_categories' );
                    foreach ( $categories as $category ) {
                        array_push($productCategories, $category->slug);
                        $filterList .= " " . $category->slug;
                    }
                    $productArray['categories'] = $productCategories;
                    // add contour to filter
                    $filterList .= " " . str_replace(array(' ', '!'), '_', get_field('libtech_snowboard_contour'));
                    $productArray['contour'] = get_field('libtech_snowboard_contour');
                    break;
                case "libtech_bindings":
                    if(get_field('libtech_binding_options')):
                        while(the_repeater_field('libtech_binding_options')):
                            $optionVariations = get_sub_field('libtech_binding_options_variations');
                            // loop through variations
                            for ($i = 0; $i < count($optionVariations); $i++) {
                                if($GLOBALS['language'] == "ca"){
                                    $variationAvailable = $optionVariations[$i]['libtech_binding_options_variations_availability_ca'];
                                } else {
                                    $variationAvailable = $optionVariations[$i]['libtech_binding_options_variations_availability_us'];
                                }
                                // set overall availability
                                if($variationAvailable == "Yes"){
                                    $productArray['available'] = "Yes";
                                }
                            }
                        endwhile;
                    endif;
                    break;
                case "libtech_nas":
                    // get nas availability
                    if(get_field('libtech_nas_variations')):
                        while(the_repeater_field('libtech_nas_variations')):
                            if ($GLOBALS['language'] == "ca") {
                                $variationAvailable = get_sub_field('libtech_nas_variations_availability_ca');
                            } else {
                                $variationAvailable = get_sub_field('libtech_nas_variations_availability_us');
                            }
                            // set overall availability
                            if($variationAvailable == "Yes"){
                                $productArray['available'] = "Yes";
                            }
                        endwhile;
                    endif;
                    // build array of nas sizes & widths
                    $productSize = Array();
                    $productWidth = Array();
                    if(get_field('libtech_nas_specs')):
                        while(the_repeater_field('libtech_nas_specs')):
                            $length = get_sub_field('libtech_nas_specs_length');
                            $width = get_sub_field('libtech_nas_specs_waist_width');
                            // Narrow (84mm - 97mm)
                            // Normal (98mm - 112mm)
                            // Wide (113mm - 118mm)
                            if($width < 98) {
                                $width = "Narrow";
                            } else if ($width < 113) {
                                $width = "Standard";
                            } else {
                                $width = "Wide";
                            }
                            // add size & width to arrays
                            array_push($productSize, $length);
                            array_push($productWidth, $width);
                            // add length and width to filter list
                            $filterList .= " " . $length;
                            $filterList .= " " . $width;
                        endwhile;
                    endif;
                    // sort sizes
                    array_multisort($productSize, SORT_ASC);
                    $productArray['size'] = $productSize;
                    break;
                case "libtech_surfboards":
                    // build array of surfboard lengths
                    $productSize = Array();
                    if(get_field('libtech_surfboard_specs')):
                        while(the_repeater_field('libtech_surfboard_specs')):
                            $surfboardLength = get_sub_field('libtech_surfboard_specs_length');
                            //$surfboardLength = floor($surfboardLength/12) . "’" . ($surfboardLength - (floor($surfboardLength/12)*12)) . "”";                        
                            // add wodth to array
                            array_push($productSize, $surfboardLength);
                            // add width to filter list
                            $filterList .= " " . $surfboardLength;
                        endwhile;
                    endif;
                    // sort sizes
                    array_multisort($productSize, SORT_ASC);
                    $productArray['size'] = $productSize;
                    break;
                case "libtech_skateboards":
                    // build array of skateboard widths
                    $productWidth = Array();
                    if(get_field('libtech_skateboard_options')):
                        while(the_repeater_field('libtech_skateboard_options')):
                            // get variations
                            $optionVariations = get_sub_field('libtech_skateboard_options_variations');
                            // loop through variations
                            for ($i = 0; $i < count($optionVariations); $i++) {
                                $variationWidth = str_replace('.', '_', $optionVariations[$i]['libtech_skateboard_options_variations_width']);
                                // get skateboard availability
                                if ($GLOBALS['language'] == "ca") {
                                    $variationAvailable = $optionVariations[$i]['libtech_skateboard_options_variations_availability_ca'];
                                } else {
                                    $variationAvailable = $optionVariations[$i]['libtech_skateboard_options_variations_availability_us'];
                                }
                                // set overall availability
                                if($variationAvailable == "Yes"){
                                    $productArray['available'] = "Yes";
                                }
                                // add wodth to array
                                array_push($productWidth, $variationWidth);
                                // add width to filter list
                                $filterList .= " " . $variationWidth;
                            }
                        endwhile;
                    endif;
                    // sort sizes
                    array_multisort($productWidth, SORT_ASC);
                    $productArray['width'] = $productWidth;
                    // get categories for skateboards
                    $terms = get_the_terms( $post->ID, 'libtech_skateboard_categories' );
                    if( $terms && !is_wp_error( $terms ) ) {
                        foreach( $terms as $term ) {
                            $filterList .= " " . $term->slug;
                        }
                    }
                    break;
                case "libtech_outerwear":
                    if(get_field('libtech_outerwear_variations')):
                        while(the_repeater_field('libtech_outerwear_variations')):
                            $variationSize = get_sub_field('libtech_outerwear_variations_size');
                            // get outerwear availability
                            if ($GLOBALS['language'] == "ca") {
                                $variationAvailable = get_sub_field('libtech_outerwear_variations_availability_ca');
                            } else {
                                $variationAvailable = get_sub_field('libtech_outerwear_variations_availability_us');
                            }
                            // set overall availability
                            if($variationAvailable == "Yes"){
                                $productArray['available'] = "Yes";
                            }
                            // add size to filter list
                            $filterList .= " " . $variationSize;
                        endwhile;
                    endif;
                    // get categories for outerwear
                    $terms = get_the_terms( $post->ID, 'libtech_outerwear_categories' );
                    if( $terms && !is_wp_error( $terms ) ) {
                        foreach( $terms as $term ) {
                            $filterList .= " " . $term->slug;
                        }
                    }
                    break;
                case "libtech_apparel":
                    if(get_field('libtech_apparel_variations')):
                        while(the_repeater_field('libtech_apparel_variations')):
                            $variationSize = get_sub_field('libtech_apparel_variations_size');
                            // get outerwear availability
                            if ($GLOBALS['language'] == "ca") {
                                $variationAvailable = get_sub_field('libtech_apparel_variations_availability_ca');
                            } else {
                                $variationAvailable = get_sub_field('libtech_apparel_variations_availability_us');
                            }
                            // set overall availability
                            if($variationAvailable == "Yes"){
                                $productArray['available'] = "Yes";
                            }
                            // add size to filter list
                            $filterList .= " " . $variationSize;
                        endwhile;
                    endif;
                    // get categories for outerwear
                    $terms = get_the_terms( $post->ID, 'libtech_apparel_categories' );
                    if( $terms && !is_wp_error( $terms ) ) {
                        foreach( $terms as $term ) {
                            $filterList .= " " . $term->slug;
                        }
                    }
                    break;
                case "libtech_accessories":
                    if(get_field('libtech_accessories_variations')):
                        while(the_repeater_field('libtech_accessories_variations')):
                            // get outerwear availability
                            if ($GLOBALS['language'] == "ca") {
                                $variationAvailable = get_sub_field('libtech_accessories_variations_availability_ca');
                            } else {
                                $variationAvailable = get_sub_field('libtech_accessories_variations_availability_us');
                            }
                            // set overall availability
                            if($variationAvailable == "Yes"){
                                $productArray['available'] = "Yes";
                            }
                        endwhile;
                    endif;
                    // get categories for outerwear
                    $terms = get_the_terms( $post->ID, 'libtech_accessories_categories' );
                    if( $terms && !is_wp_error( $terms ) ) {
                        foreach( $terms as $term ) {
                            $filterList .= " " . $term->slug;
                        }
                    }
                    break;
                case "libtech_luggage":
                    if(get_field('libtech_luggage_variations')):
                        while(the_repeater_field('libtech_luggage_variations')):
                            // get outerwear availability
                            if ($GLOBALS['language'] == "ca") {
                                $variationAvailable = get_sub_field('libtech_luggage_variations_availability_ca');
                            } else {
                                $variationAvailable = get_sub_field('libtech_luggage_variations_availability_us');
                            }
                            // set overall availability
                            if($variationAvailable == "Yes"){
                                $productArray['available'] = "Yes";
                            }
                        endwhile;
                    endif;
                    // get categories for outerwear
                    $terms = get_the_terms( $post->ID, 'libtech_luggage_categories' );
                    if( $terms && !is_wp_error( $terms ) ) {
                        foreach( $terms as $term ) {
                            $filterList .= " " . $term->slug;
                        }
                    }
                    break;
            }
            // if product is available set filter list class
            if ($productArray['available'] == "Yes") {
                $filterList .= " available";
            }
            $productArray['filterList'] = $filterList;
            // add single product to products array
            array_push($productsArray, $productArray);
        endwhile;
        wp_reset_query();
        ?>

        <div class="bg3-top"></div>
        <section class="product-overview bg3">
            <div class="section-content">
                <h1><?php the_title(); ?></h1>
                <ul class="product-filtering <?php echo strtolower(get_the_title()); ?>">
                    <li class="details">
                        <p>Product Filter</p>
                        <p>Show Products By</p>
                    </li>
                    <?php if (get_the_title() == "Snowboards"): ?>
                    <li class="filters ripper">
                        <p class="select-title">Ripper</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".mens">Mens</li>
                            <li data-filter=".womens">Womens</li>
                            <li data-filter=".youth">Youth</li>
                        </ul>
                    </li>
                    <li class="filters categories">
                        <p class="select-title">Categories</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".snowboards">Snowboards</li>
                            <li data-filter=".splitboards">Splitboards</li>
                            <li data-filter=".snowskates">Snowskates</li>
                            <li data-filter=".fundamentals">fundaMENTALS</li>
                            <li data-filter=".travis-rice-collection">T. Rice Collection</li>
                            <li data-filter=".early-release">Early Release</li>
                            <li data-filter=".libited">Libited</li>
                        </ul>
                    </li>
                    <li class="filters contours">
                        <p class="select-title">Contours</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".BTX">BTX</li>
                            <li data-filter=".EC2_BTX">EC2 BTX</li>
                            <li data-filter=".C2_BTX">C2 BTX</li>
                            <li data-filter=".XC2_BTX">XC2 BTX</li>
                            <li data-filter=".C3_BTX">C3 BTX</li>
                            <li data-filter=".C1_BTX">C1 BTX</li>
                            <li data-filter="._BTX_">!BTX!</li>
                        </ul>
                    </li>
                    <li class="filters size">
                        <p class="select-title">Size</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <?php
                            $sizeArray = Array();
                            foreach ($productsArray as $product):
                                foreach ($product['size'] as $size):
                                    if (in_array($size, $sizeArray) == false) {
                                        array_push($sizeArray, $size);
                                    }
                                endforeach;
                            endforeach;
                            array_multisort($sizeArray, SORT_ASC);
                            foreach ($sizeArray as $size):
                            ?>
                            <li data-filter=".<?php echo $size; ?>"><?php echo str_replace('_', '&quot;', $size); ?></li>
                            <?php
                            endforeach;
                            ?>
                        </ul>
                    </li>
                    <li class="filters width">
                        <p class="select-title">Width</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".Narrow">Narrow</li>
                            <li data-filter=".Standard">Standard</li>
                            <li data-filter=".Wide">Wide</li>
                        </ul>
                    </li>
                    <li class="filters pricing">
                        <p class="select-title">Pricing</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-sort="price" data-sort-asc="true">Low - High</li>
                            <li data-sort="price" data-sort-asc="false">High - Low</li>
                            <li data-filter=".available">Availabile</li>
                        </ul>
                    </li>
                    <?php elseif (get_the_title() == "Skis"): ?>
                    <li class="filters nas-size">
                        <p class="select-title">Size</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <?php
                            $sizeArray = Array();
                            foreach ($productsArray as $product):
                                foreach ($product['size'] as $size):
                                    if (in_array($size, $sizeArray) == false) {
                                        array_push($sizeArray, $size);
                                    }
                                endforeach;
                            endforeach;
                            array_multisort($sizeArray, SORT_ASC);
                            foreach ($sizeArray as $size):
                            ?>
                            <li data-filter=".<?php echo $size; ?>"><?php echo str_replace('_', '&quot;', $size); ?></li>
                            <?php
                            endforeach;
                            ?>
                        </ul>
                    </li>
                    <li class="filters nas-width">
                        <p class="select-title">Waist Width</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".Narrow">Narrow</li>
                            <li data-filter=".Standard">Standard</li>
                            <li data-filter=".Wide">Wide</li>
                        </ul>
                    </li>
                    <li class="filters pricing">
                        <p class="select-title">Pricing</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-sort="price" data-sort-asc="true">Low - High</li>
                            <li data-sort="price" data-sort-asc="false">High - Low</li>
                            <li data-filter=".available">Availabile</li>
                        </ul>
                    </li>
                    <?php elseif (get_the_title() == "Surfboards"): ?>
                    <li class="filters surf-size">
                        <p class="select-title">Size</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <?php
                            $sizeArray = Array();
                            foreach ($productsArray as $product):
                                foreach ($product['size'] as $size):
                                    if (in_array($size, $sizeArray) == false) {
                                        array_push($sizeArray, $size);
                                    }
                                endforeach;
                            endforeach;
                            array_multisort($sizeArray, SORT_ASC);
                            foreach ($sizeArray as $size):
                                $length = floor($size/12) . "’" . ($size - (floor($size/12)*12)) . "”"; 
                            ?>
                            <li data-filter=".<?php echo $size; ?>"><?php echo $length; ?></li>
                            <?php
                            endforeach;
                            ?>
                        </ul>
                    </li>
                    <?php elseif (get_the_title() == "Skateboards"): ?>
                    <li class="filters skate-width">
                        <p class="select-title">Width</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <?php
                            $widthArray = Array();
                            foreach ($productsArray as $product):
                                foreach ($product['width'] as $width):
                                    if (in_array($width, $widthArray) == false) {
                                        array_push($widthArray, $width);
                                    }
                                endforeach;
                            endforeach;
                            array_multisort($widthArray, SORT_ASC);
                            foreach ($widthArray as $width):
                            ?>
                            <li data-filter=".<?php echo $width; ?>"><?php echo str_replace('_', '.', $width); ?></li>
                            <?php
                            endforeach;
                            ?>
                        </ul>
                    </li>
                    <li class="filters skate-categories">
                        <p class="select-title">Categories</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".hesho-disposable-standards">Hesho</li>
                            <li data-filter=".maple-bottoms">Maple Bottoms</li>
                            <li data-filter=".semi-slicks">Semi Slicks</li>
                            <li data-filter=".completes">Completes</li>
                        </ul>
                    </li>
                    <li class="filters pricing">
                        <p class="select-title">Pricing</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-sort="price" data-sort-asc="true">Low - High</li>
                            <li data-sort="price" data-sort-asc="false">High - Low</li>
                            <li data-filter=".available">Availabile</li>
                        </ul>
                    </li>
                    <?php elseif (get_the_title() == "Outerwear"): ?>
                    <li class="filters outerwear-size">
                        <p class="select-title">Size</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".S">Small</li>
                            <li data-filter=".M">Medium</li>
                            <li data-filter=".L">Large</li>
                            <li data-filter=".XL">X Large</li>
                            <li data-filter=".XXL">XX Large</li>
                        </ul>
                    </li>
                    <li class="filters outerwear-categories">
                        <p class="select-title">Categories</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".jackets">Jackets</li>
                            <li data-filter=".pants">Pants</li>
                            <li data-filter=".layers">Layers</li>
                        </ul>
                    </li>
                    <li class="filters pricing">
                        <p class="select-title">Pricing</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-sort="price" data-sort-asc="true">Low - High</li>
                            <li data-sort="price" data-sort-asc="false">High - Low</li>
                            <li data-filter=".available">Availabile</li>
                        </ul>
                    </li>
                    <?php elseif (get_the_title() == "Apparel"): ?>
                    <li class="filters apparel-size">
                        <p class="select-title">Size</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".S">Small</li>
                            <li data-filter=".M">Medium</li>
                            <li data-filter=".L">Large</li>
                            <li data-filter=".XL">X Large</li>
                            <li data-filter=".XXL">XX Large</li>
                        </ul>
                    </li>
                    <li class="filters apparel-sports">
                        <p class="select-title">Board Sports</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".apparel-snow">Snow</li>
                            <li data-filter=".apparel-ski">Ski</li>
                            <li data-filter=".apparel-surf">Surf</li>
                            <li data-filter=".apparel-skate">Skate</li>
                        </ul>
                    </li>
                    <li class="filters apparel-categories">
                        <p class="select-title">Categories</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".sweatshirts">Sweatshirts</li>
                            <li data-filter=".t-shirts">T-Shirts</li>
                            <li data-filter=".hats">Hats</li>
                            <li data-filter=".beanies">Beanies</li>
                            <li data-filter=".socks">Socks</li>
                        </ul>
                    </li>
                    <li class="filters pricing">
                        <p class="select-title">Pricing</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-sort="price" data-sort-asc="true">Low - High</li>
                            <li data-sort="price" data-sort-asc="false">High - Low</li>
                            <li data-filter=".available">Availabile</li>
                        </ul>
                    </li>
                    <?php elseif (get_the_title() == "Accessories"): ?>
                    <li class="filters accessory-categories">
                        <p class="select-title">Categories</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".goggles">Goggles</li>
                            <li data-filter=".helmets">Helmets</li>
                            <li data-filter=".wax-tuning-tools">Wax, Tuning and Tools</li>
                            <li data-filter=".stickers">Stickers</li>
                        </ul>
                    </li>
                    <li class="filters accessories-pricing">
                        <p class="select-title">Pricing</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-sort="price" data-sort-asc="true">Low - High</li>
                            <li data-sort="price" data-sort-asc="false">High - Low</li>
                            <li data-filter=".available">Availabile</li>
                        </ul>
                    </li>
                    <?php elseif (get_the_title() == "Luggage"): ?>
                    <li class="filters luggage-categories">
                        <p class="select-title">Board Sports</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-filter=".luggage-snow">Snow</li>
                            <li data-filter=".luggage-ski">Ski</li>
                            <li data-filter=".luggage-surf">Surf</li>
                            <li data-filter=".luggage-skate">Skate</li>
                        </ul>
                    </li>
                    <li class="filters luggage-pricing">
                        <p class="select-title">Pricing</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-sort="price" data-sort-asc="true">Low - High</li>
                            <li data-sort="price" data-sort-asc="false">High - Low</li>
                            <li data-filter=".available">Availabile</li>
                        </ul>
                    </li>
                    <?php elseif (get_the_title() == "Bindings"): ?>
                    <li class="filters bindings-pricing">
                        <p class="select-title">Pricing</p>
                        <p class="selected-items">Select</p>
                        <ul>
                            <li data-sort="price" data-sort-asc="true">Low - High</li>
                            <li data-sort="price" data-sort-asc="false">High - Low</li>
                            <li data-filter=".available">Availabile</li>
                        </ul>
                    </li>
                    <?php endif; ?>
                </ul>
                <div class="clearfix"></div>
                <ul class="product-listing <?php echo strtolower(get_the_title()); ?>">
                    <?php
                    foreach ($productsArray as $product):
                    	if ($GLOBALS['language'] != "us" &&  $product['title'] == "superBANANA") :
                    		// do nothing, hide board from CA and INT
                    	else:
                    ?>
                    <li class="product-item<?php echo $product['filterList']; ?>">
                        <a href="<? echo $product['link']; ?>">
                            <img src="<?php echo $product['imageFile'][0]; ?>" width="<?php echo $product['imageFile'][1]; ?>" height="<?php echo $product['imageFile'][2]; ?>" alt="<?php echo $product['title']; ?> Image" />
                            <h5><?php echo $product['title']; ?></h5>
                            <div class="price"><?php echo $product['price']; ?></div>
                        </a>
                    </li>
                    <?php
                    	endif;
                    endforeach;
                    ?>
                </ul>
            </div>
            <div class="clearfix"></div>
        </section><!-- end product overview -->
<?php get_footer(); ?>