<?php
/*
Template Name: Pass It On Project
*/
get_header();
?>

		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
		<div class="bg2-top"></div>
		<section class="bg2 default-page">
        	<div class="section-content">
        		<article <?php post_class() ?> id="page-<?php the_ID(); ?>">
					<div class="entry-header">
						<h1 class="entry-title"><?php the_title(); ?></h1>
					</div><!-- END .entry-header -->
					<div class="entry-content">
						<!-- START TagBoard -->
						<div id="tagboard-embed"></div>
						<script>
							var tagboardOptions = {tagboard:"passitonproject/153199", darkMode: true};
						</script>
						<script src="https://tagboard.com/public/js/embed.js"></script>
						<!-- END TagBoard -->
					</div>
					<?php comments_template(); ?>
				</article>
			</div><!-- END .section-content -->
        </section><!-- END .product-zoom -->

		<?php endwhile; endif; ?>

<?php get_footer(); ?>
