<?php
if ( function_exists( 'add_theme_support' ) ) { 
    // Add RSS links to <head> section
    add_theme_support( 'automatic-feed-links' );
    // add featured image/thumbnail support
    add_theme_support('post-thumbnails');
    // post formats for blog entries
    add_theme_support( 'post-formats', array('gallery', 'link', 'image', 'quote', 'audio', 'chat', 'video')); // Add 3.1 post format theme support.
}
if ( function_exists( 'add_image_size' ) ) {
    // additional image sizes
    add_image_size('square-medium', 300, 300, true);
    add_image_size('square-large', 640, 640, true);
    add_image_size('square-xlarge', 800, 800, true);
    add_image_size('media-email', 560, 300, true);
    add_image_size('soft-thumbnail', 100, 100, false);
    add_image_size('soft-xlarge', 800, 800, false);
}
// update auto embed sizes for videos
function new_embed_size() {
    return array( 'width' => 640, 'height' => 600 );
}
add_filter( 'embed_defaults', 'new_embed_size' );
// Clean up the <head>
function removeHeadLinks() {
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    // remove RSS
    //remove_action( 'wp_head', 'feed_links' );
    // remove prev / next links
    //remove_action( 'wp_head', 'wp_shortlink_wp_head' );
	//remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head' );
}
add_action('init', 'removeHeadLinks');
remove_action('wp_head', 'wp_generator');
// allow script & iframe tag within posts
function allow_post_tags( $allowedposttags ){
    $allowedposttags['script'] = array(
        'type' => true,
        'src' => true,
        'height' => true,
        'width' => true,
    );
    $allowedposttags['iframe'] = array(
        'src' => true,
        'width' => true,
        'height' => true,
        'class' => true,
        'frameborder' => true,
        'webkitAllowFullScreen' => true,
        'mozallowfullscreen' => true,
        'allowFullScreen' => true
    );
    return $allowedposttags;
}
add_filter('wp_kses_allowed_html','allow_post_tags', 1);
// register menus
register_nav_menus( array(
    'main_menu' => 'Main Menu',
    'sub_menu' => 'Sub Menu',
    'snow_products' => 'Snowboard Products',
    'snow_sub' => 'Snowboard Sub',
    'ski_products' => 'Ski Products',
    'ski_sub' => 'Ski Sub',
    'surf_products' => 'Surf Products',
    'surf_sub' => 'Surf Sub',
    'skate_products' => 'Skate Products',
    'skate_sub' => 'Skate Sub',
    'faq_menu' => 'FAQ Menu'
) );
// register a sidebar for blog
if (function_exists('register_sidebar')) {
    register_sidebar(array(
        'name' => __('Sidebar Widgets','libtech' ),
        'id'   => 'sidebar-widgets',
        'description'   => __( 'These are widgets for the sidebar.','libtech' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2>',
        'after_title'   => '</h2>'
    ));
}
// customize what is searchable
function filter_search($query) {
    if ($query->is_search) {
        $query->set('post_type', array('post')); // set it to blog posts only
    };
    return $query;
};
if(!is_admin()){
    add_filter('pre_get_posts', 'filter_search');
}
// Check if a page is in a family tree
function is_tree($pid) {
    // $pid = The ID of the ancestor page
    global $post; // load details about this page
    $anc = get_post_ancestors( $post->ID );
    foreach($anc as $ancestor) {
        if(is_page() && $ancestor == $pid) {
            return true;
        }
    }
    if(is_page() && (is_page($pid)))
        return true; // we're at the page or at a sub page
    else
        return false; // we're elsewhere
};
/**
 * Tests if any of a post's assigned categories are descendants of target categories
 *
 * @param int|array $cats The target categories. Integer ID or array of integer IDs
 * @param int|object $_post The post. Omit to test the current post in the Loop or main query
 * @return bool True if at least 1 of the post's categories is a descendant of any of the target categories
 * @see get_term_by() You can get a category by name or slug, then pass ID to this function
 * @uses get_term_children() Passes $cats
 * @uses in_category() Passes $_post (can be empty)
 * @version 2.7
 * @link http://codex.wordpress.org/Function_Reference/in_category#Testing_if_a_post_is_in_a_descendant_category
 */
if ( ! function_exists( 'post_is_in_descendant_category' ) ) {
    function post_is_in_descendant_category( $cats, $_post = null ) {
        foreach ( (array) $cats as $cat ) {
            // get_term_children() accepts integer ID only
            $descendants = get_term_children( (int) $cat, 'category' );
            if ( $descendants && in_category( $descendants, $_post ) )
                return true;
        }
        return false;
    }
}
// get the featured image of a post in a specified size, if no featured image set grab 1st image in post, if no image return default
function get_post_image($imageSize = "thumbnail", $imageName = "") {
    global $post;
    if ($imageName == "") {
        // just getting default thumbnail for post
        if ( has_post_thumbnail() ) {
            $image = wp_get_attachment_image_src( get_post_thumbnail_id(get_the_ID()), $imageSize);
        }else{
            $files = get_children('post_parent='.get_the_ID().'&post_type=attachment&post_mime_type=image');
            if($files){
                $keys = array_reverse(array_keys($files));
                $j=0;
                $num = $keys[$j];
                $image = wp_get_attachment_image_src($num, $imageSize, false);
            }else{
                // if no image is found use default image
                $image = array(get_bloginfo('template_url')."/_/img/blog-stock-image.png",300,300);
            }
        }
    } else {
        // getting a specific image for the post
        $image = get_post_meta($post->ID, $imageName, true);
        $image = wp_get_attachment_image_src($image, $imageSize, false);
    }
    return $image;
}

// get category slug from ID
function get_cat_slug($cat_id) {
    $cat_id = (int) $cat_id;
    $category = get_category($cat_id);
    return $category->slug;
}

// EXCERPT LENGTH CONTROLLERS
// Puts link in excerpts more tag
function new_excerpt_more($more) {
    global $post;
    //return '... <a class="moretag" href="'. get_permalink($post->ID) . '">Continue Reading</a>';
    return '...';
}
add_filter('excerpt_more', 'new_excerpt_more');
// default excerpt length
function new_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'new_excerpt_length');
// custom excerpt length for home page
function libtech_excerptlength_home($length) {
    return 20;
}
// custom excerpt length for home page
function libtech_excerptlength_blog($length) {
    return 16;
}
function libtech_excerpt($length_callback='libtech_excerptlength_home') {
    global $post;
    add_filter('excerpt_length', $length_callback);
    $output = get_the_excerpt();
    $output = apply_filters('wptexturize', $output);
    $output = apply_filters('convert_chars', $output);
    echo $output;
}
// removes auto paragraph wrapper
remove_filter('the_excerpt', 'wpautop');

