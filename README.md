#Vanilla javascript swipe detection
A really quick small script for detecting a swipe (mouse also supported) on an element.
Cross browser compatibility hasn't been fully checked.

##Usage
See demo.html, or:

<div id="swipe">Swipe me</div>
<script src="vswipe.js"></script>
<script>
swipe.attach("swipe", function(swipe){
  if ( swipe > 0 ) {
    var direction = "";
    switch ( swipe ) {
      case 1:
      direction = "left";
      break;
      case 2:
      direction = "right";
      break;
      case 3:
      direction = "up";
      break;
      case 4:
      direction = "down";
      break;
    }
    alert("You swiped " + direction);
  }
  });
</script>
```
