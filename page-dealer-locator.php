<?php
/*
Template Name: Dealer Locator
*/
get_header();
?>

        <section class="tech-overview bg2">
            <div class="section-content">
                <h1><?php the_title(); ?></h1>
                <iframe src="http://hosted.where2getit.com/mervin/?LIBTECH=1" frameborder="0" height="700" width="920" scrolling="no" >You need a Frames Capable browser to view this content.</iframe>
                <h3>Online Dealers</h3>
                <?php the_content(); ?>
                <div id="tabs">
                    <ul class="clearfix">
                        <li><a href="#snowboarding">Snowboarding</a></li>
                        <li><a href="#nasing">NASing</a></li>
                        <li><a href="#skateboarding">Skateboarding</a></li>
                    </ul>
                    <div id="snowboarding">

<?php

$companiesArr = array();
$companiesArr[0]['name'] = 'Valsurf';
$companiesArr[0]['img_path'] = 'valSurf.jpg';
$companiesArr[0]['link'] = 'http://www.valsurf.com/manufacturers.php?manufacturerid=128';

$companiesArr[1]['name'] = 'Mountain Outhouse';
$companiesArr[1]['img_path'] = 'mtOuthouse.jpg';
$companiesArr[1]['link'] = 'http://www.mountainouthouse.com/brands/lib-tech';

$companiesArr[2]['name'] = 'Darkside';
$companiesArr[2]['img_path'] = 'darkside.jpg';
$companiesArr[2]['link'] = 'http://www.darksidesnowboards.com/store/lib-tech-m_26.html';

$companiesArr[3]['name'] = 'Dog Funk';
$companiesArr[3]['img_path'] = 'dogfunk.jpg';
$companiesArr[3]['link'] = 'http://www.dogfunk.com/lib-technologies?CMP_ID=PM_VL0079';

$companiesArr[4]['name'] = 'Eastern Boarder';
$companiesArr[4]['img_path'] = 'easternBoarder.jpg';
$companiesArr[4]['link'] = 'http://www.easternboarder.com/brands.cfm?Brand=Lib%20Tech';

$companiesArr[5]['name'] = 'Eternal Snow';
$companiesArr[5]['img_path'] = 'eternal.jpg';
$companiesArr[5]['link'] = 'http://www.eternalsnow.com/brands/lib-tech.html';

$companiesArr[6]['name'] = 'Buysnow';
$companiesArr[6]['img_path'] = 'buysnow.jpg';
$companiesArr[6]['link'] = 'http://www.buysnow.com/catalog/shopbybrand/libtech';

$companiesArr[7]['name'] = 'Revolution';
$companiesArr[7]['img_path'] = 'revolution.jpg';
$companiesArr[7]['link'] = 'http://www.revolutionsnowandskate.com/brands/Lib-Tech.html';

$companiesArr[8]['name'] = 'Pit Crew';
$companiesArr[8]['img_path'] = 'pitCrew.jpg';
$companiesArr[8]['link'] = 'http://www.pitcrewskateboards.com/shop/m-81-lib-tech.aspx?pagenum=1';

$companiesArr[9]['name'] = 'Backcountry';
$companiesArr[9]['img_path'] = 'backcountry.jpg';
$companiesArr[9]['link'] = 'http://www.backcountry.com/lib-technologies?CMP_ID=PM_VL0079';

$companiesArr[10]['name'] = 'Salty Peaks';
$companiesArr[10]['img_path'] = 'saltyPeaks.jpg';
$companiesArr[10]['link'] = 'http://www.saltypeaks.com/lib-tech';

$companiesArr[11]['name'] = 'Shoreline';
$companiesArr[11]['img_path'] = 'shoreline.jpg';
$companiesArr[11]['link'] = 'http://shorelineoftahoe.com/store/home.php?cat=1594';

$companiesArr[12]['name'] = 'Surf The Earth';
$companiesArr[12]['img_path'] = 'surfTheEarth.jpg';
$companiesArr[12]['link'] = 'http://shop.surftheearthsnowboards.com/browse.cfm/2,15.html';

