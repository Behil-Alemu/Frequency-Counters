// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	let str1 = num1.toString().split('').length;
	let str2 = num2.toString().split('').length;
	if (str1 === str2) {
		return true;
	} else {
		return false;
	}
}
