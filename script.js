var dim = 16

$(document).ready(function() {

  make_grid(dim)

  $('button').click(function() {
    dim = prompt("Change Dimensions", "Enter a number between 1-64");
    $('.square').remove();
    make_grid(dim);
  })
});

function check_value(x) {
  if (isNaN(x)) {
	  alert("The value entered is not a number. Default dimensions set.");
    return 16
  } else if (x < 1) {
	  return 1;
  } else if (x > 64) {
	  alert("The value entered is too large. 64 x 64 pixels set.");
  	return 64;
  } else {
  	return x;
  }
}

function make_grid(input) {
	i = check_value(input)
	for (var x = 0; x < i*i; x++) {
    (make_square(i)).appendTo('#container');
  }
}

function make_square(dimension) {
	var size = (640/dimension);
	var square = $("<div class='square'></div>");
	square.height(size);
	square.width(size);
  $(document).mousedown(function() {
     (square).bind('mouseover',function(){
         $(this).css({background:"black"});
     });
 })
 .mouseup(function() {
   (square).unbind('mouseover');
 });

 (square).mousedown(function() {
   (square).css({background:"black"});
 });

	return square;
}
