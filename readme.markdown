# editor-timeline

timeline for multimedia editors

# example

``` js
var keycode = require('keycode');
var timeline = require('editor-timeline')(200);
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
```

with some html:

``` html
<html>
  <style>
    #timeline { height: 50px; }
  </style>
  <body>
    <button id="play">&gt;</button>
    <div id="timeline"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

bundle with [browserify](http://browserify.org):

```
browserify timeline.js > bundle.js
```

# methods

``` js
var timeline = require('editor-timeline')
```

## var t = timeline(pxps)

Create a new timeline `t` given `pxps`, the number of pixels per second.

## t.appendTo(target)

Append the timeline element to the html element or query string `target`.

## var m = t.mark()

Create a new mark `m`.

## t.select(id)

Select the mark at `id`.

## t.removeMark(id)

Remove the mark at `id`.

## t.start()

Start playing.

## t.stop()

Stop playing.

## t.toggle()

Start playing if not playing, otherwise stop playing.

## t.setTime(n)

Set the current time `n` in seconds.

## t.getTime()

Get the current time in seconds.

# events

## t.on('mark', function (m, elem) {})

When there is a new mark, this event fires.

## t.on('show', function (m, index) {})

When the mark is activated, this event fires.

## t.on('remove', function (m, index) {})

When a mark is removed, this event fires. 

# install

With [npm](https://npmjs.org) do:

```
npm install editor-timeline
```

# license

MIT
