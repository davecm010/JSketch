var dim = 16

$(document).ready(function() {

  make_grid(dim)

  $('button').click(function() {
    dim = prompt("Change Dimensions", "Enter a number between 1-64");
    $('.square').remove();
    make_grid(check_value(dim))
  })
});

function check_value(x) {
  if (isNaN(x)) {
    alert("This is not a number");
  } else if (x < 1) {
    return 1;
  } else if (x > 64) {
  	return 64;
  } else {
  	return x;
  }
}

function make_grid(dim) {
  for (var x = 0; x < dim; x++) {
    for (var y = 0; y < dim; y++) {
      var size = (640 / dim);
      var square = $("<div class='square'></div>");
      square.height(size);
      square.width(size);
      square.appendTo('#container');
      (square).hover(function() {
        $(this).css("background-color", "grey");
      }, function() {
        $(this).css("background-color", "black");
      })
    }
  }
}
