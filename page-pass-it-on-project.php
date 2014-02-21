<?php
/*
Template Name: Pass It On Project
*/
get_header();
?>

		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="bg-product-snow-top"></div>
		<section class="pass-it-on-header bg-product-snow">
			<div class="section-content">
				<h1><?php the_title(); ?></h1>
				<div class="pass-it-on-image">
					<img src="<?php bloginfo('template_directory'); ?>/_/img/pass-it-on-project.jpg" alt="Pass It On Project Board in Japan" />
				</div>
				<div class="pass-it-on-desc">
					<?php the_content(); ?>
				</div>
				<div class="clearfix"></div>
			</div><!-- END .section-content -->
		</section><!-- END .team-header -->
		<div class="bg2-top"></div>
		<section class="bg2 tagboard">
			<div class="section-content">
				<!-- START TagBoard -->
				<div id="tagboard-embed"></div>
				<script>
					var tagboardOptions = {tagboard:"passitonproject/153199", darkMode: true, postCount: 20, mobilePostCount: 10};
				</script>
				<script src="https://tagboard.com/public/js/embed.js"></script>
				<!-- END TagBoard -->
				<?php comments_template(); ?>
			</div><!-- END .section-content -->
		</section><!-- END .product-zoom -->

		<?php endwhile; endif; ?>

<?php get_footer(); ?>