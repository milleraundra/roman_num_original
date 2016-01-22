var romanize = function(num) {
// debugger;
var romNum = [];

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
debugger;
	romNum = romNum.join("");

	var romNum = romNum.replace(/[IIII]/g, 'IV');

return romNum;

	}

}
