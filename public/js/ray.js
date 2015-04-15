/**
 * Created by Nader on 4/1/2015.
 */

var ray = (function () {

    var score = 0
        , player = {
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
        window.addEventListener('key-up', function() { player.location.y -= player.step });
        window.addEventListener('key-down', function() { player.location.y += player.step });
        window.addEventListener('key-left', function() { player.location.x -= player.step });
        window.addEventListener('key-right', function() { player.location.x += player.step });
        animate();
    }

    /**
     * Draw
     */
    function animate() {
        canvas.clear();
        canvas.rectPercent(player.location.x, player.location.y, player.blockSize, player.blockSize);
        canvas.castRays(player.location.x, player.location.y);
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