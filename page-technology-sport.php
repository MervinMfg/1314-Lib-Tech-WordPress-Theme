<?php
/*
Template Name: Technology Sport
*/
get_header();

$parent = get_page($post->post_parent);
$parentSlug = $parent->post_name;

switch ($parentSlug) {
    case "skiing":
        $categorySlug = "nas";
        break;
    case "skateboarding":
        $categorySlug = "skateboards";
        break;
    case "snowboarding":
        $categorySlug = "snowboards";
        break;
    default:
        $categorySlug = "snowboards";
}
?>
        <section class="tech-major bg2">
            <div class="section-content">
                <div class="tech-header">
                    <h1><?php the_title(); ?></h1>
                    <?php if ($categorySlug == "snowboards") : ?>
                    <img src="<?php bloginfo('template_directory'); ?>/_/img/tech-snow.jpg" alt="Lib Tech Snowboard Technology" />
                    <?php elseif ($categorySlug == "nas"): ?>
                    <img src="<?php bloginfo('template_directory'); ?>/_/img/tech-ski.jpg" alt="Lib Tech NAS Technology" />
                    <?php elseif ($categorySlug == "skateboards"): ?>
                    <img src="<?php bloginfo('template_directory'); ?>/_/img/tech-skate.jpg" alt="Lib Tech Skate Technology" />
                    <?php endif; ?>
                    <?php the_content(); ?>
                    <div class="clearfix"></div>
                </div>
                <ul>
                    <?php
                    // get the major tech items
                    $args = array(
                        'post_type' => 'libtech_technology',
                        'posts_per_page' => -1,
                        'orderby' => 'menu_order',
                        'order' => 'ASC',
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'libtech_technology_categories',
                                'field' => 'slug',
                                'terms' => $categorySlug
                            )
                        )
                    );
                    $loop = new WP_Query( $args );
                    while ( $loop->have_posts() ) : $loop->the_post();
                        // check if item is major
                        if(get_field("libtech_technology_type") == "Major"):
                            $videoID = get_field("libtech_technology_video");
                    ?>
                    <li>
                        <div class="tech-video">
                            <iframe src="http://player.vimeo.com/video/<?php echo $videoID; ?>?title=0&amp;byline=0&amp;portrait=0&amp;color=fff100" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                        <div class="tech-copy">
                            <h4><?php the_title(); ?></h4>
                            <?php the_content(); ?>
                            <div class="tech-found-on">
                                <h5>Found On:</h5>
                                <ul>
                                    <?php
                                        $relatedItems = get_field('libtech_technology_related_products');
                                        if( $relatedItems ):
                                            foreach( $relatedItems as $relatedItem):
                                    ?>
                                    <li><a href="<? echo get_permalink( $relatedItem->ID ); ?>"><? echo $relatedItem->post_title; ?></a></li>
                                    <?php
                                            endforeach;
                                        endif;
                                    ?>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <?php
                        endif;
                    endwhile;
                    wp_reset_query();
                    ?>
                    <div class="clearfix"></div>
            </div><!-- END .section-content -->
        </section><!-- END .tech-major -->
        <div class="bg3-top product-video-top"></div>
        <section class="tech-minor bg3">
            <div class="section-content">
                <h2>Ingredients:</h2>
                <ul>
                    <?php
                    $args = array(
                        'post_type' => 'libtech_technology',
                        'posts_per_page' => -1,
                        'orderby' => 'menu_order',
                        'order' => 'ASC',
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'libtech_technology_categories',
                                'field' => 'slug',
                                'terms' => $categorySlug
                            )
                        )
                    );
                    $loop = new WP_Query( $args );
                    while ( $loop->have_posts() ) : $loop->the_post();
                        // check if item is major
                        if(get_field("libtech_technology_type") == "Minor"):
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
                        endwhile;
                        wp_reset_query();
                    ?>
                </ul>
            </div><!-- END .section-content -->
        </section><!-- END .tech-minor -->
<?php get_footer(); ?>