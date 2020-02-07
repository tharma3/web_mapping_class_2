// jQuery animation example

$('#shake').click(function() {
	var random = Math.floor(Math.random() * 2)

  if (random === 0) {
  shake($('.globe'))
  }

  if (random === 1) {
  bounce($('.globe'))
  }
})

// all icons shake when button is clicked
//$('#shake').click(function() {
  //shake($('.globe'));
//});

// all icons bounce when button is clicked
//$('#bounce').click(function() {
  //bounce($('.globe'));
//});

// adaptable SHAKE function, from
// https://bradleyhamilton.com/projects/shake/index.html
function shake(thing) {
  var interval = 100;
  var distance = 10;
  var times = 8;

  for (var i = 0; i < (times + 1); i++) {
    $(thing).animate({
      left:
        (i % 2 == 0 ? distance : distance * -1)
    }, interval);
  }
  $(thing).animate({
    left: 0,
    top: 0
  }, interval);
}
// end SHAKE

// adaptable BOUNCE function, adapted from
// http://stackoverflow.com/questions/10363671/jquery-bounce-effect-on-click-no-jquery-ui
// code by "christian"
function bounce(thing) {
  var interval = 100;
  var distance = 20;
  var times = 8;
  var damping = 0.8;

  for (var i = 0; i < (times + 1); i++) {
    var amt = Math.pow(-1, i) * distance / (i * damping);
    $(thing).animate({
      top: amt
    }, 100);
  }
  $(thing).animate({
    top: 0
  }, interval);
}
// end BOUNCE

// a variable containing all the images code with NO HARD RETURNS
//var allImages = '<img id="theLion" class="animalIcon" src="http://macloo.com/images/african_animals/lion.png" alt="An animal icon"> <img id="theZebra" class="animalIcon" src="http://macloo.com/images/african_animals/zebra.png" alt="An animal icon"> <img id="theGiraffe" class="animalIcon" src="http://macloo.com/images/african_animals/giraffe.png" alt="An animal icon"> <img id="theElephant" class="animalIcon" src="http://macloo.com/images/african_animals/elephant.png" alt="An animal icon">';

// end
