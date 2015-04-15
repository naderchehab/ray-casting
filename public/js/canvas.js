/**
 * Created by Nader on 4/1/2015.
 */

var canvas = (function() {
    var canvasEl = document.getElementById('canvas')
        , ctx = canvasEl.getContext('2d');

    function init() {
        window.addEventListener('resize', resize, false);
        resize();
    }

    function clear() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }

    function resize() {
        var size = Math.min(window.innerHeight, window.innerWidth);
        canvasEl.height = size * 0.95;
        canvasEl.width = size * 0.95;
    }

    function rectPercent(x, y, width, height) {
        var canvasWidth = canvasEl.width/100;
        var canvasHeight = canvasEl.height/100;
        ctx.beginPath();
        //ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
        ctx.fillStyle = '#25a233';
        ctx.rect(x*canvasWidth, y*canvasHeight, width*canvasWidth, height*canvasHeight);
        ctx.fill();
        ctx.closePath();
    }

    function castRays(x, y) {
        var canvasWidth = canvasEl.width/100;
        var canvasHeight = canvasEl.height/100;
        ctx.beginPath();
        ctx.moveTo(x*canvasWidth, y*canvasHeight);
        ctx.strokeStyle = '#25a233';
        ctx.lineTo(450, 500);
        ctx.stroke();
    }

    return {
        init: init
        , clear: clear
        , resize: resize
        , rectPercent: rectPercent
        , castRays: castRays
    }

})();