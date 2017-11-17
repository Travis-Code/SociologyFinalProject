(function(){
    "use strict";

    module.exports = function(options) {
        return {
            ease: options.ease || Phaser.Easing.Exponential.InOut,
            // duration: options.duration || 500,
            duration: options.duration || 1500,

            intro: options.intro || false,
            props: options.props || {}
        }
    };
}());