// GET THE REGION CODE BASED ON A COOKIE
function getRegionCode () {
    if (isset($_COOKIE["libtech_region"])){
        if($_COOKIE["libtech_region"] == "ca"){
            $GLOBALS['language'] = "ca";
        } else if($_COOKIE["libtech_region"] == "int"){
            $GLOBALS['language'] = "int";
        } else{
            $GLOBALS['language'] = "us";
        }
    }else{
        $GLOBALS['language'] = "us";
    }
    return $GLOBALS['language'];
}

// GET PRICE DISPLAY
function getPrice ($usPrice, $caPrice, $sale, $salePercent) {
    $price = "";
    if($GLOBALS['language'] == "ca"){
        if ($sale == "Yes") {
            $price = '<p class="ca-price strike"><span>$' . $caPrice . '</span> CAD</p><p class="ca-price"><span>$' . round($caPrice * ((100 - $salePercent) / 100), 2) . '</span> CAD (' . $salePercent . '% off)</p>';
        } else {
            $price = '<p class="ca-price"><span>$' . $caPrice . '</span> CAD</p>';
        }
    } else {
        if ($sale == "Yes") {
            $price = '<p class="us-price strike"><span>$' . $usPrice . '</span> USD</p><p class="us-price"><span>$' . round($usPrice * ((100 - $salePercent) / 100), 2) . '</span> USD (' . $salePercent . '% off)</p>';
        } else {
            $price = '<p class="us-price"><span>$' . $usPrice . '</span> USD</p>';
        }
    }
    return $price;
}

// GET RELATED PRODUCTS
function getRelatedProducts () {
    // display additional products
    $post_objects = get_field('libtech_product_associated');
    if( $post_objects ):
        echo "<div class=\"product-replated-top bg-product-" . $GLOBALS['sport'] . "-top\"></div><section class=\"product-related bg-product-" . $GLOBALS['sport'] . "\">\n<div class=\"section-content\">\n";
        $relatedProducts = Array();
        // get each related product
        foreach( $post_objects as $post_object):
            $postType = $post_object->post_type;
            // get variable values
            $imageID = get_field('libtech_product_image', $post_object->ID);
            // check which image size to use based on post type
            $relatedImage = wp_get_attachment_image_src($imageID, 'square-medium');
            $relatedLink = get_permalink($post_object->ID);
            $relatedTitle = get_the_title($post_object->ID);
            // get price
            $relatedPrice = getPrice(get_field('libtech_product_price_us', $post_object->ID), get_field('libtech_product_price_ca', $post_object->ID), get_field('libtech_product_on_sale', $post_object->ID), get_field('libtech_product_sale_percentage', $post_object->ID));
            // add to related product array
            array_push($relatedProducts, Array($relatedTitle, $relatedLink, $relatedImage, $relatedPrice));
        endforeach;
        // randomly sort related products array
        shuffle($relatedProducts);
        // render out related products
        echo "<h2>But wait, there's more</h2>\n<ul>\n";
        // loop through products
        for($i = 0; $i < count($relatedProducts); ++$i) {
            if($i == 6){
                break;
            }
            echo '<li><a href="'. $relatedProducts[$i][1] .'"><img src="'.$relatedProducts[$i][2][0].'" width="'.$relatedProducts[$i][2][1].'" height="'.$relatedProducts[$i][2][2].'" /><div class="related-title h4">' . $relatedProducts[$i][0] . '</div></a></li>';
        }
        echo "</ul>\n<div class=\"clearfix\"></div></div>\n</section>\n";
    endif;
}

