var romanize = function(num) {
// debugger;
var romNum = [];
var values = [1000, 500, 100, 50, 10, 5, 1];
var letters = ["M", "D", "C", "L", "X", "V", "I"]
if (num >= 4000) {
	return false;
}

else {

	while (num >= 1000){
		romNum.push("M");
		num -= 1000;
	}
	while (num >= 500){
		romNum.push("D");
		num -= 500;
	}
	while (num >= 100){
		romNum.push("C");
		num -= 100;
	}
	while (num >= 50){
		romNum.push("L");
		num -= 50;
	}
	while (num >= 10){
		romNum.push("X");
		num -= 10;
	}
	while (num >= 5){
		romNum.push("V");
		num -= 5;
	}
	while (num >= 1){
		romNum.push("I");
		num -= 1;
	}

	romNum = romNum.join("");

	var romNum = romNum.replace(/IIII/g, 'IV');
	var romNum = romNum.replace(/XXXX/g, 'XL');
	var romNum = romNum.replace(/CCCC/g, 'CD');


return romNum;

	}

}
