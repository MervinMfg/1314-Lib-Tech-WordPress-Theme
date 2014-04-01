<?php
/*
Template Name: Surfboard Fins
*/
get_header();
?>
        <section class="fins-includes bg2">
            <div class="section-content">
                <h1><?php the_title(); ?></h1>
                <h3>Each Waterboard Includes</h3>
                <ul>
                    <li>
                        <div>
                            <p>2 M.I.L.F. Technology side fins</p>
                            <img src="<?php bloginfo('template_directory'); ?>/_/img/surf-fins-milf.png" width="320" height="320" alt="M.I.L.F. Side Fin" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>1 Lib Standard Trailing fin</p>
                            <img src="<?php bloginfo('template_directory'); ?>/_/img/surf-fin-trailing.png" width="320" height="320" alt="Lib Trailing Fin" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>1 special bonus Spinfly Trailing fin</p>
                            <p>(1 extra Spinfly with 5 fin option)</p>
                            <img src="<?php bloginfo('template_directory'); ?>/_/img/surf-fin-spinfly.png" width="320" height="320" alt="Lib Tech Spinfly Trailing Fin" />
                        </div>
                    </li>
                    <li class="last">
                        <div>
                            <p>1 Lib Tech fin key</p>
                            <img src="<?php bloginfo('template_directory'); ?>/_/img/surf-fin-keys.png" width="320" height="320" alt="Lib Tech Fin Keys" />
                        </div>
                    </li>
                </ul>
                <div class="clearfix"></div>
            </div><!-- END .section-content -->
        </section><!-- END .fins-includes -->
        <div class="bg3-top"></div>
        <section class="fins-adjusting bg3">
            <div class="section-content">
                <h2>Adjusting the Fins</h2>
                <div class="fins-adjusting-content">
                    <div class="fins-adjusting-text">
                        <?php the_content(); ?>
                    </div>
                    <ul class="fins-adjusting-images">
                        <li><img src="<?php bloginfo('template_directory'); ?>/_/img/surf-fins-adjustment-1.png" width="460" height="245" alt="Adjustable Fin System - Back" /></li>
                        <li><img src="<?php bloginfo('template_directory'); ?>/_/img/surf-fins-adjustment-2.png" width="460" height="245" alt="Adjustable Fin System - Forward" /></li>
                    </ul>
                </div>
                <div class="fins-adjusting-video">
                    <iframe src="http://player.vimeo.com/video/44423358?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="940" height="529" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                </div>
                <div class="clearfix"></div>
            </div><!-- END .section-content -->
        </section><!-- END .fins-adjusting -->
        <div class="bg1-top"></div>
        <section class="fins-candy bg1">
            <div class="section-content">
                <h2 class="orange-underline">Fin Candy</h2>
                <ul>
                    <li><img src="<?php bloginfo('template_directory'); ?>/_/img/surf-fins-board.png" width="460" height="380" alt="Waterboard with Fins" /></li>
                    <li><img src="<?php bloginfo('template_directory'); ?>/_/img/surf-fins-illustration.png" width="460" height="380" alt="Fin Illustration" /></li>
                </ul>
                <div class="clearfix"></div>
            </div><!-- END .section-content -->
        </section><!-- END .tech-minor -->
<?php get_footer(); ?>