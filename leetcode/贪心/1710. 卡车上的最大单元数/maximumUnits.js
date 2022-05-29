// LeetCode 原题：1710. 卡车上的最大单元数
// https://leetcode.cn/problems/maximum-units-on-a-truck/

/**
 * 既然卡车只对箱子数量有要求，那就优先可装单元数多的箱子即可
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
	// 按每个箱子可装载的单元数量从大到小排序
	boxTypes.sort((a, b) => b[1] - a[[1]]);
	// 可装单元数量
	let ans = 0;
	let length = boxTypes.length;
	for (let i = 0; truckSize > 0 && i < length; i++) {
		ans += Math.min(boxTypes[i][0], truckSize) * boxTypes[i][1];
		truckSize -= boxTypes[i][0];
	}
	return ans;
};

// test case
console.log(
	maximumUnits(
		[
			[1, 3],
			[2, 2],
			[3, 1]
		],
		4
	) === 8
);
console.log(
	maximumUnits(
		[
			[5, 10],
			[2, 5],
			[4, 7],
			[3, 9]
		],
		10
	) === 91
);
