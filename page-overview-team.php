<?php
/*
Template Name: Team Overview
*/
get_header();

if (have_posts()) :
    while (have_posts()) :
        the_post();
?>
        <div class="bg2-top"></div>
        <section class="team-header bg2">
            <div class="section-content">
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div><!-- END .section-content -->
        </section><!-- END .team-header -->
        <div class="bg3-top"></div>
        <section class="team-members bg3">
            <div class="section-content">
                <?php if (is_tree('6886')) : // check if this is within snowboarding ?>
                <ul>
                    <?php
                        $args = array(
                            'post_type' => 'libtech_team_snow',
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'libtech_team_snow_cat',
                                    'field' => 'slug',
                                    'terms' => 'rippers',
                                    'include_children' => false
                                )
                            )
                        );
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $profilePhoto = get_field('libtech_team_profile_photo');
                            $profilePhoto = wp_get_attachment_image_src($profilePhoto, 'square-medium', false);
                    ?>

                    <li>
                        <a href="<?php the_permalink(); ?>">                            
                            <div class="team-member-image">
                                <img src="<?php echo $profilePhoto[0]; ?>" alt="<?php the_title(); ?> Profile" />
                            </div>
                            <h3><?php the_title(); ?></h3>
                        </a>
                    </li>

                    <?php
                        endwhile;
                        wp_reset_query();
                    ?>
                </ul>
                <div class="clearfix"></div>
                <h2>Legendary Rippers</h2>
                <ul>
                    <?php
                        $args = array(
                            'post_type' => 'libtech_team_snow',
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'libtech_team_snow_cat',
                                    'field' => 'slug',
                                    'terms' => 'legendary-rippers',
                                    'include_children' => false
                                )
                            )
                        );
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $profilePhoto = get_field('libtech_team_profile_photo');
                            $profilePhoto = wp_get_attachment_image_src($profilePhoto, 'square-medium', false);
                    ?>

                    <li>
                        <a href="<?php the_permalink(); ?>">
                            <div class="team-member-image">
                                <img src="<?php echo $profilePhoto[0]; ?>" alt="<?php the_title(); ?> Profile" />
                            </div>
                            <h3><?php the_title(); ?></h3>
                        </a>
                    </li>

                    <?php
                        endwhile;
                        wp_reset_query();
                    ?>

                </ul>
                <div class="clearfix"></div>
                <h2>AM Rippers</h2>
                <ul>
                    <?php
                        $args = array(
                            'post_type' => 'libtech_team_snow',
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'libtech_team_snow_cat',
                                    'field' => 'slug',
                                    'terms' => 'ams-rippers',
                                    'include_children' => false
                                )
                            )
                        );
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $profilePhoto = get_field('libtech_team_profile_photo');
                            $profilePhoto = wp_get_attachment_image_src($profilePhoto, 'square-medium', false);
                    ?>

                    <li>
                        <a href="<?php the_permalink(); ?>">
                            <div class="team-member-image">
                                <img src="<?php echo $profilePhoto[0]; ?>" alt="<?php the_title(); ?> Profile" />
                            </div>
                            <h3><?php the_title(); ?></h3>
                        </a>
                    </li>

                    <?php
                        endwhile;
                        wp_reset_query();
                    ?>

                </ul>
                <div class="clearfix"></div>
                <h2>experiMENTAL Rippers</h2>
                <ul>
                    <?php
                        $args = array(
                            'post_type' => 'libtech_team_snow',
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'libtech_team_snow_cat',
                                    'field' => 'slug',
                                    'terms' => 'experimental-rippers',
                                    'include_children' => false
                                )
                            )
                        );
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $profilePhoto = get_field('libtech_team_profile_photo');
                            $profilePhoto = wp_get_attachment_image_src($profilePhoto, 'square-medium', false);
                    ?>

                    <li>
                        <a href="<?php the_permalink(); ?>">
                            <div class="team-member-image">
                                <img src="<?php echo $profilePhoto[0]; ?>" alt="<?php the_title(); ?> Profile" />
                            </div>
                            <h3><?php the_title(); ?></h3>
                        </a>
                    </li>

                    <?php
                        endwhile;
                        wp_reset_query();
                    ?>

                </ul>
                <div class="clearfix"></div>
                <h2>Euro Rippers</h2>
                <ul>
                    <?php
                        $args = array(
                            'post_type' => 'libtech_team_snow',
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'libtech_team_snow_cat',
                                    'field' => 'slug',
                                    'terms' => 'euro-rippers',
                                    'include_children' => false
                                )
                            )
                        );
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $profilePhoto = get_field('libtech_team_profile_photo');
                            $profilePhoto = wp_get_attachment_image_src($profilePhoto, 'square-medium', false);
                    ?>

                    <li>
                        <a href="<?php the_permalink(); ?>">
                            <div class="team-member-image">
                                <img src="<?php echo $profilePhoto[0]; ?>" alt="<?php the_title(); ?> Profile" />
                            </div>
                            <h3><?php the_title(); ?></h3>
                        </a>
                    </li>

                    <?php
                        endwhile;
                        wp_reset_query();
                    ?>
                </ul>
                <div class="clearfix"></div>
                <?php else: ?>
                <ul>
                    <?php
                        if (is_tree('18925')) {
                            // check if this is within skateboarding
                            $postType = "libtech_team_skate";
                        } else {
                            $postType = "libtech_team_nas";
                        }
                        $args = array(
                            'post_type' => $postType,
                            'posts_per_page' => -1,
                            'orderby' => 'menu_order',
                            'order' => 'ASC'
                        );
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $profilePhoto = get_field('libtech_team_profile_photo');
                            $profilePhoto = wp_get_attachment_image_src($profilePhoto, 'square-medium', false);
                    ?>

                    <li>
                        <a href="<?php the_permalink(); ?>">                            
                            <div class="team-member-image">
                                <img src="<?php echo $profilePhoto[0]; ?>" alt="<?php the_title(); ?> Profile" />
                            </div>
                            <h3><?php the_title(); ?></h3>
                        </a>
                    </li>

                    <?php
                        endwhile;
                        wp_reset_query();
                    ?>
                </ul>
                <div class="clearfix"></div>
                <?php endif; ?>
            </div><!-- END .section-content -->
        </section><!-- END .team-header -->
<?php
    endwhile;
endif;
get_footer();
?>