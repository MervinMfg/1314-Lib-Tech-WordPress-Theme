    /*

    Lib Tech - lib-tech.com
    VERSION 2.0
    AUTHOR brian.behrens@mervin.com

    DEPENDENCIES:
    - jQuery v1.9.1
    - Modernizr 2.6.2

*/

var LIBTECH = LIBTECH || {};

LIBTECH.main = {
    config: {
        menuState: 'closed'
    },
    init: function () {
        var self = this;
        self.initShopatron(); // init shopatron JS
        self.regionSelectorInit(); // init the region selector
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
        } else if ($('body').hasClass('page-template-page-history-php')) {
            self.historyInit();
        } else if ($('body').hasClass('page-id-9')) {
            self.environmentalInit();
        } else if ($('body').hasClass('blog') || $('body').hasClass('search') || $('body').hasClass('archive') || $('body').hasClass('error404')) {
            self.blogInit();
        } else if ($('body').hasClass('single-post')) {
            self.blogInit();
            self.blogSingleInit();
        } else if ($('body').hasClass('page-template-page-support-faq-php')) {
            self.faqInit();
        }
    },
    initShopatron: function () {
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
                $('#link-privacy').attr('href', 'http://libtec-ca.shptron.com/home/privacy/4374.5.1.2');
                $('#link-policies').attr('href', 'http://libtec-ca.shptron.com/home/policies/4374.5.1.2');
                $('#link-login').attr('href', 'http://libtec-ca.shptron.com/account/?mfg_id=4374.5&language_id=1');
                $('#link-safety').attr('href', 'http://libtec-ca.shptron.com/home/security/4374.5.1.2');
                $('#link-returns').attr('href', 'http://libtec-ca.shptron.com/home/policies/4374.5.1.2#Returns');
                $('#link-ordering').attr('href', 'http://libtec-ca.shptron.com/home/ordering/4374.5.1.2');
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
            url: "//mediacdn.shopatron.com/media/js/product/shopatronCart-1.0.min.js",
            dataType: "script",
            success: function (data) {
                // init the shopatron page elements
                self.quickCartInit();
                if ($('body').hasClass('page-template-page-shopping-cart-php')) {
                    self.shoppingCartInit();
                }
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
            } else if (lang === 'int') {
                $("body").addClass("international");
                $(".country-int").addClass("selected");
            } else {
                $(".country-us").addClass("selected");
            }
        } else {
            if (navigator.cookieEnabled === true) {
                // if no region cookie has been set, open selector
                //self.regionSelectorOverlayInit();
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
    homeInit: function () {
        var self, instagramUsername, facebookUsername;
        self = this;
        self.utilities.featuredSliderInit();
    },
    homeSportInit: function () {
        var self = this;
        self.utilities.featuredSliderInit();

        var slider = $('.product-slider .bxslider').bxSlider({
            slideWidth: 220,
            minSlides: 2,
            maxSlides: 8,
            slideMargin: 10,
            auto: true,
            autoHover: true,
            speed: 500,
            randomStart: true,
            controls: true,
            pager: false,
            mode: 'horizontal',
            moveSlides: 2
        });

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
        // http://stage3-www.lib-tech.com/feeds/instagram/?username=libtechnologies&limit=5
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
        // http://stage3-www.lib-tech.com/feeds/facebook/?username=libtech&limit=8
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
    productOverviewInit: function () {
        var slider = $('.featured-product-slider .bxslider').bxSlider({
            auto: true,
            autoHover: true,
            speed: 800,
            randomStart: false,
            slideMargin: 20,
            controls: true,
            pager: false,
            mode: 'horizontal',
            adaptiveHeight: true,
            onSliderLoad: function (currentIndex) {
                console.log('index: ' + currentIndex);
                $('.featured-product-slider .bxslider > li').eq(currentIndex+1).addClass('active');
            },
            onSlideBefore: function (slideElement, oldIndex, newIndex){
                slideElement.addClass('active');
                $('.featured-product-slider .bxslider > li').eq(oldIndex+1).removeClass('active');
            }
        });
    },
    shoppingCartInit: function () {
        var self, lang, regionCookie;
        self = this;

        shopatron.getCart({
            template: 'default'
        }, {
            view: 'html',
            location: 'shopping-cart',
            success: function (data, textStatus) {},
            error: function (textStatus, errorThrown) {},
            complete: function (textStatus) {}
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
            self.regionSelectorOverlayInit();
        });
    },
    quickCartInit: function () {
        shopatron.getQuickCart({
            cartLink: '/shopping-cart/'
        }, {
            view: 'json',
            success: function (data, textStatus) {
                var itemsInCart = 0;
                // find quantity of items in cart
                $.each(data.cartItems, function (key, value) {
                    itemsInCart += parseInt(value.quantity);
                });
                $('#quick-cart a span').html(itemsInCart);
            },
            error: function (textStatus, errorThrown) {},
            complete: function (textStatus) {}
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
        }
    }
};