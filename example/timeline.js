var keycode = require('keycode');
var timeline = require('../')(200);
timeline.appendTo('#timeline');

window.addEventListener('keydown', function (ev) {
    var chr = keycode(ev);
    if (chr === 'k') {
        var m = timeline.mark();
        timeline.select(m.id);
    };
    if (chr === 'delete') timeline.removeMark('_active');
    if (chr === 'home') timeline.setTime(0);
    if (chr === 'space') timeline.toggle();
    if (chr === 'left') {
        ev.stopPropagation();
        ev.preventDefault();
        timeline.select('prev');
    }
    if (chr === 'right') {
        ev.stopPropagation();
        ev.preventDefault();
        timeline.select('next');
    }
});

var play = document.querySelector('#play');
timeline.on('start', function () {
    play.textContent = '||';
});
timeline.on('stop', function () {
    play.textContent = '>';
});
