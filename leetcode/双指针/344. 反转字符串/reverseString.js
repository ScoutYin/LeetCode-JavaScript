/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 方法一：
// var reverseString = function(s) {
//     const lastIndex = s.length - 1
//     const mid = Math.floor(s.length / 2)
//     let temp

//     // 只需遍历s的一半，然后交换第i位和倒数第i位
//     for (let i = 0; i < mid; i++) {
//         // 第i位和倒数第i位不等时进行交换
//         if (s[i] !== s[lastIndex - i]) {
//             temp = s[i]
//             s[i] = s[lastIndex - i]
//             s[lastIndex - i] = temp
//         }
//     }
//     return s
// };

// 方法二：双指针
var reverseString = function (s) {
	let left = 0;
	let right = s.length - 1;
	let temp;

	while (left < right) {
		if (s[left] !== s[right]) {
			temp = s[left];
			s[left] = s[right];
			s[right] = temp;
		}
		left++;
		right--;
	}

	return s;
};

console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
