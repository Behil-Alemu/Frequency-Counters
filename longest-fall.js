// add whatever parameters you deem necessary
function longestFall(arr) {
	let longest = [];
	let current = [];
	for (let val in arr) {
		if (val > val + 1) {
			current.push(val);
		}
	}
	console.log(longest);
}
longestFall([ 9, 8, 7, 6, 5, 6, 4, 2, 1 ]);
