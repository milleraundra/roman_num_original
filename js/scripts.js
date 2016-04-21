var romanize = function(num) {
// debugger;
var romNum = [];
var values = [1000, 500, 100, 50, 10, 5, 1];
var letters = ["M", "D", "C", "L", "X", "V", "I"];
if (num >= 4000) {
	return false;
}

else {

	for (var i = 0; i < values.length; i++) {
		while (num >= values[i]){
			romNum.push(letters[i]);
			num -= values[i];
		}
	}

	romNum = romNum.join("");

	var romNum = romNum.replace(/IIII/g, 'IV');
	var romNum = romNum.replace(/XXXX/g, 'XL');
	var romNum = romNum.replace(/CCCC/g, 'CD');

return romNum;

	}

}

$(document).ready(function() {
	$('form#question').submit(function(event) {
		event.preventDefault();
		var number = parseInt($('#num').val());
		console.log(number);
		if(number >= 4000) {
			$('#result').text("Please enter a number less than 4000");
		} else if (number === 0 || number === null) {
			$('#result').text("Please enter a number");
		} else {
			newNumber = romanize(number);
			$('#result').text("Your number in Roman Numerals is " + newNumber);
		}
	})
})