// Navigation - update coming from twentythirteen
function post_navigation() {
    //echo '<div class="navigation">';
    //echo '  <div class="next-posts">'.get_next_posts_link('&laquo; Older Entries').'</div>';
    //echo '  <div class="prev-posts">'.get_previous_posts_link('Newer Entries &raquo;').'</div>';
    //echo '</div>';
    global $wp_query;
    if ( $wp_query->max_num_pages > 1 ) {
        echo '<div class="pagination">';
        $big = 999999999; // need an unlikely integer
        echo paginate_links( array(
            'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
            'format' => '?paged=%#%',
            'current' => max( 1, get_query_var('paged') ),
            'total' => $wp_query->max_num_pages,
            'prev_text'    => __('« Prev'),
            'next_text'    => __('Next »')
        ) );
        echo '</div>';
    }
}

// function to determine the proper size to display for bindings
function bindingSizeLookup ($sizeString, $verbose = true) {
    $returnString = "";
    switch ($sizeString) {
        case "S/M":
            if ($verbose) {
                $returnString = "S/M (US M 5-9), (MP 23-27)";
            } else {
                $returnString = "S/M";
            }
            break;
        case "M/L":
            if ($verbose) {
                $returnString = "M/L (US M 9-14), (MP 27-32)";
            } else {
                $returnString = "M/L";
            }
            break;
        case "S":
            if ($verbose) {
                $returnString = "S (US M 6-8), (US W 7-9), (MP 24-26)";
            } else {
                $returnString = "S";
            }
            break;
        case "M":
            if ($verbose) {
                $returnString = "M (US M 8.5-11), (MP 26-29)";
            } else {
                $returnString = "M";
            }
            break;
        case "L":
            if ($verbose) {
                $returnString = "L (US M 11.5-14), (MP 29-32)";
            } else {
                $returnString = "L";
            }
            break;
    }
    return $returnString;
}

// REWRITE WORDPRESS GALLERY FUNCTIONALITY
function lib_gallery_shortcode($attr) {
    $post = get_post();
    static $instance = 0;
    $instance++;
    if ( ! empty( $attr['ids'] ) ) {
        // 'ids' is explicitly ordered, unless you specify otherwise.
        if ( empty( $attr['orderby'] ) )
            $attr['orderby'] = 'post__in';
        $attr['include'] = $attr['ids'];
    }
    // Allow plugins/themes to override the default gallery template.
    $output = apply_filters('post_gallery', '', $attr);
    if ( $output != '' )
        return $output;
    // We're trusting author input, so let's at least make sure it looks like a valid orderby statement
    if ( isset( $attr['orderby'] ) ) {
        $attr['orderby'] = sanitize_sql_orderby( $attr['orderby'] );
        if ( !$attr['orderby'] )
            unset( $attr['orderby'] );
    }
    extract(shortcode_atts(array(
        'order'      => 'ASC',
        'orderby'    => 'menu_order ID',
        'id'         => $post ? $post->ID : 0,
        'itemtag'    => 'li',
        'icontag'    => 'div',
        'captiontag' => 'div',
        'columns'    => 3,
        'size'       => 'thumbnail',
        'include'    => '',
        'exclude'    => ''
    ), $attr, 'gallery'));
    $id = intval($id);
    if ( 'RAND' == $order )
        $orderby = 'none';
    if ( !empty($include) ) {
        $_attachments = get_posts( array('include' => $include, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby) );
        $attachments = array();
        foreach ( $_attachments as $key => $val ) {
            $attachments[$val->ID] = $_attachments[$key];
        }
    } elseif ( !empty($exclude) ) {
        $attachments = get_children( array('post_parent' => $id, 'exclude' => $exclude, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby) );
    } else {
        $attachments = get_children( array('post_parent' => $id, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby) );
    }
    if ( empty($attachments) )
        return '';
    if ( is_feed() ) {
        $output = "\n";
        foreach ( $attachments as $att_id => $attachment )
            $output .= wp_get_attachment_link($att_id, $size, true) . "\n";
        return $output;
    }
    $selector = "gallery-{$instance}";
    $output = "<div id=\"$selector\" class=\"gallery galleryid-{$id}\">\n\t<div class=\"gallery-viewer\">\n\t\t<div class=\"gallery-viewer-image\"></div>\n\t\t<div class=\"gallery-viewer-caption\"></div>\n\t\t<div class=\"gallery-viewer-prev\"></div>\n\t\t<div class=\"gallery-viewer-next\"></div>\n\t</div>\n\t<ul class=\"gallery-thumbnails\">\n";
    $i = 0;
    foreach ( $attachments as $id => $attachment ) {
        // always make it grab the link to the file
        $image_output = wp_get_attachment_link( $id, $size, false, false );
        $image_meta  = wp_get_attachment_metadata( $id );
        $orientation = '';
        if ( isset( $image_meta['height'], $image_meta['width'] ) )
            $orientation = ( $image_meta['height'] > $image_meta['width'] ) ? 'portrait' : 'landscape';
        $output .= "\t\t<li class='gallery-item'>\n\t\t\t<div class='gallery-icon {$orientation}'>$image_output</div>";
        if ( $captiontag && trim($attachment->post_excerpt) ) {
            $output .= "\n\t\t\t<div class='gallery-caption'>" . wptexturize($attachment->post_excerpt) . "</div>";
        }
        $output .= "\n\t\t</li>\n";
    }
    $output .= "\t</ul>\n</div><!-- END .gallery -->\n";
    return $output;
}
add_shortcode('gallery', 'lib_gallery_shortcode');

