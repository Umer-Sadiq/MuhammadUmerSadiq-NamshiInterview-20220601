counter = 1;
removecss = counter - 2;
$( function() {
  $('div').click( function() {
    if (counter <= 16) {
    if (counter <= 2) {
      $(this).toggleClass("red-cell");
      $(this).append("Box " + counter);
      counter = counter + 1;
      removecss = removecss + 1;
     }
     else {
      $(this).toggleClass("red-cell");
      $(this).append("Box " + counter);
      $("div:contains('"+removecss+"')").css("background","blue");
       counter = counter + 1;
      removecss = removecss + 1;
     }
      }
  } );
} );