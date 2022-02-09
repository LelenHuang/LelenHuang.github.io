//require('./style.css');
import ease from 'eases/cubic-in-out';

var ham = document.querySelector('#ham')
var menuPane = document.querySelector('.menu-pane')
var body = document.body
var arrow = document.querySelector('.arrow')

var toggleMenu = () => {
  var classes = body.classList;
  if (classes.contains('menu-pane-hidden')) {
    classes.remove('menu-pane-hidden');
  } else {
    classes.add('menu-pane-hidden');
  }
}

ham.addEventListener('click', toggleMenu);
menuPane.addEventListener('click', toggleMenu);

if (arrow) {
  arrow.addEventListener('click', function() {
    var start = document.body.scrollTop;
    var dist = (document.querySelector('.maincontent').offsetTop) - start;
    var length = 60;
    function tick(i) {
      if (i < length) {
        document.body.scrollTop = start + dist * ease(i/length);
        requestAnimationFrame(() => { tick(i + 1)})
      }
    }
    tick(0);
  });
}