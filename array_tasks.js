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
		// let result = arr.filter(number => number !== valueToRemove);
		// return result;
		let filtered = arr.filter(function(item) {
			return item !== valueToRemove;
		});
		return filtered;
	},

	findIndexesOf: function (arr, itemToFind) {
		let indexArray = [];
		arr.filter(function(item, index){
			if(item == itemToFind) {
				indexArray.push(index);
			}
		});
		return indexArray;

	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let total = 0;
		arr.forEach(function(number) {
			if(number % 2 == 0) {
				total += (number ** 2);
			}
		})
		return total;
	}

}

module.exports = arrayTasks
