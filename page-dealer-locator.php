<?php
/*
Template Name: Dealer Locator
*/
get_header();
?>

          <section class="dealer-locator bg2">
               <div class="section-content">
                    <h1><?php the_title(); ?></h1>
                    <div class="dealer-copy">
                         <?php the_content(); ?>
                    </div>
                    <iframe src="http://hosted.where2getit.com/mervin/?LIBTECH=1" frameborder="0" height="700" width="920" scrolling="no" >You need a Frames Capable browser to view this content.</iframe>
                    <div class="iframe-fallback">
                         <p><a href="/dealer-locator/map/" target="_blank" class="h4">View Dealer Map/Locator</a></p>
                         <p>Our locator does not work well within smaller browsers. Use the link above to view the stand-alone locator.</p>
                    </div>
               </div><!-- END .section-content -->
          </section><!-- END .dealer-locator -->

<?php get_footer(); ?>