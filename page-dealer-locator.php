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
          <div class="bg3-top"></div>
          <section class="online-dealers bg3 snowboarding">
               <div class="section-content">
                    <h2>Authorized Online Dealers</h2>
                    <ul class="dealer-nav">
                         <li><a href="#snowboarding" class="h4 selected">Snowboarding</a></li>
                         <li><a href="#skiing" class="h4">NASing</a></li>
                         <!--<li><a href="#surfing" class="h4">Surfing</a></li>-->
                         <li><a href="#skateboarding" class="h4">Skateboarding</a></li>
                    </ul>
                    <?php
                    // GET AND STORE ALL DEALERS
                    $dealers = array();
                    $args = array(
                         'post_type' => 'libtech_dealers',
                         'posts_per_page' => -1,
                         'orderby' => 'menu_order',
                         'order' => 'ASC'
                    );
                    $loop = new WP_Query( $args );
                    while ( $loop->have_posts() ) :
                         $loop->the_post();
                         $postID = $post->ID;
                         $title = get_the_title();
                         $snowLink = get_field('libtech_dealers_link_snow');
                         $skiLink = get_field('libtech_dealers_link_ski');
                         $surfLink = get_field('libtech_dealers_link_surf');
                         $skateLink = get_field('libtech_dealers_link_skate');
                         $imageID = get_field('libtech_dealers_logo');
                         $imageFile = wp_get_attachment_image_src($imageID, 'full');
                         array_push($dealers, array($postID, $title, $imageFile, $snowLink, $skiLink, $surfLink, $skateLink));
                    endwhile;
                    wp_reset_query();
                    ?>
                    <div id="snowboarding">
                         <?php
                         // CHECK FOR US SNOW DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'snow-us'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY US SNOW DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>USA Snowboard Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[3]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Snow Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         // CHECK FOR CA SNOW DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'snow-ca'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY CA SNOW DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>Canada Snowboard Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[3]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Snow Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         // CHECK FOR EU SNOW DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'snow-eu'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY EU SNOW DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>Europe Snowboard Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[3]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Snow Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         ?>
                    </div><!-- END #snowboarding -->
                    <div id="skiing">
                         <?php
                         // CHECK FOR US SKI DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'ski-us'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY US SKI DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>USA Ski Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[4]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Ski Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         // CHECK FOR CA SKI DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'ski-ca'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY CA SKI DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>Canada Ski Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[4]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Ski Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         // CHECK FOR EU SKI DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'ski-eu'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY EU SKI DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>Europe Ski Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[4]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Ski Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         ?>
                    </div><!-- END #skiing -->
                    <!--
                    <div id="surfing">
                         <?php
                         // CHECK FOR US SURF DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'surf-us'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY US SURF DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>USA Surfboard Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[5]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Surf Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         // CHECK FOR CA SURF DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'surf-ca'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY CA SURF DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>Canada Surfboard Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[5]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Surf Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         // CHECK FOR EU SNOW DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'surf-eu'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY EU SURF DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>Europe Surfboard Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[5]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Surf Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         ?>
                    </div><!-- END #surfing -->
                    <div id="skateboarding">
                         <?php
                         // CHECK FOR US SKATE DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'skate-us'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY US SKATE DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>USA Skateboard Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[6]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Skate Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         // CHECK FOR CA SKATE DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'skate-ca'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY CA SKATE DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>Canada Skateboard Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[6]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Skate Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         // CHECK FOR EU SKATE DEALERS
                         $availableDealers = array();
                         foreach ($dealers as $dealer):
                              $categories = wp_get_object_terms( $dealer[0], 'libtech_dealers_categories');
                              if(!empty($categories)):
                                   foreach($categories as $term):
                                        if($term->slug == 'skate-eu'):
                                             array_push($availableDealers, $dealer);
                                        endif;
                                   endforeach;
                              endif;
                         endforeach;
                         // DISPLAY EU SKATE DEALERS
                         if(count($availableDealers) > 0):
                              shuffle($availableDealers); // randomly sort array of dealers
                              echo "<h3>Europe Skateboard Dealers:</h3>\n<ul class=\"dealer-list\">\n";
                              foreach ($availableDealers as $dealer):
                         ?>
                         <li>
                              <a href="<? echo $dealer[6]; ?>" target="_blank">
                                   <img src="<? echo $dealer[2][0]; ?>" width="<? echo $dealer[2][1]; ?>" height="<? echo $dealer[2][2]; ?>" alt="Buy Lib Tech Skate Products from <? echo $dealer[1]; ?>" />
                              </a>
                         </li>
                         <?
                              endforeach;
                              echo "</ul>\n<div class=\"clearfix\"></div>\n";
                         endif;
                         ?>
                    </div><!-- END #skateboarding -->
               </div><!-- END .section-content -->
          </section><!-- END .tech-major -->

<?php get_footer(); ?>