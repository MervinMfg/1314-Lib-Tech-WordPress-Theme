<?php
/**
 * @package WordPress
 * @subpackage Lib-Tech-WordPress-Theme
 */
 get_header(); ?>

		<section class="homepage-posts bg3">
			<div class="section-content">
				<?php if (have_posts()) : ?>
				<ul>
					<?php
						while (have_posts()) :
							the_post();
							$postImage = get_post_image('square-medium');
					?>
					<li <?php post_class('homepage-post'); ?> id="post-<?php the_ID(); ?>">
						<div class="post-wrapper">
							<a href="<?php the_permalink() ?>">
								<img src="<?php echo $postImage[0]; ?>" alt="Image From <?php echo get_the_title(); ?>" />
								<h3 class="post-title"><?php the_title(); ?></h3>
								<p class="post-meta">
									<time datetime="<?php the_time('c') ?>"><?php the_time('F jS, Y') ?></time> | <span><fb:comments-count href=<?php the_permalink() ?>></fb:comments-count> Comments</span>
								</p>
								<p class="post-excerpt"><?php libtech_excerpt('libtech_excerptlength_home'); ?></p>
								<p class="post-more">READ MORE</p>
							</a>
						</div>
					</li>
					<?php endwhile; ?>
				</ul>
				<?php
					post_navigation();
					else :
				?>
				<h1>Nothing Found</h1>
				<?php endif; ?>
			</div><!-- END .section-content -->
			<div class="clearfix"></div>
		</section><!-- END .homepage-posts -->
<!--
<?php get_sidebar(); ?>
-->
<?php get_footer(); ?>
