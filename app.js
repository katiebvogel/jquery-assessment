$(document).ready(function(){

//click-me button to make div appear
//it should appear with a background color of green
//and we should see text and two buttons
// Also, the number of clicks should increment for each time a click occurs
  var clickcount = 0;
  var thing = $('.appearing');

  $('.load').on('click', function() {
     clickcount++;
     thing.css('visibility','visible');
     var $domElement = $('#clickNumber');
     var currentNumber = $domElement.text();
     var newClicks = parseInt(currentNumber)+ 1;
     $domElement.text(newClicks);
});


//change color button changes the div background-color to red. also, the button-toggle value will alternate between 1 and 2 depending on whether the div is red or green.
$('.toggle').on('click', function() {
 if (clickcount%2 == 1) {
   thing.css('background-color','green');
   thing.attr('value', 1);
   console.log(thing.attr('value'));
 } else {
   thing.css('background-color','red');
   thing.attr('value', 2);
   console.log(thing.attr('value'));
 }
   clickcount++;
});

//remove button
//this will allow the div to be removed
//once the REMOVE button has been clicked, we can not make the div re-appear.
      // $('.remove').on('click', function(){
      //   thing.remove();
      //
      //   });

//This might be a better? REMOVE button.  this will allow the div to appear and reappear.
      $('.remove').on('click', function(){
        thing.css('visibility', 'hidden');

        });

}); //document ready close
