// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
	let arrObject = {};
	for (let val of arr1) {
		arrObject[val] = 0;
	}

	for (let val2 in arr2) {
		arrObject[val2] = arr2[val2];
	}

	console.log(arrObject);

	return arrObject;
}
