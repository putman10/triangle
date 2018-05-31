$(document).ready(function() {
  $(".triangleform").submit(function(event) {
  var side1 = parseInt($("#inputside1").val());
  var side2 = parseInt($("#inputside2").val());
  var side3 = parseInt($("#inputside3").val());

  if (side1 === side2 && side2 === side3) {
    $('.result').text("Equilateral");
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    $('.result').text("Isosceles");
  } else if (side1 != side2 || side2 != side3 || side3 != side1) {
    $('.result').text("Scalene");
  } else {
    $('.result').text("Not a triangle");;
  }

  event.preventDefault();
  });
});
