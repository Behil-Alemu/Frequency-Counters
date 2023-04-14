// add whatever parameters you deem necessary
function separatePositive(arr) {
	let newArray = [];
	for (let i in arr) {
		if (Math.sign(arr[i]) === -1) {
			newArray.push(arr[i]);
		}
		if (Math.sign(arr[i]) === 1) {
			newArray.unshift(arr[i]);
		}
	}

	console.log(newArray);
}