/******************************
CODE FOR CUSTOM POST TYPES
******************************/
// order menus for custom post types
function set_custom_post_types_admin_order($wp_query) {  
  if (is_admin()) {  
    $post_type = $wp_query->query['post_type'];
    if ( $post_type == 'libtech_snowboards' || $post_type == 'libtech_nas' || $post_type == 'libtech_skateboards' || $post_type == 'libtech_awards' || $post_type == 'libtech_technology' || $post_type == 'libtech_outerwear' || $post_type == 'libtech_apparel' || $post_type == 'libtech_accessories' || $post_type == 'libtech_luggage' || $post_type == 'libtech_team_snow' || $post_type == 'libtech_team_nas' || $post_type == 'libtech_team_skate' || $post_type == 'libtech_dealers' || $post_type == 'libtech_partners') { 
      $wp_query->set('orderby', 'menu_order');  
      $wp_query->set('order', 'ASC');  
    }  
  }  
}  
add_filter('pre_get_posts', 'set_custom_post_types_admin_order');  

// SET UP CUSTOM POST TYPES
function register_custom_post_types() {
    // START SNOWBOARDS
    $labels = array(
        'name' => _x('Snowboards', 'post type general name'),
        'singular_name' => _x('Snowboard', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_snowboards'),
        'add_new_item' => __('Add New Snowboard'),
        'edit_item' => __('Edit Snowboard'),
        'new_item' => __('New Snowboard'),
        'all_items' => __('All Snowboards'),
        'view_item' => __('View Snowboard'),
        'search_items' => __('Search Snowboards'),
        'not_found' =>  __('No Snowboard Found'),
        'not_found_in_trash' => __('No Snowbaords Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Snowboards'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "snowboards"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes', 'comments' )
    ); 
    register_post_type('libtech_snowboards',$args);
    // start taxonamy for Snowboards
    $labels = array(
        'name'                          => 'Categories',
        'singular_name'                 => 'Category',
        'search_items'                  => 'Search Category',
        'popular_items'                 => 'Popular Categories',
        'all_items'                     => 'All Categories',
        'parent_item'                   => 'Parent Category',
        'edit_item'                     => 'Edit Category',
        'update_item'                   => 'Update Category',
        'add_new_item'                  => 'Add New Category',
        'new_item_name'                 => 'New Category',
        'separate_items_with_commas'    => 'Separate Categories with commas',
        'add_or_remove_items'           => 'Add or remove Categories',
        'choose_from_most_used'         => 'Choose from most used Categories'
    );
    $args = array(
        'label'                         => 'Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_snowboard_categories', 'libtech_snowboards', $args );
    // END SNOWBOARDS

    // START BINDINGS
    $labels = array(
        'name' => _x('Bindings', 'post type general name'),
        'singular_name' => _x('Binding', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_bindings'),
        'add_new_item' => __('Add New Binding'),
        'edit_item' => __('Edit Binding'),
        'new_item' => __('New Binding'),
        'all_items' => __('All Bindings'),
        'view_item' => __('View Binding'),
        'search_items' => __('Search Bindings'),
        'not_found' =>  __('No Binding Found'),
        'not_found_in_trash' => __('No Bindings Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Bindings'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "bindings"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes', 'comments' )
    ); 
    register_post_type('libtech_bindings',$args);
    // END BINDINGS

    // START SKIS
    $labels = array(
        'name' => _x('Skis', 'post type general name'),
        'singular_name' => _x('Skis', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_nas'),
        'add_new_item' => __('Add New Skis'),
        'edit_item' => __('Edit Skis'),
        'new_item' => __('New Skis'),
        'all_items' => __('All Skis'),
        'view_item' => __('View Skis'),
        'search_items' => __('Search Skis'),
        'not_found' =>  __('No Skis Found'),
        'not_found_in_trash' => __('No Skis Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Skis'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "skis"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes', 'comments' )
    ); 
    register_post_type('libtech_nas',$args);
    // END SKIS

    // START SURFBOARDS
    $labels = array(
        'name' => _x('Surfboards', 'post type general name'),
        'singular_name' => _x('Surfboard', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_surfboards'),
        'add_new_item' => __('Add New Surfboard'),
        'edit_item' => __('Edit Surfboard'),
        'new_item' => __('New Surfboard'),
        'all_items' => __('All Surfboards'),
        'view_item' => __('View Surfboard'),
        'search_items' => __('Search Surfboards'),
        'not_found' =>  __('No surfboard found'),
        'not_found_in_trash' => __('No surfboards found in Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Surfboards'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "surfboards"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes', 'comments' )
    ); 
    register_post_type('libtech_surfboards',$args);
    // END SURFBOARDS

    // START SKATEBOARDS
    $labels = array(
        'name' => _x('Skateboards', 'post type general name'),
        'singular_name' => _x('Skateboard', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_skateboards'),
        'add_new_item' => __('Add New Skateboard'),
        'edit_item' => __('Edit Skateboard'),
        'new_item' => __('New Skateboard'),
        'all_items' => __('All Skateboards'),
        'view_item' => __('View Skateboard'),
        'search_items' => __('Search Skateboards'),
        'not_found' =>  __('No Skateboard Found'),
        'not_found_in_trash' => __('No Skateboards Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Skateboards'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => 'skateboards'),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes', 'comments' )
    ); 
    register_post_type('libtech_skateboards',$args);
    // start taxonamy for Skateboards
    $labels = array(
        'name'                          => 'Categories',
        'singular_name'                 => 'Category',
        'search_items'                  => 'Search Category',
        'popular_items'                 => 'Popular Categories',
        'all_items'                     => 'All Categories',
        'parent_item'                   => 'Parent Category',
        'edit_item'                     => 'Edit Category',
        'update_item'                   => 'Update Category',
        'add_new_item'                  => 'Add New Category',
        'new_item_name'                 => 'New Category',
        'separate_items_with_commas'    => 'Separate Categories with commas',
        'add_or_remove_items'           => 'Add or remove Categories',
        'choose_from_most_used'         => 'Choose from most used Categories'
    );
    $args = array(
        'label'                         => 'Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        //'rewrite'                       => array( 'slug' => 'skateboards' ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_skateboard_categories', 'libtech_skateboards', $args );
    // END SKATEBOARDS

    // START OUTERWEAR
    $labels = array(
        'name' => _x('Outerwear', 'post type general name'),
        'singular_name' => _x('Outerwear', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_outerwear'),
        'add_new_item' => __('Add New Outerwear'),
        'edit_item' => __('Edit Outerwear'),
        'new_item' => __('New Outerwear'),
        'all_items' => __('All Outerwear'),
        'view_item' => __('View Outerwear'),
        'search_items' => __('Search Outerwear'),
        'not_found' =>  __('No Outerwear Found'),
        'not_found_in_trash' => __('No Outerwear Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Outerwear'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => 'outerwear'),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes', 'comments' )
    ); 
    register_post_type('libtech_outerwear',$args);
    // start taxonamy for Outerwear
    $labels = array(
        'name'                          => 'Categories',
        'singular_name'                 => 'Category',
        'search_items'                  => 'Search Category',
        'popular_items'                 => 'Popular Categories',
        'all_items'                     => 'All Categories',
        'parent_item'                   => 'Parent Category',
        'edit_item'                     => 'Edit Category',
        'update_item'                   => 'Update Category',
        'add_new_item'                  => 'Add New Category',
        'new_item_name'                 => 'New Category',
        'separate_items_with_commas'    => 'Separate Categories with commas',
        'add_or_remove_items'           => 'Add or remove Categories',
        'choose_from_most_used'         => 'Choose from most used Categories'
    );
    $args = array(
        'label'                         => 'Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        //'rewrite'                       => array( 'slug' => 'outerwear' ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_outerwear_categories', 'libtech_outerwear', $args );
    // END OUTERWEAR

    // START APPAREL
    $labels = array(
        'name' => _x('Apparel', 'post type general name'),
        'singular_name' => _x('Apparel', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_apparel'),
        'add_new_item' => __('Add New Apparel'),
        'edit_item' => __('Edit Apparel'),
        'new_item' => __('New Apparel'),
        'all_items' => __('All Apparel'),
        'view_item' => __('View Apparel'),
        'search_items' => __('Search Apparel'),
        'not_found' =>  __('No Apparel Found'),
        'not_found_in_trash' => __('No Apparel Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Apparel'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => 'apparel'),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes', 'comments' )
    ); 
    register_post_type('libtech_apparel',$args);
    // start taxonamy for Apparel
    $labels = array(
        'name'                          => 'Categories',
        'singular_name'                 => 'Category',
        'search_items'                  => 'Search Category',
        'popular_items'                 => 'Popular Categories',
        'all_items'                     => 'All Categories',
        'parent_item'                   => 'Parent Category',
        'edit_item'                     => 'Edit Category',
        'update_item'                   => 'Update Category',
        'add_new_item'                  => 'Add New Category',
        'new_item_name'                 => 'New Category',
        'separate_items_with_commas'    => 'Separate Categories with commas',
        'add_or_remove_items'           => 'Add or remove Categories',
        'choose_from_most_used'         => 'Choose from most used Categories'
    );
    $args = array(
        'label'                         => 'Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        //'rewrite'                       => array( 'slug' => 'apparel' ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_apparel_categories', 'libtech_apparel', $args );
    // END APPAREL

    // START ACCESSORIES
    $labels = array(
        'name' => _x('Accessories', 'post type general name'),
        'singular_name' => _x('Accessory', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_accessories'),
        'add_new_item' => __('Add New Accessory'),
        'edit_item' => __('Edit Accessory'),
        'new_item' => __('New Accessory'),
        'all_items' => __('All Accessories'),
        'view_item' => __('View Accessory'),
        'search_items' => __('Search Accessories'),
        'not_found' =>  __('No Accessories Found'),
        'not_found_in_trash' => __('No Accessories Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Accessories'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => 'accessories'),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes', 'comments' )
    ); 
    register_post_type('libtech_accessories',$args);
    // start taxonamy for accessories
    $labels = array(
        'name'                          => 'Categories',
        'singular_name'                 => 'Category',
        'search_items'                  => 'Search Category',
        'popular_items'                 => 'Popular Categories',
        'all_items'                     => 'All Categories',
        'parent_item'                   => 'Parent Category',
        'edit_item'                     => 'Edit Category',
        'update_item'                   => 'Update Category',
        'add_new_item'                  => 'Add New Category',
        'new_item_name'                 => 'New Category',
        'separate_items_with_commas'    => 'Separate Categories with commas',
        'add_or_remove_items'           => 'Add or remove Categories',
        'choose_from_most_used'         => 'Choose from most used Categories'
    );
    $args = array(
        'label'                         => 'Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        //'rewrite'                       => array( 'slug' => 'accessories' ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_accessories_categories', 'libtech_accessories', $args );
    // END ACCESSORIES

    // START LUGGAGE
    $labels = array(
        'name' => _x('Luggage', 'post type general name'),
        'singular_name' => _x('Luggage', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_luggage'),
        'add_new_item' => __('Add New Luggage'),
        'edit_item' => __('Edit Luggage'),
        'new_item' => __('New Luggage'),
        'all_items' => __('All Luggage'),
        'view_item' => __('View Luggage'),
        'search_items' => __('Search Luggage'),
        'not_found' =>  __('No Luggage Found'),
        'not_found_in_trash' => __('No Luggage Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Luggage'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => 'luggage'),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes', 'comments' )
    ); 
    register_post_type('libtech_luggage',$args);
    // start taxonamy for luggage
    $labels = array(
        'name'                          => 'Categories',
        'singular_name'                 => 'Category',
        'search_items'                  => 'Search Category',
        'popular_items'                 => 'Popular Categories',
        'all_items'                     => 'All Categories',
        'parent_item'                   => 'Parent Category',
        'edit_item'                     => 'Edit Category',
        'update_item'                   => 'Update Category',
        'add_new_item'                  => 'Add New Category',
        'new_item_name'                 => 'New Category',
        'separate_items_with_commas'    => 'Separate Categories with commas',
        'add_or_remove_items'           => 'Add or remove Categories',
        'choose_from_most_used'         => 'Choose from most used Categories'
    );
    $args = array(
        'label'                         => 'Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        //'rewrite'                       => array( 'slug' => 'luggage' ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_luggage_categories', 'libtech_luggage', $args );
    // END LUGGAGE

    // START AWARDS
    $labels = array(
        'name' => _x('Awards', 'post type general name'),
        'singular_name' => _x('Award', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_awards'),
        'add_new_item' => __('Add New Award'),
        'edit_item' => __('Edit Award'),
        'new_item' => __('New Award'),
        'all_items' => __('All Awards'),
        'view_item' => __('View Award'),
        'search_items' => __('Search Awards'),
        'not_found' =>  __('No Award Found'),
        'not_found_in_trash' => __('No Awards Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Awards'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "awards"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'page-attributes' )
    ); 
    register_post_type('libtech_awards',$args);
    // END AWARDS

    // START TECHNOLOGY
    $labels = array(
        'name' => _x('Technology', 'post type general name'),
        'singular_name' => _x('Technology', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_technology'),
        'add_new_item' => __('Add New Tech Item'),
        'edit_item' => __('Edit Tech Item'),
        'new_item' => __('New Technology'),
        'all_items' => __('All Technology'),
        'view_item' => __('View Tech Item'),
        'search_items' => __('Search Technology'),
        'not_found' =>  __('No Tech Item Found'),
        'not_found_in_trash' => __('No Technology Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Technology'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "technology"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes' )
    ); 
    register_post_type('libtech_technology',$args);
    // start taxonamy for Technology
    $labels = array(
        'name'                          => 'Categories',
        'singular_name'                 => 'Category',
        'search_items'                  => 'Search Category',
        'popular_items'                 => 'Popular Categories',
        'all_items'                     => 'All Categories',
        'parent_item'                   => 'Parent Category',
        'edit_item'                     => 'Edit Category',
        'update_item'                   => 'Update Category',
        'add_new_item'                  => 'Add New Category',
        'new_item_name'                 => 'New Category',
        'separate_items_with_commas'    => 'Separate Categories with commas',
        'add_or_remove_items'           => 'Add or remove Categories',
        'choose_from_most_used'         => 'Choose from most used Categories'
    );
    $args = array(
        'label'                         => 'Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_technology_categories', 'libtech_technology', $args );
    // END TECHNOLOGY

    // START FAQs
    $labels = array(
        'name' => _x('FAQs', 'post type general name'),
        'singular_name' => _x('FAQ', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_faqs'),
        'add_new_item' => __('Add New FAQ'),
        'edit_item' => __('Edit FAQ'),
        'new_item' => __('New FAQ'),
        'all_items' => __('All FAQs'),
        'view_item' => __('View FAQs'),
        'search_items' => __('Search FAQs'),
        'not_found' =>  __('No FAQ found'),
        'not_found_in_trash' => __('No FAQs found in Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'FAQs'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        //'rewrite' => array("slug" => "artists"),
        'capability_type' => 'post',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes' )
    ); 
    register_post_type('libtech_faqs',$args);
    // start taxonamy for FAQs
    $labels = array(
        'name'                          => 'Categories',
        'singular_name'                 => 'Category',
        'search_items'                  => 'Search Category',
        'popular_items'                 => 'Popular Categories',
        'all_items'                     => 'All Categories',
        'parent_item'                   => 'Parent Category',
        'edit_item'                     => 'Edit Category',
        'update_item'                   => 'Update Category',
        'add_new_item'                  => 'Add New Category',
        'new_item_name'                 => 'New Category',
        'separate_items_with_commas'    => 'Separate Categories with commas',
        'add_or_remove_items'           => 'Add or remove Categories',
        'choose_from_most_used'         => 'Choose from most used Categories'
    );
    $args = array(
        'label'                         => 'Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        //'rewrite'                       => array( 'slug' => 'cameras/brands', 'with_front' => false ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_faqs_categories', 'libtech_faqs', $args );
    // END FAQs

    // START TEAM
    // TEAM SNOW
    $labels = array(
        'name' => _x('Snowboard Team', 'post type general name'),
        'singular_name' => _x('Snow Ripper', 'post type singular name'),
        'add_new' => _x('Add Snow Ripper', 'libtech_team_snow'),
        'add_new_item' => __('Add New Team Member'),
        'edit_item' => __('Edit Team Member'),
        'new_item' => __('New Team Member'),
        'all_items' => __('All Team Members'),
        'view_item' => __('View Team Member'),
        'search_items' => __('Search Team'),
        'not_found' =>  __('No Team Member Found'),
        'not_found_in_trash' => __('No Team Member Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Snow Team'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "snowboarding/team"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes' )
    ); 
    register_post_type('libtech_team_snow',$args);

    // TEAM NAS
    $labels = array(
        'name' => _x('NAS Team', 'post type general name'),
        'singular_name' => _x('NAS Ripper', 'post type singular name'),
        'add_new' => _x('Add NAS Ripper', 'libtech_team_nas'),
        'add_new_item' => __('Add New Team Member'),
        'edit_item' => __('Edit Team Member'),
        'new_item' => __('New Team Member'),
        'all_items' => __('All Team Members'),
        'view_item' => __('View Team Member'),
        'search_items' => __('Search Team'),
        'not_found' =>  __('No Team Member Found'),
        'not_found_in_trash' => __('No Team Member Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'NAS Team'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "skiing/team"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes' )
    ); 
    register_post_type('libtech_team_nas',$args);

    // TEAM SURF
    $labels = array(
        'name' => _x('Surf Team', 'post type general name'),
        'singular_name' => _x('Surf Ripper', 'post type singular name'),
        'add_new' => _x('Add Surf Ripper', 'libtech_team_surf'),
        'add_new_item' => __('Add New Team Member'),
        'edit_item' => __('Edit Team Member'),
        'new_item' => __('New Team Member'),
        'all_items' => __('All Team Members'),
        'view_item' => __('View Team Member'),
        'search_items' => __('Search Team'),
        'not_found' =>  __('No Team Member Found'),
        'not_found_in_trash' => __('No Team Member Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Surf Team'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "surfing/team"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes' )
    ); 
    register_post_type('libtech_team_surf',$args);

    // TEAM SKATE
    $labels = array(
        'name' => _x('Skate Team', 'post type general name'),
        'singular_name' => _x('Skate Ripper', 'post type singular name'),
        'add_new' => _x('Add Skate Ripper', 'libtech_team_skate'),
        'add_new_item' => __('Add New Team Member'),
        'edit_item' => __('Edit Team Member'),
        'new_item' => __('New Team Member'),
        'all_items' => __('All Team Members'),
        'view_item' => __('View Team Member'),
        'search_items' => __('Search Team'),
        'not_found' =>  __('No Team Member Found'),
        'not_found_in_trash' => __('No Team Member Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Skate Team'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        'rewrite' => array("slug" => "skateboarding/team"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes' )
    ); 
    register_post_type('libtech_team_skate',$args);

    // start taxonamy for Team
    $labels = array(
        'name'                          => 'Team Categories',
        'singular_name'                 => 'Team Category',
        'search_items'                  => 'Search Team Catagories',
        'popular_items'                 => 'Popular Team Categories',
        'all_items'                     => 'All Team Categories',
        'parent_item'                   => 'Parent Team Category',
        'edit_item'                     => 'Edit Team Category',
        'update_item'                   => 'Update Team Category',
        'add_new_item'                  => 'Add New Team Category',
        'new_item_name'                 => 'New Team Category',
        'separate_items_with_commas'    => 'Separate Team Categories with commas',
        'add_or_remove_items'           => 'Add or remove Team Categories',
        'choose_from_most_used'         => 'Choose from most used Team Categories'
    );
    $args = array(
        'label'                         => 'Team Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_team_snow_cat', 'libtech_team_snow', $args );
    register_taxonomy( 'libtech_team_nas_cat', 'libtech_team_nas', $args );
    register_taxonomy( 'libtech_team_surf_cat', 'libtech_team_surf', $args );
    register_taxonomy( 'libtech_team_skate_cat', 'libtech_team_skate', $args );
    // END TEAM
    
    // START PARTNERS
    $labels = array(
        'name' => _x('Partners', 'post type general name'),
        'singular_name' => _x('Partner', 'post type singular name'),
        'add_new' => _x('Add New', 'libtech_partners'),
        'add_new_item' => __('Add New Partner'),
        'edit_item' => __('Edit Partner'),
        'new_item' => __('New Partner'),
        'all_items' => __('All Partners'),
        'view_item' => __('View Partner'),
        'search_items' => __('Search Partners'),
        'not_found' =>  __('No Partner Found'),
        'not_found_in_trash' => __('No Partner Found In Trash'), 
        'parent_item_colon' => '',
        'menu_name' => 'Partners'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true, 
        'show_in_menu' => true, 
        'query_var' => true,
        //'rewrite' => array("slug" => "dealers"),
        'capability_type' => 'page',
        'has_archive' => false, 
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => array( 'title', 'editor', 'page-attributes' )
    ); 
    register_post_type('libtech_partners',$args);
    // start taxonamy for Partners
    $labels = array(
        'name'                          => 'Categories',
        'singular_name'                 => 'Category',
        'search_items'                  => 'Search Category',
        'popular_items'                 => 'Popular Categories',
        'all_items'                     => 'All Categories',
        'parent_item'                   => 'Parent Category',
        'edit_item'                     => 'Edit Category',
        'update_item'                   => 'Update Category',
        'add_new_item'                  => 'Add New Category',
        'new_item_name'                 => 'New Category',
        'separate_items_with_commas'    => 'Separate Categories with commas',
        'add_or_remove_items'           => 'Add or remove Categories',
        'choose_from_most_used'         => 'Choose from most used Categories'
    );
    $args = array(
        'label'                         => 'Categories',
        'labels'                        => $labels,
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'args'                          => array( 'orderby' => 'term_order' ),
        'query_var'                     => true
    );
    register_taxonomy( 'libtech_partner_categories', 'libtech_partners', $args );
    // END PARTNERS
}
// run the registration
add_action( 'init', 'register_custom_post_types' );
?>