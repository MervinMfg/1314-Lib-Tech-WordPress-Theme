<?php
/*
Template Name: Technology Overview
*/
get_header();
?>

        <section class="tech-overview bg2">
            <div class="section-content">
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
                
                <?php
                $techPage = new WP_Query();
                $techPage->query('page_id=18914'); // snowboarding
                while ($techPage->have_posts()) : $techPage->the_post();
                ?>

                <h3><?php the_title(); ?></h3>
                <?php the_content(); ?>
                <p class="tech-link"><a href="<?php the_permalink(); ?>">View More</a></p>

                <?php 
                endwhile;
                wp_reset_query();
                ?>

                <?php
                $techPage = new WP_Query();
                $techPage->query('page_id=18916'); // skiing
                while ($techPage->have_posts()) : $techPage->the_post();
                ?>

                <h3><?php the_title(); ?></h3>
                <?php the_content(); ?>
                <p class="tech-link"><a href="<?php the_permalink(); ?>">View More</a></p>

                <?php 
                endwhile;
                wp_reset_query();
                ?>

                <?php
                $techPage = new WP_Query();
                $techPage->query('page_id=18912'); // skateboarding
                while ($techPage->have_posts()) : $techPage->the_post();
                ?>

                <h3><?php the_title(); ?></h3>
                <?php the_content(); ?>
                <p class="tech-link"><a href="<?php the_permalink(); ?>">View More</a></p>

                <?php 
                endwhile;
                wp_reset_query();
                ?>

            </div><!-- END .section-content -->
        </section><!-- END .tech-major -->

<?php get_footer(); ?>