/*

    Lib Tech - lib-tech.com
    VERSION 1.0
    AUTHOR simon.silverio@gmail.com

    DEPENDENCIES:
    - jQuery v1.10.2
    - Shopatron API v2.2.0
    - Modernizr 2.6.2
    - Respond.js

*/

var LIBTECH = LIBTECH || {};

LIBTECH.snowboardbuilder = {
    config: {
        // varName: 'value'
    },
    init: function () {
        var self = this;
        console.log('init builder');
        self.addToCartInit();
    },
    addToCartInit: function () {
        var self = this;
        $('#add-to-cart').on('click', function () {
            // call shopatron's api
            Shopatron.addToCart({
                quantity: '1', // Optional: Defaults to 1 if not set
                partNumber: '221230', // Required: This is the product that will be added to the cart.
                itemOptions: {
                    "Size": "156W",
                    "TopGraphic": "Skate Banana",
                    "SidewallColor": "Slime Green",
                    "BaseGraphic": "Skunk Ape",
                    "KnifeCutColor": "Orange",
                    "KnifeCutText": "Input Text",
                    "BadgeText": "Input Text"
                }
            }, {
                // All event handlers are optional
                success: function (data, textStatus) {
                    console.log('success');
                    $('#added').css( "display", "block" );
                },
                error: function (textStatus, errorThrown) {
                    console.log('error');
                },
                complete: function (textStatus) {
                    console.log('request complete');
                }
            });
        });
    }
};