$companiesArr[13]['name'] = 'Sno Con';
$companiesArr[13]['img_path'] = 'snowboardConnection.jpg';
$companiesArr[13]['link'] = 'http://www.snowboardconnection.com/brands.cfm?Brand=Libtech';

$companiesArr[14]['name'] = 'Tactics';
$companiesArr[14]['img_path'] = 'tactics.jpg';
$companiesArr[14]['link'] = 'http://www.tactics.com/lib-tech/snowboards';

$companiesArr[15]['name'] = 'US Outdoor';
$companiesArr[15]['img_path'] = 'usoutdoor.jpg';
$companiesArr[15]['link'] = 'http://www.usoutdoor.com/lib-technologies/';

$companiesArr[16]['name'] = 'Vertical Urge';
$companiesArr[16]['img_path'] = 'verticalurge.jpg';
$companiesArr[16]['link'] = 'http://store.verticalurge.com/lib-tech-snowboards.aspx';

$companiesArr[17]['name'] = 'Wave Rave';
$companiesArr[17]['img_path'] = 'waveRave.jpg';
$companiesArr[17]['link'] = 'http://www.waveravesnowboardshop.com/iStar.asp?a=3&amp;manufacturer=2445&amp;dept=1';

$companiesArr[18]['name'] = 'Zumiez';
$companiesArr[18]['img_path'] = 'zumiez.jpg';
$companiesArr[18]['link'] = 'http://www.zumiez.com/brands/lib-technology.html/';

$companiesArr[19]['name'] = 'EVO';
$companiesArr[19]['img_path'] = 'evo.jpg';
$companiesArr[19]['link'] = 'http://www.evo.com/shop/lib-tech.aspx ';

$companiesArr[20]['name'] = 'The House';
$companiesArr[20]['img_path'] = 'theHouse.jpg';
$companiesArr[20]['link'] = 'http://www.the-house.com/snbd-libtech.html';

$companiesArr[21]['name'] = 'Leroys';
$companiesArr[21]['img_path'] = 'leroys.jpg';
$companiesArr[21]['link'] = 'http://www.leroysboardshops.com/store/home.php?cat=1965&nbsp;';

$companiesArr[22]['name'] = 'Surfside';
$companiesArr[22]['img_path'] = 'surfside.jpg';
$companiesArr[22]['link'] = 'http://www.surfsidesports.com/ls-b-libtechsnow.aspx';

$companiesArr[23]['name'] = 'SHRD';
$companiesArr[23]['img_path'] = 'shrd.jpg';
$companiesArr[23]['link'] = 'http://www.shrd.com/lib-tech';

$companiesArr[24]['name'] = 'CCS';
$companiesArr[24]['img_path'] = 'ccs.jpg';
$companiesArr[24]['link'] = 'http://shop.ccs.com/Lib-Tech/_-_/N-1z140b7';

//Code to shuffle the companies starts here
$arrayKeysArr = array_keys($companiesArr);
shuffle($arrayKeysArr);
$randomizedCompaniesArr = array();
foreach($arrayKeysArr as $keyInt)
$randomizedCompaniesArr[] = $companiesArr[$keyInt];
//End shuffled code.  Outputted shuffled companies are in $randomizeCompaniesArr;
?>

<script>
     <!--
     function land(ref, target) {
          lowtarget = target.toLowerCase();
          if (lowtarget == "_self") {
               window.location = loc;
          } else {
               if (lowtarget == "_top") {
                    top.location = loc;
               } else {
                    if (lowtarget=="_blank") {
                         window.open(loc);
                    } else {
                         if (lowtarget=="_parent") {
                              parent.location = loc;
                         } else {
                              parent.frames[target].location = loc;
                         }
                    }
               }
          }
     }
     function jump(menu) {
          ref = menu.choice.options[menu.choice.selectedIndex].value;
          splitc = ref.lastIndexOf("*");
          target = "";
          if (splitc != -1) {
               loc = ref.substring(0,splitc);
               target = ref.substring(splitc+1,1000);
          } else {
               loc = ref;
               target = "_self";
          }
          if (ref != "") {
               land(loc,target);
          }
     }
     //-->
