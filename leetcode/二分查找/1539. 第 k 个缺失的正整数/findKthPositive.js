/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
	let expectedValue = 1;
	let i = 0;
	let lostCount;
	while (k > 0 && i < arr.length) {
		lostCount = arr[i] - expectedValue;
		if (lostCount > 0) {
			if (k > lostCount) {
				k -= lostCount;
			} else {
				return (arr[i - 1] || 0) + k;
			}
		}
		expectedValue = arr[i] + 1;
		i++;
	}
	return arr[arr.length - 1] + k;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
