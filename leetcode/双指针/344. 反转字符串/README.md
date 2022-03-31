# 题目

[344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)

# 思路

原字符串数组[s[0], s[1], s[2], ... s[len-3], s[len-2], s[len-1]]，
反转后应该为[s[len-1], s[len-2], s[len-3], ... s[2], s[1], s[0]]，
因此我们容易发现其实需要做的是将s[0]与s[len-1]交换、s[1]与s[len-2]交换...

# 代码

## 方法一

进行n/2次交换，时间复杂度O(n)，使用常数空间存储若干变量，空间复杂度O(1)

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const lastIndex = s.length - 1
    const mid = Math.floor(s.length / 2)
    let temp

    // 只需遍历s的一半，然后交换第i位和倒数第i位
    for (let i = 0; i < mid; i++) {
        // 第i位和倒数第i位不等时进行交换
        if (s[i] !== s[lastIndex - i]) {
            temp = s[i]
            s[i] = s[lastIndex - i]
            s[lastIndex - i] = temp
        }
    }
    return s
};
```

## 方法二：双指针

进行n/2次交换，时间复杂度O(n)，使用常数空间存储若干变量，空间复杂度O(1)

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	let left = 0;
	let right = s.length - 1;
	let temp;

	// left与right指针重合，停止交换
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
```