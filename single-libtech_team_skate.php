<?php
/*
Template Name: Skateboard Ripper
*/
get_header();
	if (have_posts()) : while (have_posts()) : the_post();
		$thePostID = $post->ID;
		$slug = $post->post_name;
		$profilePhoto = get_field('libtech_team_profile_photo'); // libtech_team_related_products
		$profilePhoto = wp_get_attachment_image_src($profilePhoto, 'full', false);
?>
        <section class="ripper-details bg2 <?php echo $slug; ?>">
        	<div class="section-content">
        		<!--<div class="breadcrumb"><a href="/snowboarding/team/">&lt; Rippers Overview</a></div>-->
        		<h1><?php the_title(); ?></h1>
        		<div class="ripper-photo">
					<img src="<?php echo $profilePhoto[0]; ?>" alt="<?php the_title(); ?> Team Photo" width="<?php echo $profilePhoto[1]; ?>" height="<?php echo $profilePhoto[1]; ?>" />
				</div>
				<div class="ripper-right">
					<div class="ripper-meta">
						<?php if(get_field('libtech_team_home')) : ?><p class="ripper-home"><span>Local Skatepark: </span><?php the_field('libtech_team_home'); ?></p><?php endif; ?>
						<?php if(get_field('libtech_team_sponsors')) : ?><p class="ripper-sponsors"><span>Sponsors: </span><?php the_field('libtech_team_sponsors'); ?></p><?php endif; ?>
					</div>
					<h4><?php the_field('libtech_team_profile_tagline'); ?></h4>
					<div class="ripper-bio">
						<?php the_content(); ?>
					</div>
					<ul class="social-links">
						<?php if(get_field('libtech_team_facebook_username')) : ?><li><a href="http://www.facebook.com/<?php the_field('libtech_team_facebook_username'); ?>" class="facebook" target="_blank">Facebook</a></li><?php endif; ?>
						<?php if(get_field('libtech_team_twitter_username')) : ?><li><a href="http://twitter.com/<?php the_field('libtech_team_twitter_username'); ?>" class="twitter" target="_blank">Twitter</a></li><?php endif; ?>
						<?php if(get_field('libtech_team_vimeo_username')) : ?><li><a href="http://vimeo.com/<?php the_field('libtech_team_vimeo_username'); ?>" class="vimeo" target="_blank">Vimeo</a></li><?php endif; ?>
						<?php if(get_field('libtech_team_instagram_username')) : ?><li><a href="http://instagram.com/<?php the_field('libtech_team_instagram_username'); ?>" class="instagram" target="_blank">Instagram</a></li><?php endif; ?>
			        </ul>
			        <?php if(get_field('libtech_team_personal_website')) : ?><p class="personal-site"><a href="<?php the_field('libtech_team_personal_website'); ?>" target="_blank">Personal Website</a></p><?php endif; ?>
			    </div>
			    <div class="clearfix"></div>
        	</div><!-- END section-content -->
        </section><!-- END section-content -->

<?php
		endwhile;
	endif;
	get_footer();
?>