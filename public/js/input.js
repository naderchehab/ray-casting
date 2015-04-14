/**
 * Created by Nader on 4/9/2015.
 */

var input = (function () {

    function init() {
        window.addEventListener('keydown', keyDownHandler, false);
        //window.addEventListener('touchstart', touchStartHandler.bind(snake), false);
    }

    /**
     * Keydown event (Keyboard)
     */
    function keyDownHandler(e) {
        e = e || window.event;
        var event;
        switch (e.keyCode) {
            case 'w'.charCodeAt(0):
            case 'W'.charCodeAt(0):
            case 38: // up
                event = new Event('key-up');
                window.dispatchEvent(event);
                break;
            case 's'.charCodeAt(0):
            case 'S'.charCodeAt(0):
            case 40: // down
                event = new Event('key-down');
                window.dispatchEvent(event);
                break;
            case 'a'.charCodeAt(0):
            case 'A'.charCodeAt(0):
            case 37: // left
                event = new Event('key-left');
                window.dispatchEvent(event);
                break;
            case 'd'.charCodeAt(0):
            case 'D'.charCodeAt(0):
            case 39: // right
                event = new Event('key-right');
                window.dispatchEvent(event);
                break;
        }
    }

    return {
        init: init
    }
})();