/**
 * Created by Nader on 4/1/2015.
 */

var ray = (function () {

    var score = 0
        , dude = {
            location: {x: 30, y: 30}
            , direction: {x: 1, y: 0}
            , step: 2
            , blockSize: 2
        };

    /**
     * Init
     */
    function init() {
        input.init();
        window.addEventListener('key-up', function() { dude.location.y -= dude.step });
        window.addEventListener('key-down', function() { dude.location.y += dude.step });
        window.addEventListener('key-left', function() { dude.location.x -= dude.step });
        window.addEventListener('key-right', function() { dude.location.x += dude.step });
        animate();
    }

    /**
     * Draw
     */
    function animate() {
        canvas.clear();
        canvas.rectPercent(dude.location.x, dude.location.y, dude.blockSize, dude.blockSize);
        window.requestAnimationFrame(animate);
    }

    /**
     * Has the snake collided with itself?
     */
    function hasCollision() {
        return false;
    }

    return {
        init: init
    }
})();