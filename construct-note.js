// add whatever parameters you deem necessary
// letter ="ctascvsdsh" message= "chat" return true
// letter ="jsfiu"  message  = "cart" return false

function createFrequencyCounter(array) {
	let frequencies = new Map();

	for (let val of array) {
		let valCount = frequencies.get(val) || 0;
		frequencies.set(val, valCount + 1);
	}

	return frequencies;
}

function constructNote(msg, letter) {
	let msgFreqs = createFrequencyCounter(msg);
	let letterFreqs = createFrequencyCounter(letter);
	console.log(msgFreqs.values());
	console.log(letterFreqs.values());

	for (let [ letter, count ] of msgFreqs) {
		console.log(count);
		if (letterFreqs.has(letter) === true) {
			return true;
		} else if (count === letterFreqs.values()) {
			return true;
		} else {
			return false;
		}
	}
}