</script>
<div id="shopwrapper">
     <div id="shopright">  
          <div class="shoprow">
               <div class="container">
                    <h2>Authorized Online Dealers USA:</h2>

                    <?php $iInt = 1; foreach($randomizedCompaniesArr as $companyInfo): ?>

                    <div class="shopitem">
                         <a href="<?php echo $companyInfo['link']; ?>" title="Buy Lib Tech Snow Products from <?php echo $companyInfo['name']; ?>" target="_blank" >
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/<?php echo $companyInfo['img_path']; ?>" alt="<?php echo $companyInfo['name']; ?>" width="160" height="80" />
                         </a>
                    </div>

                    <?php $iInt++; endforeach; ?>

               </div><!-- container -->
          </div>
          <div class="shoprow">
               <div class="container">
                    <h2>Authorized Online Dealers Canada:</h2>
                    <div class="shopitem">
                         <a href="http://www.sourceboards.com/store/index.php?main_page=index&manufacturers_id=12" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/source.jpg" alt="Buy LIB TECH Products from The Source" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://store.thinkempire.com/en/featured_brand.php?brandprefix=LIB" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/empire.jpg" alt="Buy LIB TECH Products from Empire" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.alternative113.com/shop/index.php?categoryID=10" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/alternative113.jpg" alt="Buy LIB TECH Products from Alternative 113" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://evolutionwhistler.com/category/lib-tech-snowboards" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/evolution.jpg" alt="Buy LIB TECH Products from Evolution" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://shopnomads.com/lib%20tech" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/nomads.jpg" alt="Buy LIB TECH Products from Nomads" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.xtreme-adrenaline.com/Lib Tech/" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/xtreme.jpg" alt="Buy LIB TECH Products from Xtreme Adrenaline Boardshop" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://boardroomshop.com/brand/Lib-Tech/" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/the-boardroom.jpg" alt="Buy LIB TECH Products from The Boardroom" width="160" height="80" border="0" />
                         </a>
                    </div>
               </div><!-- container -->
          </div>
          <div class="shoprow">
               <div class="container">
                    <h2>Authorized Online Dealers Europe:</h2>
                    <div class="shopitem">
                         <a href="http://www.blue-tomato.com/en/Lib-Tech/brand.bto?brand=679" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/blueTomatoe.jpg" alt="Buy LIB TECH Products from Blue Tomatoe" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.hot-zone.tv/en_GB/index.php?screen=dstore.shop.productsofbrand&amp;57=Libtech" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/hotzone.jpg" alt="Buy LIB TECH Products from Hot Zone" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.surfinsel.eu/advanced_search_result.php?keywords=libtech" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/surfinsel.jpg" alt="Buy LIB TECH Products from Surfinsel" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.moreboards.com/libtech/view/category/all" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/moreboards.jpg" alt="Buy LIB TECH Products from Moreboards" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.ridersheaven.com/libtech" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/ridersHeaven.jpg" alt="Buy LIB TECH Products from Rider's Heaven" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.zerogchx.com/Lib_Tech,92040283,m.html" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/zeroG.jpg" alt="Buy LIB TECH Products from Zero G" width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.revert.nl/brand/261x0x0x0x0/lib-tech.html" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-snow/revert-95.jpg" alt="Buy LIB TECH Products from Revert '95" width="160" height="80" border="0" />
                         </a>
                    </div>
               </div><!-- container -->
          </div>
     </div>
</div>

                    </div>
                    <div id="nasing">

<?php

$companiesArr = array();
$companiesArr[0]['name'] = 'Shoreline';
$companiesArr[0]['img_path'] = 'shoreline.jpg';
$companiesArr[0]['link'] = 'http://shorelineoftahoe.com/store/home.php?cat=1596';

$companiesArr[1]['name'] = 'REI';
$companiesArr[1]['img_path'] = 'rei.jpg';
$companiesArr[1]['link'] = 'http://www.rei.com/search?cat=40004320&jxBrand=Lib&hist=cat%2C40004320%3ASkis^jxBrand%2CLib';

