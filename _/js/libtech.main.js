/*

    Lib Tech - lib-tech.com
    VERSION 2.0
    AUTHOR brian.behrens@mervin.com

    DEPENDENCIES:
    - jQuery v1.10.2
    - Modernizr 2.6.2
    - Shopatron API v2.2.0
    - FitVids 1.0

*/

var LIBTECH = LIBTECH || {};

LIBTECH.main = {
    config: {
        menuState: 'closed'
    },
    init: function () {
        var self = this;
        self.shopatronInit(); // init shopatron JS
        self.regionSelectorInit(); // init the region selector
        self.sportCookieInit(); // init/check the sport cookie
        self.searchInit(); // init header search bar
        $(window).load(function(){
            self.menuInit(); // init main menu
        });
        // check body class and init proper class
        if ($('body').hasClass('home')) {
            self.homeInit();
        } else if ($('body').hasClass('page-template-page-home-sport-php')) {
            self.homeSportInit();
        } else if ($('body').hasClass('page-template-page-overview-products-php')) {
            self.productOverviewInit();
        } else if ($('body').hasClass('single-libtech_snowboards') || $('body').hasClass('single-libtech_nas') || $('body').hasClass('single-libtech_skateboards') || $('body').hasClass('single-libtech_apparel') || $('body').hasClass('single-libtech_accessories') || $('body').hasClass('single-libtech_luggage') || $('body').hasClass('single-libtech_outerwear') || $('body').hasClass('single-libtech_bindings')) {
            self.productDetailInit();
        } else if ($('body').hasClass('page-template-page-technology-sport-php')) {
            self.technologyDetailInit();
        } else if ($('body').hasClass('page-template-page-environmental-php')) {
            self.environmentalInit();
        } else if ($('body').hasClass('single-libtech_team_snow') || $('body').hasClass('single-libtech_team_nas') || $('body').hasClass('single-libtech_team_skate')) {
            self.teamDetailsInit();
        } else if ($('body').hasClass('blog') || $('body').hasClass('search') || $('body').hasClass('archive') || $('body').hasClass('error404')) {
            self.blogInit();
        } else if ($('body').hasClass('single-post')) {
            self.blogInit();
            self.blogSingleInit();
        } else if ($('body').hasClass('page-template-page-support-faq-php')) {
            self.faqInit();
        } else if ($('body').hasClass('page-template-page-snowboard-builder-php') || $('body').hasClass('page-template-page-bb-cart-test-php')) {
            LIBTECH.snowboardbuilder.init();
        }
    },
    shopatronInit: function () {
        var self, lang, regionCookie, shopAPIKey, shopAPIKeyString;
        self = this;
        // check the language on the cookie
        regionCookie = self.utilities.cookie.getCookie('libtech_region');
        if (regionCookie != null || regionCookie != "") {
            lang = regionCookie;
        }
        if (lang) {
            if (lang === 'ca') {
                shopAPIKey = "tqwzzawb"; // CA Key
                // set shopatron footer links for Canada
                $('#link-privacy').attr('href', 'http://libtech-ca.shptron.com/k/privacy');
                $('#link-policies').attr('href', 'http://libtech-ca.shptron.com/k/policies');
                $('#link-login').attr('href', 'http://libtech-ca.shptron.com/account/?mfg_id=4374.5&language_id=1');
                $('#link-safety').attr('href', 'http://libtech-ca.shptron.com/k/security');
                $('#link-returns').attr('href', 'http://libtech-ca.shptron.com/k/policies#Returns');
                $('#link-ordering').attr('href', 'http://libtech-ca.shptron.com/k/ordering');
                // set my account in header for Canada
                $('header .nav-utility .link-account a').attr('href', 'http://libtech-ca.shptron.com/account/?mfg_id=4374.5&language_id=1');
            } else if (lang === 'int') {
                shopAPIKey = "95tuotu0"; // International key
                // set shopatron footer links for International
                $('#link-privacy').attr('href', 'http://libtech-int.shptron.com/k/privacy');
                $('#link-policies').attr('href', 'http://libtech-int.shptron.com/k/policies');
                $('#link-login').attr('href', 'http://libtech-int.shptron.com/account/?mfg_id=4374.5&language_id=1');
                $('#link-safety').attr('href', 'http://libtech-int.shptron.com/k/security');
                $('#link-returns').attr('href', 'http://libtech-int.shptron.com/k/policies#Returns');
                $('#link-ordering').attr('href', 'http://libtech-int.shptron.com/k/ordering');
                // set my account in header for International
                $('header .nav-utility .link-account a').attr('href', 'http://libtech-int.shptron.com/account/?mfg_id=4374.5&language_id=1');
            } else {
                shopAPIKey = "rbb5pr37"; // US Key
            }
        } else {
            shopAPIKey = "rbb5pr37"; // US Key
        }
        shopAPIKeyString = '{"apiKey": "' + shopAPIKey + '"}';
        // add key to the body of the page for shopatron's api to grab via ID
        $("body").append('<div id="shopatronCart">' + shopAPIKeyString + '</div>');
        // request the shopatron api
        $.ajax({
            url: "//mediacdn.shopatron.com/media/js/product/shopatronAPI-2.2.0.min.js",
            dataType: "script",
            success: function (data) {
                // request other aditional api for quick cart and shopping cart
                $.ajax({
                    url: "//mediacdn.shopatron.com/media/js/product/shopatronJST-2.2.0.min.js",
                    dataType: "script",
                    success: function (data) {
                        // init the shopatron page elements
                        self.quickCartInit();
                        if ($('body').hasClass('page-template-page-shopping-cart-php')) {
                            self.shoppingCartInit();
                        }
                    }
                });
            }
        });
    },
    menuInit: function () {
        var self, marginClosed, marginOpen;
        self = this;
        marginClosed = $(".nav-sub-wrapper").height()*-1 + 10;
        marginOpen = -20;
        // remove old handlers
        $(".nav-sub-wrapper .mobile-btn").unbind('click');
        $(window).off('resize.mainMenu');
        // close menu by default
        if (self.utilities.getMediaWidth() < 600) {
            $('.nav-sub-wrapper').stop().animate({ marginTop: marginClosed }, { duration: 500, easing: 'swing' });
            self.config.menuState = 'closed';
        }
        // mobile menu
        $(".nav-sub-wrapper .mobile-btn").click(function (e) {
            e.preventDefault();
            if (self.config.menuState == 'closed') {
                $('.nav-sub-wrapper').stop().animate({ marginTop: marginOpen }, { duration: 500, easing: 'swing' });
                self.config.menuState = 'open';
            } else {
                $('.nav-sub-wrapper').stop().animate({ marginTop: marginClosed }, { duration: 500, easing: 'swing' });
                self.config.menuState = 'closed';
            }
        });
        // reinit menu on resize
        $(window).on('resize.mainMenu', function() {
            if (self.utilities.getMediaWidth() < 600) {
                self.menuInit();
            } else {
                $('.nav-sub-wrapper').stop();
                $('.nav-sub-wrapper').css('margin-top', '-20px');
            }
        });
    },
    searchInit: function () {
        $('header .nav-utility .search a').click(function (e) {
            e.preventDefault();
            e.stopPropagation(); // kill even from firing further
            $('#header-search').toggleClass('visible');
            $('#header-search .text-input').focus();
            $('#header-search .text-input').val('');
            // listen for escape key
            $(document).keyup(function (e) {
                if (e.keyCode == 27) {
                    $('#header-search').toggleClass('visible');
                    // kill event listeners
                    $(document).unbind('keyup');
                    $(document).unbind('click');
                    $('#header-search').unbind('click');
                }
            });
            // don't hide if clicked within search area
            $('#header-search').click(function (e) {
                e.stopPropagation();
            });
            // hide if clicked anywhere outside search area
            $(document).click(function() {
                $('#header-search').toggleClass('visible');
                // kill event listeners
                $(document).unbind('keyup');
                $(document).unbind('click');
                $('#header-search').unbind('click');
            });
        });
    },
    regionSelectorInit: function () {
        // check language cookie on load
        var self, lang, regionCookie;
        self = this;

        regionCookie = self.utilities.cookie.getCookie('libtech_region');
        
        if (regionCookie != null || regionCookie != "") {
            lang = regionCookie;
        }

        if (lang) {
            if (lang === 'ca') {
                $(".country-ca").addClass("selected");
                $("body").removeClass("international");
            } else if (lang === 'int') {
                $("body").addClass("international");
                $(".country-int").addClass("selected");
            } else {
                $(".country-us").addClass("selected");
                $("body").removeClass("international");
            }
        } else {
            if (navigator.cookieEnabled === true) {
                // if no region cookie has been set, open selector if on product page
                if ($('body').hasClass('page-template-page-snowboard-builder-php') || $('body').hasClass('page-template-page-shopping-cart-php') || $('body').hasClass('page-template-page-overview-products-php') || $('body').hasClass('single-libtech_snowboards') || $('body').hasClass('single-libtech_nas') || $('body').hasClass('single-libtech_skateboards') || $('body').hasClass('single-libtech_apparel') || $('body').hasClass('single-libtech_accessories') || $('body').hasClass('single-libtech_luggage') || $('body').hasClass('single-libtech_outerwear')) {
                    self.regionSelectorOverlayInit();
                }
                // pick us by default
                self.utilities.cookie.setCookie('libtech_region', 'us', 60);
                $(".country-us").addClass("selected");
            } else {
                // cookies are disabled
                $(".country-us").addClass("selected");
            }
        }
        // add click events
        $(".region-selector").click(function (e) {
            e.preventDefault();
            e.stopPropagation(); // kill even from firing further
            if (navigator.cookieEnabled === false) {
                alert('Enable cookies in your browser in order to select your region.');
            } else {
                self.regionSelectorOverlayInit();
            }
        });
    },
    regionSelectorOverlayInit: function () {
        var self = this;
        $('#region-selector').toggleClass('visible');
        // add click events
        $("#region-selector .us").click(function (e) {
            e.preventDefault();
            self.utilities.cookie.setCookie('libtech_region', 'us', 60);
            window.location.reload();
        });
        $("#region-selector .ca").click(function (e) {
            e.preventDefault();
            self.utilities.cookie.setCookie('libtech_region', 'ca', 60);
            window.location.reload();
        });
        $("#region-selector .int").click(function (e) {
            e.preventDefault();
            self.utilities.cookie.setCookie('libtech_region', 'int', 60);
            window.location.reload();
        });
        // listen for escape key
        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                $('#region-selector').toggleClass('visible');
                // kill event listeners
                $(document).unbind('keyup');
                $(document).unbind('click');
                $('#region-selector .choose-region ul li').unbind('click');
            }
        });
        // don't hide if clicked within region selector
        $('#region-selector .choose-region ul li').click(function (e) {
            e.stopPropagation();
        });
        // hide if clicked anywhere outside region selector
        $(document).click(function() {
            $('#region-selector').toggleClass('visible');
            // kill event listeners
            $(document).unbind('keyup');
            $(document).unbind('click');
            $('#region-selector .choose-region ul li').unbind('click');
        });
    },
    sportCookieInit: function () {
        var self, sport;
        self = this;
        sport = "";
        if (navigator.cookieEnabled === true) {
            /* if cookies are enabled, make sure the right cookie gets set
               this is needed for pages that get cached
               to notify non cached pages where we came from */
            if ($('body').hasClass('ski')) {
                sport = "ski";
            } else if ($('body').hasClass('surf')) {
                sport = "surf";
            } else if ($('body').hasClass('skate')) {
                sport = "skate";
            } else {
                sport = "snow";
            }
            self.utilities.cookie.setCookie('libtech_sport', sport, 30);
        }
    },
    homeInit: function () {
        var self, instagramUsername, facebookUsername;
        self = this;
        self.utilities.featuredSliderInit();
    },
    homeSportInit: function () {
        var self = this;
        // set up large featured images/video
        self.utilities.featuredSliderInit();
        // set up product slider
        var slider = $('.product-slider .bxslider').bxSlider({
            slideWidth: 220,
            minSlides: 2,
            maxSlides: 8,
            slideMargin: 10,
            auto: true,
            autoHover: true,
            speed: 500,
            controls: true,
            pager: false,
            mode: 'horizontal',
            moveSlides: 2,
            infiniteLoop: false,
            hideControlOnEnd: true
        });
        // render social content grid items
        self.utilities.socialContentGridItemsInit();
    },
    productOverviewInit: function () {
        var self, slider, productListing;
        self = this;
        slider = $('.featured-product-slider .bxslider').bxSlider({
            auto: true,
            autoHover: true,
            speed: 800,
            randomStart: false,
            slideMargin: 20,
            controls: true,
            pager: false,
            mode: 'horizontal',
            adaptiveHeight: false,
            onSliderLoad: function (currentIndex) {
                $('.featured-product-slider .bxslider > li').eq(currentIndex+1).addClass('active');
            },
            onSlideBefore: function (slideElement, oldIndex, newIndex){
                $('.featured-product-slider .bxslider > li').removeClass('active');
                slideElement.addClass('active');
                if(newIndex == 0) { // run fix for duplicate slides at begining and end
                    $('.featured-product-slider .bxslider > li').eq($('.featured-product-slider .bxslider > li').length - 1).addClass('active');
                }
            }
        });
        // BEGIN SETTING UP ISOTOPE
        productListing = $('.product-overview .product-listing');
        // adjust initial item widths
        setWidths();
        // set up initial settings
        productListing.isotope({
            itemSelector : '.product-item',
            resizable: false, // turn off because it's responsive
            layoutMode: 'fitRows',
            fitRows: { columnWidth: getUnitWidth() },
            getSortData : {
                price : function ( $elem ) {
                    return parseFloat( $elem.find('.price p span').text().replace("$","") );
                }
            }
        });
        // on window load run layout again to fix image heights
        $(window).load(function(){
            productListing.isotope('reLayout');
            // adjust width to be correct
            $('.product-filtering > li.filters').each( function () {
                var widthTotal = 0;
                $(this).find('ul > li').each( function () {
                    widthTotal += $(this).outerWidth();
                });
                if(widthTotal > 646) {
                    widthTotal = 646;
                }
                if($('body').hasClass('ski') || $('body').hasClass('skate')) {
                    if(widthTotal > 316) {
                        widthTotal = 316;
                    }
                }
                $(this).find('ul').width(widthTotal);
            });
        });
        // update columnWidth on window resize
        $(window).smartresize(function () {
            // set the widths of items
            setWidths();
            // reinit isotop with new column width
            productListing.isotope({
                fitRows: { columnWidth: getUnitWidth() }
            });
        });
        // get new width of each item based on browser width
        function getUnitWidth() {
            var width, windowWidth;
            windowWidth = self.utilities.getMediaWidth();
            if (windowWidth < 600) {
                width = productListing.width() / 2;
            } else if (windowWidth < 768) {
                width = productListing.width() / 3;
            } else if (windowWidth < 980) {
                width = productListing.width() / 4;
            } else {
                width = productListing.width() / 5;
            }
            width = Math.floor(width);
            return width;
        }
        // set the widths of each item
        function setWidths() {
            var unitWidth = getUnitWidth();
            productListing.children(".product-item").css({ width: unitWidth });
        }
        
        // filter items when filter link is clicked
        $('.product-filtering > li.filters > ul > li').click( function() {
            var target, selector, selectorASC, filterItems, filterList;
            target = $(this);
            target.toggleClass('selected'); // add or remove selected class
            if (target.attr('data-filter')) { // if target clicked is a filter option vs sort
                self.utilities.filterList(productListing);
            } else { // we are sorting data now, not filtering
                if ( target.hasClass('selected') ) {
                    // grab all sort specific items and deselect them
                    $('.product-filtering > li.filters > ul > li[data-sort]').each( function() {
                        var sortItem = $(this);
                        sortItem.removeClass('selected');
                    });
                    // select the one that was clicked again
                    target.addClass('selected');
                    // figure out what to sort by
                    selector = target.attr('data-sort');
                    // determine sort order
                    if (target.attr('data-sort-asc') == "true") {
                        selectorASC = true;
                    } else {
                        selectorASC = false;
                    }
                    // apply sorting
                    productListing.isotope({ sortBy : selector, sortAscending : selectorASC });
                } else {
                    // reset sorting if none selected
                    productListing.isotope({ sortBy : "original-order", sortAscending : true });
                }
            }
            // UPDATE FILTERS REMOVE FEATURES
            $('.product-filtering > li.filters').each( function() {
                // Check to see which filter groups have filters set
                var filterGroup, isFilterSet;
                filterGroup = $(this);
                isFilterSet = false;
                filterGroup.find('ul > li').each( function() {
                    if ($(this).hasClass('selected')) {
                        isFilterSet = true;
                    }
                });
                if (isFilterSet == true) { // if filter set has items selected add remove features
                    filterGroup.find('.selected-items').each( function() {
                        $(this).html('Remove');
                        $(this).click( function () {
                            $(this).html('Select');
                            filterGroup.find('ul > li').each( function() {
                                $(this).removeClass('selected');
                            });
                            self.utilities.filterList(productListing);
                            // check if sort needs to be reset
                            if (filterGroup.find('ul > li[data-sort]').length > 0) {
                                productListing.isotope({ sortBy : "original-order", sortAscending : true });
                            }
                        });
                    });
                } else { // if filter does not have selected reset
                    filterGroup.find('.selected-items').each( function() {
                        $(this).html('Select');
                        $(this).unbind('click');
                    });
                }
            });
            return false;
        });
    },
    productDetailInit: function () {
        var self, slider, thumbSlider;
        self = this;
        $(".product-tech-major").fitVids();
        $(".product-video").fitVids();

        var techConstructionSlider = $('.product-tech-construction ul').bxSlider({
            video: true,
            useCSS: false,
            auto: true,
            autoHover: true,
            speed: 500,
            controls: true,
            pager: false,
            mode: 'horizontal'
        });
        // navigation when displayed below 600px (mobile phone)
        $('.product-extras .product-mobile-nav ul li a').click(function (e) {
            e.preventDefault();
            // update extras display
            $('.product-extras').removeClass('info specs tech');
            $('.product-extras').addClass($(this).attr('id'));
            // update video top border display
            $('.product-video-top').removeClass('info specs tech');
            $('.product-video-top').addClass($(this).attr('id'));
            // update video display
            $('.product-video').removeClass('info specs tech');
            $('.product-video').addClass($(this).attr('id'));
            // update nav item state
            $('.product-extras .product-mobile-nav ul li a').each( function() {
                $(this).removeClass('selected');
            });
            $(this).addClass('selected');
            // reload slider to fix responsive bug when visible
            if($('body').hasClass('single-libtech_skateboards') && $(this).attr('id') == 'tech') {
                techConstructionSlider.reloadSlider();
            }
        });
        
        // check for browser resize and see if desktop zoom should occur
        $(window).on('resize.productZoom', function() {
            if (self.utilities.getMediaWidth() >= 600) { // if not mobile, trigger zoom on click
                $('.product-images #image-list li a').on('click.productZoom', function (e) {
                    e.preventDefault();
                    initZoom($(this).parent().index());
                });
            } else { // if mobile, do not zoom on click
                $('.product-images #image-list li a').off('click.productZoom');
            }
        });
        $(window).resize(); // trigger resize to init features
        // add product image zoom features
        function initZoom(clickIndex) {
            $('.product-zoom').addClass('show');
            $('.product-details').addClass('hide');
            // add close event
            $('.product-zoom .zoom-close').on('click.productZoom', function (e) {
                e.preventDefault();
                uninitZoom();
            });
            // get thumbnail images from page
            var thumbnailList = $('#image-list-thumbs').html();
            $('#zoom-thumbnails').html(thumbnailList);
            // reset style and classes on thumbnails
            $('#zoom-thumbnails li').attr('style', '');
            $('#zoom-thumbnails li a').attr('class', '');
            // listen for clicks on thumbnails to load proper image
            $('#zoom-thumbnails li a').on('click.productZoom', function (e) {
                e.preventDefault();
                // change source of zoom image
                $('.product-zoom .zoom-image img').attr('src', $(this).attr('href'));
                // remove active class from all and add to selected
                $('#zoom-thumbnails li a').each( function() {
                    $(this).removeClass('active');
                });
                $(this).addClass('active');
                // update title above product
                $('.product-zoom .zoom-title').html($(this).children('img').attr('alt'));
            });
            // trigger click of correct indexed image
            $('#zoom-thumbnails li a:eq(' + clickIndex + ')').click();
        }
        // remove product image zoom features
        function uninitZoom() {
            // kill listeners
            $('.product-zoom .zoom-close').off('click.productZoom');
            $('#zoom-thumbnails li a').off('click.productZoom');
            // swap display
            $('.product-zoom').removeClass('show');
            $('.product-details').removeClass('hide');
        }
        // grab view all specs link and turn into lightbox
        $('.product-specs a.view-all-specs').magnificPopup({
            type: 'ajax',
            disableOn: '768',
            closeOnBgClick: false
        });

        // assign the slider to a variable
        slider = $('#image-list').bxSlider({
            controls: false,
            mode: 'fade',
            pagerCustom: '#image-list-thumbs'
        });

        thumbSlider = $('#image-list-thumbs').bxSlider({
            slideWidth: 100,
            minSlides: 2,
            maxSlides: 8,
            slideMargin: 10,
            controls: true,
            pager: false,
            mode: 'horizontal',
            moveSlides: 2,
            infiniteLoop: false,
            hideControlOnEnd: true
        });
        // CHECK WHICH PRODUCT WE'RE ON AND RUN THE CORRECT CODE
        if( $('body').hasClass('single-libtech_outerwear') || $('body').hasClass('single-libtech_accessories') || $('body').hasClass('single-libtech_apparel') ){
            // FOR PRODCUTS WITH MORE THAN 1 VARTIATION SELECTION
            // select field for color
            $('#product-variation-color').change(function () {
                // select the correct image
                var colorValue, colorThumbs;
                colorValue = $(this).val();
                colorThumbs = $('.image-list-thumbs li a[data-color="' + colorValue + '"]');
                if (colorThumbs.length > 0) {
                    $(colorThumbs[0]).click();
                }
                // kill alert color, if it's added
                $('#product-variation-color').removeClass('alert');
            });
            // select field for size
            $('#product-variation-size').change(function () {
                var sizeValue, colorValue, colorOptions, colorArray;
                sizeValue = $(this).val();
                // build color list based on size
                colorValue = $('#product-variation-color').val();
                colorOptions = '<option value="-1">Select Color</option>';
                colorArray = [];
                $.each(productArray, function (key, value) {
                    // check if size already exists
                    var inArrayCheck =  $.inArray(value.color, colorArray);
                    // add available options
                    if ((sizeValue === "-1" && value.available === "Yes" && inArrayCheck === -1) || (sizeValue === value.size && value.available === "Yes" && inArrayCheck === -1)) {
                        if (colorValue === value.color) {
                            colorOptions += '<option value="' + value.color + '" selected="selected">' + value.color + '</option>';
                        } else {
                            colorOptions += '<option value="' + value.color + '">' + value.color + '</option>';
                        }
                        colorArray.push(value.color);
                    }
                });
                // render out html
                $('#product-variation-color').html(colorOptions);
                // kill alert color, if it's added
                $('#product-variation-size').removeClass('alert');
            });
            // add to cart api btn
            $('a.add-to-cart').click(function (e) {
                e.preventDefault();
                var productSize, productColor, productSKU;
                // check size selection
                productSize = $('#product-variation-size').val();
                if (productSize === "-1") {
                    // add alert to class
                    $('#product-variation-size').addClass('alert');
                }
                // check color selection
                productColor = $('#product-variation-color').val();
                if (productColor === "-1") {
                    $('#product-variation-color').addClass('alert');
                }
                // check if either are -1, and return if they are
                if (productSize === "-1" || productColor === "-1") {
                    return;
                }
                // find the SKU in the product array
                productSKU = "";
                $.each(productArray, function (key, value) {
                    if (productSize === value.size && productColor === value.color) {
                        productSKU = value.sku;
                    }
                });
                if (productSKU === "") {
                    $('.product-buy .cart-failure').addClass('visible').removeClass('hidden');
                    return;
                }
                // hide add to cart, show loading while request is made
                $('.product-buy ul li.loading').addClass('visible').removeClass('hidden');
                $('.product-buy ul li.cart-button').addClass('hidden').removeClass('visible');
                // call shopatron's api
                Shopatron.addToCart({
                    quantity: '1', // Optional: Defaults to 1 if not set
                    partNumber: productSKU, // Required: This is the product that will be added to the cart.
                    itemOptions: {
                        'Color': productColor,
                        'Size': productSize
                    }
                }, {
                    // All event handlers are optional
                    success: function (data, textStatus) {
                        $('.product-buy .cart-success').removeClass('hidden');
                        $('.product-buy .cart-failure').addClass('hidden');
                    },
                    error: function (textStatus, errorThrown) {
                        $('.product-buy .cart-failure').removeClass('hidden');
                        $('.product-buy .cart-success').addClass('hidden');
                    },
                    complete: function (textStatus) {
                        $('.product-buy ul li.loading').addClass('hidden');
                        $('.product-buy ul li.cart-button').removeClass('hidden');
                    }
                });
            });
        } else {
            // FUNCTIONALITY FOR PRODUCTS WITH ONLY 1 SELECTION
            $('#product-variation').change(function () {
                // display the correct image matching selected option
                var productSKU, productSKUs, productThumbs;
                productSKU = $(this).val();
                productSKUs = [];
                if (productSKU != "-1") {
                    $('#product-variation').removeClass('alert');
                }
                $(".image-list-thumbs li a").each(function(){
                    var skus = $(this).attr('data-sku');
                    productSKUs.push([$(this), skus]);
                });
                for (var i=0; i < productSKUs.length; i++) {
                    var skus = productSKUs[i][1];
                    if (skus.indexOf(productSKU) != -1) {
                        productSKUs[i][0].click();
                    }
                }
            });
            // add to cart api btn
            $('a.add-to-cart').click(function (e) {
                e.preventDefault();
                var productSKU;
                // check size selection
                productSKU = $('#product-variation').val();
                if (productSKU === "-1") {
                    // add alert to class
                    $('#product-variation').addClass('alert');
                    return;
                }
                // hide add to cart, show loading while request is made
                $('.product-buy ul li.loading').removeClass('hidden');
                $('.product-buy ul li.cart-button').addClass('hidden');
                // make sure to hide cart messages on each add
                $('.product-buy .cart-success').addClass('hidden');
                $('.product-buy .cart-failure').addClass('hidden');
                // call shopatron's api
                Shopatron.addToCart({
                    quantity: '1', // Optional: Defaults to 1 if not set
                    partNumber: productSKU // Required: This is the product that will be added to the cart.
                }, {
                    // All event handlers are optional
                    success: function (data, textStatus) {
                        $('.product-buy .cart-success').removeClass('hidden');
                        $('.product-buy .cart-failure').addClass('hidden');
                    },
                    error: function (textStatus, errorThrown) {
                        $('.product-buy .cart-failure').removeClass('hidden');
                        $('.product-buy .cart-success').addClass('hidden');
                    },
                    complete: function (textStatus) {
                        $('.product-buy ul li.loading').addClass('hidden');
                        $('.product-buy ul li.cart-button').removeClass('hidden');
                    }
                });
            });
        }
    },
    technologyDetailInit: function () {
        $(".tech-major").fitVids();
    },
    environmentalInit: function () {
        $(".enviro-video").fitVids();
    },
    blogInit: function () {
        // CATEGORY TREE VIEW ON BLOG PAGES
        $(".widget_mycategoryorder ul").treeview({
            persist: "location",
            collapsed: true,
            unique: false,
            animated: "fast"
        });
    },
    blogSingleInit: function () {
        var self = this;
        $(".blog-post .entry-content").fitVids();
        // check for gallery
        if ($('.gallery')) {
            // set up gallery slider for thumbnails
            gallerySlider = $('.gallery .gallery-thumbnails').bxSlider({
                slideWidth: 100,
                minSlides: 2,
                maxSlides: 20,
                slideMargin: 10,
                controls: true,
                pager: false,
                mode: 'horizontal',
                moveSlides: 2,
                infiniteLoop: false,
                hideControlOnEnd: true,
                onSliderLoad: function(currentIndex){
                    var currentSlide = $('.gallery .gallery-thumbnails li').eq(currentIndex);
                    loadGalleryImage(currentSlide.find('.gallery-icon a'));
                }
            });
            // assign click events to gallery thumbnails
            $('.gallery .gallery-thumbnails li .gallery-icon a').click(function (e) {
                e.preventDefault();
                e.stopPropagation(); // kill even from firing further
                loadGalleryImage($(this));
            });
            // resize gallery based on new image height, it's responsive
            $(window).on('resize.gallery', function() {
                var imgHeight = $('.gallery .gallery-viewer .gallery-viewer-image img').height();
                $('.gallery .gallery-viewer .gallery-viewer-image').clearQueue()
                $('.gallery .gallery-viewer .gallery-viewer-image').animate({height: imgHeight}, 500);
            });
        }
        // gallery functionality to load new images
        function loadGalleryImage(imageLink) {
            var largeImage, largeImageCaption;
            // get the image src
            largeImage = '<a href="' + $(imageLink).attr('href') + '" target="_blank"><img src="' + $(imageLink).attr('href') + '" /></a>';
            $('.gallery .gallery-viewer .gallery-viewer-image').html(largeImage);
            // get the image caption
            largeImageCaption = $(imageLink).parent().parent().find('.gallery-caption').html();
            if (largeImageCaption == undefined) {
                largeImageCaption = $(imageLink).find('img').attr('alt');
            }
            largeImageCaption = '<p>' + largeImageCaption + '</p>';
            $('.gallery .gallery-viewer .gallery-viewer-caption').html(largeImageCaption);
            // wait for load and set the correct height
            $(".gallery .gallery-viewer .gallery-viewer-image img").one('load', function() {
                var imgHeight = $('.gallery .gallery-viewer .gallery-viewer-image img').height();
                $('.gallery .gallery-viewer .gallery-viewer-image').animate({height: imgHeight}, 500);
            }).each(function() {
                if(this.complete) $(this).load();
            });
        }
        // BEGIN CODE FOR 2 COLUMN LAYOUT THAT FIXES POSITIONS WHEN SCROLLED PAST
        // check browser width and perform appropriate actions on 2 column layout
        function checkPageWidth() {
            if (self.utilities.getMediaWidth() < 980) {
                // if we're less than 980 turn off scroll listener and reset dom
                $(window).off('scroll.blogScroll');
                // reset all css
                $('#sidebar').css({
                    position: 'static',
                });
                $('#sidebar .sidebar-wrapper').css({
                    position: 'static',
                    width: '100%'
                });
                $('article.post').css({
                    position: 'static'
                });
                $('article.post .post-wrapper').css({
                    position: 'static',
                    width: '100%'
                });
            } else {
                // if we're bigger than 980 listen for scroll and run check
                $(window).off('scroll.blogScroll');
                $(window).on('scroll.blogScroll', function() {
                    checkScroll();
                });
                checkScroll();
            }
        }
        // on page scroll check the positioning of elements
        function checkScroll() {
            // set up variables
            var post, postHeight, sidebar, sidebarHeight, windowScrollTop, windowHeight;
            post = $('article.post');
            postHeight = post.height();
            postWrapper = $('article.post .post-wrapper');
            postWrapperHeight = postWrapper.height();
            sidebar = $('#sidebar');
            sidebarHeight = sidebar.height();
            sidebarWrapper = $('#sidebar .sidebar-wrapper');
            sidebarWrapperHeight = sidebarWrapper.height();
            windowScrollTop = $(window).scrollTop();
            windowHeight = $(window).height();
            // check to see which column is longer
            if(sidebarHeight < postHeight) {
                // if sidebar is shorter, do this
                if (windowScrollTop + windowHeight > post.offset().top + sidebarWrapperHeight) {
                    // we've reached the bottom of the sidebar, so anchor it
                    // find the appropriate position for the sidebar
                    // var bottomPosition = post.offset().top + postHeight - windowScrollTop - windowHeight;
                    // set the position
                    sidebarWrapper.css({
                        position: 'fixed',
                        bottom: '0px',
                        width: sidebar.width()
                    });
                    // if we can see the footer, fix the sidebar to bottom of section
                    if (isInView('footer')) {
                        sidebar.css({
                            position: 'absolute',
                            bottom: '-50px',
                            right: '0px'
                        });
                        sidebarWrapper.css({
                            position: 'static',
                            width: '100%'
                        });
                    }
                } else {
                    // we're at the top
                    sidebar.css({
                        position: 'static',
                    });
                    sidebarWrapper.css({
                        position: 'static',
                        width: '100%'
                    });
                }
            } else {
                // if post is shorter, do this
                if (windowScrollTop + windowHeight > sidebar.offset().top + postWrapperHeight) {
                    // we've reached the bottom of the post, so anchor it
                    // find the appropriate position for the post
                    // var bottomPosition = sidebar.offset().top + sidebarHeight - windowScrollTop - windowHeight;
                    // set the position
                    postWrapper.css({
                        position: 'fixed',
                        bottom: '0px',
                        width: post.width()
                    });
                    // if we can see the footer, fix the post to bottom of section
                    if (isInView('footer')) {
                        post.css({
                            position: 'absolute',
                            bottom: '-50px',
                            left: '0px'
                        });
                        postWrapper.css({
                            position: 'static',
                            width: '100%'
                        });
                    }
                } else {
                    // we're at the top
                    post.css({
                        position: 'static'
                    });
                    postWrapper.css({
                        position: 'static',
                        width: '100%'
                    });
                }
            }
        }
        // check if element is in view
        function isInView(elem) {
            var docViewTop = $(window).scrollTop(); //num of pixels hidden above current screen
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top; //num of pixels above the elem
            var elemBottom = elemTop + $(elem).height();
            return ((elemTop >= docViewTop && elemTop <= docViewBottom));
        }
        // on resize check what the width of the browser is
        $(window).on('resize.blogScroll', function() {
            checkPageWidth();
        });
        $(window).load(function(){
            checkPageWidth();
        });
    },
    teamDetailsInit: function () {
        var self = this;
        // render social content grid items
        self.utilities.socialContentGridItemsInit();
    },
    shoppingCartInit: function () {
        var self, lang, regionCookie;
        self = this;

        Shopatron('#shopping-cart').getCart({
            imageWidth: 100,
            imageHeight: 100
        },{
            success: function(cartData) {},
            error: function() {},
            complete: function() {}
        });
        // check for the region
        regionCookie = self.utilities.cookie.getCookie('libtech_region');
        if (regionCookie != null || regionCookie != "") {
            lang = regionCookie;
        } else {
            lang = 'us';
        }
        // update links on page
        if (lang === 'ca') {
            $("a.link-ordering-info").prop("href", "http://libtec-ca.shptron.com/home/ordering/4374.5.1.2");
            $("a.link-return-policy").prop("href", "http://libtec-ca.shptron.com/home/policies/4374.5.1.2#Returns");
        } else {
            $("a.link-ordering-info").prop("href", "http://lib-tech.shptron.com/home/ordering/4374.4.1.1");
            $("a.link-return-policy").prop("href", "http://lib-tech.shptron.com/home/policies/4374.4.1.1#Returns");
        }
        // region selector trigger
        $('.link-region-selector').click(function (e) {
            e.preventDefault();
            e.stopPropagation(); // kill even from firing further
            if (navigator.cookieEnabled === false) {
                alert('Enable cookies in your browser in order to select your region.');
            } else {
                self.regionSelectorOverlayInit();
            }
        });
    },
    quickCartInit: function () {
        Shopatron.getCart({
            success: function (data, textStatus) {
                var itemsInCart = 0;
                // find quantity of items in cart
                $.each(data.cartItems, function (key, value) {
                    itemsInCart += parseInt(value.quantity);
                });
                $('#quick-cart a span').html(itemsInCart);
            },
        });
    },
    utilities: {
        cookie: {
            getCookie: function (name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i=0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                }
                return null;
            },
            setCookie: function (name, value, days) {
                var date, expires;
                if (days) {
                    date = new Date();
                    date.setTime(date.getTime()+(days*24*60*60*1000));
                    expires = "; expires="+date.toGMTString();
                } else {
                    expires = "";
                }
                document.cookie = name + "=" + value + expires + "; path=/";
            }
        },
        pageScroll: function (hash) {
            // Smooth Page Scrolling, update hash on complete of animation
            $('html,body').animate({scrollTop: $(hash).offset().top},'slow', function () { window.location = hash; });
        },
        getMediaWidth: function () {
            var self = this, width;
            // Check on this with gavin
            /*
            if (typeof matchMedia !== 'undefined') {
                width = self.bruteForceMediaWidth();
            } else {
            */
                width = window.innerWidth || document.documentElement.clientWidth;
            //}
            return width;
        },
        bruteForceMediaWidth: function () {
            var i = 0,
            found = false;
            while (!found) {
                if (matchMedia('(width: ' + i + 'px)').matches) {
                    found = true;
                } else {
                    i++;    
                }
                // Prevent infinite loop if something goes horribly wrong
                if (i === 9999) {
                    break;
                }
            }
            return i;
        },
        featuredSliderInit: function () {
            var slider = $('.featured-slider .bxslider').bxSlider({
                video: true,
                useCSS: false,
                auto: true,
                autoHover: true,
                speed: 500,
                randomStart: true,
                controls: false,
                mode: 'horizontal',
                onSlideBefore: function(slideElement, oldIndex, newIndex){
                    var prevSlide, videoPlayer;
                    prevSlide = $('.featured-slider .bxslider li').eq(oldIndex + 1);
                    prevSlide.removeClass('active');
                    videoPlayer = prevSlide.find(".video-container");
                    if(videoPlayer.length > 0) {
                        videoPlayer.remove();
                        slider.startAuto();
                    }
                },
                onSlideAfter: function(slideElement, oldIndex, newIndex){
                    slideElement.addClass('active');
                }
            });
            $('.featured-slider .bxslider li a.video-link').click(function (e) {
                e.preventDefault();
                slider.stopAuto();
                var link, vimeoID, vimeoEmbed;
                link = $(this).attr("href");
                vimeoID = link.substr(link.lastIndexOf("/") + 1);
                vimeoEmbed = '<div class="video-container"><iframe src="http://player.vimeo.com/video/' + vimeoID + '?title=0&amp;byline=0&amp;portrait=0&amp;color=fff100&amp;autoplay=1" width="940" height="529" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>';
                // make sure video is not already embedded
                if($(this).find(".video-container").length == 0)
                    $(this).prepend(vimeoEmbed).fitVids();
            });
        },
        socialContentGridItemsInit: function () {
            // add randomize function
            $.fn.randomize = function(selector){
                var $elems = selector ? $(this).find(selector) : $(this).children(),
                $parents = $elems.parent();
                $parents.each(function(){
                    $(this).children(selector).sort(function(){
                        return Math.round(Math.random()) - 0.5;
                    }).remove().appendTo(this);
                });
                return this;
            };
            // feeds/instagram/?username=libtechnologies&limit=5
            // get instagram username
            instagramUsername = $('.content-grid').attr('data-instagram');
            // grab instagram photos
            $.ajax({
                dataType: "json",
                url: '/feeds/instagram/?username=' + instagramUsername + '&limit=3',
                success: function (photosJSON) {
                    var photosData = photosJSON.data;
                    for (var i = 0; i < photosData.length; i++) {
                        var photoData, listItem;
                        photoData = photosData[i];
                        // set up instagram list item
                        listItem = '<li class="grid-item instagram item-' + i + '"><div class="grid-item-wrapper"><a href="' + photoData.link + '" target="_blank"><div class="item-copy"><p>' + photoData.caption.text + '</p></div><div class="item-image"><img src="' + photoData.images.low_resolution.url + '" /></div><div class="clearfix"></div></a></div></li>';
                        // add list item to content grid
                        $('.content-grid ul').append(listItem);
                    }
                    // randomize content grid
                    $('.content-grid ul').randomize('li');
                }
            });
            // feeds/facebook/?username=libtech&limit=8
            // get facebook username
            facebookUsername = $('.content-grid').attr('data-facebook')
            // grab facebook posts
            $.ajax({
                dataType: "json",
                url: '/feeds/facebook/?username=' + facebookUsername + '&limit=6',
                success: function (postsJSON) {
                    var postsData, totalItems;
                    postsData = postsJSON.data;
                    totalItems = 0;
                    for (var i = 0; i < postsData.length; i++) {
                        var postData, listItem;
                        postData = postsData[i];
                        if (postData.type != "status") {
                            // set up facebook list item
                            listItem = '<li class="grid-item facebook item-' + totalItems + '"><div class="grid-item-wrapper"><a href="' + postData.link + '" target="_blank"><div class="facebook-wrapper"><div class="facebook-header"><div class="facebook-profile"><img src="https://graph.facebook.com/' + facebookUsername + '/picture" /></div><p class="facebook-name">' + postData.from.name + '</p><p class="facebook-time">' + postData.created_time + '</p><div class="clearfix"></div></div><div class="facebook-photo"><img src="' + postData.picture + '" /></div><p class="facebook-likes">' + postData.likes.count + ' people <span>like this</span></p><p class="facebook-excerpt">' + postData.message + '</p></div><div class="facebook-aspect-ratio"><img src="/wp-content/themes/libtech_2/_/img/square.gif" /></div><div class="clearfix"></div></a></div></li>';
                            // add list item to content grid
                            $('.content-grid ul').append(listItem);
                            totalItems ++;
                        }
                        if (totalItems == "3")
                            break;
                    }
                    // randomize content grid
                    $('.content-grid ul').randomize('li');
                }
            });
        },
        filterList: function (productListing) {
            var filterArray = new Array(); // set up array for recording filter options
            $('.product-filtering > li.filters').each( function() { // loop through each filter group
                if (filterArray.length < 1) { // first ul of filters have not been added yet, so lets do it
                    $(this).find('ul > li[data-filter]').each( function() {
                        var filterItem = $(this);
                        if (filterItem.hasClass('selected')) {
                            filterArray.push(filterItem.attr('data-filter')); // add filters to array to track
                        }
                    });
                } else { // first list of filters have been added, now build upon them
                    var filterArrayTemp, filterSet;
                    filterArrayTemp = new Array(); // new array to update filterArray after it's built based on filterArray and new filters to concatinate
                    $(this).find('ul > li[data-filter]').each( function() {
                        var filterItem = $(this);
                        if (filterItem.hasClass('selected')) {
                            filterSet = true; // mark that we found another filter so we need to update the filterArray
                            for (var i=0; i<filterArray.length; i++) {
                                filterArrayTemp.push(filterArray[i] + filterItem.attr('data-filter')); // concatinate current filters with new
                            }
                        }
                    });
                    if (filterSet == true) {
                        filterArray = filterArrayTemp.slice(0); // update main array
                    }
                }
            });
            // build filterList string
            filterList = ""; // default to no filter
            for (var i=0; i<filterArray.length; i++) {
                if (i == 0) { // first item has no commas
                    filterList = filterArray[i];
                } else {
                    filterList += ", " + filterArray[i];
                }
            }
            productListing.isotope({ filter: filterList }); // submit filter to isotope
            // should look something like this - { filter: ".womens.Narrow, .youth.BTX" }
        }
    }
};