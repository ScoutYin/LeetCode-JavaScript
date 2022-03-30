/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
	n && (n += sumNums(n - 1));
	return n;
};

console.log(sumNums(3));