$companiesArr[2]['name'] = 'Bergs';
$companiesArr[2]['img_path'] = 'bergs.jpg';
$companiesArr[2]['link'] = 'http://www.bergsskishop.com/search_results.php?id_cat=110&id_manf=1165&manf_name=Lib%20Tech';

$companiesArr[3]['name'] = 'Backcountry';
$companiesArr[3]['img_path'] = 'backcountry.jpg';
$companiesArr[3]['link'] = 'http://www.backcountry.com/lib-technologies?CMP_ID=PM_VL0079';

$companiesArr[4]['name'] = 'The House';
$companiesArr[4]['img_path'] = 'theHouse.jpg';
$companiesArr[4]['link'] = 'http://www.the-house.com/skis-lib-tech.html';

$companiesArr[5]['name'] = 'Salty Peaks';
$companiesArr[5]['img_path'] = 'saltyPeaks.jpg';
$companiesArr[5]['link'] = 'http://www.saltypeaks.com/brands/13/260/Lib-Tech-Skis-Narrow-A$$-Snowboards.html';

$companiesArr[6]['name'] = 'US Outdoor';
$companiesArr[6]['img_path'] = 'usoutdoor.jpg';
$companiesArr[6]['link'] = 'http://www.usoutdoor.com/lib-technologies/alpine-skis/';


//Code to shuffle the companies starts here
$arrayKeysArr = array_keys($companiesArr);
shuffle($arrayKeysArr);

$randomizedCompaniesArr = array();
foreach($arrayKeysArr as $keyInt)
     $randomizedCompaniesArr[] = $companiesArr[$keyInt];
//End shuffled code.  Outputted shuffled companies are in $randomizeCompaniesArr;
?>

<script>
     <!--
     function land(ref, target) {
          lowtarget = target.toLowerCase();
          if (lowtarget == "_self") {
               window.location = loc;
          } else {
               if (lowtarget == "_top") {
                    top.location = loc;
               } else {
                    if (lowtarget=="_blank") {
                         window.open(loc);
                    } else {
                         if (lowtarget=="_parent") {
                              parent.location = loc;
                         } else {
                              parent.frames[target].location = loc;
                         }
                    }
               }
          }
     }
     function jump(menu) {
          ref = menu.choice.options[menu.choice.selectedIndex].value;
          splitc = ref.lastIndexOf("*");
          target = "";
          if (splitc != -1) {
               loc = ref.substring(0,splitc);
               target = ref.substring(splitc+1,1000);
          } else {
               loc = ref;
               target = "_self";
          }
          if (ref != "") {
               land(loc,target);
          }
     }
     //-->
</script>
<div id="shopwrapper">
     <div id="shopright">
          <div class="shoprow">
               <div class="container">
                    <h2>Authorized Online Dealers USA:</h2>

                    <?php $iInt = 1; foreach($randomizedCompaniesArr as $companyInfo): ?>

                    <div class="shopitem">
                         <a href="<?php echo $companyInfo['link']; ?>" title="Buy Lib Tech NAS Skis from <?php echo $companyInfo['name']; ?>" target="_blank" >
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-nas/<?php echo $companyInfo['img_path']; ?>" alt="<?php echo $companyInfo['name']; ?>" width="160" height="80" />
                         </a>
                    </div>

                    <?php $iInt++; endforeach; ?>

               </div><!-- container -->
          </div><!-- end shoprow -->
          <div class="shoprow">
               <div class="container">
                    <h2>Authorized Online Dealers Canada:</h2>
                    <div class="shopitem">
                         <a href="http://evolutionwhistler.com/category/lib-tech-nas" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-nas/evolution.jpg" alt="Buy LIB TECH Products from " width="160" height="80" border="0" />
                         </a>
                    </div>
               </div><!-- container -->
          </div><!-- end shoprow -->
          <div class="shoprow">
               <div class="container">
                    <h2>Authorized Online Dealers Europe:</h2>
                    <div class="shopitem">
                         <a href="http://www.blue-tomato.com/de/search.bto?query=libtech+nas&amp;searched=y" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-nas/blueTomatoe.jpg" alt="Buy LIB TECH Products from " width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.moreboards.com/libtech/view/category/all/147/Skis" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-nas/moreboards.jpg" alt="Buy LIB TECH Products from " width="160" height="80" border="0" />
                         </a>
                    </div>
                    <div class="shopitem">
                         <a href="http://www.zerogchx.com/Lib_Tech,92040283,m.html" target="_blank">
                              <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-nas/zeroG.jpg" alt="Buy LIB TECH Products from " width="160" height="80" border="0" />
                         </a>
                    </div>
               </div><!-- container -->
          </div><!-- end shoprow -->
     </div><!-- end shop right -->
