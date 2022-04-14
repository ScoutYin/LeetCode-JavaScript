/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	let left = 0;
	let right = nums.length - 1;
	let mid;
	while (left < right) {
		mid = left + Math.floor((right - left) / 2);
		if (nums[mid] < nums[mid + 1]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return left;
};

// test case:
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
