var arrayTasks = {

	concat: function (arr1, arr2) {
		let expectation = arr1.concat(arr2);
		return expectation;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		const NewArr = arr.map(value => value ** 2);
		return NewArr;
	},

	sum: function (arr) {
			const total = arr.reduce((sum, item) => sum + item);
			return total;
	},

	findDuplicates: function (arr) {
		let duplicates = [];
		arr.forEach(function(number, index) {
			if (arr.indexOf(number, index + 1) > -1) {
				if (duplicates.indexOf(number) === -1) {
					duplicates.push(number);
				}
			}
		});
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {

	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