</div><!-- end shop wrapper -->

                    </div>
                    <div id="skateboarding">

<?php

$companiesArr = array();
$companiesArr[0]['name'] = 'Tactics';
$companiesArr[0]['img_path'] = 'tactics.jpg';
$companiesArr[0]['link'] = 'http://www.tactics.com/lib-tech/skate';

$companiesArr[1]['name'] = 'Salty Peaks';
$companiesArr[1]['img_path'] = 'saltyPeaks.jpg';
$companiesArr[1]['link'] = 'http://www.saltypeaks.com/browse/22/13/Lib-Tech-Skateboard-Decks.html';

$companiesArr[2]['name'] = 'The House';
$companiesArr[2]['img_path'] = 'theHouse.jpg';
$companiesArr[2]['link'] = 'http://www.the-house.com/skate-lib-tech-skateboards.html';

//Code to shuffle the companies starts here
$arrayKeysArr = array_keys($companiesArr);
shuffle($arrayKeysArr);

$randomizedCompaniesArr = array();
foreach($arrayKeysArr as $keyInt)
    $randomizedCompaniesArr[] = $companiesArr[$keyInt];
//End shuffled code.  Outputted shuffled companies are in $randomizeCompaniesArr;
?>

<script>
     <!--
     function land(ref, target) {
          lowtarget = target.toLowerCase();
          if (lowtarget == "_self") {
               window.location = loc;
          } else {
               if (lowtarget == "_top") {
                    top.location = loc;
               } else {
                    if (lowtarget=="_blank") {
                         window.open(loc);
                    } else {
                         if (lowtarget=="_parent") {
                              parent.location = loc;
                         } else {
                              parent.frames[target].location = loc;
                         }
                    }
               }
          }
     }
     function jump(menu) {
          ref = menu.choice.options[menu.choice.selectedIndex].value;
          splitc = ref.lastIndexOf("*");
          target = "";
          if (splitc != -1) {
               loc = ref.substring(0,splitc);
               target = ref.substring(splitc+1,1000);
          } else {
               loc = ref;
               target = "_self";
          }
          if (ref != "") {
               land(loc,target);
          }
     }
     //-->
</script>
<div id="shopwrapper">
    <div id="shopright">
        <div class="shoprow">
            <div class="container">
                <h2>Authorized Online Dealers USA:</h2>

                <?php $iInt = 1; foreach($randomizedCompaniesArr as $companyInfo): ?>

                <div class="shopitem">
                    <a href="<?php echo $companyInfo['link']; ?>" title="Buy Lib Tech Skateboards from <?php echo $companyInfo['name']; ?>" target="_blank" >
                        <img src="<?php bloginfo('template_directory'); ?>/_/img/online-dealers-skate/<?php echo $companyInfo['img_path']; ?>" alt="<?php echo $companyInfo['name']; ?>" width="160" height="80" />
                    </a>
                </div>

                <?php $iInt++; endforeach; ?>

            </div><!-- container -->
        </div><!-- end shoprow -->
    </div><!-- end shopright -->
</div><!-- end shop wrapper -->



                    </div>
                </div>

            </div><!-- END .section-content -->
        </section><!-- END .tech-major -->

<?php get_footer(); ?>