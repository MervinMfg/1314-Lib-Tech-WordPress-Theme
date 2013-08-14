<?php

	if (!empty($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
		die ('Please do not load this page directly. Thanks!');

	if ( post_password_required() ) { ?>
		This post is password protected. Enter the password to view comments.
	<?php
		return;
	}
?>

<?php if ( comments_open() ) : ?>
		<div class="discussion-top bg1-top"></div>
        <section class="discussion bg1">
        	<div class="section-content">
				<h2>Discussion:</h2>
				<div class="discussion-thread">
					<fb:comments href="<?php the_permalink(); ?>" width="940" colorscheme="dark" num_posts="5" mobile="false"></fb:comments>
				</div>
				<div class="clearfix"></div>
			</div>
		</section>
<?php endif; ?>
