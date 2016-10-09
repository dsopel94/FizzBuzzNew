$(document).ready(function(){

	function fizzBuzz(n) {
  while (isNaN(parseInt(n))) {
    n = parseInt(prompt("Please enter a number: "));
  }

  for (var i = 1; i <= n; i++) {

    if (i % 15 === 0) {
      $("#fb").append('<p>' + 'fizz buzz' + '</p>');
      continue;
    } else if (i % 3 === 0) {
      $("#fb").append('<p>' + 'fizz' + '</p>');
      continue;
    } else if (i % 5 === 0) {
      $("#fb").append('<p>' + 'buzz' + '</p>');
      continue;
    }
    $("#fb").append('<p>' + i + '</p>');
  }

};

fizzBuzz();

});