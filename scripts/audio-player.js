(function (global) {
    'use strict';

    function playSound(src) {
        let audio = new Audio(src);
        audio.load();
        audio.play();
    }

    global.AudioPlayer = {
        playSound
    };

})(window);
