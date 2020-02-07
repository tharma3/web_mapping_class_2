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

//data types

// // number
// var number = 0
//
// //string
// var name = 'Chris'
//
// //boolean
// var rainy = true
//
// console.log(number, typeof number)
// console.log(name, typeof name)
// console.log(rainy, typeof rainy)
//
// //use the ! operator to negate a boolean
// console.log('opposite of rainy', !rainy)
// console.log('add 5', number + 5)
// var someNewNumber = number + 5
//
// //loops can run code several times
//
// var timesToRun = 10
//
// for (var i = 0; i < timesToRun; i++) {
//   //the code in here will run until the clause is no longer true
//   console.log(someNewNumber)
//   someNewNumber = someNewNumber + 100
// }
//
// console.log('after loop', someNewNumber)
//
// //arrays (let, const, var)
// var arrayOfString = ['Chris', 'Foo', 'Desk', 'NYU', 'Water']
// var arrayOfNumbers = [27, 405, 31, 24]
//
// console.log('log the array', arrayOfString)
//
// //you can reference by their index
//
// console.log('get third thing', arrayOfString[2])
//
// //loop over the array using for each
// arrayOfString.forEach(function(string) {
//   console.log(string)
// })
//
// console.log('mix things from two arrays', arrayOfString[3], arrayOfNumbers[2])
//
// // template literal
// var myCombinedString = `This combines the string ${arrayOfString[1]} and the number ${arrayOfNumbers[0]}`
//
// arrayOfString.forEach(function(string) {
//   console.log(`this is going to write the same template with ${string} each time`)
//   $()
// })

//instead of hardcoding artist and album names, let's use jquery to populate the buttons with code
//
// var albumData = [
//   {
//     artist: 'sublime',
//     album: 'self-titled',
//     albumcoverURL: 'url'
//   },
//   {
//     artist: 'weezer',
//     album: 'blue album',
//     albumcoverURL: 'url'
//   },
//   {
//     artist: 'metallica',
//     album: 'whatever',
//     albumcoverURL: 'url'
//   },
//   {
//     artist: 'beatles',
//     album: 'white album',
//     albumcoverURL: 'url'
//   }
// ]
//
// albumData.forEach(function(album) {
//   var html = `
//   <div class ="album-list-item", data-album-cover"`
//   PUT THE REST OF THE DIV STUFF IN HERE
//   $('album-list').append(html)
// })

//gotta have items before you have listeners